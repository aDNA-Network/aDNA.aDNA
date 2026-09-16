---
type: governance
subtype: campaign_claude
campaign_id: campaign_garnier
created: 2026-09-14
updated: '2026-09-16'
status: active
last_edited_by: agent_rosetta
tags:
- governance
- campaign
- garnier
---
# CLAUDE.md — Campaign GARNIER

> Compressed 2026-09-16 at the Codex→Claude runtime handoff ([[runtime_handoff_20260916]]),
> operator-ruled: the twenty HAUSSMANN conventions previously copied verbatim (~200 lines,
> including that campaign's incident history) are now titles + essence + pointer. The full text
> with worked examples lives in `../campaign_haussmann/CLAUDE.md` §Standing conventions; read it
> there when a convention's nuance is load-bearing. Nothing was retired — only the copy moved.
> Prior form is in git history at `afcb788` and before.

## Campaign Identity

Campaign `campaign_garnier`; owner Stanley Bishop (`stanley`); Rosetta executor **`agent_rosetta`
(runtime claude)** since 2026-09-16 — Codex executed genesis through the gateway increment and
retired at [[runtime_handoff_20260916]]; its completed work stays credited as `agent_codex`.
Commissioned through Berthier. Status active. DP1 accepted with amendments 2026-09-15; P0
completed; DP2 accepted with six amendments 2026-09-15; phase 1 authorized; later phase gates
remain human. Read root governance before this file.

## Quick Start

Read [[campaign_garnier]] (charter — phases, statuses, DP table, execution log), [[instrument_boundary]],
[[haussmann_reconciliation_ledger]], and the current mission in [[session_prompts_garnier]] (the sole
CURRENT pointer). Check active sessions, inbox and git status; open a scoped session before writing.
Do not execute queued campaign missions until their human gates are ratified.

Live state in one line: P1.1/P1.2 completed; **P1.3 (three-class formative human evidence) and DP3
are the open front**; three homepage increments completed under ratified exceptions, the last being
the minimal gateway ([[homepage_gateway_revision]], completed 2026-09-16, candidate branch
`garnier/homepage-20260916`). Frozen P1 stimulus: `b1cf040` at port 4465 — never touch it.

Ratified 2026-09-16 rulings (full blocks in the charter's Execution Log and their §7.7 records):
**gateway direction** — the homepage introduces and routes; four task paths; supersedes all-section
retention ([[homepage_gateway_revision]]); **R-VISUAL** — three independent vision perspectives are
required acceptance practice for every substantial visual change ([[verification_recipes]] §R-VISUAL,
including the gateway amendment: whole-page density, page purpose, destination choice); **runtime
handoff** — claude executes; single-writer lease transferred.

## Key Files

Charter: `campaign_garnier.md`. Missions + opening prompts: `missions/`. Ratification machinery:
`artifacts/amendments/` (verification recipes, DP records, budget basis, reader protocol,
field-performance policy, rolling closure ledger). Phase evidence: `artifacts/p0/`, `artifacts/p1/`,
`evidence/`. Design-detour receipts: `artifacts/research/`. Genesis planning: `artifacts/genesis/`.
[[AGENTS]] indexes owned artifacts.

## Standing Orders and applicability

[D] Root standing orders remain binding. Genesis and charter-amendment sittings are records-only.
P1–P4 site changes, including scoped hardening repairs, require their phase-entry authority and must
stay within the executing mission. Registry data, `.adna`, HAUSSMANN/VITRINE and peer files remain
reserved; template release is a separate gate-fired handoff. No push, deploy or peer delivery is
granted by any accepted DP so far. Every external write requires its own recorded authority.
Single-writer lease and explicit-path commits apply. Preserve unrelated changes. Settled operator
preferences: retain Agentic DNA, mechanism before the shared-heritage mission, VITRINE's prospective
scope absorbed without editing its history. ADR-059 preserves the validators-only token choice;
ADR-053 remains the five-slot art lineage. Conditional H1 consent does not close G4.

## Standing conventions (inherited from HAUSSMANN — essence here; full text + worked examples in `../campaign_haussmann/CLAUDE.md`)

1. **Honesty is the aesthetic.** Claims move down to verifiability, never up to ambition; every
   narrated count is derived, not typed (KW-14); aspirational present tense is a defect.
2. **Provenance tags** `[D]/[I]/[R]/[A]` on every finding and citation; untagged is inadmissible.
3. **Headless-first visual work** ([[doctrine_visual_inspection]]): T0 `scripts/visual_capture.mjs`
   → T1 `@playwright/mcp` → T2 only by escalation. Findings without captures are inadmissible.
   `--axe` covers one theme per run — run both.
4. **WebForge is the pattern source — consumer, never fork.** Read provider bars from their pinned
   owner file (`WebForge.aDNA/what/lib/gates/lighthouse_profiles.json`), never transcribe; if you
   must transcribe, name the source (residue F-e). Builder never self-certifies.
5. **Honor pt19**: never `sync:vaults` or hand-edit `site/src/data/vaults.json` — registry data is
   Hestia-owned + operator-gated; stage data asks as memos.
6. **Build discipline**: `npx astro build`, never `npm run build`. Headers/installer/redirects are
   post-build injections (`inject_headers` · `inject_installer_headers` · `inject_redirects`) — a
   bare build leaves gate-30 red on a good tree. Deploy only via `site/scripts/deploy_adna.sh prod`,
   token by env var, record every deploy ID. Don't co-run Lighthouse with the gate preview; port
   4321 is contended with WebForge. The changelog cadence prompt is date-keyed (fires once per day).
   Never vendor `~/aDNA/CLAUDE.md` or anything outside `.adna/` to a public surface.
7. **Same-diff gate law (ADR-057)**: a commit changing a route, slug or rendered count updates every
   gate/audit spec hardcoding it, in the same commit. Same-diff is blind to non-route hardcoded keys
   and to false statements in prose — after removing a defect, grep the *rendered* output for what
   the defect claimed.
8. **No literal-pinned live data in tests**: derive fixtures from the build snapshot.
9. **Constraint set**: ADR-025 — the community surface is HUMAN-ONLY until federation GA; Fluxer
   SO#8 — no LLM syndication, agents always disclosed; counsel embargo — no protocol
   publishing/links until D-8 rules; credentials by broker name only, values never in conversation.
10. **Cross-vault writes are memos, never direct edits** (Rule 10). Peer lanes: Aspasia · Hestia ·
    Vitruvius · Berthier · Noether · Mondrian.
11. **Decade discipline**: phase gates are human gates (SO-1); every mission gets an AAR before
    `completed` (SO-5); token budget declared + actual recorded (ADR-016/SO-11). An unmet
    `depends_on` means stop and ask — unless the convention's own record discharges it.
12. **Sessions**: Tier-1 file per session; `grounded_in:` evidence re-verified on disk at execution.
13. **Read a mission's acceptance criteria against each other before its budget is ratified** — can
    the stated method satisfy the stated test? Check *every* method×test pair and record which pairs
    were checked; a partial pass that doesn't state its coverage reads as a clean bill.
14. **An instrument is not believed until demonstrated to fail**, and it must assert it reached the
    thing it claims to check. Red-prove new assertions by mutation.
15. **The claim register can't see staleness; memos date their pins and state artifact paths from
    the recipient's root.** Habit over checker: the habit costs a sentence and cannot itself be
    wrong; a checker costs a sitting and can.
16. **"Deployed + live-verified" is a statement with a timestamp.** Any session touching `site/`
    re-probes its phase's shipped surfaces against the alias before trusting `completed`. A push is
    a precondition of a deploy (alias ancestry guard); a negative result is only as wide as the
    command that produced it.
17. **Every absence assertion names its surface**, and the surface must match the claim's verb
    (rendered text vs source vs DOM — pick per the question asked).
18. **State the surface an instrument runs against, and whether it is the surface the claim is
    about.** A local stand-in is legitimate; an unnamed one turns a green into false evidence.
19. **Derive `main`'s CI status at session open**: `gh run list --workflow=gates.yml --branch main
    -L 5` — a red is not automatically a blocker, but it must be seen and named. An `F-` ID exists
    only when its register row is written; re-derive any quoted tally.
20. **For a public-origin vault, the push is the publishing act; the send is only delivery.** The
    publication scan runs pre-push; `outbound_ready` in a pushed tree is already published.

GARNIER-specific additions: **R-VISUAL** (convention-level acceptance practice since 2026-09-16 —
see Quick Start); **frozen-stimulus rule** — P1 `b1cf040`/port 4465 and its 15 route hashes are
immutable until P1.3 reader evidence closes; site increments happen in the isolated checkout
(`~/.cache/garnier-homepage-20260916`, branch `garnier/homepage-20260916`), never in the vault's
`site/` while the freeze holds.

## What this campaign protects (verbatim reconciliation contract)

- Claims remain at or below their evidence; zero false or unsupported public claims is a launch requirement, not a freshly established present fact.
- Preserve state-of-the-network, canonical properties, consent-qualified people, and disclosed agent authorship.
- Preserve nav ≤7, lowercase canonical URLs, redirects, and zero internal 404s.
- Preserve curated llms.txt, Markdown twins and negotiation, registry JSON, JSON-LD, MCP, and explicit self-conformance boundaries.
- Preserve both themes, dual-theme code, responsive/reflow behavior, keyboard access, automated and manual accessibility evidence, and production header controls.
- Preserve honest-empty community/proposal states, AEP-1/2, registry admission and lifecycle tiers, and the human-only community boundary.
- Preserve site voice, one-new-term discipline, same-diff gates, derived fixtures, alias ancestry protection, and publication controls.
- Preserve HAUSSMANN P5.1/P5.2 and GR-7 ownership, H1/G4 and counsel holds, pt19, and the single-writer lease.

## Genesis corrections to inherited references

[D] MCP is built, not live: preserve that boundary, not an invented live service. [D] The
human-only community authority is Operations ADR-025 §D5, recorded by HQ; HQ's own ADR-025 is a
separate bounded cross-graph mandate and grants GARNIER nothing.

## Output contract

Complete charter, governance, mission template and mission files, one opening prompt per mission,
evidence index, genesis reports, D-1 through D-10 charter gate, planning AAR and session closure.
Raw capture matrices stay gitignored; cited representative captures and machine-readable evidence
summaries are committed. No synthetic result becomes a human result. No current full score is
claimed.

## Context Loading

Always: root CLAUDE, STATE head, active leases, mission, this file and instrument boundary.
P0/P4/P5: web quality + visual inspection doctrine + the instrument of record. P1/P2: site voice,
front-page doctrine, consent and source mapping. P3: consumer WebForge wrapper, ADR-053/059 and
VisualDNA. P6: decadal AAR, graduation, upstream contribution and close templates.

## Delegation Notes

Genesis was one Codex sitting spanning work packages S0–S7, not eight fabricated sessions. From
2026-09-16 the runtime is claude ([[runtime_handoff_20260916]]); `executor_tier` keeps its enum
(judgment class) and calibration remains unknown until evidenced. Future scoring requires two
isolated scorers; synthetic decisive readers in genesis are a disclosed single-author prescreen.
Shared files require a lease. Mission tiers distinguish judgment from mechanical verification.

## Mission index

See [[session_prompts_garnier]] for the sole CURRENT pointer and [[campaign_garnier]] for
script-derived totals and per-mission status. No other campaign pointer moves.

Related: [[campaign_garnier]] · [[mission_garnier_genesis]] · [[runtime_handoff_20260916]].

## DP1 approved amendment contract — 2026-09-15

[D] [[charter_ratification_20260915]] records Stanley's accepted D-1–D-10 dispositions. Follow
[[reader_protocol]], [[field_performance_policy]], [[docs_review_scope]], [[budget_basis]] and
[[verification_recipes]]. The storyboard and formative humans precede visual production; word
budgets are advisory with reasons for overage; unsupported claims remain blocking. Preserve
original synthetic evidence and its limitations. P0 envelope is 123 kT; each later phase budget is
committed at its preceding human gate. Append evidence/actuals to [[rolling_closure_ledger]] during
each mission. No new checker at sitting tail, no provider fork, no implicit phase or publication
advance.

## DP2 approved amendment contract — 2026-09-15

[D] [[dp2_ratification_20260915]] records Stanley's approval. Its six clauses govern P1 and the
named later finding owners. P1.1 starts with a reviewable mechanism/example/action, keeps the
public-good explanation accessible, and strengthens experimental checks before approval use. P1.3
includes /privacy and /state-of-the-network alongside its four invitation surfaces and retains the
three-class formative human requirement before DP3. P2.2 owns FG-P0-001 release fidelity; P3.3 owns
/learn/concepts/triad fresh-mobile readability. P1 budgets 150/90/80 kT are committed forecasts
with mission-close actuals and remaining forecasts; routine work within scope/envelope proceeds
without repeated permission. No baseline rerun or publication authority is implied.
