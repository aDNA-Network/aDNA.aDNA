---
type: decision
adr_id: adr_038
adr_number: 038
title: "Combined v8.1 public-image release: Cornerstone Obsidian parity + fork-reseed fix + F1 §5 body-completion"
status: accepted
created: 2026-06-22
updated: 2026-06-22
ratified: 2026-06-22
last_edited_by: agent_stanley
supersedes: none
superseded_by: none
revises: none
related:
  - what/decisions/adr_035_inventory_identity_base_entity_types.md
  - what/decisions/adr_034_public_face_repo_release_architecture.md
  - how/skills/skill_template_release.md
  - how/campaigns/campaign_operation_adna/f1_catchup_release_prep.md
  - how/campaigns/campaign_operation_adna/coordination_ledger.md
  - who/coordination/coord_2026_06_22_seshat_to_rosetta_cornerstone_v81_landing.md
tags: [adr, decision, release, v8_1, skill_template_release, cornerstone, f1_catchup, obsidian, base_template, standard_body_completion, combined_release, adr_034, adr_035]
---

# ADR-038: Combined v8.1 release — Cornerstone Obsidian parity + fork-reseed fix + F1 §5 body-completion

## Status

**accepted** — ratified **2026-06-22** by the operator. Two independently-staged, unrelated deltas were both
targeting tag **v8.1**; the operator decided this session to **combine** them into a single release and to
**drive the landing to the push gate** now. This ADR records that decision and is the **release-precondition
trace** (`skill_template_release` step (a.2): "every standard-touching change traces to an accepted ADR/mission
close") for the Cornerstone delta, which originates in `Obsidian.aDNA` (M07, `in_progress`). The F1 delta is
already ratified by **[[adr_035_inventory_identity_base_entity_types|ADR-035]]** (accepted 2026-06-18) and the
turnkey **[[f1_catchup_release_prep|F1 prep package]]**.

Self-referential note (Standing Order #8): this `what/decisions/` record is the canonical home for a
standard/release-evolution decision — the file you are reading is the `decisions` base entity type adjudicating
how the standard's published form advances.

## Context

A brand-new aDNA user's first context graph does **not** open batteries-included today, **and** the published
standard contradicts itself. Two fixes were staged on 2026-06-22, independently, both stamped v8.1:

1. **Cornerstone (functional)** — `Obsidian.aDNA` M07 (Operation Cornerstone) re-verified the public **v8.0**
   image against its own `health_check.py` (exit 1) and built a **proven** parity bundle
   (`Obsidian.aDNA/what/obsidian/base_template_parity_bundle/`): roster 15→**14** (drop `termy` +
   `settings-search` [the latter **load-broken on Obsidian ≥1.13.1**], add `terminal`), full `.obsidian/`
   config/binary parity, HOME wiring repoint (homepage → root `HOME.md`), BRAT scrub, and a
   `skill_project_fork.md` fix for the **strip-then-reseed defect** (line 101 `rm -f setup.sh` deleted the
   installer the fork then tells the user to run). Evidence ledger:
   `Obsidian.aDNA/what/context/obsidian_base_template_parity_v8.md`. Handoff:
   [[coord_2026_06_22_seshat_to_rosetta_cornerstone_v81_landing]].
2. **F1 (credibility)** — the v8.0 image's `.adna/what/docs/adna_standard.md` carries a **v2.3 title with a
   14-type body**; ADR-035 promoted `inventory` (WHAT) + `identity` (WHO) to base (→**16 types, v2.3**) and the
   launch site already reads 16. The image is internally self-contradictory and contradicts the site (program
   quality bar #5). Fix = a **4-content-line additive docs delta** (already authored in the dev standard);
   prep package [[f1_catchup_release_prep]].

Neither memo referenced the other; both claimed v8.1. The operator resolved the collision: **combine, ship now.**

## Decision

### D1 — Combine both deltas into a single **v8.1** release
One release event, one operator push, one smoke surface — rather than two sequenced releases. Rationale: both
are minor/additive, the combined diff stays small and inspectable, and a single public push minimizes
outward-facing release events.

### D2 — Adopt the Cornerstone parity bundle as-staged (fold-in)
Land the bundle verbatim via its `apply_to_template.sh` (the `.obsidian/` payload — corrected
`community-plugins.json` 14, NN v2.6.6, terminal v3.25.0 + binaries, Tokyo Night, `graph.json` colorGroups,
snippets, app/appearance/hotkeys, homepage→`HOME`, BRAT scrub, sync-neutral `core-plugins.json`, retired-binary
removal) **+ the two hand deltas** (`setup.sh` roster 15→14; `skill_project_fork.md` drop `rm -f setup.sh`).
**Mechanism = fold-in** (ADR-034: the public face is a standalone clone-and-run image; a fresh user has only
`.adna/`, so a living-seed federation-reference is impossible for the base). This satisfies the release
precondition for the Cornerstone delta; M07 stays `in_progress` (its P4 verifies post-push).

### D3 — Land F1 at **SCOPE-C minimum**
Only the §5 body-completion: the `inventory/` (§5.1) and `identity/` (§5.2) entity-type rows + their two
ER-diagram edges (`what ||--o{ inventory`, `who ||--o{ identity`), per ADR-035 + the F1 prep §2 verified diff
(4 content + 3 housekeeping lines). **No** broader Hearthstone-Decision-6 drift is folded in (keeps the diff +
smoke surface small, per the F1 prep §3 recommendation).

### D4 — Version: image **v8.1** · governance **8.0 → 8.1** · standard **v2.3 (unchanged)**
Both deltas are minor/additive (two-track semver, ADR-011): the standard title already promises v2.3 and F1
completes the body it promised (no standard bump); Cornerstone is template-payload/skill correction (governance
minor). `root_surfaces_changed: **false**` — neither delta touches the root router/README/.gitignore/LICENSE
(Cornerstone edits live under `.adna/`; F1 is docs-body-only).

### D5 — Timing: **ship now**, ahead of the keystone (resolves F1's DP3)
The operator's combine + drive-now decision **supersedes** F1's open launch-coupling question
(`f1_catchup_release_prep` §10 DP3: "launch-coupled" vs "post-keystone"). Shipping v8.1 **before** the keystone
launch is strictly safe: the published image reads 16/v2.3 ahead of the site that points at it, so there is no
window where the image contradicts the live site. *(Release-comms note: v8.1 lands ahead of any coordinated
keystone announcement — surfaced to the operator at the push gate, not a correctness issue.)*

### D6 — Hestia `how/Home.md`: repoint ships, deletion deferred
The homepage **repoint → `HOME.md`** ships in the bundle (Seshat's `.obsidian/` lane, fixes the user-facing
wiring). **Deleting** the stale `how/Home.md` is Hestia's content call and is **unacked** (memo
`coord_2026_06_22_seshat_to_hestia_home_wiring_finding` delivered, no response) → **defer the deletion** to a
follow-up; the now-orphaned `how/Home.md` is harmless once homepage points at `HOME.md`. **Non-blocking.**

### D7 — Execution & ownership
Driven via `skill_template_release` in the `aDNA.aDNA` dev-graph lane under the operator's direct drive; the
public push is the operator's **hard gate** (Standing Order #1/#2, Git-Ops §3). The F1 prep named
**Berthier/aDNALabs** as the nominal release-skill owner; **combining + drive-now consolidates the fire under
the operator's direct drive this session** (recorded as a coordination_ledger seam update, not a Berthier
hand-off). *Operator may redirect to a Berthier-fired release at the push gate if preferred.*

## Ship Path (`skill_template_release`, both deltas, dry_run first)

1. **(a) preconditions** — operator GO (this ADR + the push-gate confirm); F1 traces ADR-035, Cornerstone
   traces this ADR; working tree clean.
2. **(b)/(c) assemble in a throwaway clone** — `git clone aDNA-Network/aDNA`; run
   `apply_to_template.sh <clone>/.adna --donor ~/aDNA/Home.aDNA`; hand-apply the two doc deltas (match content,
   not line numbers); copy dev `what/docs/adna_standard.md` → clone and **dry-diff to confirm only the 4+3 F1
   lines move**; apply the mandatory embed-note transform on `.adna/README.md`.
3. **verify green** — `health_check.py <clone>/.adna` HC1–HC9, 0 warnings; F1 row-8 four greps each → 1;
   full assemble-diff shows only the combined batch.
4. **(d) cut** — governance 8.0→8.1; CHANGELOG `[Unreleased]→[v8.1]` (combined note); `git add` path-scoped,
   commit, annotated tag **`v8.1`**; **operator confirms the push**.
5. **(e) local sync** — `rsync` released `.adna/` → `~/aDNA/.adna/`, mirror commit (origin frozen);
   `npm run sync:install` if the install-truth sha moved.
6. **(f) combined smoke** — on a throwaway clone of the pushed tag **and** a fresh fork: the standard 7 rows +
   the F1 8th row + Cornerstone first-open (`health_check --fleet` exit 0, terminal loads, HOME lands, graph
   colored, fork keeps `setup.sh`). A red row REVERTS to the operator (a fix is a new v8.2 gate).

## Consequences

**Positive** — fresh clone *and* fresh fork open batteries-included **and** the published standard reads
16/v2.3: functional + credibility-complete on day one, ahead of the keystone. One push, not two. Combined diff
stays small (a targeted `.obsidian/` payload + 2 doc edits + 4 standard-body lines + version bookkeeping).

**Negative / cost** — a slightly larger smoke surface than either delta alone (mitigated: HC1–HC9 + the 4 F1
greps + first-open are all scripted). v8.1 lands ahead of any keystone release-comms (D5 note; operator-aware).

**Neutral / migration** — M07 closes at its P4 (post-push); ADR-035's materialization is now realized in the
image; the `coordination_ledger` standard-currency + `skill_template_release`/aDNALabs seams are updated to
reflect the combined fire; the Seshat→Rosetta memo is answered (landed).

## Related

- [[adr_035_inventory_identity_base_entity_types]] — the F1 promotion this release materializes (14→16, v2.3).
- [[adr_034_public_face_repo_release_architecture]] — the standalone-image release architecture (fold-in).
- `what/decisions/adr_011_aDNA_semver_discipline.md` + `CHANGELOG.md` §Version Policy — the two-track bump.
- [[skill_template_release]] — the a–f release procedure this ADR fires.
- [[f1_catchup_release_prep]] — the F1 turnkey package (verified diff, params, smoke row 8, rollback).
- `Obsidian.aDNA/what/obsidian/base_template_parity_bundle/` — the Cornerstone bundle (apply script + deltas).
- `Obsidian.aDNA/what/context/obsidian_base_template_parity_v8.md` — the Cornerstone gap-reconciliation ledger.
- `Obsidian.aDNA/how/campaigns/campaign_obsidian_execution/missions/mission_obsidian_exec_m07_base_template_parity.md` — M07.
- [[coord_2026_06_22_seshat_to_rosetta_cornerstone_v81_landing]] · `coord_2026_06_22_seshat_to_hestia_home_wiring_finding`.
