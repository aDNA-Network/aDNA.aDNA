---
type: wrapper
wrapper: webforge
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p0_3_webforge_intake
tags: [wrapper, webforge, federation, consumer, adr_045, haussmann, p0]
---

# CLAUDE.md — WebForge Wrapper (aDNA.aDNA)

> Instantiated at HAUSSMANN mission P0.3 (webforge intake). aDNA.aDNA was the fleet's **unregistered
> straggler** — the site consumed zero WebForge patterns and no `how/federation/webforge/` existed
> (`dependency_map` G1). This wrapper closes that gap: consumer, never fork.

## Identity

This is the **WebForge consumer wrapper** for `aDNA.aDNA` (persona **Rosetta**). It holds ONLY
consumer-specific configuration — branding, voice mapping, the federation pin, standing orders. **It is NOT
the WebForge implementation**: archetypes, lattices, gates, and doctrine live at `~/aDNA/WebForge.aDNA/` and
are consumed **by reference, never copied** (contract §11 anti-pattern #1). Contract:
`WebForge.aDNA/what/artifacts/spec_webforge_provider_contract.md` (v1.2.0).

- **Surface**: the existing **bespoke 202-page Astro site** (adna.network) consuming WebForge patterns
  through this wrapper — **NOT an archetype re-platform**. Contract §2 class: "Public website", **Tier A**
  per ADR-015 §A5 (static). The `organization_landing` archetype (pattern register P10) is consult-only
  reference for IA questions, not a rebuild target — re-platforming is explicitly out of HAUSSMANN scope
  unless Phase B evidence argues otherwise.
- **Build authority**: consumer-lane single-build (contract §4 default) — this vault's own lane builds and
  gates the site; Momus-independence discipline (never the builder self-certifies) already matches this
  campaign's own verification-handoff practice.
- **Registered**: **not yet — pending.** The §3 path-2 ask memo was delivered 2026-08-16; see *Pending with
  Vitruvius* below. `WebForge.aDNA/what/artifacts/webforge_consumer_register.md` (read 2026-08-16, `updated:
  2026-07-16` in its own frontmatter) does not carry an aDNA.aDNA row — the register entry is WebForge-side
  to write (Rule 10), once Vitruvius classifies the ask.

## Federation pin (primary form — contract §5, ADR-045 placement)

```yaml
federation_ref:
  source_vault: WebForge.aDNA
  version: "0.1.0-genesis"
  pinned_at_commit: "6096157ab5d79d95a54e6def3dfd1091bc07facc"
  pinned_at: "2026-08-16"
  update_policy: review_state_between_pins   # pull-based; contract §8
```

Verified 2026-08-16: `version` from `WebForge.aDNA/MANIFEST.md` frontmatter (`version: 0.1.0-genesis`);
`pinned_at_commit` from `git -C ~/aDNA/WebForge.aDNA rev-parse HEAD` — exact match, WebForge's HEAD at pin
time (commit subject: `kw13_e6_scoped_widen C6+C7 CLOSE`). Recorded full-length for grep-unambiguity; the
short form `6096157a` resolves identically if a future edit prefers the template's short-sha convention.

## Context loading order (WebForge work in this vault)

1. This file.
2. `what/context/branding.json` (brand ceiling — seeded from ADR-032 + the live site register).
3. `what/context/adna_voice_mapping.yaml` (voice registers → surface; seeded from ADR-048 + `front_page_doctrine.md` §4).
4. WebForge contract §2/§7 (surface classes · quality bar + honest limits).
5. This campaign's own pattern index — richer than a generic read of WebForge, purpose-built for this intake:
   `../../campaigns/campaign_haussmann/artifacts/webforge_pattern_register.md` (15 pattern families, maturity
   + adoption gaps) and `../../../what/context/context_webforge_patterns.md` (the short version).

## Standing orders (consumer-side)

1. **Extend, never fork.** No WebForge implementation code is copied here; patterns are consumed by
   reference or adapted in-lane per contract §4.
2. **This vault's existing 371-gate suite is the current floor** — the craft-floor graduation ruling (below)
   is how the two reconcile over time (P4.2), not a unilateral replacement of either.
3. **FR-K law**: any spec asserting live-graph-data values derives fixtures from the build snapshot — never
   row literals (contract §8; matches this vault's own pt19/KW-8 discipline already, campaign convention 5/8).
4. **Data-honesty law**: source-absent fields render honest-absent — never blank, never fabricated (matches
   the campaign's own protected honesty strata — campaign CLAUDE.md "What this campaign protects").
5. **Deploys ride this vault's own deploy gates** (mission P0.2); credentials are names-only via the Home
   broker (`SS_VERCEL_TOKEN` in current use; `VERCEL_TOKEN_ADNA` is the still-parked target — see Pending).
6. **Cross-vault writes are memos, never direct edits** (workspace Rule 10; campaign convention 10) — this
   wrapper does not write into WebForge.aDNA; the consumer-register row is Vitruvius's to author.
7. **Port discipline (pattern P15)**: this site keeps its own dev port; never co-run its gate suite against
   WebForge's `organization_landing` (4321) or any other WebForge archetype suite.
8. **No graph-root wrapper dir** (ADR-045) — this wrapper lives here, under `how/federation/`, permanently;
   no root-level `webforge/` or `siteforge/` symlink is to be created for this vault.

## Page ↔ voice registers

Full mapping: `what/context/adna_voice_mapping.yaml`. Summary: **honest-plain is the sitewide default**
(`front_page_doctrine.md` §4, the restraint half of the ~55/45 dial); the lyric register is *placed*, not
banned — reserved for manifesto strata (the hero, once ADR-048 ratifies at DP2), per the transition rule
mission P4.5 formalizes. Content is intentionally `honest-absent` in the seed file pending P0.1 and P4.5.

## Patterns currently consumed

| Pattern | WebForge locus | How it's consumed here |
|---|---|---|
| **P13** — Deploy orchestration (`deploy_prebuilt.sh`, `inject_headers.mjs`, HSTS ladder, `redact_vercel.sh`) | `WebForge.aDNA/what/lib/deploy/` | Adapted in-lane by mission P0.2 (deploy hardening) — consumer-lane single-build, not a copy. `VERCEL_TOKEN_ADNA` stays WebForge's own parked roster item (S9, Bitwarden-gated); this vault uses its existing `SS_VERCEL_TOKEN` in the interim, per P0.2's constraint to coordinate rather than duplicate or wait on WebForge's wave |
| **P11** — Provider contract v1.2.0 (§3 intake, §4 build authority, §5 pins, §8 update protocol) | `WebForge.aDNA/what/artifacts/spec_webforge_provider_contract.md` | This wrapper *is* its §3/§5 execution |

Full register (all 15 families, maturity + adoption gaps): `../../campaigns/campaign_haussmann/artifacts/webforge_pattern_register.md`.

## Patterns to author (owed back to WebForge)

From `webforge_pattern_register.md` §2 + `context_webforge_patterns.md` — HAUSSMANN needs these and WebForge
does not yet have them; each lands during P1–P5 and gets **authored back**, never solved as a permanent local
fork (campaign convention 4):

| ID | Pattern | Nearest WebForge asset | Landing mission |
|---|---|---|---|
| A1 | `.md`-twin content-negotiation emission | `emit_llms.mjs` (llms.txt only — FR-N family extension) | P3 |
| A2 | Docs-MCP-server module (npx-runnable stdio server over docs+registry) | none | P3 |
| A3 | Static registry-JSON emission for Tier-A registries | marketplace data-binding seam | P3 |
| A4 | Numbered proposal-process surface (states, archive, immutable numbers) | none | P3 |
| A5 | Static/no-JS network-map variant | `node_home` `/map/` (88 Béziers, JS-based) | P1 — only if the site's needs prove the map JS-dependent |
| A6 | Cold-reader / TTFS instrument kit | none | P5 (genesis seeded) |

Plus: this vault's `art_direction.yaml` entry (not yet authored — see Pending) will be the first live
implementation test of WebForge's **proposed-but-unbuilt** art-direction ceiling engine (pattern P5) —
reported back honestly, implementation pressure included.

## Pending with Vitruvius

1. **The §3 intake ask was DELIVERED 2026-08-16** — `who/coordination/coord_2026_08_16_rosetta_to_vitruvius_haussmann_intake_deploy_patterns.md`
   (dispatched under Gate C operator GO). Awaiting: (a) Vitruvius's classification reply; (b) the consumer-register
   row in `webforge_consumer_register.md` (Vitruvius/Hestia's lane to write, Rule 10 — never written here).
2. **Two clarifications asked, unanswered as of this wrapper's creation (2026-08-16):**
   - Whose `site` does `lock_coverage.yaml`'s `site` surface row (one of 14 columns) denote — WebForge's own
     self-site, or a reservation for this one? (`WebForge.aDNA/what/lib/gates/lock_coverage.yaml`, row
     confirmed present at read time — `enforced` cells already populated for several locks.) This resolves
     before mission P4.2 needs to write the site's own coverage declaration.
   - The craft-floor graduation (below) — anything Vitruvius needs from Rosetta to formalize the acceptance.
3. **Token-migration memo intake** (`VERCEL_TOKEN_ADNA`) — handled by mission P0.2 (deploy hardening), not
   duplicated here; P0.2 coordinates with WebForge's parked S9/Bitwarden-gated wave rather than waiting on it
   or re-asking separately.
4. **`what/context/art_direction.yaml`** — the consumer-wrapper template
   (`WebForge.aDNA/what/artifacts/template_webforge_consumer_wrapper.md`) specifies this as a required
   **SIGNATURE step**: an operator-ratified `signature_element`, DCRIT `dc_06` pre-checked before any build
   reads it. That is explicitly **P5 in the pattern register** — a P4 visual-voice mission's deliverable, not
   this intake mission's. **Not authored here; its absence is not a P0.3 gap.**
5. **`site/branding.json` duplication (finding, not yet resolved)** — this vault already had a live
   `site/branding.json` (and a `site/src/styles/branding.css` generated from it) predating this wrapper,
   itself already ADR-032-accurate (colors/fonts cross-verified, no conflict). That is precisely the
   contract §11 anti-pattern #2 ("no `site/`-only branding") this wrapper's `branding.json` now fixes
   *structurally* — but reconciling `site/` to consume the wrapper copy as canonical (or vice versa) is
   **not done by this mission** (P0.3's constraint: no `site/` changes). Candidate follow-up: mission P4.1
   (token pipeline adoption).

## Craft-floor graduation ruling

`WebForge.aDNA/what/doctrine/doctrine_web_surface_craft_floor.md` frontmatter records:

> `graduation: offered_to_aDNA.aDNA (Tier 2, mission_graduation_sweep) — Rosetta decides home`

Ruling (recommendation: **ACCEPT, with-scope** — the concrete 57-lock coverage declaration deferred to
mission P4.2): drafted at
`../../campaigns/campaign_haussmann/artifacts/p0_3/graduation_ruling_draft.md`. **Unsigned** — the operator
or the orchestrator signs at mission close or a later campaign gate; this wrapper file states the offer and
points at the ruling, it does not itself ratify anything (campaign §7.7 discipline: agents author, operators
ratify).
