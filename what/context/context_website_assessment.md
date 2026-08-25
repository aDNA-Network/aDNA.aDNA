---
type: context
title: "The adna.network assessment — VITRUVIUS baseline, findings, and what they mean"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
agent_authored: true
campaign_id: campaign_haussmann
tags: [context, website, assessment, vitruvius, haussmann]
---

# Context — the adna.network assessment (2026-08-16 baseline)

**Plain version**: the network's public website was formally reviewed against a 12-dimension instrument by two independent agent reviewers. It scored **51.6/100** — not because it is badly built (the structure, docs shape, design system, and speed all scored solidly), but because the *trust* layer under-delivers: some sentences claim more than a reader can verify, two advertised community channels don't exist, and the vault registry shows internal working notes to the public. The reference site in the same category (modelcontextprotocol.io) scores ≈83 — and almost the entire gap is trust work, not design work.

**Technical version**: two fresh-context scorers (isolation protocol: instrument + evidence pack only, sheets committed before reconciliation) produced 51.6/49.6 with variance ≤1 on 12/12 dimensions; reconciled per-dimension: D1 3 · D2 3 · D3 3ᵖ · D4 3 · D5 3 · **D6 2 · D7 2 · D8 2 · D9 2** · D10 3 · D11 2 · D12 2 (B×E weights; D7's weight-14 makes it the binding constraint). Binary gates: D11 conditional-pass (one manual reflow candidate), D12 lab-pass/field-unverified. The full evidence protocol ran: 202-page inventory, 280-capture visual review, automated sweep, 15-item machine-eye pass, 93-claim register (8 FALSE), outside-only community assessment, synthetic cold-reader panel (disclosed), and cohort calibration scoring of MCP + Mastra.

**Headline findings**: 8 FALSE claims (S1 — the openness quantifiers, the dead Discussions/templates channels, a false signing claim, the persona quantifier); undisclosed operator-federation vs "the proof" framing (S1); a docs-template mobile defect invisible to every automated gate (S1); 58/74 registry pages leaking internal language (root-caused to the projection's fallback); the machine layer present-but-incomplete (llms.txt curated but unlinked; no twins/JSON/MCP). **Counter-finding**: every load-bearing number is true, and the honesty strata (`/about`, `/community`) are category-leading — the site knows how to tell the truth; the campaign extends that register to every surface.

**Since the baseline (as of 2026-08-19) — read the paragraphs above as history, not as status.** Everything above describes the site on **2026-08-16** and is preserved unedited because it is the measurement P2.6 reconciles against. Much of it has since been fixed: the 8 FALSE claims are resolved 8/8 (P1.1); the community-channel and registry-leak findings are closed (P1.1/P1.3); the registry now separates 7 in use / 10 chartered / 57 planned (P2.4); URLs are normalised (P2.1), the IA is consolidated (P2.2), the specification is 20 readable pages with 119 dated pages behind it (P2.3), and an evaluator can now read every file the install hands their agent before running it (P2.5). **No re-score has been run** — the 51.6 stands as the only measured figure until P2.6 produces a second one, and quoting an improved number before then would be the exact defect this campaign exists to end. **D3 remains provisional (`3ᵖ`)** for the reason it always was: no TTFS run has ever happened. That measurement is P2.6 O0b.

**Self-reference (Standing Order 8)**: this assessment demonstrates the standard's own method — evidence with provenance tags, two-reviewer reconciliation, findings that cite capture files a reader can open. The full record lives in this vault at `how/campaigns/campaign_haussmann/` — the assessment of the site is itself navigable context.

**Where the detail lives**: Gate B dossier `how/campaigns/campaign_haussmann/artifacts/gate_b_dossier.md` · scores `evidence/scoring/` · hypotheses [[hypotheses_resolved]] · claims [[context_claim_register]] · the campaign that acts on it: [[campaign_haussmann]].
