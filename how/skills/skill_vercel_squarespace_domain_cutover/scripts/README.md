---
type: skill_sibling_doc
parent_skill: skill_vercel_squarespace_domain_cutover
status: active
created: 2026-05-28
updated: 2026-05-28
tags: [skill, scripts, harness, path_a, path_b, path_c]
---

# Cutover Scripts — Harness Guidance

The 11 Playwright-driven audit scripts that drive the Squarespace UI agentically + the supporting Vercel API client live in **`ScienceStanley.aDNA/audit/`** as of skill v0.1.0. They are not duplicated here. Consumer vaults pick one of three usage paths.

## Script catalog (at `ScienceStanley.aDNA/audit/scripts/`)

| Script | Purpose | Used in phase |
|---|---|---|
| `00_hello.ts` | Refresh Squarespace OAuth (real Terminal; biometric); validate Playwright persistent context | Pre-flight (every session) |
| `01_login.ts` | Establish initial Squarespace login (one-time) | Bootstrap |
| `02_baseline_dns.ts` | Snapshot every DNS record at the registrar to `audit/baseline_dns_state_<date>.json` | P-T-24 + P-D pre-cutover |
| `03_vercel_check.ts` | Vercel API: project link state, latest deploy state, domain attachment | P-T-24 |
| `04_vercel_health_smoke.ts` | Informational smoke (NOT the hard gate; see 11) | Diagnostic only |
| `05_vercel_attach_domains.ts` | Vercel API: add apex + www (+ dev) domains to project | P-T-24 |
| `06_vercel_capture_apex.ts` | Capture Vercel-issued apex IPs + vercel-dns subdomain | P-T-24 |
| `07_cutover_strategy_a.ts` | **The cutover write script.** Per-record-confirmed Squarespace UI writes with colored DNS diff | P-D |
| `08_rollback_strategy_a.ts` | Per-record-confirmed reverse of 07, using baseline JSON | Rollback only |
| `09_verify_propagation.ts` | Multi-resolver propagation check (10+ resolvers) | P-T-24 + P-D + P-D-T+48 |
| `10_email_continuity.ts` | MX/SPF/DKIM/DMARC baseline + delta vs prior snapshot | P-T-24 + P-D + post-cutover |
| `11_vercel_health.ts` | **Hard gate** — production deploy must be state=READY | P-D pre-cutover |
| `12_ttl_lower.ts` | Per-record-confirmed TTL lower at Squarespace (default 1800s — UI dropdown minimum) | P-T-24 |
| `13_preflight.ts` | 8-check rollup (1Password + Vercel + dev branch + persistent context + ...) | Every phase start |
| `14_squarespace_ui_snapshot.ts` | Pixel-diff Squarespace panel vs baseline; halt on drift | P-D pre-cutover |
| `15_ttl_restore.ts` | Per-record-confirmed TTL restore (1800s → 14400s) | P-D-T+48 |
| `16_caa_check.ts` | Confirm no blocking CAA records on the apex | P-T-24 |
| `17_post_cutover_monitor.ts` | 5-min cadence × 24h horizon; alerts on non-200, cert errors, content mismatch | P-D-Mon (background) |

Plus supporting `audit/lib/`:
- `squarespace_dns_selectors.ts` — selectors + helpers for the Squarespace DNS panel (OAuth re-auth detection, inline-form-driving, row affordance click, TTL dropdown options)
- `vercel_api.ts` — Vercel API client (env-var-first auth, project/deployment/domain endpoints)
- `audit_log.ts` — JSONL audit row writer
- `colored_diff.ts` — red/green DNS diff renderer for confirm-time display

## Path A — Run from ScienceStanley vault (recommended for v0.1.0 first consumer)

**Use when**: this is the first or second consumer; you want zero duplication; the persistent browser profile being shared across consumers is acceptable (no concurrent cutovers).

```bash
cd /Users/stanley/aDNA/ScienceStanley.aDNA/audit

# Point the scripts at the consumer's Vercel project + domain via env vars + a per-consumer inputs file.
# Convention: stash a per-consumer inputs.json beside the consumer vault's mission file.
CONSUMER_INPUTS=/Users/stanley/aDNA/<consumer_vault>/how/missions/mission_<id>_dns_cutover_<domain>/audit/inputs.json \
VERCEL_TOKEN=$(security find-generic-password -a "$USER" -s <consumer_token_name> -w) \
  npm run <script>
```

**Caveat**: scripts currently hardcode the ScienceStanley vault path + domain in some places. v0.1.0 → v0.2.0 must parameterize fully. Until then, expect to grep + hand-edit a small number of constants in the scripts before each cutover.

## Path B — Copy harness into the consumer vault (clean isolation)

**Use when**: the consumer wants its own audit corpus + browser profile; concurrent cutovers possible; future consumer-specific Squarespace selector drift expected.

```bash
cp -r ScienceStanley.aDNA/audit/ <consumer_vault>/audit/
cd <consumer_vault>/audit

# Reset the persistent browser profile (Playwright will create fresh on first run):
rm -rf profiles/squarespace-ops/

# Reset the audit corpus (don't carry over ScienceStanley's history):
mkdir -p _archived_from_template && mv *.jsonl baseline_*.json _archived_from_template/ 2>/dev/null || true

# Edit per-consumer constants (search for 'stanley.science', 'sciencestanley', PROJECT_ID, ORG_ID; swap to your values).
# This is mechanical but tedious in v0.1.0; v0.2.0 will replace this with a single config file.

# Re-install:
npm install

# Re-run selector discovery if Squarespace UI has drifted since 2026-05-28:
AUDIT_AUTO_CONFIRM=1 npx tsx scripts/m08_pd_discovery_add_cname.ts
# Inspect audit/type_listbox_dump_*.json to confirm dns-type-dropdown-option-<TYPE> pattern holds.
```

## Path C (v0.3.0, future) — Shared workspace library

**Planned**: workspace-shared `/Users/stanley/aDNA/_shared/dns-cutover/` with per-consumer config files; consumers `npm link` the shared lib. Migration trigger: third consumer needing cutover within 60 days of v0.2.0.

When v0.3.0 lands, this README will document the migration steps for Path A/B users.

## Audit corpus

Every script writes a JSONL audit row + (where applicable) before/after screenshots to:
```
<harness_root>/audit/
├── session-<ISO>.jsonl                # one row per agent action (action_ok, action_fail, action_halt)
├── screenshots/pilot-<ISO>/           # before/after per write action
├── baseline_dns_state_<date>.json     # snapshot for rollback
├── email_baseline_<date>.json         # MX/SPF/DKIM baseline
└── rollback_state_<date>.json         # pre-cutover snapshot (== baseline for the cutover session)
```

**Capture the entire audit corpus into the consumer vault's mission directory at P-E close** for the AAR's audit trail.

## Operator workflow notes

- **All destructive scripts (`07`, `08`, `12`, `15`) require operator at the keyboard** for per-record confirm + biometric on the first Squarespace write of each session.
- **Run from a real Terminal** (iTerm, Ghostty). Not from Claude Code Bash, CI, or any non-TTY harness — OAuth re-auth iframe + Touch ID prompts require an interactive terminal.
- **First destructive action of any session takes longer** (OAuth iframe; up to 5 min wait per `STEP_UP_TIMEOUT_MS`). Subsequent actions in the same session reuse the auth.
- **If selector discovery is needed** (Squarespace UI rev since 2026-05-28), the `m08_pd_*.ts` probe scripts demonstrate the pattern: open the panel, dump the relevant listbox HTML, cancel without saving, inspect dump, patch `audit/lib/squarespace_dns_selectors.ts` constants.

## References

- Skill MD: `aDNA.aDNA/how/skills/skill_vercel_squarespace_domain_cutover.md`
- Source mission: `ScienceStanley.aDNA/how/campaigns/campaign_ss_launch_and_pipelines/missions/mission_m08_dns_cutover_feedback_wire.md`
- Operational quirks: `ScienceStanley.aDNA/how/missions/artifacts/vercel_operational_quirks_20260528.md`
- Squarespace selector lib: `ScienceStanley.aDNA/audit/lib/squarespace_dns_selectors.ts`
