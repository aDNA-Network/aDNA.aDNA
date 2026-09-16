---
type: artifact
artifact_class: scope_amendment
created: 2026-09-15
updated: 2026-09-16
last_edited_by: agent_codex
status: accepted
campaign: campaign_garnier
tags: [garnier, design, scope, accepted]
---
# Next build: refine the homepage opening

## Reviewable scope

[I] One bounded local design increment turns [[garnier_quality_research]] into a homepage opening that reads as a working document: a clear introduction beside two connected, readable file examples. Preserve the existing Tokyo Night/pixel identity, font families and semantic tokens. The existing five-section story, factual claims, first-task command and destinations remain the content contract.

1. **Reading hierarchy.** In the homepage-only `HomeHero` example variant, distinguish the definition, setup prerequisites, privacy explanation and actions using the existing type and spacing roles. Keep the title as one treatment. Align the introduction and example to a shared top edge; use deliberate narrow-screen stacking and readable line lengths. This applies the brief's criteria 2, 4 and 6.
2. **Readable file example.** In `index.astro`'s existing example slot, identify the folder tree and actual `CLAUDE.md` excerpt next to their respective content. Give the two code surfaces clear internal spacing and keep the source link and behavioral limitation with the excerpt. Retain selectable text, the source-derived rule and horizontally navigable code when needed. This applies criteria 1, 3, 6 and 8.
3. **Interaction finish.** Inspect the existing install-copy control, source link and two primary reading paths for visible keyboard focus, copy success/rejection feedback, touch access and text-spacing resilience. Correct defects observed on these surfaces within this scope. This applies criteria 5, 7 and 9.

[D] Source inspection: `site/src/pages/index.astro` contains the example slot and its styles; `site/src/components/sections/HomeHero.astro` already distinguishes `hero--example-led`; `site/src/data/home.ts` derives the actual governance rule from the vault. The retained desktop frame is `evidence/p1/home_first_screen.png`. It shows several similarly prominent prose blocks and a nested example panel. [I] These are design opportunities, not measured reader failures. Research cannot establish that the proposed treatment will improve comprehension.

## Accepted authority amendment

[D] Stanley explicitly approved this bounded design pass on 2026-09-16: “Approve the bounded design pass.” This accepts the scope and additional forecast below. The historical rationale for requesting the exception is retained; the request is no longer pending. P1 reader stimulus b1cf040 remains frozen, and DP3 and real-reader requirements remain open.

[I] Authorize this local homepage design increment before the three formative observations arrive. Preserve P1 source b1cf040 and its current preview at port 4465 as the frozen reader stimulus; build the new candidate in an isolated checkout and preview it separately, initially port 4466. Record both identities. The original first-project and three-class evidence requirements remain owed; DP3 remains pending. This is a limited exception to the visual-production sequence, not general P2/P3 entry or phase acceptance.

[D] The reason an explicit amendment is needed is the accepted campaign contract: `CLAUDE.md` §DP1 says, “The storyboard and formative humans precede visual production”; §Standing Orders says site changes require their phase-entry authority. The latest general request to keep building does not specify a change to those previously accepted requirements.

## Implementation boundary and checks

[I] Expected implementation files: `site/src/pages/index.astro`, the homepage-only branch of `site/src/components/sections/HomeHero.astro`, and the homepage's machine-readable twin if visible text/order changes. Expand only for a demonstrated dependency and record why. Shared hero consumers `/network` and `/commons` require regression checks. Existing palette, fonts, five illustration slots, registry inputs, source excerpt, exact command and provider-owned gate bars stay governed by their existing contracts.

[I] Before editing, preserve and verify the frozen preview. Build the isolated candidate with `npx astro build` and current CI header/redirect injection; never use registry-mutating prebuild. Inspect source, served HTML and twin together. Run affected R-VOICE/R-SOURCE checks, the existing R-SITE suite, and actual homepage captures across the six canonical widths in native light/dark states. Inspect keyboard traversal, copy failure/success, no-JS/art-disabled reading, text-spacing overrides and normal/reduced-motion parity where applicable. Compare `/network` and `/commons` output. Record limitations and source identity; no success is claimed in advance.

[I] Deliver a separately runnable preview, before/after captures, a scoped diff and evidence receipt. A successful local increment can be reviewed while the P1 reader stimulus remains available. Choosing the new candidate for human testing later requires an explicit stimulus/version disposition; observations on the old version must not be reported as observations on the new one.

## Forecast and ruling

[I] Proposed additional workload: **60 kT content-load**, rough breakdown 10 isolation/source review, 20 implementation, 20 verification/iteration, 10 closure. Forecast uncertainty ±25 kT; billing unavailable. Book this separately from the already recorded P1 workload and research. It is a forecast, not a billing quote or a silent commitment of P2's 991 kT envelope. No purchase, publication or peer delivery is part of this increment.

- **Decision:** accept the limited early homepage design increment described above in a separate preview, preserving the frozen P1 reader stimulus and open DP3/real-reader requirements.
- **Ratified-by:** Stanley Bishop, explicit chat approval “Approve the bounded design pass.”
- **Date:** 2026-09-16.
- **Status:** accepted.

Related: [[phase_exit]] · [[formative_reader_pack]] · [[session_stanley_20260915_122656_garnier_next_build]].

## Implementation disposition — 2026-09-16

[D] Completed under the accepted exception: [[homepage_design_pass]], source0c77b61, isolated preview port4466. Original sourceb1cf040/port4465 remains the reader stimulus. Implementation status completed does not accept the new candidate for reader use or close DP3. [I] Actual workload65±25kT; billing unavailable.

## Accepted expansion and completion — later 2026-09-16

[D] Stanley's “Implement the plan” accepts [[clean_homepage_revision]]: clean reading surfaces, whole-homepage composition and three independent vision perspectives for every substantial visual change. This is an additive expansion of the completed narrow pass above. Sourcee745990 at isolated4466 completes it; [[clean_homepage_verification]] and [[clean_homepage_visual_review]] preserve checks and three review rounds. FrozenP1b1cf040/4465, real-reader requirements and DP3 remain unchanged. [I] Additional forecast120±40kT; actual160±50kT, separately booked, billing unavailable.
