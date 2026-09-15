---
type: artifact
created: '2026-09-15'
status: active
tags:
- garnier
- amendments
updated: '2026-09-15'
last_edited_by: agent_codex
---
# Reached-surface verification recipes

[D] CLI entrypoints below were read from current scripts, package.json and gates.yml on 2026-09-15. [I] They are future execution recipes, not results from this amendment sitting. Every output goes under the executing GARNIER mission's evidence directory. Inspect scripts for default output paths before running; several legacy probes default to HAUSSMANN artifacts and must not write there. Missing reusable instruments are staged to WebForge through the wrapper; no provider implementation or bar is copied.

## R-SITE — local build and gates

Run sequentially from `site/`, saving separate exit codes and logs: `npx astro build`; `node scripts/inject_headers.mjs .`; `node scripts/inject_installer_headers.mjs .`; `node scripts/inject_redirects.mjs .`; `npm run check:markup`; `GATE_PORT=4479 npm run test:gates:fast`; then `GATE_PORT=4479 npm run test:gates` for phase exits or shared-template changes. Never use npm run build or registry synchronization. Read current CI steps at execution; changes to injections become explicit instrument amendments. The expected result is zero failures and no new skips/xfails relative to the pinned baseline. Derive counts from the output, not this document. P4.3 owns the complete final pass. A source-only change may run its exact affected specs first, named in the mission's evidence; phase exits still require the full suite.

## R-CAPTURE — rendered route matrix

Read `scripts/viewports.json` for the six names. From the vault root, run `node scripts/visual_capture.mjs --base http://localhost:4465 --routes <mission-routes> --viewports <one-name> --themes <one-theme> --axe --out <mission-evidence>/<viewport>_<theme>` once per viewport/theme pair. Start the isolated preview from `site/` with `npx astro preview --port 4465`; verify the actual bound port and build stamp before the first capture. Stop it before another tool owns the port. One viewport and one theme per invocation closes the genesis axe coverage gap. Compare expected route×viewport×theme rows with successful reports and PNGs; inspect every cited capture. Non-200, missing rows, console errors, or wrong theme are failures, not empty successes. Light and dark plus art-disabled/reflow checks preserve accessible information and legibility.

## R-VOICE — prose, claims and machine twin

From the vault root: `node site/scripts/reading_census.mjs --dist site/dist --routes <mission-routes> --json`. Record word deltas and reasons for exceeding advisory targets. Read each rendered heading/paragraph and its corresponding `site/dist/<route>.md`, including exclusions omitted by the prose extractor. Compare assertions to the read-only predecessor claim register and cite IDs/source evidence in a GARNIER claim-delta ledger for GR-7; unsupported claims fail regardless of brevity. From site/, run `npx playwright test --project=chromium tests/gates/gate-24-copy-craft.spec.ts tests/gates/gate-26-claim-register.spec.ts tests/gates/gate-48-reading-glossary.spec.ts`. Existing glossary scanning reaches four first-contact routes only: manually inspect additional mission routes against the actual one-new-term law and label that manual evidence. Never edit the HAUSSMANN register from GARNIER.

## R-SOURCE — source, HTML and Markdown agreement

Use `evidence/amendments/docs_population.json` as the initial manifest. Derive again with `python3 how/campaigns/campaign_garnier/evidence/amendments/derive_docs_population.py` after an authorized fresh build and compare the full route set and source hashes. Save stdout to a new mission evidence manifest; never overwrite the frozen amendment inventory. For each assigned row, read the source, sourceForEntry/transform mapping, rendered article and Markdown twin. Record exact source/HTML/twin locations for each correction and run documented non-destructive examples in a disposable directory. Record the command verbatim, tool version, environment, exit status and observed output. Instructions that would publish, send, access credentials or mutate peers are reviewed up to their boundary and remain human-gated; a simulated run is not reproduction. Source repairs must survive a second safe build and the relevant source transform. Run `npx playwright test --project=chromium tests/gates/gate-14-single-source.spec.ts tests/gates/gate-17-agentic.spec.ts tests/gates/gate-31-link-integrity.spec.ts` from site/; these gates complement, but do not replace, page-by-page review. Registry data remains read-only.

## R-TOKENS — actual consumer palette and components

From the vault root, run `python3 site/scripts/token_aa_check.py --json`. From `site/`, run `node scripts/component_token_census.mjs --json` (it resolves source paths from its working directory). Derive tracked source files with `git ls-files site/src/components site/src/layouts site/src/pages site/src/styles`; include Astro and JS/JSX/TS/TSX. Exclude generated node_modules/dist trees explicitly. The existing census only covers its documented Astro population; P0.2 owns the expanded population contract. Findings are advisory until reviewed against an available semantic token, not automatic design defects. Preserve ADR-059's validators-only choice. Read the provider's actual pinned bar file through the federation wrapper; record its hash and owner path instead of copying thresholds.

## R-PERF — lab, transport and field evidence

Use the existing pinned Lighthouse tool after R-SITE against `/`, `/get-started`, `/learn/what-is-adna`, `/vaults`, `/vaults/graph`, mobile and desktop. Resolve its installed CLI and Chrome path from setup_plan at execution, record exact argv and pin in the run manifest; no npx-latest fetch. Read consumer/provider budget provenance from its owner. Run the mounted-transport and emission specs: `npx playwright test --project=chromium tests/gates/gate-50-vitals-emit.spec.ts tests/gates/gate-53-bar-provenance.spec.ts tests/gates/gate-56-transport-mounted.spec.ts` from site/. They prove instrumentation behavior, not collected field data. Verify a real request reaches the configured collector and retrieve its corresponding record using existing read-only access; log only non-sensitive identifiers. Follow field_performance_policy for sample sufficiency, unknowns and the exception.

## R-MACHINE — final served origin

From site/: `node scripts/check_live_headers.mjs https://adna.network`, with separate red control `node scripts/check_live_headers.mjs https://adna.network --expect-fail-demo` (expected nonzero). Use GET requests for `/llms.txt`, `/llms-full.txt`, `/robots.txt`, `/sitemap-index.xml`, `/rss.xml`, `/api/registry.v1.json`, `/get-started.md`, plus `/get-started` with `Accept: text/markdown`. Assert final URL, content type, build identity and content, including Vary and byte-equivalent negotiation. Treat the MCP descriptor as absent until its separate publication mission actually ships it. Existing production probes before publication assess the predecessor deployment only; repeat after a separately authorized release to assess the new build.

## R-CLOSE — scope and evidence

At mission open record `git rev-parse HEAD` as the base. At close inspect `git diff <base> --name-status` and the explicitly staged diff; require the mission's declared scope, no reserved-path writes, current claim evidence, named limitations and a five-line AAR. Record changed source hashes and any human gate event. Use a disposable diff with a reserved registry/predecessor path as the negative control for the scope reviewer; do not mutate those paths. A document-completeness check cannot establish source correctness, a human result, live performance or permission to publish.

Related: [[campaign_garnier]] · [[charter_ratification_20260915]].
