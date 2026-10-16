---
type: adr
adr_number: "065"
title: "The standard's position under the two-estate model — an open public way (MIT, lab-owned), two named access points, a commercial home that is also the economic platform on which graphs built to the standard become networked graph products, a partner/dog-fooding ecosystem, and a first named profile; what the standard will never carry"
status: proposed        # ⛩ drafted 2026-10-16 at ARCADE A2.1 on the operator's R1 reading (2026-10-15); §7.7 is the operator's at ARCADE G2 — nothing here is in force until signed
created: 2026-10-16
updated: 2026-10-16
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
mission_id: mission_arcade_a2_1_adr_065_estate_position
supersedes: ""
superseded_by: ""
probe_date: 2026-10-16
visibility_note: "PRIVATE-SIDE by ruling R2 (2026-10-15): ADRs, memos and campaign files may name the company; site/, registry data, the primer and anything scrubbed for an outside reader may not, until the operator says 'publication'. This dev graph's GitHub remote is public (Git-Ops §P6 Wave 2), as were aDNA.aDNA ADR-064 and the ARCADE charter before this file — R2 was ruled with that known."
cites:                  # every ADR number vault-qualified (ARCADE rule 3); every row read first-hand at HEAD 2026-10-16 [D]
  aDNALabs_adr_027: "aDNALabs.aDNA/who/governance/adr_027_two_estates_lab_and_company.md — accepted (§2 10-01 + A1 10-06; §3 v3 both founders 10-05)"
  AILedger_adr_008: "AILedger.aDNA/who/governance/adr_008_ailedger_adna_is_the_core_graph.md — accepted both founders 2026-10-05 (clone HEAD 6d3420e); 'work in progress — pending the SHA and corporate documents'"
  AILedger_vision: "AILedger.aDNA/who/governance/VISION.md:27 — 'aDNA is not a platform. There is no hosted service…'"
  Exchange_adr_058: "Exchange.aDNA/what/decisions/adr_058_checkpoint_anchoring_on_the_ailedger_record.md — accepted #130 (+A1 #144): a witness, not a trust root"
  Exchange_adr_059: "Exchange.aDNA/what/decisions/adr_059_two_faces_one_archetype.md — accepted #130 (+A1 #133): two branding manifests, one archetype; the company's face is the default"
  Exchange_adr_062: "Exchange.aDNA/what/decisions/adr_062_storefronts.md — accepted #135, co-signed by AILedger #148: a storefront is a manifest + a scope; record-not-enforce"
  aDNA_adr_064: "aDNA.aDNA/what/decisions/adr_064_graph_exchange_spec_placement.md — accepted 2026-10-16 (ARCADE G1)"
  aDNA_adr_062: "aDNA.aDNA/what/decisions/adr_062_linkml_adoption.md — accepted 2026-10-03 (the GPL-free toolchain annex the lab declares)"
  situation_review: "how/campaigns/campaign_arcade/artifacts/p0/situation_review_20261015.md §C (C1–C6)"
tags: [adr, arcade, estate, two_estates, access_points, commercial_home, economic_platform, graph_product, profile, public_way, proposed]
---

# ADR-065 — The standard's position under the two-estate model

> **Plain version (three sentences).** The aDNA standard is an open public way: MIT, owned by the lab, free to walk. Along it stand shopfronts — a console and an exchange are the two doors builders arrive through — and behind them a company that is the standard's commercial home *and* the platform on which graphs built to the standard become products that other graphs can find, fetch and trust. This record writes down what the standard is in that picture, what it points at, and the short list of things it will never carry.

## Status

**Proposed** — drafted 2026-10-16 at ARCADE A2.1 (`[[campaign_arcade]]` P2, mission `mission_arcade_a2_1_adr_065_estate_position`) on the reading the operator gave at the campaign's open (ruling **R1**, 2026-10-15: *amend, keep the standard open*). Ratification is the operator's at **ARCADE G2** (§7.7 below). Until then nothing here binds; the standard's text (`what/docs/adna_standard.md` v2.5) is byte-unchanged and stays so until the v2.6 cut (ARCADE A4.1), where only the pointer sentences this ADR names may enter.

*(Why an ADR and not a sentence in the spec: the standard is the one document this vault may not edit on its own authority — Standing Order 9 — and "where the standard sits between a lab and a company" is a decision about the standard, owned by its operator, that two other estates have already decided their halves of. This ADR is the standard's half; the other halves are cited, never restated.)*

## Context

**The operator's reading (R1, 2026-10-15, `[D]` recorded in `campaign_arcade.md` §1 and `artifacts/p0/operator_rulings_packet_20261015.md`):** `AILedger.aDNA` is the main operational / entity graph **and the economic platform**; `Exchange.aDNA` + `Terminal.aDNA` are the primary access points; the aDNA ecosystem is the partner / dog-fooding / usage ecosystem; `aDNALabs.aDNA` is the lab estate, not an HQ above the standard; aDNA-Medical is the first named profile. The standard stays MIT.

**What the record already said, read at the object 2026-10-16 (`[D]` unless marked):**

| # | Fact | Where |
|---|---|---|
| 1 | aDNALabs ADR-027 §2 (accepted; A1 2026-10-06) routes the standard to **Lab (the open standard, MIT — aDNALabs ADR-024) · Company (commercial home and steward, not owner)**; "unchanged in development and licence"; "nothing public before SR-6". The network row reads the same way (Lab operation and law · Company commercial home). Cross-estate writes are memos, PRs or cargo. | `aDNALabs.aDNA/who/governance/adr_027_…md` §2 |
| 2 | aDNALabs ADR-027 §3 v3 (both founders, 2026-10-05): *"AILedger, PBC is the product and the network face, and the commercial home of the AI Ledger, the Lattice Protocol and the aDNA standard; … aDNA is the open developer standard."* Clause 5: not public before SR-6 and counsel. | same, §3 v3 |
| 3 | AILedger ADR-008 (accepted both founders 2026-10-05): clause 1 — the company is the entity *"from which the ecosystem is operated and grown commercially"* and *"the commercial home and steward"* of the standard; *"the aDNA standard stays an open standard under MIT; the company is steward, not owner"*. Clause 5 — *"The core graph manages; it does not own."* Clause 6 — what the core graph **never takes**: *"the openness of the standard"*. | `AILedger.aDNA/who/governance/adr_008_…md` |
| 4 | AILedger `VISION.md:27`: *"aDNA is not a platform. There is no hosted service, no vendor lock-in, no telemetry. It's a composable standard."* | `AILedger.aDNA/who/governance/VISION.md` |
| 5 | Exchange ADR-058: the Exchange's signed tree heads are **anchored on the AILedger record as a witness, not a trust root**. ADR-059 (+A1): the lab's registry face and the company's face are **two branding manifests over one archetype**, same catalog, same proofs; the company's is the default face. ADR-062 (co-signed by AILedger): a storefront is a manifest + a catalog scope over one root; **record-not-enforce**; "Settlement is recorded, not enforced: Tier-0 has no payment rail." | `Exchange.aDNA/what/decisions/adr_058 · 059 · 062` |
| 6 | **Nowhere on the record** does "economic platform" appear (zero hits, situation review C3); aDNALabs still carries `node_role: adna_network_org_hq` and reads "HQ" in AILedger's CLAUDE.md and the Home router; aDNALabs ADR-027 never says *partner / dog-fooding ecosystem*. | situation review §C3 `[D]`, re-grepped 2026-10-16 |
| 7 | The standard's own text, its four ecosystem specs and 28 patterns never mentioned the Exchange until ARCADE A1.1/A1.2; `spec_graph_exchange` v0.1 and `spec_platform_ecosystem` v0.4 §Access points were **accepted 2026-10-16 at G1** (aDNA.aDNA ADR-064). | `what/specs/`, `adr_064` |

**The gap this ADR closes:** two estates have each written their half of the relation (rows 1–3), the substrate has built the mechanics (row 5), and the standard has — until G1 — said nothing. The one *new* idea in the operator's reading, the **economic platform**, is on no record at all (row 6), and one sentence on the company's own record (row 4) reads as if it contradicted it. This ADR writes the standard's half, names the new idea in the standard's vocabulary, and shows that row 4 does not contradict it.

## Decision

Every product claim below carries a tense from the ratified `exchange-adoption-path` vocabulary — `PASS` (true today, verified) · `TAUGHT-AS-DESIGN` (ratified design, not yet live) · `HORIZON` (intended). Every ADR number is qualified by its vault.

### 1. The public way — what the standard *is* in the picture

The aDNA standard is **an open public way**: its text, templates, governance files and tools are **MIT** and stay so; its development, licence and law live in `aDNA.aDNA` (this vault) under the **lab estate** (aDNALabs ADR-027 §2, standard row; AILedger ADR-008 clause 1 and clause 6). Its gates are its operator's (§7.7); no other estate's record advances them.

**On "HQ".** `aDNALabs.aDNA` is the **lab estate** of the network — the originating program of its science, the owner of the readiness standard and validator, and the lab-side party to every cross-estate rule. It is **not an authority above the standard**: nothing in the standard's text, specs or gates routes *to* aDNALabs for a ruling. The label `adna_network_org_hq` and the word "HQ" are routing conventions of the org vault, inherited from before the two-estate model; this ADR **proposes** (not decides — rule 1) that they be read as *lab estate* and asks aDNALabs by memo (A2.2) whether to retire the label. `PASS` for the reading; `HORIZON` for the label.

### 2. The access points — where a builder arrives

Two Platform.aDNA graphs are the network's **named access points** to graphs built to the standard: **the console** (`Terminal.aDNA`) and **the exchange** (`Exchange.aDNA`). The standard records this **by pointer only**: aDNA.aDNA ADR-064 (accepted 2026-10-16) seats the one standard-side exchange contract, [[spec_graph_exchange]]; [[spec_platform_ecosystem]] v0.4 §Access points carries the two rows, their tense labels and the *recommended-never-required* rule (`Terminal.aDNA` the recommended default terminal, `Harness.aDNA` the recommended default harness; any conforming terminal × any conforming harness is fully conformant). Tenses are the specs' to keep current, not this ADR's to copy: at drafting, console hosting `PASS` · console launch `TAUGHT-AS-DESIGN` · exchange Tier-0 `PASS` · exchange launch `TAUGHT-AS-DESIGN`.

### 3. The commercial home — who stands behind the shopfronts

**AILedger, PBC is the commercial home and steward of the standard — steward, not owner** (AILedger ADR-008 clause 1; aDNALabs ADR-027 §2 standard row + §3 v3). The standard **records this relation here, private-side, and nowhere in its public text until the operator says "publication"** (ruling R2; SR-6; Hestia's B7 `never` on the registry). What the relation means for the standard, stated once:

- The company may **present** the standard (the product face, conformance *as presented*, collateral) — aDNALabs ADR-027 §2 product-face row; the lab keeps the **readiness standard and the validator** (the profile *definition*, via the release train).
- The company **operates the ecosystem commercially** and **plans, tracks, decides and records** its work in the core graph (AILedger ADR-008 clause 2) — and *"manages; it does not own"* (clause 5). A campaign of this vault reporting at its gates to the core graph **by memo or cargo** is consistent with this ADR; an absorption that moved this vault's charter of record would not be, and is not asked.
- Nothing of the company's **ever writes into this vault**, and nothing of this vault's into the company's: memos, PRs or cargo (aDNALabs ADR-027 §2 boundary rules; AILedger ADR-008 clause 5; ARCADE rule 1).

### 4. The economic platform — the new sentence, in the standard's vocabulary

> **The company's platform is where graphs built to the standard become networked graph products.** The standard contributes the *product minimum*; the exchange contributes the *mechanics*; the company's record contributes the *witness*; commerce, if any, is the company's and the market's, never the standard's.

Stated as what each party owns, so the sentence can be checked rather than believed:

| Layer | Owner | What it is | Tense (2026-10-16) | Where |
|---|---|---|---|---|
| **The graph-product minimum** | the standard (this vault) | a graph offered to others MUST declare **identity · license · provenance · trust posture**, each bound to a field the manifest already has, under the **honesty clause** (advisory stays advisory) | `PASS` (accepted at G1) | [[spec_graph_exchange]] §3–§4 |
| **Conformance as reported** | the standard (content) · the Exchange (execution) | L0–L3 ladder; the L2 rule set is the standard's to version and the Exchange's to run; *"imperfection publishes visibly"* | `PASS` content · `TAUGHT-AS-DESIGN` v1 rule set | aDNA.aDNA ADR-064 clause 5; spec §5 |
| **A profile of the standard** | the standard | a named conformance profile + release-integrity hash manifest riding inside the graph body — how a domain variant is a *profile*, not a fork | `HORIZON` (aDNA.aDNA ADR-066, ARCADE P3) | spec §8 forward stub |
| **Publish · discover · resolve · fetch** | the Exchange | Registry · Commons · Market; storefronts as branding manifests + scopes over one root; two faces, one archetype | Tier-0 `PASS` · launch `TAUGHT-AS-DESIGN` | Exchange ADR-059 · ADR-062; `exchange-access/v1` |
| **The witness** | the company's record | the Exchange's checkpoints anchored on the AILedger record — *a witness, not a trust root*; a reader can show a checkpoint existed by a date | `PASS` for the configuration (ADR-058 executed per its A1) — the face line appears only per listing | Exchange ADR-058 |
| **Commerce** | the company · the market | Market terms are **recorded, not enforced**; *"Tier-0 has no payment rail"* | `TAUGHT-AS-DESIGN` at most | Exchange ADR-059 §2.4 · ADR-062 §3 |

**Reconciling row 4 of the Context.** *"aDNA is not a platform. There is no hosted service"* remains **true of the standard** and this ADR keeps it so (§7 below). The platform is the **company's**: the standard does not become one by having a commercial home, any more than a road becomes a shop by having shops on it. The two sentences are about two objects. This ADR proposes (A2.2) that the company's VISION sentence gain the qualifier *"the standard"* when the company next revises it — theirs to rule.

**What "economic platform" does NOT make the standard:** a price list, a settlement layer, a marketplace operator, a trust root, or a party to any sale. The standard's text may carry **one pointer sentence** at the v2.6 cut (§19, optional extensions): that a graph MAY be offered through an exchange conforming to [[spec_graph_exchange]], and that commerce around it is outside the standard.

### 5. The ecosystem — partner, dog-fooding, usage

The aDNA ecosystem is the **partner / dog-fooding / usage ecosystem** of the standard: the graphs of this node and its partners are the standard's **first users**, and the standard is improved by what they find (this vault's III cycles, the upstream-contribution protocol, the template release train). Membership is not a relation the standard defines; **conformance is** (L0–L3; profiles). A graph relates to the ecosystem by what it declares and what the ladder reports — never by who owns it. The company operates the ecosystem commercially (§3); the lab operates it in science and law (aDNALabs ADR-027 §2 network row); the standard gives both the same vocabulary.

### 6. The first named profile

**aDNA-Medical** is the first named **profile** of the standard. It already exists as **Operation Lister** (`campaign_adna_medical`) in `AILedger.aDNA` on Jake's forge — Phase 1 done 2026-10-08, held at its Gate 1 (Jake + Stanley), with twenty-five upstream candidates (U1–U25) of which **U23 — conformance profiles + hash manifest — is the one change that makes it a profile rather than a fork** (situation review §B `[R]`, re-verified at A0.1). The standard's half is **ARCADE P3**: A3.1 reads Lister first-hand; **aDNA.aDNA ADR-066** proposes the profile seam and the release-integrity hash manifest; A3.3 scaffolds. `HORIZON` here; Lister's own gates stay Jake's and Stanley's.

### 7. What the standard will never carry

Normative on this vault once signed; proposed to the v2.6 cut as the §19 pointer's companion sentence:

- **Prices, fees, revenue shares, or any commercial term.**
- **Settlement, payment rails, escrow, or enforcement of a market term** — the standard records postures (advisory) and never enforces them (the honesty clause).
- **PHI, personal data, or any data-bearing payload** — the standard is a *shape*; data lives in instances under their own law.
- **A hosted service, telemetry, or vendor lock-in** (AILedger VISION:27, kept true of the standard).
- **A partner's name, a number, or the company's name on a public surface** before SR-6 / "publication" (R2).
- **A trust root** — a witness is named as a witness (Exchange ADR-058 clause 4); nothing the standard says depends on any record being up or honest.

### 8. Proposals to the other estates (executed as memos at A2.2 — rule 1)

| To | Proposal | Their ADR | Our basis |
|---|---|---|---|
| Berthier (`aDNALabs.aDNA`) | ADR-027 §2 **Amendment A2**: (a) the standard row gains *"and the company's platform is the economic platform on which graphs built to the standard become networked graph products (aDNA.aDNA ADR-065 §4)"*; (b) a sentence naming the ecosystem as *partner / dog-fooding / usage*; (c) read `adna_network_org_hq` as *lab estate*, retire-or-keep the label at their discretion | aDNALabs ADR-027 | this ADR §1, §4, §5 |
| Thoth / Lannes (`AILedger.aDNA`) | the pre-emptive answer to their held 10-04 memo: **yes**, aDNA.aDNA carries a **private-side** pointer to AILedger ADR-008 (this ADR §3; none public until "publication"); **the lab declares the LinkML licence** (aDNA.aDNA ADR-062 annex — GPL-free toolchain note); and the VISION:27 qualifier of §4 | AILedger ADR-008 · VISION | this ADR §3, §4; aDNA.aDNA ADR-062 |

Each memo is `outbound_ready` until its own send GO (G2). Neither estate's text is edited from here.

## Consequences

### Positive
- The standard finally **says where it stands**, in one record, with every claim pointing at the estate that owns it — a reader of this vault no longer has to infer the relation from three other vaults.
- "Economic platform" has **a checkable definition** (§4 table) with a tense per row, instead of a phrase.
- The company's *"not a platform"* sentence and the operator's *"economic platform"* reading are shown to be **about two different objects**, so neither has to lose.
- A2.2's two memos and A2.3's name-free public account have a single source to cite.

### Negative
- This is a **fourth** place the two-estate relation is written (aDNALabs ADR-027, AILedger ADR-008 + VISION, Exchange ADR-058/059/062, now here). The mitigation is strict: this ADR **cites and never restates** the others' decisions, and names what is *ours* (§1, §4 top row, §5, §6 standard-half, §7).
- The company's name enters a **GitHub-public dev-graph repo** in a record *about* the company's role (it already had, in aDNA.aDNA ADR-064 and the charter). R2 permits ADRs; the public *surfaces* stay clean. If the operator wants the repo itself treated as a public surface, that is a new ruling and this file's `visibility_note` is where it lands.

### Neutral
- Nothing changes in `what/docs/adna_standard.md` until the v2.6 cut; `spec_graph_exchange` and `spec_platform_ecosystem` are unchanged by this ADR.
- The glossary gains three **name-free** terms (`access point` · `commercial home` · `graph product`) that describe the roles, not the holders.

## What this ADR does NOT do

Edit any other estate's file (rule 1) · name the company on any public surface or lift R2 · decide equity, roles, titles, licence sentences, IP or codebase transfer (the founders' documents; aDNALabs ADR-027 §7; AILedger ADR-005/007) · move any canonical home · absorb or re-home any campaign of this vault · change the standard's licence · make either access point a conformance requirement · advance Lister's gates · bind Exchange, Terminal, aDNALabs or AILedger to anything — each proposal in §8 is theirs to rule.

## Ratification (§7.7)

| Field | Value |
|---|---|
| **Decision** | Adopt §1–§7 as the standard's position under the two-estate model, and authorise the §8 memos as proposals (each send its own GO) |
| **Ratified-by** | *(pending — operator; an agent/persona is author/steward, never ratifier)* |
| **Date** | *(pending)* |
| **Status** | **proposed** |
| **Gate / session reference** | ARCADE G2 — `how/campaigns/campaign_arcade/campaign_arcade.md` §5; drafted at `session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065` |
| **Scope of authority** | this ADR + the v2.6 pointer sentences it names (which still pass the v2.6 gate on their own); binds no other estate |
| **Pending co-signs** | none required for the standard's half; Berthier (aDNALabs) and Thoth (AILedger) may co-sign §1/§3/§4 by memo — the A2.2 memos ask |

## Related

[[adr_064_graph_exchange_spec_placement]] (the access-point contract) · [[spec_graph_exchange]] §3–§5 · [[spec_platform_ecosystem]] §Access points · [[glossary_access_point]] · [[glossary_commercial_home]] · [[glossary_graph_product]] · [[pattern_federation_readiness]] · [[campaign_arcade]] §1–§3 · `how/campaigns/campaign_arcade/artifacts/p0/situation_review_20261015.md` §B–§C · aDNALabs ADR-027 · AILedger ADR-008 · Exchange ADR-058/059/062 (all by path in the frontmatter `cites:` block, read-only).

*End of ADR-065 (proposed — ARCADE G2)*
