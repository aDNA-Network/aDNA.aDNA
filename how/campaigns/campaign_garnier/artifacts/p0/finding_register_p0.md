---
type: artifact
created: 2026-09-15
updated: 2026-09-15
status: active
last_edited_by: agent_codex
tags: [garnier, p0, evidence]
---
# P0 finding register

[D] Appendix-B records below describe reached surfaces, not a complete claim-register re-audit. No site repairs are part of P0.

## FG-P0-001

```json
{
  "id": "FG-P0-001",
  "dimension": "D7",
  "severity": "S1",
  "provenance": "D",
  "location": {
    "url": "https://adna.network/glossary/template",
    "selector": "main",
    "viewport": "HTTP text",
    "capture": "evidence/p0/local_live_content_comparison.json"
  },
  "observation": "Seven production/local main-text pairs differ. Production glossary/template states 41 templates while the tracked source inventory has 45; glossary/skill states 50 while the inventory has 57. Remaining route deltas are individually preserved in the comparison file. Local corrections are not deployed.",
  "why_it_matters": "A reader can reproduce a contradiction between public counts and the published working repository. This is a claims/source-release fidelity problem, not a reason to invent larger headline counters.",
  "recommendation": "Stage this claim delta for HAUSSMANN GR-7 and GARNIER P2.2/P2.3 source-fidelity review; reconcile every affected source/HTML/twin before separately authorized publication.",
  "effort": "M",
  "owner": "Rosetta; predecessor GR-7 remains its own gate",
  "verification": "Repeat all seven source/HTML/twin comparisons on the actual released build; derive counts and dates; check the claim register read-only until its owner integrates.",
  "status": "open"
}
```

## FG-P0-002

```json
{
  "id": "FG-P0-002",
  "dimension": "D7",
  "severity": "S2",
  "provenance": "D",
  "location": {
    "url": "https://adna.network/state-of-the-network",
    "selector": "main privacy disclosure",
    "viewport": "HTTP text and T1 ordinary navigation",
    "capture": "evidence/p0/transport_observation.json"
  },
  "observation": "State-of-the-network says the site collects nothing. Privacy opens with a broad no-analytics/no-collection statement but later describes timing data sent to Vercel. Ordinary T1 navigation fetched the Speed Insights script; no collection POST or corresponding backend record was observed.",
  "why_it_matters": "The disclosures conflict in scope. Script delivery proves mounting, not collection or field p75, so neither a privacy clearance nor a collection claim follows.",
  "recommendation": "P1 voice and P2.4 trust review should state exactly which data and conditions are meant; P4.1 must verify the collector receipt via authorized read-only access. Preserve readable plain-language disclosure and keyboard-accessible policy links.",
  "effort": "M",
  "owner": "Rosetta; collector access brokered by Hestia",
  "verification": "Compare actual mounted behavior, consent/configuration, collector receipt and every public disclosure; status remains COLLECTION_UNVERIFIED until the corresponding record is observed.",
  "status": "open"
}
```

## FG-P0-003

```json
{
  "id": "FG-P0-003",
  "dimension": "D5",
  "severity": "S2",
  "provenance": "D",
  "location": {
    "url": "https://adna.network/learn/concepts/triad",
    "selector": "main svg.nodeLabel / rendered Mermaid graph",
    "viewport": "390\u00d7844 light, fresh load",
    "capture": "evidence/p0/captures_curated/triad_390_t1_ready.png"
  },
  "observation": "The fresh mobile graph uses a 2122.01171875\u00d72045 viewBox inside a 293\u00d7282.359px rectangle. Sample node-label rectangles measure about 3.866px high despite a 16px CSS font declaration. Desktop-first resize and fresh-load layouts differ.",
  "why_it_matters": "Nominal CSS size and zero automated violations hide unreadable diagram labels. The mechanism cannot be learned from this mobile graph.",
  "recommendation": "P3.3 should bound mobile layout and provide an equivalent text structure; retain semantic order, zoom/reflow and theme contrast while making labels legible. Verify fresh navigation as well as resize.",
  "effort": "M",
  "owner": "Rosetta; reusable diagram findings staged for Canvas/WebForge",
  "verification": "Fresh-load and resize captures at all canonical widths plus 390, both themes, measured label rectangles and a manual equivalent-text/zoom check on the corrected route.",
  "status": "open"
}
```

## FG-P0-004

```json
{
  "id": "FG-P0-004",
  "dimension": "D12",
  "severity": "S3",
  "provenance": "D",
  "location": {
    "url": "http://127.0.0.1:4465/",
    "selector": "local homepage Lighthouse navigation",
    "viewport": "Lighthouse mobile emulation",
    "capture": "evidence/p0/lighthouse_followup.json"
  },
  "observation": "Initial mobile Lighthouse performance was 92 with TBT 246ms; three diagnostic repeats were 96. All runs are retained. Production field collection remains unverified.",
  "why_it_matters": "Selecting only favorable repetitions would hide variance; local lab scores cannot establish real-user p75.",
  "recommendation": "P4.1 should examine the initial trace and payloads against the pinned provider policy, retaining every predeclared run and accessible/reduced-motion behavior. Do not remove semantic content to win a lab score.",
  "effort": "M",
  "owner": "Rosetta",
  "verification": "Run the declared repeated-measure protocol on the candidate and retain all traces; report field status separately under field_performance_policy.",
  "status": "open"
}
```

## What this pass could not see

- [D] **not run:** No new human panel, operator clean-machine TTFS, outsider contribution, manual assistive-technology certification, collector backend record, or field p75. External scanners and bounded captures cannot establish these.
- [D] **wrong targets:** Build/gates/Lighthouse are local c38c6dc source; production stamp eda4cbf. Seven local/public main texts differ. Nous guessed /research and /about were not discovered links; their 404s are collection errors. Most Nous browser attempts reach a security checkpoint and are inadmissible as site quality evidence.
- [D] **disagreement:** Pa11y HTMLCS reports 15 contrast errors on aria-hidden decorative middle dots; axe reports zero on adna matrix. Preserve both, review decorative exemption rather than count them as 15 user failures. T0 default axes omit per-node incomplete data; 390 supplement retains color-contrast incompletes.
- [D] **inference:** Visual hierarchy effect and word-budget suitability require readers; no comprehension result follows from a screenshot. A 200 response establishes reachability, not truth.
- [D] **hostile check:** Compared full local/live main text, derived skill/template inventories, followed extra internal links, verified byte-identical Accept markdown, read live privacy/state disclosures and inspected a fresh-load mobile diagram.
- [D] **apparent scale:** No new scale/endorsement claim; source/registry untouched. Counts are only dated inventory observations.
- [D] **prior pass:** Historical scores not re-used; new build/gates/captures/crawl/Lighthouse. No claim every historic register assertion was independently reverified.

[D] Pa11y’s 15 decorative-dot contrast reports remain scanner disagreements requiring interpretation; they are not recorded as 15 confirmed WCAG failures. Checkpoint responses are excluded from reference-quality judgments. Aesthetic findings name accessible reading/zoom consequences; this record itself makes no aesthetic change.

Related: [[baseline_manifest]] · [[mission_garnier_p0_1_baseline]].

## FG-P0-005 — follow-up from clean prescreen

```json
{
  "id": "FG-P0-005",
  "dimension": "D3",
  "severity": "S2",
  "provenance": "D",
  "location": {
    "url": "https://adna.network/get-started/what-your-agent-reads/workspace-router/",
    "selector": "main rendered source comment",
    "viewport": "frozen HTTP text",
    "capture": "evidence/p0/raw/public/adna_get-started_what-your-agent-reads_workspace-router.txt"
  },
  "observation": "Get Started says the root router ships pre-instantiated; the linked annotated router contains a template comment telling the reader to copy it to the root and update via a separate .adna clone. The clean synthetic engineer independently noticed the discrepancy.",
  "why_it_matters": "The proof tour leaves a reader unsure which setup instructions apply to the current workspace image. A pinned historical source can be legitimate, but its relationship to the current command must be explicit.",
  "recommendation": "P1.2 should reconcile the entire annotated first-read tour with its stated pin/current setup, explain any historical template comments, and execute the documented initial flow in a clean disposable environment; preserve source provenance and accessible code/explanations.",
  "effort": "M",
  "owner": "Rosetta P1.2",
  "verification": "Compare every tour source/HTML/twin against the declared pin, then record exact command/prerequisites/result on a clean disposable setup; no synthetic success substitution.",
  "status": "open"
}
```
