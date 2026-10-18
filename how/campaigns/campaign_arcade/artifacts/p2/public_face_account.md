---
type: artifact
campaign_id: campaign_arcade
mission_id: mission_arcade_a2_3_public_face_account
phase: P2
title: "The public-face account of the four relations — the paragraphs adna.network will need, every claim enumerated with its tense and its evidence; name-free, counsel-safe, nothing deployed"
created: 2026-10-18
updated: 2026-10-18
status: proposed          # proposed copy for GARNIER A5.1's claims lanes; no public surface changes until the operator says 'publication' (R2) and DP3 rules
last_edited_by: agent_rosetta
executor_tier_declared: opus
executor_tier_actual: fable
session: session_stanley_20261018_223403_arcade_a2_3_public_face_account
single_source: what/decisions/adr_065_standard_position_two_estates.md   # accepted 2026-10-16 (ARCADE G2, R17)
consumers: [campaign_garnier A5.1 (claims lanes, via campaign_haussmann/evidence/claims/claim_register.md §28), campaign_arcade A5.1 (VITRINE disposition)]
tags: [artifact, arcade, p2, public_face, claims, tense_labels, name_free]
---

# The public-face account of the four relations

> **Plain version.** Four things adna.network will one day need to say — what the standard is, where graphs are offered and checked, that a company stands behind the shopfronts, and that a medical profile is on the way — written in plain words, with every sentence tied to a row that says how true it is *today* and where the proof lives. Nothing here is published. It is the copy, and the evidence for the copy, handed to the campaign that owns the site's claims.

## §0 Scope and the rulings this file runs under

- **What this is.** `[D]` The paragraph set the public site will need about the four relations recorded in [[adr_065_standard_position_two_estates|aDNA.aDNA ADR-065]] (accepted 2026-10-16 at ARCADE G2, ruling R17) — the **public way** (§1 there), the **access points** (§2), the **commercial home** and **economic platform** (§3–§4), the **ecosystem** (§5) and the **first profile** (§6) — plus the never-carries list (§7). aDNA.aDNA ADR-065 is the **single source**; where it points at a spec, the spec's table cell is the tense of record, re-read at HEAD this sitting.
- **What this is not.** Not a site change. `site/` is untouched; the registry stays built-not-deployed; nothing here is rendered anywhere. The rows go to GARNIER's claim register at `status: proposed` (§6) and GARNIER A5.1 decides what enters which lane at DP3.
- **R2 (2026-10-15, re-affirmed at G2).** No public surface names the company until the operator says "publication". The public block below carries **no company name, no partner, no number, no product face**. The whole of this file — rows included — is kept free of the company's name so it can travel with the copy: `grep -rli` on the name → 0 (§4).
- **R21 (2026-10-18, plan-time AskUserQuestion).** The profile's working name **aDNA-Medical** *may* appear in the public block, as a `HORIZON` claim with its own row. The campaign codename it is being built under, the partner's name and the company stay out.
- **Withheld names.** Two lists govern which graphs may be named: Hestia's B7 admission reading (`who/coordination/inbox/coord_2026_10_06_hestia_to_rosetta_b7_admission_reading_32_rows_ruled.md` — five rows `never`; names there, not here) and the primer's write-gate scrub, rule 4 (`how/missions/artifacts/primer/scrub_control.md`). The two access-point graphs are **admitted** registry rows (`site/src/data/registry_admission.yaml`; `active` since the 2026-10-16 regeneration), so they may be named — by role first, name once.
- **Tense vocabulary** (ratified `exchange-adoption-path`): `PASS` — true today, verified at the object · `TAUGHT-AS-DESIGN` — ratified design, not yet live · `HORIZON` — intended. "Near launch" is `TAUGHT-AS-DESIGN` until the product's own gate says otherwise (ARCADE rule 4).
- **The S1 rule (R-125).** The register's counsel embargo cuts the coordination protocol's name from every public surface until D-8 rules; it may be neither defined nor linked. **The public block makes no claim about the protocol at all** (derived: §2 column `S1` is empty on every row; §4 proves the term is absent). Any future row that names or describes the protocol inherits **S1** under R-125 — the column exists so that inheritance is visible, not inferred.
- **Provenance tags** — `[D]` observed at the object this sitting · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## §1 The paragraph set

The block between the two markers is the public text. The scrub (§4) and the reading-level measurement (§5) run over **exactly** this block, extracted by the markers — never over the rest of the file, whose evidence pointers legitimately carry dates and decision numbers the public text may not.

<!-- PUBLIC-BEGIN -->
aDNA is an open standard for organising a project's knowledge so that people and AI agents can both work in it. Its text, templates and tools are MIT-licensed and stay that way. The lab that writes the standard owns it and runs its gates. The standard is a shape for knowledge, not a service: there is no hosted platform, no telemetry and no lock-in in the standard itself.

A graph built to the standard can be offered to others through an exchange, and worked on through a console. The network recommends one of each as the place to start: the console is the Terminal graph, and the exchange is the Exchange graph. Both are recommended, never required; any console or exchange that keeps the same contract is fully conformant. The console runs today, and its public launch is designed but not yet live. The exchange runs today at its first tier, and its public launch is also designed but not yet live. A graph offered through the exchange must declare four things: who made it and which version, what others may do with it, where it came from, and how far to trust it. Conformance to the standard is reported as findings, never certified, and an advisory posture is shown as advisory, never as enforced. The exchange's structural check against the standard's current rule set is designed and not yet switched on.

Behind the exchange a company stands as the standard's commercial home. It presents the standard and operates the ecosystem around it as a business, as steward and not as owner. Its platform is designed to be where graphs built to the standard become products that other graphs can find, fetch and trust. The exchange's published state is designed to be witnessed by an independent record, so that a reader can show a listing existed by a given date; that witness is not a trust root, and it is not yet live. Whatever commerce grows around graphs belongs to the company and to the market. The standard itself carries no prices, no settlement, no payment rail, no patient or personal data, no hosted service and no trust root.

The graphs of the standard's own network are its first users, and the standard improves by what they find. A graph relates to that ecosystem by what it declares and by what the conformance ladder reports, never by who owns it. A first named profile of the standard, aDNA-Medical, is being designed for compliance-focused medical use: a profile, not a fork, carrying a release-integrity manifest so that a reader can check that what they run is what was released. It is intended, and not yet live.
<!-- PUBLIC-END -->

## §2 The claim rows

One row per claim in the block. **Tense** is copied from the cell of record, named in the evidence column, as read at HEAD 2026-10-18 `[D]`; **S1** is set only on a claim about the coordination protocol (none — see §0). Ids continue the HAUSSMANN register's sequence (`R-184` was the last before this sitting, derived by `artifacts/p3_5/derive_register_counts.py`); the same rows are appended there as §28.

| # | ¶ | Claim (quoted) | Tense | S1 | Evidence of record | Prov |
|---|---|---|---|---|---|---|
| R-185 | 1 | "aDNA is an open standard for organising a project's knowledge so that people and AI agents can both work in it." | `PASS` | — | aDNA.aDNA ADR-065 §1 (the public way); register `G-03`/`G-04`/`R-12` verified; `what/docs/adna_standard.md` v2.5 | [D] |
| R-186 | 1 | "Its text, templates and tools are MIT-licensed and stay that way." | `PASS` | — | aDNA.aDNA ADR-065 §1 + §7.7 (licence unchanged; ruling R1 "keep the standard open"); register `G-06` (GitHub API: `aDNA-Network/aDNA` licence MIT) | [D] |
| R-187 | 1 | "The lab that writes the standard owns it and runs its gates." | `PASS` | — | aDNA.aDNA ADR-065 §1 ("development, licence and law live in `aDNA.aDNA` under the lab estate"; "its gates are its operator's"); cites aDNALabs ADR-027 §2 standard row (accepted) | [D] |
| R-188 | 1 | "The standard is a shape for knowledge, not a service: there is no hosted platform, no telemetry and no lock-in in the standard itself." | `PASS` | — | aDNA.aDNA ADR-065 §4 reconciliation + §7 bullet 4 (the company's VISION sentence "kept true of the standard"); spec_graph_exchange §7 | [D] |
| R-189 | 2 | "A graph built to the standard can be offered to others through an exchange, and worked on through a console." | `PASS` at the spec shelf · `HORIZON` in the standard's text | — | spec_graph_exchange v0.1 **accepted** (ARCADE G1, 2026-10-16; aDNA.aDNA ADR-064); spec_platform_ecosystem v0.4 §Access points **accepted**. ⚠ `what/docs/adna_standard.md` v2.5 does not yet say so — the §19 pointer sentence lands at the v2.6 cut (aDNA.aDNA ADR-065 §4 last paragraph; ARCADE A4.1) | [D] |
| R-190 | 2 | "The network recommends one of each as the place to start: the console is the Terminal graph, and the exchange is the Exchange graph." | `PASS` | — | spec_platform_ecosystem v0.4 §Access points (two rows, operator ruling 2026-10-15 recorded in `campaign_arcade.md` §1); both graphs **admitted** (`registry_admission.yaml`) and `active` in `vaults.json` since 2026-10-16 | [D] |
| R-191 | 2 | "Both are recommended, never required; any console or exchange that keeps the same contract is fully conformant." | `PASS` | — | spec_platform_ecosystem v0.4 §Access points "Recommended defaults — recommended, never required"; spec_terminal_harness_contract v0.2 (any-terminal × any-harness); aDNA.aDNA ADR-065 §2 | [D] |
| R-192 | 2 | "The console runs today, and its public launch is designed but not yet live." | hosting `PASS` · launch `TAUGHT-AS-DESIGN` | — | spec_platform_ecosystem v0.4 §Access points, console row: "hosting `PASS` … launch `TAUGHT-AS-DESIGN`" (Enceinte e6 Drawbridge = the launch) | [D] |
| R-193 | 2 | "The exchange runs today at its first tier, and its public launch is also designed but not yet live." | Tier-0 `PASS` · launch `TAUGHT-AS-DESIGN` | — | spec_platform_ecosystem v0.4 §Access points, exchange row; spec_graph_exchange §6 substrate row ("Tier-0 complete 2026-07-17; ADOPT since 2026-09-17; three real graphs published on L1; **no fleet vault has fetched a graph yet**") — the public sentence stays silent on fetches rather than imply any | [D] |
| R-194 | 2 | "A graph offered through the exchange must declare four things: who made it and which version, what others may do with it, where it came from, and how far to trust it." | `PASS` | — | spec_graph_exchange §3 (the publishable-graph minimum: identity · license · provenance · trust posture; **accepted**); aDNA.aDNA ADR-065 §4 table row 1; `glossary_graph_product` | [D] |
| R-195 | 2 | "Conformance to the standard is reported as findings, never certified, and an advisory posture is shown as advisory, never as enforced." | `PASS` | — | spec_graph_exchange §3 last paragraph + §4 the honesty clause (clauses 1 and 4: "certified" and "compliant" do not appear on any face); aDNA.aDNA ADR-065 §4 row 2 (content `PASS`) | [D] |
| R-196 | 2 | "The exchange's structural check against the standard's current rule set is designed and not yet switched on." | `TAUGHT-AS-DESIGN` | — | spec_graph_exchange §5–§5.1 (L2 v1 **proposed**; the runner is stamped `v0-proposed`); aDNA.aDNA ADR-065 §4 row 2 ("`TAUGHT-AS-DESIGN` v1 rule set"); Themis F-164-01 (the bump is not one line — amendment candidate at A4.1) | [D] |
| R-197 | 3 | "Behind the exchange a company stands as the standard's commercial home. It presents the standard and operates the ecosystem around it as a business, as steward and not as owner." | `PASS` (role; holder unnamed, R2) | — | aDNA.aDNA ADR-065 §3 (cites the company's own accepted record, clause 1 "steward, not owner", and aDNALabs ADR-027 §2 + §3 v3); `glossary_commercial_home` (role, not holder) | [D] |
| R-198 | 3 | "Its platform is designed to be where graphs built to the standard become products that other graphs can find, fetch and trust." | `TAUGHT-AS-DESIGN` | — | aDNA.aDNA ADR-065 §4 (the economic-platform sentence; owner × tense table — publish/discover/resolve/fetch Tier-0 `PASS`, launch `TAUGHT-AS-DESIGN`; the whole is a ratified design, not a live product) | [D] |
| R-199 | 3 | "The exchange's published state is designed to be witnessed by an independent record, so that a reader can show a listing existed by a given date; that witness is not a trust root, and it is not yet live." | `TAUGHT-AS-DESIGN` — **built and inert** | — | aDNA.aDNA ADR-065 §4 witness row (re-tensed 2026-10-16 on Themis/Mnemosyne F-164-02: anchoring built, no anchor target listed, heads unsigned, repository named not created); spec_graph_exchange §4 clause 2 ("a witness, **never 'on the ledger'**") + §8 | [D] |
| R-200 | 3 | "Whatever commerce grows around graphs belongs to the company and to the market." | `TAUGHT-AS-DESIGN` at most | — | aDNA.aDNA ADR-065 §4 row 6 (market terms recorded, not enforced; "Tier-0 has no payment rail"); Exchange ADR-059 §2.4 · Exchange ADR-062 §3 by citation | [D] |
| R-201 | 3 | "The standard itself carries no prices, no settlement, no payment rail, no patient or personal data, no hosted service and no trust root." | `PASS` | — | aDNA.aDNA ADR-065 §7 (normative on this vault once signed — signed 2026-10-16); spec_graph_exchange §7 | [D] |
| R-202 | 4 | "The graphs of the standard's own network are its first users, and the standard improves by what they find. A graph relates to that ecosystem by what it declares and by what the conformance ladder reports, never by who owns it." | `PASS` | — | aDNA.aDNA ADR-065 §5 (the partner / dog-fooding / usage ecosystem; "conformance is" the relation the standard defines); `skill_upstream_contribution` + the III cycles as the mechanism | [D] |
| R-203 | 4 | "A first named profile of the standard, aDNA-Medical, is being designed for compliance-focused medical use: a profile, not a fork, carrying a release-integrity manifest so that a reader can check that what they run is what was released. It is intended, and not yet live." | `HORIZON` | — | aDNA.aDNA ADR-065 §6 (the first named profile; the standard's half is ARCADE P3 → aDNA.aDNA ADR-066, seat held); spec_graph_exchange §8 forward stub (profiles + hash manifest); name permitted by R21 | [D] |

**Derived:** 19 claim rows (`R-185`…`R-203`); `PASS` 11 · `TAUGHT-AS-DESIGN` 4 · `HORIZON` 1 · split-tense 3 (R-189, R-192, R-193); S1 0 — counted by the sitting's own grep over this table before the register append (§4 records the command).

## §3 The VITRINE brief, dispositioned for A5.1 (charter §3 Subsumes)

`[D]` `how/campaigns/campaign_vitrine/campaign_vitrine.md` §1 (`status: proposed`, never ratified) brief: *"the Exchange, where graphs are offered, accessed and **ledger-backed** so that a graph you run is one you can trust."*

| Fragment | Reading today | Row |
|---|---|---|
| "graphs are offered, accessed" | true at the substrate's first tier; the public launch is designed | R-193 |
| "ledger-backed" | the witness — **built and inert**; no checkpoint lists an anchor target; and the word itself is the one the honesty clause forbids ("never 'on the ledger'", spec_graph_exchange §4 clause 2) | R-199 |
| "so that a graph you run is one you can trust" | trust is a *declared posture*, advisory, verified by the consumer before it writes; the exchange never certifies | R-194 · R-195 |

**Disposition recommended to ARCADE A5.1 → GARNIER DP3:** the brief's sentence is **superseded by R-193 + R-199 + R-195** as written in the §1 block. As it stands it would be a present-tense claim about a witness that is not live and a trust that is not certified — the register's R-14/R-20 class. VITRINE itself stays `proposed`; this row only dispositions its §1 Exchange sentence, which is what the charter's Subsumes table assigned here.

## §4 Scrub record (Objective 2) — red-proved, then 0

The instrument is a scratchpad script (not kept in the vault; command lines in the session log) that extracts **exactly** the block between the §1 markers and runs five layers over it, **none re-typed**: (1) `PRIVATE_MARKERS` and (2) `R125_EMBARGOED_TERMS`, both read **by text** from `scripts/build_vaults_data.mjs` (the generator's own literals — the same regexes that project Hestia's inventory notes onto the public registry); (3) the eight gate-27 `leak_patterns.json` fixtures (`site/tests/gates/fixtures/`); (4) the primer's write-gate grep list (`how/missions/artifacts/primer/scrub_control.md`, rules 1–7 + the "Also" row, rebuilt as a `grep -nE -f` pattern file — **75 regexes**, with Hestia's three remaining `never` names, the profile campaign's codename and the partner's first name appended for this file); (5) the company's name, case-insensitive, over the **whole file**, rows included.

| Run | Input | Planted? | Hits | Result |
|---|---|---|---|---|
| 1 | a scratch copy of this file with one control sentence appended inside the markers (a home-vault path · a date · a bare decision number · the company's name · the embargoed term · the profile campaign's codename · a `campaign_` id) | yes | **6** — `PRIVATE_MARKERS` (the date) · `R-125` (the term) · `leak:internal_id` · `leak:op_codename` · `primer-grep` (line 7) · `name:whole-file` (1) | **RED ✓** — every layer fires |
| 2 | this file, the §1 block as written (22 sentences · 445 words) | no | **0** on all five layers | clean |
| 3 | `grep -rli` for the company's name over `artifacts/p2/` | no | **0** files | clean |
| 4 | bare decision-number check (ARCADE rule 3) over this file — a `ADR-NNN` not preceded by its vault | no | **2 → 0** (§0's "the single source" sentence and the Exchange citation in R-200 were qualified by hand) | clean |
| 5 | `gitleaks detect --no-git --source` on this file | no | **0** ("no leaks found", 17.97 KB) | clean |

Derived counts over the §2 table (grep, this sitting): **19** claim rows; tense cells `PASS` 11 (one role-only) · `TAUGHT-AS-DESIGN` 4 · `HORIZON` 1 · split 3; **S1 0** — no sentence in the block names or describes the coordination protocol, and layer (2) is the machine proof.

## §5 Reading level

`node scripts/reading_level.mjs` on the extracted block (frontmatter-free scratch copy): **FKGL 9.11** · 22 sentences · 445 words · 20.2 words per sentence · 1.42 syllables per word · **passive 54.5 % (12 hits, flagged by the tool)**. Read against GARNIER's measurement contract (`campaign_garnier/artifacts/genesis/word_budgets.md`: word targets are advisory; *"No wording is cut solely to improve FKGL"*): the grade is within the site's general-reader band; the passive ratio is **deliberate and recorded, not repaired** — the passive constructions are the tense carriers ("is designed … not yet live", "is reported, never certified", "is intended"), and rewriting them active would move the tense out of the sentence and into the reader's inference. A5.1 may trade sentences for voice at DP3; the rows do not change.

## §6 Hand-off

- **To GARNIER A5.1 (via the HAUSSMANN register):** rows R-185…R-203 appended to `how/campaigns/campaign_haussmann/evidence/claims/claim_register.md` as **§28** at `status: proposed`, with a new §28.N Counts table (gate-41 reads the last Counts table; it is derived, not typed). The register's gate fixture (`site/tests/gates/fixtures/claim_register.json`) is **deliberately not touched** — gate-26 asserts rendered pages, and nothing here is rendered.
- **To ARCADE A5.1:** §3 (the VITRINE sentence) and the lane recommendation that every row above enters the claims lanes with its tense cell intact — a row loses its tense only when a product's own gate moves it.
- **To ARCADE A3.1:** R-203 is the public ceiling for aDNA-Medical until aDNA.aDNA ADR-066 is accepted; the reading of the profile's upstream candidates starts there.
- **Not done here, stated so nothing is inferred:** no FKGL rewrite (measured and reported, §5); no page authored; no copy placed in `site/`; the company's name, the campaign codename and the partner appear nowhere in this file.
