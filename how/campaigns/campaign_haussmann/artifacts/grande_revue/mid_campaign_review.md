---
type: artifact
artifact_id: grande_revue_mid_campaign_review
campaign: campaign_haussmann
operation: operation_grande_revue
title: "GRANDE REVUE — the Mid-Campaign Review: ten dimensions, ranked findings, Gate 1 deliverable"
created: 2026-08-28
updated: 2026-08-28
status: active
last_edited_by: agent_rosetta
session: session_stanley_20260828_135704_haussmann_grande_revue_p1
instrument: "[[rubric_v1]] (operator-signed 2026-08-28)"
evidence: "[[dimension_reports_digest]] + evidence/captures*/ (42+22 live captures, deployed tree 51af717)"
tags: [artifact, grande_revue, mid_campaign_review, phase_1, gate_1]
---

# GRANDE REVUE — Mid-Campaign Review (Phase 1, Gate 1 deliverable)

> Scored against [[rubric_v1]] (⛩ signed 2026-08-28). Every claim `[D]` measured this sitting or
> cited to the producing report in [[dimension_reports_digest]]; synthetic-reader judgments are
> `[D-syn]` and are pre-screens, never a substitute for P5.1's human panel. Live tree at every
> probe: `51af717` (stamp re-read, not quoted forward). **Nothing was fixed in this phase** — the
> findings route to the [[battle_plan]].

## 1. The one-paragraph verdict

The site is in the best shape this campaign has ever measured it — axe-0 in both themes, 0 markup
errors, 0 broken internal links across all 226 pages, a registry pipeline coherent from source to
API byte-for-byte, machine surfaces whose self-descriptions all verify true, and an honesty
register that reads as the site's differentiating asset on four of five reader traces. **The
defects that remain are concentrated on exactly one seam: the trust path** — the surfaces whose
job is to let a visitor or agent *verify* rather than *believe* — where a CSP header blocks the
site's own font, the provenance links 404, the agent-facing twin serves corrupted commands, and
`llms.txt` still carries the one present-tense protocol claim the P1.1 purge removed everywhere
else. The campaign graph itself is healthy (27/27 statuses reconcile, 5/5 AARs, budgets
reconciled) with its two defects being the campaign's own most-documented class — a status surface
lagging its artifact — sitting, with structural irony, inside the mission file that hosts the debt
register.

## 2. Ranked findings

### P0 — none

No finding blocks a core journey or asserts a falsehood a reader cannot recover from. The clean
result is a result (12 instruments, listed in §4).

### P1 — falsehood or breakage a visitor/agent hits now (8)

| # | Dim | Finding | Evidence |
|---|---|---|---|
| P1-1 | D3 | **The production CSP blocks the site's own font on every page, both themes.** `font-src 'self'` (`site/vercel.json:8`) blocks the base64-inlined JetBrains Mono Variable subset in `BaseLayout.*.css` → one console error per live page. Local previews carry no CSP ⇒ **gate-42 structurally cannot see it**; CSS live-vs-local md5-identical. P4.2's census row "the CSP self-validates against nothing", materialized. | digest §D3; full console text captured `[D]` |
| P1-2 | D4/D9 | **`llms.txt` asserts "federating on the Lattice Protocol", present tense** — hand-typed prose in `src/pages/llms.txt.ts:71`, live at line 53. The R-14 purge was verified page-by-page, never surface-by-surface; the agent-facing surface kept the claim, and it is where the embargoed protocol story leaks as *runs now*. | `[D]` re-verified live by lead desk |
| P1-3 | D6 | **The trust page's provenance commit is local-only** — `/get-started/what-your-agent-reads/` pins `0364d85…`, a commit in the operator's local `~/aDNA/.adna` never pushed; every "at the same commit" link 404s at the exact moment a skeptic accepts the page's invitation to verify. Mitigation measured: all 4 vendored files byte-identical to public `raw/main`. | digest §D6 `[D]` |
| P1-4 | D6/D8 | **The `/get-started` twin serves corrupted check commands** — the emitter strips `<name>` as an unknown tag → `ls ~/aDNA/.aDNA/what`, "Replace `` with whatever you called your project", live at `/get-started.md`. The machine door advertises the surface that breaks the quickstart. (Same emitter class: homepage twin renders graph + How-it-Works as garbled run-together text, P2.) | digest §D6 `[D]` |
| P1-5 | D5 | **`worldgenome` registry row contradicts ratified identity** — empty genesis skeleton (class `tbd_at_p0`, persona null, `status: genesis`) vs org_vault · Gaia · active, P0 closed 06-10; rendered live. Direction is understatement, honesty framing holds ⇒ P1 not P0. **Hestia data ask, never a local edit** (pt19). | digest §D5; memo claims 3/3 verified true `[D]` |
| P1-6 | D5 | **The vault's own ADR index stops at ADR-046 while adr_047–059 exist** — 13 unindexed, including ADR-055 whose §4 `final` depends on machine-indexing. Rosetta-local fix, distinct lane from the Hestia ask. | `[D]` derived from `what/decisions/` |
| P1-7 | D10 | **P4.4's `status:` qualifier denies the signature its own frontmatter records** — still reads "nothing built, criteria NOT edited, budget NOT re-ratified … `proposed`" while the same file's budget field says "RE-RATIFIED A THIRD TIME 2026-08-26" and its body records B0 ✅. A cold agent obeying "READ THE QUALIFIER" would re-open a passed gate. | digest §D10 `[D]` |
| P1-8 | D10 | **F-n is discharged in fact, live on paper** — commit `6675442` performed the MANIFEST review (ratchet 49→0) but the register row was never struck; the register's own re-derived count (7 live) is stale by one. The debt ledger carries the class it exists to fence. | digest §D10 `[D]` |

### P2 — materially misleading or blocking-adjacent (7)

| # | Dim | Finding |
|---|---|---|
| P2-1 | D6 | "**Nothing is sent anywhere**… no account, no telemetry, no network call after the clone" scopes, as written, over a command ending `&& claude` — which requires a paid Anthropic account and transmits the read files. One scope clause fixes it. `[D-syn]` reading of a `[D]` quote. |
| P2-2 | D7 | **The ancient-DNA disambiguation is one click too deep** — exists, excellent, on `/learn/what-is-adna`; absent from `/`, `/about`, `/commons` where the rare-disease visitor lands. Third independent instrument to converge on the homepage (after P4.5b's coherence + reading-level findings). ⚠ Constraint: `/` clears its FKGL target by **0.04** — new homepage prose spends a margin that does not exist. |
| P2-3 | D4 | **The public mirror of `skill_onboarding` promises a "Lattice Protocol marketplace … agentic residuals"** with "coming soon" as the only hedge — an unbacked forward economic claim on a public page (and in `llms-full.txt`). |
| P2-4 | D5 | **Systemic registry freshness**: 56/74 rows `genesis`, 50 `last_synced: null`, 18 frozen at 2026-05-24; `wga`, `terminal`, `jupyter` undersell known-active vaults. Honest framing holds (the site never contradicts itself) — the registry undersells rather than lies. Hestia sync lane. |
| P2-5 | D10 | **R-124 is now a narrative-only deferral** — both named owning missions consumed without taking it; 0 hits in P5.1/P5.2/both signed amendments. The exact class P4.3's close condemned. Needs a register row or an operator routing act. |
| P2-6 | D10 | **2 unanswered `ack_required: true` inbound memos** (Hopper 08-27; Venus ADR-022 08-27) + **4 inbound memos git-untracked** — the queue is invisible to the audit trail and to context-cleared successors (the exact 08-20 lesson). |
| P2-7 | D7 | **Changelog + RSS are footer-only** — no "what's new" entry point in the 7-item nav for a returning member; ADR-049 caps the nav at 7, so the remedy is a homepage "Latest" strip or equivalent, not an eighth nav item. |
| | | *(Also P2: homepage twin garble — folded into P1-4's emitter class.)* |

### P3 — polish (selected)

`/reference` card labeled "Visual Identity v3" links `/visual-identity-v2` `[D]` · get-started's
"each prints nothing … except the last two" (command 3 also prints) `[D]` · `<page>/index.md`
guess-form 404s (sibling `.md` is the advertised convention) `[D]` · build stamp not advertised in
the machine door or llms.txt `[D]` · orphan installer artifacts in `dist/` with no bridge from
/get-started `[D]` · register quote drift R-101/R-104 (R-104 also outside the gate fixture —
undefended) `[D]` · R-55 CC-BY-4.0 residue on /commons `[I]` · "I have a vault — how does it get
listed?" has no explicit path on /community or /vaults `[D-syn]` · 2 history session filenames
break the naming contract `[D]` · 4 August sessions with empty `token_budget_actual` `[D]` ·
homepage manifesto register (skeptic eyebrow; indulgence bought back by the honesty stats)
`[D-syn]` · /vaults at mobile is a ~17,000 px scroll (search carries it) `[D]`.

## 3. Per-dimension verdicts (one line each; no pooled score — P4.1's rule)

| Dim | Verdict |
|---|---|
| 1 Visual | **Strong** — coherent both themes across 64 live captures; hero panels dark-by-design; no breakage in sample. |
| 2 A11y | **Holds** — axe 0 × 10 surfaces × both themes; human-gated items (F-v) correctly still owed and said on the public page. |
| 3 Technical | **Strong with one seam** — 0 validation, 0 broken links; the CSP/font block (P1-1) is the seam, and it is instrument-invisible. |
| 4 Claims | **Strong** — 11/11 sampled verified rows re-verified live; counts derived; empty-state candor intact; one stale sentence site-wide (P1-2), on the surface the purge never swept. |
| 5 Registry | **Pipeline coherent, data stale** — byte-identical from source to API; defects are freshness in the Hestia-owned source (P1-5, P2-4) + the vault's own ADR index (P1-6). |
| 6 Journey | **Structurally sound, honesty-dented at the verification affordances** — every URL on the path resolves and the promise matches the shipped repo; the two verify-it-yourself mechanisms both break in the hands that try them (P1-3, P1-4). |
| 7 Readers | **4 of 5 served, several exceptionally** `[D-syn]` — honesty register reads as winning; the two losses are positional (P2-2, P2-7), not substantive. |
| 8 Machine | **Excellent** — every self-description verifies true; old twin defect confirmed fixed; mcp.json correctly refuses to exist; negotiation works live. |
| 9 Stories | **2 of 5 homed** — token economics + convergence clean; model routing is the cheapest add and the only "runs now" story (live doctrine in this vault); movement-3 absence is the correct compliance state under the embargo — except where it leaks (P1-2). |
| 10 Campaign | **Substantially healthy** — 27/27 statuses reconcile, AARs 5/5, budgets reconciled, coverage recorded on 3/3 recent gates; both P1s are the index-vs-artifact class inside the file that hosts the doctrine (P1-7, P1-8). |

## 4. What this pass could not see (introspection, mandatory)

- **Human evidence** — all reader/journey judgments are `[D-syn]`; jargon tolerance, real
  first-run cost, and AT usefulness remain P5.1 / P2.6-O0b / F-v territory. Nothing here
  pre-empts them.
- **Performance** — no Lighthouse ran; the gate-19 bars remain un-sourced (F-e) and this review
  neither exercises nor closes that. B2a's sweep is the sanctioned lane.
- **Visual-lane regression** — gate-49 is container-only by design; not run here.
- **The order's original §4 text** — dimensions 1–9 are a signed reconstruction; if the original
  resurfaces and differs, the delta is a finding against this review, not against the site.
- **Coverage bounds, named**: link sweep = `href="/…"` in built HTML (not src/JS-built); visual
  sample = 5 of 64 captures eyeballed closely; claim re-verification = 11 sampled rows of 146;
  deep-page sample = 11 routes of 226. Counts of what was NOT covered are as load-bearing as the
  greens.
- **Two of this desk's own instruments were wrong before any subject was** (the fake-zero axe
  parser; the invented tutorial slug) — both caught and named. The streak continues; the
  structure (read the report shape, verify at the object) is what caught them.
