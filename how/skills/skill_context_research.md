---
type: skill
skill_type: agent
created: 2026-06-24
updated: 2026-06-24
status: active
category: research
trigger: "Genesis of a new <Software>.aDNA graph topic (install/configure/operate/update/observe + interop), or any new volatile-domain context topic, where a version-current research pass must produce context_research file(s)"
last_edited_by: agent_stanley
tags: [skill, context, research, context7, rubric, genesis, software_graph]
---

# Skill: Context Research

## Purpose

The **upstream research pass** of the context pipeline — the step that turns current, version-specific source material into a `context_subtype: context_research` file. The vault already governs the *back half* of the pipeline: [[skill_context_graduation]] promotes deliverables into the library and [[skill_context_quality_audit]] scores them against [[context_quality_rubric]]. Neither governs the *research itself* — so methodology was re-derived per campaign. This skill names it, so each new graph **inherits** the method instead of reinventing it.

It exists because the Operation Keystone cohort runs this pass ten times (one per `<Software>.aDNA` deployment graph), and most of that content is `freshness_category: volatile` (TLS/ACME defaults, runtime networking, release cadence). Volatile + single-source-prone is exactly where an unguided research pass fails the rubric.

## When to Invoke

- **Primary** — a `<Software>.aDNA` software-deployment-graph genesis ([[adr_037_software_deployment_graph_subtype|ADR-037]]): the five-verb operations spine + the interop seams. Sequence and per-graph spec live in `how/campaigns/campaign_keystone/artifacts/convergence_20260624/cohort_genesis_research_plan.md`.
- **Secondary** — any new context topic in a fast-moving domain where **currency** and **source diversity** carry the quality risk.
- **Pairs with** — run this skill, then [[skill_context_quality_audit]] gates the output; [[skill_context_graduation]] applies when the source is a completed campaign rather than a net-new research target.

## The Research Instrument

| Tier | Source | Role |
|------|--------|------|
| **Primary (preferred-when-wired)** | **Context7** — version-current library/tool docs (MCP) | leads on version-specific API/config surface when connected |
| **Primary (standing fallback)** | the software's **official docs + repo** (releases, changelog, security advisories) | the proven instrument; **always sufficient on its own** — the Container exemplar (composite 4.2) was authored this way with Context7 unwired |
| **Gap-fill** | **web search** — practitioner write-ups, known-issue threads, advisories | fills operational war-stories and footguns the official docs omit |

> **Posture:** Context7 is the *efficiency upgrade*, not a hard dependency. If it is not wired, proceed official-docs-bound and note it in the file's version-currency line (`Context7 not wired at authoring; pinned from official docs + release feeds`). Version-current docs **lead**; the file is distilled from them, never dumped.

## The Rubric Binding (non-negotiable)

A raw doc dump is **not context**. Every `context_research` file MUST:

1. **Lead with version-current docs** (Context7 or official), paired with the repo for primary grounding; web search fills gaps — but currency leads.
2. **Distill into the canonical format** — Key Principles → Recommendations → Examples → Anti-Patterns → Sources — with an explicit **version pin** and ephemeral detail stripped.
3. **Carry a Decision-Posture layer** on every contested operational choice (recommendation + trade-off). A file that merely paraphrases the docs **fails** `actionability` and `signal_density`.
4. **Pass the 6-axis rubric** ([[context_quality_rubric]]): composite ≥ 3.5, **no axis ≤ 2** (the floor rule).
5. **Defend `source_diversity`** — software docs skew single-source, so this is the axis that fails first. Require **≥ 3 source types**: vendor/official + practitioner + community/empirical + original fleet-analysis.
6. **Index** the file in its topic `AGENTS.md` with `quality_score` frontmatter — **unindexed = invisible = not done**.

## Procedure

### Step 1: Scope the topic

- Name the topic directory (`<Software>.aDNA/what/context/<topic>/`) — function-first, software-agnostic (e.g. `container_runtime`, `reverse_proxy`), so the backend can swap without a rename.
- For a software graph, the unit of work is **two files**: `context_research_{sw}_operations.md` (the five-verb spine) and `context_research_{sw}_interop.md` (composition seams). Read the graph's `CLAUDE.md` + `adr_000_project_identity` first — posture (control-plane vs data-bearing), persona, and the four-wrapper federation set frame every claim.

### Step 2: Research with the instrument

- Pin the **current stable version** first — verify against ≥ 2 official feeds (vendor releases + repo releases + endoflife.date). **Never guess a version.** Note any pre-release that must NOT be adopted.
- Gather across **source types** deliberately (Step 5 will check this): vendor docs, practitioner blogs/talks, community threads (GitHub issues/discussions, forums), and the fleet's own ADRs/manifest for the original-analysis seam.
- Delegating to web-enabled subagents (one per file) is encouraged for breadth — return **typed, sourced findings**, not prose, then synthesize.

### Step 3: Distill into the canonical format

Restructure findings into Key Principles → Recommendations → Examples → Anti-Patterns → Sources. Strip dates/tutorials/marketing. Pin versions inline. Tables over prose (signal density).

### Step 4: Add the Decision-Posture layer

For every contested choice, write a **recommendation + trade-off** row (fleet posture | trade-off). This is the layer that separates context from documentation — it tells an agent what to *do*, not just what *exists*.

### Step 5: Score against the rubric (the gate)

- Self-score all 6 axes with a one-line justification each; compute composite.
- **Run an independent adversarial audit** (a separate subagent that re-scores axis-for-axis and verifies version/technical claims current) for any proving-instance or `standard`+ effort file. Self-scores must survive the re-score without inflation.
- **Gate:** composite ≥ 3.5, no axis ≤ 2, `source_diversity` ≥ 3 types. Fail → revise the weak axis and re-audit before filing.
- Record the scorecard in frontmatter (the `# Quality evaluation (6-axis rubric)` block) + `last_evaluated`.

### Step 6: Index

- Topic `AGENTS.md` — add a row: Subtopic · File · Token est · Version · Sources · **`quality_score`** + `topic_quality_avg`.
- Library `what/context/AGENTS.md` — add/refresh the topic row.
- Cross-link ≥ 2 related files (Standing Order 10) — sibling file, the cohort manifest, the governing ADRs/pattern.

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| `context_research_*.md` | context file(s) | Distilled, version-pinned, decision-posture-bearing, rubric-passed |
| topic `AGENTS.md` | directory index | Quality-scored subtopic rows + `topic_quality_avg` |
| library `AGENTS.md` row | index update | Topic discoverable from the context library root |
| audit scorecard | frontmatter + report | 6-axis scores, composite, floor check, currency verification |

## Error Handling

| Error | Cause | Resolution |
|-------|-------|------------|
| `source_diversity` ≤ 2 | All claims from vendor docs | Add practitioner + community + fleet-original sources before filing (the systemic failure mode) |
| Version unverifiable / sources disagree | Stale or conflicting feeds | State the disagreement explicitly; pin to the lowest-confident-stable and set a tighter re-review cadence |
| Composite ≥ 3.5 but an axis = 2 | Floor rule | File is **flagged regardless** — fix the floored axis, don't average past it |
| File paraphrases docs, no postures | Skipped Step 4 | Fails `actionability`/`signal_density` — add the Decision-Posture layer |
| File authored but not indexed | Skipped Step 6 | Invisible to agents = not done — add the AGENTS.md rows |

## Anti-Patterns

1. **Dumping docs.** Pasting or lightly paraphrasing official documentation. Context distills and takes a posture; docs describe.
2. **Guessing the version.** A volatile file with an unverified version pin is wrong on arrival. Verify against official feeds.
3. **Single-source convenience.** Stopping at the vendor docs because they're complete. They are also biased and single-type — the rubric floors it.
4. **Self-scoring without adversarial check.** A proving-instance file must survive an independent re-score; self-scores inflate.
5. **Orphaned context.** Filing without indexing in the topic AGENTS.md. Unindexed = invisible.
6. **Re-deriving the method.** Reinventing the research approach per graph instead of inheriting this skill — the exact gap this skill closes.

## Related

- **Skills Protocol**: `how/skills/AGENTS.md`
- [[skill_context_quality_audit]] — the scoring gate this skill feeds
- [[skill_context_graduation]] — promotion of completed-campaign deliverables (back half of the pipeline)
- [[context_quality_rubric]] — the 6-axis rubric (`what/docs/context_quality_rubric.md`)
- [[adr_037_software_deployment_graph_subtype|ADR-037]] · [[pattern_software_deployment_graph]] — the software-graph genesis this skill serves
- Origin proposal: `who/coordination/coord_2026_06_24_context7_research_instrument.md`
