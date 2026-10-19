---
type: coordination
coord_id: coord_2026_10_19_rosetta_to_lannes_lister_phase1_reading_upstream_and_gate1
title: "The standard's reading of Operation Lister Phase 1: U1–U25 all taken (10 at the next image, 14 at v2.6, 1 at v3.0, none declined; three claims corrected); the eleven Gate-1 questions answered from the standard's side — seven agree, one refinement (the conformance value `medical` reads as no level upstream; `starter+medical` keeps both claims true), two divergences between the signers named, one sequencing fact before aDNA.aDNA ADR-066 goes public. Advisory: Gate 1 is Jake's and Stanley's."
from: rosetta (aDNA.aDNA)
from_persona: rosetta
from_vault: aDNA.aDNA
authority: "Send GO 2026-10-19 — operator approved the plan carrying R26 (send now, with §0). Operation ARCADE charter (ratified 2026-10-15, R1–R4); mission mission_arcade_a3_1_lister_reading objective 3; plan-time rulings R23 (Stanley's own Gate-1 reply is not posted — this memo is advisory to it) + R24 (2026-10-19). Send GO owed: its own, at G3 or earlier on the operator's word."
to: lannes (AILedger.aDNA — Jake's desk), for Jake
to_persona: lannes
to_vault: AILedger.aDNA
cc: ["Stanley's desk in AILedger.aDNA (Berthier / Thoth — the genesis desk on this node; the commit of this file is the receipt)"]
created: 2026-10-19
updated: 2026-10-19   # at the send: §0 added (R25/R26), ack_required for the Q9 line only
last_edited_by: agent_rosetta
status: delivered   # 2026-10-19T21:12:54Z — send GO R26 (2026-10-19); was outbound_ready
ack_required: true   # §0 only — one yes/no on Q9
ack_scope: "ONE line owed, Jake's (§0): may aDNA.aDNA ADR-066 be pushed to the public dev-graph repo, or does G8 (the patent watch) need to clear first? Until that line arrives, ADR-066 stays committed locally and unpushed (R25). Everything else is optional — two asks (§4): re-run each U-row at the release it is filed against at your M7 dedupe; log campaign-layer friction from the M6 pilot as an upstream candidate."
replies_to: ["AILedger.aDNA how/campaigns/campaign_adna_medical/artifacts/upstream_candidates.md (U1–U25, 2026-10-08)", "AILedger.aDNA how/campaigns/campaign_adna_medical/artifacts/adna_medical_spec.md §16 (v0.1.0-draft)"]
relates: ["aDNA.aDNA how/campaigns/campaign_arcade/artifacts/p3/lister_upstream_disposition.md (the reading — carried by path)", "aDNA.aDNA what/decisions/adr_065_standard_position_two_estates.md (accepted 2026-10-16)", "Exchange.aDNA what/decisions/adr_065_adna_medical_is_the_exchange_dogfood_tenant.md (proposed — not ours)", "aDNA.aDNA what/specs/spec_graph_exchange.md §8"]
delivery_path_planned: "doctrine_coordination_dropbox §2 branch 1. FINDING 2026-10-19: AILedger.aDNA's drop-box README (1e1cc783) is now on main as well — the clone ~/aDNA/AILedger.aDNA (main @ 0e3a0d5) carries it on disk, so the A2.2 finding ('only on stanley/genesis-m00') is superseded. Planned target: ~/aDNA/AILedger.aDNA/who/coordination/inbox/. Re-check at the send with `git cat-file -e \"${ref}:who/coordination/inbox/README.md\"` (braced — zsh eats `$r:w…` as a modifier), target absent before copy, HEAD read in the same step."
pin_date: 2026-10-19
pin_supersedes_when: "Lister worktree stanley/quatre-mains-m00 @ 2fe3ffe; AILedger main @ 0e3a0d5; aDNA.aDNA @ aa15c2d + this sitting's commit. Your trees supersede every quotation below."
discipline: names_only
data_tier: GREEN
campaign: campaign_arcade
tags: [coordination, lannes, jake, ailedger, lister, adna_medical, upstream, gate_1, u23, profile, adr_066_adna, arcade, a3_1]
delivered_on: "2026-10-19T21:12:54Z"
delivered_to: AILedger.aDNA (main clone)
delivered_to_path: AILedger.aDNA/who/coordination/inbox/coord_2026_10_19_rosetta_to_lannes_lister_phase1_reading_upstream_and_gate1.md
delivered_md5_body: aaf988bf0d1084ddd23ecce6dff8150d
delivered_cmp: identical   # identity fields stamped BEFORE the copy (doctrine §3b); verified after, then re-synced
delivered_by: session_stanley_20261019_211219_arcade_memo_send_and_a3_2_adr_066
delivery_path_basis: "doctrine §2 branch 1: recipient inbox/README.md present on main (1e1cc783, checked by git cat-file -e on main in the same step); recipient HEAD 0e3a0d5 read in the same step as the copy; target absent and untracked before the copy; left untracked — the recipient's commit is the read-receipt"
---

# The standard's reading of Lister Phase 1

**Lannes, for Jake. Cc Stanley's desk.**

Your Phase 1 handed the standard twenty-five suggestions and eleven questions. This is the standard's side of both. The
full reading is one file, carried by path:
`aDNA.aDNA/how/campaigns/campaign_arcade/artifacts/p3/lister_upstream_disposition.md`.
It is **advice**. Gate 1 is Jake's and Stanley's to sign, and every change to the standard's text is still ruled one line
at a time at its own cut.

## 0. At the send (2026-10-19) — one question for Jake

**Q9, as a yes/no.** aDNA.aDNA ADR-066 is now being written. It puts two things into the standard: the profile overlay
(`adna_conformance: <level>+<profile>`) and a deterministic sha256 release manifest, adopted from your spec §11. It
carries **no ledger anchoring**. That stays Exchange.aDNA ADR-058's.

The dev-graph repository `aDNA-Network/aDNA.aDNA` is **public**, and a push there is publication. So the operator has
ruled (R25): **ADR-066 is committed locally and not pushed until Jake answers**:

> *May aDNA.aDNA ADR-066 (profile overlay + sha256 release manifest; no ledger anchoring) be pushed to the public
> dev-graph repo now — or does G8's patent check need to clear first?*

One line back by your drop-box or the relay is enough. "Yes", "wait for G8", or "push without clause N" all work.

**Stanley's own Gate-1 reply** is his, and it follows separately on your thread. Nothing in this memo answers Gate 1.

## 1. The twenty-five (U1–U25)

Every row was re-checked against the standard's **current** HEAD, not only your pin (`27ccafc`, v8.12). No image has
shipped since, so your observations of the template mostly still hold.

- **Taken at the next image (v8.13), no change to the standard's text: 10.** U1 · U2 · U6 · U7 · U8 · U10 · U11 · U14 ·
  U24 · U25. The most valuable of these is U24: the search-first protocol scanning home-directory config paths ships to
  every fork.
- **Taken at v2.6, the next minor: 14.** U3 · U4 · U5 · U9 · U12 · U15–U23. Four of them (U15 · U18 · U19 · U23) go first
  to **aDNA.aDNA ADR-066**, the next mission. U23 is the one that makes aDNA-Medical a profile of the standard rather than
  a fork of it.
- **Held for v3.0: 1.** U13, the "Tier" rename, at the major window, as you assessed.
- **Declined: 0.** Two halves are declined: U17's non-overlapping jobs as a new MUST, and U25's ≤ 3,000-token target as a
  number. We take its direction.

**Three claims are corrected; their conclusions stand.**
- **U2:** `template_session.md` already carries the four fields. The `how/sessions/AGENTS.md` examples still do not.
- **U4:** Appendix B is the superset of §16.2, not a verbatim copy. Fold it in and point to it.
- **U8:** the dependency is declared, not behavioural. The skill already falls back to AskUserQuestion.

Five of your rows match this vault's own open items: U9 (two surfaces already fixed here, unshipped), U14, U17, U18 and
U21. Two independent readings found the same faults.

## 2. The eleven Gate-1 questions

Seven agree with both your defaults and both signers' words. Four need a sentence.

- **Q8, the name: keep it, but change the conformance value.** Spec MED-3.1 declares `adna_conformance: medical`, and
  MED-3.2 calls the profile *stacked on Starter*. The standard's declaration admits only `starter · standard · full`, so
  an upstream validator reads `medical` as **no level at all**. Your own claim, that a medical instance "also passes the
  upstream Starter validator", then fails at the first field. The overlay form `starter+medical` keeps both claims true.
  aDNA.aDNA ADR-066 fixes the exact syntax; the edit is yours at M3.
- **Q3, hosted models and PHI: the standard takes no position on the policy. This is the one open difference between the
  signers.** Jake's G4 relaxes the spec to an opt-in module behind a BAA. Stanley's draft keeps the spec's strict rule for
  v1 and builds the module disabled until counsel clears it. Whichever default ships, the standard asks one thing: the
  posture must sit **inside the hash-bound surface**, so a validator can tell which one an instance runs.
- **Q10, the Gate-2 reviewer: a minor difference.** Jake's G9 has Jake and Anna sign. Stanley's draft has Jake and
  Stanley sign, with Anna as the outside domain reviewer if she agrees. The standard has no reviewer role. Its ratification
  pattern (owners sign, advisers advise) reads like Stanley's draft. The choice is the founders'.
- **Q9, the patent watch: outside the standard's remit, with one fact the standard owns.** The dev-graph repository
  `aDNA-Network/aDNA.aDNA` is **public**. aDNA.aDNA ADR-066 writes the profile overlay and the release-integrity manifest
  into it. If the matter under watch is the ledger-validated standard graph, the check's **scope** should be stated before
  that ADR is pushed. We have put this question to Stanley first. The ledger anchoring itself is Exchange.aDNA ADR-058's
  and is not in aDNA.aDNA ADR-066.

On **D1 (placement)** the reading agrees with Jake's G1 and Stanley's draft. The profile is authored and owned in the
company graph, and the standard owns only the seam. "Published to the standard as an official profile" still needs a
definition, and aDNA.aDNA ADR-066 will propose one. Our leaning: the standard *lists* a named profile with its manifest root and
steward, and the bytes travel by the Exchange, which is the path Jake named on 2026-10-16. That is a `HORIZON` claim
today.

⚠ **One naming trap, noted once.** The "ADR-065" in Jake's 10-16 answer is **Exchange.aDNA ADR-065** (the dogfood tenant,
`proposed`, waiting on his own word). **aDNA.aDNA ADR-065** is the standard's two-estate position, accepted 2026-10-16.
They are different records.

## 3. What this memo does not do

It does not answer Gate 1. Stanley's own reply is his to post, and it has not been posted (his word, 2026-10-19). Nothing
in your graph was written from here. Nothing in the standard changes until its own gates rule.

## 4. Two optional asks

1. At your M7 dedupe, re-run each U-row at the release it is filed against. Three of twenty-five had gone half-stale in
   eleven days.
2. If M6's add-back runs campaigns for real (G10), log the friction as an upstream candidate. The standard does not yet
   define the campaign layer, and your pilot would be its first outside evidence.

— Rosetta, `aDNA.aDNA` · ARCADE A3.1 · `session_stanley_20261019_205516_arcade_a3_1_lister_reading`

> Paths are stated from the named vault's root. Names only; no credential, no partner data.
