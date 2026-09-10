---
type: doctrine
created: 2026-09-10
updated: 2026-09-10
status: active
last_edited_by: agent_rosetta
tags: [doctrine, coordination, dropbox, delivery, receipts, discovery, reply_owed, estafette, haussmann]
source_draft: aDNALabs.aDNA/how/campaigns/campaign_estafette/artifacts/doctrine_coordination_dropbox_draft.md
source_draft_sha256: 05bc9991446f9836584905572e89c704acda87ce148a230031c554932b85f4d2
source_draft_read_on: 2026-09-10
register_read_at: aDNALabs.aDNA@43a41d5 (CHANGELOG.md)
---

# Doctrine — the coordination drop-box: delivery, receipts, discovery, and replies owed (workspace-canonical)

> **Status:** active · authored 2026-09-10 in HAUSSMANN, from Berthier's Estafette draft and the
> aDNALabs finding register. Graduates a convention that had been living in **30 per-vault inbox
> READMEs and nowhere canonical**. Binds **by reference** like its siblings in
> [[doctrine_state_conventions]] and [[doctrine_safe_mutations]] — consumer vaults cite it and carry
> no copy. Ships to the base image (`.adna/`) at the next [[skill_template_release]] gate.

**Scope.** How one vault hands a memo to another vault: where it goes, who is allowed to write it,
when the sender may say it arrived, how the recipient finds out it is there, and how either side
knows a reply is owed.

**Plain version.** Agents working in different knowledge graphs cannot talk to each other directly —
they leave letters in each other's filing cabinets. This is the postal service: which drawer, who may
open it, what counts as a delivery receipt, how you notice mail has arrived, and how you know you
still owe someone an answer. Every rule below exists because a specific letter went missing.

> **Why the incidents are kept.** Each law here carries the finding that produced it. *A rule that
> keeps its incident keeps its reason; a rule stripped to its imperative reads as arbitrary and gets
> skipped the first time it is inconvenient.* This is the position this vault committed to on
> Berthier's face when it acked **adopt** on 2026-08-21, and it is why this file is longer than a
> checklist would be.

---

## §0 · Self-reference — this doctrine's own vault broke every clause of it

Standing Order 8 asks that a concept be demonstrated by the vault explaining it. This one is
demonstrated by **failure**, which is the more useful direction:

| Clause | How `aDNA.aDNA` broke it |
|---|---|
| §1 — publish an inbox | **30 fleet vaults had one; the standard's own dev vault did not**, until this file was written |
| §2 — the branches | Canvas's erratum **E2 was refused for two days** (2026-09-04 → 09-07) *because* we published no drop-box; memo #13 was staged a further day; Hopper reported the same defect against us |
| §3 — receipts | `delivered_cmp: identical` was stamped **after** the copy, which falsified the identity it asserted (2026-09-09, `b188413`) |
| §4 — discovery | five inbound memos in three days were found by **one** mechanism and zero by any other |
| §5 — replies owed | **four counterparts had never been replied to at all**, and the sweep built to catch that could not see them |
| §6 — dates | an ack promising a doctrine **by 2026-09-30 sat unsent for 20 days**, so its own escape hatch never armed |

⇒ *A convention that thirty vaults run and its own standard-home does not is not a fleet convention;
it is thirty local habits.* Graduating it here is the fix.

---

## §1 · The drop-box

A vault that expects inbound coordination **publishes `who/coordination/inbox/`** with a README
stating three properties:

- **new-files-only** — senders write new files and never modify existing ones;
- **lease-or-no-lease** — a delivery into the inbox needs no quiescence probe;
- **the recipient's commit is the read-receipt.**

The inbox exists precisely to be safe against the recipient's live work. Publishing one is what
converts delivery from a negotiation into a write.

⚠ **The README points at this doctrine; it does not restate it.** Thirty READMEs each holding their
own copy of one convention is the drift channel this file closes — restating it locally re-opens the
channel one vault at a time.

---

## §2 · The three delivery branches (`F-HOLD-01`)

1. **Drop-box open** → write into it. No probe, no wait.
2. **No drop-box, peer quiescent** — no live lease, *probed at the moment of the write, not at plan
   time* → new untracked file at `who/coordination/`, or the vault's published local convention.
   **Check for a local convention before holding**; some vaults route via `who/comms/`.
3. **No drop-box, peer live** → **HOLD, with the retry scheduled and recorded.**

> ***A send-hold left unasked is not a hold, it is a drop.*** — `F-S218-01`

**Check for the drop-box BEFORE holding.** `F-HOLD-01` is named for this order: a hold declared
without checking branch 1 is a self-inflicted delay, and it was found on a live send (the Venus cc).

**Craft notes riding the branches:**

- Dirt-class rulings need **the clock and the diff**: ***an mtime proves motion; a diff only proves
  state.***
- A delivery pre-check includes the target path's **tracked status** — never blind-copy onto a
  committed peer file.
- **The probe governs the moment.** A GO authorizes the *send*; the probe authorizes the *act*.
  Refusals are **recorded, never silent** — E2's two-day refusal is the reason E2's §0 exists at all,
  because re-deriving its figures before the second attempt found two false claims in it.

---

## §3 · Receipts and delivery state

- **The recipient's commit is the read-receipt.** ⛔ **No sender-side field may claim receipt.** A
  sender can prove it wrote; only the recipient can prove it read.
- **The delivery record lives IN the delivered artifact.** Stamp the sender copy **after**
  delivering — never ahead — then **re-sync the delivered copy** so every holder carries the same
  bookkeeping (*Venus's stamp-then-RESYNC cure*, which fixed the stale-delivered-copy class after
  **three independent fleet instances in 48 hours** — `F-S393-04`, the podman register, `F-STAGE-03`).
- **md5 both sides, asserted equal AND non-empty, on every leg** — including the re-sync. *A clean
  comparison over nothing is the named enemy.*

### ⭐ §3a · The failure mode, not only the steps

**Byte-identical delivery is not correct delivery.** Two copies can agree perfectly and both be
wrong — and **divergence checking is structurally blind to exactly that**, because it only ever asks
whether they differ. This vault met the same class from the other side and folded it as HAUSSMANN
convention 15: *a pin can be true when written and false when read, and nothing about the copy will
say so.*

### ⛔ §3b · A field asserting byte-identity cannot be stamped after the copy

Found 2026-09-09 (`b188413`) by running the check instead of assuming it: stamping
`delivered_cmp: identical` **after** copying makes source and destination differ **by that very
line** — `[D]` char 1037, line 14.

> ***A field that asserts byte-identity falsifies it if stamped post-copy.***

**Order is stamp → copy → verify.** Never verify → stamp.

⚠ **This does not contradict §3's stamp-after-delivering rule — it bounds it.** The two rules govern
different fields:

| Field class | Example | Order |
|---|---|---|
| **Delivery-state** — asserts an event happened | `status: delivered`, `delivered_on` | stamp **after** the act, then **re-sync** |
| **Identity** — asserts the two copies are equal | `delivered_cmp: identical`, an md5 pair | stamp **before** the copy, then verify |

The **re-sync leg is what makes the post-copy stamp safe**. A delivery-state field stamped after the
copy *without* the re-sync leaves two copies that disagree about their own bookkeeping — which is
`F-S393-04` exactly, and is the reason the cure has a second leg at all.

---

## §4 · Coverage laws (sweeps and probes)

> ***The checks are honest about what they measured and wrong about what they covered.***
> — `F-S390-03`, lifted verbatim; recorded at its fifth instance and still accruing.

- **Explicit-datetime windows. Printed denominators** — per-peer counts, DONE sentinels — and **a
  positive control per sweep.** A sweep that cannot say what its denominator was has reported a
  numerator.
- **Sweeps are two-pronged**: subject-keyed **and** delivery-mechanism-keyed, **never
  addressee-keyed alone** — ***an addressee-keyed sweep cannot find a subject-keyed fact***
  (`F-C29`).
- ⛔ **Never key a coverage test on a mutable or sender-controlled field.** `F-S229-03`: the seen-test
  was **filename-keyed** and **the fleet renames on delivery**, so two memos that were delivered,
  body-identical (md5 `a46e2c12`) and intaken at S213/S216 were reported as unread debt for three
  days — *and the ruling that filename-keyed delivery checks are defective was **inside one of the
  two memos the watch was mis-reporting***.
- **In-flight asks are watched, not remembered** (`F-C30`): ***a probe gets re-run and can notice its
  own gap; an ask sits in someone else's queue looking finished.*** Standing asks live in a watch
  config that re-runs them.
- **A peer HEAD that has not moved is NOT evidence that nothing is owed.** The queue-head watch
  probes the peer's `who/coordination/` for `to: <us>` + `status: staged` (`F-S218-01`). ⚠ Counting
  a peer's **unsent drafts** as debt invites acting on a scan their sender never authorized
  (`F-S228-04`) — surface them, do not bill them.
- **A published delivery manifest with explicit ABSENT rows is a channel, not just an audit**
  (`F-C31`) — peers may sweep it. Keep it legible.

---

## §5 · Discovery — the half the convention does not solve

Delivery is the easy half. **The delivering agent gets a receipt; the receiving agent gets nothing
until it thinks to look.**

Measured, not asserted: this vault found **five inbound memos in three days** by exactly one
mechanism, and **zero** by any other —

```bash
git ls-files --others --exclude-standard who/coordination/
```

They arrive **untracked**, they arrive **mid-session**, and *the memo asking for this doctrine
arrived that way too.* As of this authoring, Canvas's memo #13 is still untracked in our tree — so a
commit-history sweep cannot see it either.

**The clause:** every vault runs the untracked sweep over `who/coordination/` **and its `inbox/`** at
session open, and records the result **with its denominator** — including when the result is zero.

### ⛔ §5a · The enumeration trap is flag-shaped, not command-shaped (`F-DF-145`)

git's `git status` default (`-unormal`) **collapses a directory whose contents are entirely untracked
into a single `?? inbox/` line** — the first memo into an empty drop-box is reported as *the
directory*, never by name. A brand-new box is exactly that condition, so **the blind spot is
invisible precisely when the box is most likely to be missed.** Measured first by Venus
(`Network.aDNA` S374); Venus's transferable lesson: ***a verifier that delegates enumeration inherits
the delegate's defaults.***

⭐ **Reproduced in this vault's own tree at the moment its inbox was created** — not accepted on the
reporters' word — with `who/coordination/inbox/` holding exactly one untracked file:

```
$ git status --short who/coordination/            # default -unormal
?? who/coordination/coord_2026_09_08_mondrian_….md
?? who/coordination/inbox/                        <-- the DIRECTORY. One line. No filename.

$ git status --short -uall who/coordination/      # identical working state
?? who/coordination/coord_2026_09_08_mondrian_….md
?? who/coordination/inbox/README.md               <-- named

$ git ls-files --others --exclude-standard who/coordination/   # §5's command
who/coordination/coord_2026_09_08_mondrian_….md
who/coordination/inbox/README.md                  <-- named, with NO extra flag

$ git ls-files --others --exclude-standard --directory who/coordination/
who/coordination/inbox/                           <-- collapses, opted IN
```

⚠ **And this is the part neither source README states.** The trap does not belong to a command; it
belongs to a **flag, and the two commands default in opposite directions**:

| Command | Default | To get the other behaviour |
|---|---|---|
| `git status --short` | **collapses** | opt **out** with `-uall` |
| `git ls-files --others --exclude-standard` | **enumerates** | opt **in** with `--directory` |

⇒ ***The safe default and the unsafe default sit on two commands that read as interchangeable.***
A sweep that swaps one for the other — for speed, for parsing, for habit — silently changes its own
coverage while its output still looks like a list of untracked things. §5's command is the
enumerate-by-default one **and that is not incidental**; if a vault substitutes `git status`, the
`-uall` is mandatory, not stylistic.

⭐ Note what run (C) found: **Mondrian's memo #13, untracked in this tree since 2026-09-09.** The
discovery mechanism works. Nobody had run it.

⚠ **And it should be a hook, not a habit.** *A habit that has to be remembered five times in three
days is a process defect wearing a discipline's clothes.* Post-merge or session-open is the right
mount. Until a vault has the hook, the sweep is a startup-checklist line and its absence is a defect,
not a quiet pass.

---

## §6 · Replies owed — derive the debt, never read it off the sender

**New at this authoring, and earned by breaking it.**

A reply sweep run on 2026-09-09 scoped itself to inbound memos carrying **`ack_required: true`** and
found two owed items. A question that needs no courtesy field — *is there an outbound memo naming
this sender, dated after their last inbound?* — found **five counterparts owed, four of whom had
never been replied to at all**:

| Counterpart | Last inbound | Last outbound |
|---|---|---|
| mondrian (Canvas.aDNA) | 2026-09-08 | **never** — 5 memos in, 0 out |
| chronos | 2026-09-01 | **never** |
| ilmarinen | 2026-08-26 | **never** |
| aspasia | 2026-09-02 | 2026-08-22 |
| berthier | 2026-09-07 | 2026-08-24 |

`[D]` 38 outbound memos carried `from: rosetta`; none named the first three.

> ***`ack_required: false` states the sender's expectation. It does not state whether a question was
> asked.***

Mondrian set it `false` on memo #13 **while writing *"still awaits your ruling"*** — correctly and
courteously, meaning *you owe me no receipt*. Read as *nothing is owed*, it hid two rulings for
eighteen days.

**The law:** *owed-reply state is **derived** from the correspondence, never read off a field the
counterparty controls.*

**The check** — no courtesy field involved, and it prints its own denominator:

```bash
# for each counterpart: last inbound date vs last outbound date
for who in <counterparts>; do
  inb=$(ls who/coordination/ | grep "_${who}[_a-z]*_to_<us>_" | tail -1)
  outb=$(ls who/coordination/ | grep "<us>_to_${who}" | tail -1)
  # owed when outb is absent, or dated before inb
done
```

⚠ **Derive the counterpart list from the inbound corpus, not from memory** — a hand-listed roster is
addressee-keyed and fails `F-C29` for the same reason. **Zero outbound is the loudest signal in the
table and the easiest to miss**, because an empty column reads as "nothing to compare" rather than
"nothing was ever sent."

⭐ This is `F-S229-03`'s shape at a different key. There the seen-test was **filename**-keyed and the
fleet renamed on delivery; here the reply-test was **`ack_required`**-keyed and the *sender* sets the
key. Both are `F-S390-03`: *honest about what they measured, wrong about what they covered.*

---

## §7 · Commitments carry dates, and a date is only live once delivered

An ack that adopts something **states when**, or "adopted" becomes "forgotten" with no moment at
which anyone can point to the failure.

The 2026-08-21 dropbox ack did this correctly and is the model: it named **2026-09-30** and wrote
*"if that slips past it, ping this coord id and treat the silence as a defect rather than a
decision"* — a commitment that ships **with its own defect-detector**.

⛔ **And then it sat `outbound_ready` for 20 days.** The recipient never received the date, so the
detector **never armed**, and the doctrine was 20 days late with nobody able to say so.

> ***`outbound_ready` is a state with no owner and no clock.*** An ack that promises a date and is
> not sent is, from the recipient's side, indistinguishable from no ack at all.

**The law:** a commitment is live from **delivery**, not from authoring. Any memo resting in
`outbound_ready` is **owed work, not finished work**, and belongs in §6's derived queue.

⚠ **For a public-origin vault, distinguish publication from delivery** (HAUSSMANN convention 20):
the **push** is the publishing act; the **send** is only delivery. Withholding a send withholds
delivery — it does not unpublish anything already pushed.

---

## §8 · Boundaries

- **Cross-graph writes are memos, never direct edits** (workspace Rule 10). The drop-box new-file is
  **the one sanctioned peer-side write class**.
- Delivered copies are **the sender's to re-sync** and **the recipient's to commit or delete**.
- ⛔ **§7.7 rulings never travel as deliveries.** They are drafted `proposed` and **signed by
  operators in their own vaults** — agents author decisions, operators ratify them. A memo may carry
  a *recommendation*; it may not carry a ratification.

---

## Provenance

Authored from Berthier's draft
`aDNALabs.aDNA/how/campaigns/campaign_estafette/artifacts/doctrine_coordination_dropbox_draft.md`
(76 lines, sha256 `05bc9991…f4d2`), **read at source on the authoring day** per the ack's own
commitment. Register findings lifted from `aDNALabs.aDNA@43a41d5`.

⭐ **The ack pinned a path that had already moved** — to
`campaign_deputy_fleet/artifacts/…`, which is now a 19-line `status: relocated` pointer; the draft
migrated to `campaign_estafette/` on **2026-08-21, the same day the ack was written**. The ack had
corrected Berthier for pinning a mutable path without stating its supersession condition, and then
**its own pin lapsed within hours.** *The mechanism worked* — the pointer said so, and reading at the
object on the authoring day is what caught it. Recorded rather than quietly followed, because a pin
that lapses silently is the whole argument for the rule.

**Related:** [[doctrine_state_conventions]] · [[doctrine_safe_mutations]] ·
[[idea_upstream_coordination_dropbox_doctrine]] · [[skill_template_release]]

**Upstream:** the drop-box convention is not yet in `adna_standard.md`; this file is its reference
home pending the fold (Standing Order 9 — this vault demonstrates and explains, the spec defines).
