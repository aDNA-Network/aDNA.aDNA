---
type: artifact
created: 2026-09-15
updated: 2026-09-15
status: completed
last_edited_by: agent_codex
tags: [garnier, p0, independent_review, vitruvius]
token_budget_actual: "~65 kT content-load, rough estimate including tool outputs and image inspection; not API tokens"
api_billing: unavailable
---
# P0 independent scorer A

[D] Freeze SHA-256 `04d28711834eca943cd8774ddaf0f34641e20629317f698eefd07c56314c053b`; all 1,692 allowed-file hashes checked and matched. Instrument v1.1 SHA-256 `e4a5ebf64ce95d6be7b00bf6998ffc874ec75c64247bf11c04b9e2932e28cf5c`. Only lines43–745 and880–900 were read. No historical application, STATE/session/history, peer sheet or coordinator findings read. Parent owns session/lease. No new web observations.

[D] Target is production `eda4cbfc2857a6d2d9df7d80a5db170957d45cab`, built2026-09-11T19:22:47.036Z. Local safe-build source `c38c6dc7ed283f5163604fedc67130776fc1d6c1` is separate. Frozen local fast gates580 passed/1 skipped; full698 passed/1 skipped,229 pages/226 advertised twins,26 visual-container checks. These are local results, not production certification.

## Rules declared before scoring

[I] D1 ceiling4 (no cold-reader panel); D3 ceiling3 (no clean-machine TTFS); D9 ceiling3 (no outsider contribution/response instrumentation); D11 ceiling3 (no manual AT). These follow §5.1.4 examples, not prior scores. Ceiling status can coexist with provisional clauses at the recorded rung. D12 uses a provisional score under §5.1.4: missing field p75 is not evidence of failing mobile or no monitoring, so it does not automatically award/cap at2. No field-dependent gate is passed.

[I] A few low anchors contain negative descriptions rather than monotone requirements (thin troubleshooting, informal process, no tokens). Where the evidence exceeds that weakness but does not support the next bundle, the numerical rung remains provisional and the excess is stated. This exposes an instrument ambiguity rather than silently pretending the negative clause was observed. Mastra D11 has no fully matching anchor; its required0 is a provisional floor placeholder, explicitly not an observed critical/keyboard failure. These unresolved readings require reconciliation.

[D] Nous security checkpoints are excluded from quality judgments. Nous/Hermes is one linked property using D weights; Mastra uses A; target B×E. Native composites are not a league table. [R] Third-party product claims remain reports until independently corroborated. PASS[D] denotes artifact-backed observation, not a human usability test. UNEVIDENCED[A] is measurement debt, FAILS[D] is observed target debt.

## Read and capture log

[D] Read root CLAUDE governance (initial tool output truncated), baseline manifest, freeze index/hash verification, permitted instrument spans; run_summary commands/metrics; public_inventory/cohort_expansion/cohort_deep/hermes_details metadata; capture_index; supplement390 and linked390 violation summaries; JSON-LD census; source_fact_inventory; local/live content-comparison sample; machine_verification; transport and triad T1 records; token census, component inventory, link graph and coverage; Lighthouse follow-up and pa11y samples. Text evidence read is individually cited below. Initial overly broad pack output was truncated; omitted output is not claimed read. No source files listed by inventories were opened outside the freeze.

[D] Actual image pixels inspected: curated aDNA home desktop light/dark, Triad desktop light/dark, Mastra home desktop light, Hermes home desktop light; aDNA contact sheets390 light0/4/5/6; fresh Triad390 ready; raw Mastra desktop docs and fresh390 home/docs; raw Hermes desktop docs light/dark and fresh390 docs; successful Nous fresh390 homepage. Contact sheets show top900px only. Full-page images were displayed scaled; they support layout observations, not tiny-type legibility certification. Capture_index identifies exact viewport/control and PNG hash.

[I] Rough actual content-load estimate ~65kT including rendered text, tool wrappers and images, not measured billing. API billing unavailable. Broad truncated reads created avoidable load; raw manifest hashing did not semantically inspect every file.

## adna

Native composite **60.8%** = Σ(score/5 × native weight). Full breakdown (D1→D12): **4, 3, 3, 3, 3, 3, 2, 3, 3, 4, 3, 3**. Weights: 12, 8, 12, 12, 8, 8, 14, 10, 6, 6, 2, 2. All ceiling/provisional flags follow; this composite has no uncertainty adjustment.

### D1 — 4/5 · ceiling · ceiling 4

Hero explicitly defines an open standard for organizing project files, names teams using agentic coding tools, and states no server/signup/cost. Thirty-second human comprehension is unmeasured; this is a provisional 4 under §5.1.4, not a panel result.

Awarded rung clauses:

- `Correct summary in ~30s at all three viewports` — UNEVIDENCED [A]
- `audience explicit` — PASS [D]

Next rung clauses:

- `Correct summary in ~30s at all three viewports` — UNEVIDENCED [A]
- `audience explicit` — PASS [D]
- `reader can state what it is not` — UNEVIDENCED [A]
- `correctly name a use case not shown on the page` — UNEVIDENCED [A]

Next rung split: 0/4 FAILS; 3/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_.txt` · `how/campaigns/campaign_garnier/evidence/p0/captures_curated/adna_home_desktop_light.png` · `how/campaigns/campaign_garnier/evidence/p0/captures_curated/contact_390_light_0.jpg`.

Owed / movement: Cold-reader panel across 390/768/1440; score may fall, be confirmed, or rise to 5 after ceiling lifts.

### D2 — 3/5 · provisional

Coherent triad-linked navigation. Homepage graph reaches spec in one click and tool setup in two; /install is unreachable from homepage in frozen link graph. No site-wide search in inspected header/sidebar. Depth clause at 3 is provisional: the pack does not establish several selected high-value pages at ≥3 clicks; shallower routes exceed that negative wording without earning rung 4.

Awarded rung clauses:

- `Coherent but deep` — PASS [D]
- `several high-value pages ≥3 clicks` — UNEVIDENCED [A]

Next rung clauses:

- `≤2 clicks to all high-value pages` — UNEVIDENCED [A]
- `search present and scoped` — FAILS [D]
- `no orphans` — FAILS [D]

Next rung split: 2/3 FAILS; 1/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/link_graph.json` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_reference.txt` · `how/campaigns/campaign_garnier/evidence/p0/captures_curated/adna_learn-concepts-triad_desktop_light.png`.

Owed / movement: Define the ten high-value routes and task-test all; can confirm/lower 3; search/orphan fixes needed for 4.

### D3 — 3/5 · ceiling · ceiling 3

Published commands, prerequisites, explicit file-and-fresh-session success checks, annotated first-run files, troubleshooting and cleanup are substantial. No clean-machine execution/timing exists; even the page says the first-run recording is absent. Thin troubleshooting is not established; actual content exceeds that descriptive weakness, while real coverage remains untested.

Awarded rung clauses:

- `Completes as written` — UNEVIDENCED [A]
- `TTFS 10–30 min` — UNEVIDENCED [A]
- `troubleshooting thin` — UNEVIDENCED [A]

Next rung clauses:

- `TTFS < 10 min` — UNEVIDENCED [A]
- `prerequisites stated up front` — PASS [D]
- `troubleshooting present` — PASS [D]
- `escape hatches present` — PASS [D]

Next rung split: 0/4 FAILS; 1/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_get-started.txt` · `how/campaigns/campaign_garnier/evidence/p0/run_summary.json`.

Owed / movement: Clean VM + unfamiliar human + stopwatch/video; 3 is provisional within ceiling, may move either way; <10 minutes cannot be claimed.

### D4 — 3/5 · provisional

Concepts/tutorials/reference are navigable; a 20-section spec is present, but complete field coverage was not audited. Reference mixes rationale, migration and craft; migration guide describes adoption into an existing project, not every breaking-version boundary. Historical docs selector and tested examples are not established.

Awarded rung clauses:

- `Clear types` — PASS [D]
- `complete reference` — UNEVIDENCED [A]
- `versioning weak` — PASS [D]

Next rung clauses:

- `Four types cleanly separated in the IA` — FAILS [D]
- `versioned` — UNEVIDENCED [A]
- `migrations documented` — FAILS [D]
- `examples tested` — UNEVIDENCED [A]

Next rung split: 2/4 FAILS; 2/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_reference.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_reference_migration-guide.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_reference_specification.txt`.

Owed / movement: Corpus/API completeness and version-boundary/example CI audit; may lower 3 or confirm; four-type IA and migrations need work for 4.

### D5 — 3/5 · graded

Token census and build checks support a mostly conformant published design system. Actual Triad SVG uses a huge viewBox with tiny nodes, leaving most of the panel empty; fresh 390px observation measures labels around 3.87px high. This is a responsive-legibility failure despite no document overflow.

Awarded rung clauses:

- `Tokenised system` — PASS [D]
- `mostly conformant` — PASS [D]
- `some drift` — PASS [D]

Next rung clauses:

- `Published system` — PASS [D]
- `enforced in build` — PASS [D]
- `responsive integrity verified` — FAILS [D]
- `states designed` — PASS [D]

Next rung split: 1/4 FAILS; 0/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/token_census.json` · `how/campaigns/campaign_garnier/evidence/p0/run_summary.json` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_design-system.txt` · `how/campaigns/campaign_garnier/evidence/p0/captures_curated/adna_learn-concepts-triad_desktop_light.png` · `how/campaigns/campaign_garnier/evidence/p0/captures_curated/triad_390_t1_ready.png` · `how/campaigns/campaign_garnier/evidence/p0/triad_t1_observation.json`.

Owed / movement: Fix SVG sizing; re-render key widths and themes. Rung 4 fails 1/4 clauses: responsive integrity verified.

### D6 — 3/5 · provisional

Accessible plain-language core prose coexists with internal campaign/ADR shorthand in writing guidelines and old clone/open-in-Obsidian quickstart shorthand in the migration guide. Privacy declares no analytics while a Speed Insights script is fetched; this establishes a disclosure-review question, not proof of collection. Comprehensive factual verification is absent.

Awarded rung clauses:

- `Consistent voice` — PASS [D]
- `claims mostly supportable` — UNEVIDENCED [A]
- `some aspirational tense` — PASS [D]

Next rung clauses:

- `Single voice throughout` — FAILS [D]
- `every claim verified or verifiable` — UNEVIDENCED [A]
- `tense discipline enforced` — UNEVIDENCED [A]

Next rung split: 1/3 FAILS; 2/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_reference_writing-guidelines.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_reference_migration-guide.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_privacy.txt` · `how/campaigns/campaign_garnier/evidence/p0/transport_observation.json` · `how/campaigns/campaign_garnier/evidence/p0/source_fact_inventory.json`.

Owed / movement: Complete claim/tense register and reconcile privacy with actual transport/backend observation; may lower or confirm 3.

### D7 — 2/5 · provisional

Named founder, partner overlap, one-contributor Rare Archive and founder stewardship are plainly disclosed. The site does not establish independent adoption; the partner is explicitly not independent corroboration. Dated activity is present, an excess over 2. No independent use claim is invented from registry size.

Awarded rung clauses:

- `Named humans` — PASS [D]
- `no independent adoption` — PASS [D]
- `claims at strength ceiling` — PASS [D]

Next rung clauses:

- `Named humans` — PASS [D]
- `some verifiable third-party use` — FAILS [D]
- `activity visible` — PASS [D]

Next rung split: 1/3 FAILS; 0/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_about.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_state-of-the-network.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_changelog.txt`.

Owed / movement: Verify independent adopter artifacts; absent adoption is a site proof gap, not failure to browse. Claim-strength audit could also lower 2.

### D8 — 3/5 · provisional

Ladder, standards and linked CoC are published. AEP archive actually contains AEP-1 final and AEP-2 review with named author/sponsor. This exceeds informal-process wording of 3. Chartered groups are not instantiated; approval-gated Fluxer is described, but last-message recency was not observed.

Awarded rung clauses:

- `Ladder published` — PASS [D]
- `contribution standards published` — PASS [D]
- `CoC published` — PASS [D]
- `venue exists` — PASS [D]
- `process informal` — UNEVIDENCED [A]

Next rung clauses:

- `Numbered proposal process with public archive` — PASS [D]
- `chartered groups` — FAILS [D]
- `named role-holders` — PASS [D]
- `live venue` — UNEVIDENCED [A]

Next rung split: 1/4 FAILS; 1/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_community.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_community_proposals.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_reference_governance-model.txt`.

Owed / movement: Read venue activity and verify role/group artifacts; provisional informal-process clause is exceeded by formal AEPs; live venue alone cannot yield 4 without chartered groups.

### D9 — 3/5 · ceiling · ceiling 3

Site links contribution guide and issue templates and names non-code paths. The frozen pack does not count open unassigned good-first-issues or measure responsiveness. Rung 3 is provisional because labelled-issue population is unverified; no outsider contribution completed.

Awarded rung clauses:

- `CONTRIBUTING` — PASS [D]
- `templates` — PASS [D]
- `some labelled issues` — UNEVIDENCED [A]
- `response time unmeasured` — PASS [D]

Next rung clauses:

- `One-command dev setup` — UNEVIDENCED [A]
- `populated good-first-issues` — UNEVIDENCED [A]
- `median first response < 72h` — UNEVIDENCED [A]
- `non-code paths named` — PASS [D]

Next rung split: 0/4 FAILS; 3/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_community.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/adna_community_community-contribution-standards.txt` · `how/campaigns/campaign_garnier/evidence/p0/run_summary.json`.

Owed / movement: Outsider PR run, populated-label census and 90-day median response measurement; may lower 3 or lift ceiling.

### D10 — 4/5 · provisional

Fetched curated llms map/full corpus, sitemap, RSS, markdown twin, semantic text and registry JSON; live content negotiation returns identical markdown. Structured-data census covers 228/229 local pages (install lacks it), with no Organization. Missing /.well-known/mcp.json is only a failed discovery route, not proof no MCP server exists. Site-wide self-conformance and copy-context behavior are unverified.

Awarded rung clauses:

- `llms.txt` — PASS [D]
- `sitemap` — PASS [D]
- `RSS` — PASS [D]
- `clean extraction` — PASS [D]
- `markdown twins` — PASS [D]
- `JSON-LD` — PASS [D]
- `machine-readable registry` — PASS [D]
- `documented agent entry point` — PASS [D]

Next rung clauses:

- `llms.txt` — PASS [D]
- `sitemap` — PASS [D]
- `RSS` — PASS [D]
- `clean extraction` — PASS [D]
- `markdown twins` — PASS [D]
- `JSON-LD` — PASS [D]
- `machine-readable registry` — PASS [D]
- `documented agent entry point` — PASS [D]
- `MCP server over the corpus` — UNEVIDENCED [A]
- `copy-as-context affordances` — UNEVIDENCED [A]
- `stable resolvable URIs` — PASS [D]
- `demonstrated self-conformance` — UNEVIDENCED [A]

Next rung split: 0/12 FAILS; 3/12 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/machine_1.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/machine_6.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/machine_7.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/machine_8.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/machine_9.txt` · `how/campaigns/campaign_garnier/evidence/p0/jsonld_canonical.json` · `how/campaigns/campaign_garnier/evidence/p0/machine_verification.json`.

Owed / movement: Corpus MCP discovery/execution, copy-context test and self-conformance audit. Local census scope must remain separate from production; could confirm 4 or reach 5 after evidence.

### D11 — 3/5 · ceiling · ceiling 3

Automated axe findings are zero on sampled live target templates; pa11y is WCAG2AA browser-default theme and leaves manual warnings. Tiny Triad diagram has accompanying textual explanation. AA primary-template conformance remains provisional: keyboard/zoom/manual contrast/AT were not performed.

Awarded rung clauses:

- `AA on primary templates` — UNEVIDENCED [A]
- `complex graphics partially covered` — PASS [D]

Next rung clauses:

- `Verified AA across all templates including graphics and registry` — UNEVIDENCED [A]
- `screen-reader tested` — UNEVIDENCED [A]

Next rung split: 0/2 FAILS; 2/2 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/supplement_390.json` · `how/campaigns/campaign_garnier/evidence/p0/pa11y_results.json` · `how/campaigns/campaign_garnier/evidence/p0/captures_curated/triad_390_t1_ready.png` · `how/campaigns/campaign_garnier/evidence/p0/run_summary.json`.

Owed / movement: Manual keyboard/zoom/contrast plus VoiceOver/NVDA, then AT users; score can fall or ceiling lift. No AA certification or gate pass.

### D12 — 3/5 · provisional

Internal extra-link probes have no errors and expected /404 is control. Local homepage initial lab score 92, LCP 2408.9ms, TBT 246ms; three diagnostic repeats score96 with TBT0 and do not replace initial. Live script GETs show transport only; no field dataset or collector receipt. Rung3 uses explicit provisional p75, not a fabricated desktop/mobile pass or arbitrary cap2.

Awarded rung clauses:

- `CWV green at p75` — UNEVIDENCED [A]
- `no internal 404s` — PASS [D]

Next rung clauses:

- `CWV green at p75` — UNEVIDENCED [A]
- `no internal 404s` — PASS [D]
- `budgets enforced in CI` — UNEVIDENCED [A]
- `redirect map maintained` — PASS [D]
- `security headers set` — UNEVIDENCED [A]

Next rung split: 0/5 FAILS; 3/5 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/run_summary.json` · `how/campaigns/campaign_garnier/evidence/p0/lighthouse_followup.json` · `how/campaigns/campaign_garnier/evidence/p0/inventory_coverage.json` · `how/campaigns/campaign_garnier/evidence/p0/transport_observation.json` · `how/campaigns/campaign_garnier/evidence/p0/public_inventory.json`.

Owed / movement: Production p75 LCP/INP/CLS mobile+desktop across five templates, collector receipt and operational CI/header audit; may fall or rise.

## nous

Native composite **57.2%** = Σ(score/5 × native weight). Full breakdown (D1→D12): **3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 0, 3**. Weights: 12, 8, 15, 8, 8, 8, 8, 14, 10, 5, 2, 2. All ceiling/provisional flags follow; this composite has no uncertainty adjustment.

### D1 — 3/5 · ceiling · ceiling 4

Nous homepage starts with research mission; concrete Hermes agent mechanism is on linked product/docs. Successful 390px home exists; blocked desktop lab pages are excluded, not defects. Human summary timing has not been tested.

Awarded rung clauses:

- `Correct summary` — UNEVIDENCED [A]
- `but only after scrolling past the fold` — UNEVIDENCED [A]

Next rung clauses:

- `Correct summary in ~30s at all three viewports` — UNEVIDENCED [A]
- `audience explicit` — UNEVIDENCED [A]

Next rung split: 0/2 FAILS; 2/2 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/nous_.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_0.txt` · `how/campaigns/campaign_garnier/evidence/p0/capture_index.json`.

Owed / movement: Cold-reader panel and successful all-width top-level renders. Provisional score may fall or rise after ceiling lifts.

### D2 — 3/5 · provisional

Docs have clear task/reference navigation and visible scoped search. Property-wide top-ten route depth and orphan census were not collected; deep-rung descriptor is provisional, not an invented count. Nous/Hermes is treated as one linked property, retaining parent-site access limits.

Awarded rung clauses:

- `Coherent but deep` — PASS [D]
- `several high-value pages ≥3 clicks` — UNEVIDENCED [A]

Next rung clauses:

- `≤2 clicks to all high-value pages` — UNEVIDENCED [A]
- `search present and scoped` — PASS [D]
- `no orphans` — UNEVIDENCED [A]

Next rung split: 0/3 FAILS; 2/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/nous_.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_0.txt` · `how/campaigns/campaign_garnier/evidence/p0/capture_index.json`.

Owed / movement: Frozen-cohort complete crawl and ten-task depth/search audit; may lower 3, confirm or raise to4.

### D3 — 3/5 · ceiling · ceiling 3

No human clean-machine install/timing. Hermes supplies OS-specific installation, provider choice, first chat/session checks and Common Failure Modes/Recovery Toolkit; thin troubleshooting wording is not verified and visible content exceeds it.

Awarded rung clauses:

- `Completes as written` — UNEVIDENCED [A]
- `TTFS 10–30 min` — UNEVIDENCED [A]
- `troubleshooting thin` — UNEVIDENCED [A]

Next rung clauses:

- `TTFS < 10 min` — UNEVIDENCED [A]
- `prerequisites stated up front` — UNEVIDENCED [A]
- `troubleshooting present` — PASS [D]
- `escape hatches present` — PASS [D]

Next rung split: 0/4 FAILS; 2/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/hermes_detail_0.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_0.txt` · `how/campaigns/campaign_garnier/evidence/p0/run_summary.json`.

Owed / movement: Unfamiliar human VM run; score3 is provisional, can fall or ceiling lift to4/5.

### D4 — 3/5 · provisional

Substantial differentiated tutorial/user/developer/reference documentation is visible, but complete API coverage, old-version access, migration completeness and runnable-example CI were not examined. Do not infer them from the framework reputation.

Awarded rung clauses:

- `Clear types` — PASS [D]
- `complete reference` — UNEVIDENCED [A]
- `versioning weak` — UNEVIDENCED [A]

Next rung clauses:

- `Four types cleanly separated in the IA` — UNEVIDENCED [A]
- `versioned` — UNEVIDENCED [A]
- `migrations documented` — UNEVIDENCED [A]
- `examples tested` — UNEVIDENCED [A]

Next rung split: 0/4 FAILS; 4/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_0.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/hermes_detail_0.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_3.body`.

Owed / movement: Full docs/API inventory, version/migration paths and example execution; may lower/confirm/raise3.

### D5 — 2/5 · provisional

Three recognizable visual registers: Nous research page, electric-blue Hermes product and Docusaurus docs. Property-wide token enforcement is unverified; their cross-property styling differs visibly.

Awarded rung clauses:

- `Coherent surface` — PASS [D]
- `no enforced tokens` — UNEVIDENCED [A]
- `drift visible across templates` — PASS [D]

Next rung clauses:

- `Tokenised system` — UNEVIDENCED [A]
- `mostly conformant` — UNEVIDENCED [A]
- `some drift` — PASS [D]

Next rung split: 0/3 FAILS; 2/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/capture_index.json` · `how/campaigns/campaign_garnier/evidence/p0/raw/captures/nous_hermes/desktop_light/docs__desktop__light.png` · `how/campaigns/campaign_garnier/evidence/p0/raw/captures/nous/instrument_390_light/_.png`.

Owed / movement: Token/build-system evidence and repeat responsive renders. No-enforced-tokens clause is UNEVIDENCED, not an assertion of absence; provisional2 may move either way.

### D6 — 3/5 · provisional

Research mission, Hermes promotional superlatives (only agent/learning loop) and practical documentation are readable but vary in register. Universal claims are not independently supported.

Awarded rung clauses:

- `Consistent voice` — PASS [D]
- `claims mostly supportable` — UNEVIDENCED [A]
- `some aspirational tense` — PASS [D]

Next rung clauses:

- `Single voice throughout` — UNEVIDENCED [A]
- `every claim verified or verifiable` — UNEVIDENCED [A]
- `tense discipline enforced` — UNEVIDENCED [A]

Next rung split: 0/3 FAILS; 3/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/nous_.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_0.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/hermes_detail_0.txt`.

Owed / movement: Claim register, source corroboration and corpus voice/tense audit; may lower or confirm3, then earn4.

### D7 — 3/5 · provisional

Releases link research/model artifacts and repository is active; named-human attribution and independent third-party use not sufficiently verified in bounded frozen sample. Provisional3 is a hypothesis, not established adoption.

Awarded rung clauses:

- `Named humans` — UNEVIDENCED [A]
- `some verifiable third-party use` — UNEVIDENCED [A]
- `activity visible` — PASS [D]

Next rung clauses:

- `Multiple independent adopters with linked artifacts` — UNEVIDENCED [A]
- `live metrics` — UNEVIDENCED [A]
- `security path` — UNEVIDENCED [A]
- `claims at or below true strength` — UNEVIDENCED [A]

Next rung split: 0/4 FAILS; 4/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/nous_.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_0.txt` · `how/campaigns/campaign_garnier/evidence/p0/cohort_deep.json`.

Owed / movement: Resolve identities and independent artifacts, live metric source and security path; may lower3 or substantiate higher anchor.

### D8 — 3/5 · provisional

Contribution standards and public repository/Discord venue links exist; review process is informal maintainer review. No contributor ladder, CoC artifact, chartered groups or venue recency is demonstrated in this limited pack. Provisional3 does not mean those absent instruments passed.

Awarded rung clauses:

- `Ladder published` — UNEVIDENCED [A]
- `contribution standards published` — PASS [D]
- `CoC published` — UNEVIDENCED [A]
- `venue exists` — PASS [D]
- `process informal` — PASS [D]

Next rung clauses:

- `Numbered proposal process with public archive` — UNEVIDENCED [A]
- `chartered groups` — UNEVIDENCED [A]
- `named role-holders` — UNEVIDENCED [A]
- `live venue` — UNEVIDENCED [A]

Next rung split: 0/4 FAILS; 4/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_3.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_0.txt`.

Owed / movement: Governance-artifact inventory, actual role holders, venue-recency check. May lower3; formal process evidence could raise it.

### D9 — 3/5 · ceiling · ceiling 3

Contribution guide contains setup/testing/PR workflow and templates are linked or referenced. No open-unassigned labelled-issue census, outsider trial or measured response median. Non-code docs contributions are explicitly named.

Awarded rung clauses:

- `CONTRIBUTING` — PASS [D]
- `templates` — PASS [D]
- `some labelled issues` — UNEVIDENCED [A]
- `response time unmeasured` — PASS [D]

Next rung clauses:

- `One-command dev setup` — UNEVIDENCED [A]
- `populated good-first-issues` — UNEVIDENCED [A]
- `median first response < 72h` — UNEVIDENCED [A]
- `non-code paths named` — PASS [D]

Next rung split: 0/4 FAILS; 3/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_3.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_0.txt`.

Owed / movement: Outsider contribution run, issue-label census and90-day response metric; may lower3 or lift ceiling.

### D10 — 3/5 · provisional

Curated llms.txt and semantic text are fetched; robots advertises sitemap(s), but sitemap contents and RSS are not fetched in this bounded cohort pack. Rung3 is expressly provisional for those two clauses. Hermes MCP feature documentation describes connecting servers/running an agent as MCP, which does not establish MCP over the docs corpus.

Awarded rung clauses:

- `llms.txt` — PASS [D]
- `sitemap` — UNEVIDENCED [A]
- `RSS` — UNEVIDENCED [A]
- `clean extraction` — PASS [D]

Next rung clauses:

- `llms.txt` — PASS [D]
- `sitemap` — UNEVIDENCED [A]
- `RSS` — UNEVIDENCED [A]
- `clean extraction` — PASS [D]
- `markdown twins` — UNEVIDENCED [A]
- `JSON-LD` — UNEVIDENCED [A]
- `machine-readable registry` — UNEVIDENCED [A]
- `documented agent entry point` — PASS [D]

Next rung split: 0/8 FAILS; 5/8 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_3.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_4.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_deep_0.txt`.

Owed / movement: Fetch and inspect sitemap/RSS/twins/schema/catalogue, exercise corpus MCP; provisional3 may fall or rise. No claim missing fetch is a missing feature.

### D11 — 0/5 · provisional · ceiling 3

Primary Hermes quickstart has aria-allowed-attr CRITICAL; primary docs also have many serious contrast/link findings. Therefore criticals-confined-to-secondary rung1 fails. Keyboard traversal is untested, so0 is provisional.

Awarded rung clauses:

- `Automated criticals` — PASS [D]
- `keyboard traversal broken` — UNEVIDENCED [A]

Next rung clauses:

- `Automated criticals confined to secondary templates` — FAILS [D]
- `keyboard traversal works` — UNEVIDENCED [A]
- `focus is unlabelled or invisible` — UNEVIDENCED [A]

Next rung split: 1/3 FAILS; 2/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/supplement_390.json` · `how/campaigns/campaign_garnier/evidence/p0/supplement_linked_390.json`.

Owed / movement: Manual keyboard/AT and impact adjudication. Can rise from0 if higher clauses establish; no unconditional AA pass. Ceiling3 until AT testing.

### D12 — 3/5 · provisional

Hermes lab desktop LCP1793.9ms versus mobile13580.2ms; parent-site access blocked. These are lab observations, not field CWV. All p75 and whole-property internal-link clauses are untested. Provisional3 under5.1.4 preserves uncertainty; no green or red field gate is declared. A hard cap2 is not justified because no-monitoring clause is also untested.

Awarded rung clauses:

- `CWV green at p75` — UNEVIDENCED [A]
- `no internal 404s` — UNEVIDENCED [A]

Next rung clauses:

- `CWV green at p75` — UNEVIDENCED [A]
- `no internal 404s` — UNEVIDENCED [A]
- `budgets enforced in CI` — UNEVIDENCED [A]
- `redirect map maintained` — UNEVIDENCED [A]
- `security headers set` — UNEVIDENCED [A]

Next rung split: 0/5 FAILS; 5/5 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/lighthouse_followup.json` · `how/campaigns/campaign_garnier/evidence/p0/cohort_expansion.json`.

Owed / movement: Collect p75 mobile+desktop five-template dataset and full internal-link/ops crawl;3 may move down or up. This number carries high uncertainty.

## mastra

Native composite **58.8%** = Σ(score/5 × native weight). Full breakdown (D1→D12): **4, 3, 3, 3, 2, 3, 3, 3, 3, 3, 0, 3**. Weights: 12, 8, 18, 15, 6, 5, 8, 5, 6, 10, 4, 3. All ceiling/provisional flags follow; this composite has no uncertainty adjustment.

### D1 — 4/5 · ceiling · ceiling 4

Build AI agents plus TypeScript framework provides an immediate category and developer audience; mobile/desktop screenshots carry the same proposition. Human summary timing has not been tested.

Awarded rung clauses:

- `Correct summary in ~30s at all three viewports` — UNEVIDENCED [A]
- `audience explicit` — PASS [D]

Next rung clauses:

- `Correct summary in ~30s at all three viewports` — UNEVIDENCED [A]
- `audience explicit` — PASS [D]
- `reader can state what it is not` — UNEVIDENCED [A]
- `correctly name a use case not shown on the page` — UNEVIDENCED [A]

Next rung split: 0/4 FAILS; 3/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_docs.txt` · `how/campaigns/campaign_garnier/evidence/p0/capture_index.json`.

Owed / movement: Cold-reader panel and successful all-width top-level renders. Provisional score may fall or rise after ceiling lifts.

### D2 — 3/5 · provisional

Docs taxonomy and search are visible. Several product families and guides exist, but exhaustive ten-page depth and orphan audit is missing; no whole-site 4 inferred from one docs page.

Awarded rung clauses:

- `Coherent but deep` — PASS [D]
- `several high-value pages ≥3 clicks` — UNEVIDENCED [A]

Next rung clauses:

- `≤2 clicks to all high-value pages` — UNEVIDENCED [A]
- `search present and scoped` — PASS [D]
- `no orphans` — UNEVIDENCED [A]

Next rung split: 0/3 FAILS; 2/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_docs.txt` · `how/campaigns/campaign_garnier/evidence/p0/capture_index.json`.

Owed / movement: Frozen-cohort complete crawl and ten-task depth/search audit; may lower 3, confirm or raise to4.

### D3 — 3/5 · ceiling · ceiling 3

No human clean-machine install/timing. Mastra advertises npm create, local Studio and a provider choice; clean prerequisite timing, keys and failure handling are not verified. Some captured quickstart text is an agent instruction block; it is evidence of copy, not a direction to this reviewer.

Awarded rung clauses:

- `Completes as written` — UNEVIDENCED [A]
- `TTFS 10–30 min` — UNEVIDENCED [A]
- `troubleshooting thin` — UNEVIDENCED [A]

Next rung clauses:

- `TTFS < 10 min` — UNEVIDENCED [A]
- `prerequisites stated up front` — UNEVIDENCED [A]
- `troubleshooting present` — UNEVIDENCED [A]
- `escape hatches present` — PASS [D]

Next rung split: 0/4 FAILS; 3/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_8.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_docs.txt` · `how/campaigns/campaign_garnier/evidence/p0/run_summary.json`.

Owed / movement: Unfamiliar human VM run; score3 is provisional, can fall or ceiling lift to4/5.

### D4 — 3/5 · provisional

Substantial differentiated tutorial/user/developer/reference documentation is visible, but complete API coverage, old-version access, migration completeness and runnable-example CI were not examined. Do not infer them from the framework reputation.

Awarded rung clauses:

- `Clear types` — PASS [D]
- `complete reference` — UNEVIDENCED [A]
- `versioning weak` — UNEVIDENCED [A]

Next rung clauses:

- `Four types cleanly separated in the IA` — UNEVIDENCED [A]
- `versioned` — UNEVIDENCED [A]
- `migrations documented` — UNEVIDENCED [A]
- `examples tested` — UNEVIDENCED [A]

Next rung split: 0/4 FAILS; 4/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_docs.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_8.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_10.body`.

Owed / movement: Full docs/API inventory, version/migration paths and example execution; may lower/confirm/raise3.

### D5 — 2/5 · provisional

Homepage and mobile docs are composed and coherent. Desktop docs capture collapses main text into a one-character-wide column; fresh390 docs is normal. Scope is captured browser state, not a claim all desktops fail. Token enforcement unverified.

Awarded rung clauses:

- `Coherent surface` — PASS [D]
- `no enforced tokens` — UNEVIDENCED [A]
- `drift visible across templates` — PASS [D]

Next rung clauses:

- `Tokenised system` — UNEVIDENCED [A]
- `mostly conformant` — UNEVIDENCED [A]
- `some drift` — PASS [D]

Next rung split: 0/3 FAILS; 2/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/capture_index.json` · `how/campaigns/campaign_garnier/evidence/p0/raw/captures/mastra/desktop_light/docs__desktop__light.png` · `how/campaigns/campaign_garnier/evidence/p0/raw/captures/mastra/instrument_390_light/_docs.png`.

Owed / movement: Token/build-system evidence and repeat responsive renders. No-enforced-tokens clause is UNEVIDENCED, not an assertion of absence; provisional2 may move either way.

### D6 — 3/5 · provisional

Consistent technical marketing and concrete API examples; leading framework and numerical customer outcomes require independent verification. A corpus-wide single voice and tense check was not run.

Awarded rung clauses:

- `Consistent voice` — PASS [D]
- `claims mostly supportable` — UNEVIDENCED [A]
- `some aspirational tense` — PASS [D]

Next rung clauses:

- `Single voice throughout` — UNEVIDENCED [A]
- `every claim verified or verifiable` — UNEVIDENCED [A]
- `tense discipline enforced` — UNEVIDENCED [A]

Next rung split: 0/3 FAILS; 3/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_docs.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_8.txt`.

Owed / movement: Claim register, source corroboration and corpus voice/tense audit; may lower or confirm3, then earn4.

### D7 — 3/5 · provisional

About names Sam Bhagwat, Shane Thomas, Abhi Aiyer and team. Homepage links named customer cases; recent research/blog activity is visible. Case claims are third-party-use reports, not independently inspected deployment artifacts.

Awarded rung clauses:

- `Named humans` — PASS [D]
- `some verifiable third-party use` — UNEVIDENCED [A]
- `activity visible` — PASS [D]

Next rung clauses:

- `Multiple independent adopters with linked artifacts` — UNEVIDENCED [A]
- `live metrics` — UNEVIDENCED [A]
- `security path` — UNEVIDENCED [A]
- `claims at or below true strength` — UNEVIDENCED [A]

Next rung split: 0/4 FAILS; 4/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_.txt` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_7.txt` · `how/campaigns/campaign_garnier/evidence/p0/cohort_deep.json`.

Owed / movement: Resolve identities and independent artifacts, live metric source and security path; may lower3 or substantiate higher anchor.

### D8 — 3/5 · provisional

Contribution standards and public repository/Discord venue links exist; review process is informal maintainer review. No contributor ladder, CoC artifact, chartered groups or venue recency is demonstrated in this limited pack. Provisional3 does not mean those absent instruments passed.

Awarded rung clauses:

- `Ladder published` — UNEVIDENCED [A]
- `contribution standards published` — PASS [D]
- `CoC published` — UNEVIDENCED [A]
- `venue exists` — PASS [D]
- `process informal` — PASS [D]

Next rung clauses:

- `Numbered proposal process with public archive` — UNEVIDENCED [A]
- `chartered groups` — UNEVIDENCED [A]
- `named role-holders` — UNEVIDENCED [A]
- `live venue` — UNEVIDENCED [A]

Next rung split: 0/4 FAILS; 4/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_10.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_docs.txt`.

Owed / movement: Governance-artifact inventory, actual role holders, venue-recency check. May lower3; formal process evidence could raise it.

### D9 — 3/5 · ceiling · ceiling 3

Contribution guide contains setup/testing/PR workflow and templates are linked or referenced. No open-unassigned labelled-issue census, outsider trial or measured response median. Non-code docs contributions are explicitly named.

Awarded rung clauses:

- `CONTRIBUTING` — PASS [D]
- `templates` — PASS [D]
- `some labelled issues` — UNEVIDENCED [A]
- `response time unmeasured` — PASS [D]

Next rung clauses:

- `One-command dev setup` — UNEVIDENCED [A]
- `populated good-first-issues` — UNEVIDENCED [A]
- `median first response < 72h` — UNEVIDENCED [A]
- `non-code paths named` — PASS [D]

Next rung split: 0/4 FAILS; 3/4 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_10.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_docs.txt`.

Owed / movement: Outsider contribution run, issue-label census and90-day response metric; may lower3 or lift ceiling.

### D10 — 3/5 · provisional

Curated llms.txt and semantic text are fetched; robots advertises sitemap(s), but sitemap contents and RSS are not fetched in this bounded cohort pack. Rung3 is expressly provisional for those two clauses. llms map advertises .md twins and docs have Copy page; successful endpoint/corpus checks still owed.

Awarded rung clauses:

- `llms.txt` — PASS [D]
- `sitemap` — UNEVIDENCED [A]
- `RSS` — UNEVIDENCED [A]
- `clean extraction` — PASS [D]

Next rung clauses:

- `llms.txt` — PASS [D]
- `sitemap` — UNEVIDENCED [A]
- `RSS` — UNEVIDENCED [A]
- `clean extraction` — PASS [D]
- `markdown twins` — UNEVIDENCED [A]
- `JSON-LD` — UNEVIDENCED [A]
- `machine-readable registry` — UNEVIDENCED [A]
- `documented agent entry point` — PASS [D]

Next rung split: 0/8 FAILS; 5/8 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_5.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/cohort_extra_6.body` · `how/campaigns/campaign_garnier/evidence/p0/raw/public/mastra_docs.txt`.

Owed / movement: Fetch and inspect sitemap/RSS/twins/schema/catalogue, exercise corpus MCP; provisional3 may fall or rise. No claim missing fetch is a missing feature.

### D11 — 0/5 · provisional · ceiling 3

Mastra home has serious aria-hidden-focus. Automated-clean clause at2 fails; frozen data does not establish criticals, secondary-only confinement or actual keyboard traversal. No literal anchor fully fits. Required integer0 is an explicitly provisional floor placeholder, NOT a measured automated-critical/keyboard-broken verdict; this is an instrument coverage ambiguity.

Awarded rung clauses:

- `Automated criticals` — UNEVIDENCED [A]
- `keyboard traversal broken` — UNEVIDENCED [A]

Next rung clauses:

- `Automated criticals confined to secondary templates` — UNEVIDENCED [A]
- `keyboard traversal works` — UNEVIDENCED [A]
- `focus is unlabelled or invisible` — UNEVIDENCED [A]

Next rung split: 0/3 FAILS; 3/3 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/supplement_390.json` · `how/campaigns/campaign_garnier/evidence/p0/supplement_linked_390.json`.

Owed / movement: Manual keyboard/AT and impact adjudication. Can rise from0 if higher clauses establish; no unconditional AA pass. Ceiling3 until AT testing.

### D12 — 3/5 · provisional

Mastra lab desktop LCP1844.5ms versus mobile9225.8ms and TBT2889ms. These are lab observations, not field CWV. All p75 and whole-property internal-link clauses are untested. Provisional3 under5.1.4 preserves uncertainty; no green or red field gate is declared. A hard cap2 is not justified because no-monitoring clause is also untested.

Awarded rung clauses:

- `CWV green at p75` — UNEVIDENCED [A]
- `no internal 404s` — UNEVIDENCED [A]

Next rung clauses:

- `CWV green at p75` — UNEVIDENCED [A]
- `no internal 404s` — UNEVIDENCED [A]
- `budgets enforced in CI` — UNEVIDENCED [A]
- `redirect map maintained` — UNEVIDENCED [A]
- `security headers set` — UNEVIDENCED [A]

Next rung split: 0/5 FAILS; 5/5 UNEVIDENCED.

Evidence: `how/campaigns/campaign_garnier/evidence/p0/lighthouse_followup.json` · `how/campaigns/campaign_garnier/evidence/p0/cohort_expansion.json`.

Owed / movement: Collect p75 mobile+desktop five-template dataset and full internal-link/ops crawl;3 may move down or up. This number carries high uncertainty.

Related: [[baseline_manifest]] · [[OPERATION_VITRUVIUS_review_instrument]].
