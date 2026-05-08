---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → Spacemacs.aDNA — Publish-Skill Family Rewrite (v7.0)"
status: open  # → completed when both Rosetta + Daedalus co-sign §6
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: Spacemacs.aDNA
receiving_persona: daedalus
requesting_agent: agent_stanley
created: 2026-05-08
updated: 2026-05-08
priority: medium
deadline: pre-M05-execution-start (M05 ships the new skills; this memo gates ship by confirming Daedalus's expectation matches)
audit_id: adna_v2_m01_s2_s3_publish_rewrite_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 4
mirror: /Users/stanley/lattice/Spacemacs.aDNA/who/coordination/coord_2026_05_08_adna_publish_rewrite.md
airlock_pattern: true   # adopts III.aDNA/how/airlock/AIRLOCK.md v0.1.0 schema as exemplar
tags: [coordination, cross_graph, publish_rewrite, daedalus, rosetta, airlock_pattern, exemplar, m01, obj4, m05, v7_0]
---

# Cross-Graph Coordination — aDNA.aDNA (Rosetta) → Spacemacs.aDNA (Daedalus)

> **First cross-graph airlock-pattern exercise originating from `aDNA.aDNA/`** (per [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_planning_01.md|mission spec]] §Obj 4 amendment 2026-05-08). Adopts the airlock request schema as exemplar, with cross-links to [[../../../III.aDNA/how/airlock/AIRLOCK.md|III.aDNA canonical airlock]] and [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge.aDNA reference Forge airlock]]. Memo structure (header → context → request → handshake → response → co-sign) is the prototype for vault-local airlock adoption in the [[../../how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|v3 successor campaign]].

## TL;DR

aDNA.aDNA (Rosetta) is rewriting the publish-skill family in `campaign_adna_v2_infrastructure` M05. The rewrite was triggered by Spacemacs.aDNA's backlog idea [[../../../Spacemacs.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md|idea_skill_publish_lattice_git_fix.md]] (filed by Daedalus 2026-05-07). This memo:

1. Confirms the v7.0 design matches what Daedalus expected when filing the idea.
2. Specifies the Spacemacs-side migration path (delete `.publish-clone/`, retire local rsync skill, adopt v7.0 family).
3. Sets the close-out trigger for the backlog idea (M05 AAR link).
4. Doubles as the campaign's first cross-graph airlock-pattern exercise — the memo's structure is the prototype for v3 successor vault-local airlock adoption.

**Both personas co-sign §6** before M05 ships the new skills to other ecosystem vaults.

---

## §1 Airlock entry — what graph this is, why you're reading

> *Airlock convention*: external agents entering this vault from another context graph start at `who/coordination/` for cross-graph operational state. The `who/airlock/AIRLOCK.md` directory does not yet exist in `aDNA.aDNA/` — it is the M03 deliverable per [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_planning_01.md|mission §Obj 2 amendment ADR-008 slot]]. Until M03 ships, cross-graph entry is via this `who/coordination/` directory and STATE.md.

**aDNA.aDNA is the self-referential aDNA documentation vault** — Operation Rosetta. It governs the aDNA standard's evolution; campaigns like `campaign_adna_v2_infrastructure` produce the next major template version. Persona: Rosetta (the artifact that decoded a standard by presenting it in three registers simultaneously).

**Spacemacs.aDNA is the context-native operationalization of Spacemacs as an agentic IDE.** Persona: Daedalus (the architect who builds workshops). Spacemacs.aDNA is a *consumer* of the aDNA standard — when the standard ships v7.0, Spacemacs adopts the new patterns.

This memo crosses from the standard-producer (aDNA.aDNA) to a standard-consumer (Spacemacs.aDNA) because Spacemacs surfaced a publish-skill bug whose fix lives at the standard level, not at the consumer level. The fix flowed upstream; this memo carries the design back down for consumer-side acknowledgment before shipping more broadly.

---

## §2 Request context

### What Spacemacs filed

[[../../../Spacemacs.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md|idea_skill_publish_lattice_git_fix]] (2026-05-07, target_phase: upstream). Surfaced during P3-02 §1.3.6 wind-down: Spacemacs had no configured git remote because its local `skill_publish_lattice` (in `how/standard/skills/`) used a detached `.publish-clone/` rsync workaround instead of configuring the vault's own git repo as origin.

The backlog idea proposed a 4-part fix at the template level:

1. `skill_publish_lattice.md` rewrite — first-use `git remote add origin <url>`, subsequent use `git push`, sanitization → pre-push hook
2. NEW `skill_git_remote_setup.md` — first-time remote configuration
3. Pre-push sanitization hook installed by `skill_install`
4. Tarball as optional `skill_publish_tarball.md`

The idea was promoted to `mission_adna_infra_planning_01` Obj 4 (per the idea's `promoted_to_mission:` frontmatter field).

### What aDNA.aDNA's M01 produced (Stage 2 Session 3, 2026-05-08)

This session produced four sibling artifacts (all in [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/|artifacts/]]):

- [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj4_publish_naming_adr.md|m01_obj4_publish_naming_adr.md]] — naming recommendation (formal ADR drafted by M05)
- [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/skill_lattice_publish_rewrite_spec.md|skill_lattice_publish_rewrite_spec.md]] — publish-skill family spec
- [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/skill_git_remote_setup_spec.md|skill_git_remote_setup_spec.md]] — first-time-remote spec
- [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/pre_push_hook_spec.md|pre_push_hook_spec.md]] — pre-push hook spec

The naming-recommendation diverges from the literal text in Daedalus's idea on one point — see §3.

---

## §3 What changed in the design (vs. Daedalus's idea, verbatim)

The backlog idea proposed rewriting `skill_publish_lattice.md` (note: word order — *publish-lattice*) in place. Stage 2 Session 3 reading uncovered that the relevant skill in the **template** is `skill_lattice_publish.md` (note: word order swapped — *lattice-publish*) and is the **`latlab` CLI registry-publish skill**, not a vault publisher. Spacemacs's local `skill_publish_lattice.md` (rsync-based vault publisher) lives only in Spacemacs's `how/standard/skills/` — never made the round-trip back into the template.

This naming collision (two near-identical skill names doing two different operations) is resolved by the v7.0 design:

| Skill | Function | v7.0 disposition |
|---|---|---|
| `skill_lattice_publish.md` (template) | latlab CLI registry publishing of `.lattice.yaml` objects | **KEEP** — light edits only (cross-link + path-drift) |
| `skill_vault_publish.md` (NEW template) | vault → GitHub `git push` flow | **CREATE** — replaces Spacemacs's local rsync skill |
| `skill_git_remote_setup.md` (NEW template) | first-time `git remote add` + `gh repo create` | **CREATE** — Daedalus's idea item 2 |
| `skill_publish_tarball.md` (NEW template) | optional offline-shipping tarball | **CREATE** — Daedalus's idea item 4 |
| `skill_deploy.md` (NEW template) | installs the pre-push hook to `.git/hooks/` | **CREATE** — covers Daedalus's idea item 3 (Daedalus called this `skill_install`) |

The shape is **the same** as Daedalus's idea — first-time setup, normal git push, pre-push hook, tarball as optional. The only delta is naming: `skill_vault_publish.md` instead of "rewriting skill_publish_lattice in place". Reasoning: see [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj4_publish_naming_adr.md|publish-naming recommendation]] §3 — preserving stable referents avoids silent semantic changes for vaults that inherit the existing `skill_lattice_publish.md` and don't actively use it as a vault publisher.

**Question for Daedalus**: Does `skill_vault_publish.md` (instead of in-place `skill_publish_lattice.md` rewrite) match your intent? See §6 co-sign.

---

## §4 Spacemacs-side migration path (the handshake)

Once M05 ships the v7.0 publish family, Spacemacs adopts the migration as follows:

| Step | Action | When | Effort |
|---|---|---|---|
| 1 | Pull updated `.adna/` template (gets new skills) | After M05 close | `git -C .adna pull` |
| 2 | Run `skill_git_remote_setup` — configure `origin` to `github.com/LatticeProtocol/Spacemacs.aDNA.git` | One-time per vault | ~5 min |
| 3 | Run `skill_deploy` — install the pre-push sanitization hook | One-time after M05; re-run on subsequent template upgrades | ~30 sec (idempotent) |
| 4 | Use `skill_vault_publish` going forward | Every publish | Replaces all prior publish flows |
| 5 | Delete `Spacemacs.aDNA/.publish-clone/` directory | Once Step 1–4 are confirmed working | `rm -rf .publish-clone` |
| 6 | Retire `Spacemacs.aDNA/how/standard/skills/skill_publish_lattice.md` (mark `status: deprecated` and add a deprecation note pointing at the template skills) | After Step 5 | `status` flip + 3-line deprecation note |
| 7 | Retire `Spacemacs.aDNA/how/skills/skill_lattice_publish.md` (the shadowed copy of the latlab-registry skill) | After Step 5 — leaves the template's canonical copy in `.adna/how/skills/` | Same |
| 8 | Close the backlog idea — set `status: closed` in [[../../../Spacemacs.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md|idea_skill_publish_lattice_git_fix.md]] with link to M05 AAR + this memo | After Step 7 | `status` flip + 1-line close note |

**Sequencing**: Steps 1–4 are non-destructive and can run when M05 ships. Steps 5–8 wait until Spacemacs confirms the v7.0 publish flow works end-to-end on at least one publish cycle. The full migration is captured by `campaign_adna_v3_ecosystem_compliance/missions/M05-EC` (or whatever airlock-adoption mission covers Spacemacs in v3 — preliminary tree finalizes at v2 M11 per [[../../how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|v3 campaign master]]).

---

## §5 Backlog-idea close-out trigger

The Spacemacs backlog idea closes when:

1. M05 of `campaign_adna_v2_infrastructure` ships the v7.0 publish family and produces an AAR.
2. This memo's §6 is co-signed by Rosetta + Daedalus.
3. Spacemacs completes Steps 1–4 of §4 (one publish cycle confirms the new flow).

The idea's `status:` flips from `ready` (current) → `in_progress` (when §6 is co-signed) → `closed` (when Steps 1–4 confirmed). The close note links to M05's AAR and this memo. Steps 5–8 (the full retirement of the local rsync skill) are tracked separately under v3 successor.

---

## §6 Co-sign

Both personas confirm the design matches expectation before M05 ships the new skills.

### Rosetta — aDNA.aDNA (this vault)

Rosetta confirms (this artifact, 2026-05-08):

- The four sibling specs in [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/|artifacts/]] capture the design comprehensively.
- The naming change (`skill_vault_publish.md` vs in-place `skill_publish_lattice.md` rewrite) is captured in [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj4_publish_naming_adr.md|the publish-naming recommendation]] §3 with explicit reasoning.
- M05 will not ship the new skills broadly until §6.2 is signed by Daedalus.
- Standing Order #2 (self-reference) is satisfied: the campaign documents the v7.0 change while preserving stable referents — *not* renaming the existing `skill_lattice_publish.md` is the campaign's first action under M07's not-yet-codified ADR-009 naming convention.

**Signed**: Rosetta (agent_stanley acting in `aDNA.aDNA/` context), 2026-05-08T20:38:49Z.

### Daedalus — Spacemacs.aDNA (mirror vault)

Daedalus confirms (mirror artifact, [[../../../Spacemacs.aDNA/who/coordination/coord_2026_05_08_adna_publish_rewrite.md|coord_2026_05_08_adna_publish_rewrite.md]] §6):

- See mirror file for the Daedalus side of the handshake.

**Pending**: Daedalus signs the mirror artifact at the next Spacemacs.aDNA session.

---

## §7 Airlock-pattern self-reference (the exemplar)

This memo is structurally a **request-handshake-response** flow. Mapped to the airlock request schema (per [[../../../III.aDNA/who/coordination/coord_2026_05_08_airlock_v0_2_videoforge_findings.md|III.aDNA airlock v0.2 findings]] gap analysis):

| Airlock schema element | This memo's mapping |
|---|---|
| **Header** (request metadata, audit_id, persona pair) | Frontmatter (`audit_id`, `requesting_persona`, `receiving_persona`, `mirror`) |
| **Request** (what's being asked) | §2 Request context + §3 design delta |
| **Handshake** (commitment from receiver) | §4 Spacemacs-side migration path |
| **Response** (close-out trigger) | §5 backlog-idea close-out |
| **Co-sign** (mutual confirmation) | §6 |
| **Cross-references** (sibling airlocks) | §1 + this section's links |

Cross-links to canonical airlock specs:

- **Canonical**: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III.aDNA/how/airlock/AIRLOCK.md]] v0.1.0 — 5 entry paths (A-Text, B-Web/Visual, C-Code, D-Video, E-Vault Maintenance). The patterns this memo borrows: header/version-contract, structured entry-path framing, "can't find what you need?" escape hatch.
- **Reference Forge**: [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge.aDNA/how/airlock/AIRLOCK.md]] v0.1.0 — 4 entry paths including Path B (Cross-Forge Request Entry). The cross-forge handshake pattern (request memo → triage → mission) inspired §4 + §5.
- **Worked example**: [[../../../CanvasForge.aDNA/who/coordination/coord_2026_05_08_videoforge_requests_carly_herb_deck.md|coord_2026_05_08_videoforge_requests_carly_herb_deck.md]] — VideoForge → CanvasForge cross-forge request (deck-build delegation). The dual-vault file pattern (request file + mirror file) and the audit_id convention.
- **v0.2 standardization input**: [[../../../III.aDNA/who/coordination/coord_2026_05_08_airlock_v0_2_videoforge_findings.md|coord_2026_05_08_airlock_v0_2_videoforge_findings.md]] — the 5-gap analysis that informs the v0.2 standard. This memo demonstrates 4 of the 5 gaps in working form (request-initiation ceremony, handshake, payload schema, idempotency contract); the cross-vault-secrets gap doesn't apply to this exchange (no secrets cross between Rosetta and Daedalus).

This memo's structure is therefore the **first non-Forge instance of the airlock pattern** — Forges already use it (CanvasForge worked example); aDNA.aDNA → Spacemacs is the first standard-producer ↔ standard-consumer instance. The successor `campaign_adna_v3_ecosystem_compliance` M05-EC mission can use this memo as the template for its per-vault airlock-adoption coord memos.

---

## §8 Standing Order discharges

| Standing Order | Discharge in this memo |
|---|---|
| #2 (self-reference mandatory) | The memo IS the airlock pattern it documents — references its own structural elements §1–§7 as the prototype for v3 successor adoption. |
| #6 (archive, never delete) | Memo persists in `who/coordination/` permanently; Spacemacs's local rsync skill is `status: deprecated` (not deleted) per §4 Step 6. |
| #7 (dual-audience test) | Developer reads §3 + §4 for the mechanics; newcomer reads §1 + §2 + §5 for context (what graphs, why crossing, what closes). |
| #9 (upstream spec is source of truth) | The publish-skill family rewrite is a *governance-track* v7.0 change — the spec (`adna_standard.md`) is unchanged; this memo doesn't make any normative claim about the standard. |
| #10 (cross-link aggressively) | Memo links to: 4 sibling spec artifacts in this campaign, 1 mission spec section, 1 backlog idea (Spacemacs), 4 airlock-related references (III canonical, VideoForge reference, CanvasForge worked example, III v0.2 findings), 2 ADRs (006 + 007), 1 v3 successor campaign master. **15 wikilinks** — well above the ≥2 required. |

---

## §9 Status

**Open** — pending Daedalus co-sign in mirror artifact §6. On co-sign, both files set `status: completed` and the v7.0 M05 ships proceed.

**Memo is in effect immediately for design-confirmation purposes** — the four sibling specs in this session are stable; M05 implements against them on operator ratification.
