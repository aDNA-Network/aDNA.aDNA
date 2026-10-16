---
type: spec
kind: ecosystem_spec
name: terminal_harness_contract
created: 2026-05-25
updated: 2026-10-16   # v0.2 delta ACCEPTED at ARCADE G1 (operator R11; §7.7 below); authored 2026-10-15 — ARCADE A1.2: path-only re-anchor to the in-Harness contract copies (blob SHAs unchanged — the §8 no-drift case), the Terminal.aDNA protocol-seam binding (ADR-B09), the §7 adoption table at today's names; v0.1 2026-05-25
version: "0.2"
version_status: "v0.2 ACCEPTED — ARCADE G1, 2026-10-16 (operator R11; §7.7 below); supersedes v0.1 (ratified with aDNA.aDNA ADR-027, 2026-07-02) — path-only re-anchor, no normative clause body changed"
status: active
last_edited_by: agent_rosetta
co_signed_adr: aDNA.aDNA/what/decisions/adr_027_terminal_harness_contract_canonicalization.md
co_signed_adr_status: "accepted — ratified 2026-07-02 at Champollion G0 (operator; D2 ratify-with-refresh)"
canonical_clause_sources:   # authoritative in-Harness since 2026-06-07 (WS-3/M1 rehome; Harness what/context/harness_core/terminal_contracts/README.md)
  - "Harness.aDNA/what/context/harness_core/terminal_contracts/PROVIDER-CONTRACT.md"
  - "Harness.aDNA/what/context/harness_core/terminal_contracts/HARNESS-CONTRACT.md"
canonical_clause_sha:       # git hash-object, re-verified 2026-10-15 on BOTH trees (in-Harness copy = archived original)
  PROVIDER-CONTRACT.md: "14b651d3d0d7aebfe648ac61e3fd83339dcc3f72"
  HARNESS-CONTRACT.md: "7f2508f0113b70682f36c5dd939d6f072c7e2e13"
archive_originals:          # SO-7 audit trail — read-only; the vault was archived 2026-06 (aDNALabs campaign_terminal_agent_consolidation M3)
  - "Archive.aDNA/LatticeTerminal.aDNA/how/campaigns/campaign_terminal_genesis/missions/M0.0a-architecture-lock/PROVIDER-CONTRACT.md"
  - "Archive.aDNA/LatticeTerminal.aDNA/how/campaigns/campaign_terminal_genesis/missions/M0.0d-launch-harness-spec/HARNESS-CONTRACT.md"
reference_conformance: "Archive.aDNA/LatticeAgent.aDNA/what/specs/spec_latticeterminal_adna_interop_contract.md"   # archived original, blob a640076e70be0931e7e0f18fd72acc22749b6385
reference_conformance_live_descendant: "Harness.aDNA/what/context/harness_core/latticeagent_specs/spec_latticeterminal_adna_interop_contract.md"   # frozen snapshot, blob 98cf8b3748d4950f3bf657beb17360905ba5592d — differs from the original ONLY by the 2026-06-07 pin-rehome annotation (diff'd 2026-10-15); no clause text differs
tags: [spec, ecosystem, terminal, harness, provider_contract, boundary_contract, multi_terminal, aDNA_pattern, v0_2_proposed, arcade]
---

# Terminal ↔ Harness Contract

> **Plain-language framing (dual-audience).** When you run an AI agent inside a terminal, two programs must agree on a handshake: the **terminal** (the window you see — it draws panes, observes what the agent is doing, and shows you its status) and the **harness** (the program that actually runs the agent — it owns the agent's life: spawn, work, stop). This spec is the canonical statement of that handshake for the aDNA ecosystem, so that *any* terminal can drive *any* harness without either side guessing about the other.

> **v0.2 (2026-10-15, PROPOSED — ARCADE A1.2).** A *path-only* re-anchor: the normative clause bodies now resolve to their authoritative in-Harness copies (the originals' vault was archived in June 2026), the adoption table names today's graphs, and §6 gains the live Terminal's protocol-seam binding. **No clause was re-negotiated** — the two clause-source files are byte-identical to the originals (frontmatter `canonical_clause_sha`, verified on both trees at the re-anchor), which is exactly the §8 no-drift case. Ratification of the delta: §7.7. Source: `how/backlog/idea_terminal_harness_contract_reanchor.md` (accepted rows 1–5, Champollion G0 2026-07-02).

Authoritative reference for the **terminal ↔ harness provider contract** — the boundary that lets a harness/context system (e.g. `Harness.aDNA` (`rareharness`), `Claude Code`, `OpenCode`) run as a **terminal-driven agent** under any conforming terminal (e.g. `Terminal.aDNA`, the Python/Textual console; before it, the archived LatticeTerminal HUD and the archived Go console of the Cmux lineage). This is a **boundary-contract spec**; it sits on the ecosystem-spec shelf alongside [[spec_platform_ecosystem]], [[spec_framework_ecosystem]], `spec_forge_ecosystem.md`, `spec_org_pattern_ecosystem.md` and [[spec_graph_exchange]], but unlike the category specs (which classify aDNA *categories*) it defines an *interface between two platform instances*.

## §0 — What this spec owns, and what it does not

This spec **owns**: (a) the *generalization* of the contract from its original bilateral form (`LatticeTerminal` ↔ `LatticeAgent`, both since archived) to **any terminal × any harness**; (b) the **adoption/federation table** (which vault carries which pointer-spec); (c) the **multi-terminal** and **process-isolation** clauses (§6) that the bilateral contract never needed to state.

This spec **does not own** (and never restates) the normative clause bodies. Those live in the two contract artifacts, **authoritative in-Harness since 2026-06-07** (`Harness.aDNA/what/context/harness_core/terminal_contracts/`; originals archived under `Archive.aDNA/LatticeTerminal.aDNA/…`, SO-7 — the canonical-source table, §2). This spec **references them by anchor**. This is the anti-rewrite discipline: a single source of truth for each clause, generalized — never duplicated — here.

## §1 — The two seams, and why they compose

A running terminal+harness system has two distinct seams (verbatim structure from `HARNESS-CONTRACT.md §1`, referenced not restated):

| Seam | Canonical owner doc | Scope | Lifetime |
|------|--------------------|-------|----------|
| **Launch / selection** | `HARNESS-CONTRACT.md` | pick a graph dir → pick a provider → exec it once with cwd+env | one-shot, *pre-boot*; ends at exec |
| **Lifecycle / observability** | `PROVIDER-CONTRACT.md` | spawn/kill/task-claim/mailbox (harness/provider, **I-1**); render/route/telemetry (terminal, **I-2**) | continuous, *post-boot* |

They **compose, never invert**: the launcher resolves a provider and execs it; at exec the launcher is done with lifecycle; from that instant the booted harness owns lifecycle (I-1) and the terminal observes it (I-2). The launcher holds no lifecycle handle — the LEAK-5 bar (`HARNESS-CONTRACT.md §3`), made *structurally impossible*, not merely forbidden.

## §2 — Canonical-source table (references, never restated)

| Clause set | Canonical file (authoritative) | Blob SHA (verified 2026-10-15) | Archived original (SO-7, read-only) | Anchor(s) |
|---|---|---|---|---|
| Lifecycle/observability ownership; invariants I-1…I-8; 6-state machine (IDLE·PROCESSING·WAITING_USER·COMPLETED·ERROR·OFFLINE + `stale` decoration); hook subscription; env injection; worktree binding; v2 compliant-provider checklist | `Harness.aDNA/what/context/harness_core/terminal_contracts/PROVIDER-CONTRACT.md` | `14b651d3…` | `Archive.aDNA/LatticeTerminal.aDNA/…/M0.0a-architecture-lock/PROVIDER-CONTRACT.md` (same blob) | §1 (I-1..I-8) · §2 (states) · §3 (hooks) · §4 (env) · §5 (worktree) · §8 (compliant-provider checklist) |
| Launch/selection seam; the `harness.adna.provider.v1` descriptor; provider reconciliation; composition proof; LEAK-5 structural bar | `Harness.aDNA/what/context/harness_core/terminal_contracts/HARNESS-CONTRACT.md` | `7f2508f0…` | `Archive.aDNA/LatticeTerminal.aDNA/…/M0.0d-launch-harness-spec/HARNESS-CONTRACT.md` (same blob) | §1 (two seams) · §2 (launch txn) · §3 (descriptor + field law) · §4 (reconciliation) · §5 (composition proof) · §6 (default-partner) |
| **Reference conformance implementation** (a harness that conformed first, with the reusable per-clause SHA-drift mechanism) | `Archive.aDNA/LatticeAgent.aDNA/what/specs/spec_latticeterminal_adna_interop_contract.md` (archived original, `a640076e…`); live frozen snapshot `Harness.aDNA/what/context/harness_core/latticeagent_specs/spec_latticeterminal_adna_interop_contract.md` (`98cf8b37…` — differs only by the 2026-06-07 pin-rehome annotation) | see cell | — | §1 (SHA-drift table) · §4 (state mapping) · §5 (hook equivalents) · §8 (descriptor) · §9 (bidirectional cadence) |

Any conforming party reads the canonical files at a pinned SHA and tracks drift per §8. *(v0.1 pointed the first two rows at `LatticeTerminal.aDNA/…` and the third at `LatticeAgent.aDNA/…`; both vaults were archived in June 2026 and the ecosystem's own precedent — Harness re-pointed its pointer-spec off LatticeTerminal at WS-3/M1, 2026-06-07 — forbids a live spec citing an archived vault. The path cells moved; the blobs did not.)*

## §3 — Terminal-side obligations (generalized: any conforming terminal)

A conforming terminal (the "observer/HUD" role — fulfilled by the archived LatticeTerminal's sidebar HUD, by the archived Go console's bottom-panel/sidebar (Cmux lineage), by the live `Terminal.aDNA` (Python/Textual: `terminald` + the Textual app + `terminal-mcp`), or by any future terminal) MUST, per `PROVIDER-CONTRACT.md` (I-1…I-8 generalized from "LT HUD" to "any terminal"):

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

**Canonical clause homes for the harness-side schemas** (these fill what the LatticeAgent-era `spec_provider_contract.md` left as TBD stubs): control-surface registration → the frozen snapshot `Harness.aDNA/what/context/harness_core/latticeagent_specs/spec_control_surface_schema.md` (provenance) and its live adapted descendant `Harness.aDNA/what/context/harness_core/harness_control_surface_spec.md`; telemetry emission (closed-10-root enum) → the frozen snapshot `…/latticeagent_specs/spec_telemetry_event_schema.md` and its live descendant `…/harness_core/harness_telemetry_spec.md`. These are the **reference** schema shapes; a non-Harness harness MAY supply its own equivalents but MUST remain provider-generic (§5). *(v0.1 cited `LatticeAgent.aDNA/what/specs/…`; that vault is archived — row 2 of the re-anchor idea.)*

## §5 — Provider-generic constraint

Anything a harness emits across this contract MUST be expressible by every conforming harness. The worked example is LatticeAgent's `observability.la_*` namespace mapping its 12 internal states to the 6 observable states (`spec_latticeterminal_adna_interop_contract.md §4`, in the archived original and the in-Harness snapshot alike). Harness-specific extensions are escalated to operator decision, never added unilaterally to the canonical surface.

Conforming providers, with the tense of each claim (the `exchange-adoption-path` labels: `PASS` verified today · `TAUGHT-AS-DESIGN` ratified, not yet live · `HORIZON` intended):

- `claude_code` — v1-default. Hosted by `Terminal.aDNA` over A2A v1.0 since Bastide s1 (exit item 5 MET live 2026-09-23) and over ACP since Enceinte e2 (claims held 2026-10-12; scope: the live adapter does not yet route its commands through `terminal/*`, Terminal F-V-E2-4) — `PASS` at those scopes.
- `opencode` — co-provider at v0.1 (2026-05-25); **not re-verified since** — carried as v0.1 wrote it, no tense claimed.
- `latticeagent` — **superseded**: the vault is archived (`Archive.aDNA/LatticeAgent.aDNA`); its successor is `Harness.aDNA` (`provider_id: rareharness`; package name `rareharness` grandfathered, the `harness_adna` rename deferred at Panacea's discretion — Harness MANIFEST, finished-state row). Harness conforms via its pointer-spec `Harness.aDNA/what/specs/rh_provider_conformance_ref.md` (v0.3: descriptor full shape finalized; runtime wiring at genesis-execution) and runs under the live Terminal on the interim PTY path (Terminal s2 Sitting C, 2026-09-28) — descriptor `TAUGHT-AS-DESIGN`, PTY hosting `PASS`.
- *(v0.1's forward `rareharnessneo` is the same graph — `RareHarnessNeo.aDNA` was promoted to `RareHarness.aDNA` 2026-05-25 and elevated to `Harness.aDNA` 2026-05-31.)*

## §6 — Multi-terminal generalization + process-isolation (net-new in this spec)

The bilateral LT↔LA contract assumed a single terminal (LatticeTerminal's HUD). This spec generalizes:

- **The descriptor is terminal-neutral.** `harness.adna.provider.v1` names no terminal. Any terminal that fulfills §3 may discover and boot any harness that ships the descriptor.
- **Binding transports differ per terminal; the contract does not.** Three instances now exist, two of them archived:
  - the LatticeTerminal HUD bound via `settings.json hooks[]` + `vault://orchestration/hud-state/` (`PROVIDER-CONTRACT.md §7.3`) — archived;
  - the Go console (Cmux lineage) bound via its `/tmp/cmux.sock` JSON-RPC + `cmux.json notifications.hooks` (its conformance ADR, `adr_010_agent_provider_contract.md`, and its pointer-spec are archived with it at `Archive.aDNA/TerminalGo.aDNA/`) — archived 2026-10-06;
  - **`Terminal.aDNA` (live) binds through its three protocol seams** — Terminal ADR-B09 (`accepted` 2026-09-29): **ACP hosts local agents, with the per-node daemon `terminald` as the ACP client** (sessions are truth in the daemon; an agent's own terminal calls map onto daemon child PTYs; a permission request becomes an attention item decided by a present human); **A2A v1.0 connects graph to graph** (one signed Agent Card per node, P3 never on the card); **MCP carries tools** (`terminal-mcp`). The descriptor, the two seams and the LEAK-5 bar are unchanged under all three; the seams are *how the binding is carried*, which this spec leaves to each terminal. Protocol versions and SDK pins are Terminal's (ADR-B09), never restated here.
  
  Each is a valid binding of the same canonical descriptor; none is privileged.
- **Process-isolation clause (load-bearing for mixed licensing).** A terminal integrates a harness as an **arms-length process** — subprocess spawn (worktree PTY) and/or JSON-RPC/MCP/ACP over a socket or stdio — **never as linked code**. A differently-licensed harness (e.g. an Apache-2.0 `rareharness`, or the archived `LatticeAgent`) invoked as a subprocess by a GPL-3.0 terminal (the archived Go console, soft-forked from `manaflow-ai/cmux`) is **not** a derivative work of the terminal. This clause keeps the ecosystem license-clean by construction; any distributed terminal binary must still close its own license posture independently (the Python Terminal declares `Apache-2.0` in its own `what/terminal/pyproject.toml`; its distribution posture is that graph's record, never this spec's).

## §7 — Federation / adoption table

This contract federates by the **pointer-spec** pattern (reused from the LatticeAgent-era `spec_provider_contract.md` — NOT a heavyweight `iii/`-style wrapper). Each consumer vault carries a lightweight spec in its own `what/specs/` with `canonical_at:` pointing here + a per-clause SHA-pin table (§8).

| Vault | Role | Pointer-spec | Adoption posture (2026-10-15) |
|---|---|---|---|
| `Archive.aDNA/LatticeTerminal.aDNA` (was `LatticeTerminal.aDNA`; archived June 2026) | Terminal (original clause source) | `what/specs/spec_terminal_harness_contract_ref.md` (archived, read-only) | Its two contract files remain the normative clause source **by content** — custody of the authoritative copies passed to `Harness.aDNA` at WS-3/M1 (2026-06-07), byte-identical. No rewrite. |
| `Archive.aDNA/LatticeAgent.aDNA` (was `LatticeAgent.aDNA`; archived June 2026) | Harness (reference conformance, first conformer) | `what/specs/spec_provider_contract.md` (archived) | **Superseded → `Harness.aDNA`**; its interop spec and schema specs survive as frozen snapshots under `Harness.aDNA/what/context/harness_core/latticeagent_specs/`. |
| **`Terminal.aDNA`** (Python/Textual; took the canonical name 2026-09-22; the Go console archived 2026-10-06 → `Archive.aDNA/TerminalGo.aDNA`) | Terminal (live; the network's recommended default — [[spec_platform_ecosystem]] §Access points) | **None authored for the Python graph yet** (`HORIZON`). The last pointer-spec is the Go console's, archived with it: `Archive.aDNA/TerminalGo.aDNA/what/specs/spec_provider_conformance.md` (its §6 pins on the two contracts re-verified by Terminal CHANGE-LEDGER L-155, 2026-09). | Conforms by record: ADR-B09 (seams) · the Claude-Code `harness.adna.provider.v1` descriptor ack (carried-into-slice1 §G, 2026-09-21) · Harness on the interim PTY (s2 C). A pointer-spec for the Python graph is **asked of Vauban at ARCADE A1.3**; until it exists this row is the conformance record. |
| **`Harness.aDNA`** (was `RareHarnessNeo.aDNA` → `RareHarness.aDNA` 2026-05-25 → elevated 2026-05-31) | Harness (`provider_id: rareharness`; forward exemplar at v0.1, live conformer now) | `what/specs/rh_provider_conformance_ref.md` (v0.3, 2026-06-07 — already repointed to the in-Harness contract copies at WS-3/M1, the precedent this re-anchor follows) | Descriptor full shape finalized (v0.3); runtime wiring at genesis-execution. ⚠ Its row 2 still reads `canonical_adr_status: proposed` — aDNA.aDNA ADR-027 has been `accepted` since 2026-07-02; a re-pin notice is staged (`who/coordination/coord_2026_10_15_rosetta_to_panacea_*`), to send once G1 signs this v0.2 (the doctrine SHA their row 1 pins changes with it). |

## §8 — Drift discipline

Adopt LatticeAgent's per-clause **artifact-SHA drift table** (`spec_latticeterminal_adna_interop_contract.md §1`, now resolving against the in-Harness copies) as the canonical mechanism. Each pointer-spec (per §7) carries its own pin table: clause → canonical file → pinned SHA → status. At any phase boundary, a SHA change at a cell triggers a **targeted** re-negotiation of that clause only — never a wholesale re-author. The operator is arbiter for irreconcilable divergence (precedent: the LT↔LA `coord §Conflict-resolution authority`).

**The no-drift case, exercised (2026-10-15).** A path cell moving while the blob SHA stays equal is a *pointer update*, not a clause change: nothing re-negotiates, each pointer-spec updates the path cell at its next sitting. This v0.2 is that case for both clause-source rows (`14b651d3…`, `7f2508f0…`, verified on both trees). What *does* change a pin is this doctrine file's own blob — Terminal's and Harness's row-1 pins on `spec_terminal_harness_contract.md` move once G1 signs, and both pointer-specs re-pin then (the WS-3/M1 precedent: expected, content-bearing, targeted).

## §9 — Resolution of the Cmux open question (historical)

The Go console's `adr_010_agent_provider_contract.md` open-Q5 asked: *"is this ADR the cmux-side adapter, or do the two vaults [Cmux + LatticeAgent] co-define the contract?"* — **Answer: neither.** Both conformed to this canonical (which itself references the normative clauses). Cmux's ADR-010 was its conformance ADR; LatticeAgent's interop spec was its conformance spec. The contract is co-defined by no single pair — it is ecosystem-canonical here. *(Both vaults are archived; the answer stands and binds the live Terminal and Harness the same way.)*

## §7.7 — Ratification (v0.2 delta)

| Field | Value |
|---|---|
| **Decision** | Adopt the v0.2 delta of this spec: the path-only re-anchor (frontmatter · §0 · §2 · §4), the §5 tense-labelled provider list, the §6 Terminal.aDNA protocol-seam binding, the §7 adoption table at today's names, and the §8 no-drift clause — no normative clause body changed |
| **Ratified-by** | Stanley (operator) |
| **Date** | 2026-10-16 |
| **Status** | **accepted** |
| **Gate / session reference** | ARCADE G1 — ruled 2026-10-16 by AskUserQuestion at plan time, ruling **R11** ("Sign all four as written"), `session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065`; `campaign_arcade.md` §5 row G1; authored at `session_stanley_20261015_224015_arcade_a1_2_terminal_platform_specs_cli_sweep` |
| **Scope of authority** | this spec's v0.2 text; the pointer-specs' re-pins are Terminal's and Harness's own acts after signature (Harness notified by the Panacea re-pin notice, sent after this signature — the SHA they pin is the one they read on receipt) |

## Provenance

- 2026-05-25 — v0.1 authored per approved workspace plan (`~/.claude/plans/please-read-the-claude-md-compiled-cherny.md`). Generalizes the bilateral `LatticeTerminal.aDNA ↔ LatticeAgent.aDNA` contract (negotiated 2026-05-18 via Joint Interop Negotiation) to multi-terminal/multi-harness, prompted by the requirement to run `RareHarnessNeo` as a terminal-driven agent inside `Cmux`. Co-signed ADR: aDNA.aDNA `adr_027_terminal_harness_contract_canonicalization.md` — **accepted 2026-07-02** (Champollion G0).
- 2026-06-11 — Berthier (Terminal.aDNA, Operation Gateway gw_p0) proposed the five-spot re-anchor (`idea_terminal_harness_contract_reanchor`); accepted at Champollion G0 2026-07-02 (M1.1 → M2.1), not executed there.
- 2026-10-15 — **v0.2 (proposed)** at ARCADE A1.2 (declared opus, executed fable at the operator's session): rows 1–5 of the idea applied as path cells; blob SHAs re-verified on both trees; the §6 third binding added from Terminal ADR-B09; the Terminal row's pointer-spec gap recorded honestly as `HORIZON`. Text `proposed` until G1 (§7.7).
- 2026-10-16 — **v0.2 ACCEPTED** at ARCADE G1 (operator R11, as written; §7.7). The two clause-source blobs did not move (`canonical_clause_sha` unchanged); this file's own blob moved with the signature — consumers re-pin from `git hash-object` on receipt of the notice.

## See also

- [[spec_platform_ecosystem]] — the Platform.aDNA category these terminals + harnesses belong to; its §Access points names `Terminal.aDNA` the recommended default terminal and `Harness.aDNA` the recommended default harness (recommended, never required — this contract stays any-terminal × any-harness).
- [[spec_framework_ecosystem]] — the consumer-wrapper/federation pattern this spec's pointer-spec adoption echoes (lightweight variant).
- [[spec_graph_exchange]] — the other access point's contract; the Terminal is its operator seat (§6 there).
