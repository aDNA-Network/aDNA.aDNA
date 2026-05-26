---
type: adr
adr_id: adr_027
adr_class: terminal_harness_contract_canonicalization
title: "ADR-027: Canonicalize the terminal ↔ harness provider contract as an ecosystem spec"
status: proposed
created: 2026-05-25
updated: 2026-05-25
last_edited_by: agent_stanley
co_signs: aDNA.aDNA/what/specs/spec_terminal_harness_contract.md
tags: [adr, ecosystem_spec, terminal_harness_contract, multi_terminal, provider_contract, cross_vault, gpl_isolation]
---

# ADR-027 — Canonicalize the terminal ↔ harness provider contract

## Status

`proposed` — authored 2026-05-25 from a cross-vault execution session. Co-signs `what/specs/spec_terminal_harness_contract.md`. The operator may ratify directly or fold into a native aDNA.aDNA standard-evolution mission for full ceremony.

## Context

Running a harness/context system as a **terminal-driven agent** requires a contract between the terminal (observer/launcher) and the harness (lifecycle owner). That contract already exists — but **bilaterally**, between two vaults:

- `LatticeTerminal.aDNA` owns the normative clauses in two artifacts: `PROVIDER-CONTRACT.md` (lifecycle/observability; invariants I-1…I-8; the 6-state machine) and `HARNESS-CONTRACT.md` (launch/selection; the `harness.adna.provider.v1` descriptor).
- `LatticeAgent.aDNA` is the reference conformer, with a full joint-negotiated `spec_latticeterminal_adna_interop_contract.md` (per-clause LT-SHA drift tracking) + control-surface + telemetry schemas.

Two gaps surfaced when planning to run `RareHarnessNeo` as a terminal-driven agent inside `Cmux.aDNA` (a *second* terminal, soft-forked from GPL-3.0 `manaflow-ai/cmux`):

1. **The contract is bilateral.** It assumes LatticeTerminal's HUD as *the* terminal. Cmux is a second terminal that must satisfy the same seam, but nothing generalizes the descriptor beyond LT-ownership.
2. **Cmux's `adr_010` has an open question** (Q5): is Cmux's provider contract co-defined with LatticeAgent, or a Cmux-side adapter? There was no canonical third answer.

## Decision

1. **Canonicalize, by reference.** Author `what/specs/spec_terminal_harness_contract.md` as the 5th ecosystem spec. It **references** LatticeTerminal's two contract files as the normative clause source (never restates them) and **owns only** the generalization layer (multi-terminal / multi-harness), the federation/adoption table, and the multi-terminal + process-isolation clauses.
2. **Generalize terminal-side obligations** from "LatticeTerminal HUD" to "any conforming terminal," and make `PROVIDER-CONTRACT.md §8`'s v2 compliant-provider checklist the **ecosystem-canonical** harness-side obligation set.
3. **Federate via the pointer-spec pattern** (reused from LatticeAgent's existing pattern; not an `iii/`-style wrapper): each consumer vault carries a lightweight `what/specs/` pointer with `canonical_at:` + a per-clause SHA-pin table.
4. **Resolve Cmux ADR-010 Q5**: *neither* co-defined-with-LatticeAgent *nor* a unilateral Cmux adapter — **both Cmux and LatticeAgent conform to this canonical**. Cmux's ADR-010 becomes its conformance ADR (its `/tmp/cmux.sock` JSON-RPC is the Cmux-side binding transport of the canonical descriptor).
5. **Process-isolation / license stance**: a terminal integrates a harness as an arms-length process (subprocess PTY + JSON-RPC/MCP over a socket), never linked code. A differently-licensed harness invoked by the GPL-3.0 Cmux fork is not a derivative work of the terminal.

## Consequences

- **LatticeTerminal**: its two contract files stay canonical and **untouched**; it adds only a one-line pointer-spec at its next phase boundary. No mid-genesis rewrite.
- **LatticeAgent**: flips the 4 TBD stubs in `spec_provider_contract.md` to point at §4 canonical homes (its own control-surface + telemetry schemas). No re-authoring.
- **Cmux**: ADR-010 stays `proposed` until its own P2 Architect gate, but Q5's answer is now available to cite; it authors `spec_provider_conformance.md` at its P3.
- **RareHarnessNeo**: gains a forward conformance pointer; conformance threaded into its genesis P2 (MCP surface) + P4 (frontend decision).
- **Drift**: managed by the per-clause SHA-pin mechanism (spec §8); targeted re-negotiation, never wholesale re-author.
- **Risk acknowledged**: canonicalizing in aDNA.aDNA could read as demoting LatticeTerminal's ownership. Mitigated — the doctrine *references* LT as the normative clause source and owns only the generalization + adoption layer; LT's clause authority is intact.

## Co-signed artifact

`what/specs/spec_terminal_harness_contract.md` (v0.1). This ADR ratifies that spec; the spec's `co_signed_adr` frontmatter points back here. Pattern mirrors `adr_012 ↔ spec_platform_ecosystem`.
