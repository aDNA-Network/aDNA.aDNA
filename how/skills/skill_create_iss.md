---
type: skill
skill_type: agent
created: 2026-05-21
updated: 2026-05-26
status: active
category: communication
trigger: agent needs operator decision/input richer than AskUserQuestion can carry
last_edited_by: agent_siteforge_native
tags: [skill, iss, decision_gate, operator_io, operation_loom, sitrep_authoring_discipline, swot_authoring_discipline, d_wc_carries, canonical]
canonical_lifted_at: mission_p5_1_canonical_skill_lift
canonical_lifted_on: 2026-05-26
---

# skill_create_iss

> **Naming note**: ISS = *Interaction Surface Site* (this skill's context, not the International Space Station). Renamed 2026-05-23 at P3p.6r from SIS = *site-interaction-surface* — orientation flipped to frame these as the site that IS the interaction surface, rather than something living on a site. Lineage preserved in `campaign_siteforge_iss/CLAUDE.md`.

## When to invoke

Any of:
- ≥ 5 operator options
- > 2 sentences reasoning per option
- Multi-field structured input
- Copy-pasteable artifact the operator iterates on
- Decision benefits from side-by-side comparison or rich context

Otherwise prefer `AskUserQuestion` (≤ 4 options, no rich context).

## Vault adaptation

ISS is adopted differently depending on the aDNA pattern category of the consumer vault. The three adaptation guides at `SiteForge.aDNA/what/lib/iss/adaptation_guides/` cover all 8 categories — read the one matching your vault before authoring the first gate.

| Guide | Covers | When to read |
|---|---|---|
| `forge_platform_guide.md` | Forge.aDNA · Platform.aDNA | Adopting ISS in a forge (e.g. MoleculeForge, RareHarness, VideoForge) — IM-D Configure+Launch composite + ST2 multi-field input + Platform safety presets like `clinician_evaluation`. Canonical wrappers: MoleculeForge.aDNA/iss/ (Forge), RareHarness.aDNA/iss/ (Platform). |
| `framework_orgvault_orggraph_guide.md` | Framework.aDNA · Org-Vault · Org-Graph | Adopting ISS in a framework (III, ContextCompass), org-vault (LatticeLabs, WilhelmAI, ScienceStanley), or org-graph (CakeHealth, SuperLeague) — audience-respect doctrine + `partner_onboarding` preset + ADR ratification gates. Canonical wrapper: WilhelmAI.aDNA/iss/ (Org-Vault). Framework + Org-Graph remain hypothetical until first pilot wrapper deploys. |
| `network_node_coordination_guide.md` | Network.aDNA · Node · Coordination | Adopting ISS in a network (LatticeNetwork), node (node.aDNA), or coordination (TaskForge) — federation gates + local-by-default provenance per Workspace Standing Rule 4 + multi-stakeholder limitations (v2-scope) + gate-id ↔ lease-id linkage. All three remain hypothetical until first pilot wrappers deploy. |

Each guide includes a worked example, a 6-decision design extraction, and a per-category decision tree. Cross-vault wrappers deploy at `<vault>/iss/CLAUDE.md` with a `federation_ref:` block pinning the SiteForge ISS substrate version.

## Authoring workflow (the 7-step happy path)

1. **Pick outer tier** — probe `$DISPLAY`/`$BROWSER`/`open` + `<vault>/how/gates/` writable + receiver `:8765/health`. Pass → web. Fail + ≤4 opts → `AskUserQuestion`. Fail + rich context → copy-paste.
2. **Pick template** from `SiteForge.aDNA/what/lib/iss/templates/`: `decision_gate_3option`, `decision_gate_n_ranking`, `approval_gate`, `confidence_rating`, `phase_exit`, `structured_input_form`, `adr_gate`, `pilot_evaluation`.
3. **Pick persona** via `--persona`: default = consumer-vault persona; universal fallback = `franklin`. Available: franklin / hermes / rosetta / partner / tokyo / neutral.
4. **Bind data** — JSON keyed by the template's `{{placeholders}}` (title, options[], reasoning, context, gate_id, …). Optionally add a top-level `sitrep:` block (6 fields) — see §"SITREP authoring discipline" below. Optionally add structured `swot:` blocks per section (`phase_exit`) or top-level (`decision_gate_3option`) — see §"SWOT authoring discipline" below. Omit both for terse/legacy gates; templates fall through to existing `subtitle` and freeform `analysis`/`context` rendering.
5. **Generate**:
   ```bash
   python ~/lattice/SiteForge.aDNA/what/lib/iss/runtime/generator.py \
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
    "campaign": "campaign_siteforge_iss · Operation Loom",
    "phase": "Phase 3 — III Iterative Refinement",
    "mission": "P3.2 — Pre-cycle baseline",
    "gate_purpose": "Designate the case-study AAR as the III baseline and record initial 6-axis scores against the v2 ISS substrate.",
    "importance": "load-bearing",
    "importance_reason": "cascades to 10 decadal arcs (D1-D10)",
    "output_destination": "how/gates/p3_2_baseline_gate.output.json"
  }
}
```

### Fields

| Key | Required when `sitrep` present | Convention |
|---|---|---|
| `campaign` | yes | `<slug> · <code_name>` (e.g. `campaign_siteforge_iss · Operation Loom`) |
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
  "campaign": "campaign_siteforge_iss · Operation Loom",
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
  "campaign": "campaign_siteforge_iss · Operation Loom",
  "phase": "Phase 3 — III Iterative Refinement",
  "mission": "P3.2 — Pre-cycle baseline",
  "gate_purpose": "Designate the case-study AAR as the III baseline and record initial 6-axis scores against the v2 ISS substrate.",
  "importance": "load-bearing",
  "importance_reason": "cascades to 10 decadal arcs (D1-D10)",
  "output_destination": "how/gates/p3_2_baseline_gate.output.json"
}
```

**Irreversible** — workspace-canonical commit:
```json
"sitrep": {
  "campaign": "campaign_siteforge_iss · Operation Loom",
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

`SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/sitrep_panel_spec_p3p_2.md` (locked 2026-05-22, operator-scored 5/5 one-round) — JSON schema, persona-token map, placement rule, CSS contract. Reference example: `SiteForge.aDNA/how/gates/p3p_3_demo_gate.{data.json,html}`.

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

`SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/swot_panel_spec_p3p_5.md` (locked 2026-05-23, variant A-2 sentiment-cued column-tint) — JSON schema, persona-token map, placement rule, CSS contract. Reference example: `SiteForge.aDNA/how/gates/p3p_5_demo_gate.{data.json,html}`.

## Recommendation authoring discipline

The structured recommendation block (landed P3p.6; variant 1 flat stacked) replaces the per-section flat `verdict: string` + `actions: [string]` pair with `recommendation: { rationale, key_factors[], risks[], confidence, next_actions[] }`. Surfaces the agent's reasoning inline (not just the conclusion) — operator sees *why* before approving. Section-header `rec-pill` gains a `· ●●●●○` confidence-dot suffix when `confidence` is set.

**When to use structured rec vs. flat verdict+actions**: prefer structured for any section where the operator's approve/amend/defer decision benefits from auditable reasoning. Legacy flat shape stays valid for trivial / one-line sections where rationale + risks would be padding. Default to structured unless the section is genuinely simple.

### Field schema

Per-section (in `phase_exit.html`) or top-level (in `decision_gate_3option.html`, via `recommendation_full_block_html` placeholder):

```json
{
  "recommendation": {
    "rationale": "1–3 sentences — why this is the right call",
    "key_factors": ["Bullet — load-bearing consideration", "Bullet", "Bullet"],
    "risks": ["Bullet — what could go wrong", "Bullet"],
    "confidence": 4,
    "next_actions": ["Bullet — what happens on approve", "Bullet", "Bullet"]
  }
}
```

| Key | Required | Convention |
|---|---|---|
| `rationale` | recommended | 1–3 sentences; paragraph prose (not bullets); states the case for the recommended path |
| `key_factors` | recommended | 3–5 bullets; **≤ 14 words per bullet**; the considerations that drove the call |
| `risks` | recommended | 1–3 bullets; **explicit acknowledgment** of what could go wrong; never omit because "nothing's wrong" — author the bullet "No material risks at this scope" if so |
| `confidence` | recommended | Integer 1–5; agent's own confidence; renders as 5-dot indicator in CONFIDENCE row AND as section-header pill suffix |
| `next_actions` | recommended | 2–5 bullets; what happens on approve; lifted from the legacy `actions[]` shape |

All fields are optional; absent fields cleanly omit their subsection (no empty label). Empty `recommendation: {}` falls through to legacy `verdict` + `actions[]` if both are present, otherwise renders nothing in the rec block. **At minimum populate `rationale` + `key_factors` + `confidence`** — those three carry the load-bearing signal.

### Field semantics — pick by axis

| Field | Axis | Pick when |
|---|---|---|
| `rationale` | summative — why | The one-paragraph case for the recommended path; states the call in prose so the operator can read it in 5 seconds |
| `key_factors` | supportive — what | The 3–5 considerations the rationale rests on; each bullet should be a distinct load-bearing point, not a restatement of rationale |
| `risks` | adversarial — what could fail | The 1–3 failure modes the operator should weigh; force yourself to articulate them even when confidence is high |
| `confidence` | meta — how sure | The agent's honest 1–5 self-assessment; not a polling target — under-claim rather than over-claim |
| `next_actions` | prescriptive — what now | The concrete steps that happen on approve; previously the legacy `actions[]` list |

Don't conflate axes — "use the v1 PROTOTYPE state for all P3 authoring" is a `next_action` (prescriptive), not a `key_factor` (supportive). When in doubt: "is this why I recommend it, or what happens after we approve?"

### Writing the bullets — apply D-WC carries

- **C-D5-1 verb-first labels** for `key_factors` + `next_actions`: "Approve the v1 PROTOTYPE state" beats "v1 PROTOTYPE state should be approved". "Skill captures all 7 sections" beats "There are 7 sections captured in the skill".
- **C-DWC-1 anti-slop**: drop hedges, parentheticals, abstract framing. "Cross-vault propagation manual until P5.5" beats "It should be noted that cross-vault propagation may potentially still need to be handled manually pending the arrival of P5.5".
- **≤ 14 words per bullet** keeps each bullet a one-row read; **rationale** can be longer (1–3 sentences) because it's paragraph prose, not a list.
- **Honest confidence**: 5 = "I'd stake my work on this"; 4 = "high confidence, one nagging risk"; 3 = "right call as I see it, but operator may have context I don't"; 2 = "leaning this way; need operator input"; 1 = "low confidence; flagged for discussion". Don't inflate.

### Worked example (full structured rec — load-bearing section)

```json
{
  "id": "p2_1",
  "title": "Authoring skill",
  "rec_class": "approve",
  "rec_label": "APPROVE",
  "question": "Is the prototype skill sufficient for Phase 2's needs?",
  "recommendation": {
    "rationale": "Authoring skill provides the load-bearing scaffold for rapid ISS creation. At 99 LOC (cap = 100) it covers the full authoring pattern without leaking architectural detail, and the PROTOTYPE marker keeps the canonical-lift seam visible for P5.1.",
    "key_factors": [
      "Skill captures all 7 sections required for cold-start authoring",
      "Forward-references to P2.2-P2.4 artifacts resolve at P2.5 — no broken links",
      "PROTOTYPE banner + frontmatter make the v1 fitness boundary explicit"
    ],
    "risks": [
      "Skill lives in aDNA.aDNA/how/skills/ at PROTOTYPE — agents must understand the lift seam",
      "Workspace Standing Order #8 wording was ambiguous; flagged for P5.3 sweep"
    ],
    "confidence": 4,
    "next_actions": [
      "Approve the v1 PROTOTYPE state and use for all P3 mini-sprint authoring",
      "Defer canonical lift + banner removal to P5.1 ceremony",
      "P5.3 absorbs the Standing Order #8 wording clarification"
    ]
  }
}
```

### Backward compatibility

Two legacy shapes still work:

1. **Bare strings in `actions`**: `"actions": ["step 1", "step 2"]` — generator handles both string lists and `[{"value": "..."}]` dict lists in the legacy fallback path.
2. **Omit `recommendation` entirely**: section renders the legacy `.rec-verdict` + `.rec-actions` from `verdict` + `actions` fields. No section-header confidence-dot suffix (since `recommendation.confidence` is absent).

Existing gates (e.g. the P2 phase-exit gate at `SiteForge.aDNA/how/gates/p2_phase_exit_gate.html`) without `recommendation` blocks stay valid. The augmentation pattern (add `recommendation` alongside existing `verdict` + `actions` for forward compat) was used at P3p.6 cycle 6b/6c on P2.1 + P2.3.

### Top-level rec (decision_gate_3option, optional)

`decision_gate_3option.html` has NO static `.rec-block` container in markup. The `{{recommendation_full_block_html}}` placeholder renders the full block (orange container + ◆ label + structured inner) when top-level `data.recommendation` is provided, OR empty string when absent — the placeholder vanishes silently. Use this when you want a single agent-recommendation summary above the operator's option picks (e.g. "the agent recommends Option B because…").

### Authoritative spec

`SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/recommendation_block_spec_p3p_6.md` (locked 2026-05-23, variant 1 flat stacked) — field schema, axis semantics, visual constraints, CSS contract, token list. Reference example: `SiteForge.aDNA/how/gates/p3p_6_demo_gate.{data.json,html}` exercises all 3 render paths (full / partial / legacy).

## Visual artifact discipline

The ISS substrate supports **Tier-1 visual artifacts** (monospace ASCII inside `<pre>`) at section scope. Tiers 2 (mermaid) and 3 (image) remain proposed (`SiteForge.aDNA/how/backlog/idea_iss_visual_artifacts.md`); absorb at a later decadal arc or successor campaign. Authored at P3p.8 — locked spec `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/visual_ascii_spec_p3p_8.md`; reference example `SiteForge.aDNA/how/gates/p3p_8_demo_gate.{data.json,html}` exercises mixed-mode (1 section with visual + 1 without).

### Schema

Section-level, additive on the existing P3p.6 section shape — both fields optional:

```json
{
  "id": "s1",
  "title": "...",
  "swot": {...},
  "recommendation": {...},
  "visual_ascii": "┌─────────────┐\n│ stack frame │\n└─────────────┘",
  "visual_caption": "v2+Tier-1 ISS stack — top to bottom"
}
```

Missing `visual_ascii` → no markup emitted; backward-compat byte-identical. Rendered inside the section card between the SWOT/analysis block and the rec block. Caption renders directly below the `<pre>` in mono-dim. Content + caption are HTML-escaped via stdlib `html.escape()` (XSS-safe; Unicode box-drawing characters pass through; literal `<` / `>` / `&` get correctly escaped).

### When to add a visual

| Add visual when… | Stay prose-only when… |
|---|---|
| Decision involves architectural relationships (components, layers, stacks) | Decision is purely textual / narrative |
| Schema / data shape needs to be inspected | Operator can hold the structure in working memory |
| Workflow / process / state machine is load-bearing | Single-step or trivially sequential decision |
| Timeline / cascade / dependency graph affects choice | No temporal / dependency structure |
| Quantitative delta / comparison aids judgment | Numbers are simple (1-2 values) and named clearly |
| Operator unfamiliar with the domain | Operator deeply familiar; visual would be remedial |

### Anti-pattern guard

- **Augment, never substitute.** Prose (`rationale`, `key_factors`, `risks`) carries the load-bearing decision content. A visual that contradicts the prose is worse than no visual.
- **Auditability.** Visual cannot introduce facts absent from prose.
- **Decidability.** Removing the visual must not break the gate — operator must be able to decide from prose alone.
- **Soft cap ≤ 2 visuals per gate.** More than 2 → consider whether the gate should split.

### Authoring conventions

- **Box-drawing characters preferred** for stacks / trees / tables: ─│┌┐└┘├┤┬┴┼ ╔╗╚╝═║. Avoid pure-ASCII `+----+` shapes when Unicode is cleaner.
- **Pin the line width** before drawing — narrow content (≤ 32 chars) renders cleanly on mobile too.
- **Caption is one line.** If you need a paragraph, that's not a caption — put it in `rationale` and let the visual speak for itself.
- **Soft cap reminder.** Two visuals = the practical max per gate. Three or more = signal the gate should split.

### Out of scope (forward — Tier 2 / Tier 3)

- **Tier 2 — `visual_mermaid`**: client-side mermaid render via bundled or CDN `mermaid.min.js`. Bundle / CDN decision + persona theme integration required. Deferred.
- **Tier 3 — `visual_image`**: API-generated PNG/SVG sidecar assets at `<gate_id>.assets/<name>.{png,svg}`. API integration + sidecar discipline + alt-text fallback required. Deferred.
- **Top-level `visual_ascii`** on single-card templates (`decision_gate_3option`, `adr_gate`). Deferred until first real gate needs it.

## Writing discipline (D-WC carries from Dark-Mode 50-Cycle Sprint)

The Dark-Mode 50-Cycle Sprint's D-WC (Writing & Content) arc distilled five carry-forward findings about prose authoring inside ISS data JSON. Apply when populating any prose-bearing field (SITREP values, composite_question, section.title/analysis/verdict, footer_text, recommendation cards).

### C-DWC-1 — Anti-slop applies to data-JSON content

The 6 SITREP fields and every prose-bearing JSON key are operator-facing prose. Hedge phrases, parentheticals, meta-commentary, and abstract framing leak through to the rendered panel. Tighten before committing:

| Stuffy / verbose | Tight |
|---|---|
| "Confirm the locked Variant A SITREP panel renders correctly end-to-end through the generator and matches the P3p.2 ASCII reference" (175 chars) | "Verify the locked Variant A SITREP panel renders correctly and matches the P3p.2 ASCII reference." (97 chars) |
| "Validates the P3p.2 → P3p.3 implementation handoff; unblocks the rest of the ISS Mini-Sprint" (94 chars) | "P3p.2 → P3p.3 implementation handoff; unblocks the Mini-Sprint tail" (66 chars) |
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

### C-D4-1 — Verb-first extends to JS-populated content (CF-D3→D4-1)

The D2-C18 verb-first contract for `composite_title` extends to two additional surfaces an agent may author:

- **`consequence_text`** (optional opt-in override for the hardcoded `consequence_explicit` subtitle) — name the action the operator is authorizing, verb-first. "Commit this decision permanently…" beats "The decision will be recorded…".
- **Review-dialog body fragments** populated by template JS from live state — the section titles + ranker axis labels the JS reads must themselves be verb-first so the auto-populated review reads as a coherent decision summary.

Set `validate_authoring: true` in the data JSON to enable a stderr advisory log when the generator detects a non-verb-first opener (no render-time behavior change; default off, byte-identical render). Recognized decision-verb allowlist + full contract at `SiteForge.aDNA/what/lib/iss/templates/README.md` § "Title authoring discipline" → § "JS-populated content discipline".

### C-D2-3 — Type-scale reference

When authoring custom inline styles or one-off components (rare; prefer primitives), pin to the established type-scale to stay coherent with the ISS substrate:

| Size | Use |
|---|---|
| 22 px | Title / hero |
| 15.5 px | Section title |
| 14 px | Body large |
| 13.5 px | SITREP value (default body) |
| 12.5 px | SITREP output-path (mono) · footer |
| 11 px | Caption · timestamp |
| 10.5 px | SITREP label (mono uppercase) |

Out-of-scale sizes (e.g. 16 px, 18 px) signal a missed primitive — check `SiteForge.aDNA/what/lib/iss/primitives/primitives.css` first.

### C-D6-1 — Mobile + Responsive discipline

The D6 decadal arc (cycles 51-60) added layered mobile + responsive behavior across the substrate. Authors writing new gates or new sibling templates MUST observe:

**Touch targets (≥44px at ≤600px viewport)**:
- Every interactive element (button, radio, link in actions area) gets ≥44px effective tap target at mobile.
- The substrate's `@media (max-width: 600px)` block in `primitives.css` already covers `.gen-btn`, `.cancel-btn`, `.copy-btn`, `.radio-opt`, `.scale .radio-opt`, `.radio-opt--defer`. New interactive elements added to template `<style>` blocks must mirror.

**Single-column layout (at ≤640px)**:
- Any 2-column grid the author adds (`grid-template-columns: <fixed> 1fr` or `1fr 1fr`) MUST have a `@media (max-width: 640px) { … grid-template-columns: 1fr; }` companion rule.
- The substrate handles `.swot-grid`, `.sitrep`, `.iss-review-dl`, `.submit-feedback-dl`, `.hdr` in primitives.css. Template-local `.axis-row` is handled in the template's own `<style>` block (cascade order — template `<style>` loads after primitives, so primitives.css cannot override template-internal rules).

**No-horizontal-scroll**:
- Long-text containers (titles, decision questions, list items, key/value cells) declare `overflow-wrap: break-word` so over-cap text wraps rather than overflowing.
- The substrate covers `.c-title`, `.swot-list`, `.sitrep-val` in primitives, and `.composite-title`, `.composite-q` in phase_exit. New text containers in sibling templates should mirror.
- Pair this with D5 authoring advisories: `validate_authoring: true` flags titles >80 chars; `overflow-wrap` makes the wrap graceful when slip-through happens.

**Form fields full-width at mobile**:
- The substrate's `@media (max-width: 600px)` block in primitives sets `width: 100%; box-sizing: border-box;` on `textarea, input[type="text|number|email|search"]` as a safety net.
- Per-input rules that already declare `width: 100%` at desktop are unaffected.
- Template-local number/text inputs without explicit width SHOULD add a template-local `@media (max-width: 640px) { .my-input { width: 100%; box-sizing: border-box; } }` rule.

**No hover-only interactions**:
- Every `:hover` rule MUST have a `:focus-visible` or `:focus-within` sibling so keyboard and touch users get the same affordance. Touch users have no hover state at all.
- Audit before adding any new `:hover`: does a touch user need this feedback? If yes, add the sibling rule.

**Auto-save drafts (opt-in `auto_save_drafts: true`)**:
- D3's `save_draft: true` surfaces a modal restore dialog; D6 adds an inline non-modal resume banner via `auto_save_drafts: true`. Independent flags — banner takes UI precedence at init if both enabled.
- Enable for mobile-targeted gates and long-form gates where the modal would feel intrusive. Default-off preserves existing behavior.

**Authoritative spec**: `SiteForge.aDNA/what/lib/iss/templates/README.md` §"Mobile + Responsive contract (D6)" + §"Auto-save drafts contract (D6-C57)".

### C-D7-1 — Error recovery + resilience discipline

The D7 decadal arc (cycles 61-70) added a coherent error-recovery contract spanning seven UX surfaces + receiver/watch backend hardening. Authors writing new gates SHOULD opt in to the appropriate D7 flags for their gate's risk profile:

**Cancel-without-loss (`confirm_discard_when_dirty: true`, D7-C62)**:
- Use when the gate is multi-section or otherwise time-consuming to fill.
- Default D3-C26 `window.confirm()` fires regardless of state; the D7 flag only confronts the operator when work would be lost (clean state closes immediately — frictionless cancel for unused gates).

**Partial-save guarantees (`partial_save_interval_ms: 30000`, D7-C63)**:
- Use for long-form gates where the operator may step away mid-fill. Pairs naturally with `save_draft: true`.
- Adds a visible 30s heartbeat via the `.save-status-pill` + onblur trigger. The actual persistence is unchanged (D3 `StateManager` writes on every set); the heartbeat is operator-visible reassurance.

**Actionable error-state messaging (`PRIM-ERROR-STATE` primitive, D7-C64)**:
- Use `build_error_state_html(problem, action, retry)` for any new error surface. The triplet is the canonical actionable-error shape: WHAT broke / WHAT to do RIGHT NOW / HOW to retry.
- Bare strings like "An error occurred" are NOT acceptable — the gate must name the problem AND the action AND the retry path.
- HTML-escape all three fields (the helper does this; manual error construction should mirror).

**Ambiguous-input guidance (`validate_authoring: true` extended, D7-C65)**:
- The existing `validate_authoring` lint now also catches duplicate `value` OR `label` strings within any radio group. Enable during gate authoring to catch accidental copy-paste duplications.
- For intentional similarity (two options with overlapping wording but distinct intent), render `.ambiguity-hint` inline below the option label as a disambiguator.

**Gate-expiry handling (`expires_at: "<ISO 8601>"`, D7-C66)**:
- Set when the gate's authoring context has a wall-clock deadline (e.g. agent-session-window expiry; pilot-evaluation cutoff).
- The overlay is a WARNING (dismissable + lets operator continue) — not a hard block. Use `expiry_messages: {problem, action, retry}` to override the default messages with gate-specific context.

**2-step confirm for unrecoverable actions (`confirm_two_step: true`, D7-C67)**:
- ONLY effective when paired with `irreversible: true` (the existing D3-C25 review-dialog flag). Standalone `confirm_two_step` is a no-op.
- Adds the type-`SUBMIT` text input matching AWS console + GitHub enterprise-gate patterns. Case-sensitive, exact match required.
- Use for substrate-altering decisions where accidental submit would force a manual rollback.

**Back-button safety (`guard_unload: true`, D7-C68)**:
- Use for any gate the operator should not lose mid-fill. Two-layer protection: `beforeunload` covers tab-close/refresh; `history.pushState` covers back-button.
- The `beforeunload` guard only fires when `isStateDirty()` returns true — clean state doesn't bother the operator with the unsaved-changes prompt.

**Receiver-port discovery (D7-C69, F-2)**:
- `gate_receiver.py` v0.3.0 auto-discovers a free port on collision (scans `--port..+10` by default) and writes `<gates_root>/.gate_receiver.port` as the single-source-of-truth pointer.
- `generator.py` reads the sidecar at gate creation and embeds the active port via `<body data-receiver-url="...">`. No author action required — explicit `receiver_url` in data.json overrides; absence triggers sidecar discovery; both absent falls back to `localhost:8765`.

**Watch-pattern hardening (D7-C69, F-4)**:
- Reference: `aDNA.aDNA/how/skills/skill_watch_iss.md` §"D7-C69 hardening (F-4)".
- Wrap watch loops with `timeout 7200` (2-hour cap); use `[ -e ]` over `[ -f ]` for symlink/special-file safety; agent scans `how/gates/*.output.json` on session-open for cross-session resume.

**Authoritative spec**: `SiteForge.aDNA/what/lib/iss/templates/README.md` §"Error-recovery contract (D7)".

### C-D8-1 — Multi-modal coherence discipline

D8 ensures the operator experiences the gate the same way regardless of which tier of
the fallback chain is active. Five opt-in surfaces — all default-off, byte-equivalent
when unset.

**3-tier fallback chain** (the canonical interpretation of "multi-modal"):

| Tier | Channel | When to invoke |
|---|---|---|
| **Tier 1** | Web (rendered HTML, browser-opened, receiver-bound) | Default. Browser reachable + receiver port can bind. |
| **Tier 2** | AskUserQuestion harness tool | Browser unreachable but harness has AUQ available (Claude Code remote session, etc.). Paste the AUQ payload from the Tier 2 fallback block of the rendered HTML. |
| **Tier 3** | Plain-text copy-paste (chat / email / terminal) | No harness, no browser. Copy the plain-text block from the rendered HTML into any text channel. |

**Detection is agent-side**, not generator-side. The generator emits ALL three tier
surfaces into the HTML when `show_fallback_tiers: true`; the calling agent picks the
one the environment supports.

**Five D8 opt-in flags**:

| Flag | Effect | Default |
|---|---|---|
| `sync_expiry_across_tabs: true` | BroadcastChannel sync of `.iss-expired-dialog` across browser tabs sharing the same `gate_id` (CF-D7→D8-1). Requires `expires_at`. | false |
| `show_tier_indicator: true` | Small "Tier 1 · Web" badge near the header wordmark. Optional `tier_label` overrides the badge text. | false |
| `show_fallback_tiers: true` | Renders BOTH the Tier 2 AUQ JSON payload + the Tier 3 plain-text template in collapsed-by-default `<details>` blocks below the composite section. | false |
| `composite_options: [...]` | Overrides the canonical 3-option set (APPROVE/AMEND/DEFER). Tier 2 + Tier 3 mirror automatically — no per-tier paraphrase. | — |
| (existing) `escape_hatch: true` | Adds NEED MORE INFO as a 4th option across all tiers (Tier 1 radio + Tier 2 AUQ option + Tier 3 numbered list). | false |

**Anti-pattern guard**: do NOT paraphrase option labels between tiers. The
`_canonical_composite_options(data)` function is the single source of truth. Authors
override via `composite_options` in data; the helper threads the same option list into
Tier 1 (template hardcoded; advisory parity lint when `validate_authoring: true`),
Tier 2 (AUQ payload), and Tier 3 (numbered plain-text list).

**gate_id is load-bearing under D8**. When any D8 flag is active, `_check_gate_id_consistency()`
raises `ValueError` if `gate_id` is missing or not slug-shaped (`^[a-z0-9][a-z0-9_-]*$`).
Cross-tier coherence anchors on this single identifier.

**Authoritative spec**: `SiteForge.aDNA/what/lib/iss/templates/README.md` §"Multi-modal coherence contract (D8)".

### C-D9-1 — Onboarding discipline (dual audience)

D9 (the tenth decadal arc) makes the gate self-explanatory for two audiences in parallel:
the first-time human operator + the fresh agent in a sibling vault who has never invoked
ISS before. Five new opt-in boolean flags + one new enum + six new optional override
fields, all default-off byte-equivalent.

**Five new opt-in flags**:

| Flag | Effect | Default |
|---|---|---|
| `first_timer_hint: true` | Dismissable banner at top of body explaining the gate flow. localStorage key `iss-seen-<gate_id>` records dismissal per-device per-gate. Override copy via `first_timer_hint_message` (HTML-escaped). | false |
| `decision_significance: "phase_exit"\|"advisory"\|"reversible"` | Small badge near `composite_title` naming decision weight. Tone cascades from existing `--semantic-*` tokens — no new tokens. Unrecognized value renders empty + emits `validate_authoring` lint. | — |
| `show_post_submit_explainer: true` | Collapsed-by-default `<details>` block between `composite_question` and the form. 3-step Output / Next reader / Revision list. Reversibility line pulls from `decision_significance` when set. Overrides: `post_submit_reviewer_text`, `post_submit_output_text`. | false |
| `confidence_tooltips: true` | Collapsed `<details>` block under the 5-radio confidence scale with a 5-row `<dl>` mapping each rating to its canonical meaning. Closes the sighted/SR-parity gap on confidence-radio aria-labels. | false |
| `show_provenance: true` | Inside the existing `<footer role="contentinfo">`, adds a 2-column `<dl>` (Vault / Requesting agent / Authored by / Why). Overrides: `provenance_skill_version`, `provenance_why`, `requesting_agent`. | false |

`show_fallback_tiers: true` (existing from D8) gains a new surface at D9-C81: an
explanatory preamble above the Tier 2/3 fallback blocks naming the 3-tier chain.
Validates that the D8 fallback blocks function as onboarding surfaces. Same opt-in flag —
no new flag introduced.

**Audience #2 — the agent-onboarding contract** (D9-C86 / D9-C87):

A fresh agent in any sibling vault must discover and use ISS via the canonical T1→T4
trace in ≤ 2 min:

| Tier | Path | Role |
|---|---|---|
| T1 | `~/lattice/CLAUDE.md` | Workspace router — routes to `SiteForge.aDNA` |
| T2 | `~/lattice/SiteForge.aDNA/CLAUDE.md` Standing Rule 8 | Project governance — names canonical skill + library code path |
| T3 | `~/lattice/aDNA.aDNA/how/skills/skill_create_iss.md` | THIS document — single canonical authoring skill |
| T4 | `~/lattice/SiteForge.aDNA/what/lib/iss/runtime/generator.py` | Library — `from what.lib.iss.runtime import generator` |

Four contract conditions: every tier points at next; no out-of-context references;
T3 lists full opt-in flag inventory; T4 importable without side effects. Verified by
inspection at D9-C87 against the MoleculeForge.aDNA-perspective trace —
`zero_regression_confirmed: true` (artifact:
`SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/cross_vault_discovery_d9.md`).

**Anti-pattern guards**:

- Don't enable `first_timer_hint` without a stable slug-shaped `gate_id` — the
  localStorage dismiss key needs it.
- Don't enable `show_post_submit_explainer` without populating `consequence_text` OR
  `decision_significance` — the explainer's Revision line is then less actionable.
- Don't paraphrase the `CONFIDENCE_SCALE_MEANINGS` controlled vocabulary across surfaces;
  the helper is the single source of truth.

**Authoritative spec**: `SiteForge.aDNA/what/lib/iss/templates/README.md` §§ "Onboarding
contract (D9-C81)", "Decision-significance badge (D9-C82)", "Post-submit explainer
(D9-C83)", "Confidence tooltips (D9-C84)", "First-timer hint (D9-C85)", "Agent
onboarding contract (D9-C86)", "Provenance footer (D9-C88)".

### C-D10-1 — Persona handoff + skin selection discipline

D1-D9 surfaced 20+ opt-in flags and 6 personas. D10 consolidates them so a calling agent
in a consumer vault picks the right combination via 4 composable layers (vault skin →
preset → per-gate flags → persona), with explicit values always winning over defaults.

**Decision tree** when authoring a new gate:

| Layer | Choose by asking | Default behavior |
|---|---|---|
| **Skin** | Which consumer vault owns this gate? | If `skin: "<vault_id>"` set, descriptor at `SiteForge.aDNA/what/lib/iss/skins/<vault_id>/skin.yaml` loads. Fills in `preset` if descriptor names one and `data` lacks one. Appends `brand_css` to TOKENS_CSS. |
| **Preset** | Which decision class is this? | `partner_onboarding` / `clinician_evaluation` / `minimal_ux` / `enterprise_decision`. Expands to a flag bundle. |
| **Flags + fields** | Any per-gate overrides? | Explicit values in `data` beat skin + preset defaults. |
| **Persona** | Which visual identity should the operator see? | `persona=` arg to `generate()`. Skin's `recommended_persona` is a *hint*, not a binding. |

**Resolution order** — `generate()` runs:

1. `_resolve_skin(data)` — descriptor fills in `preset` default + brand_css
2. `_resolve_preset(data)` — preset expands to flag defaults (explicit values still win)
3. `_advisory_log_authoring(data)` — lints walk the merged view
4. Renders with the resolved data

**Cross-vault staging boundary**: D10 stages skin descriptors INSIDE
`SiteForge.aDNA/what/lib/iss/skins/<vault_id>/`. Phase 4 deploys consumer-vault wrappers
under operator gate per Campaign SO #12. Do NOT write into MoleculeForge.aDNA /
RareHarness.aDNA / WilhelmAI.aDNA from the SiteForge side.

**Worked example** — RareHarness clinician-grade dataset-share gate with an explicit
override:

```python
data = {
    "skin": "rareharness",                # vault identity → applies clinician_evaluation
    "gate_id": "approve_dataset_share_001",
    "composite_title": "Approve patient-data share with KINN L1",
    "decision_significance": "advisory",   # OVERRIDE skin's clinician-eval default ('phase_exit')
    # ... section data ...
}
html = generator.generate("phase_exit", persona="franklin", font_mode="online", data=data)
# Result: confirm_two_step / irreversible / show_provenance all True (skin → preset)
#         decision_significance = "advisory" (explicit per-gate override won)
```

**Anti-patterns to avoid**:

- Don't set `skin: "rareharness"` AND `persona: "partner"` in the same gate — the skin
  cascades dark-substrate tokens that don't compose with partner's light bg. The skin
  `recommended_persona` exists for this reason.
- Don't paraphrase preset semantics in per-gate copy — the four preset names are the
  controlled vocabulary; downstream consumers (III RLHF aggregation, telemetry) read
  these strings directly.
- Don't author skin descriptors that fork `tokens_base.css` defaults — the brand_css
  block is for layer-on identity, not base-token replacement. Base tokens stay
  semantically uniform across all consumer vaults (this is what `tokens_base.css`
  is *for*).

**Authoritative spec**: `SiteForge.aDNA/what/lib/iss/templates/README.md`
§§ "Presets family (D10-C91)" and "Persona handoff + skin selection (D10-C97)"; skin
descriptor contract at `SiteForge.aDNA/what/lib/iss/skins/README.md`.

## Gotchas

### Mustache-literal in data JSON text (F-3, P2 case-study)

The generator is single-pass mustache: data JSON text containing the literal `{{` sequence gets partially interpreted as a placeholder and substituted away. This bites most often when authoring a gate ABOUT mustache templates (e.g. a phase-exit gate analyzing template syntax) or quoting generator code in `analysis` / `rationale` prose.

**Workaround**: HTML-entity-escape the braces in the data JSON. Use `&#123;&#123;` for `{{` and `&#125;&#125;` for `}}`. The HTML render preserves the visible braces; the mustache pass sees entities, not literal braces.

**Surfaces affected**: SITREP values, `composite_question`, `section.title` / `analysis` / `verdict`, `footer_text`, `recommendation.rationale` / `key_factors` / `risks` / `next_actions`, `swot` quadrants — anywhere prose appears in the data JSON.

**Alternative**: if you need many literal braces, author the prose without them and add a separate `visual_ascii` block with the brace-bearing snippet — `visual_ascii` content goes through `html.escape()` only, no mustache pass.

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

## References

**Substrate library** (SiteForge ISS, current at v0.3 / HEAD `903f461`):
- `SiteForge.aDNA/what/lib/iss/runtime/{generator.py, gate_receiver.py, round_trip.js, state_manager.js}`
- `SiteForge.aDNA/what/lib/iss/templates/*.html` (8 templates)
- `SiteForge.aDNA/what/lib/iss/tokens/persona_*.css` (6 personas + neutral + base)
- `SiteForge.aDNA/what/lib/iss/skins/<vault_id>/skin.yaml` (consumer-vault skin descriptors)
- `SiteForge.aDNA/what/lib/iss/adaptation_guides/{forge_platform,framework_orgvault_orggraph,network_node_coordination}_guide.md` (8-category vault adaptation guidance — see "Vault adaptation" section above)

**Operator-side pairings** (canonical aDNA skills; absorbed into `RemoteControl.aDNA` when its GUI pillar lands):
- `aDNA.aDNA/how/skills/skill_open_iss.md` — open + position window (macOS osascript)
- `aDNA.aDNA/how/skills/skill_watch_iss.md` — agent-side auto-resume watch pattern
- `SiteForge.aDNA/how/skills/skill_manage_gate_receiver.md` — receiver lifecycle start/stop/status/clean (SiteForge-local until next canonical-lift)

**Campaign provenance**: built at `campaign_siteforge_iss` ("Operation Loom") P2.1; promoted to canonical at P5.M1 (2026-05-26). Architecture spec: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/architecture_spec_p1_2.md`.
