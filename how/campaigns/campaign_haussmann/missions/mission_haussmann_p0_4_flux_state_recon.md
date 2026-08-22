---
plan_id: mission_haussmann_p0_4_flux_state_recon
type: plan
title: "P0.4 — Fluxer reconciliation: the community property gets a true record and named prerequisites"
campaign: campaign_haussmann
phase: P0
decade: 1
owner: stanley
status: completed   # ✅ CLOSED 2026-08-21 with AAR (SO#5) in session …_200408_haussmann_p3_3_o3_reduced. Aspasia's ack (authored 08-20, delivered 08-21, found untracked) answered all ten §6 questions: PR-3 aliveness CLEARED WITH EVIDENCE (4 guilds / 23 users / 49 channels / 264 messages), PR-1 owned+sequenced by Aspasia (rung ②), PR-2 unblocked by the ⛩ venue-name ruling "aDNA Community" (rung ③), D-1 RULED, D-2 escalated to Venus, D-3 harvest interim OFF. Register 0/3 → 1/3 green. ⇒ P3.4's depends_on is DISCHARGED; ⛔ DP7 is NOT fired — P3.4 still owes a live re-probe at its own O0, and the honest no-link fallback remains correct per Aspasia's own reading. Trigger model POLL → PUSH. 2026-08-16 P0-wave: O0 delivery VERIFIED (17:11 in Fluxer inbox) + O1 prerequisite register built (PR-1/2/3 × owners; ADR-054 sufficient as-is) + O3 escalation posted in the wave wrap-up.
mission_class: reconnaissance
executor_tier: opus
token_budget_estimated: "~80–140 kT in 1 session: memo delivery + answer intake + prerequisite register + ADR-054 skeleton (ADR-016)"
token_budget_actual: "Not separately metered — the mission never had a session of its own (ADR-016 / SO#11, stated rather than fabricated). O0–O3 rode the 2026-08-16 P0 wave; the ack intake rode the 2026-08-21 P3.2 session; this close rode the P3.3-O3 session at ~25 kT `[D]`. Against a ~80–140 kT single-session estimate the true figure is almost certainly well UNDER, because the expensive half — waiting five days for a peer lane — costs wall-clock, not tokens. ⚠ The instructive part is that ADR-016 assumes a mission maps to sessions, and a blocked-on-a-peer reconnaissance mission does not; its budget model has no way to express \"cheap but slow\"."
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

- **2026-08-21 (close session, `…_200408_haussmann_p3_3_o3_reduced`).** O4: ack processed into a
  close. `artifacts/p0_4/prerequisite_register.md` updated **0/3 → 1/3 green** (PR-3 MET with
  evidence; PR-1 owned+sequenced; PR-2 unblocked by the venue-name ruling), its stale
  "Related record state" rows corrected, the O3 escalation marked resolved, and the **POLL → PUSH**
  trigger change recorded. AAR below. Mission → `completed`.

## AAR (SO#5)

**Worked.** Delivering a *questions* memo rather than an *asks* memo. The ten §6 questions came back
answered one-for-one, and four of them (host identity, harvest, registration posture, captcha)
surfaced rulings that were never ours to make and that nobody had noticed were missing —
**D-1 got ruled because we asked, and D-2 got escalated to Venus because we asked.** A prerequisite
register with *named owners* did the rest: every answer had somewhere to land.

**Didn't.** The mission sat `active` for **five days** against a ~1-session budget, entirely on
delivery latency — and then the ack, when it came, sat **unread and untracked for a day** and was
found only incidentally by an unrelated mission's opening sweep. The mission's own definition of done
("a true record exists somewhere authoritative") had in fact been satisfied on 08-20; we did not know
it until 08-21. **We were not blocked on the work. We were blocked on noticing.**

**Finding.** ⭐ **A push trigger whose transport is a directory nobody watches is a poll with extra
steps.** Aspasia closed with *"we will signal when the three prerequisites are green rather than ask
you to poll"* — a real improvement, delivered over a channel that has now carried **7 memos in 4 days,
every one arriving untracked**, invisible to `git status` and lost to a context clear. The upgrade
from poll to push is worth nothing until the receiver is watched. *(Second-order: this mission's
`status: active` was itself a stale claim for a full day — the same defect class the campaign's
convention 15 names for site copy, occurring in our own mission metadata.)*

**Change.** The untracked sweep (`git ls-files --others --exclude-standard who/coordination/`) runs at
every session **open and close**, not open only — adopted after this ack was nearly carried past a
context clear. P3.4's O0 re-probes this register live **regardless** of whether a signal was noticed,
so the push model can fail safe. Register carries `prerequisites_green:` as a derived field, so the
count cannot be typed from memory (convention 1).

**Follow-up.** ~~**P3.4 is unblocked but its answer is probably NO-GO, and that is fine.** 1 of 3
prerequisites is green and the two outstanding are exactly the two that gate a link; Aspasia's own
position is that *"HAUSSMANN's honest no-link state remains correct until the ladder completes."*~~

⛔ **STRUCK THE SAME SESSION, HOURS AFTER IT WAS WRITTEN — and the way it was caught is the finding.**
While this AAR was being written, a **second** Aspasia memo
(`coord_2026_08_21_aspasia_to_rosetta_adr054_prerequisites_green.md`) was already sitting **untracked**
in `who/coordination/`: **the promised PUSH signal, declaring all three prerequisites green.** It was
found by the close sweep adopted in the **Change** paragraph directly above — *the discipline this AAR
introduced caught, within the hour, the very memo that proved why it was needed.* Had the sweep stayed
open-only, this mission would have closed on a follow-up that was already false.

**Corrected position, re-probed `[D]` rather than taken from the memo:** PR-1 **MET** (`legal.terms_url`
+ `privacy_url` non-null → `aDNA-Network/community-policies`, 200) · PR-3 **MET** · PR-2 **owner-green,
method-red** — config carries `product_name: "aDNA Community"` and `theme_color: #9d7cd8`, while the
served HTML `<title>` is **still `Fluxer`** (upstream's app-proxy binary; a fork is ruled out by their
ADR-000). ⇒ **2 of 3 by this register's own stated methods, 3 of 3 by the owner's attestation.**

**P3.4's answer is therefore no longer "probably NO-GO" — it is a genuine ⛩ DP7 question**: does
"minimal aDNA branding" mean what a client renders, or what an unauthenticated fetch sees? Recorded in
the register; **adjudicated at P3.4's O0, not here.**
⛔ **This close does NOT fire DP7** — P3.4 still owes a live re-probe of the policy floor and branding
at its own O0, and the honest no-link fallback remains an acceptable indefinite end-state, not a
failure. Also carried: [[idea_upstream_coordination_dropbox_doctrine]]'s discovery clause has its
concrete instance; D-2 sits with Venus; D-3 harvest stays **OFF** until the `#needs-human` legal
ruling, with real data persisting ahead of it.

## ⚠ Inbound ack — intaken 2026-08-21, processed into this close 2026-08-21

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

~~**Next**: this mission closes in its own session with an AAR (SO#5), which also updates P3.4's
prerequisite register from 0/3 to 1/3 green.~~

✅ **DONE 2026-08-21** — closed in session `…_200408_haussmann_p3_3_o3_reduced` with the AAR above;
register now reads **1/3 green** (`prerequisites_green: 1`, a derived frontmatter field). P3.4's
`depends_on: [mission_haussmann_p0_4_flux_state_recon]` is **discharged**; its DP7 is **not** —
that gate still needs a live re-probe at P3.4's own O0.
