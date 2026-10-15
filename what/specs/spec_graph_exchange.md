---
type: spec
kind: ecosystem_spec
name: graph_exchange
title: "Graph Exchange — the ONE standard-side contract for publishing, discovering, fetching and trusting an aDNA graph as an artifact (cites Exchange.aDNA's owned specs, never copies them)"
created: 2026-10-15
updated: 2026-10-15
version: "0.1"
status: proposed          # ⛩ placement ratified as drafted 2026-08-25 (aDNALabs S250, operator) on the 2026-07-11 draft; this TEXT is proposed until ADR-064's §7.7 — Standing Order 9 / standard §7.7
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
mission_id: mission_arcade_a1_1_spec_graph_exchange
placement_adr: what/decisions/adr_064_graph_exchange_spec_placement.md
placement_ratified: who/coordination/coord_2026_08_25_berthier_to_rosetta_adr020_placement_RATIFIED.md   # all three rulings of coord_2026_07_11_rosetta_to_berthier_exchange_graph_spec_placement.md, as drafted
cites:                    # OWNED ELSEWHERE — referenced and projected, never redefined here
  manifest_schema: "Exchange.aDNA/how/standard/spec_manifest_schema_v0.md — adna-manifest/v0 (ratified; updated 2026-10-08 for the optional display block, Exchange ADR-064)"
  access_contract: "Exchange.aDNA/how/standard/spec_exchange_access_contract_v0.md — exchange-access/v1 (ratified; updated 2026-10-10)"
  conformance_ladder: "Exchange.aDNA/how/standard/spec_conformance_publish_v0.md + Exchange ADR-020 (accepted 2026-07-11) — L0–L3"
  publish_path_annex: "aDNALabs.aDNA/how/campaigns/campaign_operation_corps/artifacts/spec_exchange_publish_path_v0.md — v0.1.0, accepted at M-S6 2026-07-03, commit fd04532e (promoted to a cited transport annex by the 08-25 ratification)"
  runtime: "Exchange.aDNA/what/exchange/ — adna_exchange 0.0.44 at authoring (2026-10-15); conformance.py RULE_SET_VERSION v0-proposed"
  wrapper_placement: "aDNA.aDNA ADR-045 — consumer wrapper at how/federation/exchange/ with federation_ref pinned exchange-access/v1 (Exchange ADR-018/020 §3)"
tags: [spec, ecosystem, graph_exchange, exchange, terminal, webforge, adna_manifest, publishable_graph, conformance, l2_custody, arcade, proposed]
---

# Graph Exchange

> **Plain-language version (three sentences).** A graph built to the aDNA standard can be offered to others — freely in the Commons, or under terms in the Market — through the aDNA Exchange. This spec says the *minimum* such a graph must declare about itself, and who owns which part of the machinery, so that the terminal, the web face and the Exchange itself all cite **one** document. Everything about the wire format and the registry lives with the Exchange; this spec points at it and never restates it.
>
> **Self-reference (Standing Order 8).** This vault is itself a publishable graph: its `MANIFEST.md` carries `license: MIT` (added 2026-09-09 precisely so a machine could read it), its `LICENSE` file is the SPDX source, and its git history is the provenance a manifest's `provenanceRef` would point at. The four-field minimum in §3 is what *this* graph would have to declare to be listed.

## §1 Scope and the ownership split (ratified ruling ③)

This is the **one standard-side contract** for the publish → discover → resolve → fetch path of an aDNA graph as an artifact. It is a peer of the four ecosystem specs (`spec_forge_ecosystem` · `spec_platform_ecosystem` · `spec_framework_ecosystem` · `spec_org_pattern_ecosystem`) and is seated by [[adr_064_graph_exchange_spec_placement|ADR-064]].

| Owner | Owns | Does not own |
|---|---|---|
| **Exchange.aDNA** (Mnemosyne · Hermes · Themis; Berthier coordinating) | the transport · the Registry · Commons / Market · `adna-manifest/v0` · `exchange-access/v1` · the publish-path mechanics · the L0–L3 ladder's **execution** | the standard-side contract shape |
| **aDNA.aDNA** (Rosetta — this spec) | the contract shape · the publishable-graph minimum (§3) · the honesty clause (§4) · the L2 rule-set **content** (§5) · ecosystem placement | the substrate, the schema, the endpoints |
| **Terminal.aDNA** (Berthier; outward Vauban) | the operator seat: `exchange.*` verbs as shims + operator UX (discover · resolve · fetch · acquire live on the berth v0.2; publish is deliberately *not* a verb — publishing is a human act, Terminal B7) | transport, registry state, schema |
| **WebForge.aDNA** (Vitruvius) | the **web face** of the same path (marketplace archetype; `projection_mapping.md` `adna-manifest/v0` → Listing) | a second contract |

**Federate, never duplicate.** A consumer graph reaches the Exchange through `how/federation/exchange/` with a `federation_ref` pinned to `exchange-access/v1` (aDNA.aDNA ADR-045 placement; Exchange ADR-018 pin). No berth gets a side door (access contract §1 preamble).

## §2 Cited sources (normative by reference)

| Object | Where | Pin at authoring |
|---|---|---|
| The sharing manifest | `Exchange.aDNA/how/standard/spec_manifest_schema_v0.md` | `adna-manifest/v0`, ratified by Exchange ADR-002; last change 2026-10-08 (optional `display` block, Exchange ADR-064) |
| The client contract | `Exchange.aDNA/how/standard/spec_exchange_access_contract_v0.md` | `exchange-access/v1`, ratified by Exchange ADR-018; §1 verb set discover · resolve · fetch · publish · sync · subscribe |
| The validation ladder | `Exchange.aDNA/how/standard/spec_conformance_publish_v0.md` + Exchange ADR-020 | L0 integrity/identity · L1 schema/host-eligibility (blocking) · L2 structural standard-conformance (**non-blocking → report**) · L3 rubric (manual) |
| **Transport annex** — the publish path | `aDNALabs.aDNA/how/campaigns/campaign_operation_corps/artifacts/spec_exchange_publish_path_v0.md` | v0.1.0, accepted M-S6 2026-07-03, commit `fd04532e` — **promoted from campaign artifact to cited annex** by the 2026-08-25 ratification (ruling ①); the mechanics stay Exchange/aDNALabs-owned, the *citation* is standard-durable |
| The runtime | `Exchange.aDNA/what/exchange/` | `adna_exchange` 0.0.44 (2026-10-15), `:8791`; root of record = the `.5` machine |

A later version of any cited object does not change this spec; a *contract* change (a new pin) does, by amendment under §8 of this spec's own provenance rule (mirroring `spec_terminal_harness_contract` §8).

## §3 The publishable-graph minimum (ratified ruling ②)

A graph offered through the Exchange **MUST declare** four things. The standard states the *requirement and its honesty rule*; the Exchange owns the *wire encoding*. Each row binds to a field the manifest already has — **the standard mints nothing** (Exchange's 07-11 proposal, adopted).

| # | Declaration | Binds to (`adna-manifest/v0`) | Why it is required |
|---|---|---|---|
| 1 | **Identity** | `artifact.{registryId, version, cid}` (+ `artifactType`) | who / what / which version + the content hash the fetch side verifies before write. Version strings are burned — once used, never re-bound (Exchange ADR-031) |
| 2 | **License** | `license.spdx` (+ `license.duo` for datasets; `license.source_license` where inherited) | reuse terms, machine-checkable before import; no silent permissive relicense |
| 3 | **Provenance** | origin vault + `provenanceRef` (append-only log) + `signature` (Ed25519 operator attestation) + the `fair` minimum (`keywords ≥ 1`, `creators`) | verifiable origin; attestation + inclusion proof gate the write. ⚠ At Tier-0 the signature is **stored, not verified** (Exchange C182 / ADR-063 §2.4) — a consumer MUST say so when it renders trust |
| 4 | **Trust posture** | `mode` (commons \| market) · `visibility` (public \| scoped \| private) · advisory `derivation` / `clinical_commons` consent terms | the honest posture, **rendered advisory and never as enforced** (§4) |

**Conformance of the graph itself** is reported, never certified: the L2 structural check (§5) attaches findings to the registry entry; "imperfection publishes visibly; only L0/L1 invalidity does not publish" (Exchange `conformance.py` docstring, ADR-020 law).

**What a graph body is** (informative, Exchange ADR-049): for `artifactType: context-graph`, a flat, deterministic `tar.gz` of the vault's git-tracked tree. A profile's hash manifest (forward: §8 and aDNA.aDNA ADR-066) would ride *inside* that body, so the two mechanisms compose rather than compete.

## §4 The honesty clause (ratified; "the part we would defend hardest")

1. **Advisory terms surface as advisory.** `derivation.propagateConditions`, consent vocabularies and any Market condition are *declared*, not enforced, and every face says so in the same breath it shows them (Exchange spec §10c; manifest "Enforceability ledger").
2. **Centralized trust is never oversold.** A root registry, a checkpoint, a witness anchor (Exchange ADR-058: tree heads *anchored on* the AILedger record as a witness, **never "on the ledger"**) — each is named by what it is.
3. **The consume side verifies before it writes** — CID match, bundle signature, inclusion proof where offered (access contract §1 "Verification duty") — and reports plainly what it could and could not verify. A client that skips verification is non-conformant.
4. **A conformance finding is a finding**, rendered as such; "certified" and "compliant" do not appear on any face.

## §5 L2 rule-set custody (the ask the 08-25 ratification did not cover — ruled here)

The Exchange runs a publish-time structural check whose rule-set is stamped `RULE_SET_VERSION = "v0-proposed"`, "Exchange-proposed pending Rosetta" (`conformance.py:34-35`). The split proposed in Exchange's 07-11 memo (ask 3) is **adopted**:

| | Owner | Mechanism |
|---|---|---|
| **Content** of the L2 rule-set (what "structurally conformant" means) | **aDNA.aDNA** — this spec, §5.1 | versioned here as `l2_rule_set: v<N>`; changes by amendment |
| **Execution** (the runner, the report, the served findings) | **Exchange.aDNA** | `conformance.py` bumps `RULE_SET_VERSION` to this spec's value when it adopts a version; non-blocking by law |

### §5.1 L2 rule-set v1 (proposed) — the standard's structural floor for a `context-graph` body

Derived from standard §5.5 Starter plus the placement rule the Exchange already checks; **nothing new**:

| Rule | Check | Standard source |
|---|---|---|
| L2-1 | `MANIFEST.md` present at the graph root | §4.1, §5.5 L1.1 |
| L2-2 | `CLAUDE.md` + `README.md` present at the graph root | §5.5 L1.1 |
| L2-3 | `what/` · `how/` · `who/` present (bare triad) or `.agentic/{what,how,who}/` (embedded) | §3.2, §3.3, §5.5 L1.2 |
| L2-4 | federation wrappers under `how/federation/<name>/`, not at root (legacy root wrappers → finding `legacy_root_wrapper`) | aDNA.aDNA ADR-045 |
| L2-5 | `MANIFEST.md` frontmatter carries `license:` (SPDX or the literal `unset`) | `skill_project_fork` Step 1.5 (v8.12); binds §3 row 2 |
| L2-6 | *(advisory)* `adna_conformance:` declared in `MANIFEST.md`; absent ⇒ "unverified", never a failure | §5.5 Conformance Declaration |

Findings are **info** or **warn**; L2 never refuses a publish (Exchange ADR-020). The honest floor from the 07-11 memo stands: no automated standard linter exists beyond `adna_validate.py`, so L2 starts narrow. v1 is what the runner already does plus L2-5/L2-6; the bump is a one-line change on their side once ADR-064 is signed.

## §6 Access points and faces (the four relations — `TAUGHT-AS-DESIGN` unless marked)

| Face | Graph | Posture at authoring (2026-10-15) | Tense |
|---|---|---|---|
| Operator seat | **Terminal.aDNA** — `adnaterm` `exchange.discover/resolve/fetch/acquire` on the berth v0.2 (`Exchange.aDNA/how/standard/spec_berth_terminal_v0.md`); publish/sync/auth reads = Terminal v1.2 | Enceinte e4 closed; e6 Drawbridge = launch | `TAUGHT-AS-DESIGN` |
| Web face (lab) | **WebForge.aDNA** marketplace archetype → the aDNA Registry face (Exchange ADR-059 A1, one of two branding manifests) | archetype exists; Rung 1 held by operator ruling | `TAUGHT-AS-DESIGN` |
| Web face (company) | the **aiLedger face** (Exchange ADR-059 A1 default face; ADR-062 storefront = branding manifest + catalog scope over ONE root) | Emporion active | `TAUGHT-AS-DESIGN`; **not named on any public surface until the operator says "publication"** (ARCADE rule 2) |
| City | **City.aDNA** Port | Emporion face 2 | `HORIZON` |
| The substrate | **Exchange.aDNA** `:8791`, `.5` root of record | Tier-0 complete 2026-07-17; ADOPT since 2026-09-17; three real graphs published on L1; **no fleet vault has fetched a graph yet** (CF-D1) | `PASS` for Tier-0; launch gates listed in [[situation_review_20261015]] A1.3 |

## §7 What this spec will never carry

Prices, settlement, payment rails (Exchange ADR-045/047: settlement is *recorded*; "there is still NO payment rail"); PHI or any data-bearing body (Network ADR-016 §8 / aDNA.aDNA ADR-037 §4 posture — a data-bearing graph lists a **minimal card**, never a body; aDNA.aDNA ADR-052 §admission); a second manifest vocabulary; a hosted service. Those are the Exchange's, the company's, or nobody's.

## §8 Forward integration (WHO + WHAT named; WHEN/HOW/WHY deferred — `skill_forward_reference_stub_design`)

- **Profiles** (aDNA.aDNA ADR-066, proposed at ARCADE A3.2): a published graph MAY declare `adna_conformance: <level>+<profile>`; the profile's release-integrity hash manifest rides inside the body; L2 gains an advisory row when the seam is cut (v2.6).
- **Witness anchoring** (Exchange ADR-058): the Exchange's signed tree heads anchored on the AILedger record. The standard names this only as what it is — a witness — and only once the operator clears public naming.
- **Registry row truth** (aDNA.aDNA ADR-052): the adna.network registry projects Hestia's inventory; the Exchange's `conformance_report` is a different object. Neither is the other's source.
- **Standard v2.6**: §5.3 gains the `how/federation/exchange/` example row; §19 names this spec among the optional extensions a graph may adopt.

## Provenance

- 2026-07-11 — placement, minimum and split drafted by this desk (`coord_2026_07_11_rosetta_to_berthier_exchange_graph_spec_placement.md`, answering Berthier's `vb_graph_exchange` memo asks #3/#4 and the Exchange triad's three proposals).
- 2026-08-25 — **all three rulings ratified as drafted** by the operator at aDNALabs S250; delivered 08-26 (operator-sanctioned direct delivery after two lease refusals — the finding that produced this vault's `who/coordination/inbox/` drop-box).
- 2026-10-15 — authored at ARCADE A1.1 (declared opus, executed fable at the operator's R3 selection); L2 custody ruled here as §5; text `proposed` until ADR-064 §7.7.

*End of spec_graph_exchange v0.1 (proposed)*
