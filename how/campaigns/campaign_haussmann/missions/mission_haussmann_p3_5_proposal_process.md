---
plan_id: mission_haussmann_p3_5_proposal_process
type: plan
title: "P3.5 — The numbered proposal process: states, archive, machine index — and proposal #1 filed"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: completed   # ✅ 2026-08-20 — 4/4 acceptance criteria; AAR below (SO#5). ADR-055 ⛩ ratified; AEP-1 final + AEP-2 in review; R-122/R-123/R-127 closed by two GO'd outward pushes, verified live; deployed tree=16e2c34, probe 3/26 red → 29/0 green; suite 495→521 zero xfail; axe 0. ⛩ DP6 RATIFIED 2026-08-19 — provisionality discharged. RESCOPED UP: absorbed the D9 funnel repair (R-122 CTA target + R-123 licence, ruled MIT at ⊳ D-D). Ran SECOND in Decade 2, behind P4.5a — D9 was the only dimension nine missions never moved.
mission_class: build
executor_tier: fable   # governance design; the surface build is mechanical
token_budget_estimated: "~230–330 kT across 1–2 sessions: ADR-055 process design + site surface + machine index + first proposal authored + filed, PLUS the D9 funnel repair — R-122 (point the 'Contribute on GitHub' CTA at a repo that has CONTRIBUTING/CoC, or put them in the repo it points at) + R-123 (LICENSE the docs repo; MIT ruled at ⊳ D-D, and the push is an outward operator-gated act). Raised from ~200–300 kT at ⛩ DP6 2026-08-19 (ADR-016/SO#11)"
token_budget_actual: "≈245 kT by content load, in 1 session — inside the ratified ~230–330 kT and near its low end; no in-field revision was needed, because DP6's rescope had already priced the funnel repair (ADR-016/SO#11)"
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["H15 confirmed", "MCP D8=5 evidence (8-state SEP + conformance gates)", "dossier proposal-anatomy (PEPs immutable numbering + JSON index; TC39 stage tables + champions; EIPs status machine + per-category counts)", "existing vault machinery (ADR corpus + upstream-contribution skill as the internal analogue)"]
vitruvius_dimensions: [D8, D10]
decade_theme: agentic
webforge_patterns: []
patterns_to_author: ["A4: proposal-process surface pattern (owed to WebForge)"]
depends_on: [mission_haussmann_p2_6_midscore]
blocks: []
acceptance_criteria:
  - "ADR-055 at proposed: the process (name, numbering law [immutable], states incl. terminal ones, venues, who can file, how agents participate [disclosed], conformance/acceptance criteria, relationship to the internal ADR system)"
  - "The site surface: process constitution page + numbered archive (tables-first, status machine visible, author/champion credit) + machine-readable index (JSON)"
  - "Proposal #1 authored and filed through the process itself (a real one — candidates: the URL-casing law, the registry admission standard, or the agentic-surface contract — eating the dogfood)"
  - "The contribution funnel routes to it (how a stranger files; template; where discussion happens)"
verification_method: "process self-test (proposal #1 traverses draft→review states) + editorial gate + machine index validates"
human_gate: true
tags: [plan, haussmann, p3, proposals, governance]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The largest governance gap vs the reference model — closed by shipping the smallest real version.

## Why this mission exists

No numbered proposal process exists (H15); MCP's SEP process is why it scored D8=5 `[D cohort]`; the dossier extracted the proven anatomy (PEPs/TC39/EIPs). The vault already runs a rigorous *internal* decision system (ADRs + ratification) — the process is its public, community-facing sibling, not a new invention. A young standard's process can be honest about its youth (states exist; most numbers unassigned; that's fine — 7.2's correction).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | ADR-055 design (with the honest-youth posture: real states, real numbering, no fabricated activity) | ADR-055 proposed | ⛩ operator |
| O1 | Build: constitution page + archive surface + JSON index + filing template/route | surface | — |
| O2 | Author + file proposal #1 through the process (operator co-signs as ratifier where the process requires) | proposal #1 live | ⛩ operator |
| O3 | Funnel wiring + editorial gate + captures; AAR; stage A4 upstream | evidence + AAR | — |

## Constraints

Numbers are immutable once assigned; agent participation disclosed per the vault's own doctrine; no "community" implied where there isn't one (the process page states current occupancy honestly).

## Definition of done

A stranger can read the constitution, see proposal #1 with a real state history, and file #2.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/dossier/haussmann_reference_dossier_draft.md` (proposal anatomy) + the cohort MCP scoresheets. Execute O0 (halt for ratification), then O1–O3.

## Progress

| # | Objective | Outcome |
|---|---|---|
| O0 | ADR-055 design | ✅ **⛩ ratified 2026-08-20** — §§1–8 authored; three operator questions (ratify · placement · first substantive proposal), all taken as recommended; ⊳ **D-J** ruled in the same signature |
| O1 | Build the surface | ✅ collection + archive + per-proposal route + `/community/proposals.json` + filing route; `utils/proposals.ts` is the single source all three read through |
| O2 | Proposal #1 filed through the process | ✅ **AEP-1** `draft→review→accepted→final`, **AEP-2** `draft→review` — the second transition **⛩ sponsored by the operator in-session**, since a sponsor is a person and an agent cannot volunteer one |
| O3 | Funnel repair, evidence, AAR | ✅ R-122 · R-123 · R-127 closed by two GO'd pushes, verified live; gate-37 (20 assertions) red-proven; suite 495→521 zero xfail; axe 0; deployed `tree=16e2c34`; probe 3/26 red → **29/0 green** |

**Deploy record (campaign law).** `deploy_record: 2026-08-20T22:48:11Z mode=prod
url=https://adna-docs-sw820g8xo-science-stanleys-projects.vercel.app token=SS_VERCEL_TOKEN tree=16e2c34`.
Outward pushes: image repo `b64b81e..8354bce`; origin `2f3bf5d..16e2c34`.

**Acceptance criteria: 4 of 4 met.** ADR-055 at `accepted` (exceeds "at `proposed`") · the surface with
its status machine visible and machine index · proposal #1 filed through the process itself · the
funnel routes to it.

## AAR (SO#5)

**Worked.** Re-probing R-122 before designing its repair, which is now **two for two**: the same
discipline shrank R-111 at P4.5a. R-122 turned out half wrong — the image repo's `CONTRIBUTING.md`
was not missing, it was at `.adna/CONTRIBUTING.md`, below the three paths GitHub reads. Same reader
experience, **different fix**: promote a file, don't write one. Had the row been trusted, the mission
would have written a second contribution guide and left two to drift apart.

**Didn't.** The a11y catch was luck, not process. The T0 sweep found an empty table header on AEP-1
**while the 512-assertion suite was green**, and adding the routes to gate-4 does *not* close it —
gate-4 filters to `wcag2a/wcag2aa` and `empty-table-header` is a best-practice rule, so gate-4 passed
on the unfixed page and would pass again. The instrument, not the page, is the gap. I nearly recorded
this as "caught a regression, gated it" and had to correct myself after the red run passed.

**Finding.** *A red run is the only moment an assertion's vacuous branch is exercised.* The pre-deploy
probe passed two checks against a production site that did not have the feature at all:
`json?.count === json?.proposals?.length` is `undefined === undefined` when there is no index, and
"publishes no median" is trivially true of a 404. Green runs can never reveal this — the objects
exist, so the guards are never reached. Red-proving is usually justified as *proof the fix was
needed*; its sharper use is **proof the assertion has teeth**.

**Change.** Two, both landed. Both vacuous branches were guarded before deploy (the probe carries the
reason in-file). And `gate-37` was written so that **AEP-1 names it as its own conformance check** —
deleting the gate fails AEP-1's `final` claim, so the process's central rule (§4: *final means
enforced*) is self-enforcing rather than aspirational. A third is filed rather than fixed: the gate
suite is blind to everything axe classes best-practice → **P4.4**.

**Also worth carrying.** `gate-14`'s C-1 rule **failed this mission's first build** and was right —
if the site may not route contributors to the dev vault, the contributor docs must live in the image
repo. It answered R-122 before the register did. This is P4.5a's finding running the other way: there,
a gate was coupled to a *defect* and had to be inverted; here, a gate was coupled to a *rule the
register had not yet applied*, and the correct response was to obey it. **Read a failing gate for what
it knows before deciding it is in the way.**

**Budget.** Estimated ~230–330 kT (ratified ⛩ DP6). Actual **≈245 kT** by content load — inside the
ratified range, near its low end, and no in-field revision was needed: the mission's rescope at DP6
had already priced the funnel repair. Two items the estimate did not anticipate (the state-history
schema addition at O2, and the a11y detour) were absorbed by ADR-055 already existing as a stub with
its anatomy fixed at genesis.

**Follow-up.** (1) **R-128** `#needs-human` — the image `LICENSE` names *"Lat Labs"*, a holder on no
other surface; operator elected to leave both and decide deliberately. (2) The gate suite's
best-practice blindness → P4.4. (3) `webforge_pattern_register.md:23` trips gitleaks' `generic-api-key`
on the phrase *"DTCG token pipeline"* — a false positive, public since 2026-08-16, worth allowlisting
at P4.4 so a real leak is not lost in noise. (4) `derive_register_counts.py` pins the register parse
but still has to be **run and pasted**; wiring it into the suite is the remaining half of the P4.4
item §9.5 opened.
