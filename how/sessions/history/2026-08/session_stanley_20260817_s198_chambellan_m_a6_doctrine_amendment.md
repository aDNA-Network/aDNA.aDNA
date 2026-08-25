---
type: session
session_id: session_stanley_20260817_s198_chambellan_m_a6_doctrine_amendment
tier: 2
user: stanley
agent: agent_rosetta
campaign: campaign_operation_chambellan
mission: mission_a6_doctrine_amendment
started: 2026-08-17
ended: 2026-08-17
status: completed
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~120 kT (mission card)"
tags: [session, chambellan, m_a6, doctrine, credentials, scanning, rotation, safe_mutations]
---

# Session — Chambellan M-A6 doctrine amendment

**Intent**: Execute `aDNALabs.aDNA/how/campaigns/campaign_operation_chambellan/missions/mission_a6_doctrine_amendment.md`
— amend four workspace doctrines for the three-body credential world and discharge the P1-accumulated
doctrine debt (D-24 · D-28 · D-41 · D-44 · D-46/D-60 · D-56 · D-57 · DP-10 item 2), plus the two
M-A7 findings handed down this morning (F-M-A7-1 instrument-ages-out · F-M-A7-2 duration-is-not-a-guarantee).

**Law of the card**: amend, don't proliferate · present, don't ratify · write the law, don't execute the wave.

## Declared scope (Tier 2 — shared-config edits)

- `what/doctrine/doctrine_credential_handling.md` (§2 · §3 · §4 · §6 · new §9 ratification block)
- `what/doctrine/doctrine_key_rotation.md`
- `what/doctrine/doctrine_secret_scanning.md`
- `what/doctrine/doctrine_safe_mutations.md`
- `who/coordination/coord_2026_08_17_rosetta_to_hestia_m_a6_cosign_ask.md` (new)
- `CHANGELOG.md`
- this session file

**NOT in scope, not touched**: `.adna/` (absolute prohibition) · `Home.aDNA` (Hestia co-sign is staged as a
memo ask, never a Home write) · any hook file anywhere (M-A6 writes the LAW; propagation is a separate card).

## Pre-flight (recon-at-execution)

- **§8 single-writer pre-flight** (the credential doctrine's own rule, which binds this very edit):
  `Home.aDNA/how/sessions/active/` = `.gitkeep` only. Hestia's ADR-011/DP-10 lease is **closed** at
  Home `ccc47a4`. Both cited execution commits verified on disk: `5172655` (ADR-011 executed, 28 `Cnn`
  + 1 `Ann` mint) · `f5e4501` (DP-10 items 1/2/4 wired). **Cleared to write.**
- `aDNA.aDNA` HEAD `a37b40a`; own `how/sessions/active/` empty at open.
- ⚠ **Pre-existing dirt is much larger than the brief predicted** — see Deviations below. Attributed,
  untouched, never staged. Path-scoped commits only.

## Deviations (recorded, not smoothed)

1. **D-M-A6-1 — the handed-down dirt figure was wrong.** The dispatch said "expect only `.obsidian/` app
   noise". Disk at open carries, in addition: a modified session-history file
   (`history/2026-08/session_stanley_20260817_185706_haussmann_p1_1_claim_purge.md`), ~120 untracked
   HAUSSMANN evidence captures, 4 untracked HAUSSMANN/quality artifacts (incl. an untracked
   `what/doctrine/doctrine_web_quality_assessment.md` — a **fifth doctrine file in the same directory
   I am editing**, not mine to touch), and 12 untracked coordination memos. All attributable to the
   HAUSSMANN P1.1 lane that closed at `a37b40a` and to prior un-staged inbound memos. Nothing staged;
   every commit path-scoped and verified with `git diff --cached --name-only`.
   *(This is the Chambellan signature error class — handed-down figures diverge from disk — landing on
   the lane's own workspace instead of on a count inside an artifact.)*

## Work log

- Read the mission card, the charter §(c) delta record (D-24…D-60), the DP-10/DP-11 rows, and all four
  target doctrines in full before writing a line.
- Verified every inherited figure against its delta row rather than re-measuring: hook families
  41/3/2/48 (=94, 3/94 = 3.2%) → D-41 · fixture class 13 owning graphs → D-24 · Obsidian noise 24 vaults
  → D-44 (a **different population** from D-24's 13 — carried separately, never merged) · unreaped-half
  figures 5,269 / 199d / 2,066 `.txt` / 453 MB @ 49d / `plans/` 74d → D-56 · scanner efficacy 5-of-8 →
  D-57 · 420 findings / 94 files / 17 high-specificity → D-58 · register 72 → 100 rows (72 + the 28-row
  mint) → D-46 + Hestia's `5172655`.

## SITREP

**Completed** — Four doctrines amended and PRESENTED; four §7.7 blocks landed `proposed`, unsigned.
`doctrine_credential_handling` §2.5/§3.5/§4.5/§6.9 (three-body model · ADR-011 kinds + `scope:` cited WIRED ·
partner delivery n=2 · the locus rule) · `doctrine_key_rotation` scoped-expiring class + revoke≠kill +
procedure step 0 · `doctrine_secret_scanning` pre-push gate law + Obsidian allow-list CLOSED + non-git-store
scanning + inert-control rule + instrument law · `doctrine_safe_mutations` §8 custody moves + §9 vendor-default
rule + §9.1 DP-10 item-2 window PROPOSED at 90d. Hestia co-sign staged in-vault. CHANGELOG bumped. Commit
`c4676cf`, path-scoped, local. Lane report delivered to the HQ desk.

**Verdicts** — `conditional_new_doctrine`: **NO**, amendment sufficed (split trigger named at §3.5 instead).
D-41: **hardened-hook-as-standard**, not the F1 control-flow fix (one artifact serves 91 vaults, not 41; only
candidate with evidence; two lineages defeat conformance-by-hash).

**In progress** — none. The lane is closed.

**Next up** — (desk-owned) relay the Hestia co-sign ask · obtain Venus's co-sign on lifting the hardened hook ·
card the propagation wave (91 vaults; blast radius = fail-closed gate blocks pushes where gitleaks is absent) ·
card the DP-10 item-2 reaper if 90d is signed · consider an upstream backlog filing for §Instrument law +
§Positive controls (fleet-general; nothing filed by this lane).

**Blockers** — none. Two co-signs are *prerequisites to downstream waves*, not to ratification of the law.

**Files touched** — the 7 in commit `c4676cf` (see Declared scope) + the lane report at
`aDNALabs.aDNA/who/coordination/coord_2026_08_17_rosetta_to_berthier_m_a6_doctrine_amendment_report.md`
(sanctioned return path, the lane's only write outside this vault).

**Token budget** — estimated ~120 kT; actual ≈ 105 kT (under, chiefly by citing delta rows instead of
re-measuring, per the card's budget guidance).

## Next Session Prompt

Operation Chambellan P2 continues. M-A6 is CLOSED: four workspace doctrines in
`~/aDNA/aDNA.aDNA/what/doctrine/` carry Chambellan amendments with **four unsigned §7.7 blocks** awaiting a
single operator ratification sitting — the checklist is section 4 of
`~/aDNA/aDNALabs.aDNA/who/coordination/coord_2026_08_17_rosetta_to_berthier_m_a6_doctrine_amendment_report.md`.
Nothing was executed: no hook installed, no wave run, no reaper built, no `.adna/` or `Home.aDNA` write.
Two co-signs are outstanding and both gate *downstream waves*, not the ratification itself — **Hestia** on 5
sections touching register/broker semantics (ask staged at
`aDNA.aDNA/who/coordination/coord_2026_08_17_rosetta_to_hestia_m_a6_cosign_ask.md`, relayed via the HQ desk;
it invites her to contradict §2.5 rule 3 and the 90-day number) and **Venus** on lifting the `Network.aDNA`
hardened fail-closed pre-push hook to a canonical home in the standard, which is the prerequisite for the
91-vault propagation wave. Open at **opus** for wave execution, **fable** for the ratification gate itself.
Beware: `aDNA.aDNA` carries heavy untracked HAUSSMANN dirt including an untracked fifth doctrine file
(`what/doctrine/doctrine_web_quality_assessment.md`) — path-scoped `git add` only, never `-A`.

## AAR (SO-9, 5-line)

- **Worked** — Reading the charter delta record §(c) *before* any doctrine text meant every figure had a
  citation and none needed re-measuring; the mission stayed ~15 kT under budget as a direct result.
- **Didn't** — The handed-down dirt figure was wrong (deviation 1); had I trusted it and staged broadly I
  would have committed another lane's unreviewed doctrine file into the standard.
- **Finding** — `doctrine_credential_handling.md` §8 lists **itself** as a single-writer-lease file, so the
  doctrine's own rule gated its own amendment. Self-application worked exactly as written; the check was
  cheap and the result (Home lease closed at `ccc47a4`) was load-bearing for citing ADR-011 as *wired*.
- **Change** — F-M-A7-1 was promoted from an incident to a **named class at n=2** (with D-47) rather than
  filed as a one-off, on the campaign's own standing rule that two instances make a class.
- **Follow-up** — §Instrument law and §Positive controls must fire are fleet-general (about instruments, not
  secrets) and are upstream-template candidates; surfaced to the desk, deliberately not filed by this lane.
