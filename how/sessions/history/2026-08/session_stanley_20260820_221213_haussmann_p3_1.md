---
type: session
session_id: session_stanley_20260820_221213_haussmann_p3_1
created: 2026-08-20
updated: 2026-08-20
status: completed
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p3_1_md_twins
executor_tier: opus
token_budget_estimated: "~190–270 kT — RE-DECLARED at O0 this session, up from the ⛩ DP6 figure of ~140–200 kT. Cause: the DP6 range was costed on the acceptance criterion's stated method ('twin generation from the content collections'), which cannot satisfy the same criterion's stated test (machine-eye item 3). Full three-tier coverage — collections + registry + bespoke — was ruled by the operator at session open. ADR-016 / SO#11 variance reported in the AAR."
token_budget_actual: "≈250 kT by content load — inside the re-declared ~190–270 kT range"
tags: [session, haussmann, p3_1, md_twins, llms, negotiation, d10, agentic]
---

# Session — HAUSSMANN P3.1: markdown twins, content negotiation, and a corpus that earns its name

Opened on *"Please read the CLAUDE.md and let's continue the campaign."* The ruled next mission in the
Decade-2 order is **P3.1** — P4.5a and P3.5 both closed 2026-08-20.

**`executor_tier` deviation, recorded not hidden:** the mission declares `sonnet`; this session runs
`opus`. The declared tier was set at genesis for what looked like mechanical emitter work. The O0 finding
below is spec-reconciliation, which is judgment-heavy — the class the doctrine routes to `opus`
(`pattern_model_tiered_campaign_execution`). Noted here so the AAR reports the tier that actually ran.

## Cold-start checks (Agent Protocol)

| Check | Result |
|---|---|
| `how/sessions/active/` | empty but for `.gitkeep` — no peer session, no co-write risk |
| `who/coordination/` untracked sweep | **clean** — `git ls-files --others --exclude-standard who/coordination/` returns zero. The two memos that sat unread since 08-19 were drained at the 08-20 wind-down |
| `git log` | HEAD `8beca80`; working tree carries only `.obsidian/*` + `.astro/` noise, no source drift |
| Campaign activation | charter §7.7 ratified; ⛩ DP6 signed 2026-08-19 — Decade 2 open |
| `depends_on: p2_6_midscore` | **discharged by the DP6 signature**, not by P2.6 completing (campaign `CLAUDE.md` convention 11 sub-clause). Does not block |

## ⛩ Operator rulings (in-chat, session open)

| # | Question | Ruling |
|---|---|---|
| 1 | Twin coverage, given that all 10 machine-eye item-3 probes target bespoke pages | **Full coverage** — Tier A collections + Tier B registry + Tier C bespoke (~229 twins). Item 3 passes; the AC is met as written |
| 2 | How to handle the ⛩ DP6 budget, costed on the collections-only method | **Re-declare in-file at O0 and continue** — no new gate, variance and cause reported in the AAR (ADR-016 / SO#11) |

## Recon-at-execution (convention 12) — and it reshaped the mission

`grounded_in` evidence is re-verified on disk/live at execution time. Three things moved.

### 1. The acceptance criterion's method cannot satisfy its own test `[D]`

AC 4 requires machine-eye **item 3** (`.md` twins, 10/10 404) to re-run PASS. AC 1 names the method:
build-time twin generation **"from the content collections"**. Every one of item 3's six probe targets
was checked on disk this session — all six are bespoke `.astro` pages with **no markdown source**:

| Probe target | Source | Collection-backed? |
|---|---|---|
| `/learn/what-is-adna` | `src/pages/learn/what-is-adna.astro` | no |
| `/reference/specification` | `src/pages/reference/specification/index.astro` | no |
| `/get-started` | `src/pages/get-started.astro` | no |
| `/vaults` | `src/pages/vaults/index.astro` | no |
| `/network` | `src/pages/network.astro` | no |
| `/glossary` | `src/pages/glossary/index.astro` | no |

The P2.6 delta's three probes (`/get-started.md`, `/about.md`, `/learn/what-is-adna.md`) are the same
class. Executed as written, the mission would emit 120 collection twins, report done, and leave **10/10
item-3 probes still 404**.

This is P4.5a's finding recurring: *a ratified budget attached to a spec whose halves nobody had
reconciled.* At P4.5a the split lived only in frontmatter comment strings while the mission body stayed
P4.5b content; here the method clause and the test clause sit four lines apart in the same frontmatter
block and disagree. **Two missions in a row, the same defect class** — which makes it a pattern worth
naming in the AAR rather than a one-off.

### 2. The `.md`-link repair is already discharged, and the mission body still asks for it `[D]`

O1 carries *"fix the old .md link targets to the new twins."* The `status:` note dropped that half at
DP6 as already done by P2.1/P2.2, uncredited — but the **body was never updated to match**, the same
index-vs-artifact split as finding 1. Re-probed this session:

```
grep -rEoh "\]\([^)]*\.md[^)]*\)" src/content/ src/components/ src/pages/
  2  ](https://obsidian.md)                                          ← a domain, not a link target
  2  ](…/aDNA/blob/main/.adna/what/docs/projects_folder_pattern.md)   ← external GitHub blob
  2  ](…/aDNA/blob/main/.adna/what/docs/adna_bridge_patterns.md)      ← external GitHub blob
  1  ](…/aDNA/blob/main/.adna/how/skills/AGENTS.md)                   ← external GitHub blob
```

**Zero internal `.md` links remain.** The clause is a no-op and is marked discharged at O0, not silently
skipped. Note the near-miss this rules out: the five `/reference/*.md` → `/reference/specification/`
redirects in `astro.config.mjs` use underscore slugs (`adna_standard.md`), while twins will use hyphen
slugs (`specification.md`) — no collision, checked rather than assumed.

### 3. A convention-4-shaped clause that IS followable, unlike convention 4 `[D]`

The WebForge pattern register's **P12** flags this site's `llms.txt` as missing the FR-N/N2
**build-time-snapshot honesty line**. Convention 4 warns that its own `lighthouse_profiles.json` clause
is unfollowable — 0 hits vault-wide. That warning does **not** generalize: `emit_llms.mjs` is readable at
`WebForge.aDNA/what/lib/gates/emit_llms.mjs`, and the line it emits is

> `State is a build-time snapshot generated ${day}; nothing here is live.`

So the P12 reconciliation is followable today and is adopted at O1 — into `llms.txt`, `llms-full.txt`,
and every twin's pointer block. Checked rather than inherited: an unfollowable clause next door is not
evidence that this one is unfollowable.

## Also found — the mission index is stale for the third time

Campaign `CLAUDE.md` lines 63–67 still read *"**`P4.5a` is the next mission**, not `P3.1`"* — true when
written 2026-08-19, false since both P4.5a and P3.5 closed on 08-20. §1.8's own finding (an index
believed over the artifact it points at) recurring a **third** time in this campaign. Corrected at O0
with the recurrence noted, not silently patched.

## Progress — all objectives complete

- [x] Cold-start checks; session file
- [x] **O0** — corrected spec in-file; budget re-declared; `artifacts/p3_1/twin_derivation.md`
- [x] **O1** — 221 twins across 3 tiers; manifest; pointer blocks; footer + `rel=alternate` + robots
- [x] **O2** — 442 negotiation routes; corpus 2,476 B → 940,718 B
- [x] **O3** — G12–G15 red-proven; delta packet; ADR-056 clauses 1/2/7; Vitruvius memo; AAR

## Deploys (campaign law — record every one)

| Time (UTC) | Mode | Tree | Note |
|---|---|---|---|
| 2026-08-21T06:00:14Z | preview | `2cbbc50` | **Unusable** — Deployment Protection 302s to `vercel.com/sso-api` before any route in `config.json` runs. Preview cannot verify negotiation at all |
| 2026-08-21T06:07:52Z | prod | `dfd161d` | Deploy succeeded; verify step aborted on the gated deployment URL. **deploy_record written by hand** |
| 2026-08-21T19:21:07Z | prod | `f053431` | Clean — naive-append routes added; headers 4/4 **verified against the alias** |

## SITREP

**Completed.** P3.1 in full: 221 markdown twins (114 collections · 75 registry · 32 bespoke), 442
negotiation routes, a 940 KB corpus replacing a 2.4 KB index, and `llms.txt` reachable from the page
for the first time. Machine-eye **2/3/4/12 all PASS live**. Suite **521 → 541 zero xfail**, axe **0**
×2 themes, **13 assertions red-proven by mutation**.

**Two findings that outlive the mission.**

1. *The acceptance criteria contradicted each other* — AC1's method could not satisfy AC4's test.
   P4.5a's finding one mission later, in a new shape. Two consecutive missions, one class.
2. *The deploy chain's live-header verification had never verified anything.* It followed redirects
   onto `vercel.com`'s login page, which sets the same four header names, and reported `OK — no
   drift`. And it was pointed at the per-deployment URL, gated on prod as well as preview. Since
   **P0.2** built it, it has never once verified `adna.network`.

**Blockers.** None. **⚠ For P0.2's owner**: its header evidence was verified by the instrument in
finding 2 and should be re-read against the alias. Flagged, not touched.

**Next up.** **P3.2** (registry JSON + structured data), whose scope already shrank —
`Organization`+`sameAs` shipped unremarked at P1.2, so what remains is `Dataset` on the registry,
the versioned JSON endpoint, schema-dts, and the three zero-JSON-LD pages.

**Routed follow-ups.** → **P4.4**: `check_live_headers.mjs` compares header *names not values*;
`stripHtmlComments()`'s second root is inert. → **Vitruvius**: pattern A1, staged, non-blocking.
→ **Operator, P3 exit**: ADR-056 ratification (clauses 1/2/7 built, status stays `proposed`;
anchor 4 deliberately not claimed — re-score is P5.2's with fresh scorers).

## Inbound during this session — Hopper, `ack_required: true`

`coord_2026_08_20_hopper_to_rosetta_standard_bearer_gate_is_a_noop.md` arrived **after** this
session's opening coordination sweep (which was clean) and was found only because a broad
`git add -A who/` staged it. Read before committing; **not answered here** — its ask is an operator
scheduling decision, not mine to make unilaterally.

**§1 — confirms and quantifies what this session worked around.** Our `.git/hooks/pre-push` is a
symlink through our own wrapper to the retired **v1 no-op** (`216aaca2…`), which scans the *staged*
diff and so examines nothing at push time. This is exactly why `gitleaks detect --source .` was run
by hand at each push point this session. Hopper's census now puts it at **14 vaults**, not one.
Fix is a wrapper repoint, staged as row 5 of their runbook, unfired and gated. Explicitly: **do not
record it installed on the md5** — ADR-011 A2 §4 retires the caveat only on an *induced positive*.

**§2 — the half that is ours alone, and the reason for the ack.** `.adna/` has **no pre-push hook at
all** (`FAIL_NONE`, the worst state) while carrying a live origin. Hopper correctly refuses to touch
it: Standing Rule 1 makes `.adna/` do-not-modify, and a local patch would desync this node from the
standard while breaking the rule in the same stroke. The gate belongs in the **standard tree**, shipped
via `skill_template_release` — which is this vault's instrument, so the question is genuinely ours.
The sharp sentence: *every vault forked from the template inherits whatever the template does about
this*, and the fleet's 14 no-ops and 31 no-gates are what "acquiring it later, per vault, by memo"
looks like after a year.

**§3 — the pending release batch is now 10 fixes**, with a caveat worth carrying: shipping v2 into
the template makes it *available*, not *installed*. Skeleton v2 has **one** live installation
fleet-wide.

**§4 — two ADR-011 A4 clauses may be standard-shaped** rather than Git.aDNA-shaped, and Hopper marks
both as our call: resolution order for locating the hook git actually runs, and *no conformance
instrument is trusted until demonstrated to fail* — which is the same law this session applied 13
times by mutation-testing its own gates before believing them.

**Owed**: an ack on §2 only — whether the template gate is ours to carry, and roughly when. Raised
to the operator at session close; a template release is an operator-gated action.

## Next Session Prompt

> You are Rosetta in ~/aDNA/aDNA.aDNA. HAUSSMANN Decade 2 continues: P4.5a ✅, P3.5 ✅, P3.1 ✅
> (2026-08-21, deployed `tree=f053431`). **Next is P3.2** — execute
> `how/campaigns/campaign_haussmann/missions/mission_haussmann_p3_2_registry_json.md` with the
> campaign `CLAUDE.md`. Read `evidence/machine_eye/machine_eye_delta_p2_6.md` first: **P3.2's scope
> already shrank** — `Organization`+`sameAs` shipped unremarked at P1.2, so what remains is
> `Dataset` on the registry, the versioned JSON endpoint, schema-dts at build, and the three
> zero-JSON-LD pages. Honor pt19 (read `vaults.json`, never regenerate). Do recon-at-execution
> before costing anything: the last two missions each shipped with an internally inconsistent spec,
> so read P3.2's acceptance criteria against each other and check that its stated method can satisfy
> its stated test **before** you build. The versioned-URL contract is ADR-056 clause 3/7 — that ADR
> stays `proposed` until the operator signs at the P3 exit. Twin infrastructure from P3.1 is
> available and gated: `src/utils/twin.ts` is the emission lock, `twin_manifest.json` is the single
> route lock every consumer reads, and gate-17 G12–G15 will hold you to it.

## Files touched

**Created** — `site/src/utils/twin.ts` · `site/src/pages/[...path].md.ts` ·
`site/scripts/emit_bespoke_twins.mjs` · `site/scripts/inject_negotiation.mjs` ·
`site/src/data/twin_manifest.json` · `artifacts/p3_1/twin_derivation.md` ·
`evidence/machine_eye/machine_eye_delta_p3_1.md` ·
`who/coordination/coord_2026_08_20_rosetta_to_vitruvius_a1_md_twins_pattern.md` · this session file

**Modified** — `site/src/pages/llms.txt.ts` · `site/src/pages/llms-full.txt.ts` ·
`site/src/components/common/Footer.astro` · `site/public/robots.txt` · `site/astro.config.mjs` ·
`site/scripts/deploy_adna.sh` · `site/scripts/check_live_headers.mjs` · `site/scripts/deploy_log.txt` ·
`site/src/content/changelog/2026-08-20.md` · `site/tests/gates/gate-17-agentic.spec.ts` ·
`site/tests/gates/gate-27-leak-lint.spec.ts` · `site/tests/gates/gate-30-url-canonical.spec.ts` ·
`what/decisions/adr_056_agentic_surface_contract.md` · the mission file ·
`missions/session_prompts_haussmann.md` · campaign `CLAUDE.md` · `STATE.md`
