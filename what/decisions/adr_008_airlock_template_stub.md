---
type: adr
adr_number: 008
title: "Airlock template stub at .adna/how/airlock/AIRLOCK.md (minimal; federates to III.aDNA v0.2.0; opt-in per vault)"
status: accepted
created: 2026-05-11
updated: 2026-05-11
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_03_repo_flatten
objective: 1
decision_letter: H  # mission §Obj 1 — airlock template stub (decision following the §Obj 7 §G ADR-009 naming convention)
ratification_phase: P1  # ratified at M03 phase gate (Session 3 mission close) per campaign master mission tree
ratification_mission: mission_adna_infra_p1_03_repo_flatten
ratified: 2026-05-11
ratified_session: session_stanley_20260511_194613_adna_v2_m03_s3
federation_ref:
  source: "III.aDNA/what/artifacts/iii_airlock_standard_spec.md"
  version: "0.2.0"
  pinned_at: 2026-05-11
tags: [adr, decision, campaign_adna_v2_infrastructure, airlock, template_stub, federation_ref, iii_aDNA, multilateral_airlock, m03, v7_0, opt_in, m05_ec_forward_ref]
---

# ADR-008: Airlock template stub at `.adna/how/airlock/AIRLOCK.md` — minimal, federated, opt-in

## Status

**Accepted** at M03 phase gate Session 3 mission close 2026-05-11T19:46:13Z+ (`session_stanley_20260511_194613_adna_v2_m03_s3`). Operator authorized ratification post-S2-harness-pass (V1-V13 + R1-R11 24/24 PASS). Cross-references: M03 mission AAR at [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/aar_m03_repo_flatten.md|`aar_m03_repo_flatten.md`]] (load-bearing finding identifies this ADR as the 5th instance in the airlock lineage); M03 spec §Obj 6 specified ratification mechanics; M03 S2 commit `6f1822a` landed the template-stub file at `.adna/how/airlock/AIRLOCK.md` per the inline spec below.

**Originally proposed** at Session 1 of mission `mission_adna_infra_p1_03_repo_flatten` 2026-05-11 by Rosetta as M03 Obj 1 deliverable. M03 is the airlock-stub authoring mission per the campaign master mission tree (Stage 2 Session 2.5 Campaign Amendment Session 2026-05-08 opened the ADR-008 slot in M03). Companions: ADR-006 (template-repo rename `Agentic-DNA` → `adna`; accepted at P0→P1 gate), ADR-007 (outer `adna/CLAUDE.md` → `template_workspace_claude.md`; accepted), ADR-009 (`<name>.aDNA/` ↔ `<name>.aDNA.git` naming convention; accepted). ADR-008's federation_ref pin points to III.aDNA airlock standard at v0.2.0 (verified by grep at draft authoring + re-verified at S2 entry: `/Users/stanley/aDNA/III.aDNA/what/artifacts/iii_airlock_standard_spec.md` `version: "0.2.0"`).

## Context

### The airlock pattern has matured outside the template

The aDNA ecosystem has converged toward a **vault-to-vault traffic** pattern called the airlock. Originated as an III.aDNA innovation, the airlock provides a uniform contract for two kinds of cross-vault interaction:

- **Entry paths** — inbound, pull-based, single-direction. An external agent enters a vault to run a quality-improvement loop (or other localized work) using the vault's own context.
- **Cross-vault request patterns** — bidirectional, ephemeral, two-vault handshake. An agent in vault A commissions an agent in vault B to do work for vault A.

As of 2026-05-10, the pattern has reached **v0.2.0 in III.aDNA** ([[../../../III.aDNA/what/artifacts/iii_airlock_standard_spec.md|`iii_airlock_standard_spec.md`]] v0.2.0 + [[../../../III.aDNA/how/airlock/AIRLOCK.md|`AIRLOCK.md`]] v0.2.0). The spec defines five canonical entry paths (Text Improvement, Web/Visual, Code, Video/Multimedia, Vault Maintenance) plus a cross-vault request schema with handshake profiles (Lightweight + Full), payload contract, secret-delegation rules, and idempotency keys. III is the **canonical implementer**; VideoForge.aDNA carries a reference instance; CanvasForge.aDNA's coord memo `coord_2026_05_08_videoforge_requests_carly_herb_deck.md` is the documented worked example.

### The aDNA template has exercised the pattern multilaterally

`aDNA.aDNA/` (this self-referential vault) has just produced the **4th instance in the airlock lineage** — and the first instance from the template's own home — through campaign `campaign_adna_v2_infrastructure`:

| # | Instance | Vault | Cardinality | Authored |
|---|---|---|---|---|
| 1 | III.aDNA airlock canonical | `III.aDNA/` | n-ary (spec + reference) | 2026-05-08 (Campaign A MA-4; v0.1.0 → 2026-05-10 v0.2.0) |
| 2 | VideoForge airlock reference | `VideoForge.aDNA/` | reference | Genesis planning (4 entry paths v0.1) |
| 3 | CanvasForge worked example | (coord memo at `III.aDNA/`) | bilateral (CanvasForge ← VideoForge commission) | 2026-05-08 |
| 4 | aDNA multilateral instance | `aDNA.aDNA/` | multilateral (17 parallel) | 2026-05-09 (M08a Session 1; 17 per-vault coord memos) |

The M08a multilateral instance is documented in [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/aar_m08a_upgrade_guide_and_coord_memos.md|the M08a AAR]] (load-bearing finding #10: airlock-arc self-reference). The bilateral ancestor — [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|the Rosetta ↔ Daedalus publish-rewrite memo]] (2026-05-08) — is the 1-relationship parent that M08a generalized to the 17-relationship multilateral form for the v7.0 upgrade rollout.

### The template-level gap

Despite the pattern's maturity, **no entry point for it exists in the aDNA template itself**. A fresh fork via `skill_project_fork.md` produces a vault with full triad coverage (what/how/who) but no airlock infrastructure. Vaults that need cross-vault interaction must either:

1. **Reinvent the wheel locally** — author their own airlock directory + entry paths + request memos from scratch, ignorant of III's canonical;
2. **Manually federate to III** — find III.aDNA's canonical, read its federation_ref protocol, hand-author a `how/airlock/AIRLOCK.md` with the right pin and stub contents;
3. **Defer the work** — postpone airlock setup until cross-vault need arises, then face the friction during a session where the interaction is needed.

All three are friction. The template should ship an opt-in entry point so that **adopting the airlock pattern is a content-only decision, not a structural one**. ADR-008 fills this gap.

### What the template-level stub does NOT do

To set scope: the template-level stub is **not** the per-vault airlock. It is the **starting point** for a per-vault airlock. The full per-vault rollout — customizing entry paths to the vault's domain, declaring participation in cross-vault traffic, integrating with the vault's own coordination memos — is the scope of the **v3 successor campaign** [[../../how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|`campaign_adna_v3_ecosystem_compliance`]] mission `M05-EC` (ecosystem-wide airlock adoption), which inherits the per-vault content source from the [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_per_vault_coord_memo_template.md|M01 Obj 8 per-vault coord memo template]] (the multilateral airlock content M08a exercised across 17 instances).

This separation is intentional. The template's job is to **make adoption cheap**; the v3-EC campaign's job is to **drive adoption to completion**.

## Decision

**Ship `.adna/how/airlock/AIRLOCK.md` as a minimal, federation-pinned, opt-in entry point in the aDNA v7.0 template.**

The stub is a **single-file** addition to the template's `how/` triad. It carries:

1. **Identity** — the file declares itself as the template-level airlock entry point.
2. **Federation pin** — frontmatter `federation_ref` block pins to [[../../../III.aDNA/what/artifacts/iii_airlock_standard_spec.md|III.aDNA airlock standard]] v0.2.0. Future III spec bumps follow ADR-002 §3 (consumer-review-required for minor versions; explicit human decision for major versions); this template's pin is reviewed and updated by a future M03-class mission in the v7.x or v8.x track.
3. **Opt-in posture** — the file exists in the template but ships **inactive**. Forked vaults inherit the file unmodified; activation is per-vault opt-in (the vault's operator decides whether the vault participates in cross-vault traffic).
4. **Pointer-only content** — the body explains the federation discipline + points readers at III canonical for the full schema (5 entry paths + cross-vault request patterns). The body does **NOT** duplicate III's spec content.
5. **Forward-reference to v3-EC `M05-EC`** — the body names v3-EC as the per-vault rollout campaign for operators who want to activate.

The full target content for `.adna/how/airlock/AIRLOCK.md` is specified inline in §The stub spec below. Session 2 of M03 (the destructive flatten session) creates the file as one of its commits (Obj 3 Commit 12 per the M03 mission spec).

### The stub spec (target content for `.adna/how/airlock/AIRLOCK.md`)

The target file is ~60-80 lines. The structure is fixed; the wording can vary at authoring discretion. Inline target spec:

```markdown
---
type: airlock
title: "aDNA Template Airlock Entry Point"
status: inactive  # forked vaults flip to `active` to opt in to cross-vault traffic
version: "0.1.0"  # template stub version; advances when this file's shape (not III's spec) changes
created: 2026-05-??  # M03 Session 2 date
updated: 2026-05-??
last_edited_by: agent_stanley
federation_ref:
  source: "III.aDNA/what/artifacts/iii_airlock_standard_spec.md"
  version: "0.2.0"
  pinned_at: 2026-05-??
tags: [airlock, template, federation_ref, iii_aDNA, opt_in, cross_vault_traffic]
---

# aDNA Template Airlock — Entry Point (template stub)

> **Status: inactive.** This file ships in the aDNA template as an opt-in entry point.
> A fresh fork inherits it unmodified. To **activate** for cross-vault traffic, flip the
> frontmatter `status: inactive → active` and follow the §Activation steps below.

## What is the airlock?

The airlock is the aDNA standard for **vault-to-vault traffic** — the contract that
governs how agents and artifacts cross context-graph boundaries between aDNA vaults.

Two surfaces:

- **Entry paths** — inbound, pull-based. An external agent enters this vault to do
  localized work (e.g., run a quality-improvement loop) using this vault's own context.
- **Cross-vault requests** — bidirectional, ephemeral. An agent in vault A commissions
  an agent in this vault to do work for vault A, with a handshake + memo lifecycle.

## Federation source

This stub federates to the **III.aDNA Airlock Standard** at the version pinned in
frontmatter. III is the canonical implementer; this template ships only the entry-point
file. For the full schema (the 5 canonical entry paths + cross-vault request patterns +
handshake profiles + payload contract + secret-delegation rules + idempotency keys), read:

- `~/aDNA/III.aDNA/what/artifacts/iii_airlock_standard_spec.md` (the spec)
- `~/aDNA/III.aDNA/how/airlock/AIRLOCK.md` (the reference instance)

Worked example (bilateral commission across vaults):
- `~/aDNA/CanvasForge.aDNA/who/coordination/coord_2026_05_08_videoforge_requests_carly_herb_deck.md`

Multilateral example (17 parallel relationships from `aDNA.aDNA/`):
- `~/aDNA/aDNA.aDNA/who/coordination/coord_2026_05_09_v7_*.md`

## Why opt-in?

Not every aDNA vault participates in cross-vault traffic. A vault that operates entirely
locally — generating site content, running a single-domain pipeline, hosting a knowledge
base — has no need for the airlock surface. The template ships the entry point so that
**adopting the airlock is content-only**, not a structural decision. Vaults that need the
surface flip a frontmatter field; vaults that don't, ignore the file.

## Activation steps

1. Flip the frontmatter `status: inactive → active` in this file.
2. Decide which entry paths your vault supports. The 5 III canonical paths are a starting
   point; your vault may add domain-specific paths (e.g., a SiteForge vault adds a Path B'
   for web-review specifics).
3. Author your vault's coordination directory (`who/coordination/`) if not present.
4. Reference this file from your vault's `CLAUDE.md` so arriving agents discover it.
5. For ecosystem-wide rollout discipline, see the v3 successor campaign:
   `~/aDNA/aDNA.aDNA/how/campaigns/campaign_adna_v3_ecosystem_compliance/`
   (mission `M05-EC` drives ecosystem-wide airlock adoption with the per-vault content
   template from `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_per_vault_coord_memo_template.md`).

## Version pinning + updates

The frontmatter `federation_ref.version` field pins to a specific III spec version (currently
v0.2.0). When III publishes a minor or major bump, consumers review per the III ADR-002 §3
consumer contract. The aDNA template's pin is updated by a future mission in the v7.x or v8.x
track (the same M03-class mission that performs the next round of template-level governance).

## Cross-references

- `~/aDNA/aDNA.aDNA/what/decisions/adr_008_airlock_template_stub.md` — this stub's
  authoring ADR + decision rationale + minimal-stub posture justification
- III.aDNA airlock canonical (federation source) — see §Federation source above
- v3 successor campaign + `M05-EC` mission — see §Activation steps above

---

**Status block**: stub authored M03 Session 2 (date filled at authoring); status:
inactive by default; activation is operator-discretionary; v3-EC M05-EC drives
ecosystem-wide adoption.
```

That stub file is the artifact `.adna/how/airlock/AIRLOCK.md` lands at Session 2. The file is intentionally short — every line is either a pointer to III canonical, a v3-EC reference, or activation guidance.

## Consequences

### Positive

- **Template ecosystem has an airlock entry point**. Forked vaults inherit the file structurally; activation is one frontmatter flip away. No more "I need to set up airlock, but the template doesn't tell me where it goes" friction.
- **Federation discipline preserved**. The stub does not duplicate III canonical content. Future III spec bumps are absorbed via federation_ref version review per ADR-002 §3, not by edits to multiple consumer vaults. Drift surface is minimized to one file in this template.
- **v3-EC has a clean scope target**. The per-vault rollout campaign opens against a pre-existing template entry point; `M05-EC` mission can focus on per-vault content authoring (entry-path customization, cross-vault request discovery, coordination directory wiring) rather than entry-point creation.
- **Multilateral airlock pattern continues**. The M08a 17-instance set + this template stub + future v3-EC per-vault wrappers form a coherent rollout arc. The template stub is the **5th instance** in the airlock lineage (III canonical + VideoForge reference + CanvasForge worked example + M08a multilateral + this template stub).
- **Self-reference (Standing Order #2)**. The aDNA template codifies the airlock pattern by exercising it: the campaign that produces ADR-008 also produced the M08a multilateral instances; ADR-008 forward-references those instances; the template stub points readers back at them as the documented worked example. Standing demonstrating itself.

### Negative

- **Future III spec bumps require re-pin**. When III publishes v0.3.x or v1.0.0, the template's `federation_ref.version` must update. This is one file per bump — cheap, but it's a recurring operational cost. Mitigation: M07-class audit missions (general-repo-review) include a step "check federation_ref pins for downstream consumers"; the template's own pin lives in this stub + ADR-008's frontmatter.
- **Forked vaults inherit an inactive file they may not need**. Vaults that never adopt the airlock carry a ~60-line file in `how/airlock/`. Mitigation: file is tiny + structurally inert; `skill_project_fork.md` could be extended later to ask "do you need airlock infrastructure?" at fork time and omit the directory if no — out of scope for this ADR.
- **Opt-in posture creates an asymmetry with III**. III's `how/airlock/AIRLOCK.md` is the canonical reference instance with full status:reference_implementation framing; the template's stub is opt-in with `status: inactive` default. Mitigation: the asymmetry is correct — the template ships a starting point, not a canonical implementation; the documentation in the stub body is clear about the role distinction.

### Neutral

- **No `skill_project_fork.md` modification this mission**. The fork-time integration (asking "do you need airlock?" + omitting the directory if no) is **deferred to a future minor template version**. M03's `skill_project_fork.md` work (Obj 4) is the unrelated exclusion-list update + ADR-009 name validation. ADR-008's airlock stub is **always** copied by the current fork mechanism — the optional fork-time question is a future enhancement.
- **III.aDNA airlock canonical is unchanged by this ADR**. The federation_ref pin is downstream; III's spec evolves on its own cadence per ADR-002 §3.
- **No schema validation enforced at the template level**. The stub doesn't ship a YAML schema, doesn't validate frontmatter, doesn't lint adherence to the stub format. Consumer-side validation is `M05-EC` scope (v3 successor).

## Alternatives considered

| Option | Rationale to reject (vs. chosen Option A — minimal stub) |
|---|---|
| **Option A — Minimal stub (CHOSEN)** | Ships entry point + federation_ref pin only. Defers schema + content to III canonical. Opt-in posture. Cheap to land at M03; cheap to maintain across III spec bumps. |
| **Option B — Full mirror of III canonical** | Ships entry point + 5-path schema + request payload contract + reply template + handshake profile tables, duplicating III content in the template. Pros: forked vaults have a fully-self-contained airlock without needing III installed. Cons: massive drift surface — every III spec bump requires synchronizing 5+ files in the template + 5+ files in every consumer wrapper that follows the template. Rejected. The federation_ref pattern exists specifically to eliminate this surface; using it for ADR-008 is the consistent choice. |
| **Option C — Schema-only (no entry point file)** | Ships just `.adna/how/airlock/iii_airlock_request_schema.yaml` as a federated copy of III's schema; no AIRLOCK.md entry point. Pros: even smaller surface than Option A. Cons: forked vaults have no human-readable starting point — the schema file is consumer-machinery, not human-facing. Rejected. The entry point file is the discoverability surface; consumers don't read schemas to learn whether they want airlock. |
| **Option D — Do nothing at template level** | Lets per-vault rollout in v3-EC create the airlock infrastructure from scratch per vault. Pros: zero template change. Cons: every forked vault that wants airlock has to author the entry point + federation_ref pin from scratch; ADR-008's "make adoption cheap" goal goes unmet. The campaign master amendment (Stage 2 Session 2.5 2026-05-08) explicitly opened the ADR-008 slot for template-level airlock; do-nothing contradicts that intent. Rejected. |

## Forward-references

- **v3 successor campaign `M05-EC`** — ecosystem-wide airlock adoption. Consumes the per-vault coord memo template ([[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_per_vault_coord_memo_template.md|`m01_obj8_per_vault_coord_memo_template.md`]]) as its prototype + this template stub as the entry-point base. Drives per-vault activation (frontmatter flip + per-vault entry-path customization + per-vault coordination memo wiring) across the 19 active ecosystem vaults at each operator's pace.
- **M04 (`node.aDNA/` bootstrap)** — the `node.aDNA` vault is a candidate first adopter of the airlock pattern (Hestia persona naturally pairs with cross-vault coordination — inventory queries cross vault boundaries). M04 may flip the stub to `active` during node bootstrap; out of scope for M03.
- **M07 (general repo review + simplify)** — 10-dim D7 audit's airlock-presence sub-check (per ADR-009 §4 enforcement table) checks for the presence of `how/airlock/AIRLOCK.md`. With the template shipping the stub, every forked vault passes the D7 sub-check by default; activation is what `M05-EC` measures.
- **Future v7.x or v8.x M03-class mission** — re-pins `federation_ref.version` when III publishes a minor/major bump.

## Companion ADRs

- [[adr_006_github_repo_rename_to_adna.md|ADR-006]] — Template-repo rename `Agentic-DNA` → `adna`. Both ADRs land at M03; both are template-level v7.0 changes.
- [[adr_007_outer_adna_claude_md_disposition.md|ADR-007]] — Outer wrapper → workspace template. Same campaign; same mission (M03); same destructive Session 2.
- [[adr_009_aDNA_naming_convention.md|ADR-009]] — `<name>.aDNA/` ↔ `<name>.aDNA.git` naming convention. §4 enforcement table includes the airlock-presence sub-check that this ADR satisfies for all forked vaults.

### Cross-referenced III ADRs (federation source vault)

- `~/aDNA/III.aDNA/what/decisions/adr_002_consumer_federation_contract.md` — the consumer-federation contract that governs how the template's federation_ref pin behaves when III publishes spec updates (consumer review for minor; explicit decision for major). Citation only; ADR-008 does not bind III's contract.

## Self-reference (Standing Order #2)

This ADR demonstrates the airlock pattern by sitting on the federation seam between two vaults. The ADR's authoring vault (`aDNA.aDNA/`) is the self-referential aDNA documentation home; the federation_ref source vault (`III.aDNA/`) is the airlock canonical; the rollout owner (v3-EC `M05-EC`) is a successor campaign in this very vault. The 4-instance airlock lineage cited in §Context — III canonical → VideoForge reference → CanvasForge worked example → M08a multilateral — extends to a **5th instance** with this template stub. The stub's existence will make ecosystem instance #6 (per-vault adoption in v3-EC) cheaper.

Cross-link aggressively (Standing Order #10):
- 4 ADR companion links (006/007/009 + III ADR-002 cross-reference)
- 3 mission artifact links (M01 Obj 8 per-vault template, M08a AAR, M01 Obj 0 ecosystem matrix as transitive context)
- 2 III.aDNA cross-vault links (spec + reference instance)
- 1 successor campaign + 1 successor mission link (v3-EC + M05-EC)
- 1 coord memo link (publish-rewrite ancestor)
- 1 multilateral example glob link (17 v7 coord memos)

Total cross-links: **13+** in this ADR. Standing Order #10 ✓.

---

**Status**: Proposed at M03 Session 1 2026-05-11. Ratification at M03 phase gate (Session 3 mission close) on operator approval. Federation_ref pinned to III.aDNA airlock spec v0.2.0 (verified 2026-05-11). Per-vault adoption deferred to v3 successor campaign `M05-EC`. Template-stub file `.adna/how/airlock/AIRLOCK.md` lands at M03 Session 2 (Obj 3 Commit 12) per the M03 mission spec.
