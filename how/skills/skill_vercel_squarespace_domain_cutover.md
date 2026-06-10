---
type: skill
skill_type: process
created: 2026-05-28
updated: 2026-05-28
status: legacy
category: infrastructure
trigger: "A consumer vault needs to cut a registered Squarespace domain over to a Vercel-hosted Astro site for the first time (going live), with optional blue/green dev subdomain."
last_edited_by: agent_berthier
tags: [skill, dns, cutover, vercel, squarespace, domain, blue_green, ttl, ssl, lets_encrypt, multi_resolver, mx_continuity]
version: v0.1.0
graduated_from: ScienceStanley.aDNA/how/campaigns/campaign_ss_launch_and_pipelines/missions/mission_m08_dns_cutover_feedback_wire.md
first_consumer: wga.aDNA (campaign_wga_site_v2 cutover to worldgeno.me)

requirements:
  tools: [vercel CLI, dig, curl, openssl, git, Playwright (for agentic Squarespace UI), 1Password CLI or macOS Keychain]
  context: [consumer vault's Astro site source, consumer vault's branding/CLAUDE.md, Vercel project.json]
  permissions: [Vercel API token in Keychain, Squarespace login (interactive at execution time), git push to consumer vault remote]
---

# Skill: Vercel + Squarespace Domain Cutover

> ⚠️ **LEGACY — superseded-pending [[adr_031_cloudflare_dns_site_publishing_standard]] (2026-05-31).** This Squarespace UI-scripted cutover is **not viable for SSO-gated Squarespace accounts**: no Squarespace DNS API, Google-SSO login blocks automated browsers, and Chrome 148 blocks reusing the operator's live session. Surfaced by the WGA `worldgeno.me` cutover (M02). **Workspace direction (ADR-031): migrate DNS to Cloudflare** (API-driven, agent-automatable, accessibility-friendly); a successor `skill_cloudflare_dns_cutover.md` will be graduated from the worldgeno.me Cloudflare migration. Use this skill only for **non-SSO** Squarespace zones where UI scripting still works.

## Overview

Cut a consumer vault's Astro site over from a `<project>.vercel.app` Vercel alias to a registered Squarespace-managed domain (apex or `www` canonical), with optional `dev.<domain>` subdomain bound to a `dev` git branch (blue/green). Five-phase playbook with operator-confirmed DNS writes, multi-resolver propagation verification, MX/SPF/DKIM continuity protection, Vercel SSL provisioning, 24-hour synthetic monitor, and per-record reversible rollback.

**Status**: v0.1.0 — playbook + templates extracted from ScienceStanley M08 (live cutover 2026-05-28T22:26Z → 2026-05-29T02:15Z; 4h49min). WGA is the first consumer; v0.2.0 will encode any WGA-specific learnings. v0.3.0 (later) graduates the Playwright agent harness into a shared workspace library.

**Why not autonomous**: Squarespace registrar writes require OAuth re-authentication (operator biometric on first action in a session) + per-record human confirmation. Vercel CLI deploys can run agentically once `SS_VERCEL_TOKEN` (or equivalent) is in Keychain. DNS propagation is a wall-clock wait, not an agentic loop. Operator presence required at P-D (cutover) and P-D-T+48 (TTL restore).

---

## Trigger

Invoke when:
- A consumer aDNA vault has shipped an Astro site to `<project>.vercel.app` and is ready for canonical-URL go-live.
- The target domain is registered at Squarespace (other registrars: copy the playbook + replace § Squarespace-specific behaviors per their DNS panel).
- The consumer is on the **same Vercel team** as previous consumers (or has its own Vercel project independently provisioned).
- The visual-polish gate or III review gate on the consumer's site is named CLOSED by the operator (cutover is a one-way credibility move — don't cut over half-baked content).

Do NOT invoke for:
- Domain transfers (registrar → registrar) — out of scope; separate skill.
- DNSSEC introduction — out of scope; defer to a dedicated security mission.
- Internal-only / staging-only domains — overkill; use Vercel preview URLs.

---

## Parameters

Captured in `<consumer_vault>/how/missions/mission_<id>_dns_cutover_<domain>/inputs.json` at mission open:

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `vercel_project_id` | string | yes | — | `prj_*` from `<consumer>/site/.vercel/project.json` |
| `vercel_org_id` | string | yes | — | `team_*` from same file |
| `vercel_token_keychain_name` | string | yes | — | macOS Keychain entry name (e.g., `SS_VERCEL_TOKEN`). Token is fetched via `security find-generic-password` at runtime. |
| `domain_apex` | string | yes | — | Bare domain (no scheme, no `www`). E.g., `worldgeno.me`, `stanley.science`. |
| `canonical_form` | enum | yes | `apex` | `apex` = `https://<domain_apex>` canonical, `www` 301s to apex. `www` = `https://www.<domain_apex>` canonical, apex 301s/ALIAS-resolves to www. |
| `dev_subdomain_enabled` | bool | yes | `true` | If true, configures `dev.<domain_apex>` as a Vercel Branch Domain bound to `dev_branch_name`. |
| `dev_branch_name` | string | iff `dev_subdomain_enabled` | `dev` | Git branch name bound to the dev subdomain. |
| `consumer_vault_path` | string | yes | — | Absolute path to the consumer vault root (e.g., `/Users/stanley/aDNA/wga.aDNA`). |
| `cutover_window_iso` | string | yes (at P-D-T-24 close) | — | Operator-named cutover window start (ISO-8601 UTC). Must be ≥24h after P-D-T-24 close. |
| `existing_email_provider` | enum | yes | `none` | `google_workspace` / `microsoft_365` / `proton` / `none`. Drives the email-continuity check's expected MX/SPF/DKIM records. |

---

## Requirements

### Tools/APIs
- `vercel` CLI (`npm i -g vercel@latest`); auth via `VERCEL_TOKEN` env-var only (NEVER `--token=` flag — leaks via `ps -ef`; see § Operational Quirks).
- `dig`, `curl`, `openssl` (POSIX standard).
- `git` ≥ 2.30.
- `node` ≥ 20 (for Playwright + TypeScript scripts).
- `Playwright` (`npm i -D playwright @playwright/test`) for the Squarespace UI agent.
- `1password CLI` (`op`) OR `security` (macOS Keychain) for token retrieval.

### Context Files (consumer vault must have)
- `<consumer>/site/.vercel/project.json` — Vercel project + org IDs.
- `<consumer>/site/astro.config.mjs` — Astro site config (`site:` field).
- `<consumer>/CLAUDE.md` + `STATE.md` — consumer governance.

### Permissions
- Vercel API token with `team_*` scope (Keychain).
- Squarespace login for the registrar account (operator-interactive at execution time).
- Git push to the consumer vault's remote (typically `origin/main`).
- macOS biometric (Touch ID) for OAuth re-auth at Squarespace + for Keychain access.

---

## Pre-flight (one-time per consumer vault, before P-T-24)

The consumer vault needs the Playwright DNS-driving harness to execute the cutover scripts agentically. Two paths for v0.1.0:

**Path A (recommended for v0.1.0 — minimal duplication)**: Run cutover scripts from `ScienceStanley.aDNA/audit/scripts/` with consumer-specific env vars. Cons: ScienceStanley's persistent browser profile is shared; concurrent cutovers from the same vault impossible.

**Path B (clean isolation)**: Copy the harness into the consumer vault:
```bash
cp -r ScienceStanley.aDNA/audit/ <consumer_vault>/audit/
cd <consumer_vault>/audit
# Edit audit/config.ts (or equivalent): swap PROJECT_ID, ORG_ID, DOMAIN_APEX, NEW_TTL_SECONDS
# Delete audit/profiles/squarespace-ops/ — Playwright will create a fresh profile at first run
# Re-run `npm install`, re-run selector discovery probes (`m08_pd_*.ts`) if Squarespace UI has drifted
```

**v0.2.0 will add a `init-consumer-harness.sh` helper that automates Path B.**

**v0.3.0 graduates the harness to a workspace-shared library** (`/Users/stanley/aDNA/_shared/dns-cutover/`) with per-consumer config files; consumers `npm link` the shared lib instead of copying.

Until then: pick Path A for the first WGA cutover; mark Path B as a follow-on if a second cutover lands within 60 days.

---

## Phase P-T-24 — TTL Pre-lower + Baselines (operator-gated, ~30 min)

**Goal**: lower TTL on existing Squarespace records to the registrar's minimum so the cutover-window rollback budget shrinks from 4h to 30 min; capture pre-cutover MX/SPF/DKIM/CAA baselines for the continuity check.

### Steps

1. **Refresh Squarespace OAuth** (operator from a real Terminal — biometric required):
   ```bash
   cd <harness_root>
   npm run hello   # opens browser, completes Google SSO, refreshes Playwright persistent context
   ```
2. **Preflight check** (script `13_preflight.ts`):
   ```bash
   VERCEL_TOKEN=$(security find-generic-password -a "$USER" -s <vercel_token_keychain_name> -w) \
     npm run preflight
   ```
   Expect: 8/8 green (1Password + Vercel + dev branch + dev domain + production deploy healthy + Squarespace persistent context still authenticated). Halt on any red.
3. **Email continuity baseline** (script `10_email_continuity.ts`):
   ```bash
   npm run email-continuity -- --mode baseline
   ```
   Captures current MX/SPF/DKIM/DMARC records to `audit/email_baseline_<date>.json`. **Critical**: this baseline is the rollback reference if cutover scripts side-effect-delete email records (see § Operational Quirks, MX side-effect).
4. **CAA check** (script `16_caa_check.ts`):
   ```bash
   npm run caa-check
   ```
   Confirms no blocking CAA records exist (Let's Encrypt must be permitted, either by absence of CAA records or by explicit `0 issue "letsencrypt.org"`).
5. **Operator names cutover window**: ISO-8601 timestamp ≥24h from now. Pin in `inputs.json` `cutover_window_iso`.
6. **TTL lower** (script `12_ttl_lower.ts`):
   ```bash
   npm run ttl-lower -- --live
   ```
   Per-record-confirm: every existing apex A record's TTL → 1800s (30 min). **Squarespace UI constraint**: dropdown only offers discrete values (30 min / 1 hr / 4 hr / 12 hr / 1 day / 1 week / Custom). Pick **30 min** — the Custom path (free-text 300s) requires another round of selector discovery and is not worth the marginal rollback-budget shrink.
7. **Propagation verify** (script `09_verify_propagation.ts`):
   ```bash
   npm run propagation -- --record A --name <domain_apex> --expect <current_apex_IPs>
   ```
   Confirms 10/10 resolvers (Cloudflare, Google, Quad9, OpenDNS, 2× DoH, 4× ns-cloud authoritative) see TTL 1800.
8. **Session SITREP**: "TTL is now 1800s (30 min); cutover window opens at `<cutover_window_iso>`."

### Exit gate

- ✅ `13_preflight.ts` 8/8
- ✅ `10_email_continuity.ts --mode baseline` PASS (baseline JSON written)
- ✅ `16_caa_check.ts` PASS (zero blocking CAA)
- ✅ `12_ttl_lower.ts --live` PASS (all apex A records at 1800s; before/after screenshot pairs in `audit/screenshots/`)
- ✅ `09_verify_propagation.ts` 10/10 resolvers see TTL 1800
- ✅ Cutover window operator-named + pinned in `inputs.json`

---

## Phase P-D — Cutover Execution (operator-gated, ~1–2h)

**Goal**: write the apex + CNAME records at Squarespace, watch multi-resolver propagation, verify Vercel SSL, run email-continuity delta against baseline.

### Pre-cutover gates (re-run all of P-T-24's preflight, plus:)

1. **Refresh OAuth** (real Terminal, biometric).
2. **Squarespace UI snapshot** (`14_squarespace_ui_snapshot.ts`):
   ```bash
   npm run ss-ui-snapshot
   ```
   Pixel-diff vs baseline; halt if drift exceeds tolerance (Squarespace pushed a UI rev; selectors may need re-discovery).
3. **Vercel health hard gate** (`11_vercel_health.ts`):
   ```bash
   npm run vercel-health-gate
   ```
   Production deploy must be `state: READY`. **Hard gate** — if not READY, halt; do NOT cut over.
4. **Vercel domain provisioning** (one-time, only if not done at preflight):
   ```bash
   VERCEL_TOKEN=$(security find-generic-password -a "$USER" -s <token_name> -w) \
     vercel domains add <domain_apex> --scope <team_id> --yes
   VERCEL_TOKEN=… vercel domains add www.<domain_apex> --scope <team_id> --yes
   # if dev_subdomain_enabled:
   VERCEL_TOKEN=… vercel domains add dev.<domain_apex> --scope <team_id> --yes
   ```
   Capture the Vercel-issued DNS-target CNAME (project-specific, e.g., `XXXXXXXX.vercel-dns-NNN.com.`) from `vercel domains inspect <domain>`; pin in `inputs.json` `vercel_dns_subdomain`.
5. **Rollback baseline capture**:
   ```bash
   npm run baseline-dns -- --output audit/rollback_state_$(date +%Y%m%d).json
   ```
   Snapshot of every current Squarespace record (A / AAAA / CNAME / MX / TXT / CAA / SRV) with current TTL + value. **Critical** — this is the rollback source-of-truth.
6. **Operator go-signal**: explicit in-conversation confirmation that the cutover window is open + operator is at the keyboard.

### Cutover writes (operator-confirmed per record, colored DNS diff at confirm-time)

Script `07_cutover_strategy_a.ts`. Pattern depends on `canonical_form`:

#### `canonical_form: apex` (WGA pattern)

1. **Add** A `@` → `216.198.79.1` (Vercel apex IP — verify current from `vercel domains inspect <domain_apex>` at runtime; Vercel may rotate)
2. **Add** A `@` → `64.29.17.1` (second Vercel apex IP, for redundancy)
   - If existing A records on `@` from a prior provider: **Edit** in-place to the two Vercel IPs (preserves 2-IP redundancy; M08 chose this).
3. **Edit/Add** CNAME `www` → `<vercel_dns_subdomain>` (Vercel-side rule auto-301s `www` → apex once apex is set canonical in the dashboard)
4. (if `dev_subdomain_enabled`) **Add** CNAME `dev` → `<vercel_dns_subdomain>`

#### `canonical_form: www` (stanley.science pattern, M08)

1. **Edit** A `@` `<old_IP_1>` → `216.198.79.1` (apex still resolves; Vercel-side rule will 301 apex to www once www is canonical in the dashboard)
2. **Edit** A `@` `<old_IP_2>` → `64.29.17.1`
3. **Edit** CNAME `www` `<old_target>` → `<vercel_dns_subdomain>`
4. (if `dev_subdomain_enabled`) **Add** CNAME `dev` → `<vercel_dns_subdomain>`

**In both cases**: do NOT touch MX, SPF (TXT), DKIM (TXT), DMARC (TXT), CAA. If the cutover script's `add CNAME` operation accidentally deletes an adjacent MX record (M08 incident — see § Operational Quirks), restore it manually within minutes from the rollback JSON.

### Post-cutover verification

1. **Multi-resolver propagation** (script `09_verify_propagation.ts`, ALL of these):
   - `--record A --name <domain_apex> --expect 216.198.79.1,64.29.17.1` — all 10+ resolvers consistent
   - `--record CNAME --name www.<domain_apex> --expect <vercel_dns_subdomain>` — all consistent
   - `--record CNAME --name dev.<domain_apex> --expect <vercel_dns_subdomain>` — all consistent (if dev enabled)
   - `--record MX --name <domain_apex> --expect <baseline_MX>` — unchanged
   - `--record TXT --name <domain_apex> --expect <baseline_SPF>` — unchanged
   - `--record TXT --name <selector>._domainkey.<domain_apex> --expect <baseline_DKIM>` — unchanged
2. **Vercel SSL** (`vercel domains inspect <domain> | grep -E 'verified|configured'`): expect `Valid Configuration` within 5 min of propagation reaching authoritative resolvers. Let's Encrypt cert auto-issued.
3. **HTTPS curl checks**:
   ```bash
   curl -sI https://<domain_apex>          # → 200 (if apex canonical) OR 301/308 to www (if www canonical)
   curl -sI https://www.<domain_apex>      # → 301/308 to apex (if apex canonical) OR 200 (if www canonical)
   curl -sI https://dev.<domain_apex>      # → 401 (Vercel Deployment Protection; intentional, see § Quirks #5)
   ```
4. **Cert sanity**:
   ```bash
   echo | openssl s_client -connect <domain_apex>:443 -servername <domain_apex> 2>&1 | grep -E 'subject|issuer|Verify'
   # Expect: subject CN match · issuer Let's Encrypt · Verify return code: 0 (ok)
   ```
5. **Email continuity delta** (script `10_email_continuity.ts`):
   ```bash
   npm run email-continuity -- --mode delta
   ```
   Compares current MX/SPF/DKIM/DMARC against baseline JSON. **Any delta is a P0** — restore immediately from baseline.
6. **Content sanity**: at least one `curl` to a known-text page on the new canonical URL to confirm the site serves the expected content (not a Vercel 404 / placeholder / wrong-project page).
7. **Lighthouse on new canonical** (optional this phase — can run in P-D-Mon):
   ```bash
   npx --yes @lhci/cli@latest collect --url https://<canonical>
   ```
8. **Blue/green smoke** (if dev enabled): push trivial commit to `dev` branch, wait ~1–2 min, confirm `dev.<domain_apex>` reflects.
9. **Launch monitor in background** (script `17_post_cutover_monitor.ts`):
   ```bash
   nohup npm run post-cutover-monitor > audit/monitor_$(date +%Y%m%d_%H%M%S).log 2>&1 &
   echo $! > audit/monitor.pid
   ```
   5-min cadence × 24h horizon; `PushNotification` to operator on first failure.

### Exit gate

- ✅ All multi-resolver checks 10/10
- ✅ Vercel `Valid Configuration` on all attached domains
- ✅ Let's Encrypt cert valid (`Verify return code: 0`)
- ✅ HTTPS curl returns expected status codes
- ✅ Email continuity delta PASS (zero unexpected MX/SPF/DKIM changes)
- ✅ Content sanity grep PASS
- ✅ Monitor running in background (PID captured)
- ✅ All outputs captured to `audit/post_cutover_verification_<date>.txt`

### Rollback (if any exit-gate check fails)

```bash
npm run rollback -- --baseline audit/rollback_state_<date>.json
```
Per-record-confirm reverse writes. The `<project>.vercel.app` alias stays available throughout — users see no downtime even on rollback.

---

## Phase P-D-Mon — 24h Synthetic Monitor (background, ~24h wall-clock)

**Goal**: catch any post-cutover regression within the rollback window.

- `17_post_cutover_monitor.ts` runs every 5 min: `curl -sI https://<canonical>` + cert check. Alerts on non-200, cert expiry under 7 days, content mismatch.
- At T+24h: monitor exits cleanly; append summary to P-D session file.
- Lighthouse re-baseline against the new canonical URL (separate session) — capture as Q-style out-of-band quality-gate row in the consumer vault's cycle log.

---

## Phase P-D-T+48 — TTL Restore (operator-gated, ~15 min, ~48h after P-D close)

**Goal**: restore Squarespace TTL to normal cadence.

1. Refresh OAuth (real Terminal, biometric).
2. Preflight (`13_preflight.ts`) — all-green.
3. TTL restore (script `15_ttl_restore.ts`):
   ```bash
   npm run ttl-restore -- --live
   ```
   Per-record-confirm: every apex A record's TTL 1800s → 14400s (4h, Squarespace standard).
4. Propagation verify within 5 min:
   ```bash
   dig <domain_apex> +noall +answer | awk '{print $2}'   # expect 14400 on apex A records
   ```
5. Session SITREP: "TTL bracket closed; cutover phases complete; P-E next."

---

## Phase P-E — ISS approval + AAR (~30 min)

**Goal**: gate the cutover with operator approval; capture learnings.

1. **ISS gate**: invoke `aDNA.aDNA/how/skills/skill_create_iss.md` to render an operator decision gate at `<consumer>/how/gates/<domain>_cutover_close.html`. Question: "Cutover to `<domain_apex>` complete; resume normal campaign cadence?" Attach evidence (Lighthouse delta, monitor report, MX/SPF/DKIM continuity check, screenshot of new canonical URL).
2. **AAR**: write `<consumer>/how/missions/mission_<id>_dns_cutover_<domain>/aar_<date>.md` — 5-section structure (Worked / Didn't / Finding / Change / Follow-up).
3. **Skill version bump**: if WGA-specific (or future consumer-specific) learnings emerged, bump `aDNA.aDNA/how/skills/skill_vercel_squarespace_domain_cutover.md` minor version + append to `aDNA.aDNA/CHANGELOG.md`.
4. **Consumer vault state update**: campaign master + STATE.md + auto-memory reflect new canonical URL; archive any superseded deferred infra missions with cross-reference.

---

## Operational Quirks (compact reference)

Encoded from M08 P-D findings (full source: `ScienceStanley.aDNA/how/missions/artifacts/vercel_operational_quirks_20260528.md`).

### Q1. Diagnose `link=NULL` — Vercel project has never had GitHub integration

**Symptom**: pushes to a connected GitHub repo trigger nothing.

**Diagnostic**:
```bash
VERCEL_TOKEN=$(security find-generic-password -a "$USER" -s <token_name> -w)
curl -s -H "Authorization: Bearer $VERCEL_TOKEN" \
  "https://api.vercel.com/v9/projects/<project_id>" | python3 -m json.tool | grep -A2 '"link"'
```
If `"link": null`, project has no integration. Fix:
1. Operator installs Vercel GitHub App on the GitHub org (one-time UI step at https://github.com/apps/vercel/installations/new).
2. Agent: `VERCEL_TOKEN="$TOKEN" vercel git connect https://github.com/<org>/<repo> --yes` from the consumer vault site directory.

### Q2. Never pass `--token=$SECRET` as a CLI flag

`ps -ef` exposes the value for the lifetime of the command. **ALWAYS** use `VERCEL_TOKEN=...` env-var form. Doctrine: `/Users/stanley/aDNA/doctrine_credential_handling.md` §2.4.

### Q3. Hobby private-repo author-email mismatch BLOCKS deploys

If the consumer is on Vercel Hobby + private repo: commits authored by an email NOT verified on the Vercel team owner's account land `state=BLOCKED`. Fix paths:
- **A (operator, UI)**: add the commit author email as verified secondary on Vercel.
- **B (agent, repo-local)**: `git config user.email <vercel-verified-email>` in the repo + redeploy commit.
- **C**: make the repo public (Vercel Hobby collaboration free for public repos).
- **D**: upgrade to Vercel Pro.

### Q4. MX side-effect during CNAME add at Squarespace

M08 observed: `add CNAME dev` step silently deleted an adjacent `alt4` MX record (Squarespace inline-form DOM shift). Defense:
- Capture full DNS baseline at P-D pre-cutover (`baseline-dns` script).
- Run `email-continuity --mode delta` immediately after EVERY cutover write step (not just at end).
- Add defensive record-count assertion in cutover script (post-write: count MX records, fail if delta vs pre-write).

### Q5. Vercel Deployment Protection returns 401 on preview deployments

`dev.<domain>` (bound to a non-production branch) returns HTTP 401 by default. **By design** — Vercel auto-enables Deployment Protection on previews. Operator decides per consumer:
- Keep enabled (gated reviewer access; matches M08).
- Vercel SSO required.
- Shared password.
- Disable (publicly-readable previews).

### Q6. Squarespace TTL dropdown is discrete-only

Options: 30 min · 1 hr · 4 hr · 12 hr · 1 day · 1 week · Custom. Skill targets 30 min (1800s) for cutover-window rollback budget. The Custom path achieves 300s (5 min) but requires another round of selector discovery — not worth the marginal budget shrink for v0.1.0.

### Q7. Squarespace OAuth re-auth required for any write

The Playwright agent's first DNS write in a session triggers `login.squarespace.com/reauthenticate` iframe. Operator must complete Google SSO (biometric on Mac); the agent waits up to 5 min (`STEP_UP_TIMEOUT_MS`). **Cannot run cutover from a non-TTY context** (Claude Code Bash, CI, headless). Run from a real Terminal (iTerm, Ghostty).

---

## Apex-vs-www Addendum

The DNS shape differs by `canonical_form` parameter:

|  | `apex` canonical (WGA) | `www` canonical (M08 stanley.science) |
|---|---|---|
| Apex A records | 2× to Vercel apex IPs — these are the **canonical target** | 2× to Vercel apex IPs — Vercel-side rule 301s apex to www |
| `www` CNAME | → vercel-dns subdomain — Vercel-side rule 301s www to apex | → vercel-dns subdomain — this is the **canonical target** |
| User-visible URL | `https://<domain>` | `https://www.<domain>` |
| Astro `site:` | `https://<domain>` | `https://www.<domain>` |
| Trade-off | Cleaner URLs (modern short-domain convention) | Mirrors stanley.science exactly (reuse M08 templates without divergence) |

For short brand domains (`worldgeno.me`, `stanley.science`) the apex form is more idiomatic in current web convention. For consumer convenience + uniformity with M08's proven path, the www form is the lower-divergence choice.

---

## Verification (end-to-end)

After P-E close:

1. `curl -sI https://<canonical>` → 200
2. `curl -sI https://<non-canonical_alias>` → 301/308 to canonical
3. (if dev enabled) `curl -sI https://dev.<domain_apex>` → 401 (Deployment Protection) OR 200 (if operator disabled it)
4. `openssl s_client -connect <canonical>:443` → `Verify return code: 0 (ok)` + Let's Encrypt issuer
5. `dig +short <domain_apex>` → returns the Vercel apex IPs with TTL ≈14400
6. `npm run email-continuity -- --mode delta` → zero unexpected changes
7. Consumer vault auto-memory updated: canonical URL = `<canonical>`
8. Skill version + CHANGELOG entry reflect the consumer-specific learnings (if any)

---

## References

- **Source mission (M08)**: `ScienceStanley.aDNA/how/campaigns/campaign_ss_launch_and_pipelines/missions/mission_m08_dns_cutover_feedback_wire.md`
- **Operational quirks** (full): `ScienceStanley.aDNA/how/missions/artifacts/vercel_operational_quirks_20260528.md`
- **Blue/green design**: `ScienceStanley.aDNA/how/missions/artifacts/blue_green_design_20260523.md`
- **Audit scripts** (Path A invocation target): `ScienceStanley.aDNA/audit/scripts/07-17_*.ts`
- **Selector library** (Squarespace UI): `ScienceStanley.aDNA/audit/lib/squarespace_dns_selectors.ts`
- **Vercel API client**: `ScienceStanley.aDNA/audit/lib/vercel_api.ts`
- **Credential doctrine**: `/Users/stanley/aDNA/doctrine_credential_handling.md`
- **ISS gate skill**: `aDNA.aDNA/how/skills/skill_create_iss.md`
- **Skill templates**: see `skill_vercel_squarespace_domain_cutover/templates/` (sibling directory)

---

## Templates

Sibling directory `skill_vercel_squarespace_domain_cutover/`:

- `templates/mission_template_dns_cutover.md` — consumer vault mission template; copy + fill placeholders
- `templates/vercel_json_template.json` — base `vercel.json` with dev-host noindex rule + standard security headers
- `templates/dns_baseline_schema.json` — JSON schema for the pre-cutover DNS record snapshot
- `templates/inputs_schema.json` — JSON schema for the per-cutover `inputs.json`
- `scripts/README.md` — guidance on Path A vs B vs (v0.3.0) Path C harness usage

---

## Changelog

- **v0.1.0** (2026-05-28) — initial graduation from M08; WGA = first consumer (cutover to `worldgeno.me`).
- **v0.2.0** (planned, post-WGA) — encode WGA-specific learnings (apex-canonical validation; any new Squarespace UI drift; any Vercel API rotation observed).
- **v0.3.0** (later) — graduate the Playwright harness to a shared workspace library; consumers `npm link` instead of copying.
