---
type: artifact
artifact_type: prerequisite_register
campaign_id: campaign_haussmann
mission: mission_haussmann_p0_4_flux_state_recon
title: "P0.4 — community-integration prerequisite register (the DP7 checklist, with owners)"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
tags: [haussmann, p0_4, flux, prerequisites, dp7]
---

# The three prerequisites before any community link (ADR-054 §1)

> P3.4's DP7 GO/NO-GO reads this register. A prerequisite counts as MET only with the named
> verification `[D]`-recorded. The honest fallback (no link + "being prepared" note on `/community`)
> is an acceptable indefinite end-state — nothing here is a deadline.

| # | Prerequisite | Owner | Status 2026-08-16 | Verification method (at DP7) |
|---|---|---|---|---|
| PR-1 | **Policy floor live on the instance**: ToS + privacy policy + community guidelines/CoC published at `/terms`, `/privacy`, `/guidelines` (or `legal.*` config URLs) | **Aspasia** (Fluxer.aDNA; config fields proven agentic in her 07-11 dry-run) — content itself may need the counsel lane (19 `#needs-human` items in her register) | **NOT MET** `[D]` — `legal.terms_url`/`privacy_url` null + all three paths empty (verified two ways, genesis B7) | Unauthenticated GET on the three paths → substantive documents (not SPA shell); config `legal.*` non-null |
| PR-2 | **Minimal aDNA branding**: instance title/meta/manifest identify it as the aDNA community (not stock "Fluxer") | **Aspasia** (rebrand demonstrated agentically in the dry-run) | **NOT MET** `[D]` — `<title>` "Fluxer", stock meta/manifest/favicons, `branding.*` nulls | Unauthenticated GET `/` → title/meta/manifest carry aDNA identity |
| PR-3 | **Inside-aliveness confirmation**: someone with access attests the instance is seeded, moderated, and answerable (not an empty shell) — outside probes cannot see past the auth wall | **Operator** (or Aspasia with operator co-sign) | **UNKNOWN** `[A]` — unverifiable from outside by design | A dated operator/Aspasia attestation note (channels seeded · first responders named · registration flow tested end-to-end) |

## Related record state

- **Reconciliation memo**: DELIVERED into `Fluxer.aDNA/who/coordination/` 2026-08-16 17:11 `[D python mtime listing]` (Gate C operator GO). `ack_required: true` — **no ack yet** (~1 h old; none expected this fast).
- **Fluxer STATE**: still says "Nothing is deployed" — unreconciled until Aspasia's lane runs. Interim truth for campaign use = the genesis assessment (`evidence/flux/flux_assessment_draft.md`) + aDNALabs STATE L188–190 `[R]`.
- **Deploy-config drifts to resolve in Aspasia's answer** (memo Q-set): registration `mode: "approval"` vs closed-plan · captcha `provider: "none"` vs captcha-ON-plan · host identity + the un-ruled D-1/D-2/D-3 deltas.
- **ADR-054 sufficiency check** `[D]`: the stub already carries the integration model (prerequisites → honest-state link from `/community` only → first-class at federation GA) + the copy law. Sufficient for DP7 as written; only the GO/NO-GO evidence is pending. No edit needed this mission.
- **Constraint reminders binding all future copy**: aDNALabs ADR-025 (human-only until federation GA) · Fluxer SO#8 (no syndication; agents disclosed) — both quoted in the delivered memo.

## O3 escalation (posted in the wave wrap-up)

Delivery is confirmed but the ack path depends on when the operator next runs Aspasia's lane. Options for the operator: (a) run a Fluxer.aDNA session soon to intake the memo + reconcile STATE (unblocks PR-1/PR-2 work); (b) wait — P3.4 is Decade-2 and nothing upstream blocks on it; (c) answer PR-3 directly whenever convenient (a one-paragraph attestation, or a "not seeded yet" which simply keeps the fallback state). **Recommendation: (b) or (c) — no urgency; the campaign's fallback is honest by design.**
