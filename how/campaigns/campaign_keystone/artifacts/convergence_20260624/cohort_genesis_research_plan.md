---
type: artifact
artifact_class: genesis_research_plan
created: 2026-06-24
operation: "Operation Keystone — Convergence, Close-out & Cohort Genesis"
campaign_id: campaign_keystone
status: complete
posture: plan_plus_one_exemplar
tags: [keystone, genesis, research, plan, context7, rubric, sequence, exemplar]
updated: 2026-06-24
last_edited_by: agent_stanley
---

# Cohort Genesis Research Plan (Phase 4)

Turns the 10 software-ops-empty stubs into graphs that actually teach an agent to **install / operate / configure / update / interoperate** their software. **Planning + context authoring only — never installing or running the software.** Conforms to the existing context pipeline (`skill_context_graduation` + `context_quality_rubric`); invents no new doctrine.

## 1. The unit of work — per-graph research spec

For **each** cohort graph, the genesis P0→research arc produces, under `<Software>.aDNA/what/context/<topic>/`:

| Artifact | Content | Rubric emphasis |
|----------|---------|-----------------|
| `context_research_{sw}_operations.md` | **The spine.** install · configure · operate · update · health/observe — version-pinned, for the five-verb mandate. Includes a **Decision Posture** section: each contested operational choice → recommendation + trade-off (not a tutorial). | `actionability`, `signal_density`, `freshness=volatile` |
| `context_research_{sw}_interop.md` | How this brick composes in a node: seams to the four wrapper brokers (`git/`, `feedback/`, `iii/`, Home credentials) and to the graphs beside it in Lighthouse profiles (e.g. Caddy↔Forgejo ingress; Inference↔Container↔Store; Nebula↔Venus substrate). | `cross_topic_coherence`, `coverage_uniformity` |
| topic `AGENTS.md` | Index row per file: Subtopic · File · Token est · Version · Sources · `quality_score`. **Unindexed = invisible = not done.** | — |
| (data-bearing graphs) | **ADR-016 §8 placement note** as a context anchor (data-plane node, Venus co-design) — referenced, not re-decided. | — |

**Format (every file):** Key Principles → Recommendations → Examples → Anti-Patterns → Sources. **Frontmatter:** the 6 quality fields + `freshness_category` + `last_evaluated`. **Gate:** composite ≥ 3.5, **no axis ≤ 2**. **Defend `source_diversity`** (the systemic weak axis): ≥ 3 source types — vendor/official docs + practitioner + community/empirical + original fleet-analysis.

## 2. The research instrument — Context7-bound (see Rosetta memo)

- **Primary:** Context7 (version-current library/tool docs) + the software's official docs/repo. **Web search fills gaps** (war-stories, known-issue threads, advisories). Version-current docs lead.
- **Bind to the rubric:** distill, don't dump; version-pin; add the decision-posture layer; score. A file that paraphrases Context7 without Recommendations/Anti-Patterns/decision-posture **fails** `actionability`+`signal_density`.
- **Canonicalize:** `skill_context_research` proposed to Rosetta (`aDNA.aDNA/who/coordination/coord_2026_06_24_context7_research_instrument.md`). Context7 is **not wired this session** → the exemplar used official docs + web as the current-docs instrument, rubric-bound identically.

## 3. The sequence — profile-ordered, pulled not pushed

Research is **pulled, depth over breadth**. Order by Lighthouse profile priority; **one graph fully populated and quality-passed before the next starts** (proving-instance discipline). **Do not run all 10 in parallel.**

| Wave | Profile | Graphs (in order) | Why |
|:----:|---------|-------------------|-----|
| 1 | **core** (every node) | **`Container` (EXEMPLAR)** → `Caddy` → `Bitwarden` → `Nebula` | runtime + ingress/TLS + secret-access + mesh daemon — the substrate every profile builds on. Container first: clean net-new, control-plane, foundational (everything runs on it), empty (cleanest empty→populated proof). |
| 2 | **collab** | `Nextcloud` → `Groupware` → `Forgejo` → `Store` | files/collab + mail/JMAP + git fabric + object-store backing |
| 3 | **inference** | `Inference` (+ revisits `Container`, `Store`) | LLM runtimes on the runtime; model weights in the store |
| 4 | **ops** | `FastAPI` (+ revisits `Caddy`) | service/API surface behind the proxy |

Members recur across profiles by design (Container underpins core+inference; Store backs collab+inference) — research each **once**, cross-reference on recurrence.

**Per-graph note on the two full-fork graphs:** `Caddy` and `Bitwarden` already carry a `what/context/` of **generic aDNA scaffold** (28 md each) but **zero software-ops** — their genesis research adds the `context_research_*` files alongside the scaffold; it does not rework the scaffold.

## 4. The gate (human-gated; this phase plans + drafts, it does not self-advance)

- Each graph's genesis still owns its **P0 charter** (persona ratification vs the fleet registry + ADR-000) — an operator gate, unchanged.
- This convergence: authored the research-spec template (this doc), the Container P0 **research mission stub**, and **populated the single `core` exemplar (`Container.aDNA`) to its quality-gate**.
- **STOP at the exemplar's quality-gate for operator review.** The exemplar proves the research method + the Context7/docs binding + the rubric pass. **Operator authorizes replication.** Do **not** run the full 10-graph population without that gate.

## 5. Named exemplar

**`Container.aDNA`** (Pandora; rootless Podman; OCI envelope; control-plane; Store/Venus seams). Files authored this convergence under `Container.aDNA/what/context/container_runtime/`:
- `context_research_container_operations.md` (five verbs + decision posture)
- `context_research_container_interop.md` (composition seams)
- `AGENTS.md` (topic index, quality-scored) + `what/context/AGENTS.md` (library index)

Result + scorecard: `convergence_status.md` (this directory) and the topic AGENTS.md.
