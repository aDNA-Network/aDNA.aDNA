---
type: session
session_id: session_stanley_20260820_144905_haussmann_p3_5
created: 2026-08-20
updated: 2026-08-20
status: completed
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p3_5_proposal_process
executor_tier: fable
token_budget_estimated: "~230–330 kT across 1–2 sessions (ratified ⛩ DP6 2026-08-19) — ADR-055 constitution + the site surface (constitution page · numbered archive · JSON index) + proposal #1 authored and filed through the process, PLUS the absorbed D9 funnel repair (R-122 CTA-target + R-123 MIT licence)"
token_budget_actual: "≈245 kT by content load — inside the ratified range, near its low end"
tags: [session, haussmann, p3_5, proposals, governance, d8, d9]
---

# Session — HAUSSMANN P3.5: the numbered proposal process + the D9 funnel repair

Opened on *"Please read the CLAUDE.md and let's continue the campaign."* The ruled next mission in the
Decade-2 order is **P3.5**, not P3.1 — phase order stopped being claim order at ⛩ DP6.

## ⛩ Operator rulings (in-chat, session open)

| # | Question | Ruling |
|---|---|---|
| 1 | Session target — P3.5 as ruled, or take P2.6's ⛩ O0b TTFS run while the operator is present? | **P3.5 as ruled.** O0b stays open; P2.6 stays `in_progress` |
| 2 | R-122 repair direction, given the live re-probe below | **Fix the advertised door** — surface CONTRIBUTING + add the CoC in the image repo; the CTA stays where it points |

## Recon-at-execution (convention 12) — and it changed the mission

`grounded_in` evidence is re-verified on disk/live at execution. Doing so **narrowed R-122**, the same way
the identical discipline narrowed R-111 at P4.5a. Probed live 2026-08-20 `[D, GitHub raw + API]`:

| Repo | CONTRIBUTING | CoC | LICENSE | Issue templates |
|---|---|---|---|---|
| `aDNA-Network/aDNA` — the image, and the CTA target | **`.adna/CONTRIBUTING.md` 200** — present, buried | **404** — truly absent | 200 (MIT) | ✅ `bug_report` · `change_proposal` · `config` |
| `aDNA-Network/aDNA.aDNA` — the docs repo, "Edit this page" target | 200 | 200 | **404** — truly absent | ✅ the same three |

R-122 reads *"`CONTRIBUTING.md` 404 **and** `CODE_OF_CONDUCT.md` 404"*. **Half of that is wrong**:
CONTRIBUTING exists in the image repo at `.adna/CONTRIBUTING.md`, one directory below where GitHub's
contributor UI looks (root · `.github/` · `docs/` only). So the finding is not *"the docs are behind the
wrong door"* — it is *"one file is behind the wrong door and one is genuinely missing."* R-122 gets
**narrowed in the register with the correction shown** (the §9.7 pattern), not quietly re-scoped.
**R-123 stands exactly as written.** Neither repo lacks issue templates — that was never claimed, and is
recorded here so nobody re-derives it.

## Constraints carried into the design

1. **ADR-049 caps the primary nav at 7 items with no load-bearing overflow — and it is at 7**
   (`gate-13`, `NAV_MAX_ITEMS`). A top-level `/proposals/` would need an ADR-049 amendment, so the
   surface is designed to **`/community/proposals/`**: the public process is the community-facing
   sibling of the internal ADR system, so the placement is the honest one, not a workaround.
2. **Workspace Standing Rule 1 — never modify `.adna/`.** A *new root* `CONTRIBUTING.md` in the image
   repo sits outside `.adna/` and is therefore not a standard-release act; the `.adna/` original is not
   moved or edited.
3. **Outward acts are operator-gated** (Git-Ops §3, and ⊳ D-D's own stated condition).
4. **⊳ D-D licences inbound contributions going forward only** — copy must not imply otherwise.
5. **Same-diff gate law (ADR-057)** + P4.5a's mirror: before deleting a failing assertion, check what
   else that gate was holding up.
6. **Counsel embargo** — proposal #1 must not be protocol material.

## Objectives

| # | Objective | Status |
|---|---|---|
| O0 | ADR-055 constitution design → ⛩ **halt for ratification** | in_progress |
| O1 | Build: constitution page + numbered archive + JSON index + filing route | pending |
| O2 | Proposal #1 authored + filed through the process → ⛩ operator co-signs | pending |
| O3 | D9 funnel repair (R-122 · R-123) + register + gate-37 + captures + AAR | pending |

## ⛩ Operator gates fired this session

| Gate | Ruling |
|---|---|
| **ADR-055 ratification** (O0) | **Accepted as written** — AEP-1 is the process itself; placement `/community/proposals/`; the URL-casing law as the first substantive proposal. ⊳ **D-J** ruled in the same signature |
| **AEP-2 sponsorship** (O2) | **Sponsored** — operator becomes sponsor; `draft → review` |
| **Outward acts** (O3) | **All three** — image-repo push, origin push, prod deploy |
| **R-128** | **Leave both, decide later** — the copyright holder stays `#needs-human` |

## SITREP

**Completed.** P3.5, all four acceptance criteria. ADR-055 authored and ⛩ ratified. The AEP surface
built and live: constitution + numbered archive + per-proposal pages + `/community/proposals.json`.
AEP-1 (`final`) and AEP-2 (`review`) both traversing real, dated state histories. The D9 funnel
repaired on both sides of the door — R-122, R-123 and R-127 closed by two GO'd outward pushes and
verified against the public internet, not the tree. `gate-37` (20 assertions) red-proven. Suite
**495 → 521**, zero xfail. Axe 0 across 4 surfaces × 6 viewports × 2 themes.

**Deploys (campaign law).** Two, both prod:
`2026-08-20T22:48:11Z tree=16e2c34` → `https://adna-docs-sw820g8xo-science-stanleys-projects.vercel.app` ·
`2026-08-20T22:53:26Z tree=986ac46` → `https://adna-docs-jrc0ed6wo-science-stanleys-projects.vercel.app`.
The second exists because the changelog entry was written *after* the first — a changelog documenting a
shipment it was not part of is the label-vs-truth defect this campaign exists to end, so it shipped
rather than waiting.

**Pushes.** Image repo `b64b81e..8354bce` · origin `2f3bf5d..986ac46`. Gitleaks clean on outgoing
changes both times.

**In progress.** None from this mission.

**Next up.** **P3.1** (`mission_haussmann_p3_1_md_twins.md`) — the ruled order is
`… → P3.1 → P3.2 → P3.3 → P3.4 → P4.1 → P4.2 → P4.4 → P4.3 → P4.5b → P5.1 → P5.2`.

**Blockers.** None here. Campaign-level, unchanged: **⛩ O0b** (the operator-gated TTFS run on a fresh
macOS account with an unassisted non-builder runner) still holds P2.6 `in_progress`, D3 unscored, and
the 12-dimension composite unavailable. **P0.4** still awaits Aspasia's ack.

**Routed follow-ups.** R-128 `#needs-human` (the `LICENSE` names *"Lat Labs"*) · the gate suite's
blindness to axe best-practice rules → **P4.4** · the `webforge_pattern_register.md:23` gitleaks false
positive (*"DTCG token pipeline"*) → **P4.4** allowlist · wiring `derive_register_counts.py` into the
suite → **P4.4**.

## Files touched

**Created** — `what/decisions/adr_055_proposal_process.md` (completed from stub) ·
`site/src/utils/proposals.ts` · `site/src/content/proposals/aep-000{1,2}-*.md` ·
`site/src/pages/community/proposals/{index,[...slug]}.astro` ·
`site/src/pages/community/proposals.json.ts` · `site/tests/gates/gate-37-proposal-process.spec.ts` ·
`LICENSE` · `artifacts/p3_5/{deploy_probe_p3_5.mjs,derive_register_counts.py,image_repo/*,probe_*.txt}` ·
`evidence/captures_p3_5/` (48 PNGs + 2 axe reports) · this session file.

**Modified** — `site/src/content.config.ts` · `site/src/pages/community/index.astro` ·
`site/src/components/common/Footer.astro` · `site/src/data/community.json` ·
`site/src/content/changelog/2026-08-20.md` · `site/tests/gates/gate-4-a11y.spec.ts` ·
`evidence/claims/claim_register.md` · `missions/mission_haussmann_p3_5_proposal_process.md` ·
`missions/session_prompts_haussmann.md` · `campaign_haussmann.md` · `STATE.md` ·
`site/scripts/deploy_log.txt`.

**Outside this vault** — `aDNA-Network/aDNA`: `CODE_OF_CONDUCT.md` + `CONTRIBUTING.md` (new, root).

## Next Session Prompt

You are Rosetta in `~/aDNA/aDNA.aDNA`. HAUSSMANN Decade 2 continues: **P4.5a and P3.5 are complete;
the next mission is P3.1**, not P3.2 — phase order stopped being claim order at ⛩ DP6, and the ruled
sequence is `P3.1 → P3.2 → P3.3 → P3.4 → P4.1 → P4.2 → P4.4 → P4.3 → P4.5b → P5.1 → P5.2`. Execute
`how/campaigns/campaign_haussmann/missions/mission_haussmann_p3_1_md_twins.md` — read it cold with the
campaign `CLAUDE.md`, and **re-verify its `grounded_in` evidence on disk before designing anything**:
that discipline has now shrunk an inherited claim-register row in two consecutive missions (R-111 at
P4.5a, R-122 at P3.5). Twins must derive from the same single-source content as the HTML, and the old
`.md` link targets need repointing at the new twins. Note that P3.1 feeds **P3.3** (the MCP server),
which also needs P3.2. Standing constraints: the same-diff gate law (ADR-057) with its P4.5a corollary
— before deleting a failing assertion, check what else that gate was holding up; `npx astro build`,
never `npm run build`; run `node scripts/inject_redirects.mjs .` before running the suite outside a
deploy; `GATE_PORT=4399`; honor pt19. The suite stands at **521, zero xfail**; axe 0 is
campaign-protected, and **gate-4 only covers `wcag2a/wcag2aa`** — the T0 sweep
(`scripts/visual_capture.mjs --axe`) is what catches best-practice violations, so run it on any new
route. Open campaign items you are not expected to close: **⛩ O0b** (operator-gated TTFS run, holds
P2.6 and the 12-dimension composite), **P0.4** (Aspasia's ack), and register rows R-34, R-63, R-111,
R-124, R-128.

---

## Errata (added at the wind-down, 2026-08-20) — the gitleaks confirmations were weaker than stated

The SITREP above reads: *"Gitleaks clean on outgoing changes both times."* **That overstates what the
hook proved.**

An unread inbound memo — `who/coordination/coord_2026_08_19_inbound_from_hopper_gitadna_release_batch_ninth_fix_skeleton_v2.md`,
delivered 2026-08-19 and intaken only at the wind-down — reports finding **F-S158-01**: the **v1**
`pre-push.gitleaks.sh` skeleton is a **proven no-op at push time**, because it invokes gitleaks with
`--pre-commit`, which scans the *staged* diff — empty during a push. It prints its success line
regardless.

**This vault runs v1** `[D]`: `.git/hooks/pre-push → how/federation/git/hooks/pre-push.gitleaks.sh`,
md5 **`216aaca254b97d69819562d506afca29`** — exactly the hash Hopper names as the no-op, against
`a1288f7371afa187cb1cfd8b9810a669` for the fail-closed v2.

**What was actually true.** The P3.5 origin push *was* scanned — by a **manual full-history
`gitleaks detect`** run before pushing, whose single finding was reviewed and classified as the
`webforge_pattern_register.md:23` *"DTCG token pipeline"* false positive. That scan is the evidence.
**The hook's checkmark was not**, and the SITREP presented the two as one thing.

Corrected claim: *the push was scanned manually and was clean; the pre-push hook's confirmation carried
no information.* The image-repo push was likewise preceded by a manual `gitleaks detect` on the clone.

**Routed, not fixed here.** Installing skeleton v2 is the **ninth item** in the pending `.adna/` release
batch and fires on the next `skill_template_release` — it is Git.aDNA's lane and a release act, not a
HAUSSMANN one. Until it lands, **treat the hook as decoration and run `gitleaks detect` by hand before
any push that matters.** *(The three sibling vaults pushed at the wind-down print a different line —
"clean across 1 outgoing range(s)" — from a hook at md5 `f255e2a0221794a29b5e24a65fc52622`, which is
neither version Hopper names; unclassified, and not relied on here.)*
