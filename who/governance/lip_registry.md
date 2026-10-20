---
type: governance
subtype: registry
title: "LIP Registry — the global Lattice Improvement Proposal number line (registrar view)"
status: proposed            # ⛩ registrar ROLE accepted by the operator 2026-10-16 (ARCADE G2 sitting, ruling R20 on the Canvas 2026-07-02 handshake ask, re-asked 2026-10-16); the ROWS are census-derived and proposed until each steward confirms its own; §7.7 for the registry text at the v2.6 cut (A4.1)
created: 2026-10-16
updated: 2026-10-20   # §4 + frontmatter derivability: declared (ARCADE A4.2, d11 first consumer). Prior: §Ratification (b) RULED at ARCADE G4 (operator R43, gate row B4): 0003 · 0005 · 0007 ratified; 0006 · 0008–0011 proposed until each steward confirms; 0001 · 0002 · 0004 recorded predecessor-only. Prior: §2.1 note row (F-AC-45, Noether 10-18); prior: 2026-10-16 created
last_edited_by: agent_rosetta
authored_at_tier: fable
session: session_stanley_20261016_205633_arcade_g2_sends_sync_replies
campaign: campaign_arcade
census_method: "grep -rl 'LIP-0NNN' --include='*.md' over */who/governance */what/decisions */what/docs on this node, 2026-10-16, plus the archived predecessor line Archive.aDNA/lattice-labs/how/governance/lips/lip_registry.md and Canvas.aDNA/who/governance/lips/lip_registry.md (read at HEAD f0c2c44)"
relates: ["Canvas.aDNA who/governance/lips/lip_registry.md", "Canvas.aDNA what/decisions/adr_003_standard_governance.md §Amendment 1", "Archive.aDNA/lattice-labs/how/governance/lips/lip_registry.md (predecessor line, reader-only)", adr_055_proposal_process]
derivability:              # d11, the 11th compliance dimension (ARCADE A4.2, G4 row B3); scored by what/lattices/tools/compliance_checker.py
  discovery_pass: "the census_method above, re-run at each minor cut; new LIP tokens not in §2 are findings"
  last_run: 2026-10-16
  # consumer: not named — the adna_validate LIP-token check in §4 is not built yet; naming it would claim a consumer that does not exist
tags: [governance, registry, lip, registrar, number_line, proposed]
---

# LIP Registry — the global number line

> **Plain version.** A LIP (Lattice Improvement Proposal) gets one number for the whole network, so two vaults never write two different "LIP-0012"s. This file is the one place that hands out the numbers. It does **not** hold the proposals themselves — each steward keeps its own LIPs' text and ratification in its own vault — it only records *which number belongs to whom*. **Self-reference (Standing Order 8):** this file is itself the kind of registry Mondrian's 2026-09-16 §4 memo warns about — a hand-maintained list — so §4 below names its consumer and its discovery pass, rather than leaving it in the third state.

## §1 The registrar role

- **Registrar:** `aDNA.aDNA` (Rosetta), by the operator's acceptance of 2026-10-16 (ruling R20, ARCADE G2 sitting) of the arrangement Canvas recorded in its Canvas ADR-003 Amendment 1 (2026-07-02) and asked for in `coord_2026_07_02_lip_registrar_handshake.md` (delivered 2026-10-16 inside `coord_2026_10_16_mondrian_to_rosetta_rfc1918_in_the_template_skill_and_the_registrar_handshake_that_never_left`).
- **What the registrar does:** assigns the next free number on request, records steward and title, never edits a LIP's text or status. **What it does not do:** ratify, review, or host any LIP but its own.
- **How to get a number:** a memo to this vault's drop-box naming the working title and steward vault; the number is assigned in order of receipt and the row is added here in the same act. Until a number is assigned, a draft is `LIP-XXXX`.
- **Predecessor line:** LIP-0001…0009 were assigned in the `lattice-labs` registry (archived reader-only 2026-06-27). Those numbers are **honoured as assigned**; nothing is renumbered (stable IDs are load-bearing, as the ADR index's numbering note says of ADRs).

## §2 The line, as derived 2026-10-16

| LIP | Title (as the steward states it) | Steward (content + ratification) | Status at the steward | Basis `[D]`/`[R]` |
|---|---|---|---|---|
| LIP-0001 | LIP Purpose and Guidelines | predecessor line (archived); Canvas holds a Canvas-local working copy | Accepted (2026-03-07) | `[D]` archive row 18; Canvas registry |
| LIP-0002 | RBAC Role Hierarchy | predecessor line (archived) — no live steward found | Draft (2026-03-08) | `[D]` archive row 19; 2 Canvas mentions only |
| LIP-0003 | Lattice Protocol Specification v1.0 (+ the v1.1 ledger-event chapter) | **LatticeProtocol.aDNA** (Noether) — LP.aDNA-ADR-009 "LIP-0003's standing" | per LP ADR-009 | `[D]` LP `who/governance/adr_009_lip_0003_standing.md` |
| LIP-0004 | Character NFT Signer Authority Standard | predecessor line (archived) — no live steward found | Draft (2026-04-26) | `[D]` archive row 21; zero live mentions |
| LIP-0005 | Org-Graph.aDNA Pattern Category | **aDNA.aDNA** (ratified 2026-05-15; `spec_org_pattern_ecosystem.md`) | Accepted | `[D]` workspace router; this vault's spec |
| LIP-0006 | Network.aDNA Pattern Category | **Network.aDNA** (Venus) stewards; aDNA.aDNA holds the category spec | Provisional (per the router) | `[D]` 13 Network mentions; this vault 4 |
| LIP-0007 | ISS (Interaction Surface Site) Pattern | **aDNA.aDNA** (`pattern_iss_operator_gate`; FA-ratified at SiteForge ISS P7.2) — Astro.aDNA holds the adaptation guides | Accepted (2026-05-30) | `[D]` archive row 24; root CLAUDE Rule 8 |
| LIP-0008 | Derived Surfaces as Pure Metadata (Canvas `panel_link` A-5 relaxation) | **Canvas.aDNA** (Mondrian) | Final (v2.3.0) | `[D]` Canvas registry |
| LIP-0009 | Canvas as a First-Class aDNA Primitive (evaluation) | **Canvas.aDNA** | Final (Option V) | `[D]` Canvas registry |
| LIP-0010 | Diagrammatic context — the `authority`/`production` axis split (→ A-8) | **Canvas.aDNA** | Final (2026-09-11) | `[D]` Canvas registry |
| LIP-0011 | Sync semantics (`sync_hash` = topology; `sync.source_sha256`; `sync.generator`) | **Canvas.aDNA** | Final (2026-10-15/16; Canvas Standard v2.5.0) | `[D]` Canvas registry |
| **LIP-0012** | *next free* | — | — | derived: no file on this node names it |

**Tally (derived, not typed):** 11 assigned · 4 Canvas-stewarded (0008–0011) · 1 LatticeProtocol (0003) · 3 aDNA.aDNA / Network (0005 · 0006 · 0007) · 3 predecessor-only (0001 · 0002 · 0004). Rows marked *no live steward found* are **asked back** to the fleet by this registry's first memo; a steward who claims one confirms it by memo and the row moves from `[D] archive` to `[D] steward`.

### §2.1 Note row — the 3-digit protocol line (not this registry's numbers)

| Line | Digits | Steward | Rule | Basis |
|---|---|---|---|---|
| Protocol `LIP-NNN` (`LIP-000`…`LIP-004` today) | **3** | **LatticeProtocol.aDNA** (Noether) — `what/latticeprotocol/docs/proposals/` | LP `LIP-000_lip_process.md` (L25–37): *never zero-pad or truncate a LIP number*; `LIP-001` ≠ `LIP-0001` | `[D]` `ls` of the proposals dir + LIP-000 read 2026-10-19; asked by Noether as F-AC-45 (`coord_2026_10_18_noether_to_rosetta_triage_received_f_ac_44_fixed_lip_0003_confirmed` §3) |

§2's "one number for the whole network" covers the **4-digit** line only. The 3-digit protocol line is a second, older namespace with its own steward; this registry hands out none of its numbers and renumbers nothing. A zero-pad is a misroute: LP `LIP-004` (trust-tier lifecycle event, implemented 2026-10-06) is not `LIP-0004` (the archived Character NFT signer standard), and LP `LIP-003` is not `LIP-0003` (the protocol specification). Cite either line with its digit width verbatim. *(LP's `LIP-000` L31 still names the archived `lattice-labs` registry as the 4-digit home; that pointer is LP's to correct at its next code mission, per Noether.)*

## §3 Relation to the ADR line and the AEP line

Three number lines, three owners, deliberately not merged: **ADRs** are per-vault (every vault has its own `ADR-0NN`; cross-vault citations are vault-qualified — ARCADE rule 3). **AEPs** (aDNA Enhancement Proposals, aDNA.aDNA ADR-055 §2) are this vault's line for changes to the *standard's text*. **LIPs** are the network-wide line for the Lattice Protocol and the patterns built on it; this registry hands out their numbers.

## §4 This registry's own derivability (Mondrian §4, taken seriously here first)

- **Consumer:** `adna_validate.py` gains, at the v2.6 cut, a check that every `LIP-0NNN` token in this vault's governance and specs appears in §2 — the registry fails when the text drifts from it.
- **Discovery pass:** the `census_method` in the frontmatter is re-run at each minor cut; new tokens not in §2 are findings.
- Until the consumer exists, this file is in the third state Mondrian names, and says so.
- **Declared (2026-10-20):** the frontmatter `derivability:` block carries the discovery pass and its last run, and the 11th compliance dimension (d11, `compliance_checker.py`) scores it. This file is that dimension's first in-vault consumer. Its consumer leg stays unnamed until the check exists.

## Ratification (§7.7)

| Field | Value |
|---|---|
| **Decision** | (a) `aDNA.aDNA` accepts the registrar role for the global LIP number line; (b) the §2 rows: **LIP-0003 · 0005 · 0007 ratified** (steward-confirmed: Noether 10-18 for 0003; aDNA.aDNA stewards 0005 · 0007) · **0006 · 0008–0011 stay proposed** until Venus / Canvas confirm their own rows · **0001 · 0002 · 0004 recorded as predecessor-only** (no live steward) |
| **Ratified-by** | (a) Stanley (operator), ruling R20 at the ARCADE G2 sitting — *in force*; (b) Stanley (operator), ruling R43 at ARCADE G4 (`how/gates/arcade_v2_6_gate.md` row B4) — *in force for the three ratified rows* |
| **Date** | (a) 2026-10-16 · (b) 2026-10-20 |
| **Status** | (a) **accepted** · (b) **accepted in part** (3 rows) — the rest proposed or recorded |
| **Scope of authority** | number assignment only; no LIP's content, status or home moves by this file |
