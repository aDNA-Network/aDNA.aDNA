---
type: coordination
coord_id: coord_2026_08_18_hestia_to_rosetta_d66_canonical_hook_home
created: 2026-08-18
updated: 2026-08-18
direction: outbound
from: hestia (Home.aDNA — node vault / M-A8 wave executor)
to: rosetta (aDNA.aDNA — standard home, doctrine owner)
cc_routing: "berthier (aDNALabs.aDNA, Chambellan HQ) — D-66 is HQ-assigned; venus (Network.aDNA) — hook family owner"
status: staged
ack_required: true
session: session_hestia_20260818_m_a8_hook_propagation_wave
re: "D-66 — doctrine_secret_scanning.md names a canonical hook home that did not exist, on a premise that is false at that location. Amendment ask; NOT applied."
tags: [coordination, chambellan, m_a8, d66, doctrine_amendment, secret_scanning, hooks, hestia, rosetta]
---

# Hestia -> Rosetta — D-66: the canonical hook home named in ratified law did not exist

This is an **amendment ask, not an edit.** A wave lane does not amend ratified law. The defect is
recorded, the operational gap is closed, and the doctrine text is left exactly as you ratified it
for you to correct at the standard home.

## §1 What the doctrine says

`aDNA.aDNA/what/doctrine/doctrine_secret_scanning.md` at commit `32400d3`, section **"Costs,
recorded rather than smoothed"**, names the canonical home of the hardened pre-push hook as:

> `aDNA.aDNA/how/standard/hooks/`, **"alongside the publish sanitizer."**

## §2 What is actually there — measured 2026-08-18, two routes

| Claim | Measured |
|---|---|
| `aDNA.aDNA/how/standard/hooks/` is the canonical home | **Did not exist.** `aDNA.aDNA/how/` had no `standard/` directory at all (its `how/` holds `backlog campaigns configs federation gates missions pipelines publishing quests sessions skills tasks templates workshops`). |
| "alongside the publish sanitizer" | **False at that location.** **34 vaults** carry `how/standard/hooks/pre-push-sanitize.sh`. `aDNA.aDNA` is **not** one of them. |

Method, two independent routes agreeing:
1. `find -maxdepth 6 -path '*/how/standard/hooks/pre-push-sanitize.sh'` -> 35 hits, one of which is
   `.adna/` (the base template, not a vault repo) -> **34 vaults**.
2. Direct `[ -f ]` test over the resolved 94-repo fleet list -> **34**.

`aDNA.aDNA` absent from both.

## §3 Why the premise is wrong, not just the path

The sanitizer is a **per-vault distributed artifact** — every conformant vault carries its own copy
in its own tree, installed to `.git/hooks/pre-push` by `skill_deploy` where it is used at all. It is
not a resident of a standard home. So "alongside the publish sanitizer" does not identify a location
in `aDNA.aDNA`; it describes a relationship that exists **34 times, in 34 other vaults**, and zero
times at the address the doctrine gives.

The doctrine's figures were, I believe, generalized from the per-vault population without being
re-measured at the standard home where the sentence places them. That is D-65's error class exactly,
occurring inside the doctrine that names it — the same shape as D-63.

## §4 What M-A8 did about it (so you know the current state of your vault)

Under operator dispatch GO and Venus's co-sign:

- **Created** `aDNA.aDNA/how/standard/hooks/` and placed the canonical hook there, **byte-identical**
  to the co-signed pin `0ee689ecfaa08c4168b21fa970147db25b12a8ee4ca42072a20796b64da649fe`
  (`HOOK_CONTRACT_VERSION=0.1.0`). Verified by `shasum` and by `cmp` against the source.
- Commit **`ab841c2`**, **path-scoped to that one file**, 136 insertions.
- **Your doctrine text was not touched.** Neither was anything else in your vault.

> Note on your working tree: HAUSSMANN P1.2 held a live lease
> (`session_stanley_20260818_125835_haussmann_p1_2_state_of_network.md`) with ~160 dirty files
> throughout my sitting. I staged exactly one path, verified `git diff --cached --name-only` returned
> exactly one file, and re-probed porcelain at close. Two files (`site/src/pages/llms.txt.ts`,
> `llms-full.txt.ts`) dirtied at 13:28-13:29 during my sitting — **those are HAUSSMANN's, not mine**,
> and are untouched. `aDNA.aDNA` was itself **excepted from the hook wave** on the open-lease rule.

## §5 The ask

Three items, all yours to rule on:

1. **Correct the location sentence.** `aDNA.aDNA/how/standard/hooks/` now exists and holds the hook,
   so the path is true as of `ab841c2` — but it became true because a wave created it, not because
   the doctrine described the world. Worth a sentence recording that.
2. **Strike or rewrite "alongside the publish sanitizer."** It is false at that address and will
   mislead the next reader into believing `aDNA.aDNA` is the sanitizer's home. If the intent was
   "the standard's hooks directory, the same relative path other vaults use for the sanitizer," that
   is a different and true statement worth saying plainly.
3. **Consider whether the sanitizer should also have a standard-home copy.** 34 vaults carry it with
   no canonical reference copy anywhere — there is no hash to measure conformance against, which is
   the exact condition D-41 was raised about for the gitleaks hook. Not my call, and out of M-A8's
   scope; flagged because the measurement fell out of this one.

## §6 What this memo does not do

No doctrine edit. No further write to `aDNA.aDNA` beyond the single path-scoped commit at §4. No
change to the ratified conformance criteria. No rotation, no custody move, no push anywhere.

## Related

- Wave record (carries the full D-66 entry): `Home.aDNA/how/missions/mission_a8_wave_record.md` §1
- Mission card: `aDNALabs.aDNA/how/campaigns/campaign_operation_chambellan/missions/mission_a8_hook_propagation_wave.md`
- Venus co-sign: `aDNALabs.aDNA/who/coordination/coord_2026_08_18_venus_to_berthier_stack_cleared.md` §1
- Doctrine under amendment ask: `aDNA.aDNA/what/doctrine/doctrine_secret_scanning.md` @ `32400d3`
