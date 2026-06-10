---
type: coordination
title: "Cross-Graph Announcement: aDNA.aDNA → Spacemacs.aDNA — v7.0 Publish-Skill Family Shipped (Migration Steps 1-4 Trigger)"
status: delivered
delivered: 2026-05-18
delivery_held_until: operator-approval  # gate satisfied at M06 S2 v7.0 tag push 2026-05-18 (D3 pre-tag delivery per Rosetta default)
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: Spacemacs.aDNA
receiving_persona: daedalus
predecessor: who/coordination/coord_2026_05_08_publish_rewrite.md
requesting_agent: agent_stanley
created: 2026-05-18
updated: 2026-05-18
last_edited_by: agent_stanley
priority: medium
deadline: operator-discretionary  # M06 tag execution does NOT block this delivery; Steps 1-4 can begin at any operator-approved time post-M05 ship
audit_id: adna_v2_m05_s3_publish_shipped_announcement
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_05_publish_skill_rewrite
objective: mission_close_handoff
mirror: /Users/stanley/aDNA/Spacemacs.aDNA/who/coordination/coord_2026_05_18_adna_publish_rewrite_shipped.md  # mirror authored at Daedalus's discretion post-delivery
airlock_pattern: true   # additive announcement; adopts the bilateral co-sign memo (predecessor) as its anchor
tags: [coordination, cross_graph, publish_rewrite, daedalus, rosetta, airlock_pattern, announcement, m05_close, v7_0_ship, migration_steps_1_4_trigger]
---

# Cross-Graph Announcement — aDNA.aDNA (Rosetta) → Spacemacs.aDNA (Daedalus)

> **Additive announcement memo** to the bilateral co-sign predecessor [[coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]] (Rosetta + Daedalus, co-signed 2026-05-08T20:38:49Z and 2026-05-08T21:03:45Z). The predecessor stays `status: completed` as the canonical bilateral record; this memo is the **send-event** announcing that the v7.0 publish-skill family is shipped in `.adna/` template and the Spacemacs-side migration **Steps 1-4** (per [[coord_2026_05_08_publish_rewrite.md#§4-spacemacs-side-migration-path-the-handshake|predecessor §4]]) can begin at operator discretion.

## TL;DR

**M05 of `campaign_adna_v2_infrastructure` closed 2026-05-18.** The v7.0 publish-skill family is now live in the `.adna/` template at upstream commit `dfced67`. Spacemacs.aDNA can begin **Steps 1-4** of the migration path co-signed 2026-05-08 — `git -C .adna pull` + `skill_git_remote_setup` + `skill_deploy` + adopt `skill_vault_publish` going forward. Steps 5-8 (delete `.publish-clone/` + retire local rsync skill + close backlog idea) stay deferred to **v3-EC M05-EC** per predecessor §4 sequencing.

**Delivery posture**: this memo is `status: draft` until operator approves delivery. Hard-constraint compliance (4 partner-affiliated memos from M08a still embargo-held + 3 public-announcement drafts still `delivery_held_until: M06-tag-ship`) is unrelated — Daedalus + Spacemacs is the **co-signed counterparty** and not in the partner-embargo set. Operator-approval gating here is for **timing**, not for content review.

---

## §1 Context — what shipped

M05 (`mission_adna_infra_p1_05_publish_skill_rewrite`) closed at a 3-session arc 2026-05-18:

| Session | Deliverables |
|---|---|
| **S1** (`session_stanley_20260518_045558_adna_v2_m05_s1`, 2026-05-18T04:55Z) | ADR-010 ratified (Keep + Add naming — operator-approved Recommendation A) · `skill_lattice_publish.md` light-edited (5 small edits per rewrite-spec §2) · 3 NEW skills: `skill_vault_publish.md` + `skill_git_remote_setup.md` + `skill_deploy.md` · `pre-push-sanitize.sh` at `LAYER_CONTRACT_VERSION=4.0.1` with R1-R7 sanitization rules · `skill_publish_tarball.md` sketch (full content M07 / v3-EC) |
| **S2** (`session_stanley_20260518_054924_adna_v2_m05_s2`, 2026-05-18T05:49Z) | Test-vault end-to-end verification **5/5 PASSED** against real GitHub remote `ScienceStanley/m05-test` (skill_git_remote_setup 8 steps + skill_deploy 5 steps + skill_vault_publish clean-path push + hook FAIL path on R1 violation + cleanup) · 8 self-test fixtures at `.adna/how/standard/hooks/test_fixtures/` (2 clean + 5 dirty + 1 README with coverage matrix) · hook `--self-test` upgraded from warn-and-skip stub to real validation logic · **2 in-session defect fixes** upstream-committed: (a) skill path mismatch with post-M03-flatten layout (4 files now check `how/standard/hooks/...` vault-local first, fallback `.adna/how/standard/hooks/...` legacy) + (b) R2 secret-pattern quote-class bug (`[\x27\x22]?` interpreted literally by POSIX `grep -E`; ANSI-C quoting `$'...'` applied to all 7 secret_patterns) |
| **S3** (this session, 2026-05-18T15:19Z) | Mission close — AAR + status flips + v8 M1.1 coord checkpoint fire + this announcement memo |

**Mission AAR**: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/aar_m05_publish_skill_rewrite.md|`aar_m05_publish_skill_rewrite.md`]] — load-bearing finding: **verification-as-first-class deliverable** (test-vault verification surfaces a different defect class than spec review).

---

## §2 Commit pins — v7.0 publish family on `LatticeProtocol/adna`

| Commit | Scope | Vault |
|---|---|---|
| `f9c49ea` | M05 S1 — 7 deliverables shipped to `.adna/` template (4 skills + 1 hook + ADR-010 cross-references) | `LatticeProtocol/adna` upstream |
| `dfced67` | M05 S2 — 8 self-test fixtures + hook self-test upgrade + 2 in-session defect fixes | `LatticeProtocol/adna` upstream |
| `9606dd7` | M05 S1 mirror in aDNA.aDNA (self-referential) | aDNA.aDNA |
| `2b02a3e` | M05 S2 mirror in aDNA.aDNA (self-referential) | aDNA.aDNA |

**Spacemacs adopts via `git -C .adna pull`** at any operator-approved time post-delivery of this memo. The upstream `.adna/` HEAD will be `dfced67` (or whatever `LatticeProtocol/adna` advances to at M06 v7.0 tag execution; the tag will pin the v7.0 baseline).

---

## §3 Migration Steps 1-4 — trigger

Per [[coord_2026_05_08_publish_rewrite.md#§4-spacemacs-side-migration-path-the-handshake|predecessor §4]] migration path table, Steps 1-4 are **non-destructive** and trigger now:

| Step | Action | Notes |
|---|---|---|
| 1 | `git -C .adna pull` | Brings Spacemacs's `.adna/` symlink-or-copy to HEAD `dfced67` (M05 S2) or post-M06 v7.0 tag, whichever Daedalus prefers |
| 2 | Run `skill_git_remote_setup.md` against Spacemacs.aDNA | Configures `origin` to `github.com/LatticeProtocol/Spacemacs.aDNA.git` (or operator-chosen URL). Naming-lint will WARN against `Spacemacs.aDNA.git` because ADR-009 not yet ratified — informational only; override clean per spec §6 Step 2 TODO comment |
| 3 | Run `skill_deploy.md` against Spacemacs.aDNA | Installs `pre-push-sanitize.sh` to `.git/hooks/pre-push` (10297 bytes, chmod +x) + runs `--self-test` (gated on fixtures; should PASS 7/7 if `.adna/` has the post-S2 fixture tree) + writes deploy receipt to `who/peers/deployed/<UTC>.md` |
| 4 | Use `skill_vault_publish.md` for next Spacemacs publish | Pre-flight 3 checks (origin set / hook installed / working tree clean) → hook fires on push → reports `✓ pre-push-sanitize: clean` or aborts with named rule + remediation hint |

**Sequencing reminder** (predecessor §4): Steps 5-8 (delete `.publish-clone/` + retire local `skill_publish_lattice.md` + retire shadowed `skill_lattice_publish.md` + close `idea_skill_publish_lattice_git_fix.md`) wait until Daedalus confirms Steps 1-4 working end-to-end on at least one publish cycle. Steps 5-8 belong to **v3-EC `M05-EC`** (per `campaign_adna_v3_ecosystem_compliance`); they do not run inside this v2 campaign.

---

## §4 Cross-references

- **Predecessor bilateral co-sign**: [[coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]] (status: completed; Rosetta 2026-05-08T20:38:49Z + Daedalus 2026-05-08T21:03:45Z)
- **Mission AAR**: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/aar_m05_publish_skill_rewrite.md|`aar_m05_publish_skill_rewrite.md`]]
- **Mission file**: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_p1_05_publish_skill_rewrite.md|`mission_adna_infra_p1_05_publish_skill_rewrite.md`]]
- **Campaign master**: [[../../how/campaigns/campaign_adna_v2_infrastructure/campaign_adna_v2_infrastructure.md|`campaign_adna_v2_infrastructure.md`]]
- **ADR-010** (Keep + Add naming): `.adna/what/decisions/adr_010_publish_skill_naming.md` (status: accepted)
- **4 sibling spec artifacts** (from M01 Obj 4, referenced by M05 implementation):
  - [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj4_publish_naming_adr.md|`m01_obj4_publish_naming_adr.md`]]
  - [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/skill_lattice_publish_rewrite_spec.md|`skill_lattice_publish_rewrite_spec.md`]]
  - [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/skill_git_remote_setup_spec.md|`skill_git_remote_setup_spec.md`]]
  - [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/pre_push_hook_spec.md|`pre_push_hook_spec.md`]]
- **Spacemacs backlog idea** (resolved at M05 close): `/Users/stanley/aDNA/Spacemacs.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md` — flips `status: in_progress → closed` when Daedalus confirms Steps 1-4 end-to-end per predecessor §5

---

## §5 Delivery posture

- **status**: `draft` — operator-approval required to deliver
- **delivery_held_until**: `operator-approval` — not blocked by partner-embargo discipline (Daedalus is co-signed counterparty, not partner-embargo set)
- **At delivery**: operator flips `status: draft → ready` (or directly to `delivered` if delivery is concurrent with status flip)
- **Mirror authoring**: deferred to Daedalus's first session in `Spacemacs.aDNA` after delivery; mirror file at `mirror:` frontmatter path. Daedalus may co-author additional fields (acknowledgment timestamp + Steps 1-4 completion notes + Steps 5-8 v3-EC handoff acknowledgment)
- **Hard constraints honored**: M05 mission outputs untouched after authoring this memo; predecessor `coord_2026_05_08_publish_rewrite.md` stays `status: completed`; 4 partner-affiliated memos from M08a still `status: draft` + `delivery_held_until` preserved; 3 public-announcement drafts still `delivery_held_until: M06-tag-ship`; no upstream `.adna/` touches required by this memo (already committed at `dfced67`); no Spacemacs.aDNA mutation

---

## §6 Standing Order discharges

| Standing Order | Discharge in this memo |
|---|---|
| #2 (self-reference) | This memo IS the announcement event in the airlock pattern — references its own structural elements §1–§5 as the additive-memo-per-event discipline; predecessor co-sign memo is the bilateral anchor, this memo is the send-event |
| #6 (archive, never delete) | Memo persists in `who/coordination/` permanently; predecessor stays `status: completed`; Spacemacs's `idea_skill_publish_lattice_git_fix.md` will flip to `status: closed` (not deleted) at Steps 1-4 completion |
| #7 (dual-audience) | Developer reads §3 + §2 for the mechanics; newcomer reads §1 (what shipped) + §5 (delivery posture); both audiences served |
| #8 (self-reference mandatory) | Memo demonstrates the additive-memo-per-event discipline by enacting it — the v7.0 publish family is announced via a memo authored using the same airlock pattern the publish family is shipped under |
| #9 (upstream spec is source of truth) | Memo doesn't make normative claims about the standard; cites upstream commits `f9c49ea` + `dfced67` + ADR-010 as authoritative |
| #10 (cross-link aggressively) | Memo links to: predecessor co-sign, mission AAR, mission file, campaign master, ADR-010, 4 sibling spec artifacts, Spacemacs backlog idea — **10+ wikilinks**, well above the ≥2 required |

---

## §7 Status

**Draft** — pending operator approval for delivery. On operator-approved delivery: flip `status` to `ready` or `delivered`; record delivery timestamp in updated `updated:` field; await Daedalus's mirror authorship + Steps 1-4 completion notes.

**M05 ship-before is COMPLETE** for v8 P1 entry preparation (M06 v7.0 tag is the remaining gate). The Daedalus / Spacemacs migration path is unblocked from the aDNA.aDNA side; sequencing is now operator-discretionary.

**Backlog idea state** (predecessor §5): `idea_skill_publish_lattice_git_fix.md` flips `status: in_progress → closed` when Daedalus confirms Steps 1-4 end-to-end on at least one publish cycle. Steps 5-8 retirement work is v3-EC `M05-EC` scope and does not gate this idea's `status: closed` flip.
