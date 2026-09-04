---
type: evidence
title: "Course-deploy prep — C1 (the /privacy storage sentence) and C2 (gate coverage), designed before building"
campaign: campaign_haussmann
increment: course_deploy
status: proposed   # ⛩ the deploy GO is ruled; THIS is the same-diff work that GO requires. Nothing built.
created: 2026-09-04
updated: 2026-09-04
last_edited_by: agent_rosetta
tags: [evidence, haussmann, course_deploy, privacy, adr_057, localstorage]
---

# Course-deploy prep — C1 and C2

> ⛩ **The deploy GO for `b2e943b` is TAKEN (2026-09-04).** This artifact is not asking whether to
> ship the course; it is the **same-diff work the ship requires**, designed in the O1-measurement
> window and **built in Phase C** so no build runs while `GR-5`'s rate harness is sampling.

## What is actually undeployed

Prod serves **`2a72efe`** (`2026-09-04T16:08:57Z`, `mode=prod`). Local HEAD **`cc53f7b`**, 8 commits
ahead. Of the four commits above prod touching `site/`, **exactly one renders** `[D]`:

| Commit | Touches `site/` | Renders? |
|---|---|---|
| `b2e943b` | the intro course — 13 files, +1157/−3 | ✅ **the only one** |
| `f847266` | `site/scripts/deploy_log.txt` | ✗ |
| `5246e78` | two `gate-49` baseline PNGs | ✗ |
| `cc53f7b` | `site/scripts/flake_rate_measure.mjs` | ✗ |

Live probe `[D]`: `/learn/course/` **404** · `/learn/course/what-is-an-adna-graph/` **404** ·
`/learn/` **200** (self-consistent — prod predates the nav change).

⇒ **Every HAUSSMANN row that was ever built-not-deployed is already live.** `R-124` discharged at
`7cef6e0`; `R-97` at `2a72efe`. **The course is a second writer's increment** (TypeScript.aDNA C3b
Slice A), and its gate verification is **not** HAUSSMANN's to claim — said here so the deploy record
does not later read as though this campaign built it.

---

## C1 — shipping the course makes a live `/privacy` sentence FALSE

**Verified at the object `[D] 2026-09-04`**, both halves:

`site/src/pages/privacy/index.astro:55-63`:

> **The one thing stored in your browser**
> …we save that single preference — the word `theme` — in your browser's `localStorage`…
> **That is the only thing the site stores**, and it exists purely to serve you, not to identify you.

`site/src/scripts/course/progress.ts:56,76,91`:

```
const STORAGE_KEY = 'adna:course:v1';
window.localStorage.getItem(STORAGE_KEY);
window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progressStore.getState()));
```

⇒ The heading says **one**, the body says **only**, and the course ships a **second** key. ⛔ On the
**trust page**, and as an **unscoped absolute** — the `R-64` / `R-97` / `R-161` / `R-167` over-promise
class **on a fifth surface**.

### ⭐ Said in fairness, because the register pass cuts both ways

`progress.ts:7` documents that *"`localStorage` is the whole transport"*, and `gate-42` reds the suite
on any failed request. **The zero-network property HOLDS and `R-97` is not contradicted.** The defect
is **a count in a sentence, not a transport** — which is why the remedy is copy plus an assertion, and
not an architecture change.

### Pinned-state check, run BEFORE proposing an edit

| Probe | Reading `[D]` |
|---|---|
| register row quoting the sentence | **none** |
| `gate-26` fixture entry | **none** |
| `claim_trace_manifest.json` | **none** |
| `grep -rn "the-one-exception" src/` | **1** — its own definition; nothing links the anchor |

⇒ **UNPINNED.** Same shape as `R-161` at GR-4 O3: it costs no same-diff fixture churn, and the edit
moves a claim **DOWN** (convention 1). ⛔ **And the same test applies: is the sentence merely
pre-existing, or does THIS increment make it worse?** It is the second — the course is what falsifies
it — so this is a **forced repair, not a sweep.** Nothing else on `/privacy` is touched.

### Proposed copy (⛩ not yet ratified)

Anchor `id="the-one-exception"` is **kept** — nothing links it, so changing it buys nothing and
churns a stable identifier.

> **What is stored in your browser**
>
> If you switch between light and dark mode, we save that choice — the word `theme`. If you work
> through the intro course, we save which lessons you have finished — under `adna:course:v1`. Both
> live in your browser's `localStorage`, so the site remembers them on your next visit.
>
> Neither ever leaves your device, neither is sent to us or anyone else, and you can clear both at
> any time through your browser. They exist to serve you, not to identify you.

⭐⭐ **NO TYPED COUNT, AND THAT IS THE DESIGN, NOT A STYLE CHOICE.** *"The one thing"* did not fail
because the number was wrong — it failed because **a count in prose has no mechanism keeping it true**
(KW-14). *"Two preferences"* would be the identical defect with a different integer, and it would go
stale on the third key exactly as the first went stale on the second. The copy therefore **enumerates
and never totals**, and the enumeration is what `C1-GATE` binds to code.

### `C1-GATE` — the assertion that stops the class recurring

**Contract:** *the set of `localStorage` keys the built site writes equals the set `/privacy` names.*

⛔ **A NEW GATE FILE, and the placement was reasoned rather than defaulted.** `gate-50` is the obvious
host — it already binds a `/privacy` sentence to a code fact (`G50c`, *"the /privacy §performance
claim, asserted not narrated"*) and already reads `dist/` bundles for string presence (`G50a`). **It
is still the wrong home**: its contract is *the field-CWV instrument*, and P4.3 ruled this exact
question — *"ADR-057 is a claim about WHERE an assertion belongs; discharging it means reading each
gate's contract, not adding the route everywhere."* ⇒ `gate-55-client-storage-truth.spec.ts`.

| Assertion | Claim |
|---|---|
| **G55a** | every `localStorage` key literal written by a shipped `dist/_astro/*.js` bundle is named verbatim on `/privacy`'s **`.md` twin** |
| **G55b** | every key `/privacy` names is actually written by some shipped bundle *(the other direction — a page naming a retired key is also a false claim)* |
| **G55c** | the extracted key set is **non-empty** and ≥ a pinned floor of **2** — ⭐ **without this the gate is vacuously green the moment the extraction regex breaks**, which is `GR-3`'s false-red and `B0`'s control-that-passed-for-the-wrong-reason in one |

**Surface, named (convention 17):** the **twin**, not the HTML — the claim's verb is *"a reader
encounters this key name"*. ⚠ And the code side reads **`dist/` bundles, not `src/`** — a key defined
in `src/` and never bundled is not a key the site writes, and `G50a`'s comment records that exact
distinction (*"an import removed from BaseLayout leaves the file in `src/` and nothing in `dist`"*).

**Red-proof (convention 14), one mutation per assertion — GR-3's attribution clause, spent forward:**

1. add a third `localStorage.setItem('adna:fake:v1', …)` to a bundled script → **G55a alone** reds.
2. remove `adna:course:v1` from the `/privacy` copy → **G55a alone** reds.
3. add a key name to `/privacy` that no bundle writes → **G55b alone** reds.
4. break the extraction regex so it matches nothing → **G55c alone** reds *(the case that matters — it
   is the only one that distinguishes "no violations" from "the instrument saw nothing")*.
5. control: unmutated tree → all three green.

⚠ **A limit stated rather than implied:** the extraction matches **string literals**. A key built by
concatenation or held in a variable the bundler renames is **invisible to it**, so `G55a` proves *no
literal-keyed violation*, never *no violation*. Recorded on the gate's face — this is convention 18
(say what the instrument runs against and whether that is the surface the claim is about).

---

## C2 — the course shipped with ZERO gate coverage

**Verified `[D]`:** `grep -rn "learn/course" site/tests/ site/scripts/` → **0 hits**, and `b2e943b`
touched **no** test, gate, or audit file.

⇒ **ADR-057 / convention 7 not honoured** — *any commit that changes a route, slug, or rendered count
updates every gate/audit spec that hardcodes it, in the same commit.* This is **P4.3's finding
verbatim**: *"a 620-green suite knew nothing about the new route."*

⚠ **And P4.3's own first fix was wrong**, so the remedy is chosen by reading each gate's contract, not
by adding the route everywhere:

| Gate | Contract | Course routes? |
|---|---|---|
| `gate-4-a11y` | axe over an enumerated route list, both themes | ✅ **add `/learn/course/`** — a new route family with interactive islands is exactly its subject |
| `audit-p1s3-sweep` | *"every route class `gate-4` does NOT already cover"* | ❌ **must not** — adding it here after `gate-4` duplicates axe twice and leaves nothing new covered |
| `gate-17-agentic` | twin shape + twin↔page content | ✅ the course lessons are content-collection pages and **do** emit twins |
| `gate-49-visual` | 12 pinned templates | ❌ **not proposed** — raising `TEMPLATE_FLOOR` is a scope decision, and the course is a second writer's surface |
| `gate-55` *(new)* | client storage truth | ✅ C1's assertion, above |

⛔ **Scoped deliberately.** The course's *own* substantive gate coverage (does a lesson check work? does
progress persist?) belongs to **TypeScript.aDNA's** increment, not to HAUSSMANN. What is claimed here is
only the **site-integrity** coverage the route class already owes by ADR-057.

---

## Phase C order (nothing here runs before `GR-5`'s O1 lands)

1. `/privacy` copy edit + `gate-55` + the `gate-4` / `gate-17` route additions — **one commit**
   (ADR-057 is same-diff by definition).
2. Red-prove `gate-55` 5/5 as above; re-run the suite **after** the record edits (*a close cascade that
   edits a governance file is a change the suite can see*).
3. `npx astro build` → `node scripts/inject_redirects.mjs .` → `site/scripts/deploy_adna.sh prod`.
   **⛩ push and ⛩ deploy are separate GOs, in that order** — `inject_build_stamp.mjs:83` stamps HEAD
   and nothing checks HEAD is public.
4. **Changelog entry owed** — newest is 2026-09-03 and the cadence prompt is date-keyed, so it will
   fire; derive **both** `title` ≤ 70 and `description` ≤ 160 from `src/content.config.ts`, never
   measure one and assume its sibling (GR-1's class, which bit again on 2026-09-03).
5. Re-probe **at the destination**: `/learn/course/` 200 · `/privacy` names both keys on the twin.

⚠ **`gate-49` cost checked before costing, not after:** `/privacy` is **NOT** among the 12 `TEMPLATES`
`[D]` — the `policy` baseline captures `/security/` and is declared *"the `.policy` template, shared by
/privacy and /accessibility"*. ⇒ **no re-baseline fires**, which is the cost that dominated GR-4 O2.
`/learn/` **IS** a template (`doc-hub`), and `b2e943b` edits `learn/index.astro` ⇒ **a `doc-hub`
re-baseline is expected**; confirm red **first**, then regenerate in-container and check **exactly**
the expected files changed.
