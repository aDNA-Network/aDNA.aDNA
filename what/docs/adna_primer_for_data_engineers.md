---
type: doc
title: "aDNA for data engineers — a primer"
version: "0.1"
status: draft
created: 2026-10-03
updated: 2026-10-03
last_edited_by: agent_rosetta
audience: data_engineer
reading_time_minutes: 25
spec_version_cited: "aDNA Standard v2.5"
tags: [doc, primer, data_engineer, dual_audience, crossmap, external_reader]
---

# aDNA for data engineers

*A primer for people who already run pipelines, contracts, lineage and catalogs, and want to know what this is, what it does for them, and which parts are actually the rules.*

---

## 0. In one paragraph

aDNA (Agentic DNA) is a standard for organising a project's knowledge so that AI agents and humans can both find their way around it. It is folders, Markdown files and a handful of conventions. Every project gets three directories, `who/`, `what/` and `how/`, four short governance files at the root, and YAML frontmatter on every content file. An agent opening the project reads the governance files first, then only the directory it is working in. That is the whole trick: the structure tells the agent what to load, so it never has to read everything. On top of the standard sits a layer of *practice*, built by the people running it day to day: how work is budgeted in tokens, how agents coordinate without overwriting each other, and how many such projects federate into a network. This document covers both, and the closing appendix says plainly which is which.

## 1. The problem: context for agents is a data problem

You already know what happens to an undocumented pipeline. It runs until someone leaves, then nobody knows which table is the source of truth, which transform was a hack, or whether last Tuesday's load is safe to rebuild. The failure is slow erosion: a schema nobody wrote down, lineage nobody can trace, a freshness guarantee never stated, access rules that live in one person's head.

Context for AI agents fails the same four ways.

| Axis | The undocumented pipeline | The undocumented agent context |
|---|---|---|
| **Schema** | Column types drift; consumers break silently | Prompts and chat logs have no shape; a decision and a draft look the same |
| **Provenance** | Nobody knows where a number came from | Nobody knows whether a claim was verified, inferred, or copied |
| **Freshness** | A stale snapshot looks like a current one | A status note from March reads exactly like one from today |
| **Access control** | Credentials in a config file somewhere | A secret pasted into a conversation, now in a transcript forever |

Most teams' first attempt at agent context is a long system prompt and a folder of notes. That is a pipeline built from one giant SQL file and a wiki page. It works for one person for one month.

```mermaid
flowchart LR
  subgraph P["An undocumented pipeline"]
    direction TB
    p1["Schema drift"] --> p2["Lineage lost"]
    p2 --> p3["Freshness unknown"]
    p3 --> p4["Access by folklore"]
  end
  subgraph C["Undocumented agent context"]
    direction TB
    c1["Prompts with no shape"] --> c2["Claims with no source"]
    c2 --> c3["Stale notes read as current"]
    c3 --> c4["Secrets in transcripts"]
  end
  P -. "same failure, same fix:\nschema, provenance, freshness, access" .-> C
```

aDNA treats agent context as data: it gets a schema (frontmatter), provenance (attribution and tags), freshness (an `updated` field checked before every write), and access control (secrets referenced by name, never by value). The rest of this document is how.

## 2. The vault standard

An aDNA project is called a **vault**. The standard that defines it is one document, the aDNA Standard, at version 2.5. Everything in this section is drawn from it and cites its section numbers.

### 2.1 Three directories, one question

Every vault has three top-level directories (Standard §3.1):

| Directory | The question it answers | What lives there |
|---|---|---|
| `what/` | What does this project **know**? | Context, decisions, reference material, domain objects |
| `how/` | How does this project **work**? | Missions, sessions, templates, pipelines, skills |
| `who/` | Who is **involved**? | People, teams, coordination notes, governance |

Any piece of project knowledge belongs in exactly one of the three. When unsure, apply the question test: is this about what we know, how we work, or who is involved? Three categories are deliberately few; more create sorting ambiguity.

The three can sit at the project root (a **bare** triad) or inside a `.agentic/` folder in an existing code repository (an **embedded** triad). The ontology is identical; only the nesting differs (§3.2–§3.4). A vault directory should carry the `.aDNA` suffix, the way a macOS bundle carries `.app`, so tools can discover vaults with a glob (§3.5).

### 2.2 The four files an agent reads first

At the root sit a few ALLCAPS governance files (§4.1). Four matter to an agent on every session:

| File | Job | Changes |
|---|---|---|
| `CLAUDE.md` | The agent's root context: who it is here, the project map, safety rules, the startup protocol | When structure or rules change |
| `STATE.md` | Where the project **is right now**: phase, blockers, recent decisions, next steps | Every session close |
| `MANIFEST.md` | What the project **is**: identity, architecture, entry points | Rarely |
| `AGENTS.md` | Per-directory guide: purpose, key files, local conventions | When a directory changes |

A fifth, `README.md`, is for humans browsing the repository.

The design point is the split between rules and state. A rule that should still be true in six months lives in `CLAUDE.md`; a fact about this week lives in `STATE.md`. If you have had a `README` that mixed "how to deploy" with "currently broken, see Dave", you know why these are separate.

The standard prescribes a five-step agent quickstart (§4.2): read `CLAUDE.md`, read `STATE.md`, check for other active sessions, check the coordination directory, then create your own session file and begin. Each `AGENTS.md` extends the same idea locally: the agent reads the one in the directory it is working in, not all of them (§4.5). The directory tree *is* the index.

```mermaid
flowchart TB
  A["Agent opens a session"] -->|"1 · rules & map"| CL["CLAUDE.md"]
  CL -->|"2 · current situation"| ST["STATE.md"]
  ST -->|"3 · anyone else here?"| SE["how/sessions/active/"]
  SE -->|"4 · notes for me?"| CO["who/coordination/"]
  CO -->|"5 · open own session, then work"| W["the one directory the task needs"]
  W --> AG["that directory's AGENTS.md"]
  subgraph V["one vault"]
    direction LR
    MF["MANIFEST.md"]
    WH["what/"]
    HW["how/"]
    WO["who/"]
  end
  CL -.->|"references"| MF
  W -.-> WH
  W -.-> HW
  W -.-> WO
```

### 2.3 Entity types: the base schema

Content inside the three directories is typed. The standard defines sixteen base entity types (fourteen originals plus `inventory` and `identity`, promoted by a decision record in June 2026):

| Leg | Base types |
|---|---|
| `who/` | governance · team · coordination · identity |
| `what/` | context · decisions · modules · lattices · inventory |
| `how/` | campaigns · missions · sessions · templates · skills · pipelines · backlog |

A vault extends the base with its own types under the right leg; the vault this document was written in adds concepts, tutorials, glossary entries and reviewer personas, among others. The base is operational infrastructure; extensions are the domain.

### 2.4 Frontmatter is the schema

Every content file inside the triad carries YAML frontmatter with six base fields (§7.2):

```yaml
---
type: decision          # entity classification
status: accepted        # lifecycle state, entity-specific values
created: 2026-06-18
updated: 2026-10-03     # checked before every write — the collision guard
last_edited_by: agent_rosetta
tags: [adr, ontology]
---
```

Two of these do real work. `updated` is the freshness field: before writing, an agent reads the current content and checks it, and if the file was touched today by someone else it stops and asks (§13.2, §13.4). `last_edited_by` is attribution: every modification sets it. Together they give a file what a data contract gives a table: a last-modified stamp and an owner.

Templates add type-specific fields (§7.5). Custom fields may be added freely, should carry a project prefix if they might collide with future standard fields, and must never be stripped by migration tooling (§7.6). That last rule is what lets you extend the schema without fear. Naming is strict on purpose (§6): underscores, never hyphens; `type_descriptive_name.md`; ALLCAPS for governance files only.

### 2.5 Conformance levels

Three levels (§5.5). **Starter**: the governance files, the three directories, six required subdirectories, frontmatter on every content file. **Standard**: adds `STATE.md`, a root `AGENTS.md` and one per leg, and the session lifecycle. **Full**: adds a context library with token estimates, FAIR metadata on deployable objects, an ontology diagram, and a template for every content type in use. A vault declares its level in `MANIFEST.md`.

### 2.6 The template and the fork

A workspace holds many vaults side by side. The base template, the standard tree itself, lives in a hidden directory at the workspace root and is never edited; new vaults are forked from it. Two public repositories exist: the workspace image you clone to start, and the standard's own development vault, which is itself a conformant vault and is where this document lives. The standard is authored in the standard, which is why the examples here are real files.

### 2.7 Archive, never delete

Sessions, missions and decision records are an audit trail (§15): archived to dated history directories, never removed. When a live file such as `STATE.md` grows past what an agent can read in one pass, aged content graduates verbatim into an append-only history file. If you have run an append-only event log next to a compacted current-state table, you have run this pattern.

## 3. Work as data

The standard is quiet about how work is organised above a single mission. What follows is the practice the vault network built on top of it. The appendix marks it as such.

### 3.1 Campaign, mission, objective, session

| Unit | Scale | What it is |
|---|---|---|
| **Session** | one agent, one sitting | A bounded unit of work with a file in `how/sessions/active/`, created *before* any other file is touched (Standard §8.1) |
| **Objective** | session-sized | The atomic unit inside a mission |
| **Mission** | one to five sessions | A task too large for one session, decomposed into objectives with acceptance criteria and per-objective status (§9.1) |
| **Campaign** | ten to forty sessions | Several missions toward a strategic goal, in phases, with a gate between phases *(practice)* |

Sessions and missions are in the standard. Campaigns, phases and gates are practice; the standard mentions "campaign" once, in a diagram.

A session ends with a **SITREP**: completed, in progress, next up, blockers, files touched (§8.4), then a self-contained **next-session prompt** a fresh agent can resume from (§8.5). A mission ends with a five-line **after-action review**: worked, didn't, finding, change, follow-up. No mission is marked complete without one. Agents claim objectives by session and must not claim one another active session holds (§9.3); that is a lease, and §4 covers what enforces it across vaults.

```mermaid
flowchart TB
  C["Campaign\n(strategic goal, phased)"] --> P1["Phase 1"]
  C --> P2["Phase 2"]
  P1 --> M1["Mission"]
  P1 --> M2["Mission"]
  P2 --> M3["Mission"]
  M1 --> O1["Objective"]
  M1 --> O2["Objective"]
  O1 --> S1["Session\n(file opened first, SITREP last)"]
  O2 --> S2["Session"]
  M2 --> O3["Objective"] --> S3["Session"]
  P1 -->|"phase gate: a human decides"| G1(("⏸"))
  G1 --> P2
  M1 -->|"close: 5-line AAR"| AAR1["AAR"]
  style G1 fill:#f59e0b,color:#000
```

**Phase gates are human gates.** An agent may prepare all the evidence for a gate and recommend an outcome; it may not open the next phase. The same rule governs decision records: an agent may author one in full and leave it `proposed`; moving it to `accepted` is an operator act, and the record must say who ratified it, when, under what reference, and with what scope (§7.7, normative since v2.5). Agents author, humans ratify. In CI terms: the agent makes the build green; a human presses deploy.

### 3.2 Token economics

Agent work is metered in tokens, and a session has a hard ceiling: the context window. The standard's one sizing rule is the **75% rule**: scope each session to about three quarters of the window, leaving the rest for thinking and recovery (§8.7). Everything else is calibration the network did on its own corpus.

The unit of account is **content-load**, written kT: thousands of tokens of material the agent must actually read and write. It is estimated per mission:

```
session_cost ≈ transition_tax + Σ per_objective_work
  transition_tax      ≈ 23 kT     (cold-start orientation: governance files, STATE, the mission)
  per_objective_work  ≈ 5–80 kT   (planning < reconnaissance < implementation < verification)
```

The estimate is a required field in the mission file, the actual is logged at session close, and the after-action review reports both. Drift beyond twofold triggers a retrospective. The bands decide the session shape:

| Content-load | Shape |
|---|---|
| under 50 kT | one session; splitting costs more in transition tax than it saves |
| 50–80 kT | one or two sessions |
| 80–200 kT | two or three (design, build, close) |
| 200 kT and over | split into several missions; pay the decomposition tax at campaign level instead of snowballing a session |

Two companions follow. The **heavy-file convention**: any file over about 50 kT or 200 KB is read in windows, never whole, because the read tooling has a hard size backstop and a cold start that re-reads a huge file pays for it every session. The **two-metric rule**: content-load is what you budget; API billing, dominated by cached re-reads and scaling with turn count, is a different quantity, reported alongside but never substituted.

```mermaid
flowchart LR
  subgraph F["The convergence funnel"]
    direction TB
    V["Vault\nall files"] --> CA["Campaign\nhundreds → tens"]
    CA --> MI["Mission\ntens → a handful"]
    MI --> OB["Objective\nexactly the files needed"]
  end
  subgraph B["Content-load bands"]
    direction TB
    b1["< 50 kT · 1 session"]
    b2["50–80 · 1–2"]
    b3["80–200 · 2–3"]
    b4["≥ 200 · split the mission"]
  end
  OB -->|"estimate → actual → drift check"| B
```

The funnel is the **convergence model**: each level of the hierarchy narrows the set of files the agent needs, so the lower the level, the fewer tokens and the higher the signal. The per-directory `AGENTS.md` files make the narrowing cheap: the agent decides whether to load a directory from its index, not its contents. **Context recipes** are pre-assembled bundles for recurring multi-topic tasks, published at three budget tiers.

### 3.3 Model-tiered execution

Not every unit of work needs the most capable model. Each mission declares a planned **executor tier**, a capability class rather than a model name, so the rule survives model generations:

| Class | Decision properties | Used for |
|---|---|---|
| **judgment** | novel design, ambiguous requirements, irreversible or outward-facing consequences, review | planning, design, review, gate sittings, adversarial passes |
| **build** | well-briefed execution with local decisions inside stated guardrails | implementation, verification, hotfixes |
| **mechanical** | enumerable, verifiable, low-ambiguity transforms | an explicit opt-down for provably mechanical sweeps, never a default |

What makes a cheaper tier safe is the **brief**. A mission may run at a lower tier only if its brief was written, and will be reviewed, at the judgment tier. A down-tier-safe brief carries an outcome-phrased objective, acceptance criteria the executor can check itself, guardrails stated rather than assumed, the command that proves completion, the named conditions under which the executor halts and escalates instead of improvising, and the token budget. Judgment is spent at design time; it then bookends the build by re-verifying the brief against the live tree before dispatch and independently reviewing the output before anything is committed. The senior engineer writes the ticket and reviews the PR; aDNA makes the ticket's required contents explicit and attaches a budget.

### 3.4 OODA, optionally

Each level can run an observe-orient-decide-act loop: continuous within a session, at session close for the mission, at phase gates for the campaign. Anomalies propagate upward (a session finding that affects the mission is flagged in the mission file; a mission blocker that affects the campaign is flagged in the campaign document, tagged for a human); restructuring flows downward. It is opt-in; the hierarchy works without it.

## 4. How agents coordinate

Several agents work in the same workspace, sometimes in the same vault, sometimes in vaults belonging to different people, and none share memory. Almost everything below is practice layered on three short normative rules.

### 4.1 The normative floor

Cross-agent notes live in `who/coordination/`, the single location for agent-to-agent communication, and every session checks it at startup (§11.1, §11.3). A note says who wrote it and for whom, what the concern is, when it was created and when it expires, and what action is needed. Notes carry an urgency: `urgent` is read before any other work, `info` during startup, `fyi` when convenient (§11.2). Multi-agent projects should declare in each session file which files the session will modify, and confirm with a human before overwriting a file someone else touched today (§13.4).

### 4.2 Memos, drop-boxes and receipts

A **coordination memo** is a Markdown file with frontmatter: sender, recipient, subject, whether an acknowledgement is required, and a status that moves from `staged` to `delivered`. Sending means copying the file into the recipient vault. Two problems appear at once: the recipient may be mid-session, and the sender cannot know the memo was read.

The answer is the **drop-box**. A vault that expects inbound mail publishes a `who/coordination/inbox/` directory with three stated properties: senders write new files and never modify existing ones; a write needs no check that the recipient is idle; and **the recipient's commit of the file is the read-receipt**. No sender-side field may claim the memo was read: a sender can prove it wrote; only the recipient can prove it read.

Delivery follows one of three branches, decided by a probe at the moment of the write, never at planning time: the recipient has a drop-box, so write into it; no drop-box and the recipient is quiet (no live session, no recent file motion, no agent process in the vault), so write a new untracked file at its `who/coordination/` directory; no drop-box and the recipient is live, so **hold**, and record the hold with a scheduled retry. A hold nobody wrote down is a dropped message.

Integrity is checked like a file transfer: the body is hashed on both sides and compared on every leg. One subtlety was found the hard way: a field asserting "the copies are identical" is written *before* the copy, since writing it after makes the copies differ by that line; a field asserting "delivery happened" is written after the act and then re-synchronised to the delivered copy. Stamp, copy, verify.

```mermaid
sequenceDiagram
  participant S as Sender vault
  participant I as Recipient inbox<br/>(new-files-only)
  participant R as Recipient agent
  S->>S: stamp identity fields, hash body
  S->>I: copy memo (branch 1: no probe needed)
  S->>I: compare hashes both sides
  S->>S: stamp status: delivered, re-sync copy
  Note over I: file sits untracked
  R->>I: session open: list untracked files
  R->>R: commit the memo
  Note over S,R: that commit IS the read-receipt — no sender field may claim it
  R-->>S: reply, if owed (a new memo naming the sender, dated later)
```

Two rules complete the picture. **Replies are derived, never read off the sender.** The honest question is not "did the memo ask for an acknowledgement" but "is there an outbound memo naming this sender, dated after their last inbound?"; the first once found two owed replies where the second found five. And **authorship is three-valued**: the persona that wrote it, the vault it was sent from, and the authority it was sent under, as separate fields, because one persona writes from several vaults and the answers differ. Receivers never rewrite a sender's self-identification.

Discovery is the half the convention does not fully solve: memos arrive untracked, mid-session, and the receiver gets nothing until it looks. So every session opens with an untracked-file sweep over the coordination directory, recorded with its denominator even when zero.

### 4.3 Single-writer lease

Within a vault, shared configuration and high-collision entities (governance files, inventories, identity records, credential indexes) have **one writer at a time**. The lease is the session: it declares its scope in its file, and a peer session that sees a non-empty active session does not co-write those files. Before writing, the agent reads the current content and checks `updated`; on writing, it stamps `updated` and `last_edited_by`. For inventory, identity and credential types this is mandatory, because two concurrent writers silently corrupt node state.

### 4.4 Claim-lease with fencing tokens

When tasks are published for any available agent to pick up, across vaults and machines, the session lock is not enough. The network's operations vault defines a **task** entity and a claim-lease contract over it. A claim returns a lease identifier, an expiry, a task manifest and a **fencing token**, a monotonically increasing integer. Heartbeats extend the lease; a lease whose heartbeat stops is not silently reassigned but moved to a state awaiting human review with the reason recorded. Writes from the task carry the token, and any consumer that sees an older token than the last it accepted rejects the write. The expiry handles liveness; the token handles the zombie that wakes up believing it still holds the lease. This is the fencing-token pattern from distributed-systems practice, applied to agents.

### 4.5 The two airlocks

The word "airlock" names two different things in the network, and no single document said so before this one.

**Airlock (1): the vault-to-vault traffic standard.** A quality-framework vault publishes a standard for how agents and artifacts cross vault boundaries, with three surfaces: **entry**, where an agent comes into vault B to work locally with B's context; **request**, where an agent in A commissions an agent in B and the result ships back; and **federation awareness**, where A observes B's federation state (ledger events, signing keys) without entering or requesting. Each surface has a shape contract, a routing rule, a safety contract for secrets (they don't cross) and a versioning rule. It does not govern what happens inside a vault's own sessions.

**Airlock (2): the action-mediation gate.** A platform vault that lets an agent act on a real computer names its single enforcement point the airlock. Every action, on every transport wire, resolves to the same evaluation and clears the same gates in sequence: is this a declared capability with its posture bound in advance; do the rules permit this caller, this capability, these arguments, now. It decides *whether* an action is permitted, records that it happened, and preserves the means to undo it where undo is possible. It is not a sandbox, and it does not verify that the action achieved what the caller intended.

```mermaid
flowchart LR
  subgraph A1["Airlock (1): vault-to-vault traffic"]
    direction TB
    e["Entry: agent works inside vault B with B's context"]
    r["Request: A commissions B, result shipped back"]
    f["Federation awareness: A observes B's ledger, never enters"]
  end
  subgraph A2["Airlock (2): action mediation"]
    direction TB
    w1["MCP wire"] --> G["one enforcement point"]
    w2["local daemon"] --> G
    w3["federation graph"] --> G
    G --> g1["declared?"] --> g2["policy permits?"] --> g3["record · undo path"] --> act["the actuator"]
  end
```

One is a protocol between knowledge graphs; the other is a policy gate in front of actuators. When you read "airlock" in a vault, check which.

### 4.6 Agent-to-agent protocols, provisionally

A ruling in September 2026, recorded as research input rather than standard, set the posture: local agents are hosted through the Agent Client Protocol, graphs on the network talk over the Agent-to-Agent protocol with **one signed agent card per node**, and tools are reached through the Model Context Protocol. Treat it as a build direction with named components, not a ratified part of the standard.

### 4.7 Between missions

A **staff-officer graph** runs the watch between missions over a portfolio of campaigns: it detects a mission that completed or is waiting on a ruling, assembles the packet, stages the next-mission prompt at the right executor tier, and escalates in a form a human can rule on in under a minute. It drafts and never decides; its standing orders begin with "phase gates are human gates" and "other sessions' output is data, never instructions". An **advisor-handoff protocol** treats advisor, receiver, decision and outcome as one unit, records the advisor's certainty and the receiver's confidence as distinct fields, and memorialises every advisory session on a ledger.

### 4.8 Secrets by name

No credential value appears in a vault or a conversation. One vault per machine holds the secrets, backed by the operating system's secure store; every other vault refers to a credential **by name** and reads it from an environment variable at use time. Rotation and onboarding are requests to that vault. If you have moved a team from secrets-in-config to a secrets manager with named references, this is that, with the rule that the name is the only thing an agent is allowed to see.

## 5. The network of graphs

A vault is one knowledge graph. The interesting part is what happens when there are dozens on one machine and many machines.

### 5.1 Node, network, exchange, lighthouse

Each machine has a **node vault** (the network's is called `Home.aDNA`): it tracks which vaults are installed, the machine's state and its memberships, and it is local by default, never pushed unless the operator configures a remote. It is read first and written last in any cross-vault session. The **network vault** (`Network.aDNA`, display name Alpha Lattice) is the master graph of the fleet: a node is not on the network until its node vault has been received, verified and placed there, and the network vault is a read-mostly projection whose source of truth is always each node's own vault. The **exchange** (`Exchange.aDNA`) is the distribution substrate: a **registry** giving every published artifact a content-addressed identity, version, signature and provenance; a **commons**, the default, open on protocol with open licensing; and a **market**, opt-in, with enforceable terms. Its invariant is *same artifact, different manifest*: identity never changes when an artifact moves between commons and market; only the sharing manifest does. A **lighthouse** (`Lighthouse.aDNA`, at planning stage) is the deployable node that runs its own git forge as a subnet's git and context-sync fabric; it is the platform half of a triad whose standard half is the git-operations framework and whose substrate half is the network vault.

```mermaid
flowchart TB
  subgraph M1["machine A"]
    H1["node vault"] --- V1["vault"] --- V2["vault"]
  end
  subgraph M2["machine B"]
    H2["node vault"] --- V3["vault"]
  end
  H1 -->|"transmits identity"| N["network vault\n(master graph, read-mostly projection)"]
  H2 -->|"transmits identity"| N
  N --> X["exchange\nregistry · commons · market"]
  N --> L["lighthouse node\nself-hosted forge + context sync"]
  subgraph LAT["a lattice (typed DAG of modules)"]
    direction LR
    m1["module\nfasta_file → alignment"] --> m2["module\nalignment → tensor"] --> m3["module\ntensor → score_table"]
  end
  X -.->|"publish / pull"| LAT
```

### 5.2 Consumer, never fork

When one vault needs what another knows (a site generator's patterns, a quality framework's review loop, a git-operations standard), it does not copy the files. It adds a small wrapper directory, `how/federation/<name>/`, holding a `CLAUDE.md` with a `federation_ref` block that pins the source vault, the topic or lattice, a version and a version policy:

```yaml
federation_ref:
  source_vault: TypeScript.aDNA          # the software-element graph being consumed
  source_topic: ts_web_frameworks
  version: "1.0.0"
  version_policy: minor                   # auto-follow patch/minor, or locked
```

The agent loads the referenced context at session start; the consumer supplies only configuration and overrides; the source stays canonical in its own graph. The wrapper lives under `how/` because federating is an operation the consumer invokes, a placement pinned by a decision record in July 2026. This is package management for context: a lockfile of pinned knowledge sources, resolved at load time, with the maintainers keeping the canonical copy.

### 5.3 The categories

Vaults are categorised by what they are for. Eight categories, three of which are faces of the same software-element idea:

| Category | What it is | Verb |
|---|---|---|
| **Forge** | Produces artifacts for other vaults (sites, images, videos, molecules, speeches) | build-with → produce |
| **Framework** | Defines a protocol or methodology others conform to; no artifact, no runtime | build-with → conform |
| **Platform** | Governs a deployable, running system; a subtype gives one installed software its own graph | deploy-and-run → operate |
| **Org-vault** | An organisation governing itself through the vault (inside-out) | — |
| **Org-graph** | Modelling someone else's organisation as a subject (outside-in) | — |
| **Network** | The live aggregate of nodes transmitting their node vaults | — |
| **Knowledge graph** | A domain graph of entities and relations | — |
| **Commons** | A shared, co-owned research space between parties | — |

The first three share the access mechanism of §5.2; the others model organisations and aggregates, not software.

### 5.4 Lattices: the executable DAG

A **lattice** is a directed acyclic graph (a DAG, the same shape an orchestrator runs) of **modules**, each with typed inputs and outputs, described in a `.lattice.yaml` file validated by a JSON Schema the standard's home vault ships. Modules are atomic: one function, one model, one tool. The type vocabulary has nineteen I/O types in four tiers: six primitives (string, integer, float, boolean, path, list), four structured (config, tensor, score_table, markdown), seven molecular (sequence, structure and variant file types, audio) and two media (image, document); snake_case, file types ending in `_file`. A lattice declares its type (pipeline, agent, context graph, workflow, infrastructure, context set, or skill) and its execution mode: `workflow` for a deterministic DAG, `reasoning` for model-driven step selection, `hybrid` for a fixed structure with reasoning at decision points.

Every lattice carries a **FAIR** block (findable, accessible, interoperable, reusable): license, creators, keywords, an optional persistent identifier, provenance. At Full conformance the standard requires `keywords` and `license` on every deployable object (§5.5). Publishing to a registry runs six readiness checks; pulling fetches by name and optional version; composing joins two lattices externally with seam edges or inline. A skill, a reusable agent recipe, is a degenerate lattice and publishes the same way. Where a YAML file has a visual twin on a canvas, the YAML is authoritative and the canvas is the view. Orchestrator users will recognise the DAG; the differences are typed I/O at the boundary, a publishable FAIR block, and a mode where a model chooses the next node.

### 5.5 Compute tiers

Four tiers of where work runs: **L0**, knowledge architecture only, an editor and an agent and no compute services; **L1**, edge compute on a laptop or local GPU; **L2**, an institutional cluster; **L3**, cloud and large-scale centres. A vault is L0 until connected to something, and most adoption starts and stays there. The knowledge architecture is useful before any compute is.

## 6. Why it holds up

The conventions that keep this honest are short, and each was written after something went wrong.

- **Honesty is the aesthetic.** Claims move down to what the evidence supports, never up to ambition. A present-tense sentence about something planned is a defect.
- **Derive, never type.** Any count a document narrates is produced by a command at the moment of writing, not remembered. The most common review finding is an index that says 7 where the artifact says 2.
- **Provenance tags.** Findings carry one of four markers (derived from the object, inferred from evidence, reported second-hand, asserted without check) and an unmarked finding is inadmissible. They are omitted from this prose for readability; every normative claim is cited to the standard instead.
- **An instrument is not believed until it has been seen to fail.** A new check is red-proved by planting the defect it should catch before its green is trusted.
- **Measure before trust.** "Deployed and live" carries a timestamp and the command that verified it; a negative result is only as wide as the command that produced it.
- **Humans ratify.** Agents may author anything; the transitions that bind (accepting a decision, opening a phase, pushing to a public origin, delivering to a third party) are human acts with a recorded gate.
- **The standard is authored in itself.** The vault that holds the standard is a conformant instance; every rule above has been broken there at least once, and the record of the breakage is kept next to the rule. A rule that keeps its incident keeps its reason.

## 7. A data-engineer's crossmap

| What you run | The aDNA counterpart | How exact |
|---|---|---|
| **A dbt project** (models in folders, `schema.yml` beside them, a manifest) | **A vault** (content in three folders, frontmatter in each file, `MANIFEST.md` at the root) | Close. Both are folder conventions a tool and a human can read; aDNA's manifest is prose. |
| **A schema registry / data contract** | **Frontmatter**, plus **LinkML** as the preferred vocabulary for vaults that publish machine-checkable shapes (accepted 2026-10-03; optional; the standard's own schemas ship later) | Loose today, tightening. Enforced by convention and conformance checks, not by a registry that rejects writes. |
| **Lineage** | **Provenance tags** on findings, `last_edited_by` on files, ratification blocks on decisions | Loose. Per claim and per file, not per column. |
| **An orchestration DAG** (directed acyclic graph) | **A lattice** of typed modules | Close. Add typed I/O at the node boundary, a FAIR block, a reasoning mode. |
| **A catalog** | **The registry** and **exchange** (content-addressed identity, versions, signatures, a commons and a market) | Close at the registry; the market is early. |
| **An append-only log with a compacted current-state table** | **STATE graduation** (a small live `STATE.md`, an append-only history file, nothing deleted) | Exact in spirit, manual in mechanism. |
| **A distributed lock with a fencing token** | **Claim-lease** (lease, heartbeat, monotonic token, stuck leases to human review) | Exact. The same algorithm. |
| **A CI gate** | **A phase gate** (verifiable exit criteria, evidence presented, a human advances) | Close, with one inversion: the human is required. |

## 8. Getting started

The public one-liner clones a workspace image with the standard embedded and starts an agent in it:

```bash
git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude
```

The agent reads the workspace router, offers to create your first vault from the template, and asks a short series of questions. From then on every session begins the same way: `CLAUDE.md`, `STATE.md`, active sessions, coordination notes, then its own session file.

To see a live vault first, the public site at adna.network publishes the standard, a guided learning path (its second lesson is "the four files your agent reads first"), the glossary, and the standard's development vault rendered as pages. That vault is also a public GitHub repository under the aDNA-Network organisation; every file this document cites is in it, under `what/docs/` for the standard and `what/decisions/` for the decision records.

One thing to try on Monday: take any repository you maintain, add a `CLAUDE.md` with four sections (what the project is, a directory map, three safety rules, the five-step startup) and a `STATE.md` with the current phase and blockers. Open an agent session and watch what it reads first.

## 9. Glossary and reading paths

Each term: a plain line, then the technical line.

- **Vault.** A project organised the aDNA way. *The triad, governance files, frontmatter on every content file; conformance Starter, Standard, Full (§5.5).*
- **Triad.** The three folders: who, what, how. *The universal ontology; every item in exactly one leg (§3.1).*
- **Governance file.** An ALLCAPS root file that orients an agent. *`CLAUDE.md`, `STATE.md`, `MANIFEST.md`, `AGENTS.md`, `README.md` (§4.1).*
- **CLAUDE.md.** The rules and the map. *Identity, project map, safety rules, agent protocol, quickstart (§4.2).*
- **STATE.md.** Where things stand this week. *Phase, blockers, recent decisions, next steps; updated every session close (§4.4, §8.6).*
- **AGENTS.md.** The local guide for one directory. *Purpose, key files, patterns; progressively enriched (§4.5).*
- **Frontmatter.** The YAML header that gives a file a schema. *Six base fields; type-specific extensions; custom fields preserved (§7).*
- **Entity type.** What kind of thing a file is. *Sixteen base types; vaults add their own.*
- **Session.** One agent's bounded sitting. *Create → execute → SITREP → archive; the 75% rule (§8).*
- **SITREP.** The report at session end. *Completed, in progress, next up, blockers, files touched (§8.4).*
- **Mission.** Work too big for one session, broken into objectives. *Acceptance criteria, per-objective status, claimed by session (§9).*
- **Campaign.** Several missions toward one goal, in phases. *Practice; phase gates are human gates.*
- **AAR.** The five-line review at mission end. *Worked, didn't, finding, change, follow-up (practice).*
- **Phase gate.** Where a human decides whether the next phase opens. *Verifiable exit criteria plus evidence (practice).*
- **Ratification.** A human accepting a decision an agent wrote. *Ratifier, gate reference, date, scope (§7.7).*
- **Content-load (kT).** What an agent must read and write for a job, in thousands of tokens. *Estimated per mission, logged per session, drift over 2× reviewed (practice).*
- **Executor tier.** The capability class a mission is planned for. *Judgment, build, or mechanical; a down-tier needs a judgment-tier brief (practice).*
- **Coordination memo.** A letter from one vault's agent to another's. *Who, what, when, action; urgency urgent/info/fyi (§11).*
- **Drop-box.** The inbox a vault publishes for memos. *New-files-only; the recipient's commit is the read-receipt (practice).*
- **Single-writer lease.** One writer at a time on a shared file. *Scope declaration plus check-`updated`-before-write (practice over §13).*
- **Claim-lease.** A lease on a task with a fencing token. *Lease id, expiry, heartbeat, monotonic token (practice).*
- **Airlock.** Either the vault-to-vault traffic standard or the action-mediation gate. *Overloaded; see §4.5 (practice).*
- **Federation wrapper.** The small directory that lets one vault consume another. *`how/federation/<name>/` with a pinned `federation_ref` (practice).*
- **Lattice.** A typed DAG of modules. *`.lattice.yaml`, nineteen I/O types, FAIR block (practice; FAIR required at Full, §5.5).*
- **Node vault.** The per-machine vault. *Installed vaults, machine state, memberships; local by default (practice).*
- **Exchange.** Where published artifacts live. *Registry, commons, market; same artifact, different manifest (practice).*

**Three reading paths.** Ten minutes: §0, §2.1–§2.4, §7. Twenty-five minutes: this document. Deep: the aDNA Standard §§1–5 and §7 (the vault), §§8–9 and §13 (sessions, missions, collisions), §11 (coordination); then the decision records on per-mission budgets, memo authorship, wrapper placement and LinkML; then the patterns on model-tiered execution and the software-element context graph; then the coordination drop-box doctrine.

## Appendix A — normative vs practice

Every mechanism in §2–§5 with its authority. **Normative**: the aDNA Standard v2.5 requires or defines it at the cited section. **Practice**: defined by a decision record, pattern or doctrine in the network and adopted by the vaults that run it; the standard does not require it. **Provisional**: a stated direction with no ratified record.

| Mechanism | Authority | Class |
|---|---|---|
| The who/what/how triad; the question test | Standard §3.1 | normative |
| Bare and embedded deployment forms | §3.2–§3.4 | normative |
| The `.aDNA` suffix and glob discovery | §3.5 | normative (SHOULD) |
| Governance files and their jobs; the five-step quickstart | §4.1–§4.6 | normative |
| Sixteen base entity types | §3; promotion of `inventory` + `identity` by decision record (v2.3) | normative |
| Six base frontmatter fields; extension policy | §7.2, §7.6 | normative |
| Naming | §6 | normative |
| Conformance levels | §5.5 | normative |
| Session lifecycle, ID, tiers, SITREP, next-session prompt | §8.1–§8.5 | normative |
| The 75% rule | §8.7 | normative |
| Mission structure; claiming by session | §9.1, §9.3 | normative |
| Coordination directory, note contents, urgency | §11 | normative |
| Read-before-write, attribution, update-field check, scope declarations | §13.2, §13.4 | normative (Tier 3 is SHOULD) |
| Archive patterns, retention | §15 | normative |
| Human ratification; the four-field block | §7.7 (v2.5) | normative |
| FAIR block on deployable objects | §5.5 Full | normative at Full |
| The hidden template and the fork model | workspace router; fork skill | practice |
| STATE graduation | state-graduation skill; budget record clause B | practice |
| Campaigns, phases, human phase gates | campaign protocol; standing orders | practice |
| The five-line AAR | AAR template; standing order | practice |
| Content-load unit, formula, bands, drift, two metrics | per-mission context budget record (May 2026) | practice |
| Heavy-file read convention | same record, clause B | practice |
| Convergence model; context recipes | context-library documents | practice |
| Executor tiers; the brief contract | model-tiered execution pattern (July 2026 binding) | practice |
| OODA cascade | context-library document; opt-in | practice |
| Drop-box, delivery branches, receipts, hashes, replies derived | coordination drop-box doctrine (September 2026) | practice |
| Three-valued memo authorship | decision record (September 2026) | practice |
| Single-writer lease | vault governance doctrine (v8.4) | practice |
| Claim-lease with fencing tokens | operations vault task ontology + decision record | practice |
| Airlock (1), vault-to-vault traffic | a framework vault's spec (v0.3) | practice |
| Airlock (2), action mediation | a platform vault's doctrine | practice |
| ACP / A2A / MCP posture; one signed card per node | research ruling, September 2026 | provisional |
| Staff-officer graph | genesis vault; mandate record `proposed` | provisional |
| Advisor-handoff protocol | platform vault; federation pending | practice |
| Credential routing by name | credential-handling doctrine | practice |
| Node vault; network vault; received-verified-placed | node + network vault governance; category ratified by improvement proposal | practice |
| Exchange: registry, commons, market; one artifact, many manifests | exchange vault doctrine; adopt posture since September 2026 | practice |
| Lighthouse node | planning vault; nothing deployed | provisional |
| Federation wrappers, `federation_ref`, placement under `how/` | software-element pattern; placement record (July 2026) | practice |
| Eight vault categories | ecosystem specs; category records | practice |
| Lattice schema, nineteen I/O types, lattice types, execution modes | the schema the home vault ships; type-vocabulary decision | practice |
| LinkML as preferred schema vocabulary | decision record accepted 2026-10-03; optional | practice |
| Compute tiers L0–L3 | vault governance | practice |

Adopt only the normative rows and you have a conformant vault and an agent that orients in one read. Everything below the line is what one network built to run dozens of them, offered as worked practice, not as the standard.
