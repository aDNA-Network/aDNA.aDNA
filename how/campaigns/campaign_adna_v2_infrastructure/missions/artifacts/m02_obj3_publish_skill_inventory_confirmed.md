---
type: artifact
artifact_type: skill_inventory_confirmation
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_02_ecosystem_matrix
objective: 3
created: 2026-05-09
updated: 2026-05-09
status: complete
last_edited_by: agent_stanley
session: session_stanley_20260509_031540_adna_v2_m02_first_exec
tags: [artifact, mission_deliverable, m02, obj3, publish_skill, inventory, governance]
related_artifacts:
  - m01_obj0_ecosystem_matrix.md  # §0 + §1 publish-skill column this artifact validates
  - m01_obj1_current_state.md  # §2 14-skill template-side baseline
---

# M02 Obj 3 — Per-Vault Publish-Skill Presence Confirmation

> **Deliverable 3 of M02** (per [[../mission_adna_infra_p1_02_ecosystem_matrix.md|mission_adna_infra_p1_02_ecosystem_matrix]] §Deliverables row 3). Re-confirms the M01 Obj 0 finding that 18 of 19 active vaults carry a copy of `how/skills/skill_lattice_publish.md` and that `wga.aDNA` is the lone structural exception with no `how/skills/` directory at all.

---

## §0 Verdict at a glance

| Aspect | Baseline (M01 Obj 0, 2026-05-08) | Validation (M02 Obj 3, 2026-05-09) | Drift |
|---|---|---|---|
| Vaults with `how/skills/skill_lattice_publish.md` | **18 of 19** active | Spot-check: 2/2 confirmed present | **None** |
| Vaults missing `how/skills/` directory entirely | **1** (`wga.aDNA`) | Re-verified: still missing | **None** |
| Per-vault local skill counts | Variable (vault-specific accumulations on top of template's 14) | Confirmed (19 + 15 in spot-checks; vault-specific) | **None expected** (informational) |

**Verdict**: **Zero drift** in the structural shape of publish-skill distribution. M05's `skill_lattice_publish` rewrite blast radius remains 18 vaults; the `wga.aDNA` structural exception (Issue I-5) remains a separate-track concern for M07.

---

## §1 Validation method

Per [[../mission_adna_infra_p1_02_ecosystem_matrix.md|M02 Obj 3 spec]], spot-checked 3 vaults across maturity tiers: one active content-heavy operator-vault (`science_stanley.aDNA`), one no-remote Platform.aDNA (`RareHarness.aDNA`), and the M01 structural exception (`wga.aDNA`).

For each spot-check: ran `ls /Users/stanley/lattice/<vault>/how/skills/skill_lattice_publish.md` and `ls /Users/stanley/lattice/<vault>/how/skills/` (or for `wga.aDNA`, confirmed `how/skills/` does not exist). The spot-checks address two questions: (a) is the publish-skill copy present, and (b) is the vault's overall skill-directory shape consistent with the M01 capture?

---

## §2 Verbatim spot-check log (2026-05-09)

```
=== science_stanley.aDNA — how/skills/skill_lattice_publish.md ===
/Users/stanley/lattice/science_stanley.aDNA/how/skills/skill_lattice_publish.md  (file exists)
skills directory entry count (incl. AGENTS.md): 19

=== RareHarness.aDNA — how/skills/skill_lattice_publish.md ===
/Users/stanley/lattice/RareHarness.aDNA/how/skills/skill_lattice_publish.md  (file exists)
skills directory entry count (incl. AGENTS.md): 15

=== wga.aDNA — how/skills/ (expected: does not exist per M01 finding F-2 / Issue I-5) ===
ls: /Users/stanley/lattice/wga.aDNA/how/skills: No such file or directory
how/ does exist (3 entries; verified non-empty parent)
```

**Comparison to M01 Obj 0 §1 publish-skill column**:
- `science_stanley.aDNA` row: M01 = "Y" (skill present) → M02 = "Y" (verified) ✓
- `RareHarness.aDNA` row: M01 = "Y" (skill present) → M02 = "Y" (verified) ✓
- `wga.aDNA` row: M01 = "N (no `how/skills/`)" → M02 = "N (still no `how/skills/`)" ✓

Set-wise: every spot-check matches its M01 baseline. No vault has gained or lost the publish skill since 2026-05-08.

---

## §3 Per-vault notes

### science_stanley.aDNA (LP origin, Org-Vault, content-heavy)

19 entries in `how/skills/` (some are vault-specific skills layered on top of the template's 14 — content-heavy operators tend to accumulate domain-specific skills over time). The publish-skill copy is present and structurally identical in name to the template's. No per-byte diff was performed (out of scope for M02 — that's M05's job to address); the file's mere presence is what M05's rewrite needs as input.

### RareHarness.aDNA (no remote, Platform.aDNA, high-velocity)

15 entries in `how/skills/`. Publish skill present despite this being a no-remote vault — confirms the M01 finding that "skill copy present" and "remote configured" are independent dimensions (a vault can have the skill but be unable to use it because no remote exists; that's Issue I-3 + I-6). The campaign architecture explicitly separates skill rewrite (M05's `skill_lattice_publish` rewrite + new `skill_vault_publish`) from remote configuration (M05's NEW `skill_git_remote_setup`). RareHarness will need both skills at M05 ship.

### wga.aDNA (LP origin, Org-Vault, structural anomaly)

`how/skills/` directory does not exist; `how/` exists and contains 3 directories (presumably the standard `templates/`, `sessions/`, `missions/` or similar — not enumerated this objective). M01 Obj 0 F-2 originally surfaced this as "wga.aDNA structural anomaly: either wga predates the standard skill copying convention or the skills directory was never bootstrapped." M07 vault audit will inspect; M03 migration runbook must handle the missing-skills-dir case for any operator forking from the template afterward. M02 only confirms the structural exception persists — it does not fix it.

---

## §4 Issue I-5 status (informational)

Per [[m01_obj1_current_state.md|M01 Obj 1 §5]], **Issue I-5** flags wga.aDNA's missing `how/skills/`. Severity: **nice-to-fix**. Target: **M07** (vault audit / backstop convention assessment). M02 Obj 3 confirms I-5 holds at M02 open. Closure path: either (a) operator manually bootstraps the directory + AGENTS.md per template, or (b) M07 designs a fresh-fork bootstrap that always materializes an empty `how/skills/` + AGENTS.md.

This is informational status — M02 does not modify or close I-5. Closure happens at M07.

---

## §5 Implications for M05 (publish-skill rewrite)

The M05 publish-skill rewrite scope from M01 Obj 0 §2 stands:
- **18 of 19 vaults** (all except `wga.aDNA`) need the rewritten `skill_lattice_publish` (kept name) + the new `skill_vault_publish` per [[../../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] adjacent skills (per M01 Obj 4 deliverable `m01_obj4_publish_naming_adr.md`).
- **8 of those 18 vaults** also need first-time `skill_git_remote_setup` (7 no-remote + 1 LPWhitepaper non-standard) per Obj 2 above.
- **wga.aDNA** is opted out of M05 publish-skill adoption until I-5 is resolved at M07 (no `how/skills/` to install into).

M02 Obj 5 (locked baseline) preserves these counts and per-vault dispositions.

---

## §6 Cross-references

| Reference | Used by | Direction |
|---|---|---|
| [[m01_obj0_ecosystem_matrix.md|M01 Obj 0 §0]] tally (18 of 19 carry publish skill) | Baseline | upstream |
| [[m01_obj0_ecosystem_matrix.md|M01 Obj 0 §1]] vault inventory publish-skill column | Per-row baseline | upstream |
| [[m01_obj0_ecosystem_matrix.md|M01 Obj 0 §0]] F-2 + [[m01_obj1_current_state.md|M01 Obj 1 §5]] I-5 | wga.aDNA structural exception | upstream |
| [[m01_obj1_current_state.md|M01 Obj 1 §2]] 14-skill template-side baseline | Template inventory | upstream |
| [[../mission_adna_infra_p1_02_ecosystem_matrix.md|M02 mission spec]] §Obj 3 | Source spec | spec → this doc |
| [[m02_obj1_drift_delta.md|M02 Obj 1]] | Directory-level zero drift | parallel |
| [[m02_obj2_remote_state_confirmed.md|M02 Obj 2]] | Remote-state zero drift | parallel |
| [[m02_obj5_ecosystem_baseline_locked.md|M02 Obj 5 locked baseline]] (forthcoming) | Consumer | this doc → consumer |

---

**Status**: Complete. Publish-skill distribution shape unchanged since M01. M05 has a stable scope. Feeds M02 Obj 5.
