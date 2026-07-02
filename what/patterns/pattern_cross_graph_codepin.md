---
type: pattern
created: 2026-07-02
updated: 2026-07-02
status: draft
pattern_category: operational
applies_to: [context, decisions, modules, lattices, all_categories]
campaign_id: campaign_champollion
instances:
  - "codepin.md — LatticeProtocol.aDNA (what/context/codepin.md; the authoritative machine-checkable pin file, live pin 8cb6e1e)"
  - "campaign_champollion.md M5.2 row — aDNA.aDNA (this vault; teaches LP's spec 'at codepin 47935b6', deliberately lagging LP's advance)"
  - "coord_2026_07_02_rosetta_to_noether_champollion_carnot_alignment.md — aDNA.aDNA (this vault; seam table: 'teaches at LP's codepin … and cites, never re-specifies')"
graduation: "2 vault-level adoptions live (producer: LatticeProtocol.aDNA · consumer: this vault, whose one seam is recorded in 2 files — records ≠ adoptions, per the graduation counting standard) — a third VAULT adoption graduates this file from draft; template-fold ratification queued at Champollion G3, ships via M6.1 RC (skill_template_release)."
last_edited_by: agent_rosetta
tags: [pattern, codepin, cross_graph, sha_pinned, upstream_pin, federation, provenance, currency, champollion]
---

# pattern_cross_graph_codepin

> **Plain-language version first**: when one project's docs describe another project's code, the description goes stale the instant that code changes — and nobody notices, because there's no thread connecting the two. A **codepin** ties the description to an exact snapshot: "this explanation is true as of commit `8cb6e1e`." Now staleness is *visible*. The producer (the code's home) advances the pin on purpose when they've re-verified their docs against new code; the consumer (a project that teaches or cites that code) advances *its* recorded pin on purpose when it re-checks. If the two pins drift apart, that gap is not a bug — it's the mechanism doing its job: it shows you exactly how far behind a citation has fallen, out in the open, instead of letting it rot silently. It's the difference between "somewhere in this 50-page manual, some sentence about the engine is now wrong" and "this paragraph is pinned to engine v3; the engine is now v5; re-check before trusting it."

## 1. Problem

An aDNA graph frequently cites, teaches, or builds against **code that lives in another graph**. This vault (`aDNA.aDNA`, Rosetta) teaches the Lattice Protocol's module/dataset/lattice model, but the *code* for that model lives in `LatticeProtocol.aDNA/what/latticeprotocol/`. A file:line citation ("the ledger has 45 event types, `events.py:31`") is only true against a specific commit. The moment the producing repo changes, three failure modes open:

1. **Silent rot.** The citation still *reads* fine; it is just wrong now. Nothing flags it. A reader trusts it.
2. **No shared clock.** The consumer has no way to say *which* version of the code it was describing, so "is this current?" is unanswerable without re-reading the whole upstream tree.
3. **Path fragility.** When the producing code moves home (e.g. a code-as-WHAT relocation), even the *location* of the truth shifts — and any pin baked into a fragile spot moves with it.

Un-pinned cross-graph references are the currency defect that the Operation Looking Glass campaign named as its marquee finding (the mirror was more current than its source). A codepin is the standing fix.

## 2. The mechanism

A **codepin** is a single machine-checkable file — the authoritative pin for one producing repo — whose **frontmatter** carries the pin facts (so they are checkable by tooling, not buried in prose):

| Field | Role |
|-------|------|
| `repo` / `remotes` / `branch` | which code, which remote(s), which line of history |
| `pinned_sha` / `pinned_short` | the exact commit every citation is true against |
| `pin_date` | when the pin last advanced |
| `verify:` | the command whose output MUST start with `pinned_sha` — the machine check |
| `refresh_protocol:` | *when* the pin is allowed to advance (e.g. "every phase close") |
| `consumers:` | the sweep checklist — every file that caches this pin |

Two rules make it work, and they are the heart of the pattern:

- **Single-source rule.** Exactly one file is authoritative. Every other place the SHA appears (per-note `code_pin:` frontmatter, an admonition line, a charter row) is a **cache** of that value. A refresh updates the authoritative file first, then sweeps every path in `consumers:`.
- **Pin-advance and pin-follow are each deliberate, asymmetric acts.**
  - **Pin-advance** is the *producer's* act: the graph that owns the code advances its own `pinned_sha` when it has re-verified its docs against the new code (and records, per refresh, whether the delta touched any cited file — a "citation content = no-op" note when it didn't).
  - **Pin-follow** is the *consumer's* act: a graph that cites the producer's code advances *its* recorded pin only when it deliberately re-checks its citations. Until it does, it **stays on its recorded pin** — and that is correct, not lax.

The consequence is the pattern's whole value: **staleness becomes visible and auditable.** A pin that lags is a measurable, greppable fact ("this vault teaches at `47935b6`; upstream is at `8cb6e1e`") — the opposite of an un-pinned reference, which rots with no signal at all.

### 2.1 Survive the code-home move

Put the authoritative pin file somewhere a relocation of the code **cannot displace it**. LatticeProtocol's `codepin.md` lives in `what/context/` precisely so that when the code's home moved (`~/aDNA/lattice-protocol` → `what/latticeprotocol/` at PT pt12), the pin file did not move with it — and its `verify:` command points at the in-vault tree so it keeps working after the back-compat symlink retires. The move flips `code_home`; it does not touch `pinned_sha` (a path move is not a code commit).

## 3. Live instances (the structure IS the lesson)

**Producer side — the authoritative pin (read-only reference; another graph owns it):**
- `LatticeProtocol.aDNA/what/context/codepin.md` — the canonical instance. Frontmatter carries `pinned_sha: 8cb6e1e…`, `verify:`, `refresh_protocol: "P5.M2 + every phase close (R-9)"`, and a 7-entry `consumers:` sweep list. Its refresh history logs every advance with a `git diff --name-only` no-op check.

**Consumer side — this vault deliberately lagging (self-reference, concrete paths):**
- [[../../how/campaigns/campaign_champollion/campaign_champollion|campaign_champollion]] **M5.2 row** cites *"this vault's lattice/module/dataset teaching vs LP spec @ codepin `47935b6`"*. LatticeProtocol advanced their pin `47935b6` → `8cb6e1e` the same day (Carnot M1.5) — so as recorded, **this vault teaches at `47935b6` while upstream sits at `8cb6e1e`.** That lag is the mechanism working: pin-follow is a deliberate act this vault has not yet taken, and the gap is visible in one grep.
- [[../../who/coordination/coord_2026_07_02_rosetta_to_noether_champollion_carnot_alignment|the Champollion⇄Carnot alignment memo]] §2 records the seam contract in words: aDNA.aDNA *"teaches lattice/module/dataset at LP's codepin (currently `47935b6`) and cites, never re-specifies."* Truth ownership is split in the same table — **spec: LP · teaching: aDNA.aDNA** — which is exactly what a codepin encodes.

> **The honest divergence, recorded not hidden**: at the moment of this harvest the producer pin (`8cb6e1e`) and this vault's recorded consumer pin (`47935b6`) *disagree by one advance*. This is not an error to reconcile away — it is the pattern's core behavior on display. A future Champollion mission (M5.2, mutual conformance) is where this vault performs its deliberate pin-follow and re-verifies its teaching against the newer commit.

## 4. Adoption (copy, don't re-derive)

**If you OWN cross-graph code (you are the producer):**
1. Create one authoritative `codepin.md` under a **relocation-safe** directory (e.g. `what/context/`), with the §2 frontmatter fields.
2. State the **single-source rule** in the file body; make every other SHA occurrence a labeled cache.
3. Define a `refresh_protocol:` tied to your gates (a pin advance is a deliberate producer act, not a per-commit reflex).
4. On each advance: bump the authoritative file, run `git diff --name-only <old>..<new>`, record whether any `consumers:` citation target changed (no-op vs real), then sweep the caches.

**If you CITE another graph's code (you are the consumer):**
1. Record the pin you are true against — in a charter row, a coord memo seam table, or per-note `code_pin:` frontmatter — and say *"cites at pin `<sha>`, does not re-specify."*
2. Advance your recorded pin only when you **deliberately re-verify** your citations. Staying behind is legitimate; do it visibly.
3. Never silently copy an upstream SHA bump into your citations without re-checking — that reintroduces exactly the silent rot the codepin exists to kill.

## 5. When NOT to use / anti-pattern

- **Same-graph, same-repo citations** don't need a codepin — a plain file:line is fine when the citing file and the cited code version together; the pin is for *cross-graph* or *cross-repo* seams where the two evolve independently.
- **Anti-pattern — the phantom pin**: recording a SHA once and never defining `verify:` or a `refresh_protocol:`. A pin nobody can machine-check and nobody ever advances is worse than none: it *looks* current and lies with confidence.
- **Anti-pattern — auto-following upstream**: a consumer that scripts "always match the producer's latest SHA" has thrown away the entire benefit. The point is that pin-follow is a *deliberate re-verification*, not an automatic mirror. Auto-following turns visible-lag (safe) into invisible-untested-currency (the original disease).
- **Anti-pattern — multi-authority**: two files both claiming to be the pin. Pick one; the rest are caches.

## Forward integration (fold stub)

**`fold_batch: champollion_m6_1_rc`** — WHO: Rosetta (aDNA.aDNA), for ratification at Champollion **G3**, shipped via **M6.1**'s release candidate through `skill_template_release`; WHAT: an optional `codepin.md` scaffold + `code_pin:` cache-field convention offered to the public template's `what/context/` (the producer-side scaffold) and a one-line consumer-seam snippet, so a fleet vault standing up a cross-graph code seam adopts by copy. Provenance: LatticeProtocol's F-1 design ([[../../who/coordination/coord_2026_06_12_lean_fork_requirements|the F-1/F-2 delivery memo]], cc'd to this vault as an upstream candidate). WHEN/HOW defer to M6.1's RC. Do NOT touch any template file or `.adna/` here.

## Provenance & graduation

Harvested at Operation Champollion **M3.1** (Pattern Harvest I, 2026-07-02, Rosetta/this vault) from the live LatticeProtocol.aDNA codepin machinery (originating [[../../who/coordination/coord_2026_06_12_lean_fork_requirements|F-1 design, 2026-06-12, Noether]]) and this vault's deliberate consumer-lag against it. **Instances: 2 vault-level adoptions** (producer: LatticeProtocol.aDNA's authoritative pin · consumer: this vault's seam, recorded in 2 files — records are not adoptions, per the graduation counting standard the sibling patterns use) — a third **vault** adoption graduates this file from `status: draft`; ratification of the associated template fold (the codepin-specific scaffold rides the M6.1 RC per the fold stub above) is queued at Champollion **G3**. Related patterns: [[pattern_order_of_battle]] (an OoB row often *carries* a codepin — Carnot's does, in its `codepin:` frontmatter), [[pattern_state_queued_banner]] (a cold-start banner routes readers *to* the codepin — LP's CLAUDE.md sends cold-starts to `what/context/codepin.md`), [[pattern_federation_readiness]] (the general discoverability envelope a codepin specializes for code seams).
