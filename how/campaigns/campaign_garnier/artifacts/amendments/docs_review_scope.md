---
type: artifact
created: '2026-09-15'
status: active
tags:
- garnier
- amendments
updated: '2026-10-20'
last_edited_by: agent_rosetta
---
# Documentation review population and tranches

[D] The 2026-09-15 source/build inventory assigns **118 content routes** to **12 named tranches**. Every source-derived route has both an existing local HTML path and a Markdown twin; that is path evidence, not a content review or live result. Course Markdown and the aggregate changelog are included alongside docs, guides, reference, spec and proposals. Remaining built routes are explicitly assigned in `docs_population.json` to first-contact, trust, graph/template or regression missions.

[I] P2.3 is an inventory coordinator, not the entire corpus review. Each following tranche is a real mission, with its route list embedded in its body and full records in `evidence/amendments/docs_population.json`. Execute instructions/normative material first, then family and route order; tranche limits are 15 routes and 80,000 source bytes. Content-load proxy is bytes/4,000 kT, rounded up per tranche; this is an uncalibrated planning approximation. The limits are campaign planning choices, not copied provider bars.

## Tranche assignments

- [[mission_garnier_p2_3_t01_docs_review]]: 14 routes, 79,595 source bytes; 65 kT proposed.
- [[mission_garnier_p2_3_t02_docs_review]]: 15 routes, 77,972 source bytes; 66 kT proposed.
- [[mission_garnier_p2_3_t03_docs_review]]: 15 routes, 67,025 source bytes; 63 kT proposed.
- [[mission_garnier_p2_3_t04_docs_review]]: 5 routes, 78,448 source bytes; 56 kT proposed.
- [[mission_garnier_p2_3_t05_docs_review]]: 15 routes, 26,691 source bytes; 53 kT proposed.
- [[mission_garnier_p2_3_t06_docs_review]]: 15 routes, 39,733 source bytes; 56 kT proposed.
- [[mission_garnier_p2_3_t07_docs_review]]: 10 routes, 74,549 source bytes; 60 kT proposed.
- [[mission_garnier_p2_3_t08_docs_review]]: 13 routes, 73,741 source bytes; 63 kT proposed.
- [[mission_garnier_p2_3_t09_docs_review]]: 7 routes, 78,306 source bytes; 58 kT proposed.
- [[mission_garnier_p2_3_t10_docs_review]]: 5 routes, 61,086 source bytes; 52 kT proposed.
- [[mission_garnier_p2_3_t11_docs_review]]: 2 routes, 73,836 source bytes; 52 kT proposed.
- [[mission_garnier_p2_3_t12_docs_review]]: 2 routes, 29,381 source bytes; 41 kT proposed.

## Coverage and change handling

[D] The manifest records source hashes, exact HTML/twin paths, assigned mission and queued review status. [I] At DP3, refresh the complete population after P2's entry budget is considered; P2.2 source repairs trigger another inventory comparison before any tranche begins. A changed hash requires re-reading that row; added routes receive a named tranche before its budget is committed. Unassigned routes or a tranche exceeding its limit block readiness; the operator sees the revised P2 envelope. No file may be called reviewed because it was inventoried. At DP4 all tranche reviews must actually be complete, or the operator must explicitly amend scope; naming a future review is not completion.

Each tranche ledger records source/citation reading, actual rendered article inspection, command reproduction or an explicitly held external step, source/twin agreement and findings/dispositions. Purely generated registry values remain Hestia's lane; their template and labels are inspected by P3.3, and content/data corrections are staged. The original one-session P2.3 contract is preserved in proposal_20260914.tar.gz.

## Amendment — the append rule and T13 (DP3 item (i), ruled in advance 2026-10-20)

[D] Ruled by the operator at ARCADE A5.1 (R61, "accept as recommended") on [[arcade_amendment_dp3_item_i]] §2. **The text above is unchanged** (originals kept). Re-derived 2026-10-20: `vitrine/design` 118/118, 0 hash changes, 0 moves. `main` (`cbca256`) has 120 rows (+`/community/proposals/aep-3`, +`aep-4`) and a changed `/changelog` hash, and the greedy pack there moves 82 routes into 14 tranches.

1. **Append, don't repack.** A route added after the 2026-09-15 freeze goes to an **append tranche**, and T01–T12 keep their routes. A changed hash on an existing route is re-read inside its own tranche (`/changelog` → T04).
2. [[mission_garnier_p2_3_t13_docs_review]]: 2 routes (AEP-3 · AEP-4), 15,067 source bytes; **37 kT** proposed, `provisional_until_T01_actual`.
3. **Conditional profile row:** a profile route, once one exists, joins T13 before it opens and carries R-203. Otherwise it is carried to P2.5's re-forecast.
4. The provisional tranche pool moves from 620 kT (T02–T12) to 657 kT (T02–T13). Option C's committed segment (P2.1 · P2.2 · P2.3 · T01) is unchanged, and T01 itself is unchanged on both trees.

Related: [[campaign_garnier]] · [[charter_ratification_20260915]] · [[arcade_amendment_dp3_item_i]].
