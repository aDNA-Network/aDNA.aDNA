---
type: manifest
created: 2026-04-13
license: MIT   # ⭐ ADDED 2026-09-09, and adding it here is the point (SO-8, self-reference). This vault has shipped MIT since inception — as a `LICENSE` file and as prose in §Project Identity — and carried it in **nothing machine-readable**, so the ADR-013 host-placement predicate had nothing to read on the one vault Hopper's measurement scored as *"fine"*. The repair authored into `skill_project_fork.md` Step 1.5 this sitting mandates this field on every fork; a standard that mandates a field its own dev graph lacks is the drift class this campaign keeps finding. SPDX identifier, or the literal `unset` where the decision is genuinely open — never absent. ⚠ Note for whoever reconciles branding: our `LICENSE` says *"Copyright (c) 2026 aDNA Labs"*, the image's says *"Lat Labs"* `[D]` — org call, Berthier's, not swept from here.
updated: 2026-10-03   # ⛩ RE-REVIEWED at the mid-campaign SITREP sitting, and the review was NOT a no-op in two small ways: (1) `last_edited_by` read `agent_codex` though the 09-24 review was Rosetta's — corrected; (2) the Active Builds paragraph gained the one standalone mission queued this sitting (Operation Primer). Counts re-derived from disk 2026-10-03 on their written predicates, zero drift: skills 57 (27+30) · templates 45 (26+11+8) · context 5 topics / 27 subtopics · ADRs 57 on disk (55 accepted · 1 amended · 1 proposed = ADR-062), narrated nowhere here so no count moves · reviewers 16 (the Primer's `reviewer_data_engineer` is authored at its O0, not now — the figure moves then). Prior review note preserved: updated: 2026-09-24   # ⛩ RE-REVIEWED at the GARNIER re-orientation sitting, not date-bumped: skills 57 (27+30) · templates 45 (26+11+8) · context 5 topics / 27 subtopics — each re-derived from disk 2026-09-24, zero drift; ADRs 57 on disk (55 accepted · 1 amended · 1 proposed = ADR-062 LinkML), narrated nowhere here so no count moves; campaigns field unchanged (GARNIER active · HAUSSMANN endgame). Prior review note preserved: updated: 2026-09-16   # Historical review notes preserved: ⛩ RE-DERIVED at the Vitrine wind-down — **and this time the review was NOT a no-op**: the campaigns line named only `campaign_haussmann` + `campaign_rosetta`, and this sitting created `campaign_vitrine` ⇒ updated. All four counts re-run on their written predicates, zero drift (the sitting added no skill, template, context file or directory beyond the campaign dir). ⭐⭐ **AND THE RATCHET CAUGHT A NEAR-MISS THAT IS THE SWEEP'S OWN FINDING RUNNING A THIRD DIRECTION.** §Active Builds line 154 reads *"Phase 0: Scaffold … **10** ontology extensions"* — the exact figure the 09-12 docs sweep repaired on four site pages. **It is CORRECT and was deliberately NOT touched**: it is a per-phase historical record of Operation Rosetta, and `who/reviewers/` was created **2026-04-23**, after Phase 0 shipped (`git log --diff-filter=A`) — so Phase 0 genuinely delivered 10. ⇒ ***a stale-looking number and a historical one are indistinguishable without their tense***, and this is the **third** correct figure in two sittings that a count-sweep nearly "repaired" (after `canonical-properties`' *"retired, not us"* row and `campaign_rosetta`'s `phase_count: 7`). **The tense is the check.** || PRIOR: 2026-09-12 — ⛩ RE-DERIVED at the docs-corpus sweep close — not date-bumped. All four re-run from disk on their written predicates, **zero drift in every direction**. ⭐ The sweep is the reason this re-review is worth recording: it found the PUBLIC SITE narrating this vault's own counts wrongly on four pages (skills, templates, and the ontology-extension count twice over) while **this file and `CLAUDE.md` were correct throughout**. ⇒ ***the governance files held the truth and the published description of them drifted*** — the ratchet on this file works, and nothing ratchets the site's account of it. ⚠ The template figure nearly went the other way: a naive directory count reads 48 here (`AGENTS.md` + two bundle dirs) against the written `template_*.md` predicate's 45, so the sweep briefly had this file wrong before re-deriving — **the recorded trap, hit and caught.** || PRIOR: 2026-09-11 — ⛩ GENUINELY RE-DERIVED at the five-rulings close cascade — not date-bumped. All four re-run from disk on their **written** predicates, **zero drift in every direction**: skills **57** · templates **45** · context topics **5** · context subtopics **27**. ⭐ The subtopic predicate was re-derived INDEPENDENTLY before reading the note below, and landed on the same 27 by a different route — the per-topic sum (13+4+2+1+7). A naive `find what/context -name 'context_*.md'` reads **34**: it adds the **seven top-level** context files, which are cross-topic assemblies, not subtopics. ⛔ The previously-recorded trap (per-topic `AGENTS.md`, naive read 32) is a THIRD number from a THIRD predicate — so this one figure has three plausible wrong answers and one right one, and only the written predicate separates them. ⚠⚠ **AND THIS RE-REVIEW WAS A NO-OP, WHICH IS RECORDED AS A RESULT RATHER THAN AS REASSURANCE.** Unlike 2026-09-10 — where the review found the tree diagram omitted `who/coordination/inbox/`, created that hour — today's sitting added **six coordination memos and no directory, no skill, no template, no pattern, no context file**, so nothing in this document was stale. ⇒ ***the ratchet earns its keep by forcing the file open, and a review that correctly finds nothing is the outcome it is supposed to have most of the time***; a run of no-ops is not evidence the check is pointless, and a review that never finds anything is a review nobody is running. ⛔ Written WITHOUT any wrong `NN skills` spelling, deliberately: `adna_validate --governance` matches that pattern **anywhere in the file**, so narrating a stale figure in prose turns the gate red — the defect this line's predecessor committed and then had to correct.
last_edited_by: agent_rosetta   # corrected 2026-10-03 — read `agent_codex` since the 09-16 handoff though Rosetta performed the 09-24 and 10-03 reviews
tags: [manifest, governance]
---

# aDNA.aDNA — Project Manifest

## Project Identity

**aDNA.aDNA** — A self-referential knowledge architecture that teaches the aDNA (Agentic DNA) standard by using the aDNA standard itself. The structure IS the lesson: every directory, governance file, and content entity is both a working example of aDNA and an explanation of aDNA.

This project serves two audiences simultaneously: **developers** building with aDNA get spec-precise technical depth, integration patterns, and lattice composition guidance. **Non-developers** exploring aDNA get plain-language explanations, visual metaphors, and a clear on-ramp to agentic literacy. Both audiences navigate the same vault — progressive disclosure handles the rest.

**Public face**: [github.com/aDNA-Network/aDNA](https://github.com/aDNA-Network/aDNA) (MIT license) — the released clone-and-run workspace image of the standard (ADR-034; predecessor `LatticeProtocol/aDNA` archived as [`aDNA-Network/adna-legacy`](https://github.com/aDNA-Network/adna-legacy)). This vault is the standard's **dev graph**: it develops, demonstrates, and explains aDNA; manual gate-fired releases publish it (`how/skills/skill_template_release.md`).

> **Dev-graph repo visibility** (Git.aDNA P6 Wave 2 canary, 2026-06-22): this vault's *own* repo `github.com/aDNA-Network/aDNA.aDNA` is now **GitHub-public**, class **P-released**, under Git.aDNA governance — visibility-flipped private→public via the agnostic `gitops_set_visibility` verb (the standard's docs face is public-by-intent). Distinct from the separately-released MIT image above. Git-ops declaration: `git/CLAUDE.md`; doctrine: `CLAUDE.md` → `## Git-Ops`. *(STATE.md host-fact deferred to avoid churning the active Operation-aDNA state — fold at next aDNA session.)*

## Architecture

This project uses the **aDNA** knowledge architecture — a bare triad deployment with 11 domain-specific ontology extensions.

```
aDNA.aDNA/
├── what/           # WHAT — Concepts, tutorials, patterns, glossary, use cases, comparisons
│   ├── concepts/       [EXT] Core aDNA concepts (dual-audience)
│   ├── tutorials/      [EXT] Learning paths (beginner → advanced)
│   ├── patterns/       [EXT] Reusable aDNA patterns
│   ├── glossary/       [EXT] Term definitions with spec refs
│   ├── use_cases/      [EXT] Adoption narratives by domain
│   ├── comparisons/    [EXT] aDNA vs. other systems
│   ├── context/        Agent context library (5 topics, 27 subtopics)
│   ├── decisions/      ADRs
│   ├── docs/           Specification documents
│   └── lattices/       Lattice YAML tools, schema, examples
├── how/            # HOW — Campaigns, workshops, publishing, operations
│   ├── workshops/      [EXT] Workshop kits + facilitation
│   ├── publishing/     [EXT] Vault-to-web pipeline
│   ├── campaigns/      Strategic initiatives (campaign_garnier active; campaign_haussmann holds independent endgame; campaign_vitrine proposed/history retained; campaign_rosetta closed 2026-04-26)
│   ├── templates/      45 templates (26 base + 11 extension + 8 operational)
│   ├── skills/         57 skills (27 base + 30 project-specific)
│   ├── sessions/       Session tracking
│   ├── missions/       Multi-session task decomposition
│   ├── pipelines/      Content-as-code workflows
│   ├── backlog/        Ideation
│   └── quests/         Community validation experiments
├── who/            # WHO — Community, adopters, reviewers, governance
│   ├── community/      [EXT] Community roles + contribution paths
│   ├── adopters/       [EXT] Adopter personas + profiles
│   ├── reviewers/      [EXT] Reviewer personas (decadal AAR lens)
│   │                   (governed by what/doctrine/doctrine_coordination_dropbox.md)
│   ├── coordination/   Cross-agent sync notes
│   │   └── inbox/      Inbound drop-box — open_unilaterally 2026-09-10; peers write here lease-or-no-lease
│   └── governance/     Roles, policies, VISION.md
```

### Base Ontology (16 types)

WHO (4: governance, team, coordination, identity), WHAT (5: context, decisions, modules, lattices, inventory), HOW (7: campaigns, missions, sessions, templates, skills, pipelines, backlog). Full table: CLAUDE.md § Domain Knowledge. *(`inventory` + `identity` promoted to base per ADR-035, standard v2.3; dev-graph authored at Hearthstone P1, materialized to `.adna/` at P5.)*

### Extended Ontology (11 Rosetta types)

| Triad | Entity | Directory | Purpose |
|-------|--------|-----------|---------|
| WHAT | `concept` | `what/concepts/` | Core aDNA concepts — dual-audience depth |
| WHAT | `tutorial` | `what/tutorials/` | Step-by-step learning paths (beginner → advanced) |
| WHAT | `pattern` | `what/patterns/` | Reusable aDNA architectural patterns |
| WHAT | `glossary_entry` | `what/glossary/` | Canonical term definitions with spec references |
| WHAT | `use_case` | `what/use_cases/` | Narrative adoption stories by domain |
| WHAT | `comparison` | `what/comparisons/` | aDNA vs. other knowledge architectures |
| WHO | `community` | `who/community/` | Community roles, contribution paths, governance |
| WHO | `adopter` | `who/adopters/` | Adopter personas and deployment profiles |
| WHO | `reviewer` | `who/reviewers/` | Specialist UX/design reviewer personas (decadal AAR lens) |
| HOW | `workshop` | `how/workshops/` | Workshop kits and facilitation guides |
| HOW | `publishing` | `how/publishing/` | Vault-to-web content publishing pipeline |

## Entry Points

| Audience | Start Here | Then |
|----------|-----------|------|
| **Developers learning aDNA** | `what/concepts/` | `what/patterns/` → `what/tutorials/` → `what/lattices/` |
| **Non-developers exploring** | `what/tutorials/` | `what/glossary/` → `what/concepts/` → `what/use_cases/` |
| **Workshop facilitators** | `how/workshops/` | facilitation guide → participant tutorials |
| **Agents** | `CLAUDE.md` (auto-loaded) | `STATE.md` → current campaign (GARNIER for this website increment) → work |
| **Humans browsing** | `README.md` | `MANIFEST.md` → browse triad → `STATE.md` |

## Key Components

### Context Library (inherited)

| Topic | Subtopics | Tokens | Location |
|-------|-----------|--------|----------|
| Prompt Engineering | 7 | ~21K | `what/context/prompt_engineering/` |
| aDNA Core | 13 | ~35K | `what/context/adna_core/` |
| Claude Code | 4 | ~12K | `what/context/claude_code/` |
| Lattice Basics | 2 | ~4.5K | `what/context/lattice_basics/` |
| Object Standards | 1 | ~3K | `what/context/object_standards/` |

Cross-topic recipes: `what/context/context_recipes.md` (6 domain-neutral recipes, 3-tier budget system).

### Lattice YAML Tools

| Tool | Location | Purpose |
|------|----------|---------|
| `lattice_validate.py` | `what/lattices/tools/` | Validate `.lattice.yaml` against JSON Schema |
| `lattice2canvas.py` | `what/lattices/tools/` | Convert lattice YAML → Obsidian canvas |
| `canvas2lattice.py` | `what/lattices/tools/` | Convert Obsidian canvas → lattice YAML |
| `lattice_yaml_schema.json` | `what/lattices/` | JSON Schema for lattice definitions |

### Templates (45)

**26 base** (inherited from `.adna` — 12 auto-triggered + 13 manual-apply; full index: `how/templates/AGENTS.md`) + **11 extension** + **8 operational** = the 19 Rosetta-local templates below:

| Local Template | Class | Target Directory |
|----------------|-------|-----------------|
| `template_concept.md` | extension | `what/concepts/` |
| `template_tutorial.md` | extension | `what/tutorials/` |
| `template_pattern.md` | extension | `what/patterns/` |
| `template_glossary_entry.md` | extension | `what/glossary/` |
| `template_use_case.md` | extension | `what/use_cases/` |
| `template_comparison.md` | extension | `what/comparisons/` |
| `template_community_role.md` | extension | `who/community/` |
| `template_adopter.md` | extension | `who/adopters/` |
| `template_reviewer.md` | extension | `who/reviewers/` |
| `template_workshop.md` | extension | `how/workshops/` |
| `template_publishing_task.md` | extension | `how/publishing/` |
| `template_campaign_open_splash.md` | operational | `how/campaigns/campaign_*/` |
| `template_campaign_close_splash.md` | operational | `how/campaigns/campaign_*/` |
| `template_drift_report.md` | operational | upstream drift-watch reports |
| `template_lattice_home_render.md` | operational | `Home.aDNA/` render |
| `template_software_graph_stub.md` | operational | new `<Software>.aDNA/` genesis |
| `template_ratification_record.md` | operational | `what/decisions/` · `how/gates/` |
| `template_second_genesis_dossier.md` | operational | new `<Name>.aDNA/` re-genesis intake |
| `template_disposition_ledger.md` | operational | fleet spring-clean (`skill_workspace_spring_clean`) |

### Skills (57)

27 base skills (inherited from the `.adna/` template) + 30 project-specific. Full inventory in [`CLAUDE.md`](CLAUDE.md) §Skills; representative project-specific examples:

| Skill | Type | Purpose |
|-------|------|---------|
| `skill_dual_audience_review` | agent | Review content against dual-audience test |
| `skill_self_reference_check` | agent | Verify self-referential vault citations |
| `skill_iii_cycle` | agent | Single III improvement cycle (7-step: measure → implement → validate) |
| `skill_decadal_aar` | agent | Decadal AAR with 16-persona ranker review (every 10 cycles) |

## Active Builds

[D] **Current website work, reviewed 2026-09-16:** [[campaign_garnier]] is active at P1; P1.1/P1.2 are complete, P1.3 actual reader evidence and DP3 remain open. [[homepage_gateway_revision]] records the accepted isolated homepage gateway increment at 4466; b1cf040/4465 remains the frozen P1 stimulus. HAUSSMANN retains its independent endgame and publication boundaries; VITRINE history is preserved. The Rosetta phase rows below are historical delivery records. **2026-10-03:** one standalone mission is queued in `how/missions/` — [[mission_primer_adna_for_data_engineers]] (Operation Primer, fable: a reusable aDNA primer for data engineers + a cover note for Andy Zhang, review-iterated, delivered via Fluxer.aDNA); it touches no `site/`. The mid-campaign SITREP of record is `how/missions/artifacts/sitrep_mid_campaign_20261003.md`.

[D] Manifest review re-derived the written inventories: 57 skill files, 45 template files, 5 context topic directories and 27 subtopic files. All match; GARNIER was missing from the campaign routing above and is now named. No inventory number or gate41 zero-drift baseline changed. This repairs the manifest omission exposed after STATE's previous close advanced to 2026-09-16.

| Component | Status | Description |
|-----------|--------|-------------|
| Phase 0: Scaffold | Complete | Fork, governance customization, 10 ontology extensions, campaign_rosetta |
| Phase 1: Core Content | Complete | 13 concept files, 8 pattern files, 5 comparison files |
| Phase 2: Human Path | Complete | 9 tutorials, 6 use case narratives |
| Phase 3: Website v1 | Complete | AstroJS docs site via SiteForge at `site/`, Vercel deploy |
| Phase 4: The Who | Complete | 25 glossary entries + index, 3 governance docs, 3 community files, 5 adopter personas |
| Phase 4.5: III Site Improvements | Complete | Hero redesign, 37 new site pages, components, OG images, III review |
| Phase 5: The How | Complete | 3 publishing docs, 4 workshop kits, 4 self-referential lattice YAMLs |
| Phase 6: Website v2 | Complete | How section: 11 new pages + 4 indexes, MDX escaping, OG image (112 total pages) |
| Phase 7: 100-Cycle III Loop | Planned | 100 iterative improvement cycles (10 themed decadals) + persona ranker AARs |

### Inherited Infrastructure (from base template)

| Component | Status | Description |
|-----------|--------|-------------|
| aDNA Standard v2.5 | Inherited | Core specification — triad, ontology, sessions, missions, campaigns |
| Context library | Inherited | 5 topics, 27 subtopics |
| Lattice YAML tools | Inherited | Validate, convert (YAML↔canvas), JSON Schema, 19 examples |
| 26 base templates | Inherited | Full operational set (12 auto-triggered + 13 manual-apply) |
| 27 base skills | Inherited | Onboarding, fork, entity type, quality audit, lifecycle (archive / second-genesis / merge / rename / spring-clean), etc. |
| Execution hierarchy v2 | Inherited | OODA cascade, AAR protocol, escalation cascade |
| Quality framework | Inherited | 10-dimension compliance rubric |

See [[campaign_garnier]] for the current website campaign, [[campaign_haussmann]] for its preserved predecessor/endgame boundary, and [[STATE]] for the latest operational state. `campaign_rosetta` closed 2026-04-26; the phase records above retain that history.
