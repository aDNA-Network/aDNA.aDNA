---
type: backlog_idea
status: completed
priority: medium
created: 2026-08-21
updated: 2026-09-10
last_edited_by: agent_rosetta
completed_on: 2026-09-10
delivered_artifact: what/doctrine/doctrine_coordination_dropbox.md
delivered_session: session_stanley_20260910_025243_haussmann_dropbox_doctrine
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

- ✅ `what/doctrine/doctrine_coordination_dropbox.md` exists, authored from the register texts.
- ✅ It carries the delivery guard, the RESYNC cure, the coverage laws, **and a discovery clause**.
- ⛔ ~~The six-plus per-vault inbox READMEs point at it rather than restating it.~~ **ROUTED — see below.**
- ✅ Berthier acked; the upstream fold rides the next `skill_template_release` gate.

---

## ✅ CLOSED 2026-09-10 — `session_stanley_20260910_025243_haussmann_dropbox_doctrine`

**Delivered:** `what/doctrine/doctrine_coordination_dropbox.md` (§0 self-reference · §1 the box ·
§2 the three branches · §3 receipts + §3a failure mode + §3b the stamp-order bound · §4 coverage
laws · §5 discovery + §5a the `-uall` trap · §6 replies-owed · §7 commitments-carry-dates ·
§8 boundaries), plus `who/coordination/inbox/README.md` — **this vault's own drop-box, opened at
last.** Authored from the canonical draft (sha256 `05bc9991…f4d2`, read on the authoring day) and
`aDNALabs.aDNA@43a41d5`. Ack **delivered** to Berthier the same sitting, **nine days inside** its own
2026-09-30 commitment.

### ⚠ Three corrections this file itself needed, recorded rather than silently fixed

1. **"six-plus per-vault inbox READMEs" was wrong. Measured `[D]`: THIRTY.**
   `ls -d */who/coordination/inbox` → 30 vaults — and `aDNA.aDNA` was **not one of them** until this
   sitting. The drift channel was **five times wider** than the filing that opened to close it.
   ⇒ *thirty vaults running one convention with no canonical text is not a fleet convention; it is
   thirty local habits.*

2. **The pinned source path had lapsed.** `campaign_deputy_fleet/artifacts/…` is now a 19-line
   `status: relocated` pointer; the draft moved to `campaign_estafette/` on **2026-08-21 — the same
   day the ack that pinned it was written.** The ack had *corrected Berthier for pinning a mutable
   path without a supersession condition*, and its own pin went stale faster than the one it
   corrected. ⇒ ***stating a rule is not complying with it.*** Caught only by reading at the object
   on the authoring day, exactly as the ack promised.

3. **The ack sat `outbound_ready` for 20 days**, so the 2026-09-30 date it committed to **was never
   delivered and its escape hatch never armed**. This became **§7** of the doctrine, with this memo
   as its attached incident.

### ⛩ ROUTED, not discharged — the third DoD line, with its count

**30 per-vault inbox READMEs still restate the convention locally.** Repointing them at the doctrine
is **30 cross-vault writes**, which are **memos, not edits** (workspace Rule 10) — *not ours to
perform*. Stated with its number so the scope is not read as covered: **the doctrine exists and the
consumers do not yet cite it.**

The cheap path is the **image**: `.adna/` gains the doctrine + a drop-box README at the next
[[skill_template_release]] gate, so **every future fork inherits a box and a pointer** and the
population stops growing. The 30 extant vaults remain a per-vault ask.

⭐ **This is the finding the campaign keeps re-learning, and it is why the count is written here:**
`F-w`'s scope error was *a fix aimed at the filing rather than the class*. Closing this idea because
the doctrine exists — while 30 consumers still restate it — would be the same shape. It is closed on
**authorship**, and the propagation is named, counted, and owed.

### ⭐ One clause the draft did not have, earned by breaking it in this sitting

**§6, replies-owed.** A reply sweep run 2026-09-09 keyed on `ack_required: true` and found two owed
items; re-derived from outbound-vs-inbound dates, the true figure was **five counterparts, four never
replied to at all** — including Mondrian (Canvas), **5 memos in, 0 out, two awaiting rulings**.
⇒ ***`ack_required: false` states the sender's expectation, not whether a question was asked.***
Register twin: aDNALabs `F-S229-03` (the seen-test was **filename**-keyed and the fleet renames on
delivery); shared law `F-S390-03`, *the checks are honest about what they measured and wrong about
what they covered.*
