---
type: artifact
artifact_type: adr_recommendation
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 4
target_mission: M05  # M05 drafts the formal ADR from this recommendation
target_skills:
  - skill_lattice_publish.md   # KEEP — unchanged scope (latlab CLI registry)
  - skill_vault_publish.md     # CREATE — new (vault → GitHub git push flow)
  - skill_git_remote_setup.md  # CREATE — new (first-time remote configuration)
  - skill_publish_tarball.md   # CREATE — new optional offline-shipping artifact
  - skill_deploy.md            # CREATE — new (installs pre-push hook on deploy)
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj4, adr_recommendation, publish_skill, naming, disambiguation, m05]
related_artifacts:
  - m01_obj1_current_state.md   # source: 14-skill inventory + Issue I-6 (publish-skill rename decision)
  - m01_obj2_migration_runbook.md
  - skill_lattice_publish_rewrite_spec.md   # this session — clarifies the NON-rewrite of skill_lattice_publish
  - skill_git_remote_setup_spec.md          # this session — produces the new skill spec
  - pre_push_hook_spec.md                   # this session — produces the hook spec
  - coord_2026_05_08_publish_rewrite.md     # this session — Daedalus airlock-exemplar memo
related_decisions:
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
  # ADR-008 (airlock template stub, M03) and ADR-009 (naming/repo convention, M07) are
  # forward-references — slots only at this stage.
---

# M01 Obj 4 — Publish-Skill Naming ADR Recommendation (M05-bound)

> **Deliverable 7 of M01** (per [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Deliverables row 7). Recommends the resolution to the publish-skill naming question that mission §Obj 4 left implicit: **rewrite `skill_lattice_publish.md` in place** (the mission spec's literal text) **vs. add a new skill alongside it**. M05 drafts the formal ADR from this recommendation; ratification at M05 close. Companion to [[skill_lattice_publish_rewrite_spec.md|skill_lattice_publish_rewrite_spec.md]] (which clarifies the *non-rewrite* of the existing latlab-registry skill), [[skill_git_remote_setup_spec.md|skill_git_remote_setup_spec.md]], and [[pre_push_hook_spec.md|pre_push_hook_spec.md]].

This is an **ADR-recommendation artifact** — *not* a top-level ADR. It records the campaign's preferred resolution and supplies M05 with the analysis needed to draft the formal ADR. The pattern matches how [[adr_006_github_repo_rename_to_adna.md|ADR-006]] and [[adr_007_outer_adna_claude_md_disposition.md|ADR-007]] were drafted in S2 S2 against [[m01_obj2_migration_runbook.md|m01_obj2_migration_runbook.md]] in S2 S1.

---

## §1 The naming problem

Three publish-flavored skill files exist in the ecosystem, with confusingly similar names doing fundamentally different things:

| File | Vault | Function | Form |
|---|---|---|---|
| `skill_lattice_publish.md` | `adna/.adna/how/skills/` (template) | **Publish a `.lattice.yaml` object to a registry** via `latlab lattice publish` | latlab CLI; federation readiness checks; registry compose/pull |
| `skill_lattice_publish.md` | `Spacemacs.aDNA/how/skills/` | (Inherited / shadowed copy of the template's latlab-registry skill) | latlab CLI |
| `skill_publish_lattice.md` | `Spacemacs.aDNA/how/standard/skills/` | **Publish a vault to a GitHub remote** via rsync into `.publish-clone/` + git push | Bash + rsync; sanitization scan; tarball generation |

Verbatim from [[../../../../../Spacemacs.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md|Spacemacs idea_skill_publish_lattice_git_fix]] §Problem:

> The current `skill_publish_lattice` (in `how/standard/skills/skill_publish_lattice.md` and the aDNA template at `.adna/how/skills/skill_publish_lattice.md`) uses: rsync to copy filtered vault content to a temp directory; a separate `.publish-clone/` git repo that gets pushed to GitHub; the vault itself has no `git remote` — normal git ops don't work.

**Two errors in that quote** (the idea was written 2026-05-07 with one assumption that turned out to be wrong by S2 S3):

1. The aDNA template does **not** have `skill_publish_lattice.md` (verified `find` in S2 S3, 2026-05-08). Only `skill_lattice_publish.md` (note the word order) lives in the template — and *that* file is the **latlab-CLI registry skill**, not the rsync vault publisher.
2. The rsync vault publisher (`skill_publish_lattice.md`) lives **only in Spacemacs's local `how/standard/skills/`**. It is a Spacemacs-local skill that pre-dates the template having any equivalent capability. Spacemacs adopted the rsync workaround in isolation; it never made the round-trip back into the template.

The mission spec ([[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Obj 4) said *"`skill_lattice_publish.md` (rewritten — normal publish flow)"*. Read literally, that would mean rewriting the latlab-registry skill into a git-push skill — losing the registry-publish capability and overloading one filename with two distinct responsibilities. **That literal reading is wrong** — and the mission-spec author (Rosetta, Stage 1 refinement) likely intended the *Spacemacs-local* `skill_publish_lattice.md` as the rewrite target, not the template's `skill_lattice_publish.md`.

This recommendation resolves the ambiguity.

---

## §2 Recommendation

**Two skills, two surfaces, no name collision.**

| Outcome | Action | Path | Status |
|---|---|---|---|
| **A** | **Keep** `skill_lattice_publish.md` exactly as-is — scope unchanged: latlab CLI publishes a `.lattice.yaml` object to a registry. Light v7.0 path-drift updates only (e.g., `cd ~/lattice/lattice-protocol-repo` if any path needs refreshing). | `.adna/how/skills/skill_lattice_publish.md` | Existing skill; M05 verifies + light edits only |
| **B** | **Create new** `skill_vault_publish.md` — vault → GitHub `git push` flow (the work the mission spec describes as "rewritten skill_lattice_publish"). Replaces Spacemacs's local `skill_publish_lattice.md`. | `.adna/how/skills/skill_vault_publish.md` | NEW skill; M05 ships |
| **C** | **Create new** `skill_git_remote_setup.md` — first-time `git remote add` + `gh repo create` flow. Called once per vault. | `.adna/how/skills/skill_git_remote_setup.md` | NEW skill; M05 ships |
| **D** | **Create new** `skill_publish_tarball.md` — optional offline-shipping tarball flow. Extracted from Spacemacs's rsync skill. | `.adna/how/skills/skill_publish_tarball.md` | NEW skill; M05 ships |
| **E** | **Create new** `skill_deploy.md` — installs the pre-push hook to `.git/hooks/pre-push` on every deploy cycle. Idempotent. | `.adna/how/skills/skill_deploy.md` | NEW skill; M05 ships |
| **F** | **Deprecate** Spacemacs-local `skill_publish_lattice.md` and `skill_lattice_publish.md` (the shadowed copy). The deprecation lands when Spacemacs adopts B + C + D + E from the v7.0 template. | `Spacemacs.aDNA/how/standard/skills/skill_publish_lattice.md` + `Spacemacs.aDNA/how/skills/skill_lattice_publish.md` | Deprecated by v3 successor (`campaign_adna_v3_ecosystem_compliance` M05-EC airlock-adoption mission folds this in) |

The `_vault_publish` suffix is **deliberate**:
- Word order disambiguates from the existing `_lattice_publish` (no risk of typo confusion).
- "Vault" is the unambiguous referent for the thing being pushed. "Lattice" is overloaded (a `.lattice.yaml` object is *not* a vault; the existing skill operates on the former, the new skill on the latter).
- The verb-after-noun form (`vault_publish`) matches the existing `lattice_publish` cadence — both names follow a consistent grammar even though they target different objects.

---

## §3 Why not "rewrite in place" (the mission-spec literal reading)

| Concern | Why it disqualifies in-place rewrite |
|---|---|
| **Capability loss** | The current `skill_lattice_publish.md` is the only documented procedure for `latlab lattice publish` / `pull` / `compose`. Rewriting it into a vault-to-GitHub skill would orphan the registry-publish capability. M05 would then need to *re-create* the latlab-registry skill under another name to restore it — net cost: one rename + one documentation churn. |
| **Inheritance / shadowing breakage** | Vaults like Spacemacs already inherit `skill_lattice_publish.md` from the template. Rewriting it in place silently changes what their inherited skill *does* — every vault that hadn't actively used the latlab-registry capability would now find their inherited skill points to a different operation. Names should preserve their referents across version bumps. |
| **Self-reference rule violation** | Standing Order #2 (self-reference is mandatory): the campaign documents the v7.0 *change*; the change preserves backward-compatible names where possible. Renaming the existing skill into a different operation breaks that contract. |
| **Naming-convention friction** | M07 produces ADR-009 (the naming/repo convention codification, per [[../../../campaign_adna_v2_infrastructure.md|campaign master]] amendment). One of ADR-009's thrusts is *names should be stable referents*. Rewriting the skill in place would be the campaign's own first violation of the convention it's about to codify — bad optics, worse precedent. |
| **Operator surprise risk** | Existing operators who run `skill_lattice_publish` in v7.0 expecting the latlab-registry behavior would get a *vault-publish* operation. That's a **silent semantic change** — far worse than a *missing* skill, which would error visibly and prompt the operator to read the v7.0 upgrade guide. |

In contrast, the recommended approach (keep + add) has only one cost: the v7.0 release notes / upgrade guide must explain the two-skill model, and Spacemacs's local rsync skill must be retired during v3 successor adoption. Both costs are bounded.

---

## §4 Implications for the four sibling Obj 4 deliverables

Each of the four artifacts produced this session is renamed or re-anchored under this recommendation:

| Artifact (this session) | Changes from mission-spec literal reading |
|---|---|
| [[skill_lattice_publish_rewrite_spec.md\|skill_lattice_publish_rewrite_spec.md]] | Despite the filename ("rewrite spec"), the spec body documents the **non-rewrite** — what the existing latlab-registry skill does, why M05 leaves it alone, and the minor v7.0 path-drift edits (if any). The filename is preserved to match mission-spec deliverables row 8. |
| [[skill_vault_publish_spec.md\|skill_vault_publish_spec.md]] *(referenced by [[skill_lattice_publish_rewrite_spec.md\|skill_lattice_publish_rewrite_spec.md]] as a sibling)* | NOT produced this session — M05 drafts it. The spec content (the actual `git push` flow, sanitization-via-pre-push-hook, milestone-tag flow) was originally targeted at "rewritten skill_lattice_publish" in the mission spec. M05 absorbs that content into `skill_vault_publish.md`. |
| [[skill_git_remote_setup_spec.md\|skill_git_remote_setup_spec.md]] | Unchanged from mission-spec intent. M05 ships this skill. |
| [[pre_push_hook_spec.md\|pre_push_hook_spec.md]] | Unchanged from mission-spec intent. The pre-push hook serves whichever vault-publish flow is current — the hook is name-agnostic. |

---

## §5 Migration narrative (for the v7.0 release notes)

The narrative for the v7.0 upgrade guide ([[../mission_adna_infra_planning_01.md|mission §Obj 8]] M08a deliverable):

> **v7.0 publish-skill split**: The previous template carried one skill, `skill_lattice_publish.md`, for publishing `.lattice.yaml` objects to a registry via `latlab`. v7.0 keeps that skill unchanged. v7.0 also **adds a new skill, `skill_vault_publish.md`**, for the *separate* operation of publishing a vault to its GitHub remote. Vaults that previously rolled their own rsync-into-`.publish-clone/` workaround (notably Spacemacs.aDNA) should adopt `skill_vault_publish` + `skill_git_remote_setup` + `skill_deploy` (which installs the new pre-push sanitization hook) and retire their local rsync skill. Operators with no prior rsync workaround simply gain a new optional capability with no migration burden.

This narrative is what M08a inserts into `.adna/how/docs/upgrade_v6_to_v7.md` and what M08a's per-vault coord memos reference for the small subset of vaults that actually had a publish ritual.

---

## §6 Forward-references

- **M05** (publish-skill rewrite execution) — drafts the formal ADR from this recommendation; produces the four new skill files; lightly updates the existing `skill_lattice_publish.md`.
- **M07** (general repo review) — runs `skill_freshness` audit (§Obj 7 (a)) on the new skills; ADR-009 codification flags any naming-convention drift the new files might introduce.
- **M08a** (upgrade guide) — surfaces the two-skill model in the v7.0 release notes per §5 above; per-vault memos to Spacemacs reference the migration path.
- **`campaign_adna_v3_ecosystem_compliance` M05-EC** — Spacemacs.aDNA's airlock-adoption mission folds in the deprecation of its local `skill_publish_lattice.md` + `skill_lattice_publish.md` shadowed copy; verifies the v7.0 template skills are the only publish-flavored skills the vault carries.

---

## §7 Self-reference (Standing Order #2)

This recommendation IS itself an exemplar of the convention M07's ADR-009 will codify: a stable referent (`skill_lattice_publish.md`) is preserved across a version bump even when its surrounding ecosystem shifts. The campaign's first action under the new convention is to *not* rename the file the convention will protect. The convention is enforced by demonstration before it is written down.

The dual-skill split also demonstrates the **dual-audience rule** (Standing Order #7) at the skill-naming level: a developer scanning `.adna/how/skills/` and wondering "what does the publish flow look like?" sees both files, reads their distinct triggers, and immediately understands the model — registry publish vs. vault publish, two different tools for two different jobs. A newcomer doesn't need to discover the historical rsync workaround; they meet the v7.0 model without prior context.

---

## §8 Operator ratification

Operator ratifies this recommendation to `accepted` at M05 start (Standing Order #1: phase gates are human gates). M05 then drafts the formal ADR (numbered ADR-010 in the campaign's ADR sequence — ADR-008 = airlock-stub-M03, ADR-009 = naming-convention-M07, ADR-010 = publish-naming-M05). The formal ADR's `Decision` block will quote §2 of this recommendation verbatim or close to it.

Status now: **recommendation, ready for M05**.
