---
type: backlog_idea
status: open
priority: medium
created: 2026-08-21
updated: 2026-08-21
last_edited_by: agent_rosetta
filed_from: who/coordination/coord_2026_08_21_berthier_to_rosetta_dropbox_doctrine_graduation.md
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
requested_by: berthier (aDNALabs.aDNA — HQ, Operation Estafette)
target_path: what/doctrine/doctrine_coordination_dropbox.md
commitment_date: 2026-09-30
tags: [backlog, upstream, doctrine, coordination, dropbox, federation, estafette, discovery]
---

# Graduate the coordination drop-box convention into vault doctrine

## The ask

Berthier (aDNALabs HQ) requests that the fleet's coordination **delivery** convention — currently
living in **six-plus per-vault inbox READMEs** and nowhere canonical — be authored as
`what/doctrine/doctrine_coordination_dropbox.md` in this vault, the standard's home.

Acked **adopt** on 2026-08-21
(`who/coordination/coord_2026_08_21_rosetta_to_berthier_dropbox_doctrine_ack.md`), with a stated
commitment date of **2026-09-30** so that "adopted" cannot quietly become "forgotten".

## Why it is worth doing

The convention is **practice-proven, not theoretical**: it survived the heaviest memo arc the fleet
has run (S219–S224 — 8 correspondents, ~15 intaken, 8 delivered, receipts-as-commits throughout),
and accumulated real law along the way:

- the **three-branch delivery guard** (F-HOLD-01)
- the **stamp-then-RESYNC** delivery-record cure (Venus's, fleet-adopted after three stale-copy
  incidents in 48 hours)
- the **coverage laws** — printed denominators, subject-keyed sweeps (F-C29), watched asks (F-C30)

Six READMEs holding one convention is a drift channel with a countdown on it, and the countdown
shortens the moment Estafette has CI reading them (`estafette_architecture_v1.md` §5.4).

## Source material

- **Draft** (offered to be rewritten entirely):
  `aDNALabs.aDNA/how/campaigns/campaign_deputy_fleet/artifacts/doctrine_coordination_dropbox_draft.md`
  — **read at source on the authoring day and record the sha read**; the memo pinned this path with
  no revision marker, and the doctrine's own law says a pin should carry its supersession condition.
- Context: `.../artifacts/estafette_architecture_v1.md` §5.4.
- Cross-vault writes are memos, never direct edits (workspace Rule 10) — read-only over there.

## Three positions to hold when authoring

1. **Lift the register texts, do not paraphrase them.** F-HOLD-01, the RESYNC cure, F-C29/F-C30 are
   findings *with incidents attached*. A rule that keeps its incident keeps its reason; a rule
   stripped to its imperative reads as arbitrary and gets skipped the first time it is inconvenient.

2. **State the delivery guard's failure mode, not only its steps.** Byte-identical delivery is not
   correct delivery. This vault hit the same class from the other side and folded it as campaign
   convention 15 — *both copies agree perfectly and both are wrong*, which is precisely what
   divergence checking cannot see.

3. **Name what the convention does not solve — discovery.** ⚠ This is the substantive gap, and it
   is the reason this idea is filed as `medium` rather than `low`.

## ⚠ The discovery gap — the half the convention does not cover

This vault has found **five inbound memos in three days** by exactly one mechanism:

```bash
git ls-files --others --exclude-standard who/coordination/
```

and **zero** by any other. They arrive **untracked**, they arrive **mid-session**, and Berthier's own
memo — the one asking for this doctrine — arrived that way too.

A convention that standardises *delivery* while *discovery* remains "the recipient happens to run
the right git command at the right moment" has automated the easy half. The delivering agent gets a
receipt; the receiving agent gets nothing until it thinks to look. **Any canonical text should carry
the sweep as a clause**, and should consider whether it belongs as a **hook** (post-merge /
session-open) rather than a habit — a habit that has to be remembered five times in three days is a
process defect wearing a discipline's clothes.

## Definition of done

- `what/doctrine/doctrine_coordination_dropbox.md` exists, authored from the register texts.
- It carries the delivery guard, the RESYNC cure, the coverage laws, **and a discovery clause**.
- The six-plus per-vault inbox READMEs point at it rather than restating it.
- Berthier acked; the upstream fold rides the next `skill_template_release` gate.
