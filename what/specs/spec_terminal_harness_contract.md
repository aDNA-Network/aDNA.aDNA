---
type: spec
kind: ecosystem_spec
name: terminal_harness_contract
created: 2026-05-25
updated: 2026-05-25
version: "0.1"
status: active
last_edited_by: agent_stanley
co_signed_adr: aDNA.aDNA/what/decisions/adr_027_terminal_harness_contract_canonicalization.md
canonical_clause_sources:
  - "LatticeTerminal.aDNA/how/campaigns/campaign_terminal_genesis/missions/M0.0a-architecture-lock/PROVIDER-CONTRACT.md"
  - "LatticeTerminal.aDNA/how/campaigns/campaign_terminal_genesis/missions/M0.0d-launch-harness-spec/HARNESS-CONTRACT.md"
reference_conformance: "LatticeAgent.aDNA/what/specs/spec_latticeterminal_adna_interop_contract.md"
tags: [spec, ecosystem, terminal, harness, provider_contract, boundary_contract, multi_terminal, aDNA_pattern]
---

# Terminal ↔ Harness Contract

> **Plain-language framing (dual-audience).** When you run an AI agent inside a terminal, two programs must agree on a handshake: the **terminal** (the window you see — it draws panes, observes what the agent is doing, and shows you its status) and the **harness** (the program that actually runs the agent — it owns the agent's life: spawn, work, stop). This spec is the canonical statement of that handshake for the Lattice ecosystem, so that *any* terminal can drive *any* harness without either side guessing about the other.

Authoritative reference for the **terminal ↔ harness provider contract** — the boundary that lets a harness/context system (e.g. `LatticeAgent`, `RareHarnessNeo`, `Claude Code`, `OpenCode`) run as a **terminal-driven agent** under any conforming terminal (e.g. `LatticeTerminal`, `Cmux`). This is a **boundary-contract spec**; it sits on the ecosystem-spec shelf alongside [[spec_platform_ecosystem]], [[spec_framework_ecosystem]], `spec_forge_ecosystem.md`, and `spec_org_pattern_ecosystem.md`, but unlike those (which classify aDNA *categories*) it defines an *interface between two platform instances*.

## §0 — What this spec owns, and what it does not

This spec **owns**: (a) the *generalization* of the contract from its current bilateral form (`LatticeTerminal` ↔ `LatticeAgent`) to **any terminal × any harness**; (b) the **adoption/federation table** (which vault carries which pointer-spec); (c) the **multi-terminal** and **process-isolation** clauses (§6) that the bilateral contract never needed to state.

This spec **does not own** (and never restates) the normative clause bodies. Those live in `LatticeTerminal.aDNA`'s two contract artifacts (the canonical-source table, §2). This spec **references them by anchor**. This is the anti-rewrite discipline: a single source of truth for each clause, generalized — never duplicated — here.

## §1 — The two seams, and why they compose

A running terminal+harness system has two distinct seams (verbatim structure from `HARNESS-CONTRACT.md §1`, referenced not restated):

| Seam | Canonical owner doc | Scope | Lifetime |
|------|--------------------|-------|----------|
| **Launch / selection** | `HARNESS-CONTRACT.md` | pick a graph dir → pick a provider → exec it once with cwd+env | one-shot, *pre-boot*; ends at exec |
| **Lifecycle / observability** | `PROVIDER-CONTRACT.md` | spawn/kill/task-claim/mailbox (harness/provider, **I-1**); render/route/telemetry (terminal, **I-2**) | continuous, *post-boot* |

They **compose, never invert**: the launcher resolves a provider and execs it; at exec the launcher is done with lifecycle; from that instant the booted harness owns lifecycle (I-1) and the terminal observes it (I-2). The launcher holds no lifecycle handle — the LEAK-5 bar (`HARNESS-CONTRACT.md §3`), made *structurally impossible*, not merely forbidden.

## §2 — Canonical-source table (references, never restated)

| Clause set | Canonical file | Anchor(s) |
|---|---|---|
| Lifecycle/observability ownership; invariants I-1…I-8; 6-state machine (IDLE·PROCESSING·WAITING_USER·COMPLETED·ERROR·OFFLINE + `stale` decoration); hook subscription; env injection; worktree binding; v2 compliant-provider checklist | `LatticeTerminal.aDNA/…/M0.0a-architecture-lock/PROVIDER-CONTRACT.md` | §1 (I-1..I-8) · §2 (states) · §3 (hooks) · §4 (env) · §5 (worktree) · §8 (compliant-provider checklist) |
| Launch/selection seam; the `harness.adna.provider.v1` descriptor; provider reconciliation; composition proof; LEAK-5 structural bar | `LatticeTerminal.aDNA/…/M0.0d-launch-harness-spec/HARNESS-CONTRACT.md` | §1 (two seams) · §2 (launch txn) · §3 (descriptor + field law) · §4 (reconciliation) · §5 (composition proof) · §6 (default-partner) |
| **Reference conformance implementation** (a harness that already conforms, with the reusable per-clause SHA-drift mechanism) | `LatticeAgent.aDNA/what/specs/spec_latticeterminal_adna_interop_contract.md` | §1 (SHA-drift table) · §4 (state mapping) · §5 (hook equivalents) · §8 (descriptor) · §9 (bidirectional cadence) |

Any conforming party reads the canonical files at a pinned SHA and tracks drift per §8.

## §3 — Terminal-side obligations (generalized: any conforming terminal)

A conforming terminal (the "observer/HUD" role — fulfilled by LatticeTerminal's sidebar HUD, by Cmux's bottom-panel/sidebar, or by any future terminal) MUST, per `PROVIDER-CONTRACT.md` (I-1…I-8 generalized from "LT HUD" to "any terminal"):

- **Discover** the harness's `harness.adna.provider.v1` descriptor and **`detect`-probe** it before launch (`HARNESS-CONTRACT.md §2`).
- **Exec-once** with `cwd = graph_dir` and inject the `LATTICE_*` env (`PROVIDER-CONTRACT.md §4`); then **exit the lifecycle stage** — hold no kill/restart handle (LEAK-5).
- **Observe** the 6-state surface read-only; never mutate provider lifecycle state (I-1).
- **Own** only its own observability state (worktree-binding storage, state cache, observer hook entries) at a terminal-owned path; never write the provider-runtime-managed paths (I-3/I-8).
- **Adapt** to descriptor/hook-contract version bumps; never patch the provider (I-7).

> Generalization note: `PROVIDER-CONTRACT.md` is authored against Claude Code Agent Teams as the v1 fixture and names `~/.claude/teams|tasks` as the provider-runtime paths. The *obligation* (terminal observes, never writes the provider-runtime store) is provider-generic; the *specific paths* are per-provider. A non-Claude-Code harness declares its own discovery surface (`PROVIDER-CONTRACT.md §8` bullet 2).

## §4 — Harness-side obligations (canonical superset)

A conforming harness (the "provider" role) MUST satisfy `PROVIDER-CONTRACT.md §8` (the v2 compliant-provider checklist), here made **ecosystem-canonical** rather than v2-trajectory:

1. Emit the **3 lifecycle hooks** equivalent to `TeammateIdle`/`TaskCreated`/`TaskCompleted` (payloads matching §3 or a documented superset). Supply equivalents for the 3 general session hooks (`PreToolUse`/`Stop`/`SessionEnd`) or document their absence.
2. Expose an **agent-discovery surface** (socket query / REST / filesystem) the terminal can read.
3. Inject `LATTICE_AGENT_ID` + `LATTICE_WORKTREE_PATH` at spawn (`PROVIDER-CONTRACT.md §4`).
4. Honor **cwd-based worktree binding** (`PROVIDER-CONTRACT.md §5`); never write the binding store (I-6).
5. Document **mailbox storage + read API**; never require terminal-write access (`PROVIDER-CONTRACT.md §6`).
6. Ship the **`harness.adna.provider.v1` descriptor** with `provider_id`, `detect`, `launch`, `env_inject`, and the FIXED constants `lifecycle_owner: "provider"` + `observability: "hud"` (no lifecycle verb — LEAK-5 structural bar; `HARNESS-CONTRACT.md §3`).

**Canonical clause homes for the harness-side schemas** (these fill what `LatticeAgent.aDNA/what/specs/spec_provider_contract.md` previously left as TBD stubs): control-surface registration → `LatticeAgent.aDNA/what/specs/spec_control_surface_schema.md`; telemetry emission (closed-10-root enum) → `LatticeAgent.aDNA/what/specs/spec_telemetry_event_schema.md`. These are the **reference** schema shapes; a non-LatticeAgent harness MAY supply its own equivalents but MUST remain provider-generic (§5).

## §5 — Provider-generic constraint

Anything a harness emits across this contract MUST be expressible by every conforming harness. The worked example is LatticeAgent's `observability.la_*` namespace mapping its 12 internal states to the 6 observable states (`spec_latticeterminal_adna_interop_contract.md §4`). Harness-specific extensions are escalated to operator decision, never added unilaterally to the canonical surface. Day-1 conforming providers: `claude_code` (v1-default), `opencode` (co-provider), `latticeagent` (default-partner). Forward: `rareharnessneo` (clinical CDS harness; conforms via its OpenHarness surfaces — see its `rhn_provider_conformance_ref.md`).

## §6 — Multi-terminal generalization + process-isolation (net-new in this spec)

The bilateral LT↔LA contract assumed a single terminal (LatticeTerminal's HUD). This spec generalizes:

- **The descriptor is terminal-neutral.** `harness.adna.provider.v1` names no terminal. Any terminal that fulfills §3 may discover and boot any harness that ships the descriptor.
- **Binding transports differ per terminal; the contract does not.** LatticeTerminal binds via `settings.json hooks[]` + `vault://orchestration/hud-state/` (`PROVIDER-CONTRACT.md §7.3`). Cmux binds via its `/tmp/cmux.sock` JSON-RPC + `cmux.json notifications.hooks` (see `Cmux.aDNA/what/decisions/adr_010_agent_provider_contract.md`). Both are valid bindings of the same canonical descriptor; neither is privileged.
- **Process-isolation clause (load-bearing for mixed licensing).** A terminal integrates a harness as an **arms-length process** — subprocess spawn (worktree PTY) and/or JSON-RPC/MCP over a socket — **never as linked code**. A differently-licensed harness (e.g. an Apache-2.0 `RareHarnessNeo`, or `LatticeAgent`) invoked as a subprocess by a GPL-3.0 terminal fork (`Cmux`, soft-forked from `manaflow-ai/cmux`) is **not** a derivative work of the terminal. This clause keeps the ecosystem license-clean by construction; any distributed terminal binary must still close its own license posture independently.

## §7 — Federation / adoption table

This contract federates by the **pointer-spec** pattern (reused from `LatticeAgent.aDNA/what/specs/spec_provider_contract.md` — NOT a heavyweight `iii/`-style wrapper). Each consumer vault carries a lightweight spec in its own `what/specs/` with `canonical_at:` pointing here + a per-clause SHA-pin table (§8).

| Vault | Role | Pointer-spec | Adoption posture |
|---|---|---|---|
| `LatticeTerminal.aDNA` | Terminal (canonical clause source) | `what/specs/spec_terminal_harness_contract_ref.md` | Its two contract files remain the normative clause source; this doctrine references + generalizes them. No rewrite. |
| `LatticeAgent.aDNA` | Harness (reference conformance) | `what/specs/spec_provider_contract.md` (TBDs → pointers) | Already conforms; flips its 4 TBD stubs to point at §4 canonical homes. |
| `Cmux.aDNA` | Terminal (second; soft-fork) | `what/specs/spec_provider_conformance.md` (authored at its genesis P3) | Conforms as a second terminal; its `adr_010` is the Cmux-side *conformance* ADR, not a competing contract. |
| `RareHarnessNeo.aDNA` | Harness (forward exemplar) | `what/specs/rhn_provider_conformance_ref.md` | Will conform via OpenHarness surfaces; conformance threaded into its genesis P2 (MCP surface) + P4 (frontend). |

## §8 — Drift discipline

Adopt LatticeAgent's per-clause **LT-artifact-SHA drift table** (`spec_latticeterminal_adna_interop_contract.md §1`) as the canonical mechanism. Each pointer-spec (per §7) carries its own pin table: clause → canonical file → pinned SHA → status. At any phase boundary, a SHA change at a cell triggers a **targeted** re-negotiation of that clause only — never a wholesale re-author. The operator is arbiter for irreconcilable divergence (precedent: the LT↔LA `coord §Conflict-resolution authority`).

## §9 — Resolution of the Cmux open question

`Cmux.aDNA/what/decisions/adr_010_agent_provider_contract.md` open-Q5 asks: *"is this ADR the cmux-side adapter, or do the two vaults [Cmux + LatticeAgent] co-define the contract?"* — **Answer: neither.** Both Cmux and LatticeAgent **conform to this canonical** (which itself references LatticeTerminal's normative clauses). Cmux's ADR-010 is its conformance ADR; LatticeAgent's interop spec is its conformance spec. The contract is co-defined by no single pair — it is ecosystem-canonical here.

## Provenance

Authored 2026-05-25 per approved workspace plan (`~/.claude/plans/please-read-the-claude-md-compiled-cherny.md`). Generalizes the bilateral `LatticeTerminal.aDNA ↔ LatticeAgent.aDNA` contract (negotiated 2026-05-18 via Joint Interop Negotiation) to multi-terminal/multi-harness, prompted by the requirement to run `RareHarnessNeo` as a terminal-driven agent inside `Cmux`. Co-signed ADR: `adr_027_terminal_harness_contract_canonicalization.md`.

## See also

- [[spec_platform_ecosystem]] — the Platform.aDNA category these terminals + harnesses belong to.
- [[spec_framework_ecosystem]] — the consumer-wrapper/federation pattern this spec's pointer-spec adoption echoes (lightweight variant).
