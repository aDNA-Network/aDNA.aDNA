<#
    adna node installer -- native Windows. No WSL, no Python, no prerequisites.

        irm https://adna.network/install.ps1 | iex

    With options (the PowerShell idiom for passing arguments to a remote script):

        & ([scriptblock]::Create((irm https://adna.network/install.ps1))) -Profile developer -DryRun

    WHY THIS EXISTS AS A SECOND IMPLEMENTATION
    The Unix installer is Python. Windows 11 ships no python3 -- only a Store stub -- so reusing
    it would mean making every Windows user install a ~100MB runtime before they could join a
    network. This is a native port instead. It does NOT re-implement the interesting logic: the
    persona rules and every network fact are read from the SAME shared files the Unix installer
    reads (persona_*.json and network_constants.json), so the two cannot drift on anything that
    matters. What is duplicated here is platform glue, and Windows' traps are genuinely
    different from Linux's -- admin, Wintun, Defender, SmartScreen -- so there is little overlap
    to share in the first place. conformance_test.py holds the two honest.

    ADMIN: this script does NOT need Administrator. Downloading, verifying, generating a
    keypair and writing config are all userland. Administrator is needed LATER, to install the
    Wintun virtual adapter and register the service -- steps this script deliberately stops
    before. Anything telling you to run this elevated is wrong.
#>
[CmdletBinding()]
param(
    [Alias('Profile')]                      # -Profile still works; $Profile is an automatic
    [string]$PersonaName = $(if ($env:ADNA_PROFILE) { $env:ADNA_PROFILE } else { 'developer' }),
    [string]$Prefix    = $(if ($env:ADNA_PREFIX)  { $env:ADNA_PREFIX }  else { "$env:LOCALAPPDATA\aDNA" }),
    [string]$Instance  = 'nebula-1043',
    [string]$Base      = $(if ($env:ADNA_INSTALL_BASE) { $env:ADNA_INSTALL_BASE } else { 'https://adna.network' }),
    [switch]$NoWorkspace,
    [switch]$DryRun,
    [switch]$Force
)

$ErrorActionPreference = 'Stop'
$ProgressPreference    = 'SilentlyContinue'   # Invoke-WebRequest is ~10x slower with the bar
$VERSION = '0.3.0'

# PowerShell 5.1 can still default to TLS 1.0, which GitHub refuses outright.
try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 }
catch { Write-Verbose 'Could not set TLS 1.2; on PowerShell 7 it is already the default and this property is obsolete.' }

function Say  { param($m) Write-Host "   $m" }
function Die  { param($m) Write-Host ""; Write-Host "   [X] $m" -ForegroundColor Red; Write-Host ""; exit 1 }
function Good { param($m) Write-Host "   [ok] $m" -ForegroundColor Green }

Write-Host ""
Write-Host "   aDNA node installer $VERSION (Windows)" -ForegroundColor Cyan
Write-Host ""

# -- preflight ----------------------------------------------------------------------------
if ($PSVersionTable.PSVersion.Major -lt 5) {
    Die "PowerShell 5.1 or newer is required (found $($PSVersionTable.PSVersion))."
}

$arch = switch ($env:PROCESSOR_ARCHITECTURE) {
    'AMD64' { 'amd64' }
    'ARM64' { 'arm64' }
    'x86'   { Die "32-bit Windows is not supported. This mesh needs a 64-bit OS." }
    default { Die "Unrecognised processor architecture '$env:PROCESSOR_ARCHITECTURE'." }
}

# tar.exe (bsdtar) ships with Windows 10 1803+ and is how we read the shared payload.
if (-not (Get-Command tar.exe -ErrorAction SilentlyContinue)) {
    Die "tar.exe was not found. It ships with Windows 10 1803 and newer -- this machine looks older than the minimum supported."
}

# The clock trap costs more debugging than anything else: nebula handshakes fail against a
# skewed clock and the failure looks exactly like a firewall problem.
try {
    $w32 = Get-Service w32time -ErrorAction Stop
    if ($w32.Status -ne 'Running') {
        Say "note: the Windows Time service is not running. If handshakes fail later, that is the first thing to check."
    }
} catch { Write-Verbose 'w32time is not present on this machine; skipping the clock-skew note.' }

# -- fetch + verify the shared payload ----------------------------------------------------
$tmp = Join-Path ([IO.Path]::GetTempPath()) ("adna-" + [Guid]::NewGuid().ToString('N').Substring(0, 8))
New-Item -ItemType Directory -Path $tmp -Force | Out-Null
try {
    Say "fetching shared payload"
    $payload = Join-Path $tmp 'payload.tar.gz'
    try { Invoke-WebRequest -Uri "$Base/adna-installer-$VERSION.tar.gz" -OutFile $payload -UseBasicParsing }
    catch { Die "could not download the payload from $Base -- $($_.Exception.Message)" }

    # Same discipline as the Unix bootstrap: the payload hash is pinned in THIS file, not
    # fetched alongside the payload. A checksum served from the same host as the artifact
    # catches corruption but not substitution.
    $PAYLOAD_SHA256 = 'd7c073fffeb92b6fea5d9c8da3c5c35f46e20b5dd582844415d276aca411fe25'
    if ($PAYLOAD_SHA256 -eq 'PAYLOAD_SHA256_UNSET') {
        Die "this install.ps1 has no payload hash pinned -- it was published unreleased. Refusing to run unverified code."
    }
    $got = (Get-FileHash -Algorithm SHA256 -Path $payload).Hash.ToLower()
    if ($got -ne $PAYLOAD_SHA256.ToLower()) {
        Die "PAYLOAD CHECKSUM MISMATCH -- refusing to run`n        expected $PAYLOAD_SHA256`n        got      $got`n        Do not retry blindly."
    }
    Good "payload verified"

    tar.exe -xzf $payload -C $tmp
    if ($LASTEXITCODE -ne 0) { Die "payload did not extract" }

    $C = Get-Content (Join-Path $tmp 'network_constants.json') -Raw | ConvertFrom-Json
    $personaFile = Join-Path $tmp "persona_profiles\persona_$PersonaName.json"
    if (-not (Test-Path $personaFile)) { Die "unknown persona '$PersonaName'." }
    $P = Get-Content $personaFile -Raw | ConvertFrom-Json

    if ($P.requires_ratification -and $P.requires_ratification.Count -gt 0) {
        Die "persona '$PersonaName' has $($P.requires_ratification.Count) unratified decision(s) and cannot be installed yet:`n        $($P.requires_ratification[0])"
    }

    $root   = Join-Path $Prefix $Instance
    $pkiDir = Join-Path $root 'pki'
    $binDir = Join-Path $Prefix 'bin'

    Write-Host ""
    Write-Host "   $(if ($DryRun) {'PLAN:'} else {'EXECUTING:'})"
    Say "  nebula          : nebula-windows-$arch.zip -> $binDir  (official release, checksum-pinned)"
    Say "  keypair         : $pkiDir\host.key  (generated here, never leaves this machine)"
    Say "  config          : $root\config.yml  role=$($P.network.role)"
    Say "  cert request    : groups=[$($P.cert_request.groups -join ',')] duration=$($P.cert_request.duration_hours)h"
    Say "  aDNA workspace  : clone to $($C.workspace.clone_target) (optional; -NoWorkspace to skip)"
    Say "  enrollment      : emit request, then STOP"
    Write-Host ""

    if ($DryRun) { Say "(dry run -- nothing was changed. re-run without -DryRun)"; Write-Host ""; exit 0 }

    # -- nebula ---------------------------------------------------------------------------
    $asset  = "nebula-windows-$arch.zip"
    $expect = $C.nebula.sha256.$asset
    if (-not $expect) { Die "no pinned checksum for $asset -- refusing to install it unverified." }

    New-Item -ItemType Directory -Path $binDir, $pkiDir -Force | Out-Null
    $zip = Join-Path $tmp $asset
    Say "fetching $($C.nebula.pin) $asset"
    Invoke-WebRequest -Uri "$($C.nebula.release_base)/$($C.nebula.pin)/$asset" -OutFile $zip -UseBasicParsing
    $got = (Get-FileHash -Algorithm SHA256 -Path $zip).Hash.ToLower()
    if ($got -ne $expect.ToLower()) {
        Die "CHECKSUM MISMATCH on $asset -- refusing to install`n        expected $expect`n        got      $got"
    }
    Good "sha256 verified against the pinned value"

    Expand-Archive -Path $zip -DestinationPath (Join-Path $tmp 'nb') -Force
    Copy-Item (Join-Path $tmp 'nb\nebula.exe')      $binDir -Force
    Copy-Item (Join-Path $tmp 'nb\nebula-cert.exe') $binDir -Force
    # Wintun is the virtual adapter driver. Staged next to nebula.exe now; ACTUALLY installing
    # the adapter happens at service-install time and is the step that needs Administrator.
    $wintun = Join-Path $tmp "nb\dist\windows\wintun\bin\$arch\wintun.dll"
    if (Test-Path $wintun) { Copy-Item $wintun $binDir -Force; Good "wintun.dll staged (adapter install needs admin, later)" }
    Good "nebula + nebula-cert installed to $binDir"

    # -- keypair --------------------------------------------------------------------------
    $keyPath = Join-Path $pkiDir 'host.key'
    $pubPath = Join-Path $pkiDir 'host.pub'
    if ((Test-Path $keyPath) -and -not $Force) {
        Good "keypair already present at $keyPath -- NOT regenerating (an existing key is never overwritten)"
    } else {
        & (Join-Path $binDir 'nebula-cert.exe') keygen -out-key $keyPath -out-pub $pubPath
        if ($LASTEXITCODE -ne 0) { Die "nebula-cert keygen failed" }
        Good "keypair generated at $keyPath"
    }

    # Lock the key down OUTSIDE the branch above, on every run. It used to live in the else,
    # which meant a key left behind by a failed run kept its inherited permissions forever --
    # found on a real Win11 box when the ACL step threw after keygen had already written it.
    # Windows has no chmod, so this strips inheritance and grants exactly one identity.
    # USE THE SID, NOT "$env:USERDOMAIN\$env:USERNAME": that string failed to translate over an
    # SSH session (IdentityNotMappedException). A SID needs no name lookup, so it also survives
    # a domain-joined machine and a non-English Windows.
    $me  = [Security.Principal.WindowsIdentity]::GetCurrent().User
    $acl = Get-Acl $keyPath
    $acl.SetAccessRuleProtection($true, $false)
    $acl.Access | ForEach-Object { $acl.RemoveAccessRule($_) | Out-Null }
    $acl.AddAccessRule((New-Object Security.AccessControl.FileSystemAccessRule($me, 'FullControl', 'Allow')))
    Set-Acl -Path $keyPath -AclObject $acl

    # PROVE it rather than assume it. If anyone else can read the private key the install is not
    # in a safe state, and reporting success would be a lie.
    $mine  = $me.Translate([Security.Principal.NTAccount]).Value
    $extra = (Get-Acl $keyPath).Access | ForEach-Object { $_.IdentityReference.Value } |
             Where-Object { $_ -ne $mine }
    if ($extra) {
        Die "the private key at $keyPath is still readable by: $($extra -join ', ')`n        Refusing to continue."
    }
    Good "private key readable only by $mine (verified, never leaves this machine)"

    $listen = if ($P.network.inbound_required) { 'REPLACE_AT_SIGNING' } else { '0' }
    $yamlPath = Join-Path $root 'config.yml'
    $sb = [Text.StringBuilder]::new()
    [void]$sb.AppendLine("pki:")
    [void]$sb.AppendLine("  ca: $root/pki/ca.crt")
    [void]$sb.AppendLine("  cert: $root/pki/host.crt")
    [void]$sb.AppendLine("  key: $root/pki/host.key")
    [void]$sb.AppendLine("  blocklist:")
    foreach ($f in $C.blocklist) { [void]$sb.AppendLine("    - $f") }
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("static_host_map:")
    foreach ($k in $C.static_host_map.PSObject.Properties.Name) {
        $v = ($C.static_host_map.$k | ForEach-Object { "`"$_`"" }) -join ", "
        [void]$sb.AppendLine("  `"$k`": [$v]")
    }
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("lighthouse:")
    [void]$sb.AppendLine("  am_lighthouse: false")
    [void]$sb.AppendLine("  interval: 60")
    [void]$sb.AppendLine("  hosts:")
    foreach ($h in $C.lighthouses) { [void]$sb.AppendLine("    - `"$h`"") }
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("listen:")
    [void]$sb.AppendLine("  host: 0.0.0.0")
    [void]$sb.AppendLine("  port: $listen")
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("relay:")
    [void]$sb.AppendLine("  am_relay: false")
    [void]$sb.AppendLine("  use_relays: true")
    [void]$sb.AppendLine("  relays:")
    foreach ($h in $C.relays) { [void]$sb.AppendLine("    - `"$h`"") }
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("punchy:")
    [void]$sb.AppendLine("  punch: true")
    [void]$sb.AppendLine("  respond: true")
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("tun:")
    [void]$sb.AppendLine("  disabled: false")
    [void]$sb.AppendLine("  dev: $($C.overlay.tun_dev.windows)")
    [void]$sb.AppendLine("  mtu: $($C.overlay.mtu)")
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("logging:")
    [void]$sb.AppendLine("  level: info")
    [void]$sb.AppendLine("  format: text")
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("firewall:")
    [void]$sb.AppendLine("  conntrack:")
    [void]$sb.AppendLine("    tcp_timeout: $($C.conntrack.tcp_timeout)")
    [void]$sb.AppendLine("    udp_timeout: $($C.conntrack.udp_timeout)")
    [void]$sb.AppendLine("    default_timeout: $($C.conntrack.default_timeout)")
    [void]$sb.AppendLine("  outbound:")
    [void]$sb.AppendLine("    - { port: any, proto: any, host: any }")
    [void]$sb.AppendLine("  inbound:")
    [void]$sb.AppendLine("    - { port: any, proto: icmp, host: any }")
    Set-Content -Path $yamlPath -Value $sb.ToString() -Encoding utf8 -NoNewline
    Good "config written to $yamlPath"

    # -- aDNA workspace (optional, non-fatal, never requires an AI assistant) --------------
    # Unifying the two installs means one command both joins the network and gives you the
    # workspace, while keeping them INDEPENDENT: the mesh works with no workspace, the workspace
    # works with no mesh. The site used to advertise a clone ending in `claude`, which made
    # Claude Code a hard dependency of getting started -- that trailing step is what this
    # replaces. A failure here must NOT fail the install: a person is waiting to approve the
    # enrollment request, and a git problem is no reason to throw that away.
    $wsTarget = $C.workspace.clone_target -replace '^~', $env:USERPROFILE
    $wsPath = $null
    if ($NoWorkspace) {
        Say "workspace: skipped (-NoWorkspace)."
    } elseif (Test-Path $wsTarget) {
        Good "workspace already at $wsTarget -- left untouched (never overwritten)"
        $wsPath = $wsTarget
    } elseif (-not (Get-Command git -ErrorAction SilentlyContinue)) {
        Say "workspace: SKIPPED, git is not installed. The network half is unaffected."
    } else {
        Say "cloning the aDNA workspace to $wsTarget"
        & git clone --depth 1 $C.workspace.canonical_repo_git $wsTarget 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0) { Good "workspace cloned to $wsTarget"; $wsPath = $wsTarget }
        else { Write-Host "   [!] workspace clone FAILED (the network install is unaffected)" -ForegroundColor Yellow }
    }

    # -- enrollment request ---------------------------------------------------------------
    $autoSignable = (-not $P.cert_request.groups) -and
                    (-not $P.network.inbound_required) -and
                    ($P.network.role -in @('dial_out_client', 'relay_client', 'none'))

    $req = [ordered]@{
        schema            = $C.request_schema
        installer_version = $VERSION
        persona           = $P.persona
        node              = [ordered]@{
            hostname  = $env:COMPUTERNAME.ToLower()
            os_class  = 'windows'
            machine   = $(if ($arch -eq 'amd64') { 'x86_64' } else { 'arm64' })
            is_wsl    = $false
            is_rpi    = $false
            nebula    = $C.nebula.pin.TrimStart('v')
            public_ip = $null
            cgnat     = $null
        }
        cert_request      = [ordered]@{
            groups         = @($P.cert_request.groups)
            duration_hours = $P.cert_request.duration_hours
            auto_signable  = $autoSignable
        }
        # [IO.File]::ReadAllText, NOT Get-Content -Raw. On Windows PowerShell 5.1 a string from
        # Get-Content carries ETS note properties, and ConvertTo-Json serialises the decoration
        # instead of the value -- emitting host_pub as {"value": "..."} where Unix emits a plain
        # string. Caught on a real Win11 box; it would have broken the master's parser.
        host_pub          = [IO.File]::ReadAllText($pubPath)
        note              = 'PUBLIC key only. No private key material appears in this document, by construction.'
    }
    # Assert the shape before anyone relies on it. The enrollment document is parsed by the
    # master, so a type that differs from the Unix installer's is a failure at the far end, far
    # from here. Checking at emission is the only place the error is still cheap.
    foreach ($f in 'schema', 'installer_version', 'persona', 'host_pub', 'note') {
        if ($req[$f] -isnot [string]) {
            Die "internal: enrollment field '$f' is $($req[$f].GetType().Name), expected String. Refusing to emit a document the master cannot parse."
        }
    }
    $body = $req | ConvertTo-Json -Depth 6
    $outFile = Join-Path $root 'enrollment_request.json'
    Set-Content -Path $outFile -Value $body -Encoding utf8

    Write-Host ""
    Write-Host "NEXT: send this to whoever invited you. It contains your PUBLIC key only --"
    Write-Host "no private key, no password, nothing secret."
    Write-Host ""
    Write-Host ("=" * 72)
    Write-Host "ENROLLMENT REQUEST -- copy everything between these two lines"
    Write-Host ("=" * 72)
    Write-Host $body
    Write-Host ("=" * 72)
    Write-Host "END ENROLLMENT REQUEST"
    Write-Host ("=" * 72)
    Say "Also saved to: $outFile"
    Say "(you can attach that file instead of copying)"
    if ($wsPath) {
        Write-Host ""
        Say "Your aDNA workspace is at $wsPath"
        Say "Open it however you like -- a text editor, Obsidian, or an AI coding"
        Say "assistant if you use one. Nothing here requires any of them."
    }
    Write-Host ""
    Say "Service install and the Wintun adapter are NOT done -- those need Administrator and"
    Say "a signed certificate, which comes back after your request is approved."
    Write-Host ""
}
finally {
    Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
}
