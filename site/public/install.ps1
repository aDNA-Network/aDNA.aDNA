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
    [switch]$SecondIdentity,
    [switch]$NoWorkspace,
    [switch]$DryRun,
    [switch]$Force,
    # invite code (like BDWJ-HQPK-7NMR) -- submits the enrollment request automatically and
    # fetches the cert when approved; without it, the request is printed to send by hand.
    [string]$Code,
    # ASCII/no-color output; also honors NO_COLOR (no-color.org), TERM=dumb, and redirection.
    [switch]$Plain
)

$ErrorActionPreference = 'Stop'
$ProgressPreference    = 'SilentlyContinue'   # Invoke-WebRequest is ~10x slower with the bar
$VERSION = '0.4.10'

# PowerShell 5.1 can still default to TLS 1.0, which GitHub refuses outright.
try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 }
catch { Write-Verbose 'Could not set TLS 1.2; on PowerShell 7 it is already the default and this property is obsolete.' }

# Color is decoration only -- every status already carries an ASCII word ([ok]/[X]/[!]), so
# plain mode just suppresses ForegroundColor. On when -Plain, NO_COLOR, TERM=dumb, or stdout
# is redirected.
$script:UseColor = -not ($Plain -or $env:NO_COLOR -or $env:TERM -eq 'dumb' -or
                         [Console]::IsOutputRedirected)
function WriteC { param($m, $color)
    if ($script:UseColor -and $color) { Write-Host $m -ForegroundColor $color }
    else { Write-Host $m }
}
function Say  { param($m) Write-Host "   $m" }

# Four-layer failure block (research_accessibility_2026-08 s2): what happened -> safe to
# re-run -> code + log path for the helper -> reach help. Appended to a persistent log so a
# closed window never takes the evidence with it; the exe launcher already holds the window
# open (Enter-to-close). Log writes must never mask the real error.
$LOG_FILE = Join-Path $HOME 'adna-install-log.txt'
# strings-begin
$MSG_RERUN = 'Nothing was left half done. It is safe to run the same command again.'
$MSG_HELP  = 'Stuck? Send that log file to the person who invited you, or tell them the code.'
# strings-end
function Die  { param($code, $m)
    if (-not $m) { $m = $code; $code = 'GEN-01' }   # old single-arg callers stay safe
    Write-Host ""; WriteC "   [X] $m" Red; Write-Host ""
    Say $MSG_RERUN
    Say "For the person helping you: the code is $code. The log is saved at $LOG_FILE."
    Say $MSG_HELP; Write-Host ""
    try {
        Add-Content -Path $LOG_FILE -Value ("--- install.ps1 $VERSION " +
            (Get-Date -Format 'yyyy-MM-dd HH:mm:ss') + " failed ${code}`n$m") -ErrorAction Stop
    } catch { }
    exit 1
}
function Good { param($m) WriteC "   [ok] $m" Green }

# Everything below is the install flow, and it runs ONLY through the Main call on the last
# line of this file (Phase C1, research_security_2026-08 item 5). A truncated copy of this
# script defines part of a function and then ends -- it cannot half-run an install.
function Main {

Write-Host ""
WriteC "   aDNA node installer $VERSION (Windows)" Cyan
Write-Host ""

# -- preflight ----------------------------------------------------------------------------
if ($PSVersionTable.PSVersion.Major -lt 5) {
    Die 'SYS-05' "PowerShell 5.1 or newer is required (found $($PSVersionTable.PSVersion))."
}

$arch = switch ($env:PROCESSOR_ARCHITECTURE) {
    'AMD64' { 'amd64' }
    'ARM64' { 'arm64' }
    'x86'   { Die 'SYS-06' "32-bit Windows is not supported. This mesh needs a 64-bit OS." }
    default { Die 'SYS-07' "Unrecognised processor architecture '$env:PROCESSOR_ARCHITECTURE'." }
}

# tar.exe (bsdtar) ships with Windows 10 1803+ and is how we read the shared payload.
if (-not (Get-Command tar.exe -ErrorAction SilentlyContinue)) {
    Die 'SYS-08' "tar.exe was not found. It ships with Windows 10 1803 and newer -- this machine looks older than the minimum supported."
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
    catch { Die 'NET-01' "could not download the payload from $Base -- $($_.Exception.Message)" }

    # Same discipline as the Unix bootstrap: the payload hash is pinned in THIS file, not
    # fetched alongside the payload. A checksum served from the same host as the artifact
    # catches corruption but not substitution.
    # SIGNATURE NOTE (Phase C1): the Unix bootstrap additionally verifies the payload's
    # minisign signature. This one cannot -- PowerShell 5.1 / .NET Framework has no Ed25519,
    # and the payload's pure-python verifier needs the python3 this platform deliberately
    # does not require. On Windows the sha256 pin IS the authenticator; the signed channel
    # for Windows users is the release artifacts + winget (Phase D), where the signature is
    # checked at package-build time. Recorded in security_design_notes.md -- a gap named is
    # not a gap hidden.
    $PAYLOAD_SHA256 = '2461706e7b4f03c1893c6a0e3cb1e6750dc1a8538ced39f42668cd310fd8abca'
    if ($PAYLOAD_SHA256 -eq 'PAYLOAD_SHA256_UNSET') {
        Die 'REL-01' "this install.ps1 has no payload hash pinned -- it was published unreleased. Refusing to run unverified code."
    }
    $got = (Get-FileHash -Algorithm SHA256 -Path $payload).Hash.ToLower()
    if ($got -ne $PAYLOAD_SHA256.ToLower()) {
        Die 'SUM-01' "PAYLOAD CHECKSUM MISMATCH -- refusing to run`n        expected $PAYLOAD_SHA256`n        got      $got`n        Do not retry blindly."
    }
    Good "payload verified"

    tar.exe -xzf $payload -C $tmp
    if ($LASTEXITCODE -ne 0) { Die 'PKG-01' "payload did not extract" }

    $C = Get-Content (Join-Path $tmp 'network_constants.json') -Raw | ConvertFrom-Json
    $personaFile = Join-Path $tmp "persona_profiles\persona_$PersonaName.json"
    if (-not (Test-Path $personaFile)) { Die 'PKG-03' "unknown persona '$PersonaName'." }
    $P = Get-Content $personaFile -Raw | ConvertFrom-Json

    if ($P.requires_ratification -and $P.requires_ratification.Count -gt 0) {
        Die 'GOV-01' "persona '$PersonaName' has $($P.requires_ratification.Count) unratified decision(s) and cannot be installed yet:`n        $($P.requires_ratification[0])"
    }

    # Already-on-the-network detection: an interface holding one of OUR overlay addresses means
    # this machine is already enrolled -- emitting an enrollment request would ask for a second
    # identity it does not need (found when the operator's own live node was told to send one).
    $ovPrefix = ($C.overlay.cidr -split '\.')[0..2] -join '.'
    $overlayIp = (Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
                  Where-Object { $_.IPAddress -like "$ovPrefix.*" } |
                  Select-Object -First 1).IPAddress

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
    if (-not $expect) { Die 'REL-02' "no pinned checksum for $asset -- refusing to install it unverified." }

    New-Item -ItemType Directory -Path $binDir, $pkiDir -Force | Out-Null

    # Skip acquisition when an adequate nebula is already in OUR bindir -- the same rerun fix the
    # Unix installer got (its PATH-only check re-downloaded ~10MB per rerun). Version-gated so a
    # stale binary still triggers re-acquisition; an offline rerun now succeeds entirely.
    $ownCert = Join-Path $binDir 'nebula-cert.exe'
    $haveGood = $false
    if (Test-Path $ownCert) {
        $v = (& (Join-Path $binDir 'nebula.exe') -version 2>$null) -join ' '
        if ($v -match '(\d+)\.(\d+)\.(\d+)') {
            $min = $C.nebula.min_version
            $cur = @([int]$Matches[1], [int]$Matches[2], [int]$Matches[3])
            $haveGood = ($cur[0] -gt $min[0]) -or
                        ($cur[0] -eq $min[0] -and $cur[1] -gt $min[1]) -or
                        ($cur[0] -eq $min[0] -and $cur[1] -eq $min[1] -and $cur[2] -ge $min[2])
        }
    }
    if ($haveGood) {
        Good "nebula already present in $binDir ($v) -- not re-downloading"
    } else {
    $zip = Join-Path $tmp $asset
    Say "fetching $($C.nebula.pin) $asset"
    Invoke-WebRequest -Uri "$($C.nebula.release_base)/$($C.nebula.pin)/$asset" -OutFile $zip -UseBasicParsing
    $got = (Get-FileHash -Algorithm SHA256 -Path $zip).Hash.ToLower()
    if ($got -ne $expect.ToLower()) {
        Die 'SUM-02' "CHECKSUM MISMATCH on $asset -- refusing to install`n        expected $expect`n        got      $got"
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
    }

    # -- keypair --------------------------------------------------------------------------
    $keyPath = Join-Path $pkiDir 'host.key'
    $pubPath = Join-Path $pkiDir 'host.pub'
    if (Test-Path $keyPath) {
        # NO flag reaches this branch -- not even -Force. The Unix installer documents --force as
        # "overwrite an existing config (never a key)"; this file used to invert that and let
        # -Force regenerate the key, silently invalidating every certificate ever issued to the
        # node. Found by code review; the two implementations now agree.
        if (-not (Test-Path $pubPath)) {
            Die 'KEY-01' "host.key exists but host.pub is MISSING at $pubPath -- cannot rebuild the enrollment request.`n        Restore host.pub from a backup, or move host.key aside to generate a fresh pair."
        }
        Good "keypair already present at $keyPath -- NOT regenerating (an existing key is never overwritten)"
    } else {
        & (Join-Path $binDir 'nebula-cert.exe') keygen -out-key $keyPath -out-pub $pubPath
        if ($LASTEXITCODE -ne 0) { Die 'KEY-02' "nebula-cert keygen failed" }
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
        Die 'KEY-03' "the private key at $keyPath is still readable by: $($extra -join ', ')`n        Refusing to continue."
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
    if ((Test-Path $yamlPath) -and -not $Force) {
        # Never overwrite: a signed node may carry hand-set values (the inbound port replaces
        # REPLACE_AT_SIGNING at signing time). A rerun to re-emit an enrollment request must not
        # silently reset them. Same contract, same wording, as the Unix installer.
        Good "config already present at $yamlPath -- left untouched (-Force to overwrite)"
    } else {
        Set-Content -Path $yamlPath -Value $sb.ToString() -Encoding utf8 -NoNewline
        Good "config written to $yamlPath"
    }

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
        else { WriteC "   [!] workspace clone FAILED (the network install is unaffected)" Yellow }
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
            groups           = @($P.cert_request.groups)
            duration_hours   = $P.cert_request.duration_hours
            # Gangway A3: the invite envelope is checked against role/inbound too -- stated
            # explicitly, still claims not authorizations; the master recomputes at signing.
            role             = $P.network.role
            inbound_required = [bool]$P.network.inbound_required
            auto_signable    = $autoSignable
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
            Die 'PKG-04' "internal: enrollment field '$f' is $($req[$f].GetType().Name), expected String. Refusing to emit a document the master cannot parse."
        }
    }
    $body = $req | ConvertTo-Json -Depth 6
    $outFile = Join-Path $root 'enrollment_request.json'
    Set-Content -Path $outFile -Value $body -Encoding utf8

    if ($overlayIp -and -not $SecondIdentity) {
        Write-Host ""
        Write-Host "NEXT: nothing. This machine is ALREADY ON THE NETWORK -- its overlay address is"
        Write-Host "$overlayIp. Asking to join again would create a second identity, which you"
        Write-Host "do not need. Your files were installed or kept in place; nothing was overwritten."
        Write-Host "If you really do want a second identity, rerun with -SecondIdentity."
        return
    }
    # -- the code flow (Gangway A3) ---------------------------------------------------------
    # An invite code makes the machine move the payload. NO NEW TRUST DECISIONS: the endpoint
    # is a dumb queue, a human still signs, and the received CA is verified against the
    # fingerprint pinned in this payload (kubeadm-style). Endpoint unreachable -> fall
    # through to the paste flow below; a dead queue never strands an install.
    if ($Code) {
        $canon = ($Code -replace '[-\s]', '').ToUpper()
        if ($canon.Length -ne 12 -or $canon -notmatch '^[ABCDEFGHJKMNPQRSTUVWXYZ2-9]+$') {
            Die 'COD-01' "that invite code is not in the right shape. Codes look like BDWJ-HQPK-7NMR -- twelve letters and digits. Dashes and capitals do not matter; every character does."
        }
        $endpoint = $(if ($env:ADNA_ENROLL_URL) { $env:ADNA_ENROLL_URL } else { $C.enrollment.endpoint_url })
        if (-not $endpoint) {
            Say "invite code noted, but this installer has no enrollment endpoint configured yet"
            Say "-- falling back to the copy-paste hand-off below."
        } else {
            $endpoint  = $endpoint.TrimEnd('/')
            # F-S380-01: the payload pin is the ONLY client-side trust anchor in the code flow.
            # With an empty pin the client would silently adopt whatever fingerprint the endpoint
            # returns, turning endpoint compromise into CA substitution. Hard-fail BEFORE the
            # submit, so a broken payload never burns an invite use.
            $pinned = $C.enrollment.ca_fingerprint
            if (-not $pinned) {
                Die 'PKG-05' "this installer payload carries no CA fingerprint pin, so it cannot verify the certificate authority it would receive. This payload is malformed or was never released -- re-download the installer; do not retry with this one."
            }
            $codeSha   = [BitConverter]::ToString([Security.Cryptography.SHA256]::Create().ComputeHash([Text.Encoding]::UTF8.GetBytes($canon))).Replace('-','').ToLower()
            $stateFile = Join-Path $root 'enrollment_submission.json'
            $state     = $null
            if (Test-Path $stateFile) {
                $prior = Get-Content $stateFile -Raw | ConvertFrom-Json
                # same code, same request -- resume, don't burn another invite use
                if ($prior.code_sha256 -eq $codeSha) { $state = $prior }
            }
            if (-not $state) {
                try {
                    $resp = Invoke-RestMethod -Method Post -Uri "$endpoint/enroll" -ContentType 'application/json' `
                        -Body (@{ code = $canon; request = $req } | ConvertTo-Json -Depth 6)
                    $invFp  = $resp.invite.network.ca_fingerprint
                    if ($invFp -and $invFp -ne $pinned) {
                        Die 'SRV-03' "the enrollment service returned an invite for a DIFFERENT certificate authority than this installer was built for. Refusing to continue -- report this to whoever invited you; do not retry."
                    }
                    $state = [ordered]@{
                        request_id     = $resp.request_id
                        code_sha256    = $codeSha
                        endpoint       = $endpoint
                        ca_fingerprint = $pinned
                        submitted_at   = (Get-Date -Format 's')
                    }
                    $state | ConvertTo-Json | Set-Content -Path $stateFile -Encoding utf8
                    Good "enrollment request submitted automatically -- nothing to copy."
                } catch {
                    WriteC "   [!] could not submit to the enrollment service: $($_.Exception.Message)" Yellow
                    Say "your install is fine; only the automatic hand-off failed. Falling back"
                    Say "to the copy-paste hand-off below (or rerun the same command to retry)."
                    $state = $null
                }
            }
            if ($state) {
                $caPath = Join-Path $pkiDir 'ca.crt'
                if ((Test-Path $caPath) -and (Test-Path (Join-Path $pkiDir 'host.crt'))) {
                    Good "certificates already delivered and verified."
                    return
                }
                for ($i = 0; $i -lt 6; $i++) {
                    $st = Invoke-RestMethod -Method Get -Uri "$endpoint/enroll/$($state.request_id)"
                    if ($st.state -eq 'queued') {
                        if ($i -eq 0) {
                            Write-Host ""
                            Say "Submitted. Waiting for approval -- a person reviews every request."
                            Say "Safe to close this window; rerun the same command later to check."
                        }
                        Start-Sleep -Seconds 10
                        continue
                    }
                    if ($st.state -eq 'refused')   { Die 'SRV-04' "your enrollment request was refused: $($st.reason). Contact the person who invited you." }
                    if ($st.state -eq 'picked_up') { Die 'SRV-05' "this request's certificates were already collected, but they are not on this machine. Rerun the installer with a fresh invite code." }
                    if ($st.state -eq 'ready') {
                        $tmpCa = Join-Path $pkiDir 'ca.crt.incoming'
                        Set-Content -Path $tmpCa -Value $st.ca_crt -Encoding utf8
                        # The received CA must match the fingerprint pinned in this payload AND
                        # carried by the signed invite -- checked BEFORE activation can trust it.
                        $fps = & (Join-Path $binDir 'nebula-cert.exe') print -json -path $tmpCa | ConvertFrom-Json
                        if (@($fps).fingerprint -notcontains $state.ca_fingerprint) {
                            Remove-Item $tmpCa -ErrorAction SilentlyContinue
                            Die 'SRV-06' "the certificate authority we received DOES NOT MATCH the one this installer was built to trust. Refusing to install it. Report this to whoever invited you; do not retry."
                        }
                        Move-Item $tmpCa $caPath -Force
                        Set-Content -Path (Join-Path $pkiDir 'host.crt') -Value $st.host_crt -Encoding utf8
                        Good "approved! certificates received and verified against the pinned CA."
                        Say "Next: the service install (needs Administrator) -- follow the activation"
                        Say "steps printed at the end of this installer's output."
                        return
                    }
                    Die 'SRV-07' "unexpected state from the enrollment service: $($st.state)"
                }
                Write-Host ""
                Say "Still waiting for approval -- that is normal, a person signs every request."
                Say "Safe to close this window; rerun the same command later to check."
                return
            }
        }
    }

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

}

# The ONLY top-level statement that does anything (see the comment on function Main).
Main
