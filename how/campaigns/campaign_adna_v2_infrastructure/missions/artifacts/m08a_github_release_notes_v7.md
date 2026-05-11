---
type: artifact
artifact_type: release_notes_draft
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 3
target_missions:
  - M06  # publishes this body at the v7.0 tag-time GitHub release form
  - M08b  # may collect post-tag receipts and link them back here
created: 2026-05-11
updated: 2026-05-11
status: draft
delivery_held_until: M06-tag-ship
last_edited_by: agent_stanley
publication_url_target: "https://github.com/LatticeProtocol/adna/releases/new?tag=v7.0"
embargo_partner_acknowledgments:
  wilhelm_foundation: ADR-010-window  # WilhelmAI ADR 010 currently signed Chief Steward, pending Wilhelm batch co-sign at MP0-1
  tapp: operator-approval
  super_league: operator-approval
tags: [artifact, mission_deliverable, m08a, obj3, release_notes, v7_0, github_release, draft, embargo_partner_acks, m06_input]
related_artifacts:
  - m01_obj8_upgrade_guide_v6_to_v7.md      # the migration pointer this release notes points at
  - m08a_upgrade_guide_publication_log.md   # finalization log for the upgrade guide
  - m01_obj6_version_bump_checklist.md      # §6 release notes template — the scaffold for this draft
  - m01_obj6_semver_discipline_adr.md       # ADR-011 recommendation referenced in the body
  - m02_obj5_ecosystem_baseline_locked.md   # §4 public-announcement workstream items
  - m08a_readme_badge_spec.md               # sibling deliverable
  - m08a_social_comms_post_draft.md         # sibling deliverable
related_decisions:
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
  - adr_009_aDNA_naming_convention.md
  # ADR-008 / ADR-010 / ADR-011 forward-referenced; status checked at M06 tag time
---

# M08a Obj 3a — GitHub Release Notes (v7.0) Draft

> **Deliverable 3a of M08a** (per [[../mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos.md|mission spec]] §Deliverables row 3a). The body M06 pastes into `https://github.com/LatticeProtocol/adna/releases/new?tag=v7.0` after `git tag -a v7.0` lands per [[m01_obj6_version_bump_checklist.md|M01 Obj 6 version bump checklist]] §5–§6. This draft inherits §6's template scaffold and adds (a) M08a-specific cross-reference closure to the finalized upgrade guide, (b) ADR-010 embargo markers on Wilhelm-affiliated mentions, (c) M06 operator notes on placeholder fills.
>
> **Status**: `draft`. Publication is operator-gated at M06 tag time. Wilhelm-affiliated acknowledgments held by `delivery_held_until: ADR-010-window` — M06 must verify Wilhelm Anchor co-sign before publishing those lines.

---

## §0 M06 publication instructions

1. Confirm preconditions per [[m01_obj6_version_bump_checklist.md|M01 Obj 6 checklist]] §0 (P-1 through P-6).
2. Run §5 of the version bump checklist (`git tag -a v7.0 ...` + `git push origin v7.0`).
3. Open `https://github.com/LatticeProtocol/adna/releases/new?tag=v7.0`.
4. **Title**: paste from §1 below verbatim.
5. **Body**: paste from §2 below verbatim, then perform the **placeholder fills** listed in §3.
6. **Embargo check**: review §4 before clicking "Publish release". If Wilhelm Anchor batch co-sign on WilhelmAI ADR 010 has not landed by M06 tag time, redact the Wilhelm acknowledgment line per §4.
7. Click "Publish release". Run [[m01_obj6_version_bump_checklist.md|§7 post-tag verification]].

---

## §1 Title

```
aDNA v7.0 (Governance) — Flat repo, node.aDNA, publish-skill rewrite
```

---

## §2 Body (paste verbatim, then apply §3 fills)

```markdown
## aDNA Governance v7.0

**Major Governance bump.** Standard track unchanged (stays at v2.2).

This is the first release ratified under the explicit semver discipline ADR (ADR-011). Two-track Major.Minor-only — see the [Version Policy section in CHANGELOG.md](https://github.com/LatticeProtocol/adna/blob/main/CHANGELOG.md#version-policy) for the full rules.

### What's in v7.0 (highlights)

**Breaking changes** (two migration steps required):

- **Repo flatten**: `.adna/` IS the git repo. The two-level `adna/.adna/` structure is gone. New clone target: `git clone https://github.com/LatticeProtocol/adna.git .adna`. Existing operators run the in-place migration documented in the upgrade guide. (Per ADR-006 + ADR-007.)
- **Publish-skill family rewrite**: vault publish now uses standard `git push origin main` via the new `skill_vault_publish`. The legacy `.publish-clone/` rsync workaround is retired. Each vault runs `skill_git_remote_setup` (one-time per vault for any vault without a configured remote) + `skill_deploy` (idempotent pre-push hook installer). (Per ADR-010.)

**New patterns** (additive, opt-in — adopt at your own pace):

- **`node.aDNA/` opt-in pattern**: local-node operational inventory vault (Hestia persona). Per-machine inventory for software, compute resources, credentials, and change history. Forward-reference to `aDNA.aDNA/how/campaigns/` per ADR-004.
- **Airlock template stub** at `/.adna/how/airlock/AIRLOCK.md` — vault-agnostic cross-vault coordination surface. Adoption is opt-in per vault (per ADR-008).
- **Naming convention codified** (ADR-009): `<name>.aDNA/` directory ↔ `<name>.aDNA.git` GitHub repo isomorphism. Existing non-conformant repos are grandfathered (4 hyphen-flat + 1 path-style + 7 no-remote + 2 external-partner-namespaced); no forced renames. New vaults default to the canonical pattern via `skill_project_fork.md` warnings.
- **Workspace router template** `template_workspace_claude.md` extracted from the legacy outer wrapper per ADR-007. Directly installable to `~/lattice/CLAUDE.md`.
- **`LatticeScope.aDNA` planning campaign** seeded for the next observability-platform initiative (Prometheus persona). Vault construction is a successor campaign.

**Pull-based changes** (just `git pull` your `.adna/` clone when you're ready):

- **GitHub repo renamed** `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/adna` (per ADR-006). URL forwarding preserves existing clones; new clones use the canonical short-name URL.
- **`deploy_manifest.yaml`** moved to `.github/deploy_manifest.yaml` with simplified post-flatten `sync_includes:` paths.
- **CI workflow caller-usage URLs** updated to `LatticeProtocol/adna` in 3 reusable workflows.
- **Template-root `.gitignore`** created with the v7.0 exclusion set (`deploy/`, `what/local/`, `how/local/`, `who/operators/`, `dist/`, `.publish-clone/`, `.publish-clone.bak/`, `private/`, `*.dryrun.log`, `*.tar.gz`).
- **Stale Standard footer** at `adna_standard.md` line 1483 corrected (`v2.0` → `v2.2`; the title at line 3 was always canonical at `v2.2`).

**Security**:

- **Pre-push sanitization hook** (LAYER_CONTRACT §4 v0.1): 7 rules (path leakage / secret patterns / filename patterns / large binaries / frontmatter confidential / frontmatter draft / operator deny list). Installed via `skill_deploy`. Bypassable with `--no-verify` (operator-discretionary; not recommended).

### Migration

→ See **[`how/docs/upgrade_v6_to_v7.md`](https://github.com/LatticeProtocol/adna/blob/main/how/docs/upgrade_v6_to_v7.md)** or the published version at **[`adna-docs.vercel.app/learn/upgrade-v6-to-v7`](https://adna-docs.vercel.app/learn/upgrade-v6-to-v7)**.

The upgrade guide ships **pre-flatten** so operators have actionable migration steps in hand before their structure breaks. Per-vault coordination memos have been delivered to active ecosystem vaults; partner-affiliated vaults receive coordinated drafts at their respective operator gates.

**Existing clones**: GitHub URL forwarding works indefinitely. To update to the canonical URL:

    git remote set-url origin https://github.com/LatticeProtocol/adna.git

**Validation runbook**: 10-row table in [§6 of the upgrade guide](https://github.com/LatticeProtocol/adna/blob/main/how/docs/upgrade_v6_to_v7.md#6-validation-runbook) — `command + expected output + failure pointer` for each post-migration check.

### What did NOT change

- **Standard track stays at v2.2.** No changes to triad structure, object schemas, FAIR envelope, or RFC 2119 conformance rules. Existing v6.0-conformant vaults remain fully conformant under Standard v2.2.
- The latlab CLI registry skill (`skill_lattice_publish.md`) is unchanged — light path-drift edits only; scope unchanged.
- Existing `.aDNA` projects continue to operate. **You can stay on v6 indefinitely** — v7.0 is non-coercive. The successor campaign `campaign_adna_v3_ecosystem_compliance` handles per-vault v7.0 application at each operator's pace.

### ADRs ratified at this tag

- **ADR-006** — GitHub repo rename (accepted at P0→P1 gate)
- **ADR-007** — Outer wrapper → workspace template (accepted at P0→P1 gate)
- **ADR-008** — Airlock template stub (ratified at M03 phase gate)
- **ADR-009** — Naming convention (accepted at P0→P1 gate)
- **ADR-010** — Publish-naming family (ratified at M05 close)
- **ADR-011** — Semver discipline (this release is the first governed by it; ratified at M06 close)

All ADRs live in [`what/decisions/`](https://github.com/LatticeProtocol/adna/tree/main/what/decisions).

### Full changelog

[CHANGELOG.md v7.0 entry](https://github.com/LatticeProtocol/adna/blob/main/CHANGELOG.md#v70--YYYY-MM-DD).

### Acknowledgments

Coordination across the active ecosystem made this release possible. Particular thanks to the Spacemacs.aDNA / Daedalus collaboration that filed the original `skill_publish_lattice` git-fix backlog idea — that surfaced as ADR-010 and the publish-skill family rewrite that this release ships.

<!-- ADR-010 embargo guard — M06 publish operator must verify WilhelmAI ADR 010 Wilhelm Anchor co-sign before publishing the line below. If Wilhelm batch co-sign at MP0-1 has not landed by M06 tag time, redact this line; M08b adds it post-Wilhelm-co-sign. -->
The Wilhelm AI Initiative for the Undiagnosed (AI4U) — a program of the Wilhelm Foundation — co-stewards the Rare-AI Archive within the active ecosystem; the v7.0 governance lift is mindful of the partner-org vault topology that AI4U has built.
<!-- end embargo-guarded line -->
```

---

## §3 Placeholder fills (apply at M06 tag time)

| Placeholder | Where | Fill value | Source |
|---|---|---|---|
| `YYYY-MM-DD` in `CHANGELOG.md#v70--YYYY-MM-DD` anchor | Body §"Full changelog" link | The actual M06 tag execution date | M06 execution session |
| ADR-008 status note (`ratified at M03 phase gate`) | Body §"ADRs ratified at this tag" | Verify current status; if not yet ratified at M06 time, change to `proposed (M03 deferred — see ADR file)` | `what/decisions/adr_008_*.md` status field |
| ADR-010 status note (`ratified at M05 close`) | Body §"ADRs ratified at this tag" | Verify status; same rule as ADR-008 | `what/decisions/adr_010_*.md` status field |
| ADR-011 status note (`ratified at M06 close`) | Body §"ADRs ratified at this tag" | Verify M06 phase gate ratified ADR-011 before publishing release | `what/decisions/adr_011_*.md` status field |
| Repo name in CHANGELOG link | Body §"Full changelog" link | Should already be `adna` post-rename; verify the URL works | `https://github.com/LatticeProtocol/adna` |

---

## §4 Embargo guard — Wilhelm acknowledgment

The acknowledgment paragraph naming **Wilhelm AI Initiative for the Undiagnosed (AI4U)** is wrapped in HTML comments. **Before publishing the release**, M06 must verify:

1. **WilhelmAI ADR 010 status**: `signed_chief_steward_pending_wilhelm_batch_co_sign` → has it advanced to fully Wilhelm-co-signed? Check `WilhelmAI.aDNA/what/decisions/adr_010_ra_publishing_contract.md` frontmatter `co_signed_by` field.
2. **AI4U attribution form**: the published line uses the **canonical first-mention form** per WilhelmAI ADR 001 §1: "Wilhelm AI Initiative for the Undiagnosed (AI4U)". Subsequent mentions in the same surface use "AI4U" only.
3. **Voice-register check**: the line uses PLWUD-respectful framing per WilhelmAI ADR 002 §3. No mining-of-pain language; partner-org topology framed as collaborative.

**Embargo decision tree**:

- If Wilhelm Anchor co-sign on ADR 010 has landed → publish the acknowledgment as written.
- If Wilhelm Anchor co-sign has NOT landed → redact (delete) the embargo-guarded line. M08b adds it as a post-tag GitHub release-notes edit once co-sign lands.
- If uncertain → escalate to operator. **Do not publish on guess.**

**TAPP** (`strategic_interface_protocol`) and **Super League Enterprise** (`SuperLeague.aDNA` via Smarter With Science LLC): no acknowledgment lines in this release notes draft. Their coord memo drafts at `who/coordination/coord_2026_05_09_v7_<vault>.md` carry `delivery_held_until: operator-approval`; addition of any acknowledgment to public release notes is operator-gated and not in scope for this draft.

---

## §5 Cross-references + status

**Inputs consumed**:

- [[m01_obj6_version_bump_checklist.md|M01 Obj 6 §6 release notes template]] — scaffold for §2 of this artifact.
- [[m01_obj8_upgrade_guide_v6_to_v7.md|Finalized upgrade guide]] — the migration pointer §2 links at twice.
- [[m08a_upgrade_guide_publication_log.md|Publication log]] — finalization context for the migration pointer link.
- [[m02_obj5_ecosystem_baseline_locked.md|M02 Obj 5 locked baseline]] §4 — public-announcement workstream items + Wilhelm/TAPP/SuperLeague embargo discipline.
- `WilhelmAI.aDNA/what/decisions/adr_010_ra_publishing_contract.md` (read-only) — embargo status field + first-mention attribution discipline.

**Outputs consumed by**:

- M06 (forward) — pastes §1 title + §2 body verbatim at tag time; applies §3 fills; honors §4 embargo guard.
- M08b (forward) — may add the Wilhelm acknowledgment line post-Wilhelm-co-sign if redacted at M06 publish time.
- [[m08a_readme_badge_spec.md|README badge spec]] (sibling) — references this artifact for the v7.0 announcement context.
- [[m08a_social_comms_post_draft.md|Social/comms post draft]] (sibling) — long-form blog draft cross-links the release notes page after publish.

**Status**: `draft`. Body is final-form per M01 Obj 6 §6 template + M08a-specific cross-reference closure. Publication is operator-gated at M06 tag ship (`delivery_held_until: M06-tag-ship`).

---

## §6 Self-reference + dual-audience (Standing Orders #2 + #7)

**Self-reference**: This artifact IS the operator-facing announcement of the campaign that produced it — including the ADR (ADR-011) that codifies the semver discipline this release is the first to ratify. The release notes body §"What's in v7.0" mirrors the campaign mission tree (M03 = flatten; M04 = node.aDNA; M05 = publish-skill rewrite; etc.); a reader of the release notes can read the campaign's structure from the announcement alone. The §"What did NOT change" subsection is itself the non-coercive policy this campaign asserted at its Strategic Intent — published verbatim to the operator surface.

**Dual-audience**:

- **Developer reads** §"What's in v7.0" (the three lists of breaking / new / pull-based, each with concrete file paths + ADR cross-links + per-vault action items), §"Migration" (command-level `git remote set-url`), §"ADRs ratified" (link to each ADR file). Scannable, mechanical, actionable.
- **Newcomer reads** the opening paragraph (Major Governance, Standard unchanged), §"What did NOT change" (reassures stay-on-v6 is fine), §"Acknowledgments" (frames the release as collaborative). Plain language, every concept linked.

Both reads land at the same conclusion: **v7.0 ships infrastructure improvements; you can adopt at your own pace; the migration guide is the entry point.**
