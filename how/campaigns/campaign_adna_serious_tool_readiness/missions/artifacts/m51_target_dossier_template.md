---
type: artifact
artifact_id: m51_target_dossier_template
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission: mission_adna_str_p5_m51_research
created: 2026-05-25
updated: 2026-05-25
status: ratified
last_edited_by: agent_stanley
tags: [artifact, m51, v8, p5, research, dossier_template, 5_dimensions, six_field_per_dimension_structure, consumed_by_all_8_target_dossiers]
---

# M5.1 Per-Target Dossier Template

> **Purpose**: Canonical structure every `m51_dossier_<target>.md` file inherits. Ensures uniform dossier shape across all 8 OSS targets so M5.2 persona authoring + M5.3-M5.5 decadal cycles can grep for patterns without per-target schema drift. The 5 dimensions are defined in [`m51_dimension_framework.md`](m51_dimension_framework.md) §1; the six-field structure is defined there in §3.

---

## Template (copy + fill per target)

```markdown
---
type: artifact
artifact_id: m51_dossier_<target>
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission: mission_adna_str_p5_m51_research
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
status: complete   # or in_progress at S{N} open
last_edited_by: agent_stanley
target_name: <target>
target_url_canonical: <https://...>
target_category: <systems_language | frontend_framework | hosted_product | design_system | desktop_runtime | knowledge_tool | project_management | payment_sdk>
researched_at: <YYYY-MM-DD>
researched_by: <agent_or_subagent_id>
session_id: <session_id_of_research_pass>
tags: [artifact, m51, v8, p5, research, dossier, <target>, <target_category>, ...]
---

# M5.1 Per-Target Dossier — <Target Name>

**Target URL**: <canonical homepage URL>
**Category**: <one of 8 above>

## Executive take (2-3 lines above D1)

<2-3 sentence headline distillation of what makes this target distinctive for our purposes — what aDNA should lift overall, what to avoid overall.>

---

## D1 — Visual Identity & Brand Voice

### Characterization (≤ 80 words)

<one paragraph headline take>

### Evidence excerpts (3-5)

1. <≤ 3 sentences>. ([source-name](url))
2. <≤ 3 sentences>. ([source-name](url))
3. <≤ 3 sentences>. ([source-name](url))
4. [stretch] <≤ 3 sentences>. ([source-name](url))
5. [stretch] <≤ 3 sentences>. ([source-name](url))

### Pattern excerpts (1-3)

- **<Pattern name>**: <specific lift-worthy pattern observed; 1-2 sentences>.
- [stretch] **<Pattern name>**: <pattern>.
- [stretch] **<Pattern name>**: <pattern>.

### Anti-pattern excerpts (1-2)

- **Anti-pattern avoided / observed**: <specific avoid-worthy pattern; 1-2 sentences>.
- [stretch] **Anti-pattern**: <pattern>.

### Lift-or-avoid recommendation

aDNA should **LIFT** <named pattern> for **D{NN} <decadal name>** | OR | aDNA should **AVOID** <named pattern>; risk = <impact>.

### Persona-binding hint

Best evaluators: **<persona>**, **<persona>**, [stretch] **<persona>** — <one-line why>.

---

## D2 — Diagram & Infographic Patterns

[same six-field structure as D1]

---

## D3 — Onboarding & First-Contact

[same six-field structure as D1]

---

## D4 — Docs Architecture & Voice

[same six-field structure as D1; D4 is the "page-bloat anti-pattern" dimension and stretch fields are expected for most targets]

---

## D5 — Community & Trust Signals

[same six-field structure as D1]

---

## Summary of Key Lift Recommendations

| Dimension | Recommendation | Target Decadal | Key Risk |
|---|---|---|---|
| **D1 Visual Identity** | <LIFT or AVOID summary> | <DNN> | <risk if not followed> |
| **D2 Diagrams** | <summary> | <DNN> | <risk> |
| **D3 Onboarding** | <summary> | <DNN> | <risk> |
| **D4 Docs Architecture** | <summary> | <DNN> | <risk> |
| **D5 Community** | <summary> | <DNN> | <risk> |

---

## Sources fetched

1. <url> — <2-5 word description of what was extracted>
2. <url> — <description>
...
```

---

## Authoring discipline

- **Evidence excerpts must have URLs.** No paraphrase without source. M5.2/M5.3+ readers will follow these links; broken or hallucinated URLs invalidate the dossier.
- **Pattern names go in bold.** Future grep-ability across 8 dossiers depends on consistent emphasis.
- **Lift-or-avoid recommendation routes to a decadal.** Choose from D11-D20:
  - D11 Visual Identity v2 + Image Regen
  - D12 Clarity & Conciseness
  - D13 Infographic Generation
  - D14 README & First-Contact Polish
  - D15 Persona Page Consolidation
  - D16 Reference & Glossary Streamline
  - D17 Cross-Page Narrative Coherence
  - D18 Visual Hierarchy & Typography v2
  - D19 Mobile & Responsive v2
  - D20 Performance & Hardening & Adversarial Capstone
- **Persona-binding hints draw from the 21-persona bench** defined in `m50_persona_bench_expansion.md`. Use exact persona names.
- **Summary table is the consumer surface.** M5.2/M5.3+ readers may consult only this table; ensure each row is actionable.
- **Minimum depth per § m51_dimension_framework.md §4**: 3 evidence + 1 pattern + 1 anti-pattern + 1 recommendation + 1 persona-binding per dimension. Stretch where the target merits it.

## Authoring substrate (for sub-agent dispatch)

The dossier template above is the canonical output shape for both in-session authoring and parallel Explore-subagent dispatch. When dispatching a subagent (per `skill_substrate_gathering_subagent_dispatch.md` graduated pattern), include in the subagent prompt: (a) the 5-dimension framework §1 names + core questions, (b) the six-field per-dimension structure §3, (c) the canonical URL set for the target, (d) the decadal list for routing recommendations, (e) the 21-persona name list for binding hints. Subagent returns markdown matching the body of the template above; main-context agent transplants into the framed file with frontmatter.

## Cross-references

- **Dimension framework** (defines the 5 dims): [`m51_dimension_framework.md`](m51_dimension_framework.md)
- **Mission spec** (overall scope + acceptance criteria): [`../mission_adna_str_p5_m51_research.md`](../mission_adna_str_p5_m51_research.md)
- **21-persona bench expansion** (persona binding source): [`m50_persona_bench_expansion.md`](m50_persona_bench_expansion.md)
- **10-decadal theme set** (decadal routing source): [`m50_decadal_theme_set.md`](m50_decadal_theme_set.md)
- **Visual inspection methodology** (per-cycle Q&A bound to dimensions): [`m50_visual_inspection_methodology.md`](m50_visual_inspection_methodology.md)
- **Substrate-gathering subagent dispatch pattern** (graduated at M4.1): backlog at `aDNA.aDNA/how/backlog/idea_pattern_graduation_skill_authoring.md`
