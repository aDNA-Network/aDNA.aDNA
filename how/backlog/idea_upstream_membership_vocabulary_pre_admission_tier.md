---
type: backlog_idea
status: open
priority: high
created: 2026-08-28
updated: 2026-08-28
last_edited_by: agent_rosetta
filed_from: aDNA.aDNA/who/coordination/coord_2026_08_27_venus_to_rosetta_adr022_opened_a_tier_the_vocabulary_cannot_name.md
filing_authorization: skill_upstream_contribution
filed_by_session: session_stanley_20260828_124050_dynamo_p5_refit
reported_by: Venus (Network.aDNA) — SO#10 check-in, 2026-08-27
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, standard, membership, trust_tiers, t0_newcomer, adr_022, adr_017, node_naming, lip, f_s333_02, vocabulary]
---

# The standard's membership vocabulary has no word for "not yet a member"

**Filed, not answered.** Raised by Venus (`Network.aDNA`) as an SO#10 check-in on 2026-08-27;
received and acked 2026-08-28 from the Dynamo P5 refit lane, which explicitly declined to rule on
it — a corrections session is the wrong venue for a standard-vocabulary decision. This file exists
so the question survives until a properly scoped mission picks it up.

## The gap

`Network.aDNA`'s **ADR-022** introduced **`t0_newcomer`**: a trust tier that sits **below
membership**. A node enrolls at the floor, holds a signed certificate, is on the substrate — and
**is not a member**.

The standard's `MEMBERSHIP_*` vocabulary was built on a binary that the tier model has broken. Its
terms read *"for a **member** node"*; its lifecycle runs admitted → provisioned → promoted →
revoked. There is **no vocabulary for the interval before admission**, because until ADR-022 that
interval had no standing, no certificate and no name.

> ***The tier model created a state the object model cannot describe.***

### Live, not hypothetical

At S422 Network signed `adna-mvrp-01-1043` — a real certificate, `10.43.0.33`,
`groups: [t0_newcomer]`, valid 8760 hours — and emitted **nothing** (`ruling_t0_emits_nothing_s421`,
operator-ratified: the ledger speaks at admission and at promotion). So the fleet now contains a node
that holds a CA-signed certificate, is reachable on the overlay, has no DID / no membership row / no
ledger event, and **is correctly described by no term the standard offers**.

SO-8 (*"no node is on the lattice without a verified transmission"*) still holds and is **not** being
weakened — this node is not on the lattice. But *"not on the lattice"* now covers two very different
states — *nothing exists* and *a signed certificate exists* — **and the standard cannot tell them
apart.**

### ⛩ Why this is structural, not a one-off

The same enrollment independently hit **ADR-017 §b**. The request asked for node_id `windows11-box`;
§b forbids an id encoding a substrate, so it was ruled `adna_mvrp_01` pre-ledger (§a rule 3), reusing
the `.28` `ubuntu_box → jake_l1` precedent. **But §b speaks of "new admits" and "chosen at
admission" — and this was not an admission.** The rule was applied anyway, because the cert name
derives mechanically from node_id (§a rule 1) and a cert is not silently renameable: an
admission-time rule was applied to a pre-admission act, because the alternative was baking a
non-conforming id into an 8760-hour credential.

> **One instance is a gap; two on different surfaces in one sitting is a seam.** — Venus, verbatim;
> this sentence is the finding.

## The three asks (carried intact)

| # | Ask | Note |
|---|-----|------|
| **A1** | **Does the standard want a pre-membership vocabulary?** An `ENROLLMENT_*` class · a floor-tier qualifier on existing terms · **or a deliberate no.** | ⛔ **"A reasoned no is a genuinely good outcome"** — recorded as a first-class candidate answer, not a fallback. Venus would rather have it recorded than left implicit. |
| **A2** | **Should ADR-017 §a/§b say what happens at a pre-admission act?** | Today it says "at admission" and was extended by judgement. That judgement should become text **or be corrected**. |
| **A3** | **F-S333-02** — `MEMBERSHIP_TRUST_TIER_CHANGED` is named in ratified policy (`policy_trust_tiers` §5.3) and **absent from the frozen enum**, open since **2026-07-29**. | Graduate it, or close won't-fix-with-reasons. Distinct from A1/A2: this is already a **contradiction inside ratified policy**, not a question about future vocabulary. Current practice substitutes and records the substitution — *"works and does not scale."* |

## First step for whoever picks this up

⚠ **Go to Venus at the object before drafting anything.** Confirm the LIP reading — per ADR-017
§e/D-07 the 39 types are frozen and a new type is **LIP-only**. The acking session did **not**
confirm this (it had not read those ADRs at the object, and an unearned confirmation is worse than a
deferral). Venus has widened nothing locally and asked to confirm rather than act; that posture
should be preserved until the reading is verified.

Nothing is blocked. Per Venus: *"the next floor enrollment is what benefits from it,"* not the one
already signed.

## Provenance note worth preserving

Venus recorded that her check-in **trailed** the operator ruling — the gap surfaced *at* the gate
rather than before it — and flagged that SO#10 exists precisely to prevent that ordering. She
reported it against her own interest. Any future summary of this item should keep that, not smooth
it into an implication that the check-in came first.

## Related

- `Network.aDNA/how/missions/artifacts/ruling_t0_emits_nothing_s421.md` — ledger posture at the floor
- `Network.aDNA/how/missions/artifacts/ruling_node_id_adna_mvrp_01_s422.md` — the naming ruling
- Ack sent: `Network.aDNA/who/coordination/inbox/coord_2026_08_28_rosetta_to_venus_ack_membership_vocabulary_received_and_filed.md`
- The protocol half of this question went separately to **Noether** (`LatticeProtocol.aDNA`) — the enum itself. This file is the **standard/vocabulary** half only.
