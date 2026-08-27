---
type: session
session_id: session_stanley_20260826_214627_haussmann_p4_4b_b0
tier: 1
campaign: campaign_haussmann
mission: mission_haussmann_p4_4_ci_hardening
objective: P4.4b — apply the signature, then B0 (visual-regression lane)
phase: P4
status: active
executor_tier: opus          # ⚠ DECLARED AT THE OPEN, NOT DISCOVERED AT THE AAR. The mission
                             # declares P4.4b as `sonnet`; this session runs **opus**, and the
                             # amendment proposal's §7 named exactly this case in advance: "B0's
                             # mask-and-theme judgement is **not** mechanical work; if it runs
                             # `opus`, the declaration moves **before** the session, not after."
                             # It has. (P4.1 ran four sessions on opus under a `fable` declaration;
                             # a declared tier nobody honours is worse than none.)
created: 2026-08-26
updated: 2026-08-26
last_edited_by: agent_rosetta
token_budget_estimated: "~150–220 kT — B0's band from the ⛩ re-ratified ~280–440 kT / 3 sessions (signed this session, ruling (c)), plus ~15–25 kT for the 1a signature-application act, which is bookkeeping rather than build. ⛔ Named so it is not discovered as an overrun: if baselines need regenerating after a mask or theme correction, that is a re-capture of all 24 images, and it is inside B0's band ONCE, not repeatedly (§7)."
token_budget_actual: ""     # ⛔ FILLED AT CLOSE, NOT LEFT EMPTY (SO#11). Two of three P4.3
                            # sessions closed this blank and the actual had to be reconstructed.
tags: [session, haussmann, p4_4b, b0, visual_regression, signature_applied]
---

# Session — P4.4b: the signature is applied, then B0

## Intent

Two acts, in order. **(1)** Apply the ⛩ operator signature taken at this session's open to
`ac_amendment_proposal_p4_4b.md` and to the mission file — criteria, V-limb labels, the B2 split,
the three stale-line corrections (same-diff, ruling 4), and the re-ratified budget. **(2)** Build
**B0**, the visual-regression lane. **No deploy is in scope** — P4.4b is met on-build.

## ⛩ The gate — signed at this session's open

The pre-build gate opened 2026-08-26 (`22a4fa6`) and halted. Convention 13's pass had run **complete
at 26/26 with coverage recorded**, both directions → **20 clean · 6 defective** + 6 non-pair findings.
`artifacts/p4_4/ac_amendment_proposal_p4_4b.md` was `proposed`, carrying **one question that was the
operator's** (§4). Put to the operator this session; **both answers taken**:

| # | Put | Ruled |
|---|---|---|
| §4 | AC4's criterion says *proceed under the interim clause*; AC4's own amendment row says *do not build B2 before Vitruvius answers*. Both signed, same document, condition live today. | ⛩ **(c) SPLIT** — build **B2a** (sweep, no external dependency), hold **B2b** (budget provenance, ⊳ D-E). |
| — | Rulings 2–5, the §5 criteria changes, the budget re-ratification. | ⛩ **Signed as proposed** — **~250–400 kT / 2 sessions → ~280–440 kT / 3** (B2b excluded under (c)). |

⭐ **Why (c) is the right shape and not a compromise**: B2 fused two **reachability** classes under one
⊳ D-E gate, so the half with no dependency was blocked by the half that has one. P4.4 was split into
P4.4a/P4.4b on exactly this principle — *"the split line is REACHABILITY, not topic"* — and B2 fused
on **topic**. The remedy is this mission's own split, one level down.

## Preconditions re-verified at the object at open `[D]`

| Check | Result |
|---|---|
| Live alias build stamp — **re-read, never quoted forward** | `/.well-known/adna-build.json` → `51af717`, `built_at 2026-08-27T01:31:19Z`, `mode prod` `[D]`. Matches P4.5b's `deploy_record` exactly. |
| Any `site/src/**` drift since the deployed commit? | **No.** `git log 51af717..HEAD --name-only` touches only campaign/session/coordination docs + `site/scripts/deploy_log.txt` `[D]`. |
| Unpushed | **0** `[D]` |
| Conflicting sessions | `how/sessions/active/` **empty** at open `[D]` |
| AC1's container substrate (FINDING 12's control) | ✅ `gates.yml` runs `mcr.microsoft.com/playwright:v1.59.1-noble` `[D]` — B0 adds a **snapshot project**, not a CI substrate. The 08-24 amendment predicted this and the prediction held. |
| AC3's co-run mechanism already in tree | ✅ `gates.yml:32` `concurrency: group: gates-${{ github.ref }}` `[D]` |
| Highest existing gate | `gate-48` (46 specs) `[D]` — B0's spec is **gate-49**. |

## Files touched

*(recorded as the session proceeds)*

## SITREP

*(filled at close)*
