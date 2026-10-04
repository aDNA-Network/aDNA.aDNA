---
type: artifact
mission_id: mission_primer_adna_for_data_engineers
objective: O0
title: "Primer source inconsistencies — every contradiction met while ranking sources, verified at the object 2026-10-03; feeds the follow-up sweep mission"
created: 2026-10-03
updated: 2026-10-04
status: active
last_edited_by: agent_rosetta
executor_tier: fable
executor_runtime: claude
session: session_stanley_20261003_213535_garnier_rulings_and_lanes
tags: [artifact, primer, o0, data_engineer]
---

# Source inconsistencies register — Operation Primer O0

[D] unless marked. Each row was **re-run at the object on 2026-10-03** rather than copied from the SITREP (S5); where the SITREP's claim did not reproduce, the row says so. The primer must not paper over any of these; it cites the authority column and, where none is clean, says "the sources disagree". The follow-up sweep mission (authored at O5) takes this file as its scope.

| ID | Inconsistency | Where (verified) | Authority to cite in the primer | Disposition for the sweep |
|---|---|---|---|---|
| I-01 | **Extension-type count: 11 vs 26 vs "20".** `what/ontology.md:11` `entity_count: 26`; `MANIFEST.md:24` "11 domain-specific ontology extensions"; `CLAUDE.md` §Extended Ontology table lists **11** rows. The SITREP also cited a body line "36 = 16 + 20" in `ontology.md` — **not reproduced** in `what/ontology.md` by grep on 2026-10-03 (it is in `what/docs/ontology_unification.md:508`'s superseded v3.0 worked example, per City's 09-28 reading); and `.adna/what/ontology.md` (the template's) exists separately | three files, two numbers (26 includes something the 11-row table does not; neither file derives it) | **16 base** (ADR-035, standard §3) is the only normative number; the primer says "16 base types; vaults add their own" and gives this vault's 11 as an example | re-derive `entity_count` from the directory, fix one of the two |
| I-02 | **"14 entity types"** in `~/aDNA/Network.aDNA/what/context/context_adna_domain_reference.md` `[R]` (SITREP; not re-run here — Network is a peer vault; grep returned no match from this vault's root, i.e. the claim is theirs to verify) | peer | ADR-035: 16 | memo to Venus if the sweep confirms |
| I-03 | **"aDNA (Autonomous DNA)"** — `what/context/lattice_basics/context_lattice_basics_core_concepts.md:27` | this vault | aDNA = **Agentic DNA** (standard; workspace router) | one-word fix |
| I-04 | **`standard_reading_guide.md:14` says the standard is 1,336 lines**; `wc -l` = **1,522** | this vault | derive, never type | re-derive; the primer's §9 reading paths cite the guide's *paths*, not its line count |
| I-05 | **Tutorial titles wrong**: `tutorial_design_a_mission.md` `title: "M04 — Pattern Library"`; `tutorial_run_a_campaign.md` `title: "Documentation Campaign"` | this vault | the filenames | retitle; the primer does not link these two until fixed |
| I-06 | **`LatticeProtocol.aDNA/what/whitepaper/docs/adna_standard.md`** (62,653 B) is a second copy of the standard in a peer vault; version string not surfaced by a one-line grep (`[R]` SITREP says v2.2) | peer | this vault's `what/docs/adna_standard.md` v2.5 is canonical | memo to Noether: retire or pin as historical |
| I-07 | **`aDNA_overview.md` is not in this vault** — it lives in the template (`.adna/what/docs/`, `updated: 2026-07-03`, 49 KB) and in ~40 forks with drift `[R]`; the SITREP §6 called it a 47 KB pre-v7 copy | template vs forks | none; the primer is a candidate successor (out of scope here) | sweep decides: refresh in `.adna/` at a release, or point at the primer |
| I-08 | **The standard does not define the campaign layer** — "campaign" appears once in `adna_standard.md` (line 406, ER diagram); campaign · objective · AAR · phase gate · OODA · `executor_tier` · token budget live in ADR-016, patterns, `how/*/AGENTS.md` | this vault | normative: §9 missions only; everything else is **practice** (Appendix A) | `idea_upstream_standard_codify_campaign_layer.md` (v8.13 lane, ruled 2026-10-03) |
| I-09 | **Template drift**: `template_mission.md:8` carries `executor_tier`; `template_campaign.md` + `template_campaign_mission.md` carry none; both mission templates are `type: plan` | this vault | the pattern, not the templates | `idea_upstream_campaign_template_tier_budget_fields.md` (v8.13 lane) |
| I-10 | **"Airlock" is two things**: III's vault-to-vault traffic contract (66,988 B) vs RemoteControl's action-mediation gate (25,565 B); no document says so | two peer vaults | the primer names both and says the word is overloaded | `idea_a2a_communication_overview.md` |
| I-11 | **"Rule 10" is cited** (`CLAUDE.md` §Git-Ops item 6; campaign conventions) while the workspace router's §Standing Rules lists **9** numbered rules (`~/aDNA/CLAUDE.md:287`, count 9) | router vs consumers | the *rule* (cross-vault writes are memos) is real and lives in HAUSSMANN's conventions; the *number* dangles | sweep: either the router gains Rule 10 or the citations say "Convention 10" |
| I-12 | **Federation docs predate the topology**: `lattice_federation.md` (02-19) and `federation_walkthrough.md` (03-20) know no Network · Exchange · Lighthouse · ADR-045 placement; tier model split (L0 in Network.aDNA, L1–L3 in the whitepaper) | this vault + peers | router + specs + ADR-039/045 | refresh or retire at the sweep |
| I-13 | **ADR-062 is cited as "proposed"** in the mission text and the SITREP; it was **accepted 2026-10-03** | this vault (same day) | `adr_062_linkml_adoption.md` `accepted` | none — the primer writes "accepted (2026-10-03), optional, preferred" |
| I-14 | **Model-tier inversion** was reported at Home CLAUDE:242 and Operations AGENTS:169 `[R]` (Automator 09-21); corrected here 09-24 | peers | `pattern_model_tiered_campaign_execution.md` §2.1/§2.5 | verify at the sweep whether theirs moved; the primer quotes the pattern |

| I-15 | **The standard disagrees with itself on required governance files**: §4.1 marks `CLAUDE.md` · `MANIFEST.md` · `AGENTS.md` · `README.md` as MUST (`STATE.md` SHOULD); §5.5 Starter requires only `CLAUDE.md` · `MANIFEST.md` · `README.md`, with `STATE.md` + root `AGENTS.md` arriving at Standard; `adna_validate.py` follows §5.5 | the standard (v2.5) | `adna_standard.md` §4.1 vs §5.5 | the primer states the tension (§2.2) rather than picking a side; a standard erratum is the fix (O3 round-2, archivist + data-engineer + cold-read lenses, independently) |
| I-16 | **`frontmatter_schema.json` is stale against §7.2**: the shipped schema (v2.3) requires `status` unconditionally; §7.2's per-class profile (v2.5, ADR-044) makes it optional for `directory_index` and `coordination` — a validator built from the schema fails every memo and index | this vault | `what/lattices/tools/frontmatter_schema.json` vs `adna_standard.md` §7.2 | the primer names the schema and its staleness (§7 row); the schema bump is a vault fix, not the primer's (O3 round-2, data-engineer lens) |
| I-17 | **§6.5 cites a rule §15 does not contain**: the rename protocol says "archive-don't-delete, §15"; §15 covers archive pattern + retention of session history only | the standard (v2.5) | `adna_standard.md` §6.5 → §15 | none in the primer; standard erratum (O3 round-2, archivist lens) |

Count: **17 rows (14 at O0 + 3 found by the O3 round-2 lenses)**; was **14 rows ≥ the SITREP S5 list (8 items)** — acceptance criterion met; 1 SITREP claim (the "36 = 16 + 20" line's location) did **not** reproduce at the stated object and is recorded as such in I-01.
