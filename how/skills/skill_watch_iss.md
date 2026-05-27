---
type: skill
skill_type: process
created: 2026-05-21
updated: 2026-05-26
status: active
category: operations
trigger: agent fired an ISS gate and wants to auto-resume on operator submission within the same session, without the operator needing to tell the agent "done"
last_edited_by: agent_siteforge_native
tags: [skill, iss, operator_io, auto_pickup, watch_pattern, operation_loom, remotecontrol_eventual_home, canonical]
canonical_lifted_at: mission_p5_1_canonical_skill_lift
canonical_lifted_on: 2026-05-26
eventual_canonical_home: RemoteControl.aDNA (Talos; M0.2 terminal & shell research / M0.4 OS & filesystem introspection → P3 pillar absorption)
---

# skill_watch_iss

> **Canonical at the aDNA standard, with declared eventual migration**: this skill is agent-side companion to `aDNA.aDNA/how/skills/skill_create_iss.md`. Long-term home is `RemoteControl.aDNA` once **M0.2 (terminal & shell operation research)** or **M0.4 (OS / filesystem introspection research)** lands the file-watch / process-watch primitive contract. Coord memo `aDNA.aDNA/who/coordination/coord_2026_05_21_siteforge_interactive_subsystem_p2_remotecontrol_window_config.md` (status: pending_ack as of 2026-05-26) opens the integration thread; this skill is one of the watchpoints that absorption pass will sweep.

## When to invoke

After `skill_create_iss` writes a gate + sentinel AND the agent wants to **auto-resume on operator submission** within the same session — without requiring the operator to type "done", ping the agent, or otherwise coordinate.

Skip when:
- Cross-session resume is needed (different problem; agent reads `<vault>/how/gates/` on session-open to discover ready outputs)
- Operator may take hours/days (use Monitor with `persistent: true` instead, or accept a "ping me when done" handoff)
- Gate output isn't time-sensitive (just let the agent stop; next invocation picks up the output naturally)

## Mechanism

Bash `run_in_background` with a wait-until loop. Fires one notification when the **full sentinel handshake** completes (output.json present AND .pending cleared per AD-6):

```bash
GATE_PATH="<vault>/how/gates/<gate_id>"
until [ -f "${GATE_PATH}.output.json" ] && [ ! -f "${GATE_PATH}.pending" ]; do
  sleep 2
done
echo "GATE READY at $(date -u +%Y-%m-%dT%H:%M:%SZ)"
```

Wrap as a Bash tool call with `run_in_background: true`. The harness auto-notifies on task exit → agent resumes with the timestamp + reads `<gate_id>.output.json`.

**Why this shape**:
- Polls every 2 s — negligible CPU; imperceptible UX latency
- Checks BOTH conditions (output present + sentinel cleared) so T1B race (file written before sentinel cleared) is handled correctly per AD-6
- Single notification — exits the loop on first match
- No external dependencies (no `fswatch` / `inotifywait` required; macOS lacks `inotify`, and `fswatch` is not installed on every node)

## Alternative — Monitor tool with persistent flag

For longer-lived watches (operator may take hours; or multi-gate watcher), use the Monitor tool with `persistent: true` and a filter that emits when `output.json` appears:

```bash
# emits one line per matching event
while true; do
  if [ -f "${GATE_PATH}.output.json" ] && [ ! -f "${GATE_PATH}.pending" ]; then
    echo "GATE READY: ${GATE_PATH}.output.json at $(date -u +%Y-%m-%dT%H:%M:%SZ)"
    break
  fi
  sleep 5
done
```

Use this when the operator wait is expected to outlast a single Bash background task's typical lifecycle, or when watching multiple gates concurrently.

## Limitations

- **In-session only** — needs the parent agent process alive to receive the harness notification. Cross-session resume requires a different pattern (agent reads `how/gates/` on session-open).
- **Polling-based** — 2 s interval is the latency floor. Acceptable for human-in-the-loop gate review (sub-3-second handoff feels instant); not for sub-second event response.
- **File-system semantics** — assumes `[ -f path ]` is reliable. On networked / unusual FS (NFS with caching, fuse mounts), may need `stat` or a fresh `ls` to defeat caching.
- **No timeout** — the until-loop runs forever if the operator never submits. Pair with a sensible upper bound (e.g. wrap in `timeout 7200` for 2 hours) if needed.
- **Single-gate** — pattern watches one gate; for multi-gate concurrent watches, fan out one background task per gate or use Monitor with a broader filter.

## D7-C69 hardening (F-4)

The P2.5 case-study (`SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/aar_p2_phase_exit_case_study.md`) flagged three watch-pattern weaknesses. The hardened patterns below address each:

### 1. `timeout 7200` wrapper (2-hour cap)

The default until-loop runs forever. Wrap with `timeout` so the background task self-terminates if the operator never submits, freeing the harness slot:

```bash
GATE_PATH="<vault>/how/gates/<gate_id>"
timeout 7200 bash -c '
  until [ -e "'"${GATE_PATH}"'.output.json" ] && [ ! -e "'"${GATE_PATH}"'.pending" ]; do
    sleep 2
  done
  echo "GATE READY at $(date -u +%Y-%m-%dT%H:%M:%SZ)"
'
```

Exit code 124 from `timeout` means the watch timed out — the agent should ping the operator rather than assume submission.

### 2. `[ -e ]` over `[ -f ]` (symlink + special-file safety)

`[ -f path ]` returns false for symlinks pointing to existing files on some filesystems and false for FIFO/socket nodes that the OS might use during atomic writes. Use `[ -e path ]` (file-exists, regardless of type):

```bash
until [ -e "${GATE_PATH}.output.json" ] && [ ! -e "${GATE_PATH}.pending" ]; do
```

On NFS / fuse mounts, also force a directory listing to defeat attribute caching:

```bash
until ls -la "$(dirname "${GATE_PATH}")" >/dev/null 2>&1 && [ -e "${GATE_PATH}.output.json" ] && [ ! -e "${GATE_PATH}.pending" ]; do
```

### 3. Cross-session resume contract

When a new agent session opens, scan `<vault>/how/gates/` for ready-but-unread outputs. The agent should:

1. Glob `<vault>/how/gates/*.output.json` (excluding `archive/`)
2. For each, check if a sibling `.pending` file is present — if yes, the output is mid-write and should be re-checked next pass
3. For each ready output, decide whether to process now or surface to operator

Contract: outputs sit in `how/gates/` until the agent that authored the gate acknowledges them by moving the gate's `.html` + `.data.json` to `how/gates/archive/<gate_id>/` (the receiver does NOT auto-archive).

### 4. Receiver-port discovery via `.gate_receiver.port` sidecar (F-2 companion)

When constructing the watch path, the gate's `data-receiver-url` is now auto-discovered from `<gates_root>/.gate_receiver.port` (D7-C69 F-2). The watch skill itself is filesystem-only and does not need the receiver URL — but if the agent wants to verify the receiver is alive before authoring the next gate, read the sidecar:

```bash
RECEIVER_PORT=$(cat <vault>/how/gates/.gate_receiver.port 2>/dev/null || echo 8765)
curl -s "http://localhost:${RECEIVER_PORT}/health" | jq -r '.status' 2>/dev/null
```

## Cross-references

- Agent-side gate authoring: `aDNA.aDNA/how/skills/skill_create_iss.md` §"Round-trip discipline"
- Operator-side opening + positioning: `aDNA.aDNA/how/skills/skill_open_iss.md`
- Long-term canonical home: `RemoteControl.aDNA` (Talos; M0.2 terminal & shell research and/or M0.4 OS / filesystem research; P3 pillar absorbs)
- Coord memo: `aDNA.aDNA/who/coordination/coord_2026_05_21_siteforge_interactive_subsystem_p2_remotecontrol_window_config.md`
- Campaign provenance: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/CLAUDE.md` SO #16
- Architecture spec: AD-6 (sentinel handshake)
