---
type: artifact
created: 2026-09-15
updated: 2026-09-16
status: active
last_edited_by: agent_rosetta
tags: [garnier, p1, evidence]
---
# P1 formative review pack — awaiting people

[D] Candidate source: b1cf040, local preview at http://localhost:4465/. Homepage [first screen](../../evidence/p1/home_first_screen.png), [390px light](../../evidence/p1/home_390_light.png), [390px dark](../../evidence/p1/home_390_dark.png). These show a local candidate, not the deployed website. Use the restart procedure below if the preview is no longer running. [[how/campaigns/campaign_garnier/artifacts/p1/phase_exit|P1 review packet]] lists verification and open work.

## ⛩ Proposed stimulus re-pin — pending ratification, 2026-09-16

[I] [[formative_stimulus_repin_20260916]] (`status: proposed`) asks the operator to move the
formative stimulus to the completed gateway candidate **`6487444`** (preview
http://127.0.0.1:4466/, identity manifest
`evidence/homepage_gateway_20260916/proposed_formative_stimulus_6487444.json`, 15 routes
hashed 2026-09-16). Rationale: the gateway direction is already ratified, and
[[reader_protocol]]'s full-repeat clause makes records on `b1cf040` disposable by
construction. **Until that amendment is signed, everything below stands unchanged and
`b1cf040`/4465 remains the stimulus of record.** If it is signed: substitute candidate
identity `6487444`, URL `http://127.0.0.1:4466/`, and the manifest above wherever this pack
names `b1cf040`/4465; the procedure, keys, consent and scoring rules are untouched, and the
scorers first confirm the frozen key's expected answers remain reachable on the new stimulus
(any unreachable expected answer is a finding against the candidate, not a key change).

## Operator-supplied participants

[I] Stanley supplies at least one consenting newcomer from each class: senior/frontier engineer, investor/foundation program officer, AI scientist. Agents do not recruit or contact people. Use de-identified records; keep contact details out of this public vault. Confirm consent before recording quotations. Do not reuse formative participants in the final cold-reader cohort.

## Procedure

1. Record role, prior familiarity, device, viewport, theme, candidate identity and consent status. Accommodate assistive technology and record timing differences.
2. Show the loaded homepage for three seconds, conceal it, and ask: “What does this project provide, and what can you do with it now?” Record the answer without coaching.
3. Restore the same candidate for three minutes of self-directed browsing. Engineer: find the initial command/file example, prerequisites and context/governance locations. Funder: name the steward, distinguish available work from plans and find the contribution/contact ask. Scientist: explain the mechanism, find source/lineage and identify what evaluation is available or explicitly absent.
4. Record answers and confusions verbatim, followed by any clarification. Preserve the original response. These are three individual observations, not an aggregate success rate.
5. Apply the frozen reader protocol; correct each material confusion or give it an explicit disposition before DP3. Synthetic passes do not fill this record.

## Additional quickstart evidence — requirement fulfilled locally

[D] Later 2026-09-15: [[local_model_continuation]] completes the automated first-project requirement with the recorded local gateway and assistance. The three consenting reader records remain the needed inputs. The original run instructions below are preserved as the method, not a request to repeat the unchanged-candidate test.

[I] In a genuinely disposable environment with Git and authenticated Claude Code, copy the candidate’s exact command, complete the first project and run its displayed success checks. Record versions, argv, outputs, actual timestamps and any assistance. Never run a clone/removal command over an existing personal workspace. The agent’s previous container run proves only clone/entry; C2 remains owed. Do not publish credentials or personal project content.

## What to return

[I] For each participant: de-identified role, consent, candidate/device/theme, initial answer, role-task answer, confusions and timing deviations. For the clean first task: environment, successful project/file/history checks and any failure. No approval is inferred from silence, and DP3 remains pending until Stanley rules on a complete packet.


Related: [[campaign_garnier]] · [[dp2_ratification_20260915]].

## Local collection setup — 2026-09-15 continuation

[D] Stanley selected collection under the existing protocol, with all three reader sessions on this machine. The preview was restarted at `http://127.0.0.1:4465/`; all 15 served route hashes match source `b1cf040` (`evidence/p1/resume_preview_identity.json`). The browser-control tool could not open a visible browser; Stanley opens the local URL directly. This does not change the stimulus or authorize remote publication.

[D] No observations have been supplied. The entries below are an unfilled intake worksheet, not participant records. Copy the fields once per consenting reader; use role labels such as `engineer_01`, never names or contact details. Keep the answer key out of the participant's view.

```text
Record ID / role:
Consent to this review and to recording de-identified quotations:
Prior familiarity:
Candidate source / URL: b1cf040 / http://127.0.0.1:4465/
Date / device / viewport / theme:
Assistive technology or timing accommodations:
Three-second answer (verbatim):
Three-minute role-task answers (verbatim):
Confusions (verbatim):
Clarification or navigation assistance, after original answers:
Timing deviations:
```

[I] Return the three records or their local paths to the executing agent. The two calibrated scorers apply the frozen key only after intake; record their disagreement and adjudication. No scorer or synthetic reader fills missing human fields. Every material confusion receives a correction or explicit DP3 disposition.

## Fresh-context preview restart

[D] Source identity is `b1cf040`; final evidence/test records are at `f34f9c2`; synthetic-reader inputs were captured at `5b92495`. These are separate evidence populations. A running preview alone does not prove which source it serves.

[I] From the vault root, inspect `git rev-parse HEAD`, `git status --short`, and `git diff f34f9c2 -- site/ CLAUDE.md`. If the site or its root-governance example has changed, identify and record the new candidate before presenting it; do not reset or overwrite another session's work. Read `evidence/p1/close_candidate_identity.json` from the campaign root for the recorded route hashes. Reuse a built candidate only when those hashes match. Otherwise rebuild from the verified source using the following commands from `site/`:

```sh
npx astro build
node scripts/inject_headers.mjs .
node scripts/inject_installer_headers.mjs .
node scripts/inject_redirects.mjs .
npx astro preview --port 4465
```

[I] Run commands sequentially and stop on a failure. Never use `npm run build` or registry synchronization. Check build identity and rendered route hashes before reusing prior evidence; changed bytes require a fresh identity and affected checks. Read the current CI injection steps before gate execution, as required by [[verification_recipes]]. The rebuild is not itself a new test pass. The preview URL is local to this machine, not a public participant link; operator-mediated access or sharing requires its own explicit scope. The assisted automated task is complete in [[local_model_continuation]]; P1's human observations remain owed.
