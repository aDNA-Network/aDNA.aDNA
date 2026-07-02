---
type: idea
status: resolved
created: 2026-06-20
updated: 2026-07-02
last_edited_by: agent_rosetta
campaign_id: campaign_keystone
graduated_to: what/decisions/adr_043_node_provisioning_layer_reconciliation.md
tags: [idea, keystone, awsbootstrap, lighthouse, reconciliation, adr_candidate]
---

> **GRADUATING (2026-06-29):** authored as **[[what/decisions/adr_043_node_provisioning_layer_reconciliation|ADR-043]]** (`status: proposed`) at the Keystone post-completion frontier (Decision #5). Three-layer split + two seams + route-not-reauthor + credential seam ruled per the scope memo. Co-sign requested → [[who/coordination/coord_2026_06_29_rosetta_to_hestia_lighthouse_adr043_cosign|Hestia + Lighthouse-P0 memo]]; awaiting operator ratification. This idea closes when ADR-043 is `accepted`.

# Reconcile AWSBootstrap ↔ Lighthouse ↔ the `<Software>.aDNA` cohort (ADR candidate)

## The overlap (recon finding)

Three things all "install node software," and their boundaries are unstated:

- **AWSBootstrap.aDNA** (Hestia) — a portable AWS→aDNA node "wake-up kit": drop onto an instance → an agent acquaints itself + bootstraps it into an aDNA node.
- **Lighthouse.aDNA** (genesis stub) — the deployable integrated node: composes a chosen set of software graphs into a running node stack.
- **The `<Software>.aDNA` cohort** ([[how/campaigns/campaign_keystone/campaign_keystone|Operation Keystone]]) — the per-software bricks the other two install/compose.

Lighthouse's own `vision_integrated_lighthouse.md` already flags the unresolved AWSBootstrap/Home relationship. Left unreconciled, the three proliferate overlapping install logic.

## Proposed resolution (to ratify as an ADR)

A clean three-layer split, to be co-signed by the three personas:

- **The cohort = the bricks.** Each `<Software>.aDNA` owns one software's install/operate/configure/update/interoperate.
- **Lighthouse = the composition/role layer.** It *composes* cohort bricks into a node stack; it does not re-author per-software install.
- **AWSBootstrap = the substrate/wake-up layer.** It acquaints an agent with a raw cloud instance and hands off to Lighthouse + the cohort; it owns the *pre-aDNA* bootstrap, not the per-software installs.

## Next step

When greenlit, author the reconciliation ADR (likely homed in `aDNA.aDNA` as standard material, co-signed by Hestia + Lighthouse-persona-at-P0 + Keystone). Gate: do not let the cohort proliferate overlapping install logic before this lands. Non-blocking for the current clean net-new wave (Nextcloud/Caddy/Bitwarden carry no AWSBootstrap overlap).


## Champollion G0 disposition — D (M1.1, 2026-07-02)

**ALREADY-DISCHARGED.** Evidence: authored as ADR-043; ADR-043 accepted 2026-06-30 (co-sign from Hestia + Lighthouse-P0 pending -> seams non-operative, but the idea closes). Status set to `resolved`; ratified at Champollion G0 (D2).
