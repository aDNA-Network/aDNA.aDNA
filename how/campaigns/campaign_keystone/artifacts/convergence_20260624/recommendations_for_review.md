---
type: artifact
artifact_class: recommendations
created: 2026-06-24
operation: "Operation Keystone — Convergence, Close-out & Cohort Genesis"
from: Berthier (for Stanley)
status: needs_human
tags: [keystone, convergence, recommendations, gates, decisions, siteforge, role_graph]
---

# Recommendations for review — Operation Keystone convergence

Berthier's recommendation on every open question/gate, priority-ordered. **Nothing executed.** Each row is a decision for the commander; the rationale is below the table.

## The reframe (incorporated): SiteForge = the build-scale role-graph

Your idea — SiteForge as something that works with **both Astro and TypeScript and other website graphs** — is the build-side twin of Lighthouse, and it is sound on two independent grounds: (1) the paradigm already names a *node* role-graph (Lighthouse = the wall) but has **no build/site role-graph** — sites are composed ad-hoc by each consumer; (2) the website-composition machinery (`lattice_website_builder`, `lattice_partner_website_scaffold`, the 4 archetypes) **already sits inside `Astro.aDNA`**, mis-homed in the *framework* graph. SiteForge gives that work a home and completes a clean tri-symmetry:

> **Lighthouse** : composes deployment graphs → a **node**  ·  **SiteForge** : composes build graphs (Astro + TypeScript + …) → a **website**  ·  **AWSBootstrap** : the substrate both stand on.

## Recommendation summary

| # | Question / gate | Recommendation | Unblocks |
|---|-----------------|----------------|----------|
| 1 | **Naming: A / B / C** | **C2 — SiteForge as website role-graph (clean carve)**; C1 as a lower-disruption interim | resolves naming + §3.4 + cancels the dir-rename + builds a capability |
| 2 | Astro/TS boundary (§3.4) | **Fold into C** (SiteForge owns site assembly; Astro=framework; TS=language). Milner memo = fallback only if C is declined | TS P2 can open cleanly |
| 3 | **Container exemplar** | **APPROVE** (independent audit: 4.2/4.2, no floor, claims verified) | authorizes the cohort-wide pass |
| 4 | Cohort-wide genesis | **GO on Wave 1 (core), one graph at a time:** Caddy → Bitwarden → Nebula; then collab / inference / ops | populates the other 9 graphs |
| 5 | Context7 + `skill_context_research` (Rosetta) | **GO** — author the skill + wire Context7 **before** the cohort pass | source-diversity/freshness for 9 graphs |
| 6 | Lab §C retrofit (Galileo) | **GO now** (gate lifted, M-L13.6 deployed) | the §C reference implementation |
| 7 | Other six §C retrofits | **Sequence as staged:** Terminal → Harness next; ComfyUI in M03; Obsidian post-P0; Warp staged-only; Spacemacs defer | fleet-wide four-wrapper standard |
| 8 | AWSBootstrap reconciliation ADR | **AUTHOR** (three-layer split; now part of the role-graph/substrate doctrine) | before cohort hits AWS nodes |

## Detail

**1 — Naming → C2 (recommended).** Full two-flavor blast radius is in `Home.aDNA/who/coordination/coord_2026_06_24_siteforge_astro_naming_decision.md`. C2 preserves every executed artifact (Astro rename, GitHub transfer, 10-vault sweep), keeps "SiteForge" as a higher-value thing, cancels the carved `siteforge/`→`astro/` dir-rename (~79 files), and fills the doctrinal gap. Cost is a SiteForge **genesis** (persona + P0 charter + a build-scale-role-graph ADR) and a **carve** of the website-build lattices/archetypes Astro→SiteForge, plus a final re-target of the 10 consumer `siteforge/` wrappers' `federation_ref` from `Astro.aDNA` → `SiteForge.aDNA`. If you want to de-risk: **C1 first** (thin composer that federates Astro/TS without moving the lattices), then carve to C2 once it proves out. A is the harmless fallback; B is now dominated.

**2 — Astro/TS boundary.** C **subsumes** this: SiteForge owns site assembly, Astro owns the framework context (`astro_web`), TypeScript owns the language (`ts_web_frameworks`), and the seam is `federation_ref` *through* SiteForge — no copied content, no second canonical home. If you decline C, the standalone boundary ADR (staged to Milner) is required **before TS P2/M2** opens its `ts_web_frameworks` wave.

**3 — Container exemplar → APPROVE.** Both files (`operations`, `interop`) cleared the 6-axis rubric at composite **4.2**, no floor violation; an independent adversarial subagent re-scored them axis-for-axis (no inflation) and verified every Podman claim current (5.8.3 confirmed via endoflife.date). The method, the docs-binding, and the rubric pass are proven. Approving it is what authorizes replication.

**4 — Cohort genesis → GO Wave 1, depth-first.** On exemplar approval, run **core** in order — Caddy → Bitwarden → Nebula — one graph **fully populated and quality-passed before the next**; then collab (Nextcloud → Groupware → Forgejo → Store), inference (Inference), ops (FastAPI). Do not parallelize on spec. Plan: `cohort_genesis_research_plan.md`.

**5 — Context7 / `skill_context_research` → GO.** It is not wired this session; the exemplar used official-docs + web, rubric-bound. For 9 more volatile-freshness graphs, wiring Context7 + a canonical research skill pays for itself in `source_diversity` and currency. Proposal staged to Rosetta. Recommend greenlight **before** Wave 1 continues, so the cohort inherits the method.

**6 — Lab §C retrofit → GO now.** M-L13.6 is deployed; the gate is lifted. Lab is the reference implementation — prove the four-wrapper retrofit there first. Memo staged to Galileo.

**7 — Other six retrofits → staged sequence.** Terminal (yours) + Harness are clear and next; ComfyUI folds in during its M03 re-genesis; Obsidian waits on its P0; Warp is live-genesis (staged memo only, no live-gate write); Spacemacs defers. No batch-write — one mission per vault.

**8 — AWSBootstrap ADR → AUTHOR.** Three-layer split (cohort=bricks, Lighthouse=composition, AWSBootstrap=substrate/wake-up). Non-blocking for the current clean wave, but land it before the cohort proliferates onto AWS nodes. Under C, it gains a cleaner framing: AWSBootstrap is the **substrate** both role-graphs (Lighthouse for nodes, SiteForge for sites) ultimately rely on. Scope memo staged.

## Recommended decision sequence

1. **Decide naming (1)** — C2 (or C1-then-C2). This is the keystone choice; it reshapes §2 and the Astro tree.
2. **Approve the exemplar (3)** + **greenlight Context7/skill (5)** — together they open the cohort pass.
3. **GO Lab retrofit (6)** + **authorize Wave 1 genesis (4)** — parallel tracks, both low-risk.
4. **Authorize the two ADRs (8 + the build-scale-role-graph ADR from C)** — standard-touches to Rosetta; can run alongside.
5. Other retrofits (7) follow their own gates.

**All gated. Awaiting your word on each — the naming choice first.**

---

## Reconciliation note (2026-06-29) — this artifact is SUPERSEDED by events

Authored 2026-06-24, before the rulings + the cohort completion. Current ground truth (see [[how/campaigns/campaign_keystone/campaign_keystone|campaign_keystone]] §Post-completion frontier reconciliation):

- **#1/#2 Naming + Astro/TS boundary** → **RULED 2026-06-25** (operator): not A/B/C-as-written but **"C evolved"** — Astro stays the framework brick; a new **`Websites.aDNA`** is the build-scale role-graph (SiteForge retired). The boundary folded in. Standard-touches landed: **[[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]]** + the `pattern_software_element_context_graph` amendment.
- **#3/#4/#5 Exemplar + cohort + Context7/skill** → **DONE** (cohort **10/10 complete 2026-06-26**; `skill_context_research` authored + registered).
- **#6 Lab retrofit** → **LANDED** (`git/`+`feedback/`+`iii/` present in `Lab.aDNA`).
- **#7 Other six retrofits** → staged per-gate (cross-vault; each target persona's lane).
- **#8 AWSBootstrap reconciliation ADR** → **authored as [[what/decisions/adr_043_node_provisioning_layer_reconciliation|ADR-043]] (proposed) 2026-06-29.**
