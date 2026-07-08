---
type: review_findings
artifact_class: evidence_completion
created: 2026-07-08
mission: mission_site_story_review_charter
objective: O6b (charter-adjustment #1 — complete the evidence before ratification)
persona: agent_rosetta
status: draft
method: "Headless T0 harness (visual_capture.mjs --axe) on the 12 un-reviewed surfaces + Lighthouse-adjacent + 2 DD subagents (technical repo-walk of the real public GitHub org; persona-hub evaluator) + spot-checks (install-truth, version, OG, link-graph). No site/ edits."
tags: [review, evidence, completeness, dd, storyweave, o6b]
---

# Evidence completion — closing the completeness-critic's T2 gap

> The static 11-surface review reached its top verdict (**T2 — outsider-credibility**) without opening the 6 persona hubs, the `/org-context-graphs` page, or the real GitHub repos. This pass opened all of them (read-only). **Net: T2 is narrower + more actionable than feared — the *standard* is genuinely credible; the *network/protocol* claims outrun public evidence, and the fixes are concrete.**

## 1. Capture results (12 un-reviewed surfaces, headless + axe)
- **All 200, 0 console errors.** Persona hubs are **substantive** (real H1s: Enterprise Adoption Checklist · Security & Disclosure · Compliance Walkthrough · Teaching Kit · Startup First Hour · Researchers).
- **axe (measured — validates the previously-*asserted* "AA strong"):** **0 violations** on all 6 persona hubs + `/org-context-graphs` + `/how`. **3 violations** on the **vault-detail template** (identical across 4 samples → affects ~40 pages) — a real, concrete a11y fix. Mobile reflow: **clean** on all hubs (single-column, hamburger).

## 2. Spot-checks
- **Install command: ACCURATE** — matches `src/data/install_truth.json` one-liner (`git clone …/aDNA.git ~/aDNA && cd ~/aDNA && claude`); gate-12-enforced. ✓
- **Version: single-sourced v2.5** in `src/data/standard.ts` (drift was fixed at Champollion). The `/reference` "no version stamp" finding is a **display gap** (show a stamp), not a data error.
- **OG/SEO meta: implemented** (`src/components/common/SEOHead.astro` — og:image/twitter/title). ✓ (render-verify later.)
- **`/org-context-graphs`: TRUE ORPHAN + no-JS-broken** — 0 inbound links **and** the 11,055px page renders as a **hero-then-void**: its scroll-reveal `.rv` content never fires without JS-scroll (violates the site's no-JS-render principle). **Disposition: RETIRE** (default confirmed — it's unreachable *and* broken; the org-graph offering is covered by /use-cases + the org-graph vaults).

## 3. DD-subagent verdicts

### 3a. Technical repo-walk (real public GitHub org) — `network-of-one` CONFIRMED*, `Lattice-Protocol-asserted` CONFIRMED
- **Network of one — CONFIRMED (by-design asterisk):** sole author `ScienceStanley` across 7 public repos; external signal near-zero (`aDNA` 2★/0-fork; `aDNA.aDNA` 0/0; the only real traction — 19★/3-fork — is on the *archived* `adna-legacy`). AI code-names are commit-message labels, not git authors. *But single-operator is the literal thesis ("one human + agents"), so consistent-with-vision, not deceptive.*
- **⚠ CONCRETE DEFECT — broken Lattice-Protocol link:** the public README links "Lattice Protocol" → `github.com/LatticeProtocol/lattice-protocol`, which is **private AND archived (a 404 for any outsider)**. The protocol, whitepaper, and `Network.aDNA` are all **private** → the "open protocol / network" is publicly **unverifiable**.
- **The public STANDARD is genuinely real:** MIT, semver **v7.0→v8.6** tags, working `gates.yml` CI, clone-and-run image, **+ one real tested code lib (`Canvas.aDNA` — 247 .py / 154 tests)**. "Vaporware" *overstates* it for the standard; the gap is specifically the *protocol/network* claims. Public footprint is ~85–95% Markdown (a docs standard + site), not a platform.

### 3b. Persona-hub evaluator — **T2 IMPROVES (modestly)**
- **Scores /5:** enterprise 4 · security 4 · compliance 4 · **researchers 3** (weakest — evidence-free; its own "anecdotal" critique boomerangs) · educators 4 · startup-first-hour 4. All are mechanism-level, persona-structured, and **repeatedly under-claim** (flag "federation isn't built yet" on 3 hubs).
- **Verdict:** the hubs prove the **standard** is real/disciplined/honest — they do **not** prove the **network** has members (every "Use Case" is a fictional narrative; no human named). "On-the-fence" → **"cautiously positive on the standard, still-unproven on the network."**
- **Strongest asset (propagate):** the **dated, verifiable self-reference** ("this vault ran this hour on 2026-04-13 → browse `how/sessions/history/`") + the honest federation caveat.

## 4. T2 — re-confirmed & sharpened (on complete evidence)
The gap is **real but narrower + actionable**. The honest resolution the operator already chose (progressive **decentralization** + **humanization**) is right — and the evidence adds **concrete, buildable** moves (below). The single biggest *external* unlock is **operator-strategic, beyond the site**: making `lattice-protocol` + the whitepaper **public**.

## 5. New evidence items → the backlog (EV-series)
| # | Item | Sev | Traces to | Folds into |
|---|---|:-:|---|---|
| **EV1** | **Fix the broken "Lattice Protocol" link** (public README → private/404 repo) + reframe protocol/network claims to public reality ("open standard now; protocol/network opening progressively") | ★★★ | technical-DD | B4 (credibility) + link-integrity |
| **EV2** | **Swap fictional "Use Case" cards → the real subnetworks** (WGA · Context Commons · WilhelmAI · Rare Archive) across the persona hubs + `/use-cases` + reconcile `/adopters` | ★★★ | persona-DD (biggest T2 lever) | B4/B6 |
| **EV3** | **Name a real human + real security contact** (security page + the credibility surface) — the anti-anonymity move (humanization) | ★★ | persona-DD + funder-skeptic | B4 |
| **EV4** | **Vault-detail axe: 3 violations × ~40 pages** — measured a11y fix | ★★ | axe pass | B12 |
| **EV5** | **RETIRE `/org-context-graphs`** (orphan + no-JS-render-broken) | ★★ | orphan + render | B1 (resolves DP#1) |
| **EV6** | **`/reference` version stamp** (display; data is fine) | ★ | version spot-check | B8 |
| **EV7** | **Bridge `/compliance` → a named regime** (SOC 2 / ISO 27001 / EU AI Act) | ★ | persona-DD | persona-hub polish |
| **EV8** | **Propagate the dated-verifiable-self-reference pattern** to the weak hubs (researchers, security) | ★ | persona-DD | B4/content |

**Confirmations (no action / assets to keep):** install command ✓ · OG/SEO meta ✓ · persona hubs axe-clean + mobile-clean ✓ · the real MIT standard + CI + Canvas lib + the dated verifiable logs = the credibility bedrock to foreground.

## 6. Dispositions for the charter (Part B)
- **DP#1 (orphan): RESOLVED → RETIRE** `/org-context-graphs` (EV5).
- **T2 phase (P1/B4):** now has concrete content — EV1 (fix link + honest reframe) · EV2 (real adopters) · EV3 (named human/contact) · foreground the real public assets. **Operator-strategic flag:** make protocol/whitepaper public = the biggest external unlock.
- **P0 verify-live is largely DONE** (this pass) — remaining measured item = a real Lighthouse/CWV run (perf), foldable into P0 M0.2 or P5.
- **Good news to bank:** the persona hubs *improve* T2; the standard is genuinely credible — the refresh is polishing a real thing, not propping up a hollow one.
