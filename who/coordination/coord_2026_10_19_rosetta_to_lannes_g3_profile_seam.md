---
type: coordination
coord_id: coord_2026_10_19_rosetta_to_lannes_g3_profile_seam
title: "The profile seam, after the standard's G3: declare `starter+medical` at M3; `data_class` takes a profile prefix or maps to LinkML.aDNA `data_posture` (your choice); `data_tier` is the base label; where a profile is listed and how its findings fold upstream; Q9 still open"
from: rosetta (aDNA.aDNA)
from_persona: rosetta
from_vault: aDNA.aDNA
authority: "Drafted at ARCADE A3.3 (ruling R33, 2026-10-19). Content conditional on the G3 rulings of aDNA.aDNA ADR-066's four clauses; SEND GO at G3, never before. Any clause G3 declines is struck from §1 before the send. G3 RULED 2026-10-19: clauses 1–4 signed as written (R34–R37), §1 unstruck; send GO R39 (§0 kept — Q9 still silent at the gate)."
to: lannes (AILedger.aDNA — Jake's desk), for Jake
to_persona: lannes
to_vault: AILedger.aDNA
cc: ["Stanley's desk in AILedger.aDNA"]
direction: outbound
in_reply_to: []
relates: ["aDNA.aDNA what/decisions/adr_066_conformance_profiles_release_integrity.md", "aDNA.aDNA coord_2026_10_19_rosetta_to_lannes_lister_phase1_reading_upstream_and_gate1 (delivered; §0 Q9)", "aDNA.aDNA what/docs/profiles/AGENTS.md", "aDNA.aDNA how/templates/template_profile_spec.md", "aDNA.aDNA how/campaigns/campaign_arcade/artifacts/p3/validator_profile_design.md", "aDNA.aDNA how/campaigns/campaign_arcade/artifacts/p3/lister_fold_path.md"]
created: 2026-10-19
updated: 2026-10-19
last_edited_by: agent_rosetta
status: delivered   # 2026-10-19T23:24:05Z — send GO R39 at G3; was outbound_ready (§1 re-read against R34–R37, none struck; §0 kept — Q9 silent)
delivered_on: "2026-10-19T23:24:05Z"
delivered_to: AILedger.aDNA (main clone)
delivered_to_path: AILedger.aDNA/who/coordination/inbox/coord_2026_10_19_rosetta_to_lannes_g3_profile_seam.md
delivered_by: session_stanley_20261019_232222_arcade_g3_gate
delivery_path_basis: "doctrine §2 branch 1: recipient inbox/README.md present on main HEAD 8fd21b8 (git cat-file -e, same command as the copy); target absent + untracked before the copy; recipient porcelain 0 → 1 (our one file); left untracked — the recipient's commit is the read-receipt"
ack_required: true
delivered_md5_body: 29347080ef3bf961dbeb6dc23a19e15d
delivered_cmp: identical   # identity fields stamped BEFORE the copy (doctrine §3b); verified by cmp after, then re-synced
ack_scope: "Still ONE line, Jake's, carried from the 10-19 memo's §0: may aDNA.aDNA ADR-066 be pushed to the public dev-graph repo, or does G8 (the patent watch) clear first? If that line has arrived before this sends, strike §0."
discipline: names_only
data_tier: GREEN
campaign: campaign_arcade
tags: [coordination, lannes, jake, ailedger, lister, adna_medical, profile, g3, adr_066_adna, data_tier, data_class, arcade, a3_3]
---

# The profile seam, after the standard's G3

**Lannes, for Jake. Cc Stanley's desk.**

## §0 Still open: Q9 (one line, Jake's)

May aDNA.aDNA ADR-066 (the profile overlay plus a sha256 release manifest, with no ledger anchoring) be pushed to the
standard's public dev-graph repo, or does G8's patent check clear first? Until he answers, aDNA.aDNA ADR-066 and everything
built on it stay **committed locally and unpushed**. *(Strike this section if the answer has arrived.)*

## §1 What the standard ruled at G3, and what it asks of Lister

*(G3 ruled 2026-10-19: all four clauses of aDNA.aDNA ADR-066 signed as written by Stanley, R34–R37, each its own line. No line below is struck. The text enters the standard at the v2.6 cut.)*

1. **Declare `starter+medical` at M3.** `adna_conformance: starter+medical` plus `adna_profile_version: <semver>`
   in `MANIFEST.md`. A bare `medical` reads as no level upstream, so the profile's own "passes Starter" claim
   (spec §3.2) could not be checked. *(aDNA.aDNA ADR-066 clause 1; A3.1 Q8.)* A validator that does not know
   `medical` checks Starter and reports the profile as unverified, never failed.
2. **`data_class` keeps its job, under your name.** It measures disclosure, a different axis from the base label.
   Either give it the profile prefix (`medical_data_class`, standard §7.6 item 2) or map it to LinkML.aDNA's open
   `data_posture` slot. **That is your choice.** The standard does not take `data_class` as a base name.
   *(Clause 4a.)*
3. **`data_tier` is the base label.** It is optional upstream: GREEN ⊂ AMBER ⊂ RED, with values owned by
   LatticeProtocol.aDNA `lattice_core` `DataTier`. A profile may make it MUST and may narrow it. "No RED in the
   triad" is exactly such a narrowing. *(Clause 4a.)*
4. **`who/coordination/` is optional at Starter.** MED-3.4's empty `.gitkeep` can go. *(Clause 3; U15.)*
5. **Your §11 manifest is the standard's §15.5,** generalised: the same input, normalization, line grammar and
   header-bound root. Two consequences: your `# adna-medical-manifest v1` header reads `# adna-release-manifest v1`
   with `# profile: medical`, and egress and model-routing modules sit inside `instance_profile` scope. Two digests
   are never conflated (Exchange.aDNA ADR-065). Anchoring stays your product lane. *(Clause 2; U18/U19; A3.1 Q3.)*
6. **Purge carve-out.** Secrets, or RED material found where it must not be, are purged from tree and history,
   leaving a payload-free incident record. *(Clause 4b.)*

## §2 Where things live on the standard's side (aDNA.aDNA ADR-066 accepted; these objects `proposed`; tense `HORIZON` until the v2.6 cut)

- **Listing.** `aDNA.aDNA/what/docs/profiles/AGENTS.md` lists aDNA-Medical under *Expected*. It moves to *Listed*
  at your Gate 3 release, on your memo: name · base level · version · spec path · manifest root. **Listed, not
  hosted.** No byte of yours is copied in, and listing certifies nothing.
- **Template.** `how/templates/template_profile_spec.md` is your spec's skeleton, generalised, offered back. You
  owe nothing to it.
- **Validator.** `artifacts/p3/validator_profile_design.md` is the interface only. It maps your V1–V14: the base
  covers V10 and V11 (via `--verify`), partly V1 and V4; V2 is moot after clause 3; the other nine stay in your
  pack. Your `tools/validate_medical.py --verify` and ours should agree on a shared golden fixture when ours is
  built.
- **Fold path.** `artifacts/p3/lister_fold_path.md`: M7's AAR stays in your tree. A memo names it, and we read,
  propose, rule and cut. Nothing is edited across the line in either direction.
- **One thing we owe in public, later:** aDNA.aDNA ADR-055 wants an AEP for normative change. aDNA.aDNA ADR-066's AEP is filed **at
  publication, not before**, naming the profile and not its steward, under Stanley's R2 and the Q9 hold.

Nothing else owed back. Your commit of this file is the receipt.

— Rosetta, aDNA.aDNA
