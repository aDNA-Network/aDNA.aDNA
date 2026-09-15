---
type: artifact
created: 2026-09-14
updated: '2026-09-15'
status: proposed
last_edited_by: agent_codex
tags:
- garnier
- genesis
---
# Genesis evidence and coverage

## What this pass could not see

[A] Real-user p75, recruited human tests, clean-machine TTFS, assistive-tech user passes, complete read-aloud, normal-motion interactions, clipboard-rejection UX and all image/social previews remain unmeasured. Automated green is not a universal accessibility or launch verdict. Source and reference coverage limits are in [[read_manifest]] and [[finding_register_garnier]].

## Executed checks

[D] `npx astro build` from site: 229 pages and 226 twins. No npm prebuild, sync:vaults or registry edit. Apply `node scripts/inject_headers.mjs`, `inject_installer_headers.mjs`, `inject_redirects.mjs` from site before gates, as CI does. `GATE_PORT=4479 npm run test:gates:fast`: 580 pass, 1 skip. Full `npm run test:gates`: 698 pass, 1 existing skip. `npm run check:markup`: zero errors. `/opt/homebrew/bin/bash scripts/visual_regression_container.sh check`: 26 pass; system Bash invocation failed before testing and is preserved separately. All logs are in `evidence/genesis/`.

[D] Existing reading census: 226 twins, no missing routes; FKGL is prose-only and only an upper-bound diagnostic. Existing glossary first-use: four declared first-contact routes, six checked mentions, no violations. Existing token census: 32 Astro component/layout files, no unapproved findings in that population; token AA check passed. Added one-off inventory lists source matches for type, diagrams, motion, code, states and social metadata; **152 rows are match locations, not defects or runtime certification**. `concision.json` contains exact words and eight-term probes for seven surfaces; [[word_budgets]] owns proposed caps.

[D] Live capture matrix: seven routes × six canonical viewports × two themes = 84 reached HTTP-200 captures, zero reported axe violations and console errors. Each invocation used one viewport and one theme to avoid the T0 axe coverage seam. `capture_live.py` is the exact recipe; raw matrix is ignored, representative original PNGs are committed. `live_capture_summary.json` retains reach per row. Reduced-motion stills cannot validate animation.

[D] Reference matrix: nineteen distinct sites × twelve requested viewport/theme combinations; OpenAI's challenge is an excluded attempt, not inspected product evidence. Native theme support was not established; class/localStorage emulation is not a native-theme claim. Full raw matrices are ignored; cited desktop originals and `reference_capture_manifest.json` are committed. `capture_cohort.py` reproduces the attempts. Eleven usable craft-cohort examples remain after exclusion, alongside the fixed category cohort.

[D] Cached Lighthouse 13.4.1, five local templates × mobile/desktop, ten successful reports: performance 96–100, accessibility 100, best-practices 96, SEO 100. Worst measured lab LCP 2405.82 ms; worst CLS 0.004813; TBT is not INP. `lighthouse_summary.json` retains each route/form/config and metric. The initial preview command used an obsolete CLI path and failed; the corrected installed `astro/bin/astro.mjs` path served the origin. No package installed. These are localhost lab observations, not deployed CWV. P4.1 investigates the best-practices audit rather than assuming its cause.

[D] Live header watcher matched four configured header values and its bogus-header control failed as intended. JSON-LD census with an explicit GARNIER output path: 229 non-404 pages, 228 carrying parseable blocks, zero parse failures; `install.html` is the uncovered page. Zero Organization objects in this census is not proof of organization-identity failure: inspect structured-data shape before judging coverage. External link probe: 141 targets, 81 reachable, 60 access-gated, zero other failures; access-gated targets remain unverified, not certified healthy.

[D] Public machine probes reached llms index/full corpus, robots, sitemap, RSS, home/get-started twins, actual registry JSON and Markdown negotiation. The guessed `/api/vaults.json` 404 was a probe-path mistake; `/api/registry.v1.json` returned 200 with the single-operator caveat. MCP descriptor 404 agrees with the explicit built/not-live close AAR. No package-client smoke or npm publication occurred. `machine_surface_probe.json` records URL, status, content type, body hash and bounded sample.

## Reproduction and integrity

Run report scripts from vault root unless their usage specifies site. The existing JSON-LD instrument defaults to HAUSSMANN output: always supply `--out how/campaigns/campaign_garnier/evidence/genesis/raw/jsonld_report.md` here. No production state is inferred from dist. Every runner records output under GARNIER. Existing tool versions and the pinned Docker image are in [[setup_plan]]. No new canonical checker was authored at session tail; `derive_campaign.py` is a pure frontmatter report, not a site gate.

## ISS

[D] Existing Astro ISS generator rendered the local charter with Rosetta skin and system fonts; no peer file changed. Ten decision cards, disabled initial submit, no horizontal overflow and no JS errors at 375 and 1440 pixels; both first-screen captures visually inspected. No decision submitted. The generator emitted one advisory about acronym density on the codename card; that is presentation lint, not a failed authority check. Text fallback remains `charter_gate.md`. Receiver/round-trip submission was not tested or enabled by this session.


Related: [[campaign_garnier]] · [[mission_garnier_genesis]].

## 2026-09-15 — charter review correction and ratification

[D] DP1 is accepted with the five amendments in [[charter_ratification_20260915]]. The prior “complete” wording concerned packet authoring and the checks explicitly recorded; it did not establish comprehensive site validation, independent/blind reader evidence, human success, a current v1.1 score or field p75. Existing synthetic reads remain single-author primed simulations and are preserved unchanged. The initial 26-session/1,637 kT estimate is historical, not measured calibration. [[budget_basis]] and [[docs_review_scope]] replace its execution forecast. This amendment sitting updates documents only; no new website test result is claimed.
