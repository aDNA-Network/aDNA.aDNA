---
type: artifact
created: '2026-09-15'
status: completed
tags:
- garnier
- amendments
- verification
updated: '2026-09-15'
last_edited_by: agent_codex
---
# Approved amendment verification

[D] Verified 2026-09-15. Scope: GARNIER campaign documents, source/build route inventory, preserved proposal archive and the local resolved gate receipt. These checks do not establish website quality, P0 scoring or human outcomes.

## Results and reproduction

- [D] `python3 how/campaigns/campaign_garnier/evidence/amendments/verify_amendments.py`: 38 mission records; zero integrity errors. Verifies required command/protocol surfaces and controls, dependency DAG/reciprocity, all nine feasibility pairs, charter arithmetic, decision coverage, no active pending gate, original archive hashes and inherited conventions.
- [D] Its `--selftest` passes one positive fixture and rejects 12 defective fixtures, including duplicate pointer/route, missing method/control, invented calibration, budget mismatch, missing/cyclic dependency and unratified/pending state. These are document-integrity controls, not proof the future mission methods have executed.
- [D] `python3 how/campaigns/campaign_garnier/evidence/genesis/derive_campaign.py`: 38 missions, 47 agent sittings, 2,310 kT; calibration null; committed P0 123 kT. Both phase tables reconcile to the actual mission frontmatters. Maximum individual mission estimate is 79 kT; human scheduling is separate.
- [D] `python3 how/campaigns/campaign_garnier/evidence/amendments/derive_docs_population.py` reproduced the frozen manifest's exact assignments: 118 content routes in 12 tranches, plus 111 other routes with existing mission owners; together exactly 229 unique local HTML routes excluding 404. Source hashes and local HTML/twin path existence were compared. No page is marked reviewed.
- [D] Direct archive/member comparisons confirm the inherited twenty-convention section AND verbatim protects list are unchanged. Original proposal files remain available in the archive; original synthetic evidence and raw/site result packs were not rewritten.
- [D] `node how/campaigns/campaign_garnier/evidence/amendments/capture_ratification.mjs`: local receipt at 375 and 1440 px, ten decisions, no form controls, no horizontal overflow, no page errors and zero axe violations. Both full-page captures were visually inspected. Original ISS token styles retained; underlined links inherit the readable text color and visible keyboard focus remains.

## Failures found and corrected in this sitting

[D] Plain git pull failed because the local branch had no tracking branch; explicit `git pull --ff-only origin main` succeeded, already up to date. The latest main CI run was 34865213054 at d6ae1b6, not this branch HEAD.

[D] A first inventory parser split at an inline YAML `---` string; changed to anchored delimiter lines. The route inventory also explicitly includes course Markdown and the aggregate changelog after inspecting their route producers. The old component-census command assumes site/ as its working directory; the recipe now states that context.

[D] Initial receipt axe invocation required an explicit browser context; the capture wrapper now creates one. The first completed axe pass detected insufficient contrast on its two links. Fixed them to inherit the already-readable receipt text color, retained underlining/focus, and reran. Failed reports and captures are preserved with the before_contrast suffix; final reports are separately named.

## What this pass could not see

[A] No site/src build or website gate suite was rerun because this is a document-only amendment. No new live captures, Lighthouse/field result, VITRUVIUS score, clean-machine TTFS, human panel or assistive-technology user pass is claimed. Command entrypoints were inspected; future controls and actual behavioral acceptance remain owed to their missions. Work estimates remain uncalibrated. No new tooling was installed; no credentials were read; no push, deployment or peer message occurred.

[I] The synthetic-prescreen and human-panel protocol is an execution contract, not completed evidence. The increased forecast exposes the formerly unbounded documentation work; it does not commit all later budgets. P0 is next under the recorded DP1 approval, with its own current-state and evidence checks.


Related: [[campaign_garnier]] · [[charter_ratification_20260915]].

## Closure verification

[D] STATE gained one dated QUEUED block; removing exactly that block reproduces the opening file SHA-256 byte-for-byte (`evidence/amendments/state_append_verification.json`). Actual git diff against the opening HEAD contains no tracked changes to site/src, .adna, HAUSSMANN or VITRINE; historical genesis evidence hashes are unchanged except the explicitly amended budget-reporting script. Campaign changes were committed locally at e38fb69; the final closure commit records this verification, mission/session AAR and STATE. No push occurred.
