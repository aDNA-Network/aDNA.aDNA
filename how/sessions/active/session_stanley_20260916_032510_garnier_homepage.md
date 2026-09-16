---
type: session
session_id: session_stanley_20260916_032510_garnier_homepage
created: 2026-09-16
updated: 2026-09-16
last_edited_by: agent_codex
status: active
user: stanley
started: 2026-09-16 03:25:10+00:00
heartbeat: 2026-09-16 03:25:10+00:00
executor_runtime: codex
executor_tier: opus
tier: 2
intent: Implement and verify the explicitly approved bounded homepage design pass in an isolated preview.
base_commit: b409828
token_budget_estimated: 60
token_budget_uncertainty: 25
token_budget_unit: kT_content_load
scope:
  files:
  - STATE.md
  - site/src/pages/index.astro
  - site/src/components/sections/HomeHero.astro
  - site/src/pages/index.md.ts
  - how/campaigns/campaign_garnier/artifacts/research/next_build_scope.md
  - how/campaigns/campaign_garnier/artifacts/research/homepage_design_pass.md
  - how/campaigns/campaign_garnier/missions/session_prompts_garnier.md
  - how/campaigns/campaign_garnier/artifacts/amendments/rolling_closure_ledger.md
  directories:
  - how/campaigns/campaign_garnier/evidence/homepage_design_20260916/
---
# Bounded homepage design pass

[D] Stanley's explicit approval ratifies [[next_build_scope]]. No active peer leases at startup; unrelated working changes are preserved. The branch has no upstream; no remote reconciliation or publication is attempted. Implementation will use an isolated checkout and port4466; existing P1 source b1cf040/dist/port4465 stay frozen.

[I] Scope: homepage reading hierarchy, connected file examples and demonstrated interaction defects. Existing identity, claims, command, destinations and shared hero consumers remain the contract. Verification follows [[verification_recipes]]; DP3 and three real-reader records remain open. This sitting's workload is separately booked from P1.
