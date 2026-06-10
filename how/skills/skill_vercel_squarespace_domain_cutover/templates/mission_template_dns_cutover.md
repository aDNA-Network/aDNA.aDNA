---
plan_id: mission_<id>_dns_cutover_<domain_slug>
type: plan
title: "M<NN> — DNS cutover to <canonical_url> (Vercel + Squarespace)"
owner: <agent_persona>
status: planned
campaign_id: <consumer_campaign_id>
campaign_phase: <NN>
campaign_mission_number: <NN>
mission_class: integration
estimated_sessions: "3-4"
operator_gated: true
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
last_edited_by: <agent_persona>
skill_ref: aDNA.aDNA/how/skills/skill_vercel_squarespace_domain_cutover.md
skill_version: v0.1.0
followup_needs_human:
  - "<TBD per cutover findings>"
tags: [plan, mission, dns, cutover, vercel, squarespace, p_t_24, p_d, p_d_mon, p_d_t_plus_48, p_e, blue_green, ttl_pre_lower, multi_resolver_verify, vercel_health_gate, caa_check, post_cutover_monitor]
---

# Mission: M<NN> — DNS cutover to `<canonical_url>`

**Campaign**: [[<consumer_campaign_id>]]
**Phase**: <NN> — <phase_name>
**Mission**: <NN>
**Skill**: [[aDNA.aDNA/how/skills/skill_vercel_squarespace_domain_cutover|skill_vercel_squarespace_domain_cutover v0.1.0]]

## Inputs (per skill § Parameters)

```json
{
  "vercel_project_id": "prj_<your_id>",
  "vercel_org_id": "team_<your_team>",
  "vercel_token_keychain_name": "<KEYCHAIN_ENTRY_NAME>",
  "domain_apex": "<your_domain>",
  "canonical_form": "apex",
  "dev_subdomain_enabled": true,
  "dev_branch_name": "dev",
  "consumer_vault_path": "/Users/stanley/aDNA/<your_vault>",
  "cutover_window_iso": "<TBD at P-T-24 close>",
  "existing_email_provider": "<google_workspace|microsoft_365|proton|none>"
}
```

Pin in `audit/inputs.json` at mission open.

## Goal

Cut `<consumer_vault>` Astro site from `<project>.vercel.app` over to `<canonical_url>` (Squarespace registrar; Vercel hosting), with `<dev_subdomain_enabled ? 'dev.<domain> bound to <dev_branch> branch' : 'no dev subdomain'>`. Five-phase playbook per skill.

## Operator-Gated

⚠️ DNS cutover may not execute without explicit in-conversation operator confirmation. Per-action operator confirm in the Playwright agent (every record-write). Pre-flight checklist must pass before operator is asked for go signal. No autonomous cutover under any circumstance.

## Exit Gates

### P-T-24 — TTL pre-lower + baselines (operator-gated, ~30 min)

Per skill § Phase P-T-24 exit gate:
- ✅ `13_preflight.ts` 8/8 green
- ✅ `10_email_continuity.ts --mode baseline` PASS (baseline JSON written to `audit/email_baseline_<date>.json`)
- ✅ `16_caa_check.ts` PASS (zero blocking CAA records on `<domain_apex>`)
- ✅ `12_ttl_lower.ts --live` PASS (all apex A records at 1800s; before/after screenshot pairs)
- ✅ `09_verify_propagation.ts` 10/10 resolvers see TTL 1800
- ✅ Cutover window operator-named + pinned in `inputs.json.cutover_window_iso`

### P-D — Cutover execution (operator-gated, ~1–2h)

Per skill § Phase P-D exit gate:
- ✅ Pre-cutover gates re-passed (preflight, UI snapshot, Vercel health hard gate, domain provisioning, rollback baseline captured)
- ✅ Operator go-signal received in-conversation
- ✅ Cutover writes complete (per `canonical_form: <apex|www>`):
  - `apex`: 2× A `@` to Vercel apex IPs + CNAME `www` → vercel-dns subdomain + (if dev) CNAME `dev` → vercel-dns subdomain
  - `www`: 2× A `@` edited to Vercel apex IPs + CNAME `www` → vercel-dns subdomain + (if dev) CNAME `dev` → vercel-dns subdomain
- ✅ Multi-resolver propagation 10/10 on all expected records
- ✅ Vercel `Valid Configuration` + Let's Encrypt cert provisioned
- ✅ HTTPS curl checks return expected status codes
- ✅ Email continuity delta PASS (zero unexpected MX/SPF/DKIM changes; if any change, restored from baseline)
- ✅ Content sanity grep PASS (at least one expected string served on new canonical)
- ✅ Monitor running in background (PID captured to `audit/monitor.pid`)
- ✅ All outputs captured to `audit/post_cutover_verification_<date>.txt`

### P-D-Mon — 24h synthetic monitor (background)

- ✅ `17_post_cutover_monitor.ts` reports clean at T+24h
- ✅ Lighthouse re-baseline on new canonical ≥ pre-cutover baseline

### P-D-T+48 — TTL restore (operator-gated, ~15 min)

- ✅ `15_ttl_restore.ts` PASS (apex A records TTL 1800s → 14400s)
- ✅ Propagation verify within 5 min (TTL 14400 across resolvers)

### P-E — ISS approval + AAR

- ✅ ISS gate rendered + operator approval recorded
- ✅ AAR written (5-section structure)
- ✅ Consumer vault auto-memory + STATE.md reflect new canonical
- ✅ Skill version bump (if learnings emerged) + `aDNA.aDNA/CHANGELOG.md` entry

## Objectives (per phase)

Per skill § Phase P-T-24 / P-D / P-D-Mon / P-D-T+48 / P-E. See skill MD for full step list.

## Out of Scope

- Email domain change (if `<canonical_url>` differs from current email domain; treat as separate mission)
- DNS registrar transfer
- DNSSEC introduction
- Lighthouse perf regressions (handle in normal campaign cadence post-cutover)

## References

- **Skill**: `aDNA.aDNA/how/skills/skill_vercel_squarespace_domain_cutover.md` (v0.1.0)
- **Source mission** (M08, ScienceStanley): `ScienceStanley.aDNA/how/campaigns/campaign_ss_launch_and_pipelines/missions/mission_m08_dns_cutover_feedback_wire.md`
- **Operational quirks**: `ScienceStanley.aDNA/how/missions/artifacts/vercel_operational_quirks_20260528.md`
- **Audit harness** (Path A invocation target): `ScienceStanley.aDNA/audit/`

## AAR

*(populate on mission close, after P-E)*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
