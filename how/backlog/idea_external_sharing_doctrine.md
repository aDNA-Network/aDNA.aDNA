---
idea_id: idea_external_sharing_doctrine
type: backlog
title: "No doctrine says what may leave the lattice — generalize RiemannCommons' write gate into doctrine_external_sharing.md"
category: governance
status: proposed
priority: medium
effort: session
proposed_by: agent_rosetta
proposed_date: 2026-10-03
created: 2026-10-03
updated: 2026-10-03
last_edited_by: agent_rosetta
plan_id:
filed_from: how/missions/artifacts/sitrep_mid_campaign_20261003.md §5 S8
relates: [doctrine_credential_handling, doctrine_secret_scanning, doctrine_coordination_dropbox, mission_primer_adna_for_data_engineers, skill_vault_publish, skill_publish_tarball]
tags: [backlog, doctrine, external_sharing, write_gate, scrub, primer]
---

# A doctrine for what leaves the lattice

## Problem / Opportunity

`what/doctrine/` holds nine doctrines (credentials, secret scanning, drop-boxes, key rotation, safe mutations, site voice, STATE conventions, visual inspection, web quality) and **none defines what may be shared outside the lattice**. Public-vs-local-only is recorded per vault row in Home's workspace router; "T0/T1 by construction" is a WilhelmAI-local phrase; `skill_vault_publish` and `skill_publish_tarball` gate *pushes* and *tarballs*, not documents handed to a person. The only concrete instrument is `RiemannCommons.aDNA/what/write_gate_checklist.md` (no live mission state · no home paths, session IDs or internal doctrine text · every transmission logged with date + hash · gitleaks clean) — written for one commons. Operation Primer (2026-10-03) needed a scrub rule for a document going to an outside reader and had to adapt that checklist by hand.

## Proposed Solution

Author `what/doctrine/doctrine_external_sharing.md`: (1) the classes of outbound artifact (document to a person · memo to a peer vault · public push · tarball · message on a third-party platform); (2) the scrub rule per class, with the RiemannCommons seven as the floor plus the local-only vault list and persona-gloss rule; (3) the **transmission log** as mandatory (date · SHA256 · channel · recipient · release ref); (4) the control-grep discipline (a 0 before scrubbing is a broken control); (5) T0 handling of replies from humans on messaging platforms (Fluxer ADR-003). First instance: the Primer's `scrub_control.md`. Upstream candidate once it has ≥ 3 instances (patterns rule).

## Discussion

- 2026-10-03 (agent_rosetta): filed at the SITREP; the Primer mission's §Scrub is the first consumer and is written so it can be lifted verbatim.

## Decision

—

## Finding 2026-10-03 — the recipient-pull case (doctrine_coordination_dropbox §3 gap)

[D] City (Ledoux) pulled `coord_2026_10_03_rosetta_to_ledoux_*` from our tree into its own `inbox/` and **committed it** (`169c03b`, 14:58 PDT) *before* our send GO. §3's re-sync leg ("stamp the sender copy after delivering, then re-sync the delivered copy") cannot run: §2 forbids copying onto a committed peer file, and the recipient's commit is already the read-receipt. Disposition taken (session_stanley_20261003_223739_garnier_send_push_primer_o1): sender-side delivery-state fields stamped, `delivered_cmp: body_identical_both_sides` with the frontmatter divergence named, no write into City. **Gap:** the doctrine has no recipient-pull branch; the sharing doctrine proposed here should name one (sender stamps only; body md5 both sides is the identity check; the recipient's commit is the receipt). Fold with the §2/§3 text when this idea is adopted.

