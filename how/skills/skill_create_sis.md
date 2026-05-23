---
type: skill
skill_type: agent
created: 2026-05-21
updated: 2026-05-21
status: draft
prototype: true
prototype_lifted_canonical_at: mission_p5_1_canonical_skill_lift
category: communication
trigger: agent needs operator decision/input richer than AskUserQuestion can carry
last_edited_by: agent_stanley
tags: [skill, sis, decision_gate, operator_io, prototype, operation_loom]
---

# skill_create_sis

> **PROTOTYPE** — built at `campaign_siteforge_sis` ("Operation Loom") P2.1. Promotes canonical at P5.1 (removes this banner; adds inventory row). Authoritative spec: `SiteForge.aDNA/how/campaigns/campaign_siteforge_sis/missions/artifacts/architecture_spec_p1_2.md`. ADR draft: `…/missions/artifacts/adr_draft_sis_architecture.md`.

## When to invoke

Any of:
- ≥ 5 operator options
- > 2 sentences reasoning per option
- Multi-field structured input
- Copy-pasteable artifact the operator iterates on
- Decision benefits from side-by-side comparison or rich context

Otherwise prefer `AskUserQuestion` (≤ 4 options, no rich context).

## Authoring workflow (the 7-step happy path)

1. **Pick outer tier** — probe `$DISPLAY`/`$BROWSER`/`open` + `<vault>/how/gates/` writable + receiver `:8765/health`. Pass → web. Fail + ≤4 opts → `AskUserQuestion`. Fail + rich context → copy-paste.
2. **Pick template** from `SiteForge.aDNA/what/lib/sis/templates/`: `decision_gate_3option`, `decision_gate_n_ranking`, `approval_gate`, `confidence_rating`, `phase_exit`, `structured_input_form`, `adr_gate`, `pilot_evaluation`.
3. **Pick persona** via `--persona`: default = consumer-vault persona; universal fallback = `franklin`. Available: franklin / hermes / rosetta / partner / tokyo / neutral.
4. **Bind data** — JSON keyed by the template's `{{placeholders}}` (title, options[], reasoning, context, gate_id, …).
5. **Generate**:
   ```bash
   python ~/lattice/SiteForge.aDNA/what/lib/sis/runtime/generator.py \
     --template <name> --persona <name> --font-mode {online|offline|system} \
     --data <json-or-path> --output <vault>/how/gates/<gate_id>.html
   ```
6. **Sentinel** — `touch <vault>/how/gates/<gate_id>.pending`.
7. **Yield** — print the gate path to operator. Stop. Resume on next invocation.

## Round-trip discipline

Sentinel handshake (AD-6):

| `.pending` | `.output.json` | meaning |
|---|---|---|
| present | absent | in-flight |
| absent | present | ready for agent pickup |
| present | present | T1B race — treat ready, archive `.pending` |
| absent | absent | never existed or archived |

Inner 4-tier on submit (handled by `round_trip.js`, auto-detected): **T1A** POST→`localhost:8765/save` → **T2** `showSaveFilePicker()` → **T1B** `<a download>` → **T3** clipboard. `--force-roundtrip-tier {T1A|T1B|T2|T3}` overrides.

Resume: read `<gate_id>.output.json`; assert `schema_version == "1.0"`; archive both files to `<vault>/how/gates/archive/<gate_id>/`.

## Outer fallback contract (Campaign SO #3 — mandatory 3-tier chain)

- **Tier 1 — web**: this skill
- **Tier 2 — AskUserQuestion**: ≤ 4 options, no rich context
- **Tier 3 — copy-paste**: TTY-only or web unavailable; emit gate spec as markdown for operator to fill

CLI overrides: `--force-tier {web|askuser|copypaste}`, `--no-web`, `--no-receiver`.

## Gate-path discipline (AD-6)

```
<vault>/how/gates/<gate_id>.html         # surface
<vault>/how/gates/<gate_id>.pending      # sentinel
<vault>/how/gates/<gate_id>.output.json  # RLHF-shaped output
<vault>/how/gates/<gate_id>.draft.json   # save-as-draft (Cmd+S)
<vault>/how/gates/archive/<gate_id>/     # archive after agent ACK
```

`<gate_id>` convention: `<context>_<purpose>` (e.g. `p2_phase_exit_gate`, `adr_007_ratification`).

## Output JSON schema v1.0 (AD-7)

Required: `schema_version`, `gate_id`, `surface_type`, `interaction_mode`, `persona`, `vault`, `created_at`, `completed_at`, `operator`, `decisions[]`, `operator_comment_overall`, `rlhf_signal{signal_shape, value}`, `rlhf_signal_type`. DELTA-1/2/3 resolved — `rlhf_signal_type` (disposition: accept/reject/defer/accept_with_modification) and `rlhf_signal.signal_shape` (binary/pairwise/scalar/correction/structured) coexist orthogonally. ACCUMULATE adapter at P5.5 transforms output → `iii/.../siteforge_iii_learning_store.jsonl` (D11 opt-in per consumer wrapper).

Md5-invariant — writes target SiteForge local learning store only; canonical upstream READ-ONLY.

## Agent-ergonomics target (Campaign SO #8 / AD-10 7th-axis)

- **Cached** (templates pre-warmed): ≤ 2 min agent invocation → operator-readable HTML at canonical path
- **Cold-start**: ≤ 5 min

Agent populates `created_at`; submit populates `completed_at`. Delta logged for decadal AAR 7th-axis ranker.

## Forward references (P2.2-P2.4 deliverables this skill consumes)

- `SiteForge.aDNA/what/lib/sis/runtime/{generator.py, gate_receiver.py, round_trip.js, state_manager.js}` (P2.3 + P2.4)
- `SiteForge.aDNA/what/lib/sis/templates/*.html` (P2.4; 8 templates)
- `SiteForge.aDNA/what/lib/sis/tokens/persona_*.css` (P2.4; 6 personas + neutral + base)
- Operator-side pairings (PROTOTYPE; canonical: `RemoteControl.aDNA` M0.2/M0.3/M0.4 → P3 pillar): open + position window (`skill_open_sis.md`); auto-resume on submission (`skill_watch_sis.md`); receiver lifecycle start/stop/status/clean (`skill_manage_gate_receiver.md`) — all at `SiteForge.aDNA/how/skills/`
