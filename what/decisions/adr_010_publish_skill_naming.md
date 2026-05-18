---
type: decision
adr_id: ADR-010
adr_number: 10
title: "Publish-skill naming: Keep skill_lattice_publish.md, Add skill_vault_publish.md (no in-place rewrite)"
status: accepted
accepted_at: 2026-05-18
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_05_publish_skill_rewrite
deciders:
  - agent_stanley (operator ratification, 2026-05-18 at M05 S1)
  - rosetta (aDNA.aDNA persona; signed naming recommendation §6, 2026-05-08T20:38:49Z)
  - daedalus (Spacemacs.aDNA persona; co-signed coord_2026_05_08_publish_rewrite.md §6, 2026-05-08T21:03:45Z)
created: 2026-05-18
updated: 2026-05-18
last_edited_by: agent_stanley
tags: [decision, adr, publish_skill, naming, naming_stability, v7_0, m05, rosetta, daedalus, airlock_pattern]
related_artifacts:
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj4_publish_naming_adr.md
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/skill_lattice_publish_rewrite_spec.md
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/skill_git_remote_setup_spec.md
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/pre_push_hook_spec.md
  - who/coordination/coord_2026_05_08_publish_rewrite.md
related_decisions:
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
  - adr_008_airlock_template_stub.md
  - adr_009_aDNA_naming_convention.md
---

# ADR-010 — Publish-Skill Naming: Keep + Add

## Status

**Accepted** — 2026-05-18 by operator ratification at M05 first-execution-session.

Co-signed by:
- **Rosetta** (aDNA.aDNA, standard-producer) — naming recommendation §6 (2026-05-08T20:38:49Z)
- **Daedalus** (Spacemacs.aDNA, standard-consumer) — coord memo §6 (2026-05-08T21:03:45Z), accepted the design delta unconditionally
- **Operator** (agent_stanley) — M05 S1 ratification gate (2026-05-18)

## Context

Three publish-flavored skill files existed in the ecosystem prior to v7.0, with confusingly similar names doing fundamentally different things:

| File | Vault | Function | Form |
|---|---|---|---|
| `skill_lattice_publish.md` | `.adna/how/skills/` (template) | Publishes a `.lattice.yaml` object to a registry via `latlab lattice publish` | latlab CLI |
| `skill_lattice_publish.md` | `Spacemacs.aDNA/how/skills/` | (Inherited / shadowed copy of the template's latlab-registry skill) | latlab CLI |
| `skill_publish_lattice.md` | `Spacemacs.aDNA/how/standard/skills/` | Publishes a vault to a GitHub remote via rsync into `.publish-clone/` + git push | Bash + rsync; ad-hoc sanitization; tarball generation |

Spacemacs.aDNA's local rsync vault publisher (`skill_publish_lattice.md`, note word order — *publish-lattice*) pre-dated the template having any equivalent capability. Spacemacs adopted the rsync workaround in isolation; it never made the round-trip back into the template. Spacemacs surfaced the bug as `idea_skill_publish_lattice_git_fix.md` (2026-05-07, Daedalus), promoting it to upstream resolution at `mission_adna_infra_planning_01` Obj 4.

The mission spec's literal text ("`skill_lattice_publish.md` (rewritten — normal publish flow)") implied an in-place rewrite of the latlab-registry skill into a vault publisher. M01 Stage 2 Session 3 (2026-05-08) identified that this literal reading would:

1. Orphan the latlab-registry capability (no other skill documents `latlab lattice publish/pull/compose`).
2. Silently change the operation of `skill_lattice_publish.md` for all vaults inheriting it.
3. Violate Standing Order #2 (self-reference) by breaking the naming-stability rule M07/ADR-009 codifies.
4. Force operators to discover the semantic change at runtime rather than at upgrade-guide read time.

## Decision

**Keep `skill_lattice_publish.md` unchanged. Add `skill_vault_publish.md` as a NEW separate skill.**

The v7.0 publish-skill family becomes:

| Skill | Status | What it does |
|---|---|---|
| `skill_lattice_publish.md` | **Existing — light edits only** | Publishes a `.lattice.yaml` *object* to a registry via `latlab lattice publish`. Scope unchanged. Light v7.0 edits: cross-link to `skill_vault_publish.md`, path-drift correction (`lattice-protocol-repo` → `lattice-protocol`), frontmatter `updated:` + `tags:` add `lattice_object`, Related-block cross-links. |
| `skill_vault_publish.md` | **NEW (v7.0)** | Publishes a *vault* to its GitHub remote via `git push`. Sanitization runs as a pre-push hook. Optional milestone tag. Receipt at `who/peers/published/<UTC>.md`. |
| `skill_git_remote_setup.md` | **NEW (v7.0)** | First-time remote configuration: `gh repo create` + `git remote add origin` + initial `git push -u`. Called once per vault. Idempotent. Naming-convention lint (informational at v7.0 ship; default-on once ADR-009 hard-enforcement passes M07 audit). |
| `skill_deploy.md` | **NEW (v7.0)** | Installs the pre-push sanitization hook to `.git/hooks/pre-push`. Idempotent self-test. Runs on every deploy/upgrade cycle. |
| `skill_publish_tarball.md` | **NEW (v7.0)** | Optional offline-shipping tarball generator via `git archive` + sha256 manifest sidecar. For operators who need reproducible offline artifacts independent of GitHub. |

Plus the underlying infrastructure:

| Artifact | Path | Purpose |
|---|---|---|
| `pre-push-sanitize.sh` | `.adna/how/standard/hooks/pre-push-sanitize.sh` | The pre-push hook script. LAYER_CONTRACT_VERSION=4.0.1. 7 sanitization rules (R1-R7). |

The `_vault_publish` suffix is deliberate: word order disambiguates from `_lattice_publish` (no typo confusion); "vault" is the unambiguous referent (a `.lattice.yaml` object is *not* a vault); the verb-after-noun cadence matches the existing skill name even though the targets differ.

## Consequences

### Positive

- **Naming stability honored**: `skill_lattice_publish.md` preserves its referent across the v6→v7 bump. The campaign's first action under M07/ADR-009 naming-convention codification is to *not* rename the file the convention will protect. The convention is enforced by demonstration before it is written down.
- **Inheritance / shadowing preserved**: Every vault inheriting `skill_lattice_publish.md` from the template continues to see the same operation. No silent semantic changes.
- **Bilateral airlock-pattern exemplar**: The naming-recommendation co-sign with Daedalus (Spacemacs.aDNA) is the campaign's first cross-graph airlock-pattern exercise originating from `aDNA.aDNA/`. The memo's structure (request → handshake → response → co-sign) becomes the prototype for v3 successor vault-local airlock adoption (see `coord_2026_05_08_publish_rewrite.md` §7).
- **Clear migration path**: Spacemacs adopts the v7.0 family (Steps 1-4 of coord memo §4) post-M05 ship; existing rsync skill stays `status: deprecated` until v3 successor retirement.
- **Dual-audience legible**: A developer scanning `.adna/how/skills/` sees two files with distinct triggers and immediately understands the model (registry publish vs. vault publish). A newcomer meets the v7.0 model without needing to discover the historical rsync workaround.

### Negative

- **Two-skill model requires v7.0 upgrade-guide explanation**: The release notes must describe registry-publish vs. vault-publish distinction. Bounded cost: ~1 paragraph in `M08a` upgrade guide (already shipped — see `m01_obj4_publish_naming_adr.md` §5 narrative).
- **Spacemacs's local rsync skill must retire**: ~30 min of work per Spacemacs (Steps 5-8 of coord memo §4), deferred to `campaign_adna_v3_ecosystem_compliance` M05-EC. Bounded.

### Neutral

- **5 new skills ship at v7.0 instead of 1 rewritten skill**: more files, but each has a single responsibility (Standing Order #7 dual-audience: developer-legible separation of concerns).

## Alternatives considered

### Alternative 1: In-place rewrite of `skill_lattice_publish.md`

Rewrite the existing skill into a vault publisher (the mission spec's literal text). **Rejected** because:

| Concern | Why it disqualifies |
|---|---|
| Capability loss | Orphans `latlab lattice publish/pull/compose` documentation. M05 would need to re-create the latlab-registry skill under another name. Net cost: one rename + one documentation churn. |
| Inheritance / shadowing breakage | Vaults inheriting `skill_lattice_publish.md` would silently get a different operation. Names should preserve referents across version bumps. |
| Self-reference rule violation | Standing Order #2: the campaign documents the v7.0 change while preserving backward-compatible names where possible. |
| Naming-convention friction | M07/ADR-009 codifies "names should be stable referents". Rewriting in place would be the campaign's own first violation of the convention it's about to codify. |
| Operator surprise risk | Silent semantic change is worse than a missing skill (the latter errors visibly and prompts re-reading the upgrade guide). |

### Alternative 2: Rename the existing skill (e.g., `skill_lattice_object_publish.md`) + add new vault-publish skill

Renames the existing skill to a more disambiguating name (e.g., `skill_lattice_object_publish.md`) and adds the new vault publisher. **Rejected** because:

- Rename still breaks inheritance / shadowing — every vault inheriting the old name finds it missing at next `git -C .adna pull`.
- The naming-stability rule still loses force — a stable referent is more valuable than a perfectly-disambiguating name.
- The existing name (`skill_lattice_publish.md`) is already unambiguous within its category: it operates on `.lattice.yaml` objects. The "lattice" in the name refers to the object type, not a category. The disambiguation lives in the co-located `skill_vault_publish.md` cross-link.

### Alternative 3: Defer the new vault publisher to v8.0

Ship v7.0 with only the light-edits to `skill_lattice_publish.md`; defer the vault publisher to v8.0 (`campaign_adna_serious_tool_readiness`). **Rejected** because:

- Spacemacs's backlog idea is already filed and Daedalus expects v7.0 ship — deferring would re-open the coord memo.
- The vault publisher is a foundational v7.0 capability (no rsync workaround needed for new vaults); deferring blocks operators who need the new capability immediately.
- The vault publisher unblocks `campaign_adna_v3_ecosystem_compliance` M05-EC (Spacemacs migration) — deferral cascades downstream.

## Implementation

M05 (`mission_adna_infra_p1_05_publish_skill_rewrite`) executes against this decision. Deliverables:

1. This ADR (`adr_010_publish_skill_naming.md`) — `status: accepted` on operator ratification.
2. Light-edit `skill_lattice_publish.md` per `skill_lattice_publish_rewrite_spec.md` §2 (5 small edits).
3. Author `skill_vault_publish.md` per `skill_lattice_publish_rewrite_spec.md` §3.
4. Author `skill_git_remote_setup.md` per `skill_git_remote_setup_spec.md` §6.
5. Author `.adna/how/standard/hooks/pre-push-sanitize.sh` per `pre_push_hook_spec.md` §3+§4.
6. Author `skill_deploy.md` per `skill_lattice_publish_rewrite_spec.md` §6 sketch.
7. (Optional) `skill_publish_tarball.md` sketch.
8. Update CHANGELOG v7.0 entry to reference the new publish-skill family.

## Migration narrative (v7.0 release notes)

Three vault classes:

| Class | Action | Effort |
|---|---|---|
| **A — Vault has no prior publish ritual** (most aDNA ecosystem vaults) | If the vault wants GitHub publish: run `skill_git_remote_setup` once, then use `skill_vault_publish`. If it doesn't: ignore the new skills. | Zero migration burden if not adopting; ~5 min if adopting |
| **B — Vault uses the latlab-registry skill** (`skill_lattice_publish.md`) | No change to existing operation. Read the new cross-link if you also want to GitHub-publish the vault. | Zero migration burden |
| **C — Vault uses an rsync-based vault publisher** (presently only Spacemacs.aDNA's `skill_publish_lattice.md`) | Adopt the v7.0 family. Delete the local rsync skill and `.publish-clone/` directory. | ~30 min per vault; covered by `campaign_adna_v3_ecosystem_compliance` M05-EC |

## Self-reference (Standing Order #2)

This ADR IS the v7.0 demonstration of the naming-stability rule it codifies in concert with ADR-009. A reader can verify the rule in action: open `skill_lattice_publish.md` post-v7.0 and observe that its scope is unchanged from v6.0 — the v7.0 bump touched it only in cross-links and a path-drift correction, not in operation. The convention is enforced by the campaign before it is written down.

## Related

- **`adr_006_github_repo_rename_to_adna.md`** — template repo rename (informs new-clone-URL references in `skill_git_remote_setup.md`).
- **`adr_007_outer_adna_claude_md_disposition.md`** — workspace-vault boundary (informs template-path conventions).
- **`adr_008_airlock_template_stub.md`** — airlock pattern stub (the coord-memo airlock structure this ADR's Daedalus co-sign demonstrated).
- **`adr_009_aDNA_naming_convention.md`** — codifies the naming convention this ADR honors.
- **`m01_obj4_publish_naming_adr.md`** — the recommendation this ADR formalizes.
- **`coord_2026_05_08_publish_rewrite.md`** — the cross-graph co-sign with Daedalus that pre-cleared the design.
