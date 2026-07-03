---
type: aar
mission_id: mission_champollion_m6_1_template_release_candidate
campaign_id: campaign_champollion
title: "AAR — M6.1 Template release candidate (v8.4 assembled, dry-run HELD at G6)"
status: completed
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [aar, champollion, m6_1, release_candidate, mode_b]
---

# AAR — M6.1 (lightweight)

- **Worked**: Fable-curation-before-any-assembly-token did exactly what G5-D1 intended — the 37-candidate corpus resolved to 27 IN / 10 DEFER / 0 DROP with per-row ratification traces BEFORE the builders spent anything, and both opus dispatches ran clean against pre-resolved row specs (A: vault-side, LP false-positive collapse 422→161 verified twice by different methods; B: 26-file/767+ held patch, 6/6 dry-run checks, zero persona/embed-note/gitignore regressions). The §7.7 discipline applied to our own release held: un-ratified inbound proposals (P-1…P-8, ADR-022 ask, state-prompt-shed) stayed OUT of the RC and route to G6-D4.
- **Didn't**: Budget — ~85 kT vs ~52 est (+63%). The halt-70 line was crossed in aggregate across two individually-in-band dispatches plus bookends, discovered at close accounting rather than in flight (the same shape as M5.2's silent halt-line pass, now on the orchestrator side). Also my pre-dispatch image-gap probe produced one false gap (I5 "Step-0 ABSENT" — the image carries the mechanism re-worded as "Step 2.5"; literal-string probe, F-CHM-212's vary-the-method lesson pointing the other way).
- **Finding**: An RC-class mission's cost is per-curation-row, not per-mission — 27 rows × (read source + fold + verify) ≈ 2.5–3 kT/row lands near the observed ~85, and no standard integration estimate would have priced it. Second finding: three fold rows (I5/I19/I20) were ALREADY-SHIPPED — image-side reality had outrun the backlog's filing evidence again (the P4 "hygiene rows inherit filing-evidence staleness" lesson, now on fold rows).
- **Change**: Price RC/fold-batch missions per curation-row at estimate time; verify-per-item at assembly stays mandatory (it converted 3 stale folds into discharges instead of no-op edits). Ledger-recording duty goes in the builder brief explicitly (A executed-but-didn't-record; B recorded correctly once briefed).
- **Follow-up**: Datapoint #6 carries the per-row calibration. G6 carries: the D4 adjudication queue (P-1/P-2/P-3+P-4/W-2/P-5–P-8/ADR-022/state-prompt-shed), the out-of-scope currency finds (aDNA_overview.md re-stamp decision · "27→28 subtopics" narrated count ×3), and the I16/I10-half DEFER-flips (Obsidian-stabilization track · planning-light skill absent image-side).
