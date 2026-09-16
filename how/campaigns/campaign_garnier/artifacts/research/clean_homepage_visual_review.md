---
type: artifact
artifact_class: independent_visual_review
created: 2026-09-16
updated: 2026-09-16
last_edited_by: agent_codex
status: completed
campaign: campaign_garnier
tags: [garnier, vision, review]
---
# Independent visual-review record

[D] [[clean_homepage_revision]] is the scope; [[verification_recipes]] §R-VISUAL is the method. These are separate model-agent judgments, not human-reader records, certification or a formal VITRUVIUS rescore. Reviewers received the same immutable screenshot manifest, audience and constraints before any builder rationale or peer findings. Their baseline reviews from planning are summarized in the implementation receipt. Source0c77b61 before captures are preserved under `evidence/clean_homepage_20260916/before/`.

## Round 1

[D] Pack: `evidence/clean_homepage_20260916/round1/native/manifest.json` (source hashes plus36PNG hashes). All six widths, both native themes. Reviewer coverage: enterprise required desktop/mobile-lg plus320/768/900/1024; cognitive/access desktop/mobile-lg both themes and320; brand/information13frames across all six widths. No reviewer read source, builder rationale or peer findings. Root remains the builder and records dispositions below.

[D/I] All three observed removal of background interference, coherent native light/dark, readable wrapped file descriptions, shortened sourced quotation, proof before mobile caveats, explicit lifecycle groups and retained honest qualifications. They recommended preserving the headline, real files, source/limitation, wordmark/purple identity and public-good purpose. Enterprise found no severe composition defect; cognitive found no default-spacing reading blocker. Interaction and factual checks were outside their screenshot-only findings.

### Enterprise design critic (`enterprise_visual_critic`)

- **E1 medium:** mobile-lg/320 hero and768–1024 stacking give the command/example/supporting strip excessive length. Consequence is disproportionate supporting evidence, not measured abandonment. Minimal fix: tighter stacked gaps/rows and remove redundant quote introduction; retain sources/limits. **Disposition:** implemented smaller stacked gaps and removal of redundant prose; recheck320–1024 readability.
- **E2 low:** full-page What's new dates are blue links while content titles are gray. Consequence: chronology outranks substance. **Disposition:** titles now carry existing changelog destination, dates are secondary metadata; recheck mobile/desktop in both themes.
- **E3 low, measurement needed:** light eyebrow faint. **Disposition:** measured separately with axe at2.12:1 against white; switched only the plain hero to existing neutral text token. Recheck light screenshots and automated contrast.
- **E4 medium, interpretation disputed:** absence of separate contained art described as a brief gap; suggested a people/agent/files diagram. **Disposition:** no addition. The accepted choice makes contained art optional when useful, not mandatory. The project file structure is the meaningful visual; root retains clean composition. This is a brief interpretation, not a missing required asset.

### Cognitive/access critic (`cognitive_access_review`)

- **C1 medium:** newcomer introduction is below the complete registry in full pages, leaving setup/specification as first options. Possible consequence: installation appears prerequisite to understanding. **Disposition:** existing short-introduction destination added as a secondary text link beside the first actions; recheck first screens and narrow stacking.
- **C2 medium:** Home/Operations and internal WGA wording lack clear purpose while persona credit repeats. Consequence: newcomers decode internal names instead of choosing examples. **Disposition:** existing public subnetwork purpose replaces WGA jargon; missing descriptions are explicitly disclosed, without inventing purpose. See B2 residual ownership below. Persona credit stays small and its AI disclosure remains nearby.
- **C3 low:**320header uses two rows; suggested moving GitHub into menu. **Disposition:** deferred, owner future shared-header design mission. Header controls remain contained; the isolated homepage contract preserves shared consumers. Verify expanded spacing/zoom; this is polish, not a proven access failure.

### Brand/information critic (`brand_information_review`)

- **B1 moderate:** parent project and files align, so containment and file/folder distinction depend on notation. **Disposition:** restrained containment rail/indent plus explicit File/Folder labels, all selectable text; recheck320anddesktop.
- **B2 moderate:** Operations/Home lack purpose; WGA has unexplained buildpack/symphony wording. **Disposition:** use existing public subnetwork `serves` description where available. Registry has null note/tagline for four retained selections; explicitly show missing purpose rather than inventing a description. **Residual:** real purpose content requires owner-supplied public fields; stage [[coord_2026_09_16_rosetta_to_hestia_homepage_purpose_descriptions]] locally. Root owns transparent presentation; Hestia owns data. Same eight selections and destinations remain. Recheck whether that honest sparse state is clear; do not count unknown descriptions as completed research.
- **B3 moderate:** Specification v2.5 and aDNA v8.11 appear to version the same thing. **Disposition:** label Specification explicitly; prefix the existing release title with Workspace using its source-derived version. Sources: `standard.ts` describes spec-body v2.5; dated changelog describes the workspace/template release; tour_manifest.json pins releasev8.11. Recheck the two lines together.
- **B4 low, verification needed:** Being worked in today adds unverified current-day activity. **Disposition:** remove group subtitles and call groups declared status. Lifecycle derivation stays shared; no freshness claim added.

## Builder checks and scope dependencies

[D] Initial fast suite575passed/3failed/3skipped. Two failures were the gate39 census expecting the now-removed homepage hero graph; its archived baseline3.4px is retired from active population, not raised or claimed repaired. Other figure pins/advisory policy remain unchanged. Third failure was the measured light eyebrow. Initial source/Markdown inspection also found whole-entry links merged heading text in the twin: entries now use semantic articles with title links, and adjacent machine-resource labels receive whitespace. No emitter change.

[D] Two command-context mistakes are preserved in logs: a root-relative edit launched from site/ made no edits and its premature build failed; a later build launched from checkout root used an unintended npm-cache Astro version and failed on missing entrypoints. It did not build the candidate or touch frozen P1. The correct pinned site build is `build_round2_site.log`; incidental candidate-root cache is isolated from the source commit. These failed attempts are not successful verification.

## Round 2 — independent reinspection

[D] Pack: `round2/native/manifest.json`,36PNG across six widths and both themes. Same three reviewers, independently, with no peer findings supplied before submission. All accepted the quieter direction; none reported a severe issue. Enterprise withdrew E4 after the brief clarified that contained art is optional. E2/E3 were resolved. E1 became low severity: place File/Folder beside filenames at320px to shorten the example without hiding content. Cognitive accepted early introduction access and honest unknown purposes. Brand accepted containment, declared-status language and the version distinction for the first update.

[D/I] Remaining findings: **E5 medium**, four repeated missing-description messages dominate sparse registry entries; **B5 low**, the second update still ambiguously calls v8.10 a standard fix; **B6 low**, Rare Archive wording should explicitly describe purpose rather than demonstrated outcome. **Disposition:** consolidate the four missing descriptions into one named disclosure, use inline file-kind labels at320px, label both workspace-release updates, and prefix actual registry descriptions with “Purpose:”. Preserve the same records, destinations and limitations. Cognitive independently supported reducing repeated notices. Shared-header C3 remains a low-priority deferred issue, not a demonstrated access failure.

[D] Enterprise and brand also identified a capture-metadata defect: some light screenshots showed light pixels while `heroBackground` reported the prior dark value. The capture read styles before the theme transition settled. Root corrected the capture method to flush styles and await finite animations, then made a new immutable Round3 pack. Round1/2 metadata is preserved with this correction; do not treat its transient RGB values as final-theme observations.

## Round 3 — final targeted review

[D] Pack: `round3/native/manifest.json`, final source hashes later committed as e745990;36PNG across six widths/both themes, with settled native-theme metadata. All three agents reinspected affected first/full-page and narrow frames independently.

- **Enterprise:** E1 and E5 resolved. Consolidated disclosure keeps entries focused;320px inline File/Folder labels shorten the map without clipping. Both native themes remain coherent. No blocking visual issue; no further correction requested for these findings.
- **Cognitive/access:** no new blocking issue. Four absent purposes remain explicitly named; available descriptions carry Purpose labels. Early introduction remains reachable;320px labels and boundaries are readable. C3 shared-header polish remains deferred.
- **Brand/information:** no blocking information or visual issue. Specification v2.5 and both workspace-release labels are distinct; Purpose makes intent explicit; same eight selections and honest omissions remain. Final manifest colors agree with visible pixels.

[D] These final judgments accept this visual increment qualitatively. They establish neither reader comprehension nor factual correctness, WCAG certification or an official VITRUVIUS score. Root separately checked source/HTML/twin agreement and interactions in [[clean_homepage_verification]].

## Final technical dispositions and residual ownership

[D] The first gate39 repair removed the retired hero baseline but missed its old200-row census guard; the second fast run still failed twice. Final guard80 matches the reduced figure population across the same five widths. The12px floor, surviving7.9/8.4px baseline pins, advisory policy and provider bars remain unchanged. Final fast578passed/3skipped, full696passed/3skipped. This is an explicit fixture-population update, not a claim that removed labels became legible.

[D] A source-corroboration helper initially compared raw registry names with canonical browser slugs and failed. The corrected helper imports the real canonical accessor and lifecycle functions; final comparison passes. Failed helper/log retained. Final light axe checks find zero violations; source command, actual governance rule, same eight destinations and qualifiers agree with HTML/twin.

[I] Remaining content ownership: Hestia supplies public purpose fields for aDNA, Canvas, Operations and Home after an authorized data workflow; the locally staged memo is not delivered. Future shared-header work owns C3; current narrow/zoom checks found no overflow. Stanley supplies consenting P1 readers and owns DP3. No remaining finding blocks the accepted clean-homepage increment.
