---
type: artifact
artifact_class: verification_record
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
objective: O3a
title: "Gate re-baseline — post-P2 fixture truth (2026-08-19)"
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_rosetta
suite_result: "487 passed, 0 failed — derived from the run, not carried"
tags: [artifact, haussmann, p2_6, gates, verification, adr_057]
---

# Gate re-baseline

## 1. The suite

`npx astro build` (221 pages) → `node scripts/inject_redirects.mjs .` (**42 of 42** widened) →
`GATE_PORT=4399 npx playwright test`.

**Result: `487 passed (1.6m)`** — exit 0, no failed / flaky / skipped line printed. **33 spec files**
(32 `gate-N-*` plus `audit-p1s3-sweep`); the bare `playwright test` invocation runs everything
**including `@audit`**, so the sweep is inside this number.

The count is **derived from the run output**, not carried from the last record (KW-14). It matches
P2.5's close at 487, which means **no gate was added or lost in the interval** — the re-baseline's job
was to establish that, and it did.

> **Instrument note.** The first run's output file read back empty through `tail` and `wc -l` while the
> process exited 0 — the node's known shell/read flake. The number came from a `Monitor` watching the
> same file, which saw `487 passed` in it. **The file was never empty; two readers of it disagreed.**
> Recorded because "the suite passed" without a derived number is exactly the shape of claim this
> campaign does not accept, and it nearly went unrecorded twice in one session.

## 2. Route coupling survived P2.2 — the staleness was on the wrong axis

`claim_trace_manifest.json` was flagged in planning as stale: last modified 18 Aug, therefore predating
both P2.4 and P2.5, which shipped on the 19th. **On the route axis that concern was unfounded.** All
**10** distinct `rendered_on` routes in the manifest return **200** on production `[D]`:

`/` · `/commons` · `/get-started` · `/learn/what-is-adna` · `/llms.txt` · `/network` ·
`/reference/specification` · `/state-of-the-network` · `/vaults` · `/vaults/graph`

And gate-20 — which asserts every `source_ref` resolves and every machine accessor yields its `expected`
value — is **green inside the 487**. So the manifest's 13 claims are current in substance, not merely
un-broken. An mtime is not a staleness measurement; the assertion passing is.

The manifest is **hand-curated, not generated** — no generator exists in `site/scripts/` or `scripts/`
`[D]`. Ring-A (pt19-owned) entries stay read-only: `vault-count` 74, `relationship-count` 14, and
`registry-generated-at` 2026-08-17 are Hestia's data, and this campaign flags drift rather than fixing
it. None drifted.

## 3. What the re-baseline actually found — 487 green, 8 claims open

This is the finding worth carrying to DP6.

The suite is **fully green**, and as of this mission the claim register holds **8 open rows**: R-34,
R-63 (awaiting the TTFS run), R-111 (S2), R-120, R-122, R-123 (S2), R-121, R-124 (S3). Two further
surface findings — F19 (a fourth thin hub, created by P2.3) and F20 (a font face failing on every page)
— are also live.

**Not one of them is caught by any of the 487 assertions.** The classes involved:

| Defect | Why the suite cannot see it |
|---|---|
| R-120 — homepage contradicts itself in consecutive sentences | A false statement in prose. Not a route, slug, or count; ADR-057 §Decision.2 is coupled to *identifiers* |
| R-121 — invented before/after anecdote | Same class. The suite cannot tell an illustration from a case study |
| R-111 — a related-party disclosure that was adjudicated and never shipped | An **absence**. No grep for a wrong string finds a missing one |
| R-122 / R-123 — CTA points at the repo without CONTRIBUTING/CoC; that repo is unlicensed | **Off-site state.** Every gate asserts against the built site; none probes the GitHub repos the site's primary CTA sends people to |
| R-124 — no clinical/regulatory posture | An absence again, and one only a persona-shaped reader thinks to look for |
| F20 — a font face erroring on every page load | **No gate watches the console.** `grep -rn "page.on('console'" site/tests/gates/` returns nothing `[D]` |
| F19 — a hub shipping with `h2=0` and 1,504 bytes | No budget or floor asserted on hub substance |

Three of these are cheap to close mechanically and belong in the re-plan as gate work: a
**zero-console-error gate** (F20), an **off-site link-target gate** that probes the CTA repos for
CONTRIBUTING / CoC / LICENSE (R-122, R-123), and a **hub-substance floor** (F19). The prose and absence
classes are not automatable and stay where they belong — with readers, which is what O0c-a is for.

**The honest summary**: a green suite means no *known identifier-shaped* regression. It has never meant
the site is defect-free, and this mission is the clearest demonstration the campaign has produced. Three
fresh readers and one register-continuity check found eight defects behind 487 green assertions.

## 4. Record mismatches — closed, and staged

| Item | Class | Action |
|---|---|---|
| Charter splash read `suite 472 zero xf` | **live status, stale** | **Fixed** → 487, derived from this run |
| Charter line 25 `suite 460→472` | **dated history, correct** | **Left alone.** It records what was true at P2.4's close. Editing it would be falsifying a changelog to look current — the opposite of the fix above. The two lines look similar and are opposite cases |
| DP table: `P2.4 pick` row reading ⛩ AWAITING | **living status, phantom gate** | **Struck as SUPERSEDED** by `DP-P2.4` (same two questions, ruled the same day; P2.4 closed `completed`). Kept struck-through per SO-6, never deleted. The DP table is living status — DP2–DP5 were all updated in place — so this is maintenance, not amendment of ratified text |
| **ADR-057 `status: proposed`** | **contradicts itself and the charter** | **Staged as a DP6 ask — not fixed.** See below |

### The ADR-057 contradiction, stated precisely

ADR-057's frontmatter reads `status: proposed`. Its own Status section reads:

> *"**Proposed** — the regime the campaign runs throughout; **ratified with the charter at Gate C (DP1)**, refined only by operator amendment."*

That sentence asserts both states at once. And the charter's **§7.7 block — operator-signed, Stanley,
2026-08-16, `accepted`** — says *"the ADR-057 measurement regime adopted with the charter."*

So on the record the operator **did** adopt it, and the frontmatter field is what is stale. But per the
vault's Governance Doctrine §7.7, *"no ADR is `accepted` on an agent's say-so"* — and flipping the field
is the visible act of ratification even when the substance was already ratified elsewhere. **So it is
staged, not done**: DP6 asks the operator to confirm the Gate C signature covered ADR-057, at which
point the field flips to `accepted` with a 4-field ratification block citing that signature.

Worth noting what hangs on it: ADR-057 is the **same-diff law** and the measurement regime **this very
mission runs under**. A campaign measuring itself against an instrument whose own status field says
"proposed" is the self-certifying-gate shape the P2.5 record warned about.
