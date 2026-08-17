---
type: context
title: "The claim register — every public claim, classified, as a living instrument"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
agent_authored: true
campaign_id: campaign_haussmann
tags: [context, claims, credibility, haussmann]
---

# Context — the claim register

**Plain version**: every factual statement on adna.network was extracted and checked — 93 claims. 52 are verified, 14 checkable-but-unlinked, 19 unsupported, and **8 are false** (things like "the vaults are all public" when 73 of 74 have no public repository, or a community page pointing at a discussion forum that was never turned on). None of the site's *numbers* are wrong — the falsity lives in sweeping words like "all", "every", and "open". The register is now a permanent instrument: the campaign wires it into the build checks so a false sentence fails the build.

**Technical version**: canonical data at `how/campaigns/campaign_haussmann/evidence/claims/claim_register.md` (+ machine-readable `claims_raw.json`), seeded from gate-20's claim-trace manifest and verified against repo ground truth, sibling vault records, the GitHub API, and live probes. Classification: verified / verifiable / unsupported / **FALSE** (FALSE = S1, blocks promotion). Includes the tense audit (aspirational-present-tense rows) and the **H13 annex**: a 58-row per-vault leak table (truncated ledes, raw enums, machine identifiers) root-caused to the registry projection's `note`-field fallback.

**Maintenance contract (ADR-057)**: re-verified monthly and at every campaign phase gate; mission P0.5 converts it to a CI fixture (zero-FALSE assertion + coverage rule for new high-signal claims); P1.1 drives it to zero-FALSE; the direction of repair is fixed — **claims move down to verifiability, or the claimed thing ships; claims never round up.**

**Self-reference**: the register practices what it checks — every row carries a provenance tag and an evidence pointer, so a reader can re-verify any classification themselves.

**Related**: [[context_website_assessment]] · [[campaign_haussmann]] (missions P0.5, P1.1) · [[adr_057_measurement_regime|ADR-057]].
