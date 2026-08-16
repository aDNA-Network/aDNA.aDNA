---
type: evidence
packet: B7
subject: community_property_assessment_flux
target: https://community.adna.network
campaign_id: campaign_haussmann
created: 2026-08-16
updated: 2026-08-16
last_edited_by: agent_stanley
status: draft
observation_mode: outside_only_unauthenticated
tags: [evidence, haussmann, flux, fluxer, community, assessment, outside_only]
---

# B7 — Community Property Assessment: community.adna.network (OUTSIDE-ONLY)

**Provenance tags (mandatory, used throughout):**
- **[D]** — direct outside observation, this session (2026-08-16, ~17:00 UTC): unauthenticated HTTPS GETs only. No account created, no login attempted, no captcha interacted with, no form submitted. 12 requests total: `/` + the 10 enumerated paths on the target, plus `adna.network/community` for the link check.
- **[R]** — vault record (Fluxer.aDNA, aDNALabs.aDNA), read-only; file + line cited.
- **[A]** — assumption / inference; explicitly marked.

**Binding constraints this packet operates under [R]:**
- **ADR-025 (aDNALabs/Operations, RATIFIED)** — verified at `aDNALabs.aDNA/who/coordination/coordination_index.md` **line 42** (S180 row, 2026-08-14), exact wording: *"**community.adna.network = HUMAN surface only** until federation GA (Fluxer ADR-001 R1/R2 stand; an agent-exchange build would fire aDNANetwork **ADR-009 T1** → its own gate; ⚠ the instance is LIVE on Mahdi's metal + Fluxer.aDNA's STATE doesn't know — staleness flagged)."* ADR home: `Operations.aDNA/what/adrs/ADR-025-coordination-architecture-pull-federation.md`.
- **Fluxer SO#8** — `Fluxer.aDNA/STATE.md` §Carried facts: *"the Agora ethos constraint (no syndication; disclosed agents; consent tiers) binds every mission (SO#8)."* No LLM syndication of conversations; agents always disclosed.

---

## 1. Platform observation [D]

### Root (`/`)
- **HTTP/2 200**, served **via `1.1 Caddy`**, valid TLS, HSTS `max-age=31536000; includeSubDomains; preload`. Remote IP at fetch time: `192.71.171.163`.
- **Title:** `Fluxer` (stock).
- **Meta description:** stock upstream marketing copy — "Fluxer is a free and open source instant messaging and VoIP chat app built for friends, groups, and communities." No aDNA language anywhere.
- **Favicon / icons:** stock Fluxer set at `/web/favicon-32x32.png`, `apple-touch-icon.png`, etc. Theme-color meta = `#4641D9` (Fluxer purple).
- **`/manifest.json` (200, 427 B):** `name: "Fluxer"`, `short_name: "Fluxer"`, stock description, stock icons, Fluxer purple. Pure stock.
- **Client shell:** SPA (`<div id="root">`, JS-required noscript notice); `/` client-redirects to `/channels/@me` (Discord-mold app shell).
- **The gold seam — `window.__FLUXER_BOOTSTRAP__`** (instance config embedded in the shell, machine-readable without auth):
  - `branding`: **every field null** — `favicon_url`, `icon_url`, `logo_url`, `symbol_url`, `wordmark_url` all `null`; `product_name: "Fluxer"`; `theme_color: "#000000"` (the sole non-default branding value). **Zero aDNA identity — confirmed.**
  - `legal`: **`privacy_url: null`, `terms_url: null`** — the instance is **policy-naked at the config level**, from outside, today.
  - `registration`: **`mode: "approval"`** + `admin_registration_urls_enabled: true`. Posture = **gated (approval-moderated), not open, not hard-closed**; admins can mint registration URLs (invite-adjacent lane).
  - `captcha`: **`provider: "none"`**, `hcaptcha_site_key: null`, `turnstile_site_key: null`. ⚠ The tasking brief stated hCaptcha is present; the observed instance config says **no captcha provider is active**. The CSP does whitelist `hcaptcha.com` / `*.hcaptcha.com` (stock upstream CSP — capability, not activation). Recorded honestly as a **briefing↔observation discrepancy**; no captcha was interacted with either way.
  - `setup.configured: true` · `features.self_hosted: true` · `emails_enabled: true` · `voice_enabled: true` · `stripe_enabled: false` · `direct_messages_disabled: false` (a T0 surface exists live) · `single_community: false`.
  - Endpoints: all self-hosted at `community.adna.network` (`/api`, `wss://…/gateway`, `/admin`, `/media`, `/invite`); **`marketing: "https://community.adna.network"`** — i.e. the instance's own "marketing" pointer is itself; **no backlink to adna.network exists anywhere in the shell**.
  - Compliance config: geoip age-blocks (US-MS) / age-restrictions (GB, BR) — stock. GIF provider KLIPY configured, `gif_enabled: false`. Public VAPID push key present (value omitted here; public-by-design).
- **Security headers:** CSP with per-request nonce, `frame-ancestors 'none'`, `X-Frame-Options: DENY`, `nosniff`, referrer-policy strict-origin-when-cross-origin. Competent stock hardening.

### Enumerated paths
| Path | Result [D] | Reading |
|---|---|---|
| `/login` | 200, same 2.3 KB SPA shell | client-side route; no server-rendered content |
| `/register` | 200, same shell | registration UI is client-side; posture only visible via config (`mode: "approval"`) |
| `/terms` | 200, same shell | **no terms document exists server-side**; config `terms_url: null` |
| `/privacy` | 200, same shell | **no privacy document**; config `privacy_url: null` |
| `/guidelines` | 200, same shell | no guidelines surface |
| `/about` | 200, same shell | no about surface |
| `/api` | 200, same shell (status only, per constraint) | API root not probed further |
| `/robots.txt` | 200, 23 B | **`User-agent: * / Allow: /`** — default-open to crawlers (stock; see §3e) |
| `/manifest.json` | 200 | stock Fluxer, as above |
| `/.well-known/security.txt` | 404 | absent |

All SPA routes return the same shell (byte-differences are the per-request CSP nonce). **Net: every policy surface is absent — "policy-naked" is confirmed from outside, twice over (null config fields + no route content).**

---

## 2. Vault-record cross-reference [R]

Source of truth read: `Fluxer.aDNA/STATE.md` (updated 2026-07-11, `status: chartered_genesis_p3_executing_v1_2_deploy_prep_fluxerhost`), `what/context/fluxer/agora_loop_spec.md`, `what/context/fluxer/channel_bot_blueprint.md`; `aDNALabs.aDNA/STATE.md`.

**The staleness, verified [R]:** Fluxer STATE still declares *"**Nothing is deployed.** No Fluxer instance exists; no credentials exist"* (STATE.md line 37). aDNALabs STATE.md **lines 188–190** (S180 close block; the brief's "~174" pointer resolves here) carries the counter-record: *"Fluxer.aDNA STATE is stale — `community.adna.network` is LIVE on Mahdi's metal (Caddy applied 08-05) while its STATE still says nothing-provisioned; ADR-025 D5 cites the live instance. Route at the next Fluxer/Aspasia touch."* The observed `via: 1.1 Caddy` header [D] corroborates the Caddy-front record. Fluxer STATE's last-known plan (2026-07-11) was a **fluxer.host partner-infra pivot**; whether "Mahdi's metal" = the fluxer.host partner is **unconfirmed [A]** — an operator question (§6 Q2).

**What the vault holds vs what outside observation can verify:**

| Vault record [R] | Outside-verifiable? |
|---|---|
| **Moderation model** — disclosed bot cohort Warden (moderation-assist, never harvests) · Herald (convene + report-back) · Scribe (harvest + distill) · Porter (onboarding) · Courier (threads→tasks); build order Warden → Herald+Scribe → Porter → Courier confirmed at G2 (`channel_bot_blueprint.md` §C; STATE 2026-07-11) | **No.** Bot presence/labels live behind auth. Nothing outside indicates any bot is deployed. Vault-record-only. |
| **Identity model** — M6 discipline: captcha-ON · operator seats first account before any URL is shared · registration closed via API immediately after (STATE ⏭ Resume-Here block) | **Partially — and it diverges.** Observed: registration `mode: "approval"` (not "closed") and captcha `provider: "none"` (not ON) [D]. Whether the first-account ceremony ran: unverifiable outside. **Two config-level drifts from the vault's own deploy discipline — or the discipline evolved off-vault-record, consistent with the known staleness [A].** |
| **Consent tiers T0–T3** — T1 harvest-on (pinned disclosure verbatim, R-12) · T2 opt-out via 🔕 reaction / `no-harvest` role · T3 opt-in per thread · T0 never (DMs, private, any community we don't operate) — ADR-003 accepted 2026-07-11 (`agora_loop_spec.md`; blueprint §A/§B) | **No.** Channel pins/topics are behind auth. Vault-record-only. Note: DMs are enabled live [D] — a T0 surface exists on the instance. |
| **Harvest doctrine** — Agora Loop 6 stages (Convene→Discourse→Harvest→Distill→Link→Report-back); gateway+REST pipeline; discard-not-store consent gate; provenance schema v1; right-to-erasure propagation; *"never web syndication"* ethos wall (`agora_loop_spec.md`) | **No** — and nothing outside suggests any harvest is running (no public content surface exists at all, which is itself consistent with the no-syndication wall). Vault-record-only. |
| **19 open `#needs-human` counsel items** across ethos + licensing notes (STATE intake log, P1 recon 2026-07-08) | **No.** But their headline consequence — *"instance ships policy-naked"* — **is verified live** [D]: `terms_url`/`privacy_url` null, `/terms` `/privacy` `/guidelines` empty. The P1 finding persists in the deployed instance ~5 weeks later. |
| **EU CSAM-scanning derogation EXPIRED 2026-04-03** + BBS-lagen duties (STATE P1 recon) | **No** (legal posture, not observable). Still-open counsel context for any EU-facing traffic. |
| **Guild-export cap** — per-guild export exists (`POST /admin/archives/guild`, **1000-msg/channel cap** → ADR-006 caveat; register #12) | **No** (admin API; not probed — constraint). Vault-record-only. |
| **fluxer.host ToS bars LLM-training** on its content (D-3 governance delta, un-ruled as of the STATE record) | **No.** If the live host IS fluxer.host infra, D-3 interacts directly with the Agora harvest doctrine — operator question (§6 Q2). |

**Plainly: almost nothing in the vault's governance design is outside-verifiable.** What IS verifiable from outside is the negative space — no branding, no policies, no captcha, approval-mode registration, no backlink — and on the two points where outside evidence CAN touch the vault's deploy discipline (captcha, registration mode), **the live config diverges from the recorded plan.**

---

## 3. The six assessment answers

### (a) Current state: live / staging / empty / seeded?
- **Infrastructure-LIVE [D]:** HTTP/2 200, valid TLS + HSTS preload, Caddy front, `setup.configured: true`, `releaseChannel: "stable"`, gateway/media/admin endpoints all resolving on the domain, emails enabled.
- **Community-alive: UNKNOWN [A].** The auth wall + approval registration mean zero conversational or membership evidence is visible outside. [R] confirms the instance exists and is doctrine-cited (ADR-025 D5), live since ~08-05; nothing in any record read confirms guilds, members, or activity. **"Live" (the service) and "alive" (the community) are different claims; outside evidence establishes only the first.**

### (b) Visual + voice relationship to adna.network: coherent or two properties?
**Two properties — total divergence [D].** Title "Fluxer", stock meta description, stock manifest, stock favicon set, Fluxer purple, every branding config field null, zero occurrences of "aDNA" anywhere in the unauthenticated surface. Conversely, adna.network's /community page contains **zero occurrences of "fluxer"** [D]. A visitor crossing between them gets no signal they are related. (Notable [R]: the 2026-07-11 dry-run *proved* agentic rebranding works — the instance was renamed "aDNA Agora (dry-run)" via API — so the live deploy's stock branding is an unexercised, already-proven capability, not a platform limitation.)

### (c) Navigation: do they link to each other?
**No, in both directions [D].**
- `adna.network/community` (200): zero references to `community.adna.network`; the page's only external link is `github.com/aDNA-Network/aDNA`.
- `community.adna.network`: no reference to `adna.network` in shell, manifest, or config; its own `marketing` endpoint points at itself.
The two properties are navigationally disconnected today.

### (d) Governance mapping: the main site's participation ladder vs Flux, under ADR-025 human-only
Ladder as observed live on `/community` [D]: **Level 0 User** ("clone the standard and use it") · **Level 1 Contributor** ("approve the improvements your agents surface…") · **Level 2 Quest Runner** ("run structured community experiments and submit…") · **Level 3 Steward** ("shape the standard's direction… recognized by maintainers, never self-appointed").

Which rungs COULD Flux serve, human-only:
- **L0 User — yes, thinly:** human help/support channels ("I cloned it, now what?"). Highest-volume, lowest-governance rung; also the rung most exposed to the missing policy floor.
- **L1 Contributor — yes:** human discussion *around* contributions. The agent half of L1 (agents surfacing improvements) stays on git/graph surfaces — under ADR-025 it cannot move onto the instance.
- **L2 Quest Runner — strongest fit:** quest coordination and cohort discourse is exactly the vault's own scenario library (48h hackathon cohort; war-room channels [R]) and is inherently human coordination.
- **L3 Steward — partially:** steward *deliberation* fits; steward *acts* (recognition, ratification, migrations) must stay on the durable record (forge/graph), never chat. Chat is where stewards talk, not where governance lands.
- **Cross-cutting [R]:** the Agora Loop's harvest of any of this discourse is a *later* layer gated on ADR-003 signage being live in-channel; and the disclosed bot cohort — even though R3 (human-facing social) is the *accepted* pilot role [R: ADR-001] — should be treated as gated by its own missions (M9/M10) and re-checked against ADR-025's human-only wording before any bot account is seated. Nothing outside indicates any of this exists yet.

### (e) Machine legibility: should community content be agent-navigable?
**Not web-navigable — by doctrine, no. Graph-navigable via consent — yes, later.** The governing distinction is the vault's own ethos wall [R]: *harvest-with-consent lands in the graph; it is never web syndication* — reinforced by SO#8 (no LLM syndication of conversations) and ADR-025 (human-only surface until federation GA). Concretely:
- **No public feeds, no crawlable conversation content, no llms.txt for chat, no JSON syndication of discourse.** Today the SPA+auth wall enforces this de facto [D].
- The sanctioned machine path is the **Agora Loop**: disclosed Scribe, T1-pinned channels, opt-out honored, provenance schema, report-back — landing in the owning community's graph segment, never on the web [R]. That path activates at its own gates, not before.
- **Small misalignment worth fixing [D]:** `robots.txt` is stock default-open (`Allow: /`). Nothing conversational is actually crawlable, but a deliberate robots posture (and eventually a security.txt, currently 404) would make the doctrine legible at the infrastructure layer instead of accidental.
- Instance *metadata* (the bootstrap config) is already machine-readable and harmless — that level of legibility is fine and useful.

### (f) Launch-readiness → §4.

---

## 4. Readiness verdict

**NOT ready to receive traffic from the main site. Linking today is net-negative.**

What a visitor clicking through would experience today [D]: a **stock Fluxer login wall** — no aDNA identity, no explanation of what this instance is, **no terms, no privacy policy, no guidelines**, and a registration flow that (per config) ends in an approval queue no surface explains. Every element of that sentence is outside-verified.

Applying the campaign frame — *"linking prominently to a community venue that is not alive is prohibited"*:
- **What outside evidence shows:** the venue is *infrastructure-live* but gives **zero outside evidence of being alive**, and independently fails three static floors that don't require seeing inside: **policy floor absent** (verified twice: null config + empty routes), **identity floor absent** (zero aDNA branding), **navigation floor absent** (no backlink; a visitor cannot even confirm they're in the right place).
- **What outside evidence cannot show:** whether the community is seeded/active behind the wall (members, guilds, discourse). Closed/approval registration makes aliveness **operator/Aspasia-confirmable only**. The prohibition therefore cannot be *cleared* from outside even if the static floors were fixed — inside confirmation is a hard prerequisite to any link.
- **Additional exposure [R]:** sending traffic into a policy-naked instance while 19 counsel items (incl. the expired EU CSAM derogation context and un-ruled D-3 host-ToS delta) remain open converts a dormant paper risk into a live-traffic one.

**Net:** the main site's credibility (its honesty pattern is a load-bearing asset) would be spent on a venue that currently reads as an unexplained stock Fluxer install. Hold the link.

---

## 5. Integration-design options + recommendation

| # | Option | Pros | Cons | Prerequisites |
|---|---|---|---|---|
| **O1** | **Full first-class integration** — shared design system, bidirectional nav, ladder rungs mapped to channels | Coherent single property; strongest community signal; matches the R3 pilot ambition [R] | Heaviest lift; outruns governance (policy floor, M8 obligations, bot gates, federation GA for the agent layer); highest blast radius if the community isn't alive yet | Policy floor · full branding pass · seeded-alive community · ladder mapping ratified · ADR-003 signage live · Aspasia STATE refreshed; agent-layer parts gated on federation GA (ADR-025) |
| **O2** | **Soft-link now** with explicit "early — policies pending" disclosure | Honest about state; cheap; starts the flywheel | The disclosure lives on OUR side of the click — the far side is still a policy-naked, unbranded login wall; "policies pending" on a chat platform (DMs enabled, a T0 surface live [D]) is materially worse than on a static site; alive-ness unconfirmed | Inside confirmation of aliveness at minimum — which O2 skips the rest of |
| **O3** | **Hold the link until a policy floor (ToS/CoC/privacy) + minimal aDNA branding exist** | Respects the vault's own P1 finding and M8 charter [R]; the fixes are small, config-level, and **already agentically proven** (dry-run rebrand; `legal.terms_url`/`privacy_url` are settable fields [D]) — days of work, not weeks; converts the link from liability to asset | Delays community momentum; requires an operator/Aspasia cycle that is currently un-scheduled (STATE stale) | Operator/Aspasia session: author minimal ToS/CoC/privacy (M8-lite) · set `legal.*` + `branding.*` config · confirm registration/captcha posture deliberately · confirm aliveness inside |
| **O4** | **Link only from `/community` with an honest state description** (the site's existing honesty pattern) | Lowest prominence; pattern-consistent; contains expectations | Honesty on the near side still cannot cure the far side (§O2 con); still requires aliveness confirmation to clear the prohibition | Same aliveness confirmation; ideally the O3 floor |

**Recommendation: O3, sequenced into O4 — then O1 at federation GA.** Hold the link until the policy floor + minimal branding land (both are small, config-level, dry-run-proven acts) **and** the operator/Aspasia confirms the venue is alive inside. Then link **only from `/community`** with the site's honest-state pattern (O4 as the *landing posture* of O3, not an alternative to it) — the /community page already hosts the participation ladder, making it the natural single mount point. Graduate toward O1 only when the community is demonstrably alive and the agent layer unlocks at federation GA. O2 is rejected outright: it spends the site's honesty pattern to route humans into a surface that has no terms, no privacy policy, and no identity — the one outcome the pattern exists to prevent.

---

## 6. Open questions only the operator or Aspasia can answer

1. **Aliveness inside:** are there guilds, members, and real discourse behind the wall? (Outside evidence cannot clear the "not alive → no link" prohibition.)
2. **Host identity + D-rulings:** is "Mahdi's metal" [R: aDNALabs STATE 188–190] the fluxer.host partner infra from the 07-11 pivot [R: Fluxer STATE], or a third host? Were the three gating deltas ever ruled — **D-1** (ADR-002 topology amendment), **D-2** (Venus §8 on third-party infra), **D-3** (fluxer.host ToS-bars-LLM-training vs the Agora harvest doctrine)? Is real data being persisted ahead of those rulings?
3. **Registration posture:** observed `mode: "approval"` [D] vs the M6 discipline "registration closed via API immediately after" [R] — deliberate evolution or drift? Was the operator-seats-first-account ceremony run before the URL circulated?
4. **Captcha:** observed `provider: "none"` [D] vs M6 "captcha-ON" [R] (and vs this packet's briefing, which asserted hCaptcha present) — which is intended?
5. **Policy floor ownership:** who authors the minimal ToS/CoC/privacy, and does M8 (obligations baseline; the 19 counsel items, EU CSAM derogation context, BBS-lagen) get scheduled — or does a lighter interim floor ship first?
6. **Branding:** apply the dry-run-proven rebrand (product_name, icons, `legal.*` URLs)? Is there a ratified name for the venue ("aDNA Agora"? "aDNA Community"?) — noting "Operation Agora" naming was previously collided by Exchange [R].
7. **Harvest status:** is ANY harvest/bot activity running or planned near-term? (If yes: ADR-003 T1 pins must be live first; and the bot cohort's compatibility with ADR-025 human-only wording needs an explicit ruling.)
8. **STATE refresh:** when does Fluxer.aDNA/STATE get reconciled with reality? (aDNALabs flagged: "route at the next Fluxer/Aspasia touch" — this packet is downstream evidence for that touch.)
9. **Ladder mapping:** ratify which rungs Flux serves (§3d proposal) and the /community mount point + backlink plan.
10. **Robots/security.txt posture:** keep default-open `Allow: /` or express the no-syndication doctrine deliberately at the infrastructure layer?

---

*Method note: all [D] observations from 12 unauthenticated GETs on 2026-08-16 (~17:00 UTC): `community.adna.network` `/`, `/login`, `/register`, `/terms`, `/privacy`, `/guidelines`, `/about`, `/api` (status only), `/robots.txt`, `/manifest.json`, `/.well-known/security.txt`; plus `adna.network/community`. No authentication, no account creation, no captcha interaction, no form submission, no aggressive probing. Vault sources read-only: `Fluxer.aDNA/STATE.md` · `what/context/fluxer/agora_loop_spec.md` · `what/context/fluxer/channel_bot_blueprint.md` · `aDNALabs.aDNA/STATE.md` (lines 160–195) · `aDNALabs.aDNA/who/coordination/coordination_index.md` (line 42). Related campaign context: [[campaign_haussmann]] evidence tree.*
