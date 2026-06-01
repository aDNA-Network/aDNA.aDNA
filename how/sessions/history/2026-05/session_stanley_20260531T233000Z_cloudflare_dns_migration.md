---
type: session
session_id: session_stanley_20260531T233000Z_cloudflare_dns_migration
tier: 2
created: 2026-05-31T16:00:00-07:00
updated: 2026-05-31T16:30:00-07:00
status: completed
persona: rosetta
operator: stanley
last_edited_by: agent_rosetta
campaign: out-of-band   # v8 campaign_adna_serious_tool_readiness is paused (M5.7 gate); this was an operational infra interlude
mission: out-of-band    # cross-vault DNS migration; bookkept via ADR-031 + wga M02 + SS M14
intent: "Set up aDNA.network, then transition it + worldgeno.me + stanley.science to Cloudflare DNS (per the operator's original ask, which surfaced ADR-031 — Cloudflare is the now-ratified DNS standard). Onboard the CF API token to the Home.aDNA broker, graduate a reusable cutover skill into SiteForge, and sweep DNS context across the affected vaults."
token_budget_estimated: "~250-350 kT (3 live cutovers + canonical redeploy + credential onboarding + skill authoring + cross-vault sweep + 3 plan-mode cycles)."
tags: [session, cloudflare, dns, cutover, adr_031, siteforge, credential_broker, adna_network, worldgeno_me, stanley_science, email_continuity, vercel, out_of_band, infra]
---

# Session — Cloudflare DNS migration (3 domains live)

Operational interlude while the v8 campaign is gated (M5.7). Originating ask: "get the aDNA site on aDNA.network … consider transitioning to Cloudflare." That surfaced **ADR-031** (Cloudflare as core DNS standard, proposed earlier the same day) — so the whole arc became the standard's first executions.

## Outcome — 3 domains migrated Squarespace/Google DNS → Cloudflare → Vercel

| Domain | Vault | Result |
|---|---|---|
| **adna.network** | aDNA.aDNA | ✅ LIVE — was a Squarespace parking page; now the canonical aDNA site (canonical flipped adna.dev→adna.network; adna.dev abandoned). Mailgun email preserved. |
| **worldgeno.me** | wga.aDNA | ✅ LIVE — wga M02 closed (Squarespace harness abandoned); SPF `-all` + DMARC `p=reject` lockdown preserved; III unpaused at c92. (HTTPS cert finalized post-cutover; http-01 accepted.) |
| **stanley.science** | ScienceStanley.aDNA | ✅ LIVE — **live production Google Workspace email preserved** (5 MX + SPF + 2048-bit DKIM, verified round-trip, zero disruption); SS M14 closed. |

Each cutover: operator hands-on = **one nameserver change** (the CF token was created once, on the first).

## Also shipped

- **Credential:** `CLOUDFLARE_API_TOKEN` onboarded to the Home.aDNA broker (Keychain primary + ACL + zshrc + inventory C47; broker process enriched it as the canonical DNS-ops substrate). 1P backup field = operator Touch-ID follow-up.
- **Skill graduated to SiteForge:** `skill_cloudflare_dns_cutover.md` v1.0.0 + `sf_cloudflare_dns_patterns.md` + AGENTS index + STATE — SiteForge now owns DNS go-live (5th pipeline step; consumers federate via `federation_ref_dns`).
- **ADR-031** ratified `proposed`→`accepted` (operator endorsement + 3 instances). Legacy `skill_vercel_squarespace_domain_cutover` + SS/wga `audit/` harnesses marked legacy.
- **Sweep:** `federation_ref_dns` in SS + wga `siteforge/` wrappers; `audit/_LEGACY.md` markers; memory `project_cloudflare_dns_standard`.

## AAR (5-line)

- **Worked**: Cloudflare API path is genuinely turnkey — each cutover was zone-create + record-mirror + one operator NS change, fully agent-driven. **Email continuity held across all 3** (the make-or-break for the production stanley.science cut). Graduating the skill from the first instance made #2/#3 near-zero-effort. Baselines saved for rollback.
- **Didn't**: (1) `SS_VERCEL_TOKEN` leaked *again* in a Vercel-CLI error → **rotate** (recurring). (2) adna.network's canonical redeploy failed as a Vercel *source* build (`prebuild` reaches `../scripts`) → fixed via local prebuilt build + `vercel deploy --prebuilt`. (3) The clipboard token got overwritten before first capture (caught by shape-check before storing garbage). (4) 1P backup needs operator Touch ID (non-TTY).
- **Finding**: Cloudflare zone auto-import imports **nothing** — every record (esp. DKIM/DMARC) must be recreated explicitly; encoded in the skill. Account-owned CF tokens fail `/user/tokens/verify` but work on `/zones`. A domain already on CF can live in a *different* account than the token.
- **Change**: Cloudflare is now the ratified DNS standard (ADR-031 accepted); SiteForge owns the cutover capability; the legacy Squarespace path is retired.
- **Follow-up**: rotate `SS_VERCEL_TOKEN`; add 1P `Cloudflare/api_token` backup; migrate ADR-031 backlog domains (ContextCommons / RareArchive / ZenZachary / LatticeAgent) as each next touches DNS; optional DMARC add for stanley.science.

## SITREP

- **Completed**: 3 domains live on Cloudflare; CF token brokered; SiteForge skill graduated; ADR-031 accepted; M02 + M14 closed; cross-vault DNS sweep; all touched vaults committed + pushed.
- **Blockers**: none. (worldgeno.me HTTPS cert was finalizing at session end — http-01 accepted, issues automatically.)
- **Files touched**: aDNA.aDNA (ADR-031, STATE, astro.config, this session); SiteForge.aDNA (skill + patterns + AGENTS + STATE + deploy-skill xref); wga.aDNA (M02 + AAR + STATE + wrapper + audit legacy); ScienceStanley.aDNA (M14 + wrapper + audit legacy + baseline); Home.aDNA (inventory C47, local).

## Next Session Prompt

The 3-domain Cloudflare migration is done and ratified (ADR-031 accepted). To continue the DNS program: the next site-vault that touches DNS migrates to Cloudflare via `SiteForge.aDNA/how/skills/skill_cloudflare_dns_cutover.md` (token already in the Keychain broker; one operator NS change per domain). Backlog domains: ContextCommons, RareArchive, ZenZachary, LatticeAgent. **Operator carry-items**: rotate `SS_VERCEL_TOKEN`; add the 1P `op://Personal/Cloudflare/api_token` backup. Separately, the v8 M5.7 planning mission remains gated behind the aDNALabs rebrand brief (unchanged by this interlude).
