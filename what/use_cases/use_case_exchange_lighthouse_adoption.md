---
type: use_case
created: 2026-07-02
updated: 2026-07-02
status: active
domain: research
persona: "Priya Nair"
deployment_form: embedded
last_edited_by: agent_rosetta
tags: [use_case, node_operator, exchange, lighthouse, adoption, federation, research]
---

# A Node Operator Adopts via the Lighthouse Path

## Meet Priya Nair

Priya runs the compute for **Meadowlark**, a small open-science research collective — six scientists, one shared server, and a lot of AI agents doing the heavy lifting. She isn't a distributed-systems engineer; she's the person who ends up owning "the infrastructure" because someone has to. The collective wants to *share* the workflows and context they build with a wider network of peer labs, and *pull in* the good work others have already done — without turning Meadowlark's server into a security liability or a maintenance sinkhole.

She keeps hearing two words: the **Exchange** (where shared workflows and context live) and **Lighthouse** (the way you stand up a node that can participate). She wants to know, honestly: *what can I actually do today, and what am I signing up to wait for?*

## The Challenge

Meadowlark's problem is the classic one for a small operator: the ambition is networked, but the reality is a single box Priya can't afford to get wrong. Every "just connect it to the network" proposal she's seen elsewhere meant hand-rolling git hosting, a reverse proxy, secrets management, and a VPN mesh — five moving parts, each a way to leak data or wake up to an outage. She needs a path where the *composition* of those parts is decided for her by people who thought it through, and where she never has to pretend a half-built capability is production-ready.

Above all, Priya needs the roadmap told straight. If she plans the collective's quarter around a feature that turns out to be a horizon, that's her credibility spent.

## How aDNA Helps

Priya adopts along the same three-beat arc the [[what/tutorials/tutorial_exchange_adoption_path|Exchange adoption tutorial]] teaches — **pull → build-to-spec → memorialize** — but at the scale of a *node*, using the **Lighthouse** composition path. Here is what she finds at each beat, with every capability tagged the way the tutorial's boundary table tags it, so nothing gets over-promised.

### Beat 1 — Pull

**What Priya wants:** to seed Meadowlark's node with workflows peer labs already validated, instead of authoring everything from zero.

- **Shipped, today:** she starts from the validated lattices that *ship in the vault* — the same `what/lattices/examples/` library, treated as pre-pulled artifacts. A `context_graph` lattice like `knowledge_base` becomes Meadowlark's starting point for a literature-retrieval workflow.
- **Horizon, named plainly:** pulling a workflow that *another node* published — the true cross-node Exchange — rides the network's opt-in **membership substrate**, which is still being built. Exchange.aDNA is honest that its tier-0 pilot (Agora I) is complete and registry composition works *within* a node, while cross-node distribution is the horizon. Priya plans around the shipped subset and *waits* on the cross-node pull. No quarter-planning disaster.

### Beat 2 — Build-to-Spec (the Lighthouse composition)

**What Priya wants:** to stand up a node whose parts are chosen and wired for her.

This is where **Lighthouse** earns its keep. Lighthouse is the *deployable* member of a triad — Git.aDNA is the standard, Lighthouse is the deployable, Network.aDNA is the substrate — and it composes the ten-graph **Keystone cohort** (git host, reverse proxy, VPN mesh, file sync, secrets, containers, inference, API, store, groupware) into named **profiles**: `core`, `collab`, `inference`, `ops`.

- **Shipped, today:** the **composition manifest v1** is a *real, closed artifact*. Lighthouse's genesis Phase 0 closed on 2026-07-01, and the manifest scored 7/7 against the HQ floor. Priya can read exactly which software composes into a `core` profile and how the pieces relate — the architecture is decided and legible, not vapor. Building "to spec" for her means conforming her node's intended shape to that manifest, and keeping every workflow she adapts passing the same publish-readiness checks the tutorial runs (authoritative recipe: [[how/skills/skill_lattice_publish|skill_lattice_publish]]).
- **Horizon, named plainly:** *actually deploying* the composed node — turning the manifest into running services on Meadowlark's server — **gates on Git.aDNA reaching P7 plus an integration ADR, and that P7 spike is not yet chartered.** So Priya treats Lighthouse as *taught-as-design for deployment*: she designs her node against the manifest now, and understands that pressing "deploy" is a future capability. She does not schedule the collective's migration around a deploy date that doesn't exist yet.

### Beat 3 — Memorialize

**What Priya wants:** a permanent, auditable record of what Meadowlark built and pulled, so peer labs can trust it.

- **Shipped, today:** every lattice Meadowlark adapts keeps its **FAIR** block (license, keywords, provenance) and its **federation** block (`shareable`, `source_instance`, `version_policy`) — the same envelope the tutorial inspects on the extraction-provenance example. When Priya version-locks an extracted workflow and records its `parent_lattice`, that's memorialization she can point a reviewer at, and the validator *enforces* the pairing. Her captured `ready=True` readiness verdict is itself a lightweight memorial.
- **Horizon, named plainly:** the tamper-evident, DLT-backed **ledger** at the Lattice Protocol layer — where a pull, a build, and a publish each leave an entry no one can silently rewrite — lives in the Protocol's *draft* `lattice-ledger` spec, and the Protocol repo is pre-public-launch. Priya's honest stand-in is the FAIR provenance string plus the checked federation block; the federated ledger is the horizon.

## What Meadowlark's Node Looks Like (designed to the manifest)

```
meadowlark-node/                 # Priya's node, shaped to Lighthouse composition manifest v1
├── (core profile)               # SHIPPED as a spec / HORIZON to deploy — gated on Git.aDNA P7
│   ├── git host                 # the collective's shared source + context sync
│   ├── reverse proxy            # one front door
│   └── VPN mesh                 # private peer-to-peer reach to other nodes (opt-in)
├── Meadowlark.aDNA/             # the collective's own vault — SHIPPED, works today
│   ├── CLAUDE.md / STATE.md      # governance the agents auto-load
│   └── what/lattices/            # workflows pulled-as-examples + adapted, FAIR-stamped
└── how/federation/              # wrappers pointing at the shared standards (git, iii, feedback)
```

Total that runs **today**: the vault, its lattices, the validator, the FAIR/federation memorialization. Deferred to the **horizon**: the deployed node stack (Lighthouse deploy) and cross-node pulls (membership substrate).

## Outcome

Priya gets exactly what she needed most: a plan she can defend. Meadowlark seeds its node from shipped, validated lattices and memorializes its own work with real, checked provenance — *now*. It designs its node's shape against Lighthouse's closed composition manifest — *now* — so that when the deploy capability lands (post Git.aDNA P7), Meadowlark flips a switch instead of starting a project. And critically, Priya never told her six scientists that a horizon feature was shipping. The one thing aDNA refused to sell her — a pretty roadmap dressed up as a product — is the exact thing that earned her trust.

The tipping point: for a small operator, the value isn't a magic one-click network. It's an *honest* one — where the shipped subset genuinely works, the composition is decided by people who thought it through, and the horizon is labeled so plainly you can plan around it.

## Related

- [[what/tutorials/tutorial_exchange_adoption_path|Adopt via the Exchange: Pull → Build-to-Spec → Memorialize]] — the same arc as a hands-on, runnable tutorial (with the shipped-vs-horizon boundary table)
- [[what/concepts/concept_lattice_composition|Lattice Composition]] — the inline/external composition Lighthouse operates at node scale
- [[what/concepts/concept_context_commons|Context Commons]] — why a networked node matters: shared context as a public good
- [[what/concepts/concept_fair_metadata|FAIR Metadata]] — the provenance envelope Priya memorializes with
- [[what/tutorials/tutorial_federate_a_vault|Federate a Vault]] — the export/import mechanics a node's sharing sits on
