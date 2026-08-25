---
type: session
session_id: session_stanley_20260819_101805_haussmann_p2_3_deploy_memos_p2_4
created: 2026-08-19
updated: 2026-08-19
status: completed
tier: 1
agent: agent_rosetta
operator: stanley
campaign: campaign_haussmann
mission: mission_haussmann_p2_4_registry_redesign
phase: P2
executor_tier: opus
token_budget_estimated: "~300–420 kT across three stages: Stage 1 the P2.3 deploy ⛩ + push (~30 kT — pre-flight, deploy, live probe). Stage 2 three owed peer replies + one cohort-manifest pass (~50–70 kT). Stage 3 opens mission P2.4 (budgeted ~250–350 kT across 2 sessions); this is session 1 of 2, carrying O0 and halting at the O1 ⛩ pick."
token_budget_actual: "~340 kT (est. ~300-420 kT). Three stages all landed: P2.3 deploy+probe+push, the manifest pass + three replies, and P2.4 O0+O1 to its gate."
last_edited_by: agent_rosetta
tags: [session, haussmann, p2, deploy, coordination, registry, tiers, adr052]
---

# Session — P2.3 deploy ⛩, three owed replies, P2.4 to its gate

## Intent

Three stages, all under operator GO taken at the planning gate (2026-08-19):

1. **Ship P2.3.** Five objectives are complete and committed; production still serves `301daef`,
   which is P2.2. Deploy prod via the sanctioned path, prove it live with an assertion probe that
   throws on an empty derivation, then push the 9 unpushed commits as a separate act.
2. **Clear three owed peer replies**, one of which blocks another vault's phase gate (Venus,
   `adna.network.invite/v1`, inside Gangway Phase A's exit gate). Pandora's and Pythia's asks both
   land on `keystone_cohort_manifest.md`, so one manifest pass serves both.
3. **Open P2.4 — registry redesign.** Complete ADR-052 at `proposed` (tier model derived, not
   narrated), spike the registry surface, and halt at the ⛩ operator pick.

## Operator rulings taken at the planning gate (2026-08-19)

| Ask | Ruling |
|---|---|
| Session scope | **Deploy + push, then P2.4 to its gate.** Covers both outward acts for P2.3. |
| P2.4's data problem — the fields the mission's tier model assumed are empty (`tagline` 0/74, `github_url` 1/74, `last_synced` 24/74 with 18 identical) | **Derive from what exists; make the sparseness visible.** Tier from `status` + `card_present`. The dual-clock criterion is recorded as *not derivable*, not quietly dropped. |
| Which owed replies | **All three** — Venus, Pythia, Pandora. |

## Scope declaration (Tier-1)

**Will modify** — `how/campaigns/campaign_keystone/artifacts/keystone_cohort_manifest.md`,
`who/coordination/coord_2026_08_19_*` (new replies), `what/decisions/adr_052_*`,
`how/campaigns/campaign_haussmann/evidence/claims/claim_register.md`,
`how/campaigns/campaign_haussmann/missions/mission_haussmann_p2_3_docs_freshness.md` (deploy record),
`how/campaigns/campaign_haussmann/missions/mission_haussmann_p2_4_registry_redesign.md`,
`how/campaigns/campaign_haussmann/artifacts/p2_4/**` (new), `site/scripts/deploy_log.txt` (appended
by the deploy script), `STATE.md`, this session file.

**Will NOT modify** — `site/src/data/vaults.json` and `subnetworks.json` (pt19 absolute; registry
data regen is Hestia-owned + operator-gated). No `sync:vaults` run. No P2.5/P2.6 work.

**Conflict scan** — `how/sessions/active/` empty at open (`.gitkeep` only). `git fetch` at
pre-flight: 0 behind / 9 ahead of `origin/main`; no concurrent lane.

## Pre-flight (Stage 1) — recorded before the deploy

| Check | Result |
|---|---|
| `git fetch` → ahead/behind | **0 behind / 9 ahead** — no concurrent lane |
| `deploy_log.txt` local vs `origin/main` | Only delta is **our own** unpushed P2.2 record (`tree=301daef`); remote's last is `b9d510a` |
| Last prod deploy of record | `2026-08-19T04:24:08Z mode=prod tree=301daef` — as expected, no foreign deploy |

### Production before-state (captured before deploying, so the change is provable)

| Surface | Before |
|---|---|
| `/reference/specification/` | 200 — **163,169 bytes as one page** |
| `/reference/specification/full/` | **404** |
| `/reference/specification/1-purpose-and-scope/` | **404** |
| `/changelog/` | 200 — 2 `<article>` |
| `/rss.xml` | 200 — **1 `<item>`** |
| `last updated` on `/learn/what-is-adna/`, `/reference/specification/`, `/glossary/glossary-adna/` | **0 / 0 / 0** |
| edit-link on the same three | **0 / 0 / 0** |
| `/install.html` | 200 (the 08-16 collision class — must stay 200) |
| `/provenance-audit/` | 200 (P2.2's move — must stay 200) |

## Stage 1 — P2.3 SHIPPED

**Deploy** (sanctioned path, `./scripts/deploy_adna.sh prod`):

```
deploy_record: 2026-08-19T17:19:00Z mode=prod
  url=https://adna-docs-n605jxweo-science-stanleys-projects.vercel.app
  token=SS_VERCEL_TOKEN tree=97561c0
```

216 pages built (was 195 at P2.2 — the 20 spec sections + hub) · 6,141 dev comments stripped from
216 files · headers injected and verified live **4/4, no drift** · **42 of 42** redirect routes
widened to both slash forms · 5 installer routes injected (idempotent re-run confirmed).

**Live probe** — `artifacts/p2_3/deploy_probe_p2_3.mjs`, **124 assertions / 0 failures**. Written in
the campaign dir, not a scratchpad: P2.2's crawl instrument evaporated from a session scratchpad and
an inventory four missions cite could not be regenerated.

| Claim | Before | After |
|---|---|---|
| `/reference/specification/` | 200, **163,169 bytes** as one page | 200, contents hub |
| `/reference/specification/full/` | **404** | 200, full text intact |
| 20 numbered section URLs | **404** each | **20/20 → 200**, prev/next present |
| `/changelog/` | 2 entries | **≥4 entries** |
| `/rss.xml` | **1 item** | **≥4 items**, well-formed XML |
| sitewide last-updated coverage | 0 sampled | **114 pages** (claim was 113) |
| 42 redirects × both slash forms | — | **84/84 3xx** — P2.2's guarantee survived |
| `/install.html`, `/provenance-audit/`, `/` | 200 | 200 (no regression) |
| security headers | — | **4/4** |

### ⚠ Two instrument defects, both mine, both caught before they were believed

1. **The probe reported 58 redirect failures that were not real.** The adapter config's `src` is a
   **regex** (`^/vaults/aDNA\.aDNA/?$`); stripping the anchors is not enough, because the
   backslashes are regex escapes. The probe fetched the literal string `/vaults/aDNA\.aDNA`, got a
   404, and blamed the site. Fixed by unescaping; 58 bogus failures → 0. *An instrument that
   reports the system as broken is exactly as suspect as one that reports it healthy.*
2. **The probe asserted a contract nobody wrote.** It demanded that *every* sampled page carry a
   date and reported 8/12 as a failure. P2.3's contract is **113 content pages**, and the freshness
   layer is an *optional* additive Props field — index/hub pages deliberately opt out, because a
   "last updated" on a generated listing changes whenever any child does. Corrected to assert the
   real contract (a sitewide count) — which passes at 114.

**Empty-derivation guard red-proven**: run against an empty `dist/`, the probe **throws and refuses
to run** rather than iterating nothing and printing green. This is the specific failure P2.1's probe
shipped (a green "64 PASS, 0 FAIL" while testing nothing in its canonical third).

### 🔎 FINDING — four substantive prose pages carry no freshness signal

Surfaced by defect 2 above, and real once the spurious part was removed. These are **not** listings:

| Page | Words | Has date |
|---|---|---|
| `/learn/what-is-adna/` | 1,446 | no |
| `/provenance-audit/` | 1,282 | no |
| `/get-started/` | 707 | no |
| `/community/` | 648 | no |

`/provenance-audit/` is the sharp one: it is the page that tells a reader **how to check this
site's claims**, and it carries no date of its own. Cause is structural, not an oversight in any one
file — these are hand-authored `.astro` pages under `src/pages/`, and the freshness layer is opt-in
via `source?:` on `DocumentationLayout`, so a page that never passes the prop renders nothing.
**Recorded as a P2.3 follow-up, not fixed here** — expanding a deploy-verification stage into a
content fix is how scope creeps past a gate.

## Activity Log

- **10:18** — Session opened. Pre-flight clean (table above). Production before-state captured.
- **10:19** — Deployed `tree=97561c0` to prod. 4/4 headers verified live at the deploy.
- **10:2x** — Probe authored, two self-inflicted instrument defects found and fixed, guard
  red-proven. **124/0**. Prose-gap finding recorded.

## Stage 2 — three owed replies + a manifest pass that grew

**Pandora reported one stale row. All ten were stale.** Re-read every cohort vault's HEAD from disk
before editing hers `[D]` — the roster had been describing the cohort as seeded on 2026-06-22.
Three graphs are no longer stubs in any sense: **Inference 165 files, Container 139, Forgejo 116**.
Fixing only the row someone complained about would have left eight known-wrong rows in a file whose
own first line calls it *"the authoritative register."*

Structural fix: **`Fork method` is a historical fact that does not age** — a graph forked from the
lean stub was still forked from it at 139 files. The column that lied was the file count, from which
the reader was being asked to infer state. **`State` is now its own column.**

**⛩ DP-16 authored, NOT ratified.** An OpenWebUI instance has persisted prompt/response payloads on
this node since 2026-04-10, inside a graph the manifest classes control-plane. Recommendation is
Pythia's **shape A** — narrow ADR-000 §3 to the serving lanes — **with one condition taken from her
own evidence**: the human surface must become a *declared* §8 row, not a footnote. That instance
survived four months unregistered precisely because the graph's label said there was nothing to
register; adopting A without the declared row leaves that condition in place, now deliberately. The
classification is **unchanged** pending signature — the split line carries an asterisk, not an edit.

**Three replies staged** (delivery is a separate outward act, not yet GO'd):

| To | Substance |
|---|---|
| **Venus** | `adna.network.invite/v1` — **no standard-side objection, the gate may close.** One real defect: the code alphabet excludes `L` and **three strings say it does not**, including the refusal message a phone-relaying human actually hits. Declined a vault entity type for the invite (it would create a place to persist what the spec exists not to persist). Taking the code-is-not-the-object pattern upstream as a candidate awaiting a second instance. Flagged an inline CA fingerprint that will age. |
| **Pythia** | The DP-16 recommendation, plus this vault's symmetric failure: ~15 inbound memos sat **untracked in git** — delivered but never arriving. |
| **Pandora** | Row 6 refreshed, with the roster-wide finding her memo surfaced. |

**Claim register R-108 — discrepancy CLOSED, verified rather than taken on report.** ScienceStanley
said they flipped the title; re-probed from here: `stanley.science/projects/rttp-stanford` serves
"Head of AI" ×1, and **"Lead AI Architect" returns 0 across four URLs** `[D]`. S4 cleared, the P2.6
re-check discharged early.

**Correction appended to the delivered 08-18 memo**: it cited ScienceStanley's CI-08-5 as open; it
closed 2026-06-22 under D4. We read a peer vault's item at the version *we* held. Body left as sent
— a delivered memo is a record, not a draft. Their reply also recorded that our "one-line copy-edit"
ask was in fact a request to break a five-times-restated governance hold; that belongs on our record
too, because **we did not know we were asking for it.**

## Stage 3 — P2.4 O0 + O1 (⛩ halted at the pick)

**O0 — ADR-052 §tiers complete at `proposed`.** Measured the registry before designing against it,
and two of the genesis decision space's four items did not survive:

- **`card_present` disqualified as a tier input.** All 7 `active` vaults have a card → the sketched
  split yields an empty bucket; it discriminates inside `genesis` (7/49). It measures documentation,
  not lifecycle. Tiering on it gives a badge that **claims maturity and measures paperwork** — the
  narrated-vs-derived error inverted, and harder to catch, because the number really is derived.
- **Every status is self-declared and nothing corroborates it** (`github_url` 1/74,
  `docs_site_url` 0/74, `last_synced` 24/74 with 18 frozen at one date). Vocabulary therefore
  describes **declared stage**: **in use 7 · chartered 10 · planned 57**. No `flagship`, no `mature`.
- **Dual clock recorded NOT DERIVABLE**, not faked from `last_synced` — rendering that as a clock
  says 18 vaults changed on one day, a true fact about a bulk sync sold as a false one about vaults.
- **77-vs-74 stated, not decided**; memo to Hestia staged with a sharpened ask (**a timestamp beats
  a tagline** — a tagline makes a card readable, a timestamp makes it checkable).

**O1 — three variants, headless-verified 23/0, and a finding that changes the question.**

| Variant | 74 rows | 740 rows |
|---|---|---|
| A tier-first | 2,279 px | **18,896 px** |
| B class-first | 3,697 px | **19,327 px** |
| C density | 2,172 px | **17,974 px** |

**None of them scales.** C was designed to be the one that does and beats A by **5%** — noise, not
architecture. At 10× the planned tier holds ~570 rows; 570 dense rows at ~30 px is ~17,000 px by
itself. **Density cuts cost per row and does nothing about row count.** The `scales at 10×`
criterion is recorded **UNMET**, and choosing between A/B/C cannot meet it — so **the pick is two
decisions, not one**. Deferring the second is legitimate: at 74 all three are normal pages.

Pre-screen is `[D-syn]`, conflict declared — the builder scored its own comps. No variant clears
4.0; **A and C tie**, as P2.1's comps did, for the same reason (near-mirrors).

## SITREP

**Completed**

- **P2.3 SHIPPED** — `tree=97561c0` live on adna.network, **probe 124 assertions / 0 failures**,
  before-state captured first. Spec is 20 section pages + a hub + full text where all 21 URLs were
  404; RSS 1 → ≥4 items; 114 pages carry a date. **Pushed `301daef..ef5a5dd`**, gitleaks clean.
- **Cohort manifest** — all 10 rows re-verified and refreshed; `State` column added; **⛩ DP-16
  authored, awaiting ratification**.
- **Three peer replies staged** + claim-register R-108 closed + a correction appended to a delivered
  memo.
- **P2.4 O0 + O1** — ADR-052 §tiers complete; spike built, verified, measured.

**In progress** — P2.4 (O2–O3 pending the ruling).

**⛩ Awaiting the operator** — (1) **P2.4 grouping pick A/B/C**; (2) **the 740 mechanism, or an
explicit defer**; (3) **DP-16** shape A-conditioned / B / C; (4) **delivery GO for four staged
memos** (Venus, Pythia, Pandora, Hestia); (5) **77-vs-74 admission ruling** (with Hestia).

**Blockers** — none. Nothing is blocked on the ⛩ items; work simply halts there by design (SO-1).

**Findings carried out of this session**

1. **Four substantive prose pages carry no freshness signal** — `/learn/what-is-adna/` (1,446w),
   **`/provenance-audit/` (1,282w)**, `/get-started/`, `/community/`. Structural: they are
   hand-authored `.astro` pages and the freshness layer is opt-in via `source?:`. The sharp one is
   `/provenance-audit/` — the page that tells readers how to check this site's claims, carrying no
   date of its own. **P2.3 follow-up.**
2. **`src/content/docs/` has drifted from `transform-content.mjs`** (carried from last session) —
   it is no longer authoritative for hand-edited projections. Still needs its own ruling.
3. Venus's `L`-exclusion defect (staged to her).

**Token budget actual** — ~340 kT against ~300–420 kT estimated.

## Next Session Prompt

> You are **Rosetta** in `~/aDNA/aDNA.aDNA`. **P2.3 is shipped and live** (`tree=97561c0`, probe
> 124/0); HEAD is pushed through `ef5a5dd` plus three later commits — check `git log origin/main..HEAD`.
> **Mission P2.4 is `in_progress`, halted at its ⛩ operator pick** after O0 and O1.
>
> Read `how/campaigns/campaign_haussmann/artifacts/p2_4/spike_record.md` first — it holds the pick
> and the finding that reshapes it: **none of the three variants solves 10×** (all ~19,000 px at 740;
> C, the density variant, beats A by 5%), so the operator owes **two** rulings — the grouping
> (A tier-first / B class-first / C density) **and** the 740 mechanism (pagination /
> default-collapsed planned tier / virtualization / explicit defer). Deferring is legitimate; at 74
> rows every variant is a normal page.
>
> On the ruling, run **O2** (build the chosen variant: facets, sort, tier badges, card floor, and
> the "74" framing reconciled to the tiered truth) and **O3** (snapshot-derived fixtures per KW-8,
> T0 captures, claim-register rows, the owed-back pattern note to Vitruvius, AAR). **P2.4 also owns
> the 13 mixed-case vault links** — `commons.astro:196` renders `/vaults/${row.slug}/` from
> `subnetworks.json`'s raw values, bypassing the P2.1 accessor, and gate-30 has a `subnetworks.json`
> blind spot. Fix at the read boundary. **`subnetworks.yaml` is the source; the JSON is projected.**
>
> **Also owed and unanswered**: four memos are **staged, not delivered** (Venus, Pythia, Pandora,
> Hestia) — delivery needs a per-send GO. **⛩ DP-16** awaits ratification in
> `keystone_cohort_manifest.md` §DP-16 (recommendation: shape A, conditioned on the human surface
> becoming a declared §8 row). **77-vs-74** is a DP4-class admission ruling with Hestia — **never run
> `sync:vaults`** (pt19, absolute).
>
> Standing gotchas that cost real time this session: **verification instruments are as likely to be
> wrong as the thing they verify** — the deploy probe reported 58 failures that were its own regex
> bug, then asserted a contract nobody wrote. **`node --check` for ESM syntax; `node -e "import()"`
> executes the module.** Bare `import 'playwright'` fails outside `site/` — resolve the path
> explicitly. **Fetch and diff `deploy_log.txt` before any prod deploy.**
