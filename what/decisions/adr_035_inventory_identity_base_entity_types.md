---
type: decision
adr_id: adr_035
adr_number: 035
title: "Promote `inventory` (WHAT) + `identity` (WHO) from node-local extensions to base aDNA entity types (14 → 16); standard v2.2 → v2.3"
status: accepted
created: 2026-06-18
updated: 2026-06-18
ratified: 2026-06-18
last_edited_by: agent_rosetta
supersedes: none
superseded_by: none
revises: none
related:
  - how/backlog/idea_upstream_inventory_entity_type.md
  - how/backlog/idea_upstream_identity_entity_type.md
  - how/campaigns/campaign_hearthstone/campaign_hearthstone.md
  - how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md
  - what/docs/adna_standard.md
  - site/src/data/standard.ts
tags: [adr, decision, ontology, base_entity_types, inventory, identity, standard_version, v2_3, hearthstone, home_adna, node_adna, upstream]
---

# ADR-035: Promote `inventory` + `identity` to base entity types (14 → 16); standard v2.2 → v2.3

## Status

**accepted** — drafted 2026-06-18 (Rosetta); **ratified 2026-06-18 at the Operation Hearthstone Phase 0 gate** (operator approval). All three positions confirmed: promote `inventory`+`identity` (D1) · standard **v2.3** (D2 — kept distinct from the STR/Hearthstone "v8.0" release milestone) · **defer** `network_node_mirror`+`permission_edge` to a successor ADR (D3). This ADR changes the **aDNA standard** (the base ontology defined in `adna_standard.md`), so it is a standard change requiring **operator sign-off**: per Project Standing Order #1 (phase gates are human gates) and Standing Order #9 (upstream spec is source of truth — this vault demonstrates and explains; the spec defines). The operator **ratified at the Hearthstone P0 exit gate** (campaign Decision Point #2) on **2026-06-18**. Do not treat the entity-type promotion as in force until that ratification; the **materialization** (template edits in `.adna/`) is separately gated at Hearthstone **P5** (see §Ship Path).

This ADR is self-referential by design (Standing Order #8): `aDNA.aDNA` itself is an aDNA instance whose `what/decisions/` directory is the canonical home for exactly this kind of standard-evolution record — the file you are reading is a working example of the `decisions` base entity type deciding the addition of two new base entity types.

## Context

The base aDNA ontology defines **14 entity types** across the WHAT/HOW/WHO triad (`aDNA.aDNA/CLAUDE.md` § "Base Ontology (14 Entity Types)"; `site/src/data/standard.ts` `ENTITY_TYPE_COUNT = 14`):

| Triad Leg | Count | Entities |
|-----------|-------|----------|
| **WHO** | 3 | `governance`, `team`, `coordination` |
| **WHAT** | 4 | `context`, `decisions`, `modules`, `lattices` |
| **HOW** | 7 | `campaigns`, `missions`, `sessions`, `templates`, `skills`, `pipelines`, `backlog` |

`campaign_adna_v2_infrastructure` M04 (2026-05-11) bootstrapped the per-node operational vault (then `node.aDNA/`, now **`Home.aDNA/`**) and, in doing so, introduced **two new entity types** that do not exist in the base ontology:

- **`inventory`** (WHAT-leg) — point-in-time state of *what is installed/configured* on a node: installed vaults, system/tool state, network memberships. Structurally distinct from the four knowledge-artifact WHAT entities (`context`/`decisions`/`modules`/`lattices`), which capture knowledge and design records rather than installed-component state. Canonical reference: `Home.aDNA/what/inventory/` (`inventory_vaults` · `inventory_system` · `inventory_memberships`, each with a paired `.yaml` companion per Compliance Dimension D9, and a `federation` block in `inventory_memberships.yaml` per D7).
- **`identity`** (WHO-leg) — stable identity records that persist across sessions and validate against external reality: hostname, operator, machine class, persistent UUID, network peer-id / signing-key references. The WHO-leg complement to `inventory` (`inventory` = "what's installed"; `identity` = "who/where this node is"). Canonical reference: `Home.aDNA/who/identity/` (`identity_node` + `identity_lattice_protocol`, each with a `.yaml` companion per D9; a new identity-drift sub-pattern flags hostname/operator/UUID mismatch at high severity).

These two types are currently **node-local extensions**. They are well-formed (D9 companion pattern verified; D7 federation block verified), but because they are not in the base ontology they score **4/5 on Compliance Dimension D5 (Type vocabulary)** instead of 5/5, and every future node re-invents them ad-hoc. Two well-formed upstream proposals have been on the backlog since 2026-05-11:

- [[idea_upstream_inventory_entity_type]] — proposes `inventory` under WHAT.
- [[idea_upstream_identity_entity_type]] — proposes `identity` under WHO.

**Why now.** [[campaign_hearthstone|Operation Hearthstone]] (Hestia-chartered, Rosetta-owned) ships a complete, polished base `Home.aDNA/` into the public template (`aDNA-Network/aDNA`). A correct base `Home.aDNA/` *requires* canonical `inventory` and `identity` scaffolds — they are the WHAT/WHO substrate of a node vault. Hearthstone Phase 1 ("Entity-type foundations") is blocked until these two types are decided as base. This ADR is the Hearthstone P0 decision that unblocks P1; the campaign's own Decision Point #2 names "the inventory+identity → base ADR" as a P0/P1 ratification item.

### The version-track hazard (must not be conflated)

This vault carries **three distinct version tracks**, and the Hearthstone charter's shorthand ("at standard **v8.0**", tag `ontology_v8`) risks conflating them. `adna_standard.md` §15.4 is explicit that there are two standard-relevant tracks, and STR adds an operational-milestone label:

| Track | What it versions | Where it lives | Current value | Semver rule |
|-------|------------------|----------------|---------------|-------------|
| **A. Standard version** | The normative spec: triad architecture, **base ontology / entity types**, required files, conformance levels, naming | `adna_standard.md` header; `site/src/data/standard.ts` `STANDARD_VERSION` | **v2.2** | `vMajor.Minor` semver; minor MUST NOT invalidate conformant instances (§15.4) |
| **B. Governance version** | Operational implementation: this vault's protocols, templates, skills, tooling | `CLAUDE.md` `version` field, `CHANGELOG.md` | v6.0 / v7.2 (governance line) | `Major.Minor`; does **not** affect standard conformance (§15.4) |
| **C. STR / release milestone "v8.0"** | A program/governance milestone label used by `campaign_adna_serious_tool_readiness` and echoed by Hearthstone for the public release | STR + Hearthstone campaign docs | targeting "v8.0" | a milestone tag, **not** the `adna_standard.md` version |

The base ontology (the 14 entity types) lives in **Track A**. Adding two entity types is therefore a **Track A (standard-version) change** — it is *not* the same thing as the STR/Hearthstone **"v8.0"** label (Track C), and it is independent of the **governance** version (Track B). The widely-cited "v8.0" is the *release milestone* under which this and the other five Hearthstone ideas ship together; the *standard document itself* moves on its own v2.x line.

## Decision

### D1 — Promote two entity types to the base ontology (14 → 16)

Promote **`inventory`** (WHAT-leg) and **`identity`** (WHO-leg) from node-local extensions to **base aDNA entity types**. The base ontology grows from 14 to **16** entity types:

| Triad Leg | New count | Entities (additions in **bold**) | Purpose of addition |
|-----------|-----------|------------------------------------|---------------------|
| **WHO** | 3 → **4** | `governance`, `team`, `coordination`, **`identity`** | **who/where this entity is** — stable identity records that validate against external reality |
| **WHAT** | 4 → **5** | `context`, `decisions`, `modules`, `lattices`, **`inventory`** | **what's installed/configured** — point-in-time component/system/membership state |
| **HOW** | 7 | (unchanged) | — |

**Canonical placements** (the directory IS the type, per the standard's directory-as-ontology principle):

- `inventory` → `what/inventory/` (WHAT-leg). Subtype pattern: `vaults` / `system` / `memberships` / domain-specific extensions (e.g., a Platform vault inventorying deployment installs; Spacemacs inventorying installed layers/packages).
- `identity` → `who/identity/` (WHO-leg). Subtype pattern: `node` / `<network>` / `<platform_deployment>` / domain-specific extensions (e.g., a consumer-vault `who/identity/identity_consumer.md` declaring federation attribution).

**Typed shape (both types):**

- Both are **un-namespaced** base types (plain `inventory` / `identity`, not a namespaced extension) and carry **`merge: invariant`** semantics — the entity-type definition is stable across nodes; instance *content* varies, the *type contract* does not. (Per Hearthstone P1 scope + exit gate.)
- Each entity file is markdown-canonical with a **paired `.yaml` companion** (Compliance Dimension D9). The `.yaml` is the machine-readable projection; the `.md` is the human/agent narrative.
- `inventory_memberships` (and any network-facing inventory/identity record) carries a **`federation` block** (Compliance Dimension D7) governing opt-in cross-node sharing.
- `identity` records carry an **identity-drift discipline**: hostname / operator / persistent-UUID mismatch is a high-severity flag (surfaced by `skill_node_health_check`). This is a new sub-pattern the base ontology gains with the type.
- Standard base frontmatter (§7.2: `type`, `status`, `created`, `updated`, `last_edited_by`, `tags`); `type: inventory` / `type: identity` respectively.

### D2 — Standard version: **v2.2 → v2.3** (minor; additive; backward-compatible)

The standard document (`adna_standard.md`, Track A) bumps **v2.2 → v2.3** — a **minor** increment. This follows the standard's **own** semver policy in §15.4:

> Standard **minor** versions (e.g., v2.0 → v2.1) MUST NOT invalidate conformant instances. An instance conformant to aDNA v2.0 MUST remain conformant to aDNA v2.1.

Adding two entity types is **purely additive and backward-compatible**: it introduces *new* optional directories/types; it removes nothing, renames nothing, and tightens no existing requirement. Every instance conformant to v2.2 remains conformant to v2.3 unchanged (the new types are available, not mandated). This squarely satisfies the "minor MUST NOT invalidate" promise, so **v2.3 (minor)** is correct and **v3.0 (major) is not warranted** — §15.4 reserves major versions for breaking changes that require migration guidance, which this is not.

**Coordination with Track B and Track C.** This standard bump (Track A: v2.3) is the substantive change; it is carried **into the public template at Hearthstone P5 under the STR/release "v8.0" milestone label (Track C)** alongside the campaign's other five ideas. Hearthstone P5's `skill_template_release` performs a **"v8.0 two-track bump"** — that release operation bumps the **governance** version (Track B) for the operational template changes *and* records the **standard** version as **v2.3** (Track A). The "v8.0" the campaign names is the **release milestone**, under which the standard-doc value is v2.3 and the governance line advances per the release. The three tracks stay distinct: **standard → v2.3**, **governance → its next release value**, **milestone label → "v8.0"**.

> **Operator-confirmable point (version label).** This ADR recommends the standard go to **v2.3**, justified by `adna_standard.md` §15.4's own minor-vs-major rule. If the operator prefers to align the *standard-document* number with the "v8.0" program label (i.e., relabel the standard line itself rather than treat "v8.0" as a release milestone), that is a deliberate departure from the §15.4 semver convention and should be made explicit at the P0 gate. Recommendation: **keep them separate — standard v2.3, milestone "v8.0"** — to preserve the §15.4 backward-compatibility contract and avoid a spurious major bump.

### D3 — Batch scope: promote `inventory` + `identity` **now**; defer `network_node_mirror` + `permission_edge`

Promote **only** `inventory` and `identity` in this ADR. Both are **D9-companion + D7-federation verified** on the live `Home.aDNA` reference and have well-formed standing proposals — they are ready.

**Recommend deferring `network_node_mirror` and `permission_edge` to a follow-up ADR.** These are *candidate* node/network entity types raised in the Home/Network design space but are **not** at the same D9+D7-verified readiness as inventory/identity, and they carry open design questions (a node-mirror entity overlaps the Network.aDNA ingest model under LIP-0006-provisional; a permission-edge entity is entangled with the RemoteControl/permission-graph work that has no ratified shape yet). Promoting an under-specified type to *base* is high-cost to reverse (a base type is a standard-wide contract). The clean, low-blast-radius move is: ship the two ready types now, and open a separate ADR for `network_node_mirror` / `permission_edge` when (and only if) they reach the same readiness bar.

> **Operator decision (batching).** This is flagged, not silently decided. The recommendation is **promote 2 now, defer 2**. If the operator judges `network_node_mirror` and/or `permission_edge` to be equally D9+D7-ready and wants them in the same v2.3 batch, they can be added to D1 at the P0 gate (each would need its triad-leg placement, typed shape, and AGENTS.md/template requirement specified to the same bar as §D1). Absent that, they are **out of scope for ADR-035** and tracked for a successor ADR. (Mirrors Hearthstone Decision Point #2's "+ batching with `network_node_mirror`/`permission_edge`" open item.)

## Ship Path (materialization is gated — this ADR is the *decision*, not the edit)

This ADR **decides**; it does not modify the base template. Per Standing Rule 1 (never hand-edit `.adna/`), the materialization ships via **`skill_template_release`** at **Hearthstone P5**, *after* P0 ratification. Sequence:

1. **P0 (this gate):** operator ratifies ADR-035 (promotion + v2.3 + batching). Status flips `proposed → accepted`, `ratified` set.
2. **P1 (authoring, in the dev graph):** Hearthstone Mission 1 authors — in `aDNA.aDNA` and the release-staging path, **not** `.adna/` directly — the genericized scaffold `AGENTS.md` for `what/inventory/` and `who/identity/`, `template_inventory_entry.md` + `template_identity_entry.md`, `ontology.md` rows 15/16, and the updated **Base Ontology table** + `MANIFEST.md` ontology description (14 → 16).
3. **P5 (release):** `skill_template_release` assembles + embeds + performs the **two-track version bump** (standard → **v2.3**; governance → next release value), tags, and pushes to `.adna/` and the public `aDNA-Network/aDNA` image under the **"v8.0" release milestone**. Surfaces that cite the standard facts update in lockstep: `site/src/data/standard.ts` (`STANDARD_VERSION → 'v2.3'`, `ENTITY_TYPE_COUNT → 16`) and `adna_standard.md` header (`v2.3`).

Until P5 fires, the base template and the live site continue to read **v2.2 / 14 types** — and that is correct: the standard has not changed until it is released.

## Consequences

### Positive
- **Fork-time:** a fresh `git clone … && claude` that bootstraps `Home.aDNA/` gets **canonical `inventory` + `identity` scaffolds** from day one (the Hearthstone goal). New `<Name>.aDNA/` vaults that track installed components or declare identity get a standard type instead of inventing one.
- **D5 scoring:** `Home.aDNA` (and any future node) moves **D5 4/5 → 5/5** — the node-local types become canonical type-vocabulary.
- **Backward-compatible (§15.4 promise upheld):** zero existing vault breaks; the change is additive and the standard stays on its minor line.
- **Cascade unblocked:** observability/inventory consumers (e.g., Context.aDNA / Prometheus reading `Home.aDNA/what/inventory/*` as canonical data sources; consumer-vault `who/identity/` federation attribution) gain a stable, standard contract.

### Negative / cost
- A standard-version bump touches every surface that asserts the standard facts (the `standard.ts` single-source-of-truth file plus the `adna_standard.md` header). Mitigation: `standard.ts` exists precisely to make this a single edit that propagates (network-audit H1b remedy); the bump is mechanical and confined to P5's `skill_template_release`.
- Two new base types is two new things every conformance/template/AGENTS surface must account for going forward (templates authored, scaffold AGENTS.md maintained). Mitigation: the live `Home.aDNA` reference implementation already proves both shapes; P1 genericizes existing, verified artifacts rather than designing new ones.

### Neutral / migration
- **Existing vaults:** the node-local extensions become canonical with **no file moves** — `what/inventory/` and `who/identity/` are already the canonical placements, so `Home.aDNA` is conformant the moment the type is ratified. No batch migration script is required.
- **`_migration_version`:** not required for the promotion itself (no schema rewrite — the type contract is unchanged, only its canonicity changes). If a future cleanup re-stamps node-local inventory/identity files to mark them as conforming to the now-canonical type, an additive `_migration_version` (e.g. `inv-id-base-1.0`) MAY be set per `aDNA.aDNA/CLAUDE.md` § Migration Version; it is optional and must not strip existing frontmatter (§7 instance-field rule).
- **Coordination with Hearthstone's other P0 items:** ADR-035 is one of several P0 deliverables — it pairs with the ratification of the six backlog ideas (`inventory`/`identity` are two of the six), the `skill_template_release` source-map, and the router source-of-truth confirmation. ADR-035 specifically unblocks Hearthstone **P1** (entity-type foundations); the template/router/exemplar work in P2–P4 depends on P1, and all of it publishes together at P5.

## Operator-decision flags (resolve at the Hearthstone P0 gate)

1. **Ratify the promotion (D1):** `inventory` (WHAT) + `identity` (WHO) → base entity types, 14 → 16, un-namespaced, `merge: invariant`, placements `what/inventory/` + `who/identity/`. *(default: approve)*
2. **Confirm the version label (D2):** standard **v2.2 → v2.3** (minor, per §15.4), kept **distinct** from the STR/Hearthstone **"v8.0"** release milestone and from the governance version. Confirm v2.3 — or explicitly choose to relabel the standard line to align with "v8.0" (a departure from §15.4). *(recommendation: keep separate — standard v2.3, milestone "v8.0")*
3. **Confirm the batch (D3):** promote **2 now** (`inventory` + `identity`); **defer** `network_node_mirror` + `permission_edge` to a follow-up ADR — unless the operator judges them equally D9+D7-ready and adds them to D1 here. *(recommendation: 2 now, defer 2)*

## Related

- [[idea_upstream_inventory_entity_type]] — the `inventory` (WHAT) proposal this ADR adjudicates.
- [[idea_upstream_identity_entity_type]] — the `identity` (WHO) proposal this ADR adjudicates.
- [[campaign_hearthstone]] — the campaign this P0 decision unblocks (P1 entity-type foundations; P5 release).
- [[campaign_adna_serious_tool_readiness]] — STR, which owns the "v8.0" governance/release-milestone label (Track C) this ADR coordinates against. Operation aDNA Track C umbrella: see the Operation aDNA program record (`how/campaigns/campaign_operation_adna`).
- `what/docs/adna_standard.md` §3.1 (the triad/ontology) + §15.4 (the two-track semver policy that sets **v2.3**) — the source of truth this ADR amends.
- `site/src/data/standard.ts` — the `STANDARD_VERSION` / `ENTITY_TYPE_COUNT` single-source-of-truth surface that updates at P5 (`v2.3` / `16`).
