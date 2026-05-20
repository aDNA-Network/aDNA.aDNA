---
type: skill
skill_type: agent
created: 2026-05-20
updated: 2026-05-20
status: active
category: operations
trigger: "Agent needs to execute a sudo command + cannot use the Bash tool's default no-TTY path. Default sudo elevation pattern for any agentic development session that touches privileged operations (LaunchDaemons, /etc, /opt, /usr) on Stanley-local OR SSH-remote macOS hosts."
last_edited_by: agent_stanley
tags: [skill, operations, sudo, agentic_admin, osascript, ssh_remote, askpass, sudoers_grant, secure_credential_capture, latticenetwork, s23_proven, s24_extended]

requirements:
  tools: [bash, file_write]
  context: ["operator at the Stanley-local GUI to authenticate the one-time prompt"]
  permissions: ["execute osascript on Stanley L1 macOS GUI session", "pipe stdin to SSH for sudo -S on remote hosts (when remote variant in use)"]

provenance:
  originated_session: session_stanley_20260520_111028_s23_pc01_a4_phase_a_close   # Stanley-local pattern proven S23 Phase 2.0 (sudoers install for tailscale CLI)
  extended_session: session_stanley_20260520_124817_s24_pc01_b1_pluralism         # SSH-remote variant extended at S24 Obj 6 for Mac Mini Nebula install
  doctrine_anchor: who/governance/adr_015_federation_substrate_pluralism_tailscale_and_nebula_canonical   # §g multi-substrate agentic admin doctrine references this skill
---

# Skill: Agentic Sudo — `osascript` GUI Dialog Pattern (Stanley-Local + SSH-Remote Variants)

## Overview

When an AI agent needs to execute a `sudo` command from a non-TTY-allocating tool context (Claude Code Bash tool; `!` prefix in Claude Code REPL; SSH session without `-t`; CI/script runner without controlling terminal), the standard `sudo` interactive password prompt fails because no PTY exists for the prompt to read from.

This skill captures the canonical solution: a brief GUI dialog on the operator's local macOS host (Stanley L1 by default), which collects the operator's password via `osascript`, exports it via `SUDO_ASKPASS` (Stanley-local variant) OR pipes it to a remote host's `sudo -S` over SSH stdin (SSH-remote variant). The dialog blocks the agent's command pipeline until the operator authenticates; the password lives in memory + a transient file (cleaned up at the end of the operation).

**Outcome**: One-time operator authentication unlocks a single privileged operation (often installing a permanent `/etc/sudoers.d/<name>` fragment so subsequent ops are friction-free).

## When to use this skill

Use this pattern whenever an agent needs sudo + cannot allocate a TTY:

| Scenario | Variant |
|---|---|
| Agent on Stanley L1 needs sudo for a local privileged operation (e.g., install `/etc/sudoers.d/` fragment, write `/Library/LaunchDaemons/`, `launchctl load/unload`, `nginx -s reload`, etc.) | **Stanley-local** |
| Agent on Stanley L1 needs sudo on a remote macOS host via SSH (e.g., install Nebula/Tailscale config on a partner-node, write LaunchDaemons on Mac Mini lighthouse, etc.) | **SSH-remote** |
| One-time sudo to install a permanent sudoers grant (then subsequent ops use `sudo -n`) | **Stanley-local** for self; **SSH-remote** for remote nodes |

**Do NOT use** when:
- The agent has a real TTY (e.g., interactive shell session with the operator at the keyboard) — use `sudo` directly
- The sudoers grant for the specific command is already installed (`sudo -n <cmd>` works without prompt) — use that path
- The operation can be performed without sudo (review the privilege requirement first; many ops don't actually need root)
- The operator is not at the Stanley-local GUI when the agent runs the command — see "Async Variant" below

## Stanley-Local Variant — `SUDO_ASKPASS` + `osascript` GUI Dialog

### Pattern

```bash
# 1. Write an askpass shell script that invokes osascript to display a dialog
cat > /tmp/askpass_$$.sh <<'EOF'
#!/bin/bash
osascript -e 'display dialog "Sudo password for <DESCRIPTION>" with hidden answer default answer "" with title "Agentic Sudo" with icon caution' -e 'text returned of result'
EOF
chmod +x /tmp/askpass_$$.sh

# 2. Invoke sudo with SUDO_ASKPASS pointing at the script
SUDO_ASKPASS=/tmp/askpass_$$.sh sudo -A <command>

# 3. Clean up the askpass script
rm -f /tmp/askpass_$$.sh
```

### How it works

1. `sudo -A` instructs `sudo` to use the `SUDO_ASKPASS` program instead of reading from TTY
2. The askpass program is a shell script that runs `osascript` — macOS's AppleScript runner
3. `osascript -e 'display dialog ...'` opens a native macOS GUI dialog (modal, blocking) on the operator's logged-in graphical session
4. The operator types the password; `osascript` returns it on stdout; the shell script returns it to `sudo`
5. `sudo` validates the password + proceeds with the command
6. The askpass script is removed; password is gone from disk

### Example — install a sudoers fragment

```bash
cat > /tmp/askpass_$$.sh <<'EOF'
#!/bin/bash
osascript -e 'display dialog "Sudo password to install /etc/sudoers.d/latticelabs-tailscale-admin fragment (NOPASSWD on tailscale CLI only)" with hidden answer default answer "" with title "Agentic Sudo — Tailscale Admin Grant" with icon caution' -e 'text returned of result'
EOF
chmod +x /tmp/askpass_$$.sh

# Stage the sudoers fragment (in tmp, validated, then installed atomically)
cat > /tmp/latticelabs-tailscale-admin <<'EOF'
stanley ALL=(ALL) NOPASSWD: /Applications/Tailscale.app/Contents/MacOS/Tailscale, /opt/homebrew/bin/tailscale
EOF
visudo -c -f /tmp/latticelabs-tailscale-admin   # syntax-check before install
SUDO_ASKPASS=/tmp/askpass_$$.sh sudo -A install -m 0440 -o root -g wheel /tmp/latticelabs-tailscale-admin /etc/sudoers.d/latticelabs-tailscale-admin

# Cleanup
rm -f /tmp/askpass_$$.sh /tmp/latticelabs-tailscale-admin

# Verify
sudo -n tailscale --version   # should work without prompt
```

### Pattern proven at

- **S23 Phase 2.0** (`session_stanley_20260520_111028_s23_pc01_a4_phase_a_close`): Install `/etc/sudoers.d/latticelabs-tailscale-admin` granting NOPASSWD on `tailscale` binary. First agentic-admin foundation step in F-S23-01 doctrine (D-S23-01 canonical-tailnet-swap companion).

## SSH-Remote Variant — `osascript` + SSH stdin redirect to `sudo -S`

### Pattern

```bash
# 1. Collect password via osascript on Stanley-local GUI
PASS=$(osascript -e 'display dialog "Sudo password for <remote-host> (<DESCRIPTION>)" with hidden answer default answer "" with title "Agentic Sudo — Remote" with icon caution' -e 'text returned of result' 2>/dev/null)

# 2. Pipe the password via SSH stdin to sudo -S on the remote host
# IMPORTANT: use shell variable expansion + heredoc carefully to avoid leaking PASS into shell command history or logs
ssh -o BatchMode=no <remote-host> "echo '$PASS' | sudo -S <command>"

# 3. Clear PASS from environment
unset PASS
```

### How it works

1. `osascript` runs on the Stanley-local GUI (operator's screen); collects the password into the shell variable `PASS`
2. `ssh` to the remote host; the remote command pipes the password into `sudo -S` (which reads from stdin)
3. `sudo -S` on the remote host validates + executes
4. `unset PASS` clears the variable from the local shell environment

### Security considerations

- **NEVER log `$PASS`** — no `echo $PASS`, no `set -x` while $PASS is in scope, no command-history leak
- **Use single-quoted `'$PASS'`** in the SSH command to prevent local shell variable expansion BEFORE the SSH; let the remote shell expand
- **Prefer `-o BatchMode=no`** explicitly to allow interactive auth on the SSH socket if the SSH key needs a passphrase (rare; usually agent uses an `ssh-agent` with cached keys)
- **Wipe `$PASS` immediately** after the operation closes (`unset PASS`) to minimize the in-memory exposure window
- **Trust boundary**: the password CAN be observed by anyone who can read the remote host's stdin briefly. On a remote host this means anyone with root on the remote — which is exactly who you're trying to become. Acceptable for the typical sudoers-grant install case.

### Alternative — file-based credential transfer (avoids the shell-var path)

For cases where shell-history exposure or process-listing exposure (ps showing the SSH command line with the password) is a concern:

```bash
PASS=$(osascript -e '...' 2>/dev/null)

# Write to a transient file with mode 0600 on Stanley
TMPFILE=$(mktemp /tmp/.passXXXXXX) && chmod 600 "$TMPFILE"
echo "$PASS" > "$TMPFILE"
unset PASS

# Use scp + ssh to deliver the password file securely
scp -q "$TMPFILE" <remote-host>:/tmp/.pass_$$
ssh <remote-host> "sudo -S <command> < /tmp/.pass_$$; rm -f /tmp/.pass_$$"
rm -f "$TMPFILE"
```

This avoids shell-history exposure of `$PASS` content (it lives only in a 0600 file) at the cost of an extra round-trip.

### Pattern extended at

- **S24 Obj 6** (`session_stanley_20260520_124817_s24_pc01_b1_pluralism`): Install Nebula daemon on Mac Mini at `10.42.0.5` from Stanley L1 over SSH (Tailscale `tailb889e8.ts.net` `100.93.124.20`) — first SSH-remote application of the agentic-sudo pattern; per ADR-015 §g multi-substrate agentic admin doctrine.

## One-Time-Prompt-Then-Sudoers-Grant Pattern (Canonical Discipline)

The agentic-sudo dialog is **disruptive**: it interrupts the operator with a modal GUI prompt. The canonical pattern minimizes disruption by:

1. **First sudo op via dialog** = install a `/etc/sudoers.d/<grant-name>` fragment granting NOPASSWD on the specific binary or path needed
2. **Subsequent ops** = `sudo -n <cmd>` (passwordless because the sudoers fragment grants NOPASSWD)
3. **Grant fragment must be tightly scoped** to the specific binary path + (optionally) argument restrictions to avoid privilege escalation

### Example grant fragment scope

| Grant file | Scope | Why scoped this way |
|---|---|---|
| `/etc/sudoers.d/latticelabs-tailscale-admin` | `NOPASSWD: /Applications/Tailscale.app/Contents/MacOS/Tailscale, /opt/homebrew/bin/tailscale` | Tailscale CLI only; not a general `ALL` grant |
| `/etc/sudoers.d/latticelabs-nebula-admin` | `NOPASSWD: /opt/homebrew/bin/nebula, /opt/homebrew/bin/nebula-cert, /bin/launchctl load /Library/LaunchDaemons/com.latticelabs.nebula.plist, /bin/launchctl unload /Library/LaunchDaemons/com.latticelabs.nebula.plist, /usr/bin/install -m 0644 -o root -g wheel /tmp/com.latticelabs.nebula.plist /Library/LaunchDaemons/com.latticelabs.nebula.plist` | Nebula binaries + the specific launchctl + install commands needed; precludes arbitrary launchctl manipulation |
| `/etc/sudoers.d/latticelabs-nginx-admin` (example) | `NOPASSWD: /opt/homebrew/bin/nginx -s reload, /opt/homebrew/bin/nginx -t` | Nginx reload + config-test only; not a full nginx invocation grant |

### Grant install pre-flight (essential)

Before applying a grant fragment, ALWAYS:

1. `visudo -c -f /tmp/<grant-name>` — syntax check; refuses install on syntax error
2. Verify file mode = 0440 + owner root:wheel before install
3. Use `install -m 0440 -o root -g wheel` (atomic; sets perms correctly)
4. After install: `sudo -n <grant-target>` to confirm passwordless path works

## Cleanup Discipline

After every agentic-sudo operation:

- `rm -f /tmp/askpass_$$.sh` (Stanley-local variant)
- `rm -f /tmp/.pass_$$` (SSH-remote file-based variant)
- `unset PASS` (SSH-remote shell-var variant)
- Verify no askpass scripts or password files remain in `/tmp/`

## Async Variant (operator not at Stanley GUI)

If the operator is NOT at the Stanley GUI when the agent runs, the `osascript` dialog will block but never receive input — the operation hangs.

Workaround patterns:

1. **Schedule + notify**: agent identifies the sudo need + emits a `PushNotification` to the operator's phone with the specific operation context; agent waits for operator presence (sleep + retry, or pause and wait for next session)
2. **Pre-authorize via skill_orchestration_tiers**: heavy operations that need sudo can be pre-arranged via the `skill_orchestration_tiers` framework — operator authorizes the upcoming operation at session entry, agent runs the sudo + dialog while operator is on hand for the immediate-tier
3. **Defer to next session**: if the operation isn't time-critical, agent flags it as a deferred sub-task in the session SITREP + Next-Session Prompt — next session opens with operator present, sudo dialog runs cleanly

The `PushNotification` + scheduled-resume pattern is the most operator-friendly for genuinely async cases.

## Future evolution

This skill represents v0.1 of a broader unified Operator-Interaction-Pattern (OIP) doctrine being scoped in `aDNA.aDNA/how/backlog/idea_campaign_operator_interaction_patterns_unification.md` (S24 backlog). Per that campaign-planning mission, future enhancements include:

- **Replace osascript dialog with rich Canvas-substrate prompts** (CanvasForge.aDNA / Hermes integration) — operator gets richer context, agent gets structured data back
- **LatticeTerminal.aDNA splash + sidebar integration** (Spock) — sudo prompts may surface in the terminal substrate's home-agent UI rather than as a separate macOS dialog
- **Per-graph adaptation** — different graphs (vault types) may need substrate-specific interaction styling
- **Provenance memorialization** — each agentic-sudo invocation could emit a `MEMBERSHIP_OPERATOR_AUTHENTICATION` Tier-1 ledger event for audit trail (currently informal; the operation succeeds + we trust the operator's GUI-input authority; ledger-event memorialization would harden audit)

## References

- `who/governance/adr_015_federation_substrate_pluralism_tailscale_and_nebula_canonical.md` §g — multi-substrate agentic admin doctrine; this skill is the canonical sudo-elevation primitive that the doctrine references
- `how/backlog/idea_agentic_tailscale_admin_topology_memorialization.md` (in `LatticeNetwork.aDNA`; F-S23-01) — agentic-Tailscale-admin v0.1 implementation that this skill formalizes
- `aDNA.aDNA/how/backlog/idea_campaign_operator_interaction_patterns_unification.md` — broader campaign-planning mission scoping unified OIP doctrine across the aDNA standard
- S23 session SITREP: `LatticeNetwork.aDNA/how/sessions/history/2026-05/session_stanley_20260520_111028_s23_pc01_a4_phase_a_close.md` — original Stanley-local pattern proven
- S24 session SITREP (in-flight): `LatticeNetwork.aDNA/how/sessions/active/session_stanley_20260520_124817_s24_pc01_b1_pluralism.md` — SSH-remote variant extended

## Test plan

Operator can verify the skill works by:

1. **Stanley-local variant**: agent runs the install-sudoers-fragment-for-some-binary example; operator types password in the dialog; verify `sudo -n <binary>` works passwordlessly after install
2. **SSH-remote variant**: agent installs a sudoers fragment on a remote macOS host; operator types remote-host password in the dialog; verify `ssh remote-host 'sudo -n <binary>'` works passwordlessly after install
3. **Cleanup verification**: after any operation, `ls /tmp/askpass*` + `ls /tmp/.pass*` should return no files; `env | grep PASS` should not show PASS in environment
