---
type: artifact
artifact_class: design_evidence
created: 2026-09-16
updated: 2026-09-16
last_edited_by: agent_codex
status: completed
source_commit: 0c77b615730c1df0451e40a8afca4951076fe9b0
token_budget_estimated: 60
token_budget_actual: 65
token_budget_actual_uncertainty: 25
token_budget_unit: kT_content_load
billing: unavailable
campaign: campaign_garnier
tags: [garnier, design, homepage, bounded]
---
# Homepage design pass

## Authority and design plan

[D] [[next_build_scope]] is accepted by Stanley on 2026-09-16. This early homepage increment is separate from P1 reader acceptance; [[formative_reader_pack]] still uses source b1cf040 at port 4465. DP3 remains open. Candidate checkout: `/Users/stanley/.cache/garnier-homepage-20260916`, branch `garnier/homepage-20260916`, preview port 4466. Dependencies installed separately with `npm ci --ignore-scripts --no-audit --no-fund`; no shared build/cache directory.

[I] Apply [[garnier_quality_research]] to the actual subject: an inspectable folder and its working instructions. Keep one title treatment and a single document surface containing the connected file examples. Reduce competition between the definition and privacy details. Put setup next to the actions and keep privacy details readable directly below them. Preserve every existing factual statement, command and destination. Left-align the narrow-screen opening and stack it deliberately.

[D] Existing tokens remain authoritative: Tokyo Night base `#1a1b26`, surface `#24283b`, border `#2f334d`, body `#c0caf5`, muted `#9aa5ce`, heading `#ffffff`. These values are descriptive only; implementation references semantic tokens. Space Grotesk carries headings; Inter carries explanation and controls; JetBrains Mono carries actual files and commands. Existing light theme and fixed-dark hero remain. No palette/font/art change.

```text
Introduction / definition       A project you can inspect
Setup + reading paths          Folder structure
Exact command + copy state     [selectable tree]
Privacy explanation            CLAUDE.md excerpt
Existing trust links           [source-derived rule]
                               Source + behavioral limit
```

[I] Brief review: labels identify real files rather than add marketing categories; separators show two parts of one example rather than a stack of cards. The characteristic element is the project itself. Rejected extra decoration, a new palette, artificial window controls and new animation. This stays inside the approved opening; lower sections and shared hero consumers retain their treatments.

## Observed interaction defect

[D] Existing source changes only the copy button's accessible label on success; its visible icon is unchanged. Clipboard rejection is silently caught. Correct both with visible feedback and a polite live region, preserving the exact selectable command and existing focus/target contract. Hide the enhanced copy control until JavaScript attaches its handler so no-JS users receive the command without a dead control. This is a source-observed defect; runtime checks are still owed.

## Verification receipt

[D] Completed as implementation commit **0c77b615730c1df0451e40a8afca4951076fe9b0**. Only two website source files changed: `HomeHero.astro` and `index.astro`; scoped diff is `evidence/homepage_design_20260916/source.diff`. Code stays on the isolated branch; the primary checkout's site source and dist remain frozen. The existing emitter generated `site/dist/index.md`; no separate twin source or emitter edit was necessary. Preview remains running at http://127.0.0.1:4466/; restart from the checkout's `site/` with `npm run preview -- --host 127.0.0.1 --port 4466` if needed. Do not rebuild port 4465's site/dist.

[D] Evidence below is relative to `how/campaigns/campaign_garnier/evidence/homepage_design_20260916/`:

- **Build and R-SITE:** two safe Astro builds, current CI header/installer/redirect injection and markup validation pass. Initial fast run 577 passed / 1 failed/3skipped: `.hero-reframe` had been removed when relocating unchanged privacy text. Restored that existing selector contract and scoped its quieter presentation; final fast 578 passed / 3 skipped, full 696 passed / 3 skipped. Logs: `build_initial.log`, `build_final.log`, `markup_final.log`, `gates_fast.log`, `gates_fast_final.log`, `gates_full.log`. All affected R-VOICE/R-SOURCE specs are included in the full run.
- **Skip accounting:** gate17's negotiation-route assertion skips because the existing CI injection sequence does not add negotiation routes. Two gate36 checks skip because the isolated checkout lacks the sibling `.adna` checkout. Separate read-only verification against the original checkout confirms all four tour files current at v8.11/sync81b1220, that sync resolves to a commit, and candidate tour bytes/manifest equal those verified originals. These are documented corroboration, not relabeled passes. See `source_population_review.json`.
- **T0:** final twelve captures at320/375/768/900/1024/1440, each light and dark, each separately invoking the existing capture tool with axe; all HTTP200 and zero axe violations. Exact argv and exits in `t0_final_runs.json`; images/reports in `t0_final/`. The local preview's only console resource error is the unavailable `/_vercel/speed-insights/script.js` adapter endpoint, not a product JavaScript exception or field-performance result.
- **Native/browser interaction:** `native_review.json` and the one-sitting `review_browser.mjs` retain the method. Twelve native captures in `native/` use OS preferences and the actual light-theme toggle, never DOM theme-class overrides. Dark-first remains the default even under a light OS preference; the hero is intentionally dark in both themes. Inspected every canonical viewport in both themes, full narrow examples, keyboard focus, expanded spacing, no-JS, art unavailable and normal motion. No horizontal page overflow. `normal_motion.png` retains the same information as reduced motion; no new animation.
- **Copy and access:** actual browser clipboard write equals the exact source command. An injected NotAllowedError produces visible recovery text and leaves retry/selectable command available. Live-region feedback is present. Keyboard traversal exposes both reading paths, copy, both code regions and source with visible focus; ArrowRight scrolls the overflowing320px tree. Text-spacing overrides (1.5 line height,2em paragraph spacing,.12em letters,.16em words) preserve the320px viewport; measured primary/source targets≥44px high. No-JS hides the enhanced copy control while retaining command/links/source. Screens: `copy_success.png`, `copy_failure.png`, `source_focus.png`, `spacing_320.png`, `no_js.png`, `art_disabled.png`.
- **Shared consumers:** final `/network` and `/commons` hero PNGs and entire main text match the frozen preview exactly at375/900/1440 in both themes (12comparisons). Files in `shared/`. An earlier capture differed by37pixels, maximum2/255 channels, in the unchanged illustration; final captures wait for image decoding and are exact. Initial receipt retained in `native_review_initial.json`. The initial clip method also limited tall hero images to the viewport; the final method uses full-page clip capture and all full narrow states were reinspected.
- **Source/HTML/twin and claims:** read the rendered homepage including all headings, example, limitations, participation, metadata and extractor exclusions alongside `home.md` and its source. Definition, privacy statements (including R-120), stewardship limits, command, governance rule, link destinations and all lower sections retain their assertions. New labels identify the folder tree and excerpt; copy status is transient UI feedback. The existing source-derived rule remains unchanged. `reading_census.json`: prose FKGL5.46, passive0%; whole-twin11.54 and37excluded lines explicitly retained, not passed off as the whole page's reading level. `docs_population.json` and `source_population_review.json`: all229built HTML routes and118documentation source hashes match the frozen population; no documentation tranche was rewritten or claimed reviewed by this pass. The first population command lacked PyYAML in Homebrew Python; reran the unchanged read-only recipe with installed Anaconda Python.
- **Isolation and scope:** `frozen_before.json`/`frozen_after.json` confirm all15 P1 route hashes unchanged. `candidate_identity.json` records the separate source/served hashes; build predates the source commit but its checked source bytes are the committed bytes. `scope_review.json` accepts the real two-file diff and rejects `scope_negative_control.diff` for touching reserved registry data; this is a disposable diff fixture, not an actual mutation. No provider-owned gate/bar changed; no reusable provider pattern was introduced.

## Assessment and handoff

[I] The hierarchy separates the definition and actions from privacy detail; the connected example reads as files rather than nested cards. At tablet/narrow widths it intentionally follows the introduction. These are builder observations, not measured comprehension gains. Real reader records remain absent, and this candidate must not inherit observations from P1. Choosing a new reader stimulus later requires an explicit version disposition.

[D] Complete within the approved increment. DP3, the engineer/funder/scientist records and publication holds remain open. No push, deployment or peer delivery. The earlier exact-command reproduction remains complete; it was not repeated. [I] Additional workload estimate 65±25 kT versus 60±25 forecast; billing unavailable. This estimate covers source/visual review, implementation, capture correction, gate repair and closure separately from prior P1 and research accounting.

Related: [[next_build_scope]] · [[phase_exit]] · [[session_stanley_20260916_032510_garnier_homepage]].
