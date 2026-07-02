---
type: adr
adr_number: "043"
title: "Node-provisioning layer reconciliation — substrate/composition/brick split (AWSBootstrap ↔ Lighthouse ↔ cohort)"
status: accepted
created: 2026-06-29
updated: 2026-06-30
last_edited_by: agent_stanley
campaign_id: campaign_keystone
supersedes:
superseded_by:
tags: [adr, decision, keystone, awsbootstrap, lighthouse, node_provisioning, substrate, role_graph, federation]
---

# ADR-043: Node-provisioning layer reconciliation (substrate ↔ composition ↔ brick)

## Status

**Accepted — 2026-06-30** (ratified by the operator). Authored 2026-06-29 by Rosetta / `aDNA.aDNA` at the Operation Keystone post-completion frontier — **Decision #5**, the named survivor of the campaign close ([[how/campaigns/campaign_keystone/campaign_keystone|Operation Keystone]] §Follow-up). **Co-sign state at ratification (the operator's decision binds the ruling; the co-signs remain open):** Hestia (`AWSBootstrap.aDNA` + `Home.aDNA`) — acknowledgement still **pending** via the staged memo [[who/coordination/coord_2026_06_29_rosetta_to_hestia_lighthouse_adr043_cosign|coord_2026_06_29_rosetta_to_hestia_lighthouse_adr043_cosign]] (a boundary she would redraw requires an amendment); the Lighthouse persona-at-P0 (`Lighthouse.aDNA` is a `genesis_planning_stub`) — co-sign **consumed at its own P0**, not now; Rosetta (Keystone / standard owner) — co-signed. The decision is binding, but **the two handoff seams remain doctrine (non-operative)** until those co-signs land and Lighthouse reaches P0 (see Consequences). Extends [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] (the brick + the wall) under the [[what/decisions/adr_039_software_element_context_graph_umbrella|ADR-039]] umbrella; symmetric in spirit to [[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]] (which added the build-scale twin of the wall). Source: [[how/backlog/idea_awsbootstrap_lighthouse_cohort_reconciliation|idea_awsbootstrap_lighthouse_cohort_reconciliation]].

> **Co-sign update — 2026-07-02 (lifecycle-neutral back-reference, standard §7.7 rule 6):** the **Lighthouse-at-P0 co-sign LANDED** — Lighthouse P0 executed 2026-07-01 (aDNALabs Corps M-C1; persona ratified **Sostratus**, D-P3.1); Sostratus signed 2026-07-02T06:02:48Z confirming the three-layer split, both seams, route-not-reauthor, and the Home credential seam; no boundary redraw ([[who/coordination/coord_2026_07_02_sostratus_to_rosetta_lighthouse_adr043_cosign_notify|inbound notify]]; signature record `Lighthouse.aDNA/who/coordination/coord_2026_07_01_lighthouse_adr043_cosign.md`). **Hestia's co-sign remains pending** → the seams stay doctrine-non-operative until it lands. Status field unchanged (`accepted`).

## Context

Three vaults all "install node software," and their boundaries were never written down:

- **`AWSBootstrap.aDNA`** (Hestia) — the portable AWS→aDNA node *wake-up kit*: dropped onto a raw cloud instance, an agent acquaints itself with the machine and bootstraps it into an aDNA node (campaign phases Acquaint → Assess → Setup → Operate → Validate).
- **`Lighthouse.aDNA`** (persona TBD-at-P0; `genesis_planning_stub`) — the deployable integrated node: it *composes* a chosen set of software graphs into a running node stack (profiles core / collab / inference / ops).
- **The `<Software>.aDNA` cohort** ([[how/campaigns/campaign_keystone/campaign_keystone|Operation Keystone]], 10 graphs) — the per-software bricks the other two install and compose.

[[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] already named two of the three layers — the **brick** (each cohort graph owns one software's install/operate/…) and the **wall** (Lighthouse composes bricks, federate-not-duplicate). It did **not** name the **ground** the wall stands on. `Lighthouse.aDNA`'s own `what/vision/vision_integrated_lighthouse.md` flags the unresolved AWSBootstrap/Home relationship. Left unreconciled, all three accrete overlapping install logic — the exact duplication the four-wrapper contract ([[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] §2) exists to prevent, one layer up. The cohort is seeded (10 stubs) and Lighthouse is about to compose them onto nodes; **this seam should be ruled before that install logic proliferates onto AWS instances.**

This is the brick / wall / **ground** completion of the metaphor already carried in [[what/patterns/pattern_software_element_context_graph|pattern_software_element_context_graph]] — the same self-referential lesson the pattern teaches, extended down to the substrate the whole stack stands on.

## Decision

### 1. A three-layer node-provisioning split (names the ground)

| Layer | Vault | Owns | Does NOT own |
|-------|-------|------|--------------|
| **Brick** | each `<Software>.aDNA` (cohort) | one software's install / operate / configure / update / interoperate | composition; pre-aDNA bootstrap |
| **Composition / role** (the *wall*) | `Lighthouse.aDNA` | *composes* cohort bricks into a node-stack profile; node-operator UX; context-sync | per-software install (federates the brick — ADR-037 §2) |
| **Substrate / wake-up** (the *ground*) | `AWSBootstrap.aDNA` | acquaints an agent with a raw cloud instance; the *pre-aDNA* bootstrap (OS / SSM / docker / mesh readiness); the handoff to Lighthouse + cohort | per-software installs; the composition role |

The cohort = the bricks; `Lighthouse` = the wall; `AWSBootstrap` = the ground the wall stands on.

### 2. Two handoff seams

- **`AWSBootstrap → Lighthouse`** — once the substrate is awake (an addressable, aDNA-ready node on the mesh), AWSBootstrap hands the node to Lighthouse to compose a stack. AWSBootstrap stops at *"a node an agent can stand a stack on"*; it does not choose or install the stack.
- **`Lighthouse → cohort brick`** — Lighthouse selects a profile and, per software, **routes to the cohort brick** for install/operate; it does not re-author per-software install. (This is ADR-037 §2's federate-not-duplicate, applied at the composition layer.)

### 3. Route-not-reauthor (the federate discipline, one layer up)

`AWSBootstrap` **routes** to cohort bricks for any per-software install it triggers during or after wake-up, rather than carrying its own copy of that software's install logic — the same discipline [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] §2 applies to wrappers, lifted to the substrate layer. AWSBootstrap's `aws_node_ops` seed context stays scoped to *pre-aDNA substrate readiness* (posture-snapshot / ssm-connection / docker-as-root / tailscale-readiness); anything that is "operate software X" belongs to `X.aDNA` and is **reached, not re-authored.**

### 4. Credential-routing seam (all three defer to Home)

All three layers defer to the `Home.aDNA` / Hestia credential broker, **names-only** (Standing Rule 6; the same credential-routing wrapper [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] §2 puts on every brick). No layer hard-codes secret handling; AWSBootstrap's node-credential needs route through Home exactly as a cohort brick's do. (AWSBootstrap's node-home role already moved to `Home.aDNA` — 2026-06-02 handoff — so this records an existing fact, not a new dependency.)

### 5. Home + co-signers

This ADR is **standard material, homed in `aDNA.aDNA`**, co-signed by Hestia (AWSBootstrap / Home) + the Lighthouse persona-at-P0 + Rosetta (Keystone). `Lighthouse.aDNA` is a `genesis_planning_stub`; its co-sign is **consumed at its P0** — this ADR is an input that P0 ratifies, not a pre-emption of Lighthouse's internal architecture. The ruling is **non-blocking** for the current clean cohort wave (Nextcloud / Caddy / Bitwarden / Container carry no AWSBootstrap overlap); it should land before the cohort proliferates install logic onto AWS nodes.

## Consequences

### Positive
- Names the previously-unnamed substrate layer, completing the brick / wall / **ground** model in [[what/patterns/pattern_software_element_context_graph|pattern_software_element_context_graph]].
- Prevents three vaults from re-deriving per-software install logic — the federate-not-duplicate guarantee of ADR-037, extended up the provisioning stack.
- Gives `Lighthouse.aDNA`'s P0 a ratified substrate seam to build on (resolving the open AWSBootstrap/Home question its vision flags).
- AWS-node deployment of the cohort gets a clean wake-up → compose → install handoff before it is needed at scale.

### Negative / follow-ups (named, not executed here)
- **Co-sign + ratification pending** — proposed only; the two seams are not operative until Hestia + Lighthouse-P0 acknowledge and the operator ratifies.
- **Lighthouse P0 dependency** — the `Lighthouse → cohort brick` seam is fully exercised only once Lighthouse reaches P0 (gated on Git.aDNA's integration mission + the P7 spike). Until then the seam is doctrine, not running code.
- **AWSBootstrap build-out constraint** — the substrate-routing rule (§3) is a constraint AWSBootstrap's Phase 2–6 build-out (`campaign_genesis_aws_node_bootstrap`) must honor; flagged to Hestia via the co-sign memo, not imposed here.

### Neutral
- Records (does not create) AWSBootstrap's existing Home-credential dependency.
- No new aDNA category and no new frontmatter field — unlike the ADR-037 / ADR-041 *subtypes*, this is a **seam ruling between existing vaults**, not a new subtype.

## Amendment History

| Date | Mission | Amendment summary |
|------|---------|-------------------|
| 2026-06-29 | Keystone post-completion frontier (Decision #5) | ADR created (proposed) — three-layer node-provisioning split (substrate / composition / brick), two handoff seams, route-not-reauthor (§3), credential-routing seam (§4). Co-sign requested (Hestia + Lighthouse-P0 + Rosetta); awaiting operator ratification. |
| 2026-06-30 | `session_stanley_20260630T215340Z_adr_ratification` | **Operator ratification — `status: proposed → accepted`.** The decision binds; Hestia's ack (coord memo still open) + Lighthouse-P0's co-sign (consumed at its own P0) remain pending, so the two handoff seams stay **non-operative** until they land + Lighthouse reaches P0. A boundary redraw from Hestia would require a further amendment. |
