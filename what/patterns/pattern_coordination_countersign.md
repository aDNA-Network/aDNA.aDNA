---
type: pattern
created: 2026-07-02
updated: 2026-07-02
status: draft
pattern_category: operational
applies_to: [coordination, governance, campaigns, all_categories]
campaign_id: campaign_champollion
instances:
  - "aDNA.aDNA ⇄ LatticeProtocol.aDNA — `coord_2026_07_02_rosetta_to_noether_champollion_carnot_alignment.md` (this vault; `status: filed`, `ack_required: true`, `countersign_requested: true`; staged during P0, released at the G0 operator gate — a live outbound countersign ask)"
  - "LatticeProtocol.aDNA ⇄ Canvas.aDNA (cc aDNA.aDNA) — `coord_2026_06_13_mondrian_countersign_lp_canvas_seam.md` (this vault holds the cc copy; `countersign: true`, `operator_authorized: true`; a completed two-sided countersign on the record)"
graduation: "2 vault-level seams adopting the discipline (the Champollion⇄Carnot alignment seam · the LP⇄Canvas seam). A third independent cross-vault seam using staged-memo + ack/countersign graduates this file from draft. Enforces workspace Rule 10 / charter Inviolable §6 (cross-graph writes are staged as coord memos, never silent writes)."
last_edited_by: agent_rosetta
tags: [pattern, coordination, countersign, ack_required, staged_memo, cross_graph, seam, two_sided, concurrency, champollion]
---

# pattern_coordination_countersign

> **Plain-language version first**: two projects can't reach into each other's files — if vault A silently edits vault B, you get collisions, surprise, and no paper trail. So a cross-project agreement is written as a **coordination memo**: A writes the memo *in A's own vault* ("here's the seam between us, here's what I'm asking of you"), and B is never touched. If the memo needs B to *do* something, it's marked `ack_required` — B owes a reply. If it needs B to formally *agree* to a shared contract, it asks for a **countersign** — B writes its own reply memo saying "confirmed, point by point," and now the agreement is **two-sided on the record**: neither side can later claim it didn't sign. Memos also have a life-cycle — they're *staged* while a decision is pending, then *released/filed* the moment an operator gate ratifies them, then *disposed* when the ask is answered. It's the diplomatic-cable model for agents: you send a message into your own outbox, the other party countersigns in theirs, and the treaty exists in two places that agree.

## 1. Problem

An aDNA workspace is many independent vaults, each governed by its own CLAUDE.md, often driven by different agents (personas) in different sessions. Real work constantly needs *cross-vault* agreement: "your spec is the truth, my vault teaches it"; "I'm renaming a thing you depend on"; "please approve this before I proceed." Three failure modes appear if this is done naively:

1. **The silent cross-write.** Vault A edits a file inside vault B to record the agreement. Now B's owner is surprised by a change they didn't make, two sessions can collide on B's file, and there's no attributable record of *who agreed to what*.
2. **The unratified fait accompli.** A writes down a shared contract and treats it as binding, but B never actually confirmed — so when B acts differently, both sides point at the same document reading it oppositely.
3. **The lost ask.** A needs B to do or approve something, but there's no standing marker that an obligation is *outstanding* — so it's forgotten, or discovered only when something downstream blocks.

The governing rule (workspace Rule 10 / Champollion charter Inviolable §6) is blunt: **cross-graph writes are staged as coordination memos — never silently write into another vault.** The pattern is the machinery that makes that rule liveable: how a memo carries an obligation, how the other side discharges it, and how the memo moves through its own lifecycle.

## 2. The mechanism

A **coordination memo** is a file in the *author's own* `who/coordination/` directory that records a cross-vault seam, ask, or agreement. It never lives in, and never edits, the counterparty's vault. Its frontmatter carries the obligation semantics:

| Field | Role |
|---|---|
| `from:` / `to:` (+ `cc:`) | the parties; `to:` owes a response, `cc:` is filed-for-awareness |
| `status:` | the **lifecycle stage** — `staged` (decision pending) → `filed`/`released`/`cross-posted` (live) → `closed`/`disposed` (ask answered) |
| `ack_required:` | `true` ⇒ the recipient owes an acknowledgement; this is the standing "obligation outstanding" marker |
| `countersign_requested:` / `countersign:` | `true` ⇒ the recipient must formally agree by writing *their own* reply memo — the agreement becomes **two-sided** |
| `responds_to:` / `in_reply_to:` | back-links a countersign/ack to the memo it discharges (the two halves reference each other) |
| `operator_authorized:` | the memo's release was ratified at an operator gate (not self-published) |

Three rules are the heart of the pattern:

- **Author-side only; the counterparty is never touched.** The memo is the *seam* — "this memo is the seam; nothing in your tree was touched" is the literal concurrency clause. A cross-vault agreement therefore exists as **two files in two vaults that reference each other**, never as one vault reaching into another.
- **Ack vs. countersign is a real distinction.** `ack_required` means "you owe a *reply*" (you did the thing / you saw the thing). `countersign_requested` means "you owe your *own memo* formally agreeing," so the contract is on the record from *both* sides — the recipient writes a point-by-point "confirmed / accepted / acknowledged" reply and the seam is "two-sided and formalized." A countersign of a *skeleton* (the structure) can be asked separately from countersign of the *content* (what fills it) — the Champollion⇄Carnot memo asks exactly this: "countersign of the skeleton (not yet the content) is what unblocks P5."
- **Staged → released → disposed is gated.** A memo authored while a decision is pending is `status: staged` and *releases* (flips to `filed`/`cross-posted`) only when the relevant operator gate ratifies it — "staged by Rosetta at Champollion P0; releases on the operator's P0-gate ratification." When the ask is answered, the memo is *disposed* (closed with an evidence note). The lifecycle is itself operator-gated at the release step.

### 2.1 Frontmatter-repair as a same-day discipline

Inbound memos routinely arrive **mid-session missing frontmatter** (a recurring class — F-CHM-001 on this node). A per-session validator catches them; the receiving vault *repairs the frontmatter same-day* (adds the missing `type`/`status`/`from`/`to`) as part of intake, then disposes the ask. Repair-and-dispose is part of the intake ritual, not a separate cleanup.

## 3. Live instances (the structure IS the lesson)

**Outbound countersign ask — this vault authoring into its own outbox (self-reference):**
- [[../../who/coordination/coord_2026_07_02_rosetta_to_noether_champollion_carnot_alignment|the Champollion⇄Carnot alignment memo]] — Rosetta → Noether, `status: filed` (released at the G0 operator gate), `ack_required: true`, `countersign_requested: true`. It stages a *joint base-layer skeleton* (a table of shared invariants + truth-ownership) and asks Noether to **countersign the skeleton** — explicitly "not yet the content." Its opening line is the concurrency clause verbatim: "nothing in your tree was touched; this memo is the seam." This is the pattern in its outbound, staged-then-released, countersign-requested form.

**Completed two-sided countersign — this vault holding the cc (concrete path):**
- [[../../who/coordination/coord_2026_06_13_mondrian_countersign_lp_canvas_seam|the Mondrian countersign of the LP⇄Canvas seam]] — the cc copy filed *in this vault* (as standard owner). Mondrian (Canvas.aDNA) countersigns LatticeProtocol's seam memo point by point (§1 stewardship-split accepted · §2 LP obligations acknowledged · §3 confirmed · §4 "Canvas.aDNA **countersigns**"). Frontmatter: `countersign: true`, `operator_authorized: true`, `responds_to:` the LP memo. The seam is "two-sided on the record" — the exact end-state the mechanism produces: two memos, two vaults, cross-referencing, both signed.

> **The honest divergence, recorded not hidden**: not every coordination memo carries an obligation. [[../../who/coordination/coord_2026_05_19_v8_cross_vault_network_coordination|the v8 cross-vault posture memo]] is `countersign_required: false` and `direction: internal` — it is *informational*, a vault capturing its own posture toward peers to be *cross-readable*, not a discharge. That's correct, not a defect: the ack/countersign fields are opt-in obligation markers, and an informational memo legitimately sets them false. The pattern is about memos that *do* carry an ask; the false-ack memo is the boundary that shows what the fields mean.

## 4. Adoption (copy, don't re-derive)

**If you need a cross-vault agreement (you are the author):**
1. Write the memo in *your own* `who/coordination/` — never touch the counterparty's vault. Open with the concurrency clause ("this memo is the seam; nothing in your tree was touched").
2. Set the obligation fields: `to:` (owes a reply) · `ack_required: true` if you need action-confirmation · `countersign_requested: true` if you need formal agreement to a shared contract.
3. If the decision is pending, set `status: staged` and state the release condition ("releases on the operator's <gate> ratification"). Flip to `filed`/`cross-posted` only when the gate fires.
4. When the ask is answered, **dispose** the memo (close it with an evidence note back-linking the reply).

**If you receive a memo (you are the counterparty):**
1. If frontmatter is missing (the F-CHM-001 class), **repair it same-day** as part of intake, then proceed.
2. For `ack_required: true` → reply that you did/saw the thing, back-linking via `in_reply_to:`.
3. For `countersign_requested: true` → write **your own** memo, agreeing point by point, set `countersign: true` + `responds_to:`. The seam is now two-sided; the author records it as *formalized*.

## 5. When NOT to use / anti-pattern

- **Same-vault coordination** doesn't need a cross-vault memo — an ephemeral note in your own `who/coordination/` or a session SITREP suffices. The memo pattern is for the *cross-graph* seam.
- **Anti-pattern — the silent cross-write.** Editing the counterparty's files to record the agreement violates Rule 10 outright: it surprises the owner, invites session collisions, and destroys attribution. The memo goes in *your* outbox.
- **Anti-pattern — the self-ratified contract.** Publishing a "binding" shared contract that the other side never countersigned produces the fait-accompli failure. If it needs their agreement, it needs their countersign memo; until then it is a *proposal*, not a contract.
- **Anti-pattern — the unreleased fait accompli.** Treating a `status: staged` memo as live before its operator gate fires jumps the release step. Staged means pending; it acts only after ratification.
- **Anti-pattern — the orphaned ask.** Setting `ack_required: true` and never disposing the memo when the reply lands leaves a phantom obligation on the ledger. Dispose on discharge.

## Provenance & graduation

Harvested at Operation Champollion **M3.2** (Pattern Harvest II, 2026-07-02, Rosetta/this vault) from this vault's live coordination corpus — the outbound Champollion⇄Carnot countersign ask and the inbound LP⇄Canvas two-sided countersign — enforcing workspace Rule 10 / charter Inviolable §6. **Instances: 2 vault-level seams** adopting the staged-memo + ack/countersign discipline (the Champollion⇄Carnot alignment seam · the LP⇄Canvas seam recorded here as cc) — a third independent cross-vault seam graduates this file from `status: draft`. No template fold is implied (the mechanism is already documented across the corpus + Rule 10; no missing template field surfaced), so this file carries no fold stub. Related patterns: [[pattern_credential_broker]] (a consumer routes a rotate/onboard ask to the broker *by* a coord memo — the two patterns compose), [[pattern_shim_registry]] (a shim's owner-ack is discharged through this channel when owner ≠ keeper), [[pattern_order_of_battle]] (the OoB's "pending acks / co-signs" section is exactly the register of outstanding `ack_required` memos this pattern produces).
