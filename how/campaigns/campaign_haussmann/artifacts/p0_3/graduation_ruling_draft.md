---
type: artifact
artifact_type: ruling_draft
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p0_3_webforge_intake
title: "Craft-floor graduation ruling (DRAFT, unsigned) — WebForge's Tier-2 offer to aDNA.aDNA"
created: 2026-08-16
status: draft
last_edited_by: agent_rosetta
tags: [haussmann, webforge, craft_floor, graduation, ruling, p0_3]
---

# Craft-floor graduation ruling — DRAFT (unsigned)

> Drafted at mission P0.3 (WebForge federation intake). This is a **recommendation**, not a ratified
> decision. Per campaign governance (§7.7 ratification: agents author, operators ratify) the signature
> block at the bottom is left blank — for the orchestrator to countersign at mission close, or for the
> operator to ratify at a later campaign gate (DP-numbered or otherwise).

## Context — the offer, verbatim

`WebForge.aDNA/what/doctrine/doctrine_web_surface_craft_floor.md` frontmatter (read 2026-08-16) carries:

```yaml
graduation: offered_to_aDNA.aDNA (Tier 2, mission_graduation_sweep) — Rosetta decides home
```

**What "Tier 2" means here** (disambiguation — this ecosystem overloads the word "tier" twice; do not
confuse the two): this is WebForge's own **RLHF-graduation depth tier** from
`campaign_websites_genesis/missions/mission_graduation_sweep.md` (per `05_rlhf_learning_loop_v2.md` §4 /
ADR-003), **not** ADR-015 §A5's Tier A/Tier B *surface-class* tier (which this wrapper's `CLAUDE.md`
separately records — this site is Tier A/static there). In the RLHF taxonomy:

- **Tier 1** = promote a general artifact wholesale into the standard (e.g. `sf_forge_pattern_spec.md` →
  `aDNA.aDNA/what/specs/`).
- **Tier 2** = **consolidate in-graph, then offer** — the craft-floor doctrine was consolidated from eight
  (now thirteen) chronological floor-raise rounds into one normative, archetype-independent doctrine
  document, and WebForge **offers** it to be adopted elsewhere **by reference**, not by copy. The receiving
  vault decides its own depth of adoption.
- **Tier 3** = pattern-only, roster/implementation stays put (the 11-voice reviewer roster, explicitly
  *not* offered wholesale — a different, more conservative call the same mission made).

So the offer on the table is: **adopt `doctrine_web_surface_craft_floor.md` as this site's own craft floor,
by reference** — not a request to copy 57 gate-lock implementations into this vault, and not a request to
abandon this site's existing 371-gate suite. The doctrine has grown since the offer was authored
(2026-06-30, 41 locks / 8 rounds) to its current state (57 locks / 13 rounds, `census_status: gating`,
verified live in `lock_coverage.yaml` at read time 2026-08-16) — the offer's *shape* (in-graph consolidation
+ offer-by-reference) is unchanged by that growth; only its *size* grew, which is consistent with the
doctrine's own "append-only, ratchet-only" law.

## Recommendation

**ACCEPT — with scope.** Adopt `doctrine_web_surface_craft_floor.md` as aDNA.aDNA's own craft floor, by
reference, effective now (this ruling). **Defer the concrete 57-lock coverage DECLARATION** — the checkable
artifact that proves adoption rather than merely asserting it — **to mission P4.2**
(`mission_haussmann_p4_2_craft_floor.md`, objective O0: *"Author the site's lock-coverage declaration (57
rows; map existing gates as `by:` anchors; real `gap` rows honest)"*). This is not a partial or hedged
accept — the doctrine is adopted in full, immediately, as the standing craft law this campaign already
protects; only the *proof mechanism* (the census-style declaration file, WebForge pattern P2) is scheduled
work rather than instant.

### Why accept (not defer outright)

1. The doctrine is **proven** (13 rounds, `census_status: gating`, append-only) and **free** — adoption by
   reference costs nothing today; only the declaration costs build time, and that's already a scheduled
   P4.2 mission with its own token budget (~200–300 kT).
2. Several locks directly hit **known, already-evidenced defects** on this site (per the pattern register
   P1 row: D4 reflow, J1 heading primacy, B5 measure, G3 no-codename-leak, N2 llms honesty line) — accepting
   now gives P4.2 a named target instead of reinventing the floor from scratch.
3. The site's own 371-gate suite is **PARALLEL, not superior or inferior** — it covers overlapping ground
   under different IDs with no coverage matrix (pattern register P1: "adna.network adoption today" =
   "NONE formally; PARALLEL in spirit"). Accepting the doctrine gives the fleet floor primacy without
   discarding the site's existing gates; P4.2's job is reconciliation (map site gates ↔ locks), not
   replacement.
4. **The floor only ever rises** (doctrine's own stated law) — there is no plausible "accept later, on
   worse terms" path; deferring the *doctrine* acceptance itself (as opposed to the declaration mechanic)
   buys nothing and costs a clean north star for P4.2 to build against.

### Why not accept unconditionally / immediately-full

The **declaration** is real work this mission's own scope (P0.3: wrapper mechanics + ruling, no `site/`
changes, ~80–130 kT budget) cannot responsibly absorb. A ruling that claimed full coverage today without
having actually mapped a single lock would itself violate this campaign's Standing Convention 1 ("every
count a page narrates must be derived, not typed") — the exact WebForge KW-14 failure mode (narrated-number
drift) this campaign explicitly inherits as a standing constraint. Honesty requires the accept/declare split.

## Acceptance conditions

1. **Reference, never copy** (contract §11 anti-pattern #1) — this vault never forks or re-implements the
   57 locks locally; `doctrine_web_surface_craft_floor.md` stays the single source of truth, consumed by
   citation from this wrapper and from P4.2's declaration file.
2. **No existing site gate weakens to accommodate this** — the site's 371-gate suite continues unchanged;
   adoption is additive (a new declaration layer), never a justification to drop a gate.
3. **The `lock_coverage.yaml` `site` row ambiguity resolves before or at P4.2** — WebForge's
   `lock_coverage.yaml` already carries a `site` surface among its 14 columns with several cells populated
   `enforced`; P4.2 cannot honestly write a declaration until it knows whether that row is WebForge's own
   self-site or a standing reservation for this one (flagged to Vitruvius in the delivered intake memo,
   still unanswered as of this draft — see wrapper `CLAUDE.md` "Pending with Vitruvius" §2).
4. **Every `gap` row in the P4.2 declaration is honestly dispositioned** — no cell may assert `enforced`
   without a grep-verifiable anchor (P4.2's own stated constraint, mirroring WebForge's own anti-fabrication
   mechanic, pattern P2 — "fabricated cells FAIL").
5. **The floor only ratchets up from here** — any future WebForge floor-raise round this site inherits at
   re-pin (contract §8 "Floor inheritance"); this vault does not pin itself to the 2026-08-16 snapshot
   indefinitely.
6. **Momus-independence discipline carries into P4.2's own verification** — whichever agent/lane writes the
   coverage declaration is not the sole party certifying it clean, consistent with this campaign's existing
   verification-handoff practice.

## What this ruling does NOT do

- It does not create the P4.2 declaration file — that mission is unstarted (`status: queued-provisional`,
  `depends_on: [mission_haussmann_p4_1_token_pipeline]`).
- It does not resolve the `lock_coverage.yaml` `site`-row ambiguity — that is Vitruvius's reply to give.
- It does not modify any file under `site/` (P0.3 constraint) or inside `WebForge.aDNA` (read-only to this
  mission).
- It does not itself constitute campaign ratification — see the signature block.

## Signature

| Role | Name | Date | Status |
|---|---|---|---|
| Drafting agent | Rosetta (mission P0.3 executor lane) | 2026-08-16 | drafted |
| Ruling authority | **Rosetta** — per mission P0.3 O3, which the ratified charter (§7.7, 2026-08-16) assigns as a Rosetta ruling (no ⛩) | 2026-08-16 | **SIGNED — ACCEPT Tier-2 under the six conditions above** |
| Operator countermand window | Stanley (operator) — surfaced in the P0-wave wrap-up; silence = stands | — | open |

## Related

Wrapper: `../../../../how/federation/webforge/CLAUDE.md` (this vault's `how/federation/webforge/CLAUDE.md`)
· `WebForge.aDNA/what/doctrine/doctrine_web_surface_craft_floor.md` · `WebForge.aDNA/how/campaigns/campaign_websites_genesis/missions/mission_graduation_sweep.md`
· [[mission_haussmann_p4_2_craft_floor]] · [[webforge_pattern_register]] (P1, P2) · [[campaign_haussmann]]
