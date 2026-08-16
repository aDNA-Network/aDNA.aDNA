---
reviewer: B
site: https://modelcontextprotocol.io
archetype_scored: B (protocol/standard) — nearest-B per Phase 0 tasking; weights = B×E column (§5)
date: 2026-08-16
disclosure: agent-scored (independent reviewer B, Claude agent). Evidence = live fetches only (text/HTML/HTTP + one MCP handshake); no browser rendering. D5 and D11 scored from text evidence only, tagged [I], reduced confidence. No other reviewer's artifacts were read.
instrument: OPERATION_VITRUVIUS_review_instrument.md v1.0
type: scoresheet
status: submitted
last_edited_by: agent_reviewer_B
---

# Scoresheet B — modelcontextprotocol.io

Method note: evidence collected 2026-08-16 via direct fetches: homepage (serves docs intro), `/llms.txt`, `/llms-full.txt` (2.36 MB, HTTP 200), `robots.txt`, `sitemap.xml` (342 URLs), `.md` twin probes, `/community/governance`, `/community/sep-guidelines`, `/registry/about`, `/specification/2026-07-28`, build-server tutorial, `/examples.md`, security-header inspection, URL-hygiene probes, and a successful JSON-RPC `initialize` POST to `/mcp`. §6 steps not executable here: cold-reader panel (5), clean-VM TTFS (6), contribution run (7), rendered capture (2), automated a11y sweep (3) — affected scores carry [I].

## Score table

| Dim | Score | Evidence (2–4 lines) | Prov |
|---|---|---|---|
| D1 Positioning | 4 | Hero: "MCP is an open-source standard for connecting AI applications to external systems" + USB-C metaphor that does real explanatory work; audiences named (developers / AI apps / end-users); CTAs match archetype (Build servers / Build clients / spec). S: definition uses known category nouns, zero abstraction ladder. W: no explicit negative space ("this is not X") in first screen; anchor-5's cold-reader condition unmeasured. | [D] copy; [A] reader effect |
| D2 IA & nav | 4 | Six clean top-level areas (Docs / Specification / Registry / Community / SEPs / Extensions); date-versioned, machine-predictable URLs; old URLs redirect (`/clients` → docs intro, `/registry` → `/registry/about`); trailing-slash canonicalizes; `/Docs` correctly 404s (case-consistent); 342-URL sitemap; llms.txt covers corpus (low orphan risk). S: URL scheme is machine-predictable. W: registry browse UX is delegated to aggregators, so anchor-5 "faceted catalogue" is unmet on-site; search affordance not verifiable without rendering. | [D]; search [I] |
| D3 Onboarding/TTFS | 4 | Build-server tutorial: "Prerequisite knowledge" + "System requirements" sections up front, complete code in multiple SDK tabs, 3 troubleshooting sections, escape hatches to Discord/Discussions. Use-a-server path is one command (`npx -y @modelcontextprotocol/server-memory`). S: prerequisite honesty + troubleshooting depth. W: no zero-install/hosted playground for evaluators (blocks 5); build path realistically 10–30 min (needs Claude Desktop install + config edit); no clean-VM stopwatch run performed. | [D] content; timing [I] |
| D4 Documentation | 4 | Diátaxis-shaped IA visible in URL structure: getting-started / learn (explanation) / tutorials + develop (how-to) / specification (reference, RFC-2119 keywords, authoritative TypeScript schema); docs versioned by date in the URL with per-version changelog (`/specification/2026-07-28/changelog` 200); "Was this page helpful" feedback widget. S: version-pinned docs+spec on one scheme. W: no per-page last-updated dates or "edit this page" link observed in fetched HTML; examples-tested-in-CI unverified (blocks 5). | [D]; CI [A] |
| D5 Visual craft | 3 | Text/HTML evidence only — no rendering; reduced confidence. Mintlify platform: consistent token/theme enforcement by the platform (Inter + mono font variables, dark mode class, consistent component vocabulary), diagram images carry alt and consistent excalidraw style. S: platform-enforced consistency, near-zero drift risk. W: no published design system of its own; default-platform register rather than a distinctive visual voice; responsive/states unverified. | [I] |
| D6 Content & voice | 4 | Single sober technical register across all sampled pages; claims linked at true strength ("supported across… Claude, ChatGPT, VS Code, Cursor" each linking to the third party's own docs); registry preview status disclosed inline; no aspirational present tense observed; benefit bullets are concrete and demonstrable. S: claim discipline. W: no published voice guide or claim register (blocks 5); "What can MCP enable" bullets are capability-flavored but verifiable. | [D] |
| D7 Proof & credibility | 5 | Foundation-hosted ("Model Context Protocol a Series of LF Projects, LLC") with named Lead/Core Maintainers and emeritus list; independent adopters with linked third-party artifacts (OpenAI, VS Code, Cursor, MCPJam docs); registry "backed by Anthropic, GitHub, PulseMCP, and Microsoft"; licenses stated (Apache-2.0 code/spec, CC-BY-4.0 docs); exists-vs-planned honesty (registry "currently in preview. Breaking changes or data resets may occur"); roadmap linked. S: independent implementations verifiable outside founder control — the archetype's primary metric, met. W: no live metrics (star counts etc.) anywhere; no site-level `/security` page (404 — security content lives in spec/tutorials). | [D]; affiliations of maintainers [I] |
| D8 Community & governance | 5 | The reference implementation the instrument itself cites, confirmed independently: 4-rung ladder (Contributor→Maintainer→Core→Lead/BDFL) with canonical Contributor Ladder doc; numbered SEP process with 8 explicit states (draft/in-review/accepted/rejected/withdrawn/final/superseded/dormant), sponsor role, and a conformance-test gate before `final` (SEP-2484); WG/IG structure; biweekly Core meetings with public notes commitment; succession posture via LF Projects + emeritus roles; Discord venue linked. S: governance instantiated as process artifacts, not prose. W: Discord liveness not verifiable by fetch; maintainer affiliations deliberately unstated (individuals-not-companies doctrine). | [D]; venue liveness [I] |
| D9 Contribution funnel | 3 | SEP path is superbly documented (sponsor-finding tips, "if no response after 2 weeks, ask in #general", after-rejection guidance); contributing page + Discussions + Discord routes exist; SEP archive on-site with .md twins. S: the standards-contribution rung is the best-documented in the category. W: no published responsiveness metrics, good-first-issue population unverifiable from the site, no stated AI-assisted-PR policy — anchor-4 items unverifiable/absent, so capped at 3. | [D] process; funnel metrics [A] |
| D10 Machine legibility | 5 | Full stack verified: annotated `/llms.txt` (per-link descriptions); `/llms-full.txt` (2.36 MB); `.md` twin for every doc URL including SEPs (content-type `text/markdown`); every page injects a "Documentation Index" pointer advertising the agent entry point; "Copy page" affordance (×6 in intro HTML); JSON-LD ×2; deliberate AI-crawler posture (`Content-Signal: ai-train=yes, search=yes, ai-input=yes`); registry as REST API + published OpenAPI spec; date-versioned stable URIs; **live MCP server over its own corpus at `/mcp` — initialize handshake returned serverInfo "Model Context Protocol" with search/retrieval tools + submit_feedback** = demonstrated self-conformance. W: no RSS/Atom (404) — the sole gap. | [D] |
| D11 Accessibility | 3 | Text evidence only — no rendering, no axe run; reduced confidence. Positive: skip-to-content link, `lang="en"`, single h1, 33 aria-labels, meaningful alt on diagram images. Negative: 1 of 3 homepage imgs missing alt (potential axe critical, unresolved — could be a theme-variant duplicate); contrast/focus/keyboard untested. | [I]; markers [D] |
| D12 Performance & ops | 3 | HSTS + CSP + X-Frame-Options set (CSP loose: `unsafe-eval/unsafe-inline` in worker-src); Cloudflare+Mintlify hosting; redirect map maintained for legacy URLs; clean 404 semantics. W: no public status page found; CWV unmeasured (no render); CI budgets/link-checking unverifiable. | [D] headers; CWV [I] |

## Composites

Formula: Σ (score ÷ 5 × weight).

| Weighting | Composite |
|---|---|
| (a) Archetype-appropriate — **B×E column** (MCP scored as nearest-B) | **82.4 / 100** |
| (b) Cross-comparability — **B×E column** | **82.4 / 100** (identical: B×E is both the archetype-appropriate and the cross-comparability column for this site) |

Per-dimension contributions (B×E): D1 9.6 · D2 6.4 · D3 9.6 · D4 9.6 · D5 4.8 · D6 6.4 · D7 14.0 · D8 10.0 · D9 3.6 · D10 6.0 · D11 1.2 · D12 1.2 = **82.4**.

Gate note (§5): no gate can be cleared or failed from this evidence — a11y criticals and CWV were not measured [I]; one potential image-alt critical flagged for the rendering pass.

## Anchor ambiguities

1. **D3 — which quickstart defines TTFS for a protocol site?** MCP has two legitimate first-success paths: *use a server* (`npx -y …`, ~2 min) and *build a server* (10–30 min incl. Claude Desktop). The anchors assume a single quickstart; the score swings 3↔5 depending on which path the reviewer treats as primary. The instrument should state: score the path the homepage's primary CTA points at.
2. **D10 — the cumulative ladder breaks on rung-skippers.** Anchor 3 requires RSS; MCP has no RSS yet exceeds every anchor-4 and anchor-5 item (md twins, JSON-LD, API, live MCP server, self-conformance). Read strictly ("as 3, plus…"), MCP caps at 2; read as a basket, it earns 5. I scored basket-wise. Instrument should say whether anchor items are conjunctive or preponderant.
3. **D2 anchor 5 — "catalogue surfaces are faceted and demonstrably scale."** MCP's registry deliberately ships *no* opinionated browse surface: it is API-first and delegates curation/facets to downstream aggregators, stated on-page. Architecture choice or anchor miss? The anchor as written penalizes a defensible (arguably superior) design.
4. **D1 anchor 5 — condition requires an unrunnable method.** "Cold readers can state what it is not" needs the §6 Step 5 panel; a solo/agent reviewer cannot award 5 legitimately even for a hero this clean. Anchor conflates the condition with the measurement instrument.
