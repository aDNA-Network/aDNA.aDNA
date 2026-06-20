---
type: artifact
artifact_class: decadal_aar
campaign_id: campaign_website_adna
mission_id: mission_wadna_p3_iterate
decade: D3
title: "Decadal AAR — D3 Agentic-readiness + community legibility (SP-6 → H-3/M-3 · H-4 · H-8; gates G10/G11)"
created: 2026-06-19
updated: 2026-06-19
status: complete
verdict: GO (pending operator decade-gate)
last_edited_by: agent_rosetta
tags: [artifact, decadal_aar, phase3, decade_3, agentic_readiness, community, axis_g, axis_k, rlp]
---

# Decadal AAR — D3 Agentic-readiness + community legibility

> Third decade of WEBSITE.aDNA P3 (`mission_wadna_p3_iterate`), opened on operator GO at the D2 decade-gate (2026-06-19). Makes the site legible to AI agents (llms.txt + graph structured data + no-JS reachability) and makes `/community` *show* a real, honestly-governed commons (axis-K). **Commit-only.** Spec: [[IMPROVEMENT-SPECS.aDNA]] SP-6/H-3/H-4/H-8 + M-3; gates [[TOOLING-PROMOTION.aDNA]] G10/G11.

## 1. Verdict — **GO** (pending operator decade-gate)

All D3 decade-exit criteria met: `/llms.txt` live + fresh, graph JSON-LD valid, no-JS reachability locked, `/community` K ≥4. Independent 3-persona panel: **G 5/5 · K 5/5 · E 5/5** (Accessibility & Agent Advocate · Movement Skeptic · Funder/Program Officer), three approves. Holds at the decade-AAR human gate — operator GO required before D4.

## 2. Scope — units

sitewide (`/llms.txt` + `/llms-full.txt`) · `/vaults/graph` (JSON-LD + no-JS) · `/community` (axis-K) · `/get-started` (mobile install).

## 3. Dispositions

| # | Finding | Disposition (shipped) | Verification |
|---|---------|----------------------|--------------|
| **H-3** | No `llms.txt` (agents have no index) | New Astro endpoints `src/pages/llms.txt.ts` + `llms-full.txt.ts` — composed from the single-source data (`install_truth.json`/`standard.ts`/`canonical.ts`/`vaults.json`); fresh-by-construction. | Agent Advocate: valid llmstxt.org shape; canonical install one-liner + v2.2 + repo + publisher; **zero drift** (no LatticeProtocol, no dead aDNA.aDNA); text/plain. |
| **M-3** | `/vaults/graph` emits no structured data | `graph.astro` emits `CollectionPage` JSON-LD (counts from `vaults.json`, read-only). | Parses valid; added to G4 page list (gate-15). |
| **H-8** | Install command clips at 320–390px | `get-started.astro` install command blocks (`pre.cmd` + `.cmd-oneliner`) soft-wrap; the ASCII tree + interview output keep `overflow-x:auto` (alignment preserved). | gate-9 (Get Started no-overflow at 375px) green; Agent Advocate confirmed full readability + preserved alignment. |
| **H-4** | `/community` asserts rather than shows the commons (axis-K) | New `src/data/community.json` (real, public-appropriate only) → ported the `/commons` honesty pattern to `community/index.astro`: the real participation ladder (L0–L3, faithful to `who/community/community_roles.md`), a governance record (5 real practices), the `gov-honesty` absence-disclosure, and an honest "planned ≠ shipped" horizon Callout. Kept the doc cards + ClosingCTA. | Movement Skeptic K5/5 (shown-not-asserted; zero fabrication; honest boundary; no public jargon leak) · Funder K5/E5 (all 5 governance claims backed by real artifacts — 30 ADRs, MIT LICENSE, 54 AARs, 909/998 `last_edited_by`, public repo 200). |

## 4. Gates wired

| Gate | File | Guards |
|---|---|---|
| **G10** llms.txt presence + freshness | `gate-17-agentic.spec.ts` | `/llms.txt` + `/llms-full.txt` served text/plain; carry canonical install/version/repo/publisher; **negative-assert** no LatticeProtocol / aDNA.aDNA (locks the C-1/C-3 drift class out of the agent index). |
| **G11** no-JS reachability | `gate-17-agentic.spec.ts` | `/vaults/graph` node-twin lists vaults as real anchors with JS disabled; lede visible. Permanent/blocking (not @audit-tagged). |
| **G4** JSON-LD validity (extended) | `gate-15-credibility.spec.ts` | `/vaults/graph` added to the JSON-LD page list. |

**Gate baseline 274 → 278 (all green).**

## 5. Scorecard (independent panel, rotation-honored)

| Axis | Lead persona | Score | Target | Status |
|------|--------------|-------|--------|--------|
| **G** Accessibility + Agentic | Accessibility & Agent Advocate | 5 | ≥4 | ✓ |
| **K** Community & Collaboration Legibility | Movement Skeptic + Funder/Program Officer | 5 | ≥4 | ✓ |
| **E** Sci/Inst. Credibility (cross-check) | Funder/Program Officer | 5 | ≥4 | ✓ |

## 6. RLP — independent 3-persona panel

- **Accessibility & Agent Advocate — approve (G5).** llms.txt single-sourced + drift-locked; graph CollectionPage JSON-LD valid; no-JS path reaches all 40 vaults; H-8 soft-wrap works + ASCII alignment preserved; gate-17 locks regression. Trivial note: G11 asserts `>10` not exact count (deliberate floor).
- **Movement Skeptic — approve (K5).** "Tried to break it, couldn't." Shown-not-asserted; **names the absence of metrics as a feature** (skeptic-proof); honest horizon; the only jargon matches are in non-rendered source comments.
- **Funder/Program Officer — approve (K5/E5).** Every governance claim backed by a verifiable artifact; version honesty (v2.2 held back correctly vs the ratified-but-unreleased v2.3); no institutional-partner claims; honest open/closed boundary. One nit fixed in-decade (below).

**Fixed in-decade (Funder nit):** the "Every file records who last edited it" claim was ~91% literal (909/998) → softened to "By convention, content files record who last edited them" (community.json). Precision over flourish.

## 7. Metrics

- Build: `npx astro build` → clean; new routes `/llms.txt` + `/llms-full.txt`; no data regen (Honor pt19 held).
- Gates: **278/278** (`test:gates`).
- Commit: `5d3e41c` (site work + D3-open) + the attribution-softening (this close). Commit-only.

## 8. Decade-exit criteria ([[DECADAL-PLAN.aDNA]] D3 row)

- [x] `llms.txt` live + fresh (single-sourced; G10).
- [x] graph JSON-LD valid (G4).
- [x] no-JS reachability locked (G11).
- [x] `/community` K ≥4 (panel K5/5; shown:claimed ≥ parity).
- [ ] **Operator decade-gate GO** → open D4 (visual craft · composition · responsive · perf). ⏳ pending.

## 9. 5-line AAR

- **Worked:** generating llms.txt as an Astro endpoint off the canonical data (not a static file) made it fresh-by-construction + drift-locked by G10 in one move; porting the `/commons` honesty pattern made `/community` shown-not-asserted with the panel finding *nothing* to fabricate.
- **Didn't:** the only finding was a precision nit — "every file" was ~91% literal; the credibility decade should state near-universal practices as conventions, not absolutes.
- **Finding:** the strongest axis-K move is to *disclose the absence* — "no member counts; the record doesn't track them" pre-empts the skeptic better than any positive claim could.
- **Change:** for honesty-line copy, prefer "by convention" / "content files" over "every file" when the practice is enforced-but-not-100%.
- **Follow-up:** **verify-after-pt19** — `/llms.txt` link targets + the `/vaults/graph` no-JS node-twin labels render pre-rename vault slugs (SiteForge, CanvasForge, …) from `vaults.json`; like C-4, they inherit pt19's corrections automatically (data-layer, not hand-edited). Vault-side: `who/community/community_roles.md:46` still cites the legacy `LatticeProtocol/Agentic-DNA` repo (not surfaced publicly; the page uses canonical).

## 10. Open human gate

**Operator GO required before D4 opens** (campaign Standing Order #8). D3 is commit-only. On GO, D4 = visual craft · composition · responsive · perf (SP-3/4/5/7 → H-5/6/7/9/11), gates G1/G3/G8/G9 — the final decade before the P3→P4 phase exit.
