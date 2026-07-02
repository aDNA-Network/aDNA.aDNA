# Changelog

All notable changes to the aDNA knowledge architecture are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## Version Policy

aDNA tracks **two independent version numbers**:

| Track | File | Field | What it covers |
|-------|------|-------|---------------|
| **Governance** | `CLAUDE.md` | `version` (frontmatter) | Vault structure, agent protocol, safety rules, templates, skills |
| **Standard** | `what/docs/adna_standard.md` | Document title | Normative specification — triad structure, object schemas, FAIR metadata |

Both tracks use **Major.Minor** versioning (no patch level):

| Change type | Major bump | Minor bump |
|-------------|-----------|------------|
| **Governance** | Breaking changes to vault structure, CLAUDE.md format, or frontmatter schema | New features, templates, skills, context topics, non-breaking additions, corrections |
| **Standard** | Breaking changes to triad structure, object schemas, or FAIR envelope format | New sections, clarifications, federation stubs, factual fixes |

**Canonical version location**: `CLAUDE.md` frontmatter `version` field (governance track). The migration system (`how/migrations/`) uses this field for pre-flight checks.

Changelog entries are organized by **governance version** (primary heading). Standard version changes are noted within entries when they coincide.

---

## [Unreleased]

### Added
- **Operation Champollion chartered** (2026-07-02, P0 complete; G0 operator gate pending) — pre-launch umbrella campaign at `how/campaigns/campaign_champollion/` (sibling to Operation Carnot / LatticeProtocol.aDNA): charter (8 phases · 24 missions · two rings · model-tiered execution) + Order of Battle + findings ledger (F-CHM-001..012) + risk register (R1–R10) + full backlog adjudication ledger (91 items + 3 stale ADRs, draft dispositions) + governance retro package (ADR-045 self-ratification + `98bb488` hold-override). Session: `session_stanley_20260702T024442Z_champollion_p0`.
- **`what/patterns/pattern_model_tiered_campaign_execution.md`** (2026-07-02, draft; instances 2/3) — frontier model designs briefs/gates, smaller models execute (fable = strategy/judgment · opus = mid-judgment · sonnet = mechanical); design-brief contract; `executor_tier` + ADR-016 budget telemetry contract shaped as Context.aDNA join keys. Companion: `idea_upstream_model_tier_mission_fields` (template fold, gated); staged memos to Noether (Carnot alignment/countersign) + Prometheus (pattern + corpus offer).
- **`how/gates/champollion_p0_gate.md`** (2026-07-02) — G0 ratification gate, copy-paste tier (ISS receiver down), 9 decisions D1–D9 with recommendations.
- `how/skills/skill_vercel_squarespace_domain_cutover.md` (v0.1.0) — 5-phase playbook (P-T-24 → P-D → P-D-Mon → P-D-T+48 → P-E) for cutting a registered Squarespace domain over to a Vercel-hosted Astro site, with optional `dev.<domain>` blue/green subdomain. Graduated from `ScienceStanley.aDNA` mission M08 (live cutover 2026-05-28 → 2026-05-29). Encodes operational quirks: Squarespace TTL dropdown is discrete-only (1800s minimum), Vercel `--token=` flag leaks via `ps -ef` (env-var-only auth), Hobby author-email mismatch blocks deploys, MX side-effect during CNAME write at Squarespace, Deployment Protection 401 on preview deploys. Apex-vs-www addendum documents both canonical-form DNS shapes.
- `how/skills/skill_vercel_squarespace_domain_cutover/templates/` — `mission_template_dns_cutover.md` (consumer-vault mission template), `vercel_json_template.json` (security headers + dev-host noindex rule), `dns_baseline_schema.json` (snapshot schema for rollback source-of-truth), `inputs_schema.json` (per-cutover configuration schema).
- `how/skills/skill_vercel_squarespace_domain_cutover/scripts/README.md` — Path A (run from ScienceStanley vault) / Path B (copy harness into consumer) / Path C (v0.3.0 shared library) usage guidance; 17-script catalog with phase mapping.
- **`what/decisions/adr_034_public_face_repo_release_architecture.md`** (2026-06-10) — records the operator-decided public-face restructure: **`aDNA-Network/aDNA` = the canonical clone-and-run workspace image** (pre-instantiated router + embedded `.adna/` + 1-command install; tag `v7.1` @ `e0fbb4c`); `LatticeProtocol/aDNA` archived as **`aDNA-Network/adna-legacy`** (frozen `74cb761`; old URLs redirect — repo-id semantics verified); **this vault = the standard's private dev graph** with manual gate-fired releases; PR #8 closed-as-superseded (PR #7 carried the flip); two-track versioning continues; `.gitignore` case-sensitivity gotcha recorded.
- **`how/skills/skill_template_release.md`** (2026-06-10) — the gate-fired release skill: preconditions → assemble standard tree → sync fresh release-repo clone (incl. the mandatory `.adna/README.md` embed-note transform) → two-track version bump + tag `vX.Y` + push → local-node `.adna` rsync sync (origin frozen at the archive) → 7-row fresh-clone smoke-test checklist.

### Changed
- **Governance-sync: template count corrected `32` → `41`** (2026-06-29) — MANIFEST/CLAUDE/AGENTS stated "32 templates (22 base + 10 extensions)"; `adna_validate.py --governance` counts 41 actual `template_*.md`. Trued to **41 = 25 base** (inherited from `.adna`: 12 auto-triggered + 13 manual-apply) **+ 11 extension** (incl. `template_reviewer` — the +1 the stale "10" omitted) **+ 5 operational** (`campaign_open_splash` · `campaign_close_splash` · `drift_report` · `lattice_home_render` · `software_graph_stub`). Reconciled the MANIFEST `### Templates` enumeration + the `how/templates/AGENTS.md` index (added the 2 quest templates → Manual-Apply 13; new Operational §5) + the adjacent reviewer / 11th-extension drift (MANIFEST "10 ontology extensions / 10 Rosetta types" → 11, + `who/reviewers/`; AGENTS.md "10 extension entity types" → 11). README "What's Inside" (generic-vault scope) corrected `22` → `26 base templates (12 auto-triggering)`. No governance version bump (a correction; logged here). Skills-count drift (MANIFEST 15 vs 17 vs 13+4) noted separately as out-of-scope. Session: `session_stanley_20260630T051401Z_template_count_sync`.
- **Governance-sync: skills count corrected `15`/`17`/`20` → `45`** (2026-06-29) — the follow-up to the template-count fix above. MANIFEST/AGENTS/`glossary_skill` stated "15 skills (13 base + 2 project-specific)", MANIFEST `### Skills (17)` ("13 base + 4 project-specific"), and the CLAUDE.md inventory listed only 20 of the **45** actual `skill_*.md`. Trued to **45 = 21 base** (inherited from `.adna/`) **+ 24 project-specific**, computed by deterministic set-intersection with `.adna/how/skills/`. Rebuilt the CLAUDE.md skills inventory as two **row-count-auditable** groups (Base 21 / Project-specific 24 — all 45 enumerated); `Type` now mirrors each skill's `skill_type:` frontmatter, which corrected **4 stale rows** (`skill_context_graduation` · `skill_upstream_contribution` · `skill_version_migration` process→agent; `skill_vault_review` agent→process); non-active status noted inline (2 draft · 1 sketch · 1 proposed · 1 legacy · 1 deprecated · 2 eventual-home→RemoteControl.aDNA). Added a **skills-count guard to `adna_validate.py --governance`** (mirrors the template-count check; scans MANIFEST/CLAUDE/README/AGENTS) — skills were previously unvalidated, which is why this drift accrued silently. No governance version bump (a correction; logged here). Partially discharges the M07 "skills inventory comprehensive review" cleanup item (count/type/inventory portion; quality/dedup/graduation pass remains). Session: `session_stanley_20260630T064455Z_skills_inventory_sync`.
- **Template release `v7.2` shipped** (2026-06-11, gate-fired per `skill_template_release` — first run under the codified skill; gate = operator-approved plan, Berthier/aDNALabs dispatch): **Home-fork naming fix** — live-prose `LatticeHome.aDNA` → `Home.aDNA` across the standard tree (`skill_node_bootstrap_interview` · `skill_node_health_check` · `HOME.md` · `skill_update_all_vaults` · skills `AGENTS.md` · `.adna/CLAUDE.md` routing rules; lineage pins `graduated_from: …@411660e` + historical records preserved) + standard-tree governance 7.0 → 7.2 (the v7.1 packaging block formalized in the tree's CHANGELOG) + governance badges. `aDNA-Network/aDNA` commit `f06454c`, annotated tag `v7.2`; smoke 7/7 PASS; gate-12 7/7 PASS; local `~/aDNA/.adna` synced per step (e) (local commit `4bf5369`; install-truth fixture unchanged — idempotency guard). Trigger: the stale transient value mis-forked `LatticeHome.aDNA/` on fresh nodes (observed live on a partner onboarding 2026-06-11; aDNALabs memo `coord_2026_06_11_outbound_to_adna_template_home_naming_fix_adr013_amendment`).
- **ADR-013 amended — §Exception.5** (2026-06-11): the per-node vault rename chain completed `node.aDNA → LatticeHome.aDNA (2026-05-28, transient) → Home.aDNA (2026-05-30, canonical, generic-canonical doctrine)`; §Exception.2 annotated forward (no longer reads as end-state); R1–R4 unchanged. Companion dev-graph live-ref fixes: `adr_031` credential-broker ref (annotated), `pattern_upstream_drift_watch` policy pointer, `skill_lattice_home_install` example set (`HOME_LATTICE` / `Home.aDNA` / `🌙 Home / Hestia`), `template_lattice_home_render` badge example. `idea_upstream_node_vault_bare_role_rename` → **resolved** (executed by v7.2).
- **Install truth re-cut to the image flow** (2026-06-10, ADR-034): `scripts/build_install_truth.mjs` + `site/src/data/install_truth.json` (schema 0.2; commands `clone`/`enter`/`launch`; one-liner `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude`; `legacy_repo_https` added; template sha `74cb761`) + gate-12 (7 tests — old-slug + cp-router-step rejection, legacy-archive reachability) + `/get-started` + `/network` Band-4 rewritten to the 1-command flow with a pre-June-2026 existing-installs note.
- **Live canonical-repo references flipped sitewide** `LatticeProtocol/aDNA` → `aDNA-Network/aDNA` (site chrome: Header/Footer/SocialLinks/HomeHero; pages: index/commons/community/startup-first-hour/what-is-adna; docs: open-standard, context-commons, community-×3, build-your-first-vault, agent-first-guide, migration-guide, social-sharing) and on vault root surfaces (CLAUDE.md spec citations, MANIFEST.md public-face identity, README.md Quick Start → 1-command flow, CONTRIBUTING.md issue/discussion/clone links, adna.md, `what/docs/projects_folder_pattern.md` PR#8-residual slug). Historical narrative untouched (archive-never-delete).

### Notes
- **First consumer**: `wga.aDNA` cutover to `worldgeno.me` (campaign_wga_site_v2, between c91 and c92). Mission file at `wga.aDNA/how/missions/mission_wga_m08_dns_cutover_worldgeno_me/` will be authored at P-T-24 open.
- **Skill version trajectory**: v0.1.0 = playbook + templates only (Playwright harness stays at ScienceStanley); v0.2.0 (post-WGA) = encode WGA-specific learnings + add `init-consumer-harness.sh` to automate Path B; v0.3.0 (after 3rd consumer) = graduate harness to shared workspace lib.
- This entry is staged as `[Unreleased]` per Keep-a-Changelog convention; the operator decides when to formalize as a governance minor bump (likely v6.1 following the v5.3 single-skill-addition precedent).

---

## [v6.0] — 2026-04-03

### Changed
- **Identity rename**: Display name `adna` → `Agentic-DNA` across all governance files, docs, and context. GitHub repo renamed to `LatticeProtocol/Agentic-DNA`.
- **Naming convention**: `Agentic-DNA` = display name, headings, repo name; `aDNA` = abbreviation in running text; `adna` lowercase preserved in protocol URIs, directory names, tags, and frontmatter topics.
- `.aDNA` directory convention: `adna_standard.md` §3.5 with RFC 2119 naming rules, `skill_project_fork.md` auto-appends `.aDNA` suffix, CLAUDE.md workspace detection uses `*.aDNA/` glob.
- Clone command updated: `git clone https://github.com/LatticeProtocol/Agentic-DNA.git adna` (local dir stays `adna/`).
- Version bump: CLAUDE.md `5.7` → `6.0`.
- `how/missions/AGENTS.md`: Mandatory AAR before `status: completed`, git-aware state verification.
- `how/campaigns/AGENTS.md`: Verifiable DG criteria, campaign AAR step, context graduation sequencing.
- CLAUDE.md: 6 standing orders + git coordination section (5 rules + truth hierarchy).
- `template_mission.md`: AAR section appended.
- `template_campaign.md`: `calibrated_sessions`, `estimation_class` fields added, campaign AAR section.
- `lattice_yaml_schema.json`: `lattice_type` enum expanded 4→7 (added `skill`, `infrastructure`, `context_set`).
- `adna_standard.md` §7.2: Required base fields updated 5→6 (added `status`).
- Template count: 20→22.

### Fixed
- `CONTRIBUTING.md`: `validate_lattice.py` → `lattice_validate.py` (correct script name).
- `CONTRIBUTING.md`: Removed reference to nonexistent `calibrate_token_estimates.sh`.
- `skill_sqlite_persistence.md`: Added `status: proposed` to frontmatter (was missing status semantics).
- `governance_agent_protocol.md`: Added `runtime: claude_code` to frontmatter for clarity.
- Count reconciliation: context library 4→5 topics, 23→27 subtopics; adna_core 10→13; skills 7→13; example lattices 14→15; standard version v2.1→v2.2 references corrected.
- `adna_validate.py`: Frontmatter MUST violations now reported as errors (were warnings).
- `canvas2lattice.py`: `_sanitize_node_id()` converts canvas UUIDs to valid lattice IDs.
- Schema/validator/spec triple divergence resolved — all three sources now agree on 7 lattice types and 6 required fields.

### Added
- `template_aar_lightweight.md` — 5-line AAR format (Worked/Didn't/Finding/Change/Follow-up).
- `template_campaign_mission.md` — campaign-linked mission template with campaign_id, exit gate, AAR.
- PR #1 integration acknowledgment (ariaxhan system_configuration contribution).

---

## [v5.7] — 2026-03-23

### Added
- `role: template` marker in `MANIFEST.md` frontmatter — distinguishes the base template from forked projects
- `how/skills/skill_project_fork.md` — dedicated skill for forking `adna/` into a new project directory
- `~/aDNA/` as the canonical workspace convention for L0 nodes
- L0 compute tier in CLAUDE.md Compute Tiers table (local knowledge architecture, no compute services)
- Workspace convention diagram in CLAUDE.md Template Detection section

### Changed
- `CLAUDE.md` v5.6→v5.7: merged "First-Run Detection" + "Workspace Bootstrap Detection" into unified "Template Detection & Project Setup" flow
- `skill_onboarding.md` now runs exclusively in forked projects, never in the base template
- `skill_workspace_init.md` Step 4 delegates project creation to `skill_project_fork.md`
- All documentation updated from `~/Projects/` to `~/aDNA/` as the recommended workspace root
- `README.md` Quick Start updated with `~/aDNA/` clone instructions and template-aware setup flow
- `projects_folder_pattern.md` updated with `~/aDNA/` as canonical workspace root and `role: template` design principle
- `workspace_claude_md.template` updated with fork preparation steps (strip `role: template`, set `agent_init`)
- `STATE.md` next steps updated with `~/aDNA/` convention
- Peripheral files updated: `skill_l1_upgrade.md`, `skill_lattice_publish.md`, `tutorial_lattice_publishing.md`, `tools/AGENTS.md`, `quest_l1_onboarding.md`

### Design decisions
- `adna/` stays clean — never customized by onboarding. `git pull` always safe.
- `role: template` in MANIFEST.md is the canonical detection mechanism (explicit, git-independent)
- `~/aDNA/` is a strong recommendation, not mandatory — system works in any location

---

## [v5.5] — 2026-03-20

### Added
- `VISION.md` — ecosystem vision document (decentralized frontier lab model, participation ladder)
- "Ecosystem & Vision" section in `README.md` linking to VISION.md
- `VISION.md` row in README Further Reading table

### Changed
- `CLAUDE.md` version bump: `5.4` → `5.5`
- Template counts corrected across all governance files: `17` → `20` (CLAUDE.md, MANIFEST.md, README.md, STATE.md)
- `MANIFEST.md` template table expanded with 6 missing rows (data_record, folder_note, governance, migration, side_quest, quest_result)
- `MANIFEST.md` architecture tree updated with `community/` directory
- `README.md` tree diagram updated with `community/` directory
- `STATE.md` updated to v5.5, added community infrastructure to What's Working, added v5.3-v5.5 upgrade entries

---

## [v5.4] — 2026-03-20

### Added
- `community/quests/` — side-quest experiment specifications directory
- `community/results/` — structured result submissions directory
- `community/tools/aggregate_results.py` — reference aggregation script (stdlib only)
- `community/AGENTS.md` — community directory agent guide
- `how/templates/template_side_quest.md` — quest specification template
- `how/templates/template_quest_result.md` — result submission template
- `what/docs/side_quest_guide.md` — participation guide (find, run, submit quests)
- 2 example quests: `quest_frontmatter_comparison` (medium), `quest_migration_smoke_test` (easy)
- Side-Quest Awareness section in `CLAUDE.md`

### Changed
- `CLAUDE.md` version bump: `5.3` → `5.4`
- `AGENTS.md` project structure updated with `community/` directory
- `README.md` contributing section updated with side-quest mention

---

## [v5.3] — 2026-03-20

### Added
- `how/skills/skill_upstream_contribution.md` — agentic upstream contribution protocol
- Upstream Contribution Awareness section in `CLAUDE.md`
- Upstream Contribution Awareness section in root `AGENTS.md`
- Contributing section in `README.md`

### Changed
- `CONTRIBUTING.md` revised — Agent Contribution Mode replaces static PR-Context pattern; organic discovery over structured proposals
- `CLAUDE.md` version bump: `5.2` → `5.3`
- Code of Conduct reference updated to forward-looking note (pending `CODE_OF_CONDUCT.md`)

### Removed
- Empty `community/proposals/` directory (superseded by agentic backlog pattern)
- Empty `.github/ISSUE_TEMPLATE/` directory (standard GitHub issues sufficient for now)

### Tooling (non-versioned, built in lattice-labs campaign LSU)
- `compliance_checker.py` — 10-dimension compliance scoring for vault objects (~1085 LOC)
- 4 object migration prompts: `migrate_object_{skill,module,dataset,lattice}.md`
- `migration_safety_framework.md` — git tags, worktree testing, rollback L1-L5
- `adna_validate.py` — instance conformance validator per §5.5
- `frontmatter_schema.json` — JSON Schema for frontmatter validation
- Post-LSU fixes: D9 companion content validation, MCP module_type D5 N/A

---

## [v5.2] — 2026-03-19

### Added
- `CHANGELOG.md` — centralized version history (this file)
- Version policy documenting the two-track scheme (governance + standard)
- Migration prompt cross-links in changelog entries

### Changed
- `CLAUDE.md` version bump: `5.1` → `5.2`
- `STATE.md` updated with v5.2 reference and CHANGELOG in "What's Working"

### Migration
- [`migrate_v5.1_to_v5.2.md`](how/migrations/migrate_v5.1_to_v5.2.md)

---

## [v5.1] — 2026-03-18

### Changed
- Lattice types table expanded (7 values: added `infrastructure`, `context_set`, `skill`)
- Template count corrected (10 → 17)
- Standard file paths fixed (pointed to context library instead of nonexistent standalone files)

### Fixed
- CLAUDE.md token estimate corrected (`~650` → `~2500`)
- Object standards table references corrected

### Migration
- [`migrate_v5.0_to_v5.1.md`](how/migrations/migrate_v5.0_to_v5.1.md)

### Standard
- **v2.2** — Federation stub, vault extensions, campaign system, factual fixes

---

## [v5.0] — 2026-03-17

### Added
- OODA cascade (3-level: session, mission, campaign)
- AAR protocol (5-step)
- Escalation cascade (session → mission → campaign → STATE.md)
- Context recipes (6 domain-neutral, 3-tier budgets)
- Mission class discriminator (5 types: build, investigate, design, review, operate)
- 4 new templates (AAR, strategic compass, campaign CLAUDE.md, registry)
- 2 new skills (context quality audit, context graduation)

### Changed
- Framework port from lattice-labs vault to standalone aDNA repo
- 10 adna_core subtopics (was 8) — added ooda_cascade, ontology_workshop

---

## [v4.x and earlier] — 2026-02 to 2026-03

Pre-versioned history. Key milestones (not individually versioned):

- **Lattice publishing** — `latlab lattice publish/pull/compose` CLI workflow
- **Context library** — 4 topics, 23 subtopics, ~58K tokens
- **Object standards** — module, dataset, lattice type standards hardened
- **Canvas Standard v1.0.0** — Round-Trip Protocol v1.0 (YAML authoritative)
- **Type vocabulary** — 19 canonical I/O types (Decision 10)
- **FAIR metadata** — flat↔nested envelope interconversion (Decision 11)
- **Dataset schema** — multi-cloud `.dataset.yaml` with 7 providers (Decision 12)
- **Onboarding skill** — agent-driven interactive vault setup
- **14 example lattices** — business, research, creative, biotech domains
- **Obsidian config** — Tokyo Night theme, 10 CSS snippets, 14 plugins
