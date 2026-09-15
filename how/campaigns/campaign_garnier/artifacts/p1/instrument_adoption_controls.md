---
type: artifact
created: 2026-09-15
updated: 2026-09-15
status: active
last_edited_by: agent_codex
tags: [garnier, p1, evidence]
---
# Experimental instrument adoption

[D] The site-owned consumer runner `site/scripts/garnier_consumer_gate.mjs` and its process self-tests landed together at 9a3d11a, before candidate approval. Run `node site/scripts/garnier_consumer_gate.mjs --selftest`; evidence: `evidence/p1/instrument_controls.json`. All 16 controls passed: 3 positive controls and 13 actual nonzero-exit negative cases. The latter include empty/missing/duplicate populations, wrong theme/status, missing PNG, missing axe reach, axe violations, missing/empty main and actual prohibited prose (including a split heading).

[D] `capture_population.json` freezes the route/view/theme population before captures. `capture_receipts_close.json` records the final matrix; `capture_gate_close.json` is the consuming process result. A caller could otherwise shrink both expected and actual sets; the separate frozen population prevents that here. PNG checking proves the file and signature, not semantic image quality; cited images were also viewed. Theme/status/request traces are companion navigations of the same built HTML, not fields invented by the collector. Raw T0 reports are preserved.

[D] `prose_gate_close.json` reaches nine explicit routes and rejects prohibited prose. This is the declared eight-word instrument, not a universal language or truth detector. Source/twin and claim review supplement it. Quoted/code/hidden content is excluded and recorded; passing does not establish human comprehension. Word targets remain advisory.

[D] Transport disclosure checks were amended with their existing process red-test in the same source batch. `GATE_PORT=4479 bash scripts/transport_mounted_redtest.sh` produced six passes, zero failures and zero harness bugs. It reached deleted mount, deleted disclosure, false no-transmission claim and the gate-42 coupling, then restored source. No final BaseLayout diff remains.

[D] Frozen P0 is preserved: `predecessor_freeze_check.json`. Provider proposal remains staged in [[how/campaigns/campaign_garnier/artifacts/p1/provider_pattern_proposal|P1 provider proposal]]; no WebForge pattern or bar was copied. Local Bash 3 could not run the existing visual-container wrapper’s empty-array expansion; the installed Bash 5.3.9 invocation succeeded. No installation was performed.


Related: [[campaign_garnier]] · [[dp2_ratification_20260915]].
