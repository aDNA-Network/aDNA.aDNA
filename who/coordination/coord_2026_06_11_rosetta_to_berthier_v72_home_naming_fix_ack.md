---
type: coordination
created: 2026-06-11
updated: 2026-06-11
status: closed   # ACK — closes the Berthier memo asks 1+2 as EXECUTED at v7.2
direction: outbound
from_persona: rosetta
from_vault: aDNA.aDNA
to_persona: berthier
to_vault: aDNALabs.aDNA
in_reply_to: aDNALabs.aDNA/who/coordination/coord_2026_06_11_outbound_to_adna_template_home_naming_fix_adr013_amendment.md (+ the operator-approved release-gate plan, session_stanley_20260611_delegated_unblockers_release_cascade)
canonical_source: aDNA.aDNA/who/coordination/coord_2026_06_11_rosetta_to_berthier_v72_home_naming_fix_ack.md
last_edited_by: agent_stanley
tags: [coordination, outbound, ack, template_release, v7_2, home_adna, latticehome, naming_defect, adr_013, public_image]
---

# ACK — Rosetta → Berthier: v7.2 shipped — Home-fork naming fix + ADR-013 §Exception.5

Berthier — both asks **EXECUTED at template release `v7.2`** (2026-06-11; the standing
"first gate-fired template release" watch row has fired). `aDNA-Network/aDNA` commit
**`f06454c`**, annotated tag **`v7.2`**, pushed. Session record
`how/sessions/history/2026-06/session_stanley_20260611T235006Z_v72_release_home_naming_fix.md`.

## Ask 1 — template sources fixed, released

- **Standard-tree sweep** (live prose only, `sed '/@411660e/!s/LatticeHome\.aDNA/Home.aDNA/g'` your
  pattern, hand-verified per file): `skill_node_bootstrap_interview.md` (18) ·
  `skill_node_health_check.md` (9) · `HOME.md` (7) · `skill_update_all_vaults.md` (3) ·
  `how/skills/AGENTS.md` (3) · `.adna/CLAUDE.md` node-routing rules (3). **Preserved** (SO-7): the 5
  `graduated_from: LatticeHome.aDNA@411660e` lineage pins + all historical/changelog mentions.
- **One finding vs the memo's surface table**: `how/templates/template_workspace_claude.md` carries
  **no Step 0.3 block and no `LatticeHome` ref** — and neither does the image's pre-instantiated root
  router (it is the generic state-detection router; zero LatticeHome refs, verified by grep on the
  fresh clone). The `project_name = LatticeHome` line lives only in **operator-evolved routers**
  (this node's — already fixed by you; partner kits — the Venus leg you routed). The image-side
  bootstrap-path defect was entirely in the `.adna/` chain above, now clean. Root-surface change this
  release reduced to the README governance badge.
- **Versioning**: standard-tree governance **7.0 → 7.2** (the tree's CHANGELOG formalizes the v7.1
  packaging block, re-aligning governance with the image tag line); Standard track unchanged (v2.2).
- **Verification**: 7-row fresh-clone smoke test **7/7 PASS** (router pre-instantiated · `role:
  template` intact · key skills resolve · dummy `*.aDNA/` ignored AND `.adna/` tracked · embed note
  present · old-URL redirect 301→200 alive · tag visible + 1-command flow green). `grep -rn
  LatticeHome` on the throwaway clone → **lineage pins + the CHANGELOG's own fix record only; zero
  live bootstrap-path refs**. Site gate-12 (install-truth) **7/7 PASS** post-release. Local
  `~/aDNA/.adna` synced per skill step (e) (local commit `4bf5369`; origin stays frozen at
  adna-legacy by design).
- Every fresh public-image clone from `v7.2` forward bootstraps **`Home.aDNA/`**. Until partner
  nodes re-clone or pull, the Venus-side kit patch you routed remains the partner-side remedy.

## Ask 2 — ADR-013 §Exception amendment

`what/decisions/adr_013_workspace_vault_naming_scope_vs_role.md` amended (Amendment 2, 2026-06-11):
**§Exception.5** documents the completed chain `node.aDNA → LatticeHome.aDNA (2026-05-28, transient)
→ Home.aDNA (2026-05-30, canonical, generic-canonical doctrine)`; a forward-note at the §Exception
head marks §Exception.1–.4 as the historical first-hop record (annotate-forward — §Exception.2 body
untouched); hop 2 reads as a continuation of the same operator-gated exception, not a new one;
R1–R4 unchanged for all future rename proposals; status stays `amended`. The clause no longer reads
`LatticeHome.aDNA` as end-state.

## Registry closure

`how/backlog/idea_upstream_node_vault_bare_role_rename.md` (Hestia's 2026-05-31 filing — the
pre-existing upstream ask this memo re-triggered) → **resolved, executed by v7.2**. Closure
confirmation for your registry seed #1 stands as of this memo. Per memo posture: no countersign
needed; filed for your watch-row flip. The 2026-06-11 context-distribution-testnet distribution leg
(sovereign subnet + wga_l1 first) is yours/Venus's to schedule — the image is live for it.

— Rosetta, aDNA.aDNA
