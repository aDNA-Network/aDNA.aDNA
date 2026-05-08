---
type: artifact
artifact_type: coord_memo_template
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 8
target_missions:
  - M08a  # delivers ~17 instances of this template (one per vault) pre-flatten
  - M08b  # collects acknowledgment receipts post-flatten
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj8, coord_memo_template, per_vault, m08a, m08b, airlock_pattern, external_operator_variant, dual_audience]
related_artifacts:
  - m01_obj0_ecosystem_matrix.md           # source: 19-vault inventory + per-change blast radius + external operators
  - m01_obj8_upgrade_guide_v6_to_v7.md     # paired sibling — operators read the upgrade guide for "what changes"; this memo for "what YOU specifically do"
  - m01_obj4_publish_naming_adr.md         # source: M05 publish-skill rewrite specifics
related_decisions:
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
  - adr_009_aDNA_naming_convention.md
  # ADR-008 (airlock stub, M03), ADR-010 (publish-naming, M05), ADR-011 (semver, M06) — forward-references.
ancestor_template:
  - /Users/stanley/lattice/aDNA.aDNA/who/coordination/coord_2026_05_08_publish_rewrite.md  # airlock structure inherited verbatim
---

# Per-Vault v7.0 Coordination Memo — Template

> **Deliverable 24 of M01** (per [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Deliverables row 24 — re-numbered to avoid collision with Obj 7's deliverables 12a/12b authored at S2 S4). M08a fills in the variables for each of ~17 per-vault instances and delivers them to each vault's `who/coordination/` directory before the v7.0 flatten lands. Inherits the airlock-pattern structure (header → request → handshake → response → co-sign) from [[../../../../who/coordination/coord_2026_05_08_publish_rewrite.md|coord_2026_05_08_publish_rewrite.md]] (the Rosetta ↔ Daedalus publish-rewrite memo, which is the campaign's first cross-graph airlock-pattern exercise).
>
> **Use**: M08a copies this template once per vault, fills in `{{VARIABLES}}`, mirrors the file into the target vault's `who/coordination/`, and (for Wilhelm-affiliated vaults) creates a Wilhelm Foundation-side mirror per WilhelmAI ADR 010 publication-timing rules.

---

## Variables to fill (M08a per-vault checklist)

Replace each `{{VARIABLE}}` token below before delivering the memo:

| Variable | Description | Example value |
|---|---|---|
| `{{VAULT_NAME}}` | Target vault directory name | `Spacemacs.aDNA` |
| `{{VAULT_PERSONA}}` | Vault persona (lowercase) | `daedalus` |
| `{{VAULT_PERSONA_TITLE}}` | Persona title-case for prose | `Daedalus` |
| `{{VAULT_CATEGORY}}` | Vault category per workspace router | `IDE-governance`, `Forge`, `Platform`, `Org-Vault`, `Framework`, `Standard-dev`, `Engagement` |
| `{{REMOTE_STATE}}` | Current remote state | `none`, `LatticeProtocol-origin`, `external-org-origin`, `non-standard-local-path`, `personal-namespace-origin` |
| `{{REMOTE_URL}}` | Current `git remote -v` origin URL (or "none") | `github.com/LatticeProtocol/Spacemacs.aDNA.git` or `(none)` |
| `{{PUBLISH_SKILL_PRESENT}}` | Whether `how/skills/skill_lattice_publish.md` is present | `Y` or `N` (only `wga.aDNA` is `N` — has no `how/skills/` at all) |
| `{{HAS_PUBLISH_CLONE}}` | Whether `.publish-clone/` directory exists | `Y` or `N` (only Spacemacs is `Y`) |
| `{{AIRLOCK_ELIGIBLE}}` | Whether vault is a candidate for airlock adoption | `Y` (Forges, Platforms, vaults with cross-graph traffic), `N` (single-operator projects) |
| `{{NAMING_CONFORMS}}` | Whether vault directory + GitHub repo name conform to ADR-009 | `Y` (e.g. `aDNA.aDNA` ↔ `aDNA.aDNA.git`), `N` (e.g. `science-stanley-adna` hyphen-flat), `n/a` (no remote yet) |
| `{{OPERATOR_CLASS}}` | Operator classification | `LatticeProtocol-internal`, `external-org`, `joint-venture`, `engagement-partner`, `personal-namespace` |
| `{{EXTERNAL_PARTY}}` | If external, the partner org (else empty) | `Wilhelm Foundation`, `TAPP Strategic Intelligence`, `Super League Enterprise via Smarter With Science LLC`, or empty |
| `{{DELIVERY_DATE}}` | Date M08a delivered the memo | `2026-MM-DD` |
| `{{V7_TAG_DATE}}` | Actual v7.0 tag date (filled by M08b) | `2026-MM-DD` (during M06) |
| `{{REQUESTING_AGENT}}` | Operator account delivering the memo | `agent_stanley` |
| `{{AUDIT_ID}}` | Unique audit identifier | `adna_v2_m08a_{{vault_name_snake}}_v7_coord` |

**Guidance for tricky variables**:

- `{{REMOTE_STATE}} = none` if `git remote -v` returns empty. If non-empty but the URL is a local path (LPWhitepaper case), use `non-standard-local-path`. If it points at `ScienceStanley/...` (la_startup), use `personal-namespace-origin`. If it points at a non-LatticeProtocol GitHub org (Wilhelm-Foundation), use `external-org-origin`.
- `{{AIRLOCK_ELIGIBLE}}`: refer to per-vault category. Defaults: Forges = Y, Platforms = Y, Frameworks = Y, Org-Vaults = N (operator-discretionary), engagement vaults = Y (cross-org), Standard-dev (this vault) = Y. Single-operator projects (zeta) = N.
- `{{NAMING_CONFORMS}}`: see [[m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §1 for which 4 vaults are non-conformant (`science-stanley-adna`, `wga-adna`, `context-commons-adna`, `LAStartupLattice`).
- `{{EXTERNAL_PARTY}}`: applies to RareArchive + WilhelmAI (Wilhelm Foundation), strategic_interface_protocol (TAPP), SuperLeague (Super League). Other vaults leave blank.

---

# {{VAULT_NAME}} — aDNA v7.0 Coordination Memo

```yaml
---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → {{VAULT_NAME}} — aDNA v7.0 Adoption"
status: open  # flips to `completed` when §6 is co-signed
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: {{VAULT_NAME}}
receiving_persona: {{VAULT_PERSONA}}
requesting_agent: {{REQUESTING_AGENT}}
created: {{DELIVERY_DATE}}
updated: {{DELIVERY_DATE}}
last_edited_by: {{REQUESTING_AGENT}}
priority: medium
deadline: pre-{{VAULT_NAME}}-v7-migration
audit_id: {{AUDIT_ID}}
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 8
target_mission: M08a
mirror: /Users/stanley/lattice/{{VAULT_NAME}}/who/coordination/coord_{{DELIVERY_DATE}}_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: {{OPERATOR_CLASS}}
external_party: {{EXTERNAL_PARTY}}
tags: [coordination, cross_graph, v7_0_adoption, rosetta, {{VAULT_PERSONA}}, m08a, m08b, airlock_pattern]
---
```

---

## §1 Airlock entry — what graph this is, why you're reading

> *Airlock convention*: external agents entering `{{VAULT_NAME}}` from another context graph start at `who/coordination/` for cross-graph operational state. (This memo's airlock structure is inherited from [[../../../../who/coordination/coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]] §1, the campaign's first cross-graph airlock-pattern exercise.)

**aDNA.aDNA is the self-referential aDNA documentation vault** — Operation Rosetta. It governs the aDNA standard's evolution; `campaign_adna_v2_infrastructure` produces aDNA Governance v7.0. Persona: Rosetta.

**{{VAULT_NAME}} is a {{VAULT_CATEGORY}}** in the lattice ecosystem. Persona: {{VAULT_PERSONA_TITLE}}. As a v6.0 consumer of the aDNA template, {{VAULT_NAME}} adopts the v7.0 changes per its operator's schedule (v7.0 is non-coercive).

This memo crosses from aDNA.aDNA (the standard producer) to {{VAULT_NAME}} (a standard consumer) because v7.0 lands two breaking changes — the repo flatten and the publish-skill family rewrite — that affect every vault. The migration is operator-driven; this memo lays out exactly what {{VAULT_NAME}} needs to do, when, and what is optional vs required.

---

## §2 What's changing in v7.0 (one-paragraph version)

aDNA v7.0 is a Major Governance bump (Standard track unchanged at v2.2). Two things break and need a one-time migration: (1) the `~/lattice/.adna -> adna/.adna` symlink retires — `.adna/` is now a real directory (M03 repo flatten); (2) the publish-skill family rewrite replaces the rsync workaround with `git push` (M05 publish family). Three things are pull-based and need nothing: the v7.0 tag, the GitHub repo rename `Agentic-DNA` → `adna`, the `deploy_manifest.yaml` move into `.github/`. Four things are new opt-in patterns: `node.aDNA/` local node vault, `LatticeScope.aDNA` observability project, the airlock-pattern adoption stub, the `<name>.aDNA/ ↔ <name>.aDNA.git` naming convention codification. The full guide is at [[../../../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|`m01_obj8_upgrade_guide_v6_to_v7.md`]] (M08a will republish to `adna-docs.vercel.app/learn/upgrade-v6-to-v7`).

---

## §3 What {{VAULT_NAME}} specifically needs to do

### Current state of {{VAULT_NAME}} (as recorded in [[m01_obj0_ecosystem_matrix.md|the ecosystem matrix]])

| Property | Value |
|---|---|
| Vault category | {{VAULT_CATEGORY}} |
| Persona | {{VAULT_PERSONA_TITLE}} |
| Operator class | {{OPERATOR_CLASS}} |
| Current git remote | `{{REMOTE_URL}}` ({{REMOTE_STATE}}) |
| Has `skill_lattice_publish.md` | {{PUBLISH_SKILL_PRESENT}} |
| Has `.publish-clone/` workaround | {{HAS_PUBLISH_CLONE}} |
| Naming conforms to ADR-009 | {{NAMING_CONFORMS}} |
| Airlock-eligible | {{AIRLOCK_ELIGIBLE}} |

### Required actions (breaking changes — one-time)

| # | Action | When | Where to look |
|---|---|---|---|
| 1 | **Workspace flatten**: from `~/lattice/`, remove the `.adna` symlink + `adna/` outer wrapper, then `git clone https://github.com/LatticeProtocol/adna.git .adna` (or run the in-place migration if you have local changes). | Once M03 ships (announced in `aDNA.aDNA/STATE.md`). | [[../../../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 + [[m01_obj2_migration_runbook.md|migration runbook]] §3 |
| 2 | **Publish-skill adoption**: {{remote_setup_action}} run `~/.adna/how/skills/skill_deploy.md` to install the pre-push sanitization hook. | Once M05 ships (announced in `aDNA.aDNA/STATE.md`). | [[../../../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §3 + [[skill_lattice_publish_rewrite_spec.md|publish-skill family spec]] |

> **M08a fills `{{remote_setup_action}}`** based on `{{REMOTE_STATE}}`:
> - If `{{REMOTE_STATE}} = none`: `Run skill_git_remote_setup to wire up your GitHub origin (per ADR-009 naming convention) — the new skill creates the GitHub repo if it doesn't exist — then `
> - If `{{REMOTE_STATE}} ∈ {LatticeProtocol-origin, external-org-origin, personal-namespace-origin}`: `Your origin is already configured — `
> - If `{{REMOTE_STATE}} = non-standard-local-path` (LPWhitepaper case): `Decide: keep `origin-whitepaper` named remote and ALSO add a proper `origin` for GitHub, OR convert. See LPWhitepaper-specific note in §3a below. Then `

### Optional actions (additive — at your discretion)

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | **Adopt the airlock pattern** — copy `~/.adna/how/airlock/AIRLOCK.md` (M03 ships this stub) into `{{VAULT_NAME}}/how/airlock/AIRLOCK.md` and customize. | Vault routinely receives cross-vault requests; you want a clean entry surface for external agents. {{VAULT_PERSONA_TITLE}} would benefit from a structured incoming-traffic protocol. | Single-operator project with no cross-vault traffic. Adopt later (purely additive). |
| 4 | **Bootstrap a `node.aDNA/`** at workspace root | Want per-machine inventory (compute, software, credentials, change log). Useful for L1 GPU operators or partners running multiple workspaces. | One-machine setup; existing vault inventory is sufficient. |
| 5 | **Rename to ADR-009 conformant form** | Want to align with the new naming convention. | If `{{NAMING_CONFORMS}} = Y`, no rename needed. If `N`, grandfathered — rename is operator-discretionary; tracked in v3 successor `M04-EC`. |

### Skip this (not applicable to {{VAULT_NAME}})

- **GitHub repo rename**: `Agentic-DNA` → `adna` is the *template* repo's rename, not yours. URL forwarding handles existing clones; you don't need to change anything in {{VAULT_NAME}}.

### {{VAULT_NAME}}-specific notes

> **M08a fills this section per-vault.** Examples of what goes here:
>
> - **For `Spacemacs.aDNA`**: Cleanup section — once Steps 1–2 confirmed working, retire `Spacemacs.aDNA/.publish-clone/` (5.0M directory, gitignored), retire `Spacemacs.aDNA/how/standard/skills/skill_publish_lattice.md` (status: deprecated; preserved per Standing Order #6), retire `Spacemacs.aDNA/how/skills/skill_lattice_publish.md` (the shadowed copy). Daedalus's full handshake is in [[../../../../who/coordination/coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]] §4 — this memo doesn't repeat what's already co-signed there.
> - **For `wga.aDNA`**: Bootstrap a `how/skills/` directory (currently missing) and copy the v7.0 skill set from the template. The skill rewrite is harmless to a vault that has no `how/skills/` — but bootstrapping the directory aligns the vault with the standard layout.
> - **For `LPWhitepaper.aDNA`**: Decision — keep `origin-whitepaper` named remote (its purpose: sync to local LaTeX whitepaper sibling clone) and add a *separate* `origin` for GitHub publish, or convert? Per ADR-009 §3.3, the path-style remote is grandfathered. Recommendation: keep both — they serve different purposes.
> - **For `RareArchive.aDNA`** + **`WilhelmAI.aDNA`** (Wilhelm Foundation): per WilhelmAI ADR 002 (per-surface attribution + license bundle Apache-2.0/CC-BY-4.0), v7.0 adoption preserves the existing license + attribution string conventions. The publish flow change is the only mechanical migration; Apache-2.0/CC-BY-4.0 + first-mention discipline + `licenses` block in `siteforge/` wrapper all stay as-is.
> - **For `strategic_interface_protocol.aDNA`** (TAPP joint venture): cross-federation attribution per Strategos identity. Per ADR-009 §3, this vault has no remote yet — Step 2 (`skill_git_remote_setup`) wires it up; conformant name is `strategic_interface_protocol.aDNA.git` (snake_case already).
> - **For `SuperLeague.aDNA`** (Super League Enterprise via Smarter With Science LLC): Janus persona governs the cross-boundary engagement. v0.1 → v1.0 trajectory implications: v7.0 adoption may come before SuperLeague's own v1.0 ship; sequencing is engagement-team-decided.
> - **For non-coordinated single-operator vaults** (zeta): the lightweight path — Steps 1 and 2 only; everything else is skip.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships | Read this memo + the [[../../../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]]. | 10 min |
| 1 | M03 announcement | Workspace flatten (per §3 Step 1). | 5–15 min |
| 2 | M05 announcement | Publish-skill adoption (per §3 Step 2). | 5 min |
| Verification | After Steps 1–2 | Run validation runbook ([[../../../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide §6]]). | 5 min |
| 3 (optional) | Operator-decided | Airlock adoption (if `{{AIRLOCK_ELIGIBLE}} = Y`). | 30–60 min |
| 4 (optional) | Operator-decided | `node.aDNA/` bootstrap. | 10 min (M04 ships skill) |
| 5 (optional) | M07 close ratifies ADR-009 | Rename consideration (if `{{NAMING_CONFORMS}} = N`). | Operator-discretionary; tracked in v3 successor. |

**Sequencing note**: Steps 1 and 2 are independent of each other but both are required for a vault to consume the v7.0 publish flow. Pre-push-hook installation (Step 2's `skill_deploy`) is idempotent — safe to re-run on subsequent template upgrades.

---

## §5 Acknowledgment + close-out trigger

This memo's `status` flips:

1. `open` (delivered by M08a) → 
2. `acknowledged` (target vault's operator reads + commits to a sequence date) → 
3. `in_progress` (Step 1 begins) → 
4. `completed` (M08b verifies post-flatten propagation; `git remote -v` and pre-push hook check pass).

The acknowledgment trigger is just §6 — co-sign by both personas.

For external operators (`{{OPERATOR_CLASS}} ∈ {external-org, joint-venture, engagement-partner}`):

- **Wilhelm Foundation vaults** (`{{EXTERNAL_PARTY}} = Wilhelm Foundation`): also mirror this memo into the Wilhelm-Foundation-side of the relationship per WilhelmAI ADR 010 publication-timing rules. Public announcement timing is embargo-coordinated.
- **TAPP joint venture** (`{{EXTERNAL_PARTY}} = TAPP Strategic Intelligence`): cross-federation attribution requirements apply. Strategos persona reviews + co-signs.
- **Super League engagement** (`{{EXTERNAL_PARTY}} = Super League Enterprise via Smarter With Science LLC`): engagement-vehicle pattern; Janus persona reviews + co-signs; Smarter With Science LLC operates as the contracting vehicle.

For internal operators (`{{OPERATOR_CLASS}} = LatticeProtocol-internal`): vault-side persona reviews + co-signs; no embargo coordination.

---

## §6 Co-sign

Both personas confirm the v7.0 migration plan matches expectation before {{VAULT_NAME}} begins Step 1.

### Rosetta — aDNA.aDNA (this vault)

Rosetta confirms ({{DELIVERY_DATE}}):

- The v7.0 changes affecting {{VAULT_NAME}} are accurately captured in §3.
- The migration sequence (§4) reflects the M03 + M05 ship order; no out-of-band requirements.
- The optional adoptions (airlock, node.aDNA, rename) are non-coercive; {{VAULT_NAME}} stays valid v6 vault if it skips them.
- For external vaults: licensing + attribution requirements (Apache-2.0/CC-BY-4.0, per-surface attribution, embargo coordination) per partner-specific ADRs are preserved unchanged.

**Signed**: Rosetta (`{{REQUESTING_AGENT}}` acting in `aDNA.aDNA/` context), {{DELIVERY_DATE}}T00:00:00Z (M08a fills the actual UTC timestamp).

### {{VAULT_PERSONA_TITLE}} — {{VAULT_NAME}} (target vault)

{{VAULT_PERSONA_TITLE}} confirms (mirror artifact: [[../../../../{{VAULT_NAME}}/who/coordination/coord_{{DELIVERY_DATE}}_v7_aDNA_adoption.md|`coord_{{DELIVERY_DATE}}_v7_aDNA_adoption.md`]] §6):

- §3 actions match {{VAULT_NAME}}'s current state and operator capacity.
- §4 sequencing accommodates {{VAULT_NAME}}'s ongoing campaigns and obligations (no conflict with active mission deadlines).
- Optional sections (§3 #3, #4, #5) acknowledged; adoption decisions deferred to {{VAULT_PERSONA_TITLE}}'s discretion.
- {{VAULT_NAME}}-specific notes (§3 last sub-section) reviewed; either accepted or counter-proposed via this memo's amendment.

**Signed**: {{VAULT_PERSONA_TITLE}} (`{{REQUESTING_AGENT}}` acting in `{{VAULT_NAME}}/` context), [pending — flips when target vault's session signs].

> **For Wilhelm-Foundation vaults**: also co-signed by Wilhelm-Foundation steward council representative per WilhelmAI ADR 010. Ledger entry in `WilhelmAI.aDNA/who/governance/coord_ledger.md`.

---

## §7 Airlock-pattern self-reference (the inheritance)

This memo structurally inherits from [[../../../../who/coordination/coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]] (the Rosetta ↔ Daedalus publish-rewrite memo). The mapping:

| Airlock schema element | This memo's mapping | Source memo's mapping |
|---|---|---|
| **Header** (request metadata, audit_id, persona pair) | Frontmatter (`audit_id`, `requesting_persona`, `receiving_persona`, `mirror`, `operator_class`, `external_party`) | Same shape, fewer fields (no operator_class etc.) |
| **Request** (what's being asked) | §2 + §3 — what's changing globally + what {{VAULT_NAME}} specifically does | §2 (what Spacemacs filed) + §3 (design delta) |
| **Handshake** (commitment from receiver) | §4 sequencing (the receiver's commitment to a timeline) | §4 (Spacemacs migration steps 1–8) |
| **Response** (close-out trigger) | §5 (acknowledgment + completion conditions) | §5 (backlog idea close-out) |
| **Co-sign** (mutual confirmation) | §6 | §6 |
| **Cross-references** (sibling airlocks) | §1 + §7 (this section) | §1 + §7 |

Cross-links to canonical airlock specs:

- **Canonical**: [[../../../../III.aDNA/how/airlock/AIRLOCK.md|III.aDNA airlock]] v0.1.0 — 5 entry paths.
- **Reference Forge**: [[../../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge.aDNA airlock]] v0.1.0 — 4 entry paths.
- **Worked example**: [[../../../../CanvasForge.aDNA/who/coordination/coord_2026_05_08_videoforge_requests_carly_herb_deck.md|VideoForge → CanvasForge cross-forge request]] — dual-vault file pattern (request + mirror).
- **Direct ancestor**: [[../../../../who/coordination/coord_2026_05_08_publish_rewrite.md|coord_2026_05_08_publish_rewrite.md]] — first cross-graph airlock-pattern exercise from `aDNA.aDNA/`.

This template is the **second-generation cross-graph airlock instance** from `aDNA.aDNA/` — the first (publish-rewrite) was bilateral (Rosetta ↔ Daedalus, single relationship); this is **multilateral** (Rosetta ↔ ~17 vaults, parallel relationships). The successor campaign [[../../campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|`campaign_adna_v3_ecosystem_compliance`]] M05-EC mission can use this template as the prototype for its per-vault airlock-adoption coord memos.

---

## §8 Standing Order discharges

| Standing Order | Discharge in this template |
|---|---|
| #2 / #8 (self-reference mandatory) | The template IS the airlock pattern it documents — references its own structural lineage (the Rosetta ↔ Daedalus memo) explicitly in §7. |
| #6 (archive, never delete) | Per-vault instances persist permanently in target vaults' `who/coordination/`. Pre-flatten state captured before M03 fires. |
| #7 (dual-audience test) | Developer reads §3 (specific actions) + §4 (sequence) + §6 (co-sign mechanics). Newcomer reads §1 (what graphs, why crossing) + §2 (what's changing globally). |
| #9 (upstream spec is source of truth) | The template is *governance-track* only. `adna_standard.md` is unchanged; this memo doesn't make any normative claim about the standard. |
| #10 (cross-link aggressively) | Memo links to: 4 sibling artifacts in this campaign (upgrade guide, ecosystem matrix, migration runbook, publish naming ADR), 4 ADRs (006, 007, 009 + forward-references to 008/010/011), 4 airlock-related references (III canonical, VideoForge reference, CanvasForge worked example, publish-rewrite direct ancestor), 1 v3 successor campaign master, 1 mission file, 1 mirror coord memo path. **15+ wikilinks** — well above the ≥2 required. |

---

## §9 Status

**Template — complete (draft; M08a fills `{{VARIABLES}}` per-vault).** Ready for M08a consumption: the M08a session iterates the 19-vault list (per [[m01_obj0_ecosystem_matrix.md|ecosystem matrix §1]]), copies this template once per vault, fills in variables, mirrors into target vault `who/coordination/`, and (for Wilhelm-affiliated vaults) coordinates with Wilhelm-Foundation steward council per WilhelmAI ADR 010 publication-timing rules.

**Per-vault instance count expected at M08a**: ~17 (19 active vaults minus 2 already-co-signed via the Daedalus precedent — Spacemacs.aDNA's coord memo is already complete; aDNA.aDNA itself doesn't get a memo since it IS the producing vault).

> **Refinement note**: ComicForge.aDNA is superseded (not active) — no memo. Stale ComicForge wikilinks anywhere in the ecosystem are M07's responsibility, not M08a's.

**Forward-references**: M08a + M08b consume this template. Receipts collected in M01 AAR (S2 S6 or S2 S7 — mission close).
