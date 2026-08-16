---
type: artifact
artifact_type: dependency_map
campaign_id: campaign_haussmann
title: "HAUSSMANN Phase A.3 — adjacent-vault dependency map (offers / owes / red flags)"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
agent_authored: true
tags: [haussmann, orientation, phase_a, dependency_map, federation]
---

# Dependency map — what HAUSSMANN needs from each vault, and what it owes back

> **Provenance**: `[D]` = read directly from the named vault's files during the genesis sweep 2026-08-16;
> `[R]` = reported by a peer vault's record (source named). Directive: [[COWORK_DIRECTIVE_operation_haussmann_genesis]] §3 A.3.
> Cross-vault needs are **staged as coordination memos, never written into peer vaults** (workspace Rule 10 / Git-Ops #6).

| Vault (persona) | State `[D]` | Offers HAUSSMANN | HAUSSMANN owes back | Red flags |
|---|---|---|---|---|
| **WebForge.aDNA** (Vitruvius) | `genesis_active`; Wave 2 closed 08-07; STATE current 08-16 — the freshest pattern source | 12 buildable Astro archetypes; 57-lock craft-floor doctrine; DTCG token pipeline + WCAG-AA checker; class-keyed Lighthouse profiles **measured + gating**; `deploy_prebuilt.sh` + header injection; `graph_card` component; provider contract + consumer register | `how/federation/webforge/` wrapper + contract §3 intake + register row (P0 mission); every pattern HAUSSMANN invents **authored back** (`patterns_to_author`, directive A.2 rule); KW-14 discipline (read gate bars from `lighthouse_profiles.json`, never transcribe) | aDNA.aDNA is an **unregistered straggler** today; `VERCEL_TOKEN_ADNA` missing (site rides shared cached CLI identity — "silent-break class"); D-13 header gap live on 3 demos; `art_direction_register` still `proposed`; origin remote never pushed |
| **Fluxer.aDNA** (Aspasia) | ⚠ STATE **stale-wrong** (07-11: "nothing is deployed") vs live instance `[R: aDNALabs STATE L174]` | Agora Loop consent/provenance doctrine (T0–T3 tiers, erasure rule); verbatim agent-disclosure notice (R-12); Cap-Map v1.0 (75 capabilities — accurate feature copy); ADR-006 sovereignty framing | **STATE-reconciliation memo (hard prerequisite before any public community copy)**; routing of any public claim through its SO#7 (propose-only) | community.adna.network runs on a third party's ("Mahdi's") metal, unreconciled; instance **policy-naked** (no ToS/CoC; 19 `#needs-human` counsel items); founder doctrine: **no LLM syndication of conversations** (SO#8); `<title>` = generic "Fluxer" — zero aDNA branding `[D live]` |
| **aDNALabs.aDNA** (Berthier) | STATE 377 KB, current 08-16 — the only record matching reality | The authoritative current-state picture; **ADR-025 RATIFIED: community.adna.network = HUMAN-ONLY until federation GA**; `MANIFEST.public.yaml` (what is already cleared public); the 08-11 wave memo (absorbed — see [[WEBFORGE_ORIENTATION]] §5) | Campaign row + `campaign_index` note with `acceptance_gate` publish marker; charter-reconciliation courtesy memo | 92 `adna.network` refs across its STATE = latent claims to reconcile in B.5; HQ attention is on other lanes; fleet records "drift optimistic-stale" (its own finding) — verify before relying |
| **LatticeProtocol.aDNA** (Noether) | v0.85; alpha GO but **"nothing public distributes; publish counsel-gated"**; SR-6 STANDING STOP; D-8 counsel campaign backlogged | Built whitepaper PDF + full architecture/glossary set — *citable only if the counsel gate opens* | A publish ruling **before any link goes live**; treat every protocol claim as embargoed | Homepage says "built on the Lattice Protocol (opening progressively)" 3× (H9) — positioning must resolve *inside* the embargo; its own `what/website/` tree is a flagged straggler — **not** a pattern to copy |
| **Home.aDNA** (Hestia) | Broker healthy; inventory current 08-14 | Brokered credentials by name (C01 `SS_VERCEL_TOKEN` · C47 Cloudflare · C26/C42 GitHub); DNS custody mechanics (ADR-031); registry source (`inventory_vaults.yaml` + vault cards → `vaults.json`, ADR-023, **regen is Hestia-owned — honor pt19**) | Memo: register community.adna.network + the Mahdi host in node inventory (currently invisible `[D]`); land `VERCEL_TOKEN_ADNA`; tagline/card backfill ask (0/27 cards carry `tagline`; ~46/74 vaults lack a card — the H13 leak-class root cause) | C01 rotation open since 07-28 (recurring leak history); per-consumer Vercel isolation parked behind Operation Chambellan |
| **Astro.aDNA** | v1.0.0, partially FROZEN (artifacts moved to WebForge at Atelier B1) | `sf_forge_pattern_spec.md` (canonical forge-pattern spec — cite, don't re-derive); `skill_cloudflare_dns_cutover` v1.0.0 (for any `community.adna.network` DNS work) | Nothing structural — route all new work through WebForge | **Do not build from its archetypes** (frozen, byte-identity-checked); repo GitHub-private (BSL-1.1) — public site can't link source |
| **III.aDNA** (Argus) | v0.6.0 tagged; no active campaign | The semantic review layer above mechanical gates (Inspect 4 modalities / Introspect 7 calibration checks / Improve ranked change orders); learning store (accumulate → graduate → propagate) | Learning-store entries from the campaign's reviews; consumer wrapper + correct pin | WebForge pins III ~0.5.0 vs shipped v0.6.0 — check pin before invoking; III does **not** execute site audits (WebForge owns execution) |
| **Canvas.aDNA** (Mondrian) | Active, mid-campaign (halftone arc; H3 eye-gate passed 08-13) | Canvas-as-output for diagrams/explainer panels (lattice topology, Agora Loop stages); existing WebForge seam (`sf_m08_canvas_preview_spec`) | Diagram requests routed as queue-contention asks, not free pulls | Busy on its own arc — sequence asks accordingly |
| **VisualDNA.aDNA** (Pygmalion) | Schema v1.0.0 GA; P4 next; **no populated bundles anywhere** | The bundle schema + composition rules — the vehicle to make the aDNA visual identity reusable (hero/pixel precedent lives in *this* vault's history, not there) | Authoring the **first real aDNA-brand bundle** would be its first web anchor (campaign P4 candidate) | `palette_anchors.web_card_mode` lands only at P5 — pinning now buys a version due to change |

## Constraint set (binding on all campaign copy + design)

1. **ADR-025 (aDNALabs, RATIFIED)**: community.adna.network is a **human surface only** until federation GA — an agent-exchange framing fires aDNANetwork ADR-009 T1. `[R: aDNALabs coordination_index L42]`
2. **Fluxer SO#8**: harvest = in-community capture under disclosed consent; **never web syndication**; agents always named + disclosed (pinned notice verbatim-fixed).
3. **LatticeProtocol counsel embargo**: no public protocol distribution or whitepaper links until D-8 rules; all protocol claims auto-flag S1 in the claim register.
4. **Honor pt19**: never run `sync:vaults` or hand-edit `vaults.json` — registry regen is Hestia-owned, operator-gated.
5. **Deploy truth**: no Vercel git integration — pushing does not redeploy; the working command is `npx astro build` then `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod` (env-var only, never `--token`; leak history).
6. **Consumer-not-fork**: any pattern the site needs that WebForge lacks gets authored back into WebForge, never solved locally (directive A.2).

## Related

[[WEBFORGE_ORIENTATION]] · [[webforge_pattern_register]] · [[instrument_ingestion]] · [[doctrine_visual_inspection]] · `directives/COWORK_DIRECTIVE_operation_haussmann_genesis.md`
