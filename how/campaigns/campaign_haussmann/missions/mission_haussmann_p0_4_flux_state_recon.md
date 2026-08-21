---
plan_id: mission_haussmann_p0_4_flux_state_recon
type: plan
title: "P0.4 — Fluxer reconciliation: the community property gets a true record and named prerequisites"
campaign: campaign_haussmann
phase: P0
decade: 1
owner: stanley
status: active      # ⚠ THE ACK HAS ARRIVED — 2026-08-21, found untracked mid-session by the P3.2 sweep (`coord_2026_08_20_aspasia_to_rosetta_reconciliation_truth_note.md`, dated 08-20). All ten §6 questions answered; Ask 1 done (Fluxer STATE reconciled, "Nothing is deployed" gone); PR-3 aliveness CLEARED WITH EVIDENCE (4 guilds / 23 users / 49 channels / 264 messages, inside recon 08-20); D-1 RULED; D-3 interim = harvest OFF; venue ⛩ ruled "aDNA Community". RECORDED, NOT CLOSED — closing needs its own session + AAR (SO#5), and P3.2 was not that session. 2026-08-16 P0-wave: O0 delivery VERIFIED (17:11 in Fluxer inbox) + O1 prerequisite register built (PR-1/2/3 × owners; ADR-054 sufficient as-is) + O3 escalation posted in the wave wrap-up.
mission_class: reconnaissance
executor_tier: opus
token_budget_estimated: "~80–140 kT in 1 session: memo delivery + answer intake + prerequisite register + ADR-054 skeleton (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["flux/flux_assessment_draft.md (verdict + 10 questions)", "H14 reframed", "aDNALabs ADR-025 (human-only)", "Fluxer SO#8", "dependency_map (STATE stale-wrong)"]
vitruvius_dimensions: [D8]
decade_theme: agentic
webforge_patterns: []
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p3_4_flux_integration]
acceptance_criteria:
  - "The Aspasia memo is delivered (not just staged) and acknowledged, or the delivery gap is escalated to the operator (the 'dispatched ≠ delivered' class)"
  - "Fluxer.aDNA STATE reconciled by its owner (or an operator-confirmed interim truth note exists)"
  - "The 10 outside-only questions have answers or owners (aliveness, host identity, registration/captcha intent, policy-floor ownership, D-1/D-2/D-3 deltas)"
  - "ADR-054 skeleton records the integration prerequisites: policy floor (ToS/privacy/CoC) + minimal aDNA branding + inside aliveness confirmation + ADR-025 compliance framing"
verification_method: "answered-question register + Aspasia ack (or operator interim ruling)"
human_gate: true
tags: [plan, haussmann, p0, flux, community]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> No public community copy is written anywhere until this record is true.

## Why this mission exists

community.adna.network is live on a third party's metal, but Fluxer.aDNA's own STATE says "nothing is deployed" (5+ weeks stale) `[D/R]`; the instance is policy-naked, un-branded, approval-gated with captcha OFF (deploy-config drift vs the vault's own plan) `[D flux draft]`; and linking today would be net-negative. The site meanwhile advertises channels that 404 (P1.1's lane). Integration (P3.4) is contingent on prerequisites only Aspasia/the operator can land — this mission names them, delivers the ask, and closes the record gap.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Finalize + **deliver** the Aspasia memo (the staged `coord_2026_08_16_rosetta_to_aspasia_*` file): STATE contradiction, the 10 questions, the prerequisite ask, ADR-025/SO#8 framing | delivered memo | ⛩ operator (delivery = outward act) |
| O1 | Intake answers; build the prerequisite register with owners + status | register | — |
| O2 | ADR-054 skeleton (integration model + prerequisites + honest-state link pattern + GO/NO-GO criteria for DP7) | ADR-054 proposed | — |
| O3 | If delivery stalls (the inbox-delivery ambiguity class), escalate to operator with options | escalation note | ⛩ operator |
| O4 | AAR | AAR | — |

## Constraints

Never operate or configure the Fluxer instance (Aspasia's lane; SO#7 propose-only); no account creation; ADR-025 human-only framing is non-negotiable in every draft; the campaign's fallback (no link + honest state) is already acceptable — do not pressure prerequisites into existence.

## Definition of done

A true record exists somewhere authoritative; the prerequisites are named with owners; P3.4 can open with a checklist instead of a mystery.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/flux/flux_assessment_draft.md`. Execute O0 (operator confirms delivery), then O1–O2. Halt condition: any answer implies the instance hosts data whose governance is unresolved — surface to operator immediately.

## Progress

- **2026-08-16 (P0 wave).** O0: memo delivery re-verified `[D]` (python mtime listing — the `ls` flake dodged); no reply yet (~hours old). O1–O2: `artifacts/p0_4/prerequisite_register.md` (PR-1 policy floor · PR-2 branding · PR-3 inside-aliveness, owners + DP7 verification methods); ADR-054 stub confirmed sufficient unmodified. O3: escalation posted in the wave wrap-up with the recommendation (no urgency — the honest no-link fallback is acceptable indefinitely).

## AAR (SO#5)

*(before completed)*


## ⚠ Inbound ack — intaken 2026-08-21, NOT yet processed into a close

Aspasia's reply (`who/coordination/coord_2026_08_20_aspasia_to_rosetta_reconciliation_truth_note.md`,
authored 2026-08-20, delivered 2026-08-21, `ack_required: false`) arrived **untracked and
mid-session** during P3.2 — it was **not present** at that session's opening sweep. Recorded here
immediately rather than carried in a session log, because this mission has been `active` for five
days waiting on exactly this file.

**What it discharges** `[R]`:

| Item | Before | After Aspasia's reply |
|---|---|---|
| Ask 1 — STATE reconciliation | *"Nothing is deployed"* published while an instance ran | **Done** — STATE records the live instance, campaign amended v1.3, commit `88bbca2`+ |
| **PR-3** aliveness | unknown from outside | **CLEARED WITH EVIDENCE** — inside recon 2026-08-20: 4 guilds · 23 users · 49 channels (+51 private) · 264 messages · same-day activity |
| PR-1 policy floor | unowned | **Owned by Aspasia**; interim floor first, `#needs-human` legal, then the `legal.*` config act (rung ②) |
| PR-2 branding | open | Dry-run-proven rebrand = rung ③; **venue name ⛩ ruled "aDNA Community"** (operator, 2026-08-20) |
| D-1 host identity | unruled | **RULED** — ADR-002 Amendment 1 (live topology accepted; CAX21 → fallback) |
| D-3 harvest | unruled | **Interim: harvest OFF** until `#needs-human` legal rules |
| Ask 3 (ADR-054 prerequisites as their gate line) | proposed | **Accepted as their own gate line** |

**What it does NOT discharge — and this is the part that matters for P3.4.** One of three
prerequisites is green. Aspasia's own words: *"HAUSSMANN's honest no-link state remains correct
until the ladder completes — we will signal when the three prerequisites are green rather than ask
you to poll."*

**The trigger model has therefore changed from POLL to PUSH**, and that is worth writing down: P3.4
re-probes the register at execution (its charter says so), but the *signal* that the register is
worth re-probing now arrives as a memo — through the same untracked drop-box that has delivered
**six memos in three days, every one found only by `git ls-files --others --exclude-standard
who/coordination/`**. A push trigger whose transport is a directory nobody is watching is a poll
with extra steps. Named here, and it is the concrete instance behind
[[idea_upstream_coordination_dropbox_doctrine]]'s discovery clause.

**Next**: this mission closes in its own session with an AAR (SO#5), which also updates P3.4's
prerequisite register from 0/3 to 1/3 green.
