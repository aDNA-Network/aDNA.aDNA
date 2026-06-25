---
type: coordination
coord_class: inbound_proposal
status: needs_human
created: 2026-06-24
from: Berthier (Operation Keystone — Convergence, for Stanley)
to: Rosetta (aDNA.aDNA — standard owner)
cc: [Prometheus (Context.aDNA), Argus (III.aDNA)]
re: "Canonicalize Context7 as the cohort genesis-research instrument → propose skill_context_research"
source_refs:
  - aDNA.aDNA/how/skills/skill_context_graduation.md
  - aDNA.aDNA/how/skills/skill_context_quality_audit.md
  - aDNA.aDNA/what/docs/context_quality_rubric.md
tags: [context7, research, skill_proposal, context_graduation, rubric, keystone, coordination]
---

# Coord — adopt Context7 as the genesis-research instrument (propose `skill_context_research`)

## Finding (verified 2026-06-24)

**Context7 has zero references in the standard graph**, and **there is no `skill_context_research`** (or equivalent research skill). The vault's two context skills govern *promotion* and *scoring* (`skill_context_graduation`, `skill_context_quality_audit` + `context_quality_rubric`) but **not the upstream research pass** — methodology is currently re-derived per campaign. The Keystone cohort is about to run that pass ten times (install/operate/configure/update/interoperate, mostly `freshness_category: volatile`). It needs a named, repeatable, current-doc research instrument so each graph inherits the method instead of re-deriving it.

## Proposal

Adopt **Context7** as the cohort's primary genesis-research instrument and canonicalize it as a standard skill: **`skill_context_research`** (or, if lighter is preferred, a "Context7 research" section appended to an existing research note). Rationale: Context7 pulls **current, version-specific library/tool documentation** — exactly what `source_diversity` + `volatile` freshness demand for Caddy, Forgejo, Nebula, FastAPI, Nextcloud, Stalwart, Podman, MinIO, the inference runtimes, and Vaultwarden.

### The binding to the rubric (the non-negotiable part)

Raw doc dumps are **not context**. The skill must require:
1. **Context7 (or official version-current docs) as a primary source**, paired with the software's official docs/repo for primary grounding; **web search fills gaps** (operational war-stories, known-issue threads, security advisories) — but version-current docs lead.
2. **Distillation into the canonical format** (Key Principles → Recommendations → Examples → Anti-Patterns → Sources), explicit **version-pinning**, ephemeral detail stripped.
3. **A decision-posture layer** on every contested operational choice (recommendation + trade-off) — a file that merely paraphrases Context7 fails `actionability` and `signal_density`.
4. **6-axis scoring** (`context_quality_rubric`), composite ≥ 3.5, no floor (any axis ≤ 2). Software docs skew single-source → **`source_diversity` is the axis to defend**: require ≥ 3 source types (vendor + practitioner + community + original fleet-analysis).
5. **Indexing** in the topic AGENTS.md with `quality_score` frontmatter (unindexed = invisible = not done).

## Session note (honest)

**Context7 is not wired in this session** (no Context7 MCP present) — consistent with "new tool, no home yet." For the `core` exemplar (`Container.aDNA`, this convergence) I used **official Podman docs + web search** as the current-docs instrument and version-pinned explicitly, binding to the rubric exactly as the proposed skill would require. The exemplar therefore proves the *method* and the *rubric binding* even before Context7 is connected; wiring Context7 is the efficiency upgrade for the cohort-wide pass.

## Decision requested

Operator + Rosetta: greenlight authoring `skill_context_research` (Context7-primary, rubric-bound, per above), and confirm whether Context7 should be wired as an MCP for the cohort genesis pass. **No standard file has been amended** — this is a proposal in Rosetta's inbox. Status: `#needs-human`.
