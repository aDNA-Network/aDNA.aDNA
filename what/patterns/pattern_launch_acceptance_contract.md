---
type: pattern
created: 2026-07-22
updated: 2026-07-22
status: draft
pattern_category: operational
applies_to: [campaigns, missions, decisions, coordination]
campaign_id: campaign_refit
instances:
  - "aDNALabs.aDNA (HQ, canonical) — Operation Slipway/Corps M-S9 launch_acceptance_contract_v1: 26 A# rows · 5 operator gates (⛩ C1→C5) each ruled off the one file · ↻-law caught a 13-day staleness · 8-grant waiver set · v1.2 SIGNED; house template how/templates/template_launch_acceptance_contract.md — the requested instance seed (read-only, cross-vault)"
  - "aDNA.aDNA (this vault) — nearest in-vault kin: Operation Refit's G1 ratification record + per-mission Exit Gates already exhibit the A#-shape (named checks · evidence pointers · honest state · waiver-by-§7.7-ruling)"
graduation: "n=1 strong (aDNALabs' Corps instance) + this vault's nascent gate-discipline kin. Adopted from the HQ house template with provenance kept; a full A#-row instance authored in this vault is the maturation step. Stays draft; template fold deferred to a successor release campaign (skill_template_release)."
last_edited_by: agent_rosetta
tags: [pattern, launch_acceptance_contract, gate, a_row, go_no_go, freshness_law, waiver, operator_gate, corps, refit]
---

# pattern_launch_acceptance_contract

> **Plain-language version first**: when you're deciding whether something is ready to ship — a site, a release, a launch — the temptation is to eyeball a pile of evidence and make a gut call. A launch-acceptance contract replaces the gut call with a single document: a numbered checklist where **every** readiness criterion is its own row (A1, A2, A3…), each with a named check, a pointer to the proof, and an honest one-word status — green, or split, or "on paper only," or "waiting on evidence," or "waived, and here's the ruling that waived it." The go/no-go decision then reads **that one file and nothing else**. Three things make it more than a checklist: you may never dress a status up to look better than it is; if the gate sits open for days, you re-check that the *words describing the world* are still true, not just that the boxes are still ticked; and any box you *waive* must name the condition under which it comes back. It's the difference between "looks ready to me" and "here are the 26 things that had to be true, here's the proof of each, and here's exactly what we knowingly deferred and why."

## 1. Problem

Launch-class gates — a public launch, a release cut, a standard version bump — fail in characteristic ways when the acceptance criteria live in the reviewer's head or scattered across artifacts:

- **Diffuse evidence, gut ruling.** Readiness gets argued from a pile of memos, test runs, and screenshots with no single authoritative surface; two reviewers reach *different* go/no-go from the *same* evidence.
- **Optimistic state.** "Done" quietly hides "done on paper" or "done except the one thing." A gate that cannot distinguish *verified* from *claimed* ships the claim.
- **Stale-while-held.** A gate held open for days silently rots: the checks passed *then*, but the surfaces they described drifted — a dependency bumped, a census grew — and nobody re-verified the *prose*, only re-glanced the ticks.
- **Silent waivers.** Something gets waived to make the gate, and the waiver leaves no trace and no resume condition — so the deferred work is *lost*, not deferred.

## 2. The mechanism

The **launch-acceptance contract** is one file the go/no-go gate reads *and nothing else*. Seven laws:

1. **A#-row binding.** Every acceptance criterion is its own numbered row (A1, A2, …): a **named check** + an **evidence pointer** (commit / artifact / run) + an **honest state**. The gate's decision is a function of the rows, not of ambient reviewer knowledge.
2. **Never-oversell state vocabulary.** A fixed, honest state set — `GREEN` (verified true) · `SPLIT` (partially true, the delta named) · `PAPER` (specified/claimed, not evidenced) · `PENDING-EVIDENCE` (check defined, proof not yet in) · `WAIVED-only-by-ruling` (deferred by operator ruling, never by the author). **No row may claim a state better than its evidence.**
3. **↻ freshness law.** A held gate re-verifies its **edge prose**, not just its checks — the words describing the world must still be true on the day the gate *fires*, not merely the day it was *armed*. (Slipway's held gate caught exactly this: a dependency drift `0.0.5→0.0.14`, a surface census grown `3→9`, two stale coordination notes — all invisible to a box re-glance, all caught by re-reading the prose.)
4. **Waiver-only-by-ruling, with named resume triggers.** A row moves to `WAIVED` **only by an operator ruling**, and every waiver carries the **named condition** under which the deferred work resumes. A waiver without a resume trigger is a silent drop wearing a deferral's clothes.
5. **§-trail appendices (the audit spine, SO-7).** The durable analysis behind each row lives in a §-referenced appendix / artifact the row *points at* — the contract stays a scannable gate surface; the depth stays traceable.
6. **Arm-early / fire-late.** The contract is *armed* (rows drafted, evidence gathered) well before the gate *fires* (the operator rules) — a mission split that lets evidence accrue against a **stable rowset** instead of being assembled in the gate sitting.
7. **Ruling-surface-fits-the-moment.** *How* the operator rules fits the moment: in-chat recommendations + `AskUserQuestion` when the operator is in-session; a rendered [[pattern_iss_operator_gate|ISS]] when they are away. The contract is the **substance**; the ISS (or the in-chat gate) is the **surface** — this is the explicit sibling seam.

The one-sentence version: **the gate reads the contract and nothing else, and the contract is never allowed to look readier than the world is.**

## 3. Live instances (the structure IS the lesson)

**Canonical instance (n=1, but a strong 1) — aDNALabs.aDNA (read-only, cross-vault):**
- Operation Slipway/Corps **M-S9** `launch_acceptance_contract_v1`: **26 A# rows**, **5 operator gates** (⛩ C1→C5) each ruled off *the one file*, the **↻ law** catching a **13-day staleness** window (Exchange `0.0.5→0.0.14` drift · a 9-not-3 surface census · 2 stale coordination notes), an **8-grant waiver set that survived adversarial reading *because* every grant named a resume trigger**, and **v1.2 SIGNED with zero outward strokes**. The HQ house template `aDNALabs.aDNA/how/templates/template_launch_acceptance_contract.md` is the requested seed (provenance kept).

**Nearest in-vault kin (self-reference — this vault runs the *shape* without having named it):**
- Operation Refit's [[../../how/campaigns/campaign_refit/artifacts/ratification_record_refit_g1|G1 ratification record]] rules eight decision-points off one file, each with its own evidence and an honest `accepted`/`proposed` state — laws 1, 2, and 5 already in practice.
- The [[../../how/campaigns/campaign_refit/missions/mission_refit_1_disposition_sweep|M1 Exit Gate]] *is* an acceptance-criteria list a gate reads (law 1); the charter's "stage-don't-edit / commit-no-push" discipline is arm-early/fire-late (law 6); and §7.7 ratification *is* waiver-by-ruling (law 4).
- **The honest gap:** what this vault lacks is a *full A#-row launch-class instance* of its own. Adopting the pattern here names the shape it was already half-running; authoring that first full instance (seeded from Corps) is the maturation step, which is why this file is `status: draft`.

## 4. Adoption (copy, don't re-derive)

1. **For any launch-class gate** (public launch, release cut, standard version), author **one contract file the gate reads *and nothing else*.**
2. **One A# row per criterion**: named check + evidence pointer + honest state — using law 2's vocabulary, and never overselling.
3. **If the gate is held, run the ↻ freshness pass on the *prose*** (not just the ticks) before it fires.
4. **Waive only by operator ruling**; every waiver names its resume trigger.
5. **Keep depth in §-referenced appendices** the rows point at; **arm the rowset early, fire late.**
6. **Pick the ruling surface for the moment** — in-chat + `AskUserQuestion` in-session, [[pattern_iss_operator_gate|ISS]] away — pairing this contract (substance) with the ISS gate (surface).
7. **Seed from aDNALabs' house template** (keep provenance); request the A#-row instance seed rather than re-deriving the rowset.

## 5. When NOT to use / anti-pattern

- **Low-stakes / reversible gates** don't need the full contract — a plain checklist or an inline `AskUserQuestion` suffices. Reserve the A#-row contract for **launch-class, hard-to-reverse, outward-facing** gates.
- **Anti-pattern — the optimistic tick.** A `GREEN` that is really `PAPER`. The honest-vocabulary law exists precisely to forbid this; a gate that can't say `PAPER` ships the paper.
- **Anti-pattern — box re-glance on a held gate.** Re-confirming ticks without re-reading the edge prose — the 13-day Slipway drift is the standing proof this fails.
- **Anti-pattern — the silent waiver.** Deferring a row with no operator ruling or no named resume trigger: a dropped requirement, not a deferral.
- **Anti-pattern — the analysis stuffed into the gate.** The contract is a *scannable decision surface*; durable analysis belongs in the §-trail appendix it points at — the same discipline [[pattern_iss_operator_gate]] names for its own gates.

## Forward integration (fold stub)

**`fold_batch: refit_successor_rc`** — WHO: Rosetta (aDNA.aDNA), for ratification at a future release gate, shipped via `skill_template_release`; WHAT: fold the launch-acceptance-contract instrument (A#-row schema + the seven laws + the honest-state vocabulary) into the `.adna/` fork-base as a `how/templates/template_launch_acceptance_contract.md`, adopting aDNALabs' house form with provenance kept, so a fresh vault inherits a launch-class gate instrument. WHEN/HOW defer to that release candidate. Do NOT touch any template file or `.adna/` here (Refit ships no normative surface — standard v2.5 / governance 8.8 hold).

## Provenance & graduation

Adopted at **Operation Refit M1** (2026-07-22, Rosetta / this vault) per the ratified **DP7** ruling, from Berthier's aDNALabs.aDNA graduation proposal ([[../../who/coordination/coord_2026_07_17_berthier_to_rosetta_launch_acceptance_contract_graduation|coord 2026-07-17]], Operation Corps P5/M-E1). Sourced from the HQ house template with provenance kept. **Instances: 1 strong** (aDNALabs' Corps `launch_acceptance_contract_v1`, 26 A# rows) **+ this vault's nascent gate-discipline kin**; a full A#-row instance authored in-vault is the maturation step. Stays `status: draft` until then (graduation ratifies at a future operator gate per the [[pattern_iss_operator_gate|instance-counting rule]]). Related: [[pattern_iss_operator_gate]] (the **surface** seam — the ISS renders the gate, this contract is the substance it reads; explicit sibling — "the ISS is the surface, this contract is the substance a launch-class gate reads"), [[pattern_decision_queue]] (a band-A decision may *be* a launch gate — the queue decides *when to gate*, the contract is *what the gate reads*), [[pattern_order_of_battle]] (a campaign's obligation surface; the launch contract is the obligation surface of its *terminal* gate).
