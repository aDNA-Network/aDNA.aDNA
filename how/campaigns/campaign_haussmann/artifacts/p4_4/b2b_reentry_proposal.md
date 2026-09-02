---
type: campaign_artifact
artifact_id: b2b_reentry_proposal
title: "P4.4b B2b — re-entry gate: the answer landed, and it says our bar and their bar were never the same measurement"
campaign: campaign_haussmann
mission: mission_haussmann_p4_4_ci_hardening
increment: B2b
status: accepted          # ⛩⛩ SIGNED 2026-09-02 — all three §4/§5 questions ruled as recommended. B2b IS BUILDING.
created: 2026-09-02
updated: 2026-09-02
last_edited_by: agent_rosetta
executor_tier_declared: opus
grounded_in:
  - who/coordination/coord_2026_08_26_vitruvius_to_rosetta_scope_b_and_your_three_findings_verified.md
  - WebForge.aDNA/what/lib/gates/lighthouse_profiles.json
  - site/tests/gates/gate-19-lighthouse-budget.spec.ts
  - site/unlighthouse.config.ts
  - site/tests/gates/gate-51-sweep-contract.spec.ts
probe_date: 2026-09-02
tags: [haussmann, p4_4b, b2b, ac4, f_e, provenance, scope_b, convention_13]
---

# B2b re-entry gate

> **Ratification (§7.7).** **Decision:** B2b re-enters and builds under scope B, with
> `gate-19`'s `perfMin` **held at 0.9** and **sourced** rather than moved (§4 option **b**); the four
> un-looked-at bars (**TBT 200** + the three category bars) **named as un-adopted with the reason**,
> not opened; budget ⛩ ratified **~55–85 kT / 1 session**, `executor_tier: opus`.
> **Ratified-by:** Stanley, Founding Architect (operator). **Date:** 2026-09-02.
> **Status:** **accepted** — taken via `AskUserQuestion` at the re-entry gate, all three questions in
> one act. *(Authored by agent_rosetta; ratified by the operator.)*
>
> ⭐ **What the signature bought, stated so it is not inferred:** the ruling is *hold and source*, so
> **no number changes** — `gate-51`'s transcription-drift detector stays green with no same-diff churn
> (DEFECT-B is discharged by the ruling itself rather than by an edit), and **`F-e` closes by
> recording provenance, not by moving a bar.**

> ⛩ ~~**This document is `proposed`. Nothing builds against it until the operator signs.**~~
> ✅ **SIGNED 2026-09-02.** The 08-26 ruling (c) is explicit: *"If a reply lands mid-increment, B2b
> re-enters at **its own ⛩ gate** — it does not silently absorb into B2a."* This was that gate.

## §0 · Why this gate is convened

⊳ D-E is **answered**. The reply
(`coord_2026_08_26_vitruvius_to_rosetta_scope_b_and_your_three_findings_verified.md`) has been in our
tree since **2026-08-29 14:20**, untracked, and was committed at `d2228b0` this sitting. It rules
**scope B**:

> *"`adna.network` does not enter the fleet roster at this time… A static Astro build with no SSR app
> shell is `content_static` — that is what the class is. **Your reading is right, so name it and derive
> against it.**"*

⚠ **The block was never verified at its destination.** The campaign recorded B2b as *"no reply yet
`[D]`"* three times **after** the memo was on our disk. Recorded as a session finding; it does not
change what B2b builds, only how long it waited.

## §1 · Re-derived at this gate — never carried

Convention 15: the memo pins mutable values and states its supersession condition, so it was checked.

| Object | Memo (2026-08-26) | Live `[D]` 2026-09-02 |
|---|---|---|
| `lighthouse_profiles.json` md5 | `134c9647…` *"VERIFIED UNMOVED"* | **`ff9a0f1b…`** — **MOVED** |
| WebForge `HEAD` | `14838774` (our record) | **`b7c6d653`** |
| commits touching the file since our pin `6096157` | — | **5**, latest **2026-08-30** |
| `classes.content_static` **values** | Perf 95 · a11y 95 · bp 95 · seo 100 · lcp 2500 · cls 0.1 · tbt 200 | **unchanged** |

⇒ **The supersession condition FIRED and the answer SURVIVES it.** The drift is in `_meta`/`surfaces`
(KW-49, *"browser class becomes an INPUT"*, 08-30). **Scope B is not re-opened by drift** — but no
figure below is quoted from the memo; all are re-read at the object.

**Canonical `classes.content_static` subtree** (sorted keys, compact separators):

```
{"categories":{"accessibility":95,"best-practices":95,"performance":95,"seo":100},
 "metrics":{"cls":0.1,"lcp_ms":2500,"tbt_ms":200},"seo_mode":"category"}
sha256 f2292ca946b3cd0287bf1e458051d46cd5a6547c54cddeed893600639be0c764
```

⇒ **Hash the CLASS SUBTREE, never the whole file.** A whole-file hash reds the gate on every `_meta`
churn, and **one has already landed inside this increment's own hold**. AC4's amended wording already
specifies the right shape — *"read from `classes.<c>` at pin `<sha>`, whose content hashes to
`<md5>`"* — **`classes.<c>`, not the file.** This is the one design decision the drift settles for us.

## §2 · ⭐⭐ THE FINDING: our bar and their bar were never the same measurement

The campaign has said, for three weeks and in `F-e`, that our **Perf ≥ 90 is LOOSER than
`content_static`'s 95** — *"the direction their `ratchet_law` reserves for an operator gate."* That
sentence is the premise this whole increment was scoped against.

**It does not survive the object.** `_meta.lh_settings`, verbatim `[D]`:

> *"Lighthouse default config: **mobile emulation + simulated throttling** (the industry-standard
> hardest honest lab bar; design D5). **Desktop pass: not wired** (design §7 SEQUENCED)."*

⇒ **`content_static`'s 95 is a MOBILE-EMULATION bar. `gate-19`'s 90 is a DESKTOP bar. WebForge has no
desktop `content_static` bar at all — that pass is unwired.**

⭐ **And this campaign already measured what that difference is worth.** B2a's calibration finding,
eight days ago: Unlighthouse applying **mobile 4G throttling to a desktop form factor** scored this
site **0.78**, where the desktop instrument reads **0.95–1.0**. **The form-factor gap is ~17 points.
The bar gap we were about to argue over is 5.**

⇒ *Our 90 is not a looser `content_static`; it is a different measurement with no `content_static`
counterpart in existence.* Transcribing 95 onto a desktop instrument would be **B2a's defect run
backwards** — *two instruments sharing one number*, the exact sentence B2a fixed.

⚠ **And `ratchet_law` may never have fired.** It governs *loosening a bar*; we never adopted theirs,
so there was no bar to loosen. `F-e`'s framing — *"looser, the direction their ratchet_law reserves
for an operator gate"* — compares two numbers from different instruments and reads the difference as
a policy relaxation. **It is a category error, not a relaxation.**

### §2.1 · What DOES line up — and why coincidence is not provenance

| Our bar (`gate-19:33`) | `content_static` | Relationship |
|---|---|---|
| `lcpMaxMs: 2500` | `lcp_ms: 2500` | **equal** — both are the CWV *Good* band |
| `clsMax: 0.1` | `cls: 0.1` | **equal** — both are the CWV *Good* band |
| `perfMin: 0.9` (desktop) | `performance: 95` (mobile) | **not comparable** — see §2 |
| *(none)* | `tbt_ms: 200` | **we have no TBT bar** |
| *(none)* | `accessibility 95 · best-practices 95 · seo 100` | **no category bars in gate-19** |

⭐ **Two of our bars equal theirs and neither was derived from theirs.** Both sides independently took
the CWV Good band. **Equality is not provenance** — and a provenance gate is exactly the instrument
that makes that distinction checkable instead of assumed. *This is what closing `F-e` actually means:
not changing a number, but recording where each number came from.*

⭐ **`AC4` reads as one decision and is five.** *"Adopt the class"* silently spans a perf bar, a TBT
bar we do not have, and three category bars we do not have. **Four of the five have never been
looked at.** Convention 13's *"a correct instrument applied partially, reporting like a complete
one"*, in a criterion.

### §2.2 · `rebaseline_law` bounds what is portable, and the memo agrees

> `rebaseline_law` `[D]`: *"These bars are bound to the HOST **and BROWSER** class recorded in
> `host_fingerprint`. Any change to either **VOIDS** them and forces a re-baseline."*

Their fingerprint: *Apple M4 Max · macOS 26.6 · node v24.3.0 · **lighthouse 13.4.1** · HeadlessChrome
149*, `runs_per_route: 3`, assertions read the **median run**. Ours: committed fixtures at
**lighthouse 13.4.0**, **N=1**, no median.

⇒ Adopting their *measured numbers* as ours would adopt bars their own law **voids** on a host change
— and we are a host change. The memo says the same thing from the other side: *"the class is a
**bar-set, not a certification**"*, *"they have **not** measured your surface"*, *"**`route_bars` do
not travel with the class** — the class defaults are the only portable part."*

**What is portable is the class NAME and its POLICY basis, not its measured baseline.**

### §2.3 · ⚠ A third defect, found by reading our own fixtures

`gate-19`'s four fixtures carry `lighthouseVersion: 13.4.0` and **`configSettings` ABSENT** `[D]` —
no `formFactor`, no `throttling`, no `screenEmulation`.

⇒ **We cannot prove our own fixtures are desktop.** `unlighthouse.config.ts` asserts gate-19's
instrument is `--preset=desktop`, and that is almost certainly right — but **at the object it is an
`[I]`, not a `[D]`**, because the fixtures do not record what produced them. Convention 18's family:
an instrument that cannot say what it ran against.

⚠ **Consequence for scope:** B2b can source **the bar**; it cannot retroactively attribute **the
fixtures**. Any claim that our 90 is "a desktop bar" is, today, un-evidenced at the artifact.

⚠ **And a bar change would be inert on current evidence**: all four fixtures score `performance: 1.0`.
90 → 95 passes without moving anything. *A change that cannot fail proves nothing* — convention 14.

## §3 · Convention 13 pass — COMPLETE, coverage recorded, both directions

**Scope**: B2b touches **AC4** only (AC1/AC2/AC3 are closed by B0/B1/B2a). Pairs =
`AC4 × {AC1,AC2,AC3}` (3) + `AC4 × {V1,V2,V3,V4}` (4) = **7**, each read **both** directions
(AC→V *can the method satisfy the test?* · V→AC *is this criterion tested by anything?*). V5 is
P4.4a's and closed.

| # | Pair | Direction | Verdict |
|---|---|---|---|
| 1 | AC4 × AC1 | both | ✅ clean — visual lane, no shared object |
| 2 | AC4 × AC2 | both | ✅ clean — field instrument, no shared object |
| 3 | AC4 × AC3 | both | ⚠ **COUPLED** — see DEFECT-B |
| 4 | AC4 × V1 | both | ✅ correctly unrelated |
| 5 | AC4 × V2 | AC→V | ⚠ **DEFECT-A** |
| 6 | AC4 × V2 | V→AC | ⚠ **DEFECT-C** |
| 7 | AC4 × V3 | both | ✅ correctly unrelated (V3 asserts AC3's failure mode) |
| 8 | AC4 × V4 | both | ✅ correctly unrelated |

**4 clean · 3 defective · 1 coupled.** Tenth consecutive mission where the pass has paid for itself.

### DEFECT-A — V2's provenance mutation cannot fail while the bar has no source

V2 `[asserts AC3, AC4]`: *"a deliberate budget breach goes red, **AND a bar edited by hand goes
red**"*, asserting *"this bar was read from `classes.<c>` at pin `<sha>`, whose content hashes to
`<md5>`"*.

⚠ **As written, the mutation is un-attributable in the sense GR-3 just named.** If B2b records the
provenance of a bar we did **not** take from `content_static` (§2), the hash assertion tests that *a
recorded string still matches a remote file* — true, checkable, and **not** the claim AC4 makes. The
mutation would go red for the right mechanical reason and the **wrong semantic one**.

> **Convention 14, second clause (GR-3): a demonstration is only worth what it can attribute.**

**Remedy — free, no new instrument:** the provenance record must be **per-bar**, and each bar names
its **own** source. Two bars resolve to `classes.content_static` (LCP, CLS — *equal by common CWV
ancestry, recorded as such, not as derivation*); `perfMin` resolves to **`local_desktop_fixture_band`
with no `content_static` counterpart**. The mutation then fires per-bar and the message names which
bar and which source. ⛔ **A red via the wrong bar reports as a HARNESS BUG**, per GR-3's repaired
matrix.

### DEFECT-B — AC4 × AC3 are same-diff coupled and nothing says so

`gate-51` **G51c** reads `gate-19` by regex (`/perfMin:\s*([\d.]+)/`) and asserts the sweep config's
bar `=== perfMin × 100`. ⇒ **any change to `perfMin` moves `unlighthouse.config.ts` in the same
diff**, or AC3's gate goes red.

The coupling is real and correct (it is B2a's transcription-drift detector). **It is stated in
`gate-51`'s comment and in no criterion.** A B2b that edits `perfMin` without touching the sweep
config reds a *closed* criterion — convention 7 / ADR-057, and the campaign's own *"same-diff is a
claim about WHERE an assertion belongs."*

**Remedy — free:** name the coupling on AC4's face.

### DEFECT-C — read V→AC, AC4's distinguishing claim is *still* untested

DEFECT-4 (08-24) was *"the distinguishing claim is tested by nothing — a breach test proves a budget
fails when exceeded, and **a transcribed budget breaches identically**."* AC4 was replaced; V2 gained
the provenance mutation.

⚠ **Read V→AC, the gap reappears one layer in.** V2 tests *the recorded hash matches the source*. It
does **not** test *the bar in force equals the bar the record claims was sourced*. A provenance block
citing `content_static` while `gate-19` runs any number at all would pass both limbs — **hash matches
source; budget breaches identically.** ⇒ *DEFECT-4's shape surviving inside the remedy written to
close it,* which is precisely how it survived the first time.

**Remedy — free:** the gate asserts the **three-way** identity — *recorded value* ≡ *value in force
at `gate-19:33`* ≡ *value at the hashed source* (where a source exists). Red-prove **each leg
separately**; a red via the wrong leg is a HARNESS BUG.

## §4 · ⛩ THE OPERATOR QUESTION

**Does `gate-19`'s `perfMin` change?** Recommendation: **(b)**.

| | Option | Consequence |
|---|---|---|
| **(a)** | Adopt **95** | Transcribes a **mobile** bar onto a **desktop** instrument (§2) — B2a's defect backwards. **Inert today** (fixtures score 1.0), so it also proves nothing. |
| **(b)** | **Hold 90; record it as a desktop bar with no `content_static` counterpart, dated, on the gate's face** ⭐ | The honest state. `F-e` closes by **sourcing** every bar, not by moving one. No same-diff churn into AC3. Records that WebForge's desktop pass is unwired, so the gap is *theirs to open*, not ours to guess. |
| **(c)** | Adopt the two bars that ARE comparable (LCP 2500 · CLS 0.1 — already equal) and hold perf | Identical in effect to (b); differs only in whether equality is recorded as *adoption* or as *common ancestry*. §2.1 says **ancestry** is the true one. |

⚠ **Whichever is ruled, `ratchet_law` does not bind us here** — we are not loosening an adopted bar;
we never adopted one. Said plainly so a later reader does not infer a gate was skipped.

**Second question, smaller: does B2b open the four un-looked-at bars** (TBT + three category bars,
§2.1)? Recommendation: **no — name them as un-adopted, with the reason.** Adding four bars at the
tail of a closing increment is the unforced widening this campaign keeps cleaning up (conventions
15/16/17 all ruled this shape). They become a named, dated gap, not a silent absence.

## §5 · Budget

⛩ **Proposed: ~55–85 kT, 1 session, `executor_tier: opus`.**

B2b's original ~50–80 kT *"leaves the band entirely under (c)"*, so this is its **own** ratification
(SO#11/ADR-016), not an absorption. The ~5 kT increment over the original band is DEFECT-C's
three-way identity limb, which did not exist when the figure was set.

⚠ **`executor_tier` declared at the open, not discovered at the AAR** — P4.1 ran four sessions on
`opus` under a `fable` declaration. The per-bar provenance reasoning above is judgement work, not
mechanical, so `opus` is declared and this sitting is already running it.

## §6 · What this gate does NOT decide

- **It does not re-open scope B.** The drift is `_meta`-only; the class values are unchanged.
- **It does not attribute the historical fixtures** (§2.3). That is un-evidenced and stays so; B2b
  records the limitation rather than inventing a provenance for four committed JSON files.
- **It does not touch AC1/AC2/AC3**, all closed. B2b's only criterion is AC4.
- **It does not close the deploy question** — B2b is met on-build; prod serves `a852423` and no
  deploy is owed.
