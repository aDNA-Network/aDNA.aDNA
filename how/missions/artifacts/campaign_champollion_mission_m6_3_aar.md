---
type: aar
mission_id: mission_champollion_m6_3_adversarial_pass_2
campaign_id: campaign_champollion
title: "AAR — M6.3 Adversarial pass 2 + security re-verify (3 found→fixed via amendment; 9/9 gitleaks FP; nothing release-blocking)"
status: completed
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [aar, champollion, m6_3, adversarial, security]
---

# AAR — M6.3 (lightweight)

- **Worked**: The lens-per-method discipline earned its keep in BOTH directions — the route-walk caught what two clean builder reviews missed (F1: the ratified N-01/N-07 fixes landed on the inner README while the cited surface, the root GitHub landing page, stayed stale), and the independent census DISSOLVED a would-be finding (the "27 vs 28 subtopics" flag was a file-count artifact; the narrated 27 is semantically right). The notes-vs-diff reconciliation is what scoped F1 precisely. The amendment loop honored the guardrail exactly: found → routed through M6.1's curation table as recorded amendment rows → clone re-edited → patch regenerated → all checks re-run green.
- **Didn't**: The first FULL-history gitleaks run (563 commits — prior gates ran pre-push increments) surfaced 9 findings that cost a triage loop; all 9 collapsed to xterm.js key-map tables in one vendored plugin bundle at one commit. Not a defect in the RC, but the scan noise is now a standing cost until the allowlist lands (G6 flag).
- **Finding**: Builder fold-execution has a **surface-selection failure mode**: when a fix names a file that exists at two levels (root vs inner README), the builder picked the wrong one and self-reported success — and the orchestrator's file-level review verified the EDIT was good without re-checking WHICH file the ratified finding had cited. The adversarial re-walk from the FINDING side (not the diff side) is what catches this class.
- **Change**: For fold rows sourced from findings, the verify step must re-open the original finding and check its CITED surface, not just the builder's changed files (add to the Mode-B review checklist at the M7.x retro). Full-history gitleaks graduates to the standing M6.3-class security check.
- **Follow-up**: G6 carries: the amendment-visibility note · the `.gitleaks.toml` vendored-bundle allowlist proposal · the `aDNA_overview.md` re-stamp decision (v8.5-class). The M7.x retro bundle gains the surface-selection failure mode + the aggregate-halt-line accounting question from M6.1.
