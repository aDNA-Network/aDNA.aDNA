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
| **P4** — DTCG token pipeline, **VALIDATORS ONLY** (⛩ ADR-059 (c), 2026-08-23) | `WebForge.aDNA/what/lib/tokens/` (`check_aa.py`, `conformance.py` KW-10 rule) | `site/scripts/token_aa_check.py` **imports** the pair table + contrast math (never copies) and supplies its own resolver; the KW-10 colour-function rule is adopted **scoped** as gate-25 **G25b**. **Emission diverged and formally pinned** — see the section below |
| **P5** — Art-direction register / ceiling engine | `WebForge.aDNA/what/doctrine/art_direction_register.md` | `what/context/art_direction.yaml` authored 2026-08-23 (⛩ ADR-053 (a)). WebForge's engine is `PROPOSED — not built`, so this entry is its **first live consumer test case**; implementation pressure owed back |

Full register (all 15 families, maturity + adoption gaps): `../../campaigns/campaign_haussmann/artifacts/webforge_pattern_register.md`.

## Token substrate — FORMALLY PINNED DIVERGENCE (ADR-059, ⛩ ratified 2026-08-23)

> **Pattern P4 (DTCG token pipeline) is adopted for its VALIDATORS and diverged from for its
> EMISSION.** Ruled at ⛩ DP8, option (c). Authority: `what/decisions/adr_059_token_substrate.md`
> (`accepted`). This is the §5-required record of the divergence, its rationale, and its review
> condition — it is a **pin, not a permanent exemption**.

**Adopted.** WebForge's contrast audit, consumed **by reference** — `site/scripts/token_aa_check.py`
imports `check_aa.PAIRS` and `check_aa.ratio` from `what/lib/tokens/` and supplies only its own
resolver, because this site's token layer is hand-authored CSS rather than compiled DTCG. Plus a
**scoped** adoption of `conformance.py`'s KW-10 colour-function rule as **gate-25 G25b**.

**Diverged.** The site's tokens are **not** compiled from WebForge's DTCG source, **no ceiling is
assigned**, and `derive_tenant_ceiling.py` is **not** run against `site/`.

### Why (the short form; the argument is ADR-059 §§1–3)

1. **`tokyo_night` is not this site's seed** — the pattern register said *"convergence is natural"* and
   that line is **withdrawn**. It is filed under `ss_ceilings` as *"SS app canon (dark-only)"*, declares
   `appearances: ["dark"]`, ships only `primitives.dark.json`, and is the **`anti_signature` in
   WebForge's own filled fixture**. Adopting it would delete this site's light mode — a protected asset
   (dark/light parity + an axe-0 record verified in both themes).
2. **The hand-authored layer is a repair history, not a default.** `--color-success` sits at
   `hsl(142 72% 26%)` because 40% lightness failed AA at 2.46:1 on a success tint; `--space-5/10/20`
   exist because ~25 live declarations were silently collapsing to `initial`. A regenerated ramp is
   perceptually principled and does not know any of that.
3. **The derivation engine is unproven here.** Convention 14: not believed until demonstrated to fail.

### Review condition — what re-opens full adoption

A derived tenant ceiling diffed against the live CSS **under a working AA check**, showing no
regression in either theme. That check now exists (`token_aa_check.py`, red-proven three ways), so the
blocker is the diff, not the instrument. **Adoption was premature by exactly one instrument, and this
pin is what holds the door open rather than closing it.**

### What the two adopted gates actually cover — and what they do not

| Gate | Covers | Blind to |
|---|---|---|
| `site/scripts/token_aa_check.py` | WCAG AA contrast on **resolved token values**, both appearances, WebForge's pair table + 8 consumer pairs | Anything not expressed as a token pair; rendered-page composition (that is gate-4/axe) |
| gate-25 **G25** | raw `#hex` in `src/**` CSS + `.astro <style>` | `hsl()`/`rgb()` forms; `<script>`; token files |
| gate-25 **G25b** *(new)* | colour-function **literals** in the same surfaces | SVG markup attrs, inline `style=`, named colours, `<script>` — all **deliberately** out of scope |

⛔ **`conformance.py --strict-leak` is NOT adopted wholesale, by ruling.** Its byte-identity half is
inapplicable (nothing here is generated from that source). Its leak half, measured against this site,
fires ~**400** times — 308 SVG `fill`/`stroke` attrs (mostly `fill="none"`, the rest illustration
assets that **ADR-053 just made a normative part of the visual voice**), 64 token-based `color-mix()`
forms its own regex is anchored to skip, 4 warn-only named colours. It would buy ~400 allowlist rows to
surface three real items. G25b surfaces those items — and found **seven**, in two files, not the three
predicted.

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
4. ~~**`what/context/art_direction.yaml`** — not authored here; its absence is not a P0.3 gap.~~
   ✅ **AUTHORED 2026-08-23** at HAUSSMANN P4.1 (`what/context/art_direction.yaml`), with the
   operator-ratified `signature_element` the template requires as its **SIGNATURE step** — ⛩ ADR-053 (a),
   *"the contained pixel-art panel"*, plus the five-slot table and a three-clause `anti_signature` whose
   first clause is *"not SS's tokyo-night app canon"*. `status: proposed` until O1's remaining limbs land.
   **Still owed to Vitruvius**: this is the **first live consumer entry** against a P5 engine that is
   `PROPOSED — not built`, so the implementation pressure is real and reportable (see the memo below).
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
