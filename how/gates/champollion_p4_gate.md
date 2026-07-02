---
type: gate
gate_id: champollion_p4_gate
title: "Operation Champollion — P4 exit gate (G4): docs/site/first-contact UX complete + P5 open"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: pending   # operator gate (SO-1) — do NOT auto-advance
outer_tier: copy_paste   # inline-markdown surface per G0–G3 precedent (record homogeneity); ISS web tier available if preferred
persona: rosetta
tags: [gate, champollion, p4, phase_exit, operator_decision, first_contact, site_ux, content_currency, telemetry]
---

# ⛩ G4 — Operation Champollion P4 exit gate (docs, site & first-contact UX)

> **P4 work is complete** — all four missions closed with AARs filed, the whole phase executed as **one Mode-B fable-orchestrator sweep session** (M4.1 → M4.2 → M4.3 → M4.4, resumed once across a context reset). This gate: reviews per-tier telemetry (datapoint #4 — the phase that stress-tested the real first hour and then fixed what it found), rules the housekeeping batch P4 surfaced, and — on ratification — closes P4 and opens P5 (LP seam). **Operator gate (SO-1): answer any subset; unanswered = held.**

```yaml
sitrep:
  campaign: "campaign_champollion · Operation Champollion"
  phase: "P4 — docs, site & first-contact UX (complete; awaiting ratification)"
  mission: "G4 — P4 exit review (M4.1–M4.4) + P5 open + push decision"
  gate_purpose: "Ratify P4 close; push the held 4-commit stack (incl. the staged Grace Hopper memo); accept datapoint #4; rule the housekeeping batch; open P5 (LP seam, M5.1–M5.3)."
  importance: "load-bearing"
  importance_reason: "P4 was the newcomer-facing phase — what shipped here is the first hour every future adopter lives; the push (D2) is the one outward-facing element and is isolated; P5 opens the LP seam work that G5 and the RC depend on"
  output_destination: "how/gates/champollion_p4_gate.output.md (or reply in-chat; Rosetta transcribes)"
```

**Read first**: the four AARs [[../missions/artifacts/campaign_champollion_mission_m4_1_aar|M4.1]] · [[../missions/artifacts/campaign_champollion_mission_m4_2_aar|M4.2]] · [[../missions/artifacts/campaign_champollion_mission_m4_3_aar|M4.3]] · [[../missions/artifacts/campaign_champollion_mission_m4_4_aar|M4.4]] · artifacts [[../campaigns/campaign_champollion/artifacts/newcomer_stress_test|newcomer_stress_test]] · [[../campaigns/campaign_champollion/artifacts/site_ux_review|site_ux_review]] · [[../campaigns/campaign_champollion/artifacts/learning_path_walk|learning_path_walk]] · [[../campaigns/campaign_champollion/artifacts/content_currency_sweep|content_currency_sweep]].

## The review — P4 per-tier estimate-vs-actual (datapoint #4)

**Per mission** (all at planned tier; commits local/unpushed, P4 commit-only; full-phase Mode B — one fable orchestrator session, opus subagent per build, bookends inline):

| Mission | Tier | model_actual | Est | Actual | Δ | Commit |
|---|---|---|---|---|---|---|
| M4.1 newcomer stress-test | opus | opus subagent / fable orch | 45 kT | ~46 kT | **+2%** | `39c7c4d` |
| M4.2 site UX pass (+ seed riders) | opus | opus subagent / fable orch | 58 kT | ~50 kT | **−14%** | `9c4dae3` |
| M4.3 first-contact + learning path | opus | opus subagent / fable orch | 46 kT | ~50 kT | **+9%** | `3a87c7e` |
| M4.4 content currency + product story + hygiene | opus | opus subagent / fable orch | 40 kT | ~57 kT | **+43%** | `4003a1f` |
| **Total** | | | **189 kT** | **~203 kT** | **+7%** | |

### Routing-quality verdict
- **4/4 at planned tier · 0 tier-changing escalations.** Worst row 1.43× — inside the ADR-016 2× band; no retrospective triggered.
- **The bookends-buy-corrections pattern held all phase** (P3's +18% shape): M4.3's +9% was the N-02 retraction cascade; M4.4's +43% bought THREE corrected brief premises (slug collision · 54-not-22 refs · dual-home already landed) + 8 review completions + F-CHM-213. M4.2 ran −14% under. Net +7%.
- **Verification-independence theme matured into two recorded corollaries**: F-CHM-212 (*replication ≠ independence — verifiers must vary the method*) and F-CHM-213 (*a sweep's surface-set must match where the claim/link class actually lives — content collections + nav + data TS*). Both are M7.x retro inputs for the Mode-B pattern.
- **Concurrency event (M4.4, contained)**: one dispatch produced **twin builder instances**; the twin reported, the original kept editing post-report and was **killed at review**; all 3 stray edits reconciled (one ACCEPTED as the better disposition, one merged, one matched). Zero unreviewed edits shipped. Retro input: post-notification **quiescence check** before review-fixes begin.

### P4 substance (what the phase produced)
- **M4.1** — the real first hour, walked honest (live v8.3 image, scratch clone, 6 legs): **0 blockers** · 3 major (F-CHM-210 no learning on-ramp · F-CHM-211 image currency cluster · F-CHM-207 confirmed-worse) · 7 paper-cuts; every row routed (fix-now / brief-rider / fold-stub / decline).
- **M4.2** — the site grew its newcomer on-ramp (landing `.learn-onramp`, F-CHM-210 site-half) + `/rss.xml` + feed discovery; 6 Ring-1 dispositions; **2 seed skills authored** (G3 D2c riders; skills census 48→50, zero governance drift).
- **M4.3** — all **13 teaching surfaces walked, 0 left failing** (11 in-place fixes); README → first-contact pattern; **F-CHM-207 FIXED properly** (canonical clone-and-run flow + a NAMED silent-301 warning + scratch re-walk); first tutorial designated (`tutorial_navigate_a_vault`); the N-02 retraction → F-CHM-212 + the semantic-census corollary.
- **M4.4** — the site was **two versions stale** (site v2.3 ⟵ vault v2.4 ⟵ live v2.5; the marquee finding: *currency decays per mirror hop*) → 19 cites + 7 counts trued; the **13th concept landed** (`dual-audience.mdx`, fixing 10+ pre-existing 404 inbound links; pattern → `dual-audience-writing` + named redirect); **product story PASS with zero edits** (brand-lock clean; Exchange roadmap-honest; zero Lighthouse over-claims; LP cite-at-pin verified); WebForge sweep (3 files/5 occ changed · 23/49 kept historical · `adr_041` dated Naming-note); git dual-home **worktree drift healed** (the `14e3031` symlink had materialized into a copy dir) + memo to Grace Hopper staged; pycache untracked (10→0).
- **Cross-phase**: builds green throughout (179 → **180 pages**, the new concept); `adna_validate` FULL PASS + `--governance` zero drift at every mission close; findings ledger F-CHM-210..213 all filed-and-routed.

## Decisions (answer any subset; unanswered = held; P4 stays complete-but-ungated)

### D1 — Ratify P4 complete + open P5? `GO / HOLD` — **rec: GO**
P4 exit criteria met (stress-test green · site UX done + riders · learning path walks end-to-end · content current vs v2.5 + product story + hygiene batch). GO flips P4 `✅`, opens P5 `◐` (**LP seam & Exchange story**, M5.1–M5.3 — the G3 ring-cut kept them live), and materializes the P5 briefs at judgment tier as the first post-ratification act (Mode B per charter Inviolable §2). P6 remains gated on G4+G5 both.

### D2 — Push the held P4 stack (4 mission commits + this gate's close commit = 5) to public `origin/main`? `PUSH / HOLD` — **rec: PUSH**
Local ahead: `39c7c4d` M4.1 · `9c4dae3` M4.2 · `3a87c7e` M4.3 · `4003a1f` M4.4 · + the G4-render close commit. Contents: site/docs/content currency work, the stress-test/walk/sweep artifacts, 2 seed skills, ledger + AAR records — this public dev graph's normal record, **names-only verified**. The **staged Grace Hopper memo releases with this push** (its `status: staged` names the G4 batch). Executed only after `git fetch` + `ls-remote` truth-check + the gitleaks pre-push hook. **HOLD fully honored** (re-offers at G5).

### D3 — Accept P4 telemetry as Prometheus datapoint #4? `ACCEPT / AMEND` — **rec: ACCEPT**
ACCEPT emits `artifacts/telemetry_corpus_p4.md` (same join keys; second full Mode-B phase; the bookend-allowance calibration from G3-D4 **validated on 3 of 4 rows** — M4.4's +43% was scope discovery, not routing error) + annotates the Prometheus memo + refreshes the Berthier `campaign_index` TaskNote. Calibration note for P5+: implementation-class rows keep the +10–15% Mode-B bookend allowance; **rider-shaped work items ("author one file") get verified-before-estimate** — M4.4's rider concealed a relocate+repoint job.

### D4 — Housekeeping batch (small, bundled)? `EXECUTE-ALL / SUBSET` — **rec: EXECUTE-ALL at cascade**
1. **`specification.mdx` v2.5 re-mirror** (the site's pinned spec mirror is honestly-labeled v2.3; a re-mirror is a deliberate spec-port) → **M6.1 rider** (charter row annotation at cascade).
2. **`NetworkDiagram.astro` stale `SiteForge.aDNA` label** (M4.4 out-of-scope find; live site surface) → joins the same **M6.1 site-currency rider** (one-line fix at the next site-touching window).
3. **Root-`git/` shim registration check**: the `14e3031` symlink's Home.aDNA §C ledger row (workspace Rule 9, owed at creation) is unverified from this vault → **stage a one-line memo to Hestia** at cascade (names the shim + the drift-heal + proposes retire-condition "pending Git.aDNA posture", per the Grace Hopper memo §2).
4. **P-3 naming-clause memo STILL absent** (second gate running: G3-D6.3 carried it; `who/coordination/` has received nothing since) → **CARRY to G5**; the D3 TaskNote refresh carries the nudge line to Berthier.
5. **Twin-builder concurrency retro input** → recorded for **M7.x** (Mode-B pattern amendment candidate: post-notification quiescence check; dispatch agent-id checked dead, not assumed). No edit now.

## On ratification (Rosetta executes, no further ask)
Gate → `resolved` + output record · P4 `✅` / P5 `◐` + GATES splash line · **P5 briefs materialized at judgment tier** (M5.1–M5.3, Mode B) · D3 telemetry artifact + Prometheus annotation + TaskNote refresh (carrying the P-3 nudge) · D4 items 1–2 → M6.1 rider annotations, 3 → Hestia memo staged, 4–5 recorded · STATE QUEUED banner → P5 · **D2 push last** (post truth-check + gitleaks).
