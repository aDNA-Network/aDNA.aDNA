---
type: session
session_id: session_stanley_20260820_144905_haussmann_p3_5
created: 2026-08-20
updated: 2026-08-20
status: active
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p3_5_proposal_process
executor_tier: fable
token_budget_estimated: "~230–330 kT across 1–2 sessions (ratified ⛩ DP6 2026-08-19) — ADR-055 constitution + the site surface (constitution page · numbered archive · JSON index) + proposal #1 authored and filed through the process, PLUS the absorbed D9 funnel repair (R-122 CTA-target + R-123 MIT licence)"
token_budget_actual:
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

## Files touched

*(appended as work lands)*

- `how/sessions/active/session_stanley_20260820_144905_haussmann_p3_5.md` — created

## SITREP

*(at close)*
