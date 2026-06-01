---
type: decision
adr_id: adr_031
adr_number: 031
title: "Adopt Cloudflare as the core DNS + registrar standard"
status: accepted
created: 2026-05-31
updated: 2026-05-31
ratified: 2026-05-31
last_edited_by: agent_rosetta
supersedes: none
superseded_by: none
related:
  - aDNA.aDNA/how/skills/skill_vercel_squarespace_domain_cutover.md
  - wga.aDNA/how/missions/mission_wga_m02_dns_cutover_worldgeno_me/mission_wga_m02_dns_cutover_worldgeno_me.md
  - ScienceStanley.aDNA/audit/squarespace_api_spike_findings.md
tags: [adr, decision, dns, cloudflare, squarespace, vercel, registrar, site-publishing, accessibility]
---

# ADR-031: Adopt Cloudflare as the core DNS + registrar standard

## Status

**accepted** — operator-initiated 2026-05-31 during the WGA `worldgeno.me` cutover (M02); **ratified 2026-05-31** at operator endorsement ("CF will be a great way to operate sites/dns/urls for our system/context") after **three validating instances in one session**:

1. **`adna.network`** (aDNA.aDNA) — first executed instance; Mailgun email preserved; canonical flipped.
2. **`worldgeno.me`** (wga.aDNA) — SPF `-all` + DMARC `p=reject` lockdown preserved; wga M02 closed; III unblocked.
3. **`stanley.science`** (ScienceStanley.aDNA) — **live production Google Workspace email preserved** (5 MX + SPF + 2048-bit DKIM, verified round-trip), zero mail disruption.

Each cutover: operator hands-on = one nameserver change (the token was created once, on the first). The standard is proven; the reusable skill is owned by SiteForge (`skill_cloudflare_dns_cutover` v1.0.0).

## Context

Across the workspace, sites are published to **Vercel** with domains/DNS managed at **Squarespace** (ex-Google-Domains zones). The WGA `worldgeno.me` cutover surfaced that this DNS substrate is, in practice, **un-automatable**:

- **No Squarespace DNS API** — the Google-Domains→Squarespace migration stripped API access from these zones (`squarespace_api_spike_findings.md`, 2026-05-23, negative result).
- **Login is SSO-gated** — the relevant Squarespace account (`sarosal@gmail.com` for worldgeno.me) signs in via "Continue with Google"; automated browsers are blocked at the OAuth provider.
- **Browser automation of the live session is blocked** — Chrome 148 (2025 security change) refuses `--remote-debugging-port` on real profiles, so an agent cannot reuse the operator's authenticated session.
- **Accessibility** — the operator has a hand disability; manual DNS clicking (per-record, repeated at every cutover) is a real barrier. The whole point of agentic operation is to remove that, and Squarespace's UI-only DNS defeats it.

The Squarespace UI-scripting harness (graduated skill `skill_vercel_squarespace_domain_cutover.md`; forked into `wga.aDNA/audit`) cannot clear these walls for SSO accounts. The skill's own spike already flagged "consider moving off Squarespace" as the right long-term path.

## Decision

**Adopt Cloudflare as the workspace's core DNS + registrar provider.** Migrate every site's DNS to Cloudflare over time. DNS then becomes **fully API-driven and agent-automatable** (zone setup, records, TTLs, cutovers).

- **Hosting stays on Vercel** for now — Cloudflare DNS points at Vercel (apex via **CNAME flattening**, `www`/`dev` via CNAME, all DNS-only / un-proxied so Vercel terminates TLS). Cloudflare Pages as a hosting target is a **separate, later** decision, not part of this ADR.
- **Registrar**: keep current registrations where they are initially; only the **nameservers** move to Cloudflare (one manual change per domain at the current registrar). Transferring registrations to Cloudflare Registrar is optional follow-on.
- **Credential**: a Cloudflare API token (Zone:Edit + DNS:Edit) is brokered via `LatticeHome.aDNA` (Keychain + 1Password) per Standing Rule 6.
- **Skill**: `skill_vercel_squarespace_domain_cutover.md` is marked **legacy**; the successor **`skill_cloudflare_dns_cutover.md` is owned by `SiteForge.aDNA`** (`how/skills/`) as part of its build+deploy mandate — graduated **v1.0.0 from the `adna.network` migration** (the first executed instance, 2026-05-31). Consumer site-vaults invoke it via a `federation_ref_dns` block in their `siteforge/` wrapper. *(Originally scoped to graduate into aDNA.aDNA from worldgeno.me; relocated to SiteForge per operator directive 2026-05-31 — DNS go-live is a build+deploy concern.)*

## Consequences

### Positive
- DNS becomes end-to-end agent-automatable → removes the manual-clicking / SSO / browser-automation barrier (primary **accessibility** win for the operator).
- **CNAME flattening at the apex** eliminates the Vercel apex-IP fragility (the `.1`-vs-`.65` reconcile problem).
- One provider + one reusable skill + one broker credential across all vaults; cutovers become a few API calls.
- Instant, reversible TTL/record changes → the cautious "TTL pre-lower + 24h gap" dance is no longer needed.

### Negative / costs
- One-time per-domain setup: create/scope a token once (done); change nameservers once at the current registrar (single edit per domain).
- New external dependency (Cloudflare account + API token in the broker).
- Registrar stays split (Squarespace registration + Cloudflare DNS) unless registrations are later transferred.

## Migration scope + sequence

| Domain | Vault | Current | Status |
|---|---|---|---|
| `adna.network` | aDNA.aDNA | Squarespace DNS → **Cloudflare → Vercel** | ✅ **LIVE 2026-05-31** — first executed instance; graduated `skill_cloudflare_dns_cutover` (CF zone `667a2d5e…`, NS `keanu`/`sierra`; Mailgun MX/SPF/DKIM/DMARC preserved) |
| `worldgeno.me` | wga.aDNA | Squarespace DNS → **Cloudflare → Vercel** | ✅ **LIVE 2026-05-31** — 2nd instance (CF zone `4426d85f…`; SPF `-all` + DMARC `p=reject` lockdown preserved); wga M02 closed; III unblocks at c92 |
| `stanley.science` | ScienceStanley.aDNA | Google/Squarespace DNS → **Cloudflare → Vercel** | ✅ **LIVE 2026-05-31** — 3rd instance (CF zone `6e1cf60a…`, NS keanu/sierra; HTTPS 200); **live production Google Workspace email preserved** (5 MX + SPF + 2048-bit `google._domainkey` DKIM round-trip verified, zero disruption); SS M14 closed |
| ContextCommons site domain | ContextCommons.aDNA | TBD | queued |
| other site-vaults | RareArchive.aDNA · ZenZachary.aDNA · LatticeAgent.aDNA · (scan for more) | TBD | backlog — migrate as each next touches DNS |

## References
- `aDNA.aDNA/how/skills/skill_vercel_squarespace_domain_cutover.md` (legacy; superseded-pending-this-ADR)
- `wga.aDNA/how/missions/mission_wga_m02_dns_cutover_worldgeno_me/` (first migration)
- `ScienceStanley.aDNA/audit/squarespace_api_spike_findings.md` (no-Squarespace-API evidence)
- Accessibility memory: operator hand-disability → agent-driven, API-first tooling preferred.
