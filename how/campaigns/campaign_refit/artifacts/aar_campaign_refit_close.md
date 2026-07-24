---
type: campaign_aar
title: "Operation Refit — campaign close SITREP + AAR (P5 → G3)"
owner: stanley
persona: rosetta
status: accepted        # G3 SIGNED 2026-07-24 (Stanley, DP10) — "accept close + push all + deliver 5 memos"; campaign flipped active → completed
campaign_id: campaign_refit
campaign_phase: 5
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [campaign_aar, close, sitrep, refit, p5, g3, dp10]
---

# Operation Refit — campaign close (P5) → G3

**One sentence:** Operation Refit brought every live surface of the aDNA estate back to verified truth, settled the
inbound docket, charted the next release, and closed the contributor-readiness gaps — across **6 missions in 4
working sessions**, shipping **no normative change** (standard v2.5 / governance 8.8 hold), and now presents the
**G3 close + push election** (DP10).

## Result — every A–E work-inventory row reconciled

The charter's close discipline: *no claim without a checkable trace* (the lesson D1 taught). Each row → a
disposition (done / deferred-with-owner / cut-with-reason).

| Row | Scope | Disposition | Where |
|-----|-------|-------------|-------|
| **A1** | Registry regen `vaults.json` 68→73 | ✅ done (`sha 59058a4`) | M2 |
| **A2** | `tagline` vs `headline_mission` schema ruling + Home backfill auth | ✅ done — tagline canonical (DP1); split-brain wiring fixed | M2 |
| **A3** | G20 claim-trace fixture 54→73 | ✅ done | M2 |
| **A4** | `verified_paths` REQUIRED_PATHS re-check + close | ✅ done — install_truth 6/6 (closed pt19 §3 Ask-2 + stale-SHA watch) | M2 |
| **B1** | vNext `task`-slot answer (**due 07-31**) | ✅ done — answer finalized + staged for delivery (beats deadline) | M1 |
| **B2** | ADR-022 co-sign **re-delivery** | ✅ done — re-affirmed + bundled with B1 | M1 |
| **B3** | D-DP2 six-item process-adoption worklist | ✅ done — per-item (adopt 1/2/3/6 · consolidate 4 · amend 5) + §2.7 ratified | M1 |
| **B4** | `pattern_launch_acceptance_contract` adoption | ✅ done — authored + adoption memo | M1 |
| **B5** | Coord-memo intake | ✅ done | session-0 |
| **B6** | Park-notes (Exchange · Vitruvius) | ✅ done | M1 |
| **C1–C5** | Deep triage of the 5 hot July ideas | ✅ done — 1 close-as-shipped + 4 adopt | M5 |
| **C6** | Light sweep of ~25 older ideas | ✅ done — all 32 open ideas dispositioned (0 missing) | M5 |
| **C·roadmap** | vNext roadmap (v8.9 vs v2.6) | ✅ done — `vnext_roadmap.md`, ratified `accepted` at G2 | M5 → G2 |
| **C·stub** | Seeded successor release stub | ✅ done — `campaign_v8_9_release` materialized `status: planned` | G2 |
| **D1** | `/org-context-graphs` retire + reconciliation | ✅ done — deleted + 301→`/vaults` | M3 |
| **D2** | `navigate-a-vault.mdx` refresh | ✅ done — de-rotted | M3 |
| **D3** | Three-class evidence-artifact policy | ✅ done — `evidence_artifact_policy.md`, dangle-safe | M4 |
| **D4** | Status hygiene | ✅ done | session-0 |
| **D5** | Dev-vault version-distinction comment | ✅ done | M4 |
| **D6** | 2 missing hermes light-mode captures | ✅ done | M3 |
| **E1** | Contributor-pathway audit + gap fill | ✅ done — dev-side live · image-side staged | M6 |
| **E2** | Vault-graph edge enrichment (stretch) | ⛔ **cut + routed** to `idea_upstream_vault_card_edge_population` (DP8; reasoning recorded) | M6 |

**All 21 in-scope rows disposed; the one stretch (E2) cut with reasoning + a named owner.** Zero launch-blocking
defects were found at charter, and none were introduced.

## Gates (every mission + campaign close)

- `adna_validate --governance` → **zero drift** on every governance-touching mission (M1 · M4 · M5 · M6 · G2).
- `npm run test:gates` → **371 passed** (M2 · M3 · M6); `npx astro build` clean each site-touch.
- Every mission: session file · 5-line AAR · `token_budget_actual`. **Campaign actual ≈ 300 kT** across 4
  sessions (est ~460–500 kT content-load) — **well under**, because M3+M4 paired, M5's two-pass seam wasn't
  needed (~62 vs ~120), and M6's E2 was cut (~70 vs 120).

## AAR

- **Worked**: The campaign shape held — cross-coupled streams (schema ruling → regen; triage → release stub;
  deadline → sequencing) resolved in one coherent arc instead of drip-fed sessions (the Meridian precedent).
  Deadline discipline paid: the 07-31 B1 answer was finalized in the chartering session (07-21), 10 days early.
  Verify-first repeatedly earned its cost — it caught the split-brain registry wiring (M2), 2 already-shipped
  "proposed" ideas (M5), and the 73→74 drift (M6).
- **Didn't**: Nothing blocked or was abandoned. Two things were *deliberately* not done and recorded as such:
  E2 (cut) and the ~9 residual stale-repo-name refs in historical files (out of contributor-pathway scope).
- **Finding**: Status labels lag truth in three independent places this campaign — the v8.8 charter still read
  `active` (fixed session-0), 2 backlog ideas were shipped-but-`proposed` (M5), and the registry drifted 73→74
  unnoticed (M6). **"Verify the live surface before trusting the record" is the campaign's throughline lesson**;
  it belongs in every consolidation campaign's method.
- **Change**: Two gotchas promoted to standing method — (1) *restore ANY out-of-scope prebuild regen*, not just
  date-churn (`npx astro build` skips the prebuild); (2) the disposition-stamp discipline (proposals stay
  `proposed`; only factual closes flip to `resolved`) cleanly separates agent-proposes from operator-ratifies.
- **Follow-up (carry-forward register)**:
  1. **Registry regen 73→74** — a future M2-style data-currency pass (new org_graph vault + G20 fixture).
  2. **`campaign_v8_9_release`** — opens post-Refit; carries the ratified v8.9 batch **+** the M6 image-side
     dev-readiness ship-set (candidate rider).
  3. **CoC dedicated reporting-address** `#needs-human` (M6).
  4. **5 staged coord memos + the accumulated commits** — the G3 push election (below).

## G3 packet (DP10) — the operator gate

**G3 is the operator's: accept the close, review §Pending Manual Actions, and elect the push.** The close does
not self-execute the push (hard-constraint 4; the ADR-022 lesson — silence must be impossible to miss).

### The push election — 28 local commits (`origin/main..HEAD`)

The whole local stack has ridden the commit-no-push posture since before Refit opened. It spans **more than
Refit**: the oldest ~5 are the pre-Refit **v8.8 Distillery close** (`b56b46e`…`3f87b7e`) + quiescent-window
inbound memos (Hearthlight imagery, Clear Hearth housekeeping, Emacs/Home upstream idea filings) that also never
pushed. If the push fires, a `gitleaks` full pass runs first (Git-Ops §7).

### The 5 `staged_for_delivery` coord memos (destinations)

| Memo | To | Carries |
|------|----|---------|
| `coord_2026_07_21_rosetta_to_berthier_vnext_task_slot_and_adr022` | **Berthier** (Operations) | B1 vNext `task`-slot answer (due 07-31) + B2 ADR-022 re-delivery |
| `coord_2026_07_22_rosetta_to_berthier_ddp2_dispositions` | **Berthier** | DP6 D-DP2 per-item worklist |
| `coord_2026_07_22_rosetta_to_berthier_launch_acceptance_adoption` | **Berthier** | DP7 launch-acceptance-contract adoption |
| `coord_2026_07_21_rosetta_to_hestia_registry_field_ruling` | **Hestia** (Home) | DP1 tagline ruling + ~46-card backfill authorization |
| `coord_2026_07_22_rosetta_to_hygeia_org_graph_registration_ack` | **Hygeia** (WilhelmAI) | RareAnthropic org-graph registration ack |

> **The B1 memo carries the 07-31 deadline** — even if the push is deferred, the B1 answer must reach Operations
> by 07-31 (the answer is finalized + committed; only *delivery* is pending). Flag if G3 defers the push past 07-31.

### §Pending Manual Actions (re-surfaced from the charter, operator-only)

GitHub social-preview upload · Vercel Git integration · site verification · scratch-repo deletion · the ADR-010
Wilhelm co-sign (gates the `/commons` un-embargo). All operator-discretionary; none block the close.

## Close disposition

On the **G3 operator sign (DP10)**: campaign `active → completed`; this AAR + the ratification record flip to
`accepted`; the push election executes or defers per the ruling. Provenance: [[campaign_refit]] ·
[[ratification_record_refit_g1]] · [[ratification_record_refit_g2]] · [[sitrep_2026_07_21_state_of_the_estate]].
