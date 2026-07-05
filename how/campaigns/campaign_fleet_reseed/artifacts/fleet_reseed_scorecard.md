---
type: artifact
artifact_class: scorecard
campaign: campaign_fleet_reseed
mission: mission_fleet_reseed_p0_audit
created: 2026-07-03
updated: 2026-07-05
status: completed
last_edited_by: agent_rosetta
tags: [artifact, scorecard, fleet_reseed, p0_audit, compliance, read_only, p5_finalized]
---

# Fleet Re-Seed — P0 Compliance/Version Scorecard

**Read-only audit, 2026-07-03.** Ground truth from disk (`~/aDNA/*.aDNA`), cross-referenced with
`Home.aDNA/what/inventory/inventory_vaults.yaml`. **No vault was modified.** Raw 8-column table:
`…/scratchpad/fleet_audit_raw.txt`.

> **▶ P5 FINALIZED 2026-07-05 — CAMPAIGN CLOSED.** The W1–W3 conformance arc closed **F2–F6**; **F1 / F7 / F8** are documented carried-forward exceptions (dispositions in-line below), routed to the separate **W4** governance-doctrine gate + Rosetta's upstream/release lane. P5 node health cross-check **GREEN** (S1 6/6 files · canonical YAML `safe_load` clean · S9 inventory-vs-disk **68 = 68**, set-difference empty). **DoD MET — "scorecard at 100% or all exceptions documented."** Close records: `aar_fleet_reseed.md` · `missions/mission_fleet_reseed_p5_final_audit_aar.md`.

## Coverage
- **85** top-level `*.aDNA` entries → **15 symlinks** (aliases) + **1** archive-holder + **69 real vault dirs**.
- **Inventory drift (F6):** Home inventory (2026-06-30) records **66**; disk shows **69** → +3 since last refresh (concurrent forks). `skill_inventory_refresh` (Hestia) reconciles.
- **Baseline target:** the **v8.4** consumer-facing governance set (v8.5 is template-only — nothing for consumers to adopt). Standard v2.5.

## Tiering (proposed — operator confirms at gate)

### Tier A — mature-active · re-seed candidates (~39)
| Vault | gov ver | remote | router | dirty | unpushed | notable |
|---|---|---|---|---|---|---|
| aDNA.aDNA | **6.0** | GH | yes | – | 7 | **self-drift: ships v8.5, own gov at v6.0 (F7)** |
| aDNALabs | 0.1 | GH | yes | 1 | **55** | org HQ; huge unpushed backlog |
| Astro | 1.0 | GH | yes | 3 | – | stale wrappers: canvasforge, comfyforge |
| CakeHealth | 6.0 | GH(ssh) | yes | 4 | 1 | stale wrapper: tappinterface |
| Canvas | 7.0 | GH | yes | 4 | 1 | |
| ComfyUI | 7.0 | **no-remote** | yes | 4 | – | Free Harbor gap |
| Context | 0.0.1-genesis | GH | yes | 4 | 10 | active genesis |
| ContextCommons | 7.1 | GH | yes | 3 | – | stale: moleculeforge, presentationforge, videoforge, websites |
| Exchange | none | Codeberg | yes | 1 | 1 | |
| Git | 0.17 | GH | yes | – | – | |
| Harness | none | GH | yes | 3 | 1 | |
| Home | 0.1 | **no-remote** | yes | 3 | – | **correct (local-by-default, Rule 4)**; stale: canvasforge, siteforge |
| III | 1.0 | GH | yes | **14** | **23** | production framework; big dirty+unpushed |
| LAVentureGraph | 1.1 | GH | yes | – | – | |
| Lab | none | GH | yes | – | 7 | |
| LatticeProtocol | none | GH | yes | – | **54** | huge unpushed backlog |
| Molecules | 1.6 | Codeberg | yes | 8 | 1 | |
| Network | 6.0 | GH | yes | 4 | 16 | |
| Obsidian | 7.0 | GH | yes | 9 | 3 | |
| Operations | none | GH | yes | 10 | **52** | huge unpushed; AGENTS.md-governed |
| Oration | 1.0 | Codeberg | yes | 3 | – | |
| PercySleep | 7.0 | GH | yes | 3 | 1 | stale: tappinterface, taskforge |
| RareArchive | 1.0 | **Wilhelm-Foundation** | yes | – | 1 | external-org (rename veto) |
| RemoteControl | none | GH | yes | – | – | |
| ScienceStanley | 7.0 | GH | yes | – | 2 | 6 stale wrappers (graphicnovelforge, literatureforge, moleculeforge, presentationforge, speechforge, videoforge) |
| Spacemacs | 6.0 | Codeberg | yes | **21** | – | big dirty tree |
| SuperLeague | 1.3 | GH | yes | – | – | external-org (rename veto) |
| TappProtocol | none | GH | yes | – | 2 | |
| Terminal | 1.6-ep3 | GH | yes | – | – | Tier-1 (no iii wrapper needed) |
| TypeScript | 1.0-genesis | Codeberg | yes | 5 | 1 | active genesis |
| VAAS | 6.0 | GH | yes | 3 | – | |
| Videos | 1.0 | Codeberg | yes | 3 | – | stale: presentationforge |
| VisualDNA | none | Codeberg | yes | – | – | |
| Warp | 0.4 | GH | yes | 3 | 3 | |
| WebForge | none | **no-remote** | yes | 1 | – | 13 federation wrappers (composer-forge) |
| wga | 1.1 | GH | yes | – | 1 | |
| WilhelmAI | 1.0 | **Wilhelm-Foundation** | yes | **42** | – | external-org; largest dirty tree |
| ZenZachary | 7.0 | GH | yes | – | 1 | 7 stale wrappers |
| AWSBootstrap | 7.0 | GH | yes | – | – | airlock present |

### Tier B — genesis-stub / early · defer or light-touch (~29)
- **Keystone cohort (10, no-remote):** Forgejo, Caddy, Nebula, Nextcloud, Bitwarden, Container, Inference, FastAPI, Store, Groupware — all `gov=none`, no remote; **6 not in router** (Bitwarden, Container, FastAPI, Groupware, Nextcloud, Store).
- **Web-stack cohort (7, no-remote, not in router):** D3, React, Tailwind, ThreeJS, Vercel, APScheduler, Prefect.
- **Aegis cohort (3):** Dashboards (**router lists old name "BusinessIntelligence"** — rename residue), Neo4j, Organization.
- **Genesis stubs (9):** CakeProtocol, LlamaCppForge, MagnaPetra, Datasets, DataRoom, WorldGenome, Lighthouse (Codeberg, 7 unpushed), Regenesis (not in router), zeta (**gov v5.7** — oldest; 5 dirty, 6 unpushed).

### Tier C — skip (17)
15 back-compat symlinks (aDNANetwork, LatticeNetwork, BusinessIntelligence, Websites, SiteForge, VideoForge, SpeechForge, Cmux, MoleculeForge, TaskForge → active targets; CanvasForge, LatticeAgent, LatticeLabs, LiteratureForge, RareHarnessOld → Archive) · `Archive.aDNA` holder · `WGS.aDNA` (quarry, not-a-repo).

## Cross-cutting findings
- **F1 — governance-version fragmentation + tooling gap.** **No vault is at v8.x.** Highest real gov versions: v7.0/v7.1 (8) · v6.0 (5) · v5.7 (1) · ~19 project-local (0.1–1.6) · ~30 `none`. **Migration scripts exist only v5→v6 — no v6→v7→v8 path.** So governance-version adoption needs new scripts OR a guided/checklist upgrade, AND a decision on whether project-local-versioned vaults adopt aDNA gov-versioning at all. **→ P5 DISPOSITION 2026-07-05: documented carried-forward exception → the separate W4 governance-doctrine gate** (adopt the v8.4 consumer-facing *doctrine* as a per-vault checklist + author the missing v6→v8 migration tooling; aDNA.aDNA self-drift [F7] fixed there first as the dogfood proof). **Not closable in the conformance arc** — needs migration tooling + per-vault judgment (the exact reason the P0 gate split W4 out).
- **F2 — no-remote (Free Harbor gap).** ~25 vaults no-remote — mostly Tier-B genesis cohorts, but **3 Tier-A** (ComfyUI, WebForge, Home). Home is **correct** (local-by-default). ComfyUI + WebForge are real gaps. **→ W3 CLOSE-OUT 2026-07-05:** WebForge **remoted → Codeberg-private** (`codeberg.org/aDNA-Network/WebForge.aDNA`; the mandatory gitleaks full-history gate caught + allowlisted 2 *synthetic* eval-corpus fixtures — `.gitleaks.toml` `4c03fbbc`, useDefault-verified). ComfyUI **RECLASSIFIED → Class-L documented exception** (its own STATE: local-only "not for release", Git.aDNA Wave 3c; internal mesh-drift → Hopper/Venus thread) — *not* a gap. Home = documented exception (Rule 4). **→ F2 CLOSED** (ledger: `fleet_reseed_w3_hygiene_ledger.md`).
- **F3 — router gaps.** ~15 vaults absent from root `~/aDNA/CLAUDE.md` Project Discovery (web-stack + several Keystone + Regenesis) + **rename residue** (router "BusinessIntelligence" vs disk "Dashboards").
- **F4 — stale-named federation wrappers (= Berthier "OBE rename-residue" defect).** ≥10 vaults carry `how/federation/<oldname>/` dirs for renamed sources: canvasforge→Canvas, comfyforge→ComfyUI, moleculeforge→Molecules, videoforge→Videos, speechforge→Oration, siteforge→Astro, websites→WebForge, tappinterface→TappProtocol, taskforge→Operations, presentationforge/graphicnovelforge/literatureforge. Worst: ScienceStanley (6), ZenZachary (7). Masked by Archive shims; a real currency defect. **→ W2 CLOSE-OUT 2026-07-04: SUBSTANTIALLY CLOSED.** Real scope = 25 dirs / 8 vaults (WebForge a false positive; residue mostly dir-name-not-content). Swept 5/8: Home · ContextCommons · Videos · PercySleep · ZenZachary (+ `literatureforge` deleted in ZenZachary). **Documented exceptions (SO#4) — ALL RESOLVED 2026-07-04** (operator-authorized override, each re-verified on disk pre-touch): ScienceStanley swept (`cc62f1d`→origin/dev; 5 producer forges + `literatureforge` delete + live-routing rows; site-wrapper cluster left to SS's active re-architecture) · CakeHealth `tappinterface→tappprotocol` (`30712a9`→origin/main; override superseded pending Berthier co-sign) · Home-topology regen (`3c59016` local; pt19 producer refresh; edges 56→64, 0 dangling). **Astro = Operation-Atelier-owned (permanent documented exception, not a defect).** Tail (closed) → `idea_fleet_reseed_w2_residual_tail`. **→ F4 FULLY CLOSED 2026-07-04.**
- **F5 — dirty trees + unpushed backlogs.** Dirty: WilhelmAI 42 · Spacemacs 21 · III 14 · Operations 10 · Obsidian 9 · Molecules 8 · (+ ~8 at 3-5). Unpushed: aDNALabs 55 · LatticeProtocol 54 · Operations 52 · III 23 · Network 16 · Context 10. Some are operator-gated holds; needs a per-vault commit/push-or-document pass before any touch. **→ W3 CLOSE-OUT 2026-07-05:** live pre-flight re-verified each (state had drifted). **Pushed 1** (Molecules `51ad306`→Codeberg, authorized Corps M-A2 fix; gitleaks clean). **Held 6** (Network +25 · Context +18 = SO-9 owner-gated [First-Light / Prometheia-public]; aDNALabs +60 · LatticeProtocol +61 · Operations +60 · Obsidian +3 = explicit "Local, no push"). **Synced 3** (III · WilhelmAI [+partner] · Spacemacs [local-design]). Holds are deliberate owner gates — respected, each remains its owner's to push. **→ F5 CLOSED** (ledger: `fleet_reseed_w3_hygiene_ledger.md`).
- **F6 — inventory drift** (66→69) — `skill_inventory_refresh` (Hestia). **→ CLOSED (W1 reconcile, P5-verified 2026-07-05).** Home `inventory_vaults.{yaml,md}` reconciled **66→68** at W1 (`93310e1`, local-only Rule 4); P5 re-verified live — disk **70 real `.aDNA` dirs − Archive holder − WGS named-quarry = 68**, canonical `vault_count: 68`, **set-difference vs disk empty (S9 GREEN)**. No P5 churn needed — the scorecard's own "66→69" framing had **aged** (W1 had already landed the correct countable 68; the 69 was a WGS-inclusive count).
- **F7 — aDNA.aDNA self-drift** — the standard's own dev vault is gov v6.0 while shipping v8.5 (dogfooding gap). **→ P5 DISPOSITION 2026-07-05: documented carried-forward exception → W4** — fixed there FIRST as the dogfood prerequisite before any fleet-wide doctrine adoption. Out of scope for the conformance arc (a standard/template-side change on Rosetta's release lane, not a per-vault re-seed touch).
- **F8 — Berthier fleet-defect classes** (input, `coord_2026_06_27_inbound_from_berthier_fleet_defects.md`): template-clutter (stale inherited `campaign_adna_workspace_upgrade`), harness-injection leak (`# userEmail`/`# currentDate` in governance files), rename-residue (=F4). Route to Rosetta's upstream lane + the re-seed waves. **→ P5 DISPOSITION 2026-07-05: partially discharged + documented.** The rename-residue class (=F4) **FULLY CLOSED at W2**. Template-clutter + harness-injection-leak classes remain routed to Rosetta's **upstream/release lane** (template-side fixes ship via `skill_template_release`, out of scope for a per-vault re-seed). Carried-forward documented exception.

> **Not run this pass:** the full `skill_node_health_check` (D10) 23k procedure — the disk-truth audit above covers its core dimensions; the incremental checks (federation_ref *resolution*, orphaned-commit deep scan) are queued as the **P1-entry independent cross-check** (Hestia). The cheap orphaned-commit signal (unpushed counts) IS captured above.

## Recommended remediation shape (for the P0 gate)
Split **compliance-conformance** (cheap, high-value, low-risk) from **governance-version adoption** (expensive, judgment-heavy):
- **W1 — router resync + inventory refresh** (Hestia; closes F3/F6). ~1 session, mechanical.
- **W2 — federation-wrapper rename-residue sweep** (F4/F8; the real defect). ~2–3 sessions.
- **W3 — git-remote setup for Tier-A no-remote (ComfyUI, WebForge) + a commit/push-or-document hygiene pass** (F2/F5). ~2 sessions.
- **W4 — governance-doctrine adoption** (F1/F7): a **separate decision** — adopt the v8.4 consumer-facing *doctrine* via a checklist (§7.7 ratification, Standing Rules 5–7, credential-broker snippet, AskUserQuestion discipline, single-writer-lease, executor_tier fields) rather than a version-number migration; scope to Tier-A first; aDNA.aDNA self-drift fixed first (dogfood).
- **Tier B (genesis stubs):** light-touch only (router + inventory registration); full compliance **deferred until graduation**.

## Gate decisions — RATIFIED 2026-07-03
1. **Tier boundaries** ✅ — A/B/C as proposed (Context/TypeScript stay Tier-A active-genesis; zeta Tier-B).
2. **Depth = SPLIT** ✅ — compliance-conformance (W1–W3) is near-term; **governance-doctrine (W4) deferred to its own separate gate**.
3. **Wave order** ✅ — W1 → W2 → W3; W4 separate.
4. **Genesis-stub posture** ✅ — Tier-B light-touch (router + inventory) only; full compliance defers to graduation.
5. **External-org** ✅ — RareArchive / WilhelmAI / SuperLeague light-touch, rename-veto honored (Standing Order 2).

**Pacing = HELD** — W1 not started this session; opens next session via `mission_fleet_reseed_p1_router_inventory` (Hestia: router resync + `skill_inventory_refresh`).
