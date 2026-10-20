---
plan_id: mission_arcade_a2_2_estate_memos
type: plan
title: "Memos: the ADR-027 amendment proposal to aDNALabs; the pre-emptive answer to AILedger's staged 10-04 ask"
owner: stanley
status: completed   # 2026-10-16, session_stanley_20261016_193817_arcade_a2_2_estate_memos (fable); two memos outbound_ready; G2 owed
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 2
campaign_mission_number: 7
mission_class: integration
created: '2026-10-15'
updated: 2026-10-20   # A5.2: token_budget_actual key normalised (value unchanged)
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 40
token_budget_unit: kT_content_load
token_budget_actual: 45   # ≈ content-load kT; normalised 2026-10-20 at ARCADE A5.2 from this card's own budget_status: comment (no new number)
estimated_sessions: 1
calibrated_sessions: 1
estimation_class: content-novel
budget_status: actual_recorded   # ≈45 kT content-load vs 40 estimated (the four inbound receipts + the ADR-065 witness-row correction were unplanned load)
depends_on:
- mission_arcade_a2_1_adr_065_estate_position
blocks:
- mission_arcade_a2_3_public_face_account
gate: "G2 — two send GOs."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Memos: the ADR-027 amendment proposal to aDNALabs; the pre-emptive answer to AILedger's staged 10-04 ask

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P2 — Economic-platform seam
**Mission**: 7 of 15

## Goal

Cross-estate writes are memos (HAUSSMANN convention 10). Propose to Berthier the ADR-027 §2 amendment R1 implies (HQ → lab estate; ecosystem = partner/dog-fooding; economic platform named), citing ADR-065; and answer Thoth/Lannes's held memo before it arrives: aDNA.aDNA carries a private-side pointer to AILedger ADR-008 (none public until publication), and the lab declares the LinkML licence (ADR-062 annex). Both outbound_ready; each send its own GO.

## Exit Gate

G2 — two send GOs.

## Objectives

### 1. Memo to Berthier (aDNALabs)
- **Status**: completed
- **Session**: session_stanley_20261016_193817_arcade_a2_2_estate_memos
- **Description**: ADR-061 three-valued authorship; names-only; cites R1 and ADR-065.
- **Files**: who/coordination/coord_*_rosetta_to_berthier_adr_027_amendment_*.md
- **Depends on**: none

### 2. Memo to Thoth/Lannes (AILedger)
- **Status**: completed
- **Session**: session_stanley_20261016_193817_arcade_a2_2_estate_memos
- **Description**: Delivery path: AILedger has no drop-box in the clone we can see; the worktree is Jake's forge — route via aDNALabs' ailedger wrapper or the operator's desk.
- **Files**: who/coordination/coord_*_rosetta_to_thoth_*.md
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a2_1_adr_065_estate_position]].

### Next Mission Inputs
- Feeds [[mission_arcade_a2_3_public_face_account]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- `who/coordination/coord_2026_10_16_rosetta_to_berthier_adr_027_s2_amendment_a2_the_economic_platform_sentence_the_ecosystem_sentence_and_the_hq_label.md` — **`outbound_ready`**, `ack_required` (rule (a)(b)(c) separately by their §7.7 form; optional one-line co-sign of aDNA.aDNA ADR-065 §1/§3/§4). Body: §1 what was read at aDNALabs HEAD `4a0e35e9` · §2 Amendment A2 **in their A1 form** — (a) the standard row with the economic-platform clause in the Estate cell + the owner sentence (minimum · mechanics · witness · commerce) in the Mechanism cell, old row struck beneath; (b) an *ecosystem* boundary bullet (partner / dog-fooding / usage; related by conformance); (c) `adna_network_org_hq` read as *lab estate*, label retire-or-keep theirs; every claim tensed (witness `TAUGHT-AS-DESIGN`) · §3 why these words · §4 co-sign offer · §5 not written, not asked. §0 reserved for the send.
- `who/coordination/coord_2026_10_16_rosetta_to_thoth_and_lannes_the_standard_stays_open_answered_before_it_arrived_pointer_yes_private_side_licence_declared_at_linkml.md` — **`outbound_ready`**, `ack_required: false` (commit = receipt; optional co-sign; one word only if ADR-008's public-repo appearance troubles SR-6). Body: the ask's non-delivery as a finding · §1 **yes**, private-side pointer to AILedger ADR-008 (aDNA.aDNA ADR-065 §3 + `cites:`), R2 stated, the GitHub-public repo fact surfaced · §2 the LinkML licence as a four-row table (lab estate declares; declared **provisional MIT 2026-10-03**, counsel-gated; the standard declares vocabulary + toolchain path only; transfer = founders' documents) · §3 the VISION:27 qualifier offered · §4 the witness-row fact relayed (the next act is Jake's desk's) · §5 cross-reference to memo 1. Frontmatter `delivery_path_basis_planned` records the finding below.
- `what/decisions/adr_065_standard_position_two_estates.md` §4 **witness row corrected before G2**: `PASS for the configuration` → `TAUGHT-AS-DESIGN — built and inert` on Themis/Mnemosyne's F-164-02 (Exchange ADR-058 A1 built `0.0.44`, no anchor target listed, both roots' heads unsigned, scratch repo named not created); `updated` comment stamped; still `proposed`.
- Four inbound memos received byte-unchanged (the commit is the receipt): Mondrian 09-16 (ADR-011 erratum, 12,686 B) · Mondrian 10-16 (RFC1918 + registrar handshake, 5,606 B) · Noether 10-16 (M-A1 proposal package, 5,642 B) · Themis 10-16 (ack + F-164-01/02, 5,884 B). Reply debt derived: Mondrian ×2 + Noether `ack_required: true` → owed, routed (STATE §Pending); Themis `false` but asks Q-066-1 → owed a line.

### Descoped
- No send, no signature (operator R15, plan time): both memos wait for their own GO at G2. No artifact under `artifacts/p2/` — the delivery-path finding lives in memo 2's frontmatter and in this card.
- Replies to Mondrian ×2, Noether, Themis — out of A2.2's scope; recorded as owed, not answered (Noether's package → A4.1 triage; Mondrian's erratum + RFC1918 → A4.2/v8.13 rows; Themis F-164-01 → one-clause §5.1 amendment candidate at A4.1; Q-066-1 → a reply line).

### Key Findings
- `[D]` **Memo 2's delivery path**: AILedger's drop-box README exists only on the working branch `stanley/genesis-m00` (commit `1e1cc783`, genesis S038, 2026-10-06) — on disk at `~/aDNA/scratchpad/genesis/ailedger_wt/who/coordination/inbox/README.md`; **absent from `main`** (clone `~/aDNA/AILedger.aDNA` @ `6d3420e`). Its rule: copy in, lease or no lease; the desk's commit onto the working branch is the receipt; Jake's desk commits on `main`. ⇒ doctrine §2 **branch 1 at the genesis worktree inbox**. The main-clone inbox carries three peers' untracked drops (10-15/16) — the same desk's unmanaged side, not used. The aDNALabs wrapper's "delivery = a PR as `stanley`" (S338) predates the README; theirs to reconcile. Forge `10.43.0.5:2222` reachable.
- `[D]` **The held ask was authored by Stanley's own desk in AILedger** (Berthier / Emissary, S022), not Jake's — addressee is Thoth attn the genesis desk, cc Lannes.
- `[D]` **The LinkML licence question had half-answered itself** since 2026-10-03: `LinkML.aDNA/MANIFEST.md:10` = provisional MIT by operator posture ruling, counsel-gated; aDNA.aDNA ADR-065 §8's "the lab declares the LinkML licence (ADR-062 annex)" was a shorthand that the memo tightens (the standard declares vocabulary + toolchain path, not the masters' licence).
- `[D]` **A proposed ADR's tense cell was already false** at the object two days after drafting: Themis measured the witness row `TAUGHT-AS-DESIGN` where ADR-065 said `PASS`. Corrected before G2 — the tense vocabulary only works if the cells are re-measured before the signature, not after.
- `[D]` Rule 3 by hand: 3 bare `ADR-024` tokens remain in memo 1, all inside aDNALabs' **own quoted row text** (bare = theirs in their file); every token in our prose is vault-qualified. The regex caught 12 in the first drafts.

### Scope Changes
- +1: the ADR-065 witness-row correction (same-day, pre-G2, on an inbound measurement; our object).
- +4 receipts; 0 replies.

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: checking branch 1 **across refs, not just the checkout** — `git cat-file -e <ref>:who/coordination/inbox/README.md` over every local and remote ref found AILedger's drop-box on the genesis branch where `ls` on `main` had found nothing; the hold the card anticipated never had to be declared.
- **Didn't**: the first drafts carried 12 bare ADR tokens (the regex caught them) and a YAML flow sequence broke on an apostrophe in `cc:` — parse the frontmatter before calling a memo written.
- **Finding**: the ask being answered was written by **our own desk in the other estate**, and the licence it called undeclared had been declared twelve days earlier — two of the three premises in ADR-065 §8 row 2 were stale at the object within the same fortnight.
- **Change**: a memo that answers a *staged, undelivered* ask names the staged copy's path + status as its `replies_to` and says the non-delivery out loud (band-C class), so the recipient's receipt closes their own open row.
- **Follow-up**: G2 (human) — ADR-065 §7.7 + two send GOs (paths named in each memo's frontmatter) · at the send, §0 on each · reply debt: Mondrian ×2, Noether, Themis Q-066-1 · F-164-01 → spec_graph_exchange §5.1 one-clause amendment candidate (A4.1).
