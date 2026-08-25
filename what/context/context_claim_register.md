---
type: context
title: "The claim register — every public claim, classified, as a living instrument"
created: 2026-08-16
updated: 2026-08-20
status: active
last_edited_by: agent_rosetta
agent_authored: true
campaign_id: campaign_haussmann
tags: [context, claims, credibility, haussmann]
---

# Context — the claim register

**Plain version**: every factual statement on adna.network was extracted and checked. At the **2026-08-16 baseline** that was 93 claims — 52 verified, 14 checkable-but-unlinked, 19 unsupported, and **8 false** (things like "the vaults are all public" when 73 of 74 had no public repository, or a community page pointing at a discussion forum that was never turned on). None of the site's *numbers* were wrong; the falsity lived in sweeping words like "all", "every", and "open". **Those 8 were all fixed on 2026-08-17** and the register has kept growing as the site changes — it is a living instrument, not a one-time audit, and the build now fails on a false sentence rather than trusting anyone to remember.

**Technical version**: canonical data at `how/campaigns/campaign_haussmann/evidence/claims/claim_register.md` (+ machine-readable `claims_raw.json`), seeded from gate-20's claim-trace manifest and verified against repo ground truth, sibling vault records, the GitHub API, and live probes. Classification: verified / verifiable / unsupported / **FALSE** (FALSE = S1, blocks promotion). Includes the tense audit (aspirational-present-tense rows) and the **H13 annex**: a 58-row per-vault leak table (truncated ledes, raw enums, machine identifiers) root-caused to the registry projection's `note`-field fallback.

**Current state (2026-08-20)**: **125 unique ids** (10 `G-*` + 115 `R-*`, `R-11`…`R-125`, zero gaps) across
**139 physical table rows** — both derived by script at P4.5a, not typed. The two figures differ because rows
are re-quoted in dated addenda when they are re-verified, so *"how many rows"* and *"how many claims"* are
different questions; say which one you mean. *(This line read **112** until 2026-08-20, a figure already
stale by 12 when §8.6 re-derived 124 on 08-19 — the exact decay the register's own "count last" rule exists
to stop, caught here on the file that summarizes it.)* Baseline rows keep their original B5 classification and resolution is recorded in dated addenda — §6 (P1.1, *"the FALSE set is resolved — 8/8"*), §7 (P1.2), plus the P2.4/P2.5 rows. So a row still reading `FALSE` is a record of what *was* true at baseline, not a live defect; read the addenda before quoting a class forward. Newer rows carry their disposition inline instead (`unsupported → cut`, `FALSE → fixed at P2.5 O1`), which is the clearer convention and the one to use going forward.

**Maintenance contract (ADR-057)**: re-verified monthly and at every campaign phase gate. P0.5 converted it to a CI fixture (zero-FALSE assertion + coverage rule for new high-signal claims) — **done**; P1.1 drove it to zero-FALSE — **done, 2026-08-17**. The direction of repair is fixed: **claims move down to verifiability, or the claimed thing ships; claims never round up.**

**Two live rows worth knowing about**: R-34 (`/network`) and R-63 (`/get-started`) both claim setup takes "about five minutes" and are registered `[A]`/S4 with *no recorded run linked*. They are discharged by the clean-machine TTFS measurement at P2.6 O0b, or revised down then — never by copy. They are the standing example of the register's own rule that a claim needs an instrument, not better wording.

**Self-reference**: the register practices what it checks — every row carries a provenance tag and an evidence pointer, so a reader can re-verify any classification themselves.

**Related**: [[context_website_assessment]] · [[campaign_haussmann]] (missions P0.5, P1.1) · [[adr_057_measurement_regime|ADR-057]].
