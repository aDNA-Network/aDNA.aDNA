---
type: skill
skill_type: process
created: 2026-05-21
updated: 2026-05-29
status: active
category: operations
trigger: agent wrote an ISS gate to <vault>/how/gates/ and the operator wants it opened + positioned for review
last_edited_by: agent_stanley
tags: [skill, iss, operator_io, window_positioning, operation_loom, remotecontrol_eventual_home, canonical]
canonical_lifted_at: mission_p5_1_canonical_skill_lift
canonical_lifted_on: 2026-05-26
eventual_canonical_home: RemoteControl.aDNA (Talos; M0.3 GUI/input synthesis → P3 GUI pillar)
---

# skill_open_iss

> **Canonical at the aDNA standard, with declared eventual migration**: this skill is operator-side companion to `aDNA.aDNA/how/skills/skill_create_iss.md`. Long-term home is `RemoteControl.aDNA` once **M0.3 (GUI/input synthesis research)** and **P3 GUI pillar** land (planning-stub §4.1 lists `list_windows` / `focus_window` / `screenshot {region}` as candidate v1 capability surface). Coord memo: `aDNA.aDNA/who/coordination/coord_2026_05_21_siteforge_interactive_subsystem_p2_remotecontrol_window_config.md` (status: pending_ack as of 2026-05-26). When RemoteControl's canonical mechanism lands, this skill cross-refs the RemoteControl capability registry first and falls back to the osascript pattern below as the macOS / no-RemoteControl-installed path.

## When to invoke

After `skill_create_iss` writes a gate to `<vault>/how/gates/<gate_id>.html` AND the operator wants the surface opened in a browser AND positioned (typically right-half of screen so they can review side-by-side with the agent session).

Skip when: gate not yet ready; operator prefers to open manually; multi-display setup requires explicit position calculation (v1 limitation).

## Mechanism

Tooling verified 2026-05-21 on Darwin 25.5.0:
- Built-in: `osascript` — only window-positioning tool installed (no yabai/Rectangle/Hammerspoon/displayplacer).
- Browsers present: Google Chrome (default for ISS gates), Safari.

**Chrome is the default for ISS gates.** Safari blocks `file://` pages from loading image
subresources via `../` upward directory traversal — which the `image_grid_variant` template uses
(`../../what/assets/...png` from `how/gates/`), so images render **broken** in Safari unless the
operator enables Develop → "Disable Local File Restrictions". Chrome treats all `file://` as one
opaque origin and loads them. The open command also differs by browser: **Chrome uses `open location
"file://…"`**; Safari uses `open POSIX file "…"`. (Confirmed 2026-05-29, ScienceStanley M12 Pe gate.)

Pattern (Google Chrome, right-half default — see Browser variants below for Safari/Arc):

```bash
osascript <<'APPLESCRIPT'
tell application "Finder"
  set b to bounds of window of desktop
end tell
set screenW to item 3 of b
set screenH to item 4 of b
set halfW to screenW / 2

tell application "Google Chrome"
  activate
  open location "file://<absolute-path-to-gate.html>"
  delay 0.6
  set bounds of front window to {halfW, 0, screenW, screenH}
end tell
APPLESCRIPT
```

## Position variants (substitute the final `set bounds` line)

| Position | bounds expression |
|---|---|
| right-half (default) | `{halfW, 0, screenW, screenH}` |
| left-half | `{0, 0, halfW, screenH}` |
| full | `{0, 0, screenW, screenH}` |
| centered (~70%) | `{screenW/6, screenH/8, 5*screenW/6, 7*screenH/8}` |
| top-right quadrant | `{halfW, 0, screenW, screenH/2}` |

## D7-C69 (F-2) — Receiver-port sidecar

The generated gate HTML embeds the receiver URL on `<body data-receiver-url="...">`. As of D7-C69 the generator auto-discovers the active port by reading `<gates_root>/.gate_receiver.port` (a single-source-of-truth file written by `gate_receiver.py` on bind, removed on shutdown). The skill itself does not need to read the sidecar — it only opens the HTML — but the workflow is now port-collision-safe:

1. `gate_receiver.py` on launch tries `--port` (default 8765); if bound, scans up to `--port-scan-max` (default 10) for a free port.
2. On successful bind, writes `<gates_root>/.gate_receiver.port` containing the active port.
3. `generator.py` reads the sidecar when rendering the gate; embeds `http://localhost:<active-port>` as the receiver URL.
4. `skill_open_iss.md` opens the gate HTML; the in-page JS posts to the correct port.

If the receiver is restarted on a different port after gate generation, regenerate the gate (or set `receiver_url` explicitly in `data.json`).

## Browser variants (substitute the `tell application` block + open command)

| Browser | Block target | Open command |
|---|---|---|
| Google Chrome (default) | `tell application "Google Chrome"` | `open location "file://<abs-path>"` |
| Safari | `tell application "Safari"` | `open POSIX file "<abs-path>"` — ⚠ blocks `../` `file://` image subresources (image gates render broken unless Develop → "Disable Local File Restrictions") |
| Arc | `tell application "Arc"` | `open location "file://<abs-path>"` |

## Limitations

- macOS only (osascript / AppleScript). No Linux/Windows path until RemoteControl.aDNA P3 lands.
- Primary display only — multi-display setups need explicit position calculation; v1 does not handle.
- Visual flicker on `activate` + bounds-set sequence (~400 ms).
- Safari + Chrome work reliably via System Events; Firefox positioning via AppleScript is unreliable.
- No undo on bounds-set — previous window position is lost.
- Requires Accessibility permission for the calling shell / terminal if osascript triggers System Events fallback (rare in this pattern; not needed for the `tell application … set bounds` shape above).

## Cross-references

- Agent-side pairing: `aDNA.aDNA/how/skills/skill_create_iss.md` §"References"
- Long-term canonical home: `RemoteControl.aDNA` (Talos persona; M0.3 GUI/input synthesis research; P3 GUI pillar prototype)
- Coord memo: `aDNA.aDNA/who/coordination/coord_2026_05_21_siteforge_interactive_subsystem_p2_remotecontrol_window_config.md`
- Campaign provenance: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/CLAUDE.md`
- Forge-ecosystem-wide reuse: generic across any consumer vault that ships ISS gates via the `iss/`-style federation wrapper; not SiteForge-specific in usage
