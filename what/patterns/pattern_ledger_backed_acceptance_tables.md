---
type: pattern
created: 2026-10-16
updated: 2026-10-16
status: draft   # proposed at ARCADE A1.3 (ruling R9, 2026-10-16); one live instance (Terminal.aDNA); graduates to active on a second counted adoption, by operator ratification (§7.7)
pattern_category: operational
applies_to: [missions, campaigns, verification, software_deployment_graph, forge, platform]
campaign_id: campaign_arcade
instances:
  - "Terminal.aDNA (Operation Bastide, bastide-v6) — gate 5 `what/terminal/tests/slice0/test_parity_table.py` (MATCH_VALUES = ('', 'MATCH', 'WAIVED'); MEASURED_FAMILIES, 22 families / 8 re-measure tests) + `what/eval/parity/waivers.md` (W-1…W-3) + gate 7 `what/terminal/gates.sh` with `matrix_known_red.json` (measured 2026-10-05, 107 known red in 62 bundles) — [R] per Vauban's 10-06 memo, paths stated from that vault's root on that branch"
graduation: "draft — 1 instance (the proposer's). Harvested from Terminal's Bastide close memo (coord_2026_10_06_vauban_to_rosetta_bastide_amendments_vocabulary_and_schemas, rows 1 · 2 · 4), amended into one pattern by ARCADE ruling R9 rather than written into the standard, whose §19.4 does not prescribe test frameworks. Ships with v8.13 as draft."
last_edited_by: agent_rosetta
tags: [pattern, acceptance, parity, waiver, ledger, set_rule, snapshot, ratchet, visual_regression, gate, verification, arcade, terminal, draft]
---

# pattern_ledger_backed_acceptance_tables

> **Plain-language version first**: when a project keeps a big table of "does the new thing behave like the old thing?" rows — a parity table, a scorecard, a checklist of golden cases — three things go quietly wrong over time. A row gets marked *waived* with nobody recorded as having decided that. A test that checks the rows gets pinned to row names and breaks every time a row is added. And a screenshot-comparison suite that "re-freezes on green" ends up unable to say what actually changed. This pattern is three small disciplines that stop those three things: **a waiver is a pointer to a ruling, read both ways**; **a family of rows is measured as a set, by a named test**; and **hashes that move are counted and ruled at a named window, with a ratchet that only ever fails on *new* red**. None of it tells you which test framework to use — the standard deliberately does not (§19.4). It tells you what the *table* must be able to prove about itself.

## Problem

A ledger-backed acceptance table — parity rows, golden cases, a SCORECARD — is a claim ("103 of 103 match") that an independent reader must be able to audit. Three failure modes recur, each found by an independent verdict in the live instance below:

1. **The quiet waiver.** A row reads `WAIVED` (or `n/a`, or is simply absent) with no record of who ruled it, when, why, or who answers for it. The count still says 103/103. The word in the cell is doing the work a ruling should.
2. **The row-pinned test.** The test that re-measures a family of rows names the rows. Every time the family grows the test breaks (or is widened by hand), and nothing says what the family *is* or what measures it.
3. **The self-freezing snapshot suite.** Visual-regression or golden-output hashes that are re-frozen on green cannot say what changed between two builds; a suite that always passes after a refreeze is not a gate.

## Solution

Three disciplines, adoptable separately; the first two bind any ledger-backed table, the third binds snapshot/visual gates.

### §1 `WAIVED` with a ruling id — the ledger read both ways

A row may read **`WAIVED`** only if its `notes` names a **waiver id** that resolves to a line in a waiver ledger with the shape `waiver_id · golden_id · line · ruling · date · reason · owner`. The gate reads the ledger **both ways**: a `WAIVED` row with no ledger line is **red**, and a ledger line whose row is not `WAIVED` is **red the other way**. A *line waiver* (`golden_id = —`) waives a checklist line that has no row; it is read by the verdict, not the gate. A waiver is never a quiet MATCH: the count reads `102 MATCH + 1 WAIVED = 103`, and the one carries who ruled it, when, why and who answers for it.

### §2 The set rule for MATCH families

When one test re-measures a **family** of rows, the table pins the **set** — `MATCH ∪ WAIVED ∪ open = N` — and names, per family, the test that re-measures it (a `MEASURED_FAMILIES` map or its equivalent). The test is **name-pinned to the family, never to individual rows**; a row added to the family is measured by construction, and the set equation says exactly what is measured and by what, and stays true as rows are added.

### §3 The ratchet window for snapshot and visual gates

Hashes that move under a build are **counted and ruled at a named operator window** — `n/N moved · accepted/rejected · the ruling id` — and never silently re-frozen. A **ratchet file** (e.g. `matrix_known_red.json`: known red per bundle, dated) holds the accepted state; the gate **fails on any *new* red** and passes on known red. Every hash move is therefore in a session record with a ruling id, and the suite can always say what changed and who accepted it.

## When to Use

- Any mission or campaign that carries a parity, golden-case or SCORECARD table whose count is a claim a verdict will audit (a rebuild, a port, a migration, a renderer swap).
- Any visual-regression or golden-output gate that would otherwise be re-frozen on green.
- As the verification shape a `software_deployment_graph` or forge names in its mission card's `verification_method:` — the standard's §19.4 stays silent on frameworks; this pattern is what the *table* must prove regardless of framework.

## Example: This Vault

The live instance is not this vault's; it is **Terminal.aDNA's** (the proposer's — paths from that vault's root on `bastide-v6`, `[R]` from Vauban's 10-06 memo, not re-read here): gate 5 `what/terminal/tests/slice0/test_parity_table.py` reaches 103/103 as **102 MATCH + 1 WAIVED**, the ledger `what/eval/parity/waivers.md` holds W-1…W-3 and is read both ways; `MEASURED_FAMILIES` pins 22 families to 8 re-measure tests; gate 7 in `what/terminal/gates.sh` reads `matrix_known_red.json` (107 known red in 62 bundles, measured 2026-10-05) and the moves — 0/42 · 0/180 · 72/561 · 26 console rows — each sit in a session file with a ruling id.

What *is* this vault's, and the self-referential part (Standing Order 8): the pattern arrived as **three rows of a ratify/decline/amend memo**, and this vault's own acceptance table for that memo — [[vauban_rulings_packet]] at `how/campaigns/campaign_arcade/artifacts/p1/` — applies §1 to itself: every row carries its ruling id (R7–R10), its date, its reason and its owner, and the count line is derived (`16 = 13 + 3`), never typed. The web-quality gate corpus this vault already runs (`what/doctrine/doctrine_web_quality_assessment.md`, 698 gates at the last GARNIER sync) is the first candidate second instance: it has a ratchet in spirit (gate-49 "red-first discipline") and no waiver ledger yet.

## Anti-Pattern

- **The word in the cell.** `WAIVED` / `n/a` / `skip` with no ledger line — the count is unauditable.
- **The row-pinned test.** `assert rows["golden_017"] == "MATCH"` for forty rows; the family grows, the test lags, and nothing names the set.
- **Refreeze on green.** `--update-snapshots` as the fix for a red snapshot gate, with no window, no count, no ruling id.
- **Mistaking this for a framework choice.** The pattern names what a table must prove, not pytest vs. anything; writing it into the standard as "use X" would contradict §19.4.

## Related

- [[pattern_measurement_is_the_artifact]] — the sibling that makes the *measurement* the deliverable; this pattern makes the *table's own bookkeeping* auditable.
- [[pattern_iss_operator_gate]] — the "named operator window" of §3 is an operator gate; the ruling id a waiver names is often one of its outputs.
- [[pattern_launch_acceptance_contract]] — an acceptance contract at launch is a ledger-backed table of this kind at campaign scale.
- `how/templates/template_aar.md` §Carries (v8.13, proposed) — the same *none-vanishes* discipline applied to carried rows rather than golden rows.
- Upstream: `what/docs/adna_standard.md` §19.4 (Testing/CI Awareness — non-prescriptive; this pattern is the operational companion it leaves room for).
