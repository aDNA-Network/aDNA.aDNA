---
type: skill
skill_type: agent
created: 2026-05-21
updated: 2026-05-23
status: draft
prototype: true
prototype_lifted_canonical_at: mission_p5_1_canonical_skill_lift
category: communication
trigger: agent needs operator decision/input richer than AskUserQuestion can carry
last_edited_by: agent_stanley
tags: [skill, sis, decision_gate, operator_io, prototype, operation_loom, sitrep_authoring_discipline, swot_authoring_discipline, d_wc_carries]
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
4. **Bind data** — JSON keyed by the template's `{{placeholders}}` (title, options[], reasoning, context, gate_id, …). Optionally add a top-level `sitrep:` block (6 fields) — see §"SITREP authoring discipline" below. Optionally add structured `swot:` blocks per section (`phase_exit`) or top-level (`decision_gate_3option`) — see §"SWOT authoring discipline" below. Omit both for terse/legacy gates; templates fall through to existing `subtitle` and freeform `analysis`/`context` rendering.
5. **Generate**:
   ```bash
   python ~/lattice/SiteForge.aDNA/what/lib/sis/runtime/generator.py \
     --template <name> --persona <name> --font-mode {online|offline|system} \
     --data <json-or-path> --output <vault>/how/gates/<gate_id>.html
   ```
6. **Sentinel** — `touch <vault>/how/gates/<gate_id>.pending`.
7. **Yield** — print the gate path to operator. Stop. Resume on next invocation.

## SITREP authoring discipline

The SITREP panel (landed P3p.3) renders 6 fields of operational context at the top of every gate so operators can orient before reading the question. Populate the top-level `sitrep:` block in your data JSON:

```json
{
  "sitrep": {
    "campaign": "campaign_siteforge_sis · Operation Loom",
    "phase": "Phase 3 — III Iterative Refinement",
    "mission": "P3.2 — Pre-cycle baseline",
    "gate_purpose": "Designate the case-study AAR as the III baseline and record initial 6-axis scores against the v2 SIS substrate.",
    "importance": "load-bearing",
    "importance_reason": "cascades to 10 decadal arcs (D1-D10)",
    "output_destination": "how/gates/p3_2_baseline_gate.output.json"
  }
}
```

### Fields

| Key | Required when `sitrep` present | Convention |
|---|---|---|
| `campaign` | yes | `<slug> · <code_name>` (e.g. `campaign_siteforge_sis · Operation Loom`) |
| `phase` | yes | `Phase N — <name>` (e.g. `Phase 3 — III Iterative Refinement`) |
| `mission` | yes | `<id> — <short_title>` (e.g. `P3.2 — Pre-cycle baseline`) |
| `gate_purpose` | yes | The ASKING line — one sentence, imperative voice, **recommended ≤ 180 chars** |
| `importance` | yes | One of `"routine"` / `"load-bearing"` / `"irreversible"` (see decision guidance below) |
| `importance_reason` | yes | Trailing em-dash phrase explaining the importance pick, **recommended ≤ 100 chars** |
| `output_destination` | yes | Vault-relative path to the gate output JSON (e.g. `how/gates/<gate_id>.output.json`) |

Char-caps are visual recommendations, not enforced. The generator accepts longer strings; the SITREP panel layout suffers when they wrap excessively.

### Importance enum — pick by blast radius

| Value | Pick when | Visual cue |
|---|---|---|
| `routine` | Cycle-internal · reversible at next cycle · single-mission scope · no downstream gate depends on this | No left-border (panel-default) |
| `load-bearing` | Cascades to ≥ 2 downstream missions OR commits a substrate/spec/persona-token that later work will depend on | 3px cool-blue left-border (`#4a8fb8`) |
| `irreversible` | Workspace-canonical touch · LIP merge · standard-touch ratification · committed to a partner-facing surface · rollback requires a new gate to undo | 3px orange-red left-border (`#d05a3c`) |

When in doubt between two values, pick the higher (operator scrutiny scales). Don't pad — labelling every gate `irreversible` defeats the signal.

### Worked examples (one per importance value)

**Routine** — cycle-internal decision:
```json
"sitrep": {
  "campaign": "campaign_siteforge_sis · Operation Loom",
  "phase": "Phase 3 — III Iterative Refinement",
  "mission": "P3.4 — D2 cycle 23",
  "gate_purpose": "Approve cycle 23's tweak to overview-strip chip spacing before cycle 24 opens.",
  "importance": "routine",
  "importance_reason": "cycle-internal; reversible at cycle 24",
  "output_destination": "how/cycles/d2_c23_gate.output.json"
}
```

**Load-bearing** — multi-arc cascade:
```json
"sitrep": {
  "campaign": "campaign_siteforge_sis · Operation Loom",
  "phase": "Phase 3 — III Iterative Refinement",
  "mission": "P3.2 — Pre-cycle baseline",
  "gate_purpose": "Designate the case-study AAR as the III baseline and record initial 6-axis scores against the v2 SIS substrate.",
  "importance": "load-bearing",
  "importance_reason": "cascades to 10 decadal arcs (D1-D10)",
  "output_destination": "how/gates/p3_2_baseline_gate.output.json"
}
```

**Irreversible** — workspace-canonical commit:
```json
"sitrep": {
  "campaign": "campaign_siteforge_sis · Operation Loom",
  "phase": "Phase 7 — Workspace Ratification",
  "mission": "P7.2 — LIP authoring + workspace-canonical ratification",
  "gate_purpose": "Approve the LIP for merge to lattice-labs canonical (workspace standard touch; new LIP required to roll back).",
  "importance": "irreversible",
  "importance_reason": "LIP merges to workspace canonical; rollback requires a new LIP",
  "output_destination": "how/gates/p7_2_lip_ratification_gate.output.json"
}
```

### Backward compatibility

Omit the `sitrep:` block entirely → the template renders `<div class="hdr-sub">{{subtitle}}</div>` as before. Existing gates (e.g. the P2 phase-exit gate at `SiteForge.aDNA/how/gates/p2_phase_exit_gate.html`) are immutable historical artifacts and stay unchanged. Quick-fire / legacy gates remain valid without a `sitrep` block.

### Authoritative spec

`SiteForge.aDNA/how/campaigns/campaign_siteforge_sis/missions/artifacts/sitrep_panel_spec_p3p_2.md` (locked 2026-05-22, operator-scored 5/5 one-round) — JSON schema, persona-token map, placement rule, CSS contract. Reference example: `SiteForge.aDNA/how/gates/p3p_3_demo_gate.{data.json,html}`.

## SWOT authoring discipline

The SWOT 2×2 panel (landed P3p.5; variant A-2 sentiment-cued) replaces freeform `analysis` / `context` prose with a structured 4-quadrant grid. Forces the agent to take explicit positions on present/forward × positive/negative axes; lets operators scan and compare sections at a glance.

**When to use SWOT vs. freeform**: prefer SWOT for any section where the operator must decide. Freeform `analysis` stays appropriate for narrative context that doesn't translate to bullets (e.g. quoting a partner-supplied paragraph). Default to SWOT unless prose is load-bearing.

### Field schema

Per-section (in `phase_exit.html`) or top-level (in `decision_gate_3option.html`):

```json
{
  "swot": {
    "strengths": ["Locks visual before code (P3p.2 pattern)", "Backward compat byte-identical", "11 tests green"],
    "weaknesses": ["CSS still inline in 3 templates", "Empty-quadrant case TBD"],
    "opportunities": ["Lift CSS to primitives at first multi-template use", "Pattern reused at P3p.6"],
    "threats": ["Grid wraps on narrow viewport", "Multi-byte char drift in bullet count"]
  }
}
```

| Key | Required | Convention |
|---|---|---|
| `swot.strengths` | yes (may be `[]`) | 1–4 bullets; **≤ 12 words per bullet** for scannability (soft cap; not enforced) |
| `swot.weaknesses` | yes (may be `[]`) | Same |
| `swot.opportunities` | yes (may be `[]`) | Same |
| `swot.threats` | yes (may be `[]`) | Same |

Empty arrays render as italic em-dash `—` placeholder — preserves 2×2 grid integrity; signals deliberate "no entries" rather than missing field.

### Quadrant semantics — pick by axis

| Quadrant | Axis | Pick when |
|---|---|---|
| `strengths` | present + positive | What the recommended path already has going for it; concrete evidence of the current state working |
| `weaknesses` | present + negative | What's missing, inadequate, or fragile in the current state; honest deficits |
| `opportunities` | forward + positive | What unlocks if we approve; downstream wins; cascading benefits |
| `threats` | forward + negative | What could go wrong; explicit risks; failure modes the operator should weigh |

Don't conflate axes — "we'll lift CSS to primitives" is an opportunity (forward), not a strength (present). When in doubt, ask "is this true today, or is it a future consequence?"

### Writing the bullets — apply D-WC carries

- **C-D5-1 verb-first labels** (for quadrants where bullets describe actions): "Lift CSS to primitives" beats "CSS lift to primitives". "Render em-dash placeholder" beats "Em-dash placeholder for empty quadrants".
- **C-DWC-1 anti-slop**: drop hedges, parentheticals, abstract framing. "Multi-byte char drift in bullet count" beats "There is potential drift in bullet length counts due to multi-byte characters when the locale is not UTF-8 normalized".
- **≤ 12 words is the line that fits on one row** in the locked grid. Bullets that wrap to 3+ lines kill scannability — the whole point of SWOT.

### Worked example (load-bearing section with full SWOT)

```json
{
  "id": "p3p_3_sitrep",
  "title": "SITREP panel implementation (P3p.3)",
  "swot": {
    "strengths": [
      "Locks visual before code (P3p.2 pattern)",
      "Backward compat byte-identical to baseline",
      "11 generator tests green first run"
    ],
    "weaknesses": [
      "CSS lives in 3 template <style> blocks pre-lift",
      "Empty-quadrant rendering not yet specified"
    ],
    "opportunities": [
      "Lift CSS to primitives at first multi-template use",
      "Helper pattern reused at P3p.6 recommendation"
    ],
    "threats": [
      "Grid wraps on viewports < 500px wide",
      "Multi-byte chars drift bullet-length word count"
    ]
  }
}
```

### Backward compatibility

Omit the `swot:` block entirely → the template renders `<div class="analysis-inner">{{analysis}}</div>` (sections) or `<div class="analysis-inner">{{context}}</div>` (decision_gate) as before. Existing gates (e.g. the P2 phase-exit gate) are immutable historical artifacts and stay unchanged. Quick-fire / legacy gates remain valid without `swot`.

### Authoritative spec

`SiteForge.aDNA/how/campaigns/campaign_siteforge_sis/missions/artifacts/swot_panel_spec_p3p_5.md` (locked 2026-05-23, variant A-2 sentiment-cued column-tint) — JSON schema, persona-token map, placement rule, CSS contract. Reference example: `SiteForge.aDNA/how/gates/p3p_5_demo_gate.{data.json,html}`.

## Writing discipline (D-WC carries from Dark-Mode 50-Cycle Sprint)

The Dark-Mode 50-Cycle Sprint's D-WC (Writing & Content) arc distilled five carry-forward findings about prose authoring inside SIS data JSON. Apply when populating any prose-bearing field (SITREP values, composite_question, section.title/analysis/verdict, footer_text, recommendation cards).

### C-DWC-1 — Anti-slop applies to data-JSON content

The 6 SITREP fields and every prose-bearing JSON key are operator-facing prose. Hedge phrases, parentheticals, meta-commentary, and abstract framing leak through to the rendered panel. Tighten before committing:

| Stuffy / verbose | Tight |
|---|---|
| "Confirm the locked Variant A SITREP panel renders correctly end-to-end through the generator and matches the P3p.2 ASCII reference" (175 chars) | "Verify the locked Variant A SITREP panel renders correctly and matches the P3p.2 ASCII reference." (97 chars) |
| "Validates the P3p.2 → P3p.3 implementation handoff; unblocks the rest of the SIS Mini-Sprint" (94 chars) | "P3p.2 → P3p.3 implementation handoff; unblocks the Mini-Sprint tail" (66 chars) |
| `wordmark`: `"SITEFORGE · OPERATION LOOM · P3p.3 SITREP DEMO"` (redundant suffix) | `wordmark`: `"SITEFORGE · OPERATION LOOM · P3p.3"` |

### C-DWC-2 — Verdict pattern: "Recommend X — \<one-line reason\>"

For any agent-authored verdict / recommendation / analysis-conclusion line, use the explicit recommendation form. Passive constructions ("Approve if visual matches; defer if any drift") underclaim agent confidence and force the operator to re-derive the agent's read.

| Passive / hedge | Verdict pattern |
|---|---|
| "Approve if visual matches; defer if any drift from spec." | "Recommend approve — render matches spec on dark/franklin substrate." |
| "This change may improve readability." | "Recommend land — adds 0.4 to CL axis; no regression in other 5." |
| "Looks acceptable; some concerns." | "Recommend amend — verdict line passive; rewrite as 'Recommend X — reason'." |

### C-DWC-3 — `composite_question` stays a decision-prompt; keep analysis separate

The `composite_question` field is the operator's ASK; the section `analysis` field is the agent's reasoning. Don't fold analysis content into the question — the panel splits them visually for a reason. If the question is long enough to need a "here's why" tail, move that tail into the analysis section.

| Conflated | Separated |
|---|---|
| `composite_question`: "Does the SITREP panel match the locked spec (Variant A, 3px colored left-border, mono labels + serif values, surface bg + border + radius-lg + accent-soft inner ring per D4 polish)?" | `composite_question`: "Does the SITREP panel match the locked spec (Variant A, 3px colored left-border, mono labels + serif values)?" `section.analysis`: "...surface bg + border + radius-lg + accent-soft inner ring (D4 polish)..." |

### C-D5-1 — Verb-first labels for radios, buttons, action options

Lead with the verb. Verb-first labels are objectively shorter, more scannable, and signal the action the operator takes when they pick that option.

| Noun-phrase | Verb-first |
|---|---|
| "Approval of cycle 23" | "Approve cycle 23" |
| "Rejection with rework" | "Reject — return for rework" |
| "Deferral to next cycle" | "Defer to next cycle" |
| "Score visual fidelity 1-5" | (already verb-first; keep) |

### C-D2-3 — Type-scale reference

When authoring custom inline styles or one-off components (rare; prefer primitives), pin to the established type-scale to stay coherent with the SIS substrate:

| Size | Use |
|---|---|
| 22 px | Title / hero |
| 15.5 px | Section title |
| 14 px | Body large |
| 13.5 px | SITREP value (default body) |
| 12.5 px | SITREP output-path (mono) · footer |
| 11 px | Caption · timestamp |
| 10.5 px | SITREP label (mono uppercase) |

Out-of-scale sizes (e.g. 16 px, 18 px) signal a missed primitive — check `SiteForge.aDNA/what/lib/sis/primitives/primitives.css` first.

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
