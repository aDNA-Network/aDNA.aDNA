---
type: artifact
artifact_class: upstream_disposition
campaign_id: campaign_arcade
mission: mission_arcade_a3_1_lister_reading
title: "Rosetta's reading of Operation Lister Phase 1 — U1–U25 dispositioned against the standard's HEAD, and the eleven §16 Gate-1 questions answered from the standard's side"
created: 2026-10-19
updated: 2026-10-19
status: proposed          # advisory — Lister's Gate 1 is Jake's + Stanley's; every v2.6 row is ruled at A4.1's §7.7, never here
last_edited_by: agent_rosetta
authored_at_tier: opus     # declared fable (card); executed opus — recorded, not hidden
session: session_stanley_20261019_205516_arcade_a3_1_lister_reading
source_pins:
  lister_worktree: "~/aDNA/scratchpad/genesis/ailedger_qm_wt · stanley/quatre-mains-m00 · 2fe3ffe (open) → 3b33198 (seal: a concurrent desk, S167, merged forge/main — Jake's task mirrors; `git diff 2fe3ffe..3b33198 -- how/campaigns/campaign_adna_medical` = 0 lines) — read-only from here"
  lister_upstream_pin: "aDNA.aDNA 27ccafc (2026-10-03, the v8.12 deploy record) · standard v2.5"
  standard_head: "aDNA.aDNA aa15c2d (open) · .adna/ bf5bdd8 = v8.12 (no image released since their pin)"
data_tier: GREEN
discipline: names_only
tags: [artifact, arcade, p3, lister, adna_medical, upstream, disposition, gate_1, profile]
---

# Rosetta's reading of Operation Lister Phase 1

> **Plain version.** A team at the company is building a slimmed-down, medical-grade version of aDNA, called aDNA-Medical.
> While stripping the standard down, they wrote twenty-five suggestions for the standard itself (U1–U25) and eleven open
> questions for their own first gate. This file is the standard's answer. For each suggestion it says whether we take it
> now, at the next minor version (v2.6), at the next major (v3.0), or not at all. For each question it says what the
> standard has to say. It is **advice**. Their gate is signed by Jake and Stanley, not by this vault, and every change to
> the standard's text is still ruled one line at a time at its own cut. *(Self-reference, Standing Order 8: this file is a
> `how/campaigns/*/artifacts/` object. It records a reading, and owns no decision. The decisions it feeds sit in
> [[mission_arcade_a3_2_adr_066_profiles_hash_manifest]] and [[mission_arcade_a4_1_standard_v2_6]].)*

## §1 Premise (re-read at the object, 2026-10-19)

- `[D]` **What was read.** Lister's charter, `artifacts/upstream_candidates.md` (25 rows), `artifacts/disposition_ledger.md`
  and `artifacts/adna_medical_spec.md` v0.1.0-draft (§3, §11, §16 first-hand). All four are under
  `how/campaigns/campaign_adna_medical/` in the worktree pinned above. Nothing was written there from this desk (ARCADE rule 1). At the seal the
  worktree had moved: Stanley's concurrent QM sitting (S167) merged `forge/main` → `3b33198` and left 4 untracked files of
  its own. The Lister path diff across that move is **0 lines**, so every quotation here still holds.
- `[D]` **Their counts reproduce.** A script over the ledger rows gives 258 rows: CORE 100 · MODULE 112 · DROP 46,
  primary disposition, matching their §Counts.
- `[D]` **Their pin is our `27ccafc`**, the v8.12 deploy record of 2026-10-03. No image has shipped since (`.adna/` =
  `bf5bdd8`, v8.12). So every claim about the shipped template is checked against `.adna/` today. Where this dev graph has
  already fixed a surface that has not shipped yet, the row says so.
- **Gate 1 is half-held.** `[D]` The Lister charter still reads "HELD AT GATE 1" (`updated` 2026-10-08).
  - `[R]` On 2026-10-16 Lannes relayed Jake's "Gate 1: yes" (AILedger S155 Addendum 1). It covered **only** the Hermes
    proposal: the Exchange is the publish path for the template, the first publish is scoped (D4), and the core stays
    network-free. That proposal is **Exchange.aDNA ADR-065** (`adr_065_adna_medical_is_the_exchange_dogfood_tenant.md`,
    `proposed`).
  - ⚠ **Exchange.aDNA ADR-065 is not aDNA.aDNA ADR-065.** Ours is the two-estate position, accepted 2026-10-16 (ARCADE
    rule 3; the collision is live in this very reading).
  - Jake's ten rulings sit in charter §10. **Stanley's own reply is drafted, not posted** (the operator confirmed this at
    plan time 2026-10-19, R23; the draft is at `~/aDNA/scratchpad/genesis/lab_side/post_s115_lister_gate1_reply.md`).
    §3 below therefore lines the standard's reading up against **both** signers' words.
- **The public ceiling** is R-203 in [[public_face_account]]: aDNA-Medical is a profile, not a fork; it is `HORIZON`.
  Nothing in this file raises that tense.

**Disposition vocabulary** (each row has one primary value; counted by script in §2.2):

| Value | Meaning | Where it is ruled |
|---|---|---|
| `accept-now` | a fix to the shipped image or this dev graph; **no normative change** to `adna_standard.md` | the v8.13 release gate ([[mission_arcade_a4_2_image_v8_13]]) |
| `v2.6` | changes the standard's text, additively or as an erratum; minor-compatible | one §7.7 line each at the v2.6 cut ([[mission_arcade_a4_1_standard_v2_6]]); U15 · U18 · U19 · U23 via aDNA.aDNA ADR-066 first |
| `v3.0` | breaking (rename, removal of a MUST); waits for the major window | the v3.0 window |
| `decline` | the standard should not take it | — (none this reading; see §2.3) |

"Accept" means *the standard's maintainer recommends it*. No row is ratified by being in this table.

## §2 U1–U25

### §2.1 The table

| U | Their claim (short) | `[D]` our-HEAD check (2026-10-19) | Disposition | Target § / file | Size · risk | Cross-reference |
|---|---|---|---|---|---|---|
| U1 | 12.6 MB hook fixture + 14 MB / 14 plugins ship in every fork | **Holds.** `.adna/how/standard/hooks/test_fixtures/dirty/large_binary.bin` = 12,582,912 B; `.obsidian/plugins/` = 13 M, 14 dirs; `.adna/` = 55 M on disk | `accept-now` | fixture generated at self-test; plugins → opt-in bundle | S · Low (one Obsidian pass) | this vault's `idea_plugin_trimming` is `deferred`; this row re-opens it as a v8.13 gate question |
| U2 | session template + `how/sessions/AGENTS.md` Tier formats omit `created`/`updated`/`last_edited_by`/`tags` | **Half stale.** `template_session.md` already carries all four (v8.12). `how/sessions/AGENTS.md` Tier 1 example still omits them; the Tier 2 example also omits `type`. The "standard §8 example" target does not exist (no session frontmatter block in §8) | `accept-now` | `.adna/how/sessions/AGENTS.md` Tier 1 + 2 examples | XS · Low | no primer I-row matches (checked I-01…I-17); the template half is already done |
| U3 | one vocabulary: mission/objective vs `plan_`/Tasks | **Holds.** `template_mission.md:2` `plan_id`, `:29` `## Tasks`; standard L612 / L684 / L858 keep `plan_` as "legacy". This vault's own mission cards still carry `plan_id` (this card does) | `v2.6` | §9.3 + L612/L684: `mission_id` canonical, `plan_id` an accepted alias; template switch rides v8.13. Alias removal is a v3.0 item | S · Low–Med | neighbour of primer I-09 (same template, different field) |
| U4 | App. B is a verbatim duplicate of §16.2 | **Not verbatim.** App. B (L1419) has 5 points + query patterns + a backlog row. §16.2 (L1193) has 4 points and no patterns. App. B is the superset | `v2.6` | fold App. B's patterns + backlog row into §16.2; App. B → pointer (editorial erratum, aDNA.aDNA ADR-063 class) | XS · None | correction to the claim, not the conclusion |
| U5 | four overlapping intro files; two convergence-model files | Plausible; not re-measured file by file this sitting `[I]` | `v2.6` | image content, its own mission in the v2.6 window (merge + link sweep), not a standard change | M · Low–Med (wikilink churn) | the dev-graph CLAUDE.md cites the full convergence file; any merge keeps that path |
| U6 | CLAUDE.md lists 20 of 33 skills; Project Map says 30 templates | **Holds.** `.adna/CLAUDE.md` skills rows 20; `how/skills/skill_*.md` 33; Project Map L66 "30 reusable templates"; `how/templates/*.md` 34 | `accept-now` | derive both from the directory; `adna_validate --governance` already counts skills by regex — extend to templates | S · None | this dev graph found the same class on itself (a skill unlisted 8 days, CLAUDE.md inventory note) |
| U7 | retired `skill_workspace_init` still ships | **Holds.** file present in `.adna/` | `accept-now` | move to the image's archive path (archive, never delete) | XS · None | — |
| U8 | `skill_workspace_spring_clean` requires `skill_create_iss`, absent from base | **Holds, softer than stated.** `requirements.context` L17 lists it; the body L70 already falls back to AskUserQuestion. The *declaration* dangles, the behaviour does not | `accept-now` | mark the requirement optional | XS · None | — |
| U9 | six stale version/name surfaces | **Mixed.** In `.adna/` still: `adna.md:17` "Version 2.1"; `core_concepts` "Autonomous DNA" (L26); reading guide "1,336 lines" (L14); §2 "12 key terms" (L61); App. C "no new deferrals in v2.0" (L1439); `example-biotech-lab` / `example-enterprise-pipeline` hyphenated. **Already fixed in this dev graph, unshipped:** "Autonomous" (primer I-03 ✅) and "1,336" (I-04 ✅) | `v2.6` | the two standard lines (§2 count, App. C) as errata; the §15.4 checklist gains "derived surfaces"; the image surfaces + example rename ride v8.13 | S · Low (example paths are named by the §5.5 conformance-walk note) | primer I-03 · I-04 (`how/missions/artifacts/primer/source_inconsistencies.md`); aDNA.aDNA ADR-063 erratum class |
| U10 | two workspace-router templates | **Holds.** both `how/templates/template_workspace_claude.md` and `what/docs/templates/workspace_claude_md.template` exist | `accept-now` | keep one; the other → pointer (which one is A4.2's call) | XS · Low | — |
| U11 | two AAR forms for one event | **Holds.** `.adna/CLAUDE.md` L134 (SO-5, 5-line) vs L214 (artifact at mission completion) | `accept-now` | state when each applies: 5-line always; full artifact for a campaign-closing mission | XS · None | this campaign's own cards run the 5-line form only |
| U12 | Templater macros in Tier-1 templates | **Holds.** 13 templates under `.adna/how/templates/` contain `<%` | `v2.6` | plain `{placeholders}` in core; a Templater variant in the Obsidian bundle (pairs with U1) | S · Low | — |
| U13 | six "Tier" systems share one word | **Holds** (§8.3 L759 · §13 · §16 L1148 · §17 · L0–L3 · request tiers) | `v3.0` | rename to distinct nouns at the major (their own risk call) | M · Med | this vault adds a seventh: T0–T2 visual-inspection tiers |
| U14 | validator + schema lag the standard | **Holds.** `frontmatter_schema.json` `$id` v2.3; `required` includes `status` for every class; tag pattern `^[a-z][a-z0-9_-]*$` admits hyphens; `adna_validate.py` has no `token_estimate`/`fair` check (grep 0) | `accept-now` | schema + validator at v8.13; binding them into the §15.4 checklist rides v2.6 | S · Low | primer I-16 → `idea_upstream_frontmatter_schema_per_class_status` (v8.13 lane) |
| U15 | Starter requires `who/coordination/` even for one agent | **Holds.** §5.5 item 3 (L525); also L938 "MUST check … every session startup" | `v2.6` → **A3.2** | §5.5 L1 item 3 → "required when more than one agent writes" (or move to Standard); L938 conditional | XS · Low | Lister MED-3.4 keeps an empty dir only for this; §16 Q5 below |
| U16 | base ships executable code outside `what/reference/`, against §19.5's MUST | **Holds.** §19.5 L1365 "Executable code MUST live in `what/reference/` or in the project content layer — nowhere else"; the base ships `what/lattices/tools/*.py`, `how/standard/hooks/*.sh`, skill scripts | `v2.6` | amend §19.5 to **name the sanctioned tool locations** rather than relocate (relocation breaks paths every skill cites) | M · Med | — |
| U17 | README vs MANIFEST overlap | Plausible `[I]`; the §4.1 table is itself in dispute (E-1) | `v2.6` | informative guidance in §4.3/§4.6 (one job each). **Not a new MUST.** That half is declined | S · Low | primer I-15 → aDNA.aDNA ADR-063 **E-1** (§4.1 four MUSTs vs Starter's three) — land together |
| U18 | "archive, never delete" has no purge carve-out | **Holds, and sharper than stated.** The rule lives in `.adna/CLAUDE.md` SO-6 (L135). §15 does not contain it, though §6.5 cites it there | `v2.6` → **A3.2** | §15.1–15.2: a purge carve-out for regulated data + secrets, with a payload-free incident record | XS · Low | primer I-17 → aDNA.aDNA ADR-063 **E-2** (the same dangling citation) — one §15 text resolves both |
| U19 | no data-sensitivity field | **Holds** (`data_class` grep 0 in the standard) | `v2.6` → **A3.2** | optional base field in §7.2/§7.6. A **label**, never data — consistent with aDNA.aDNA ADR-065 §7 (no PHI) | S · Low | LP `lattice_core` DataTier cited at A3.2 |
| U20 | "embedded" means two things | **Holds** (§3.3 L155 embedded triad vs §3.5 base at `.adna/`) | `v2.6` | name §3.5's sense "vendored base"; keep "embedded" as an alias one minor | XS · Low | — |
| U21 | STATE.md is SHOULD but read unconditionally | **Holds.** §4.1 L233 SHOULD; Starter (§5.5 L1) omits it; Standard item 5 requires it; L270 / L279 read it unconditionally | `v2.6` | make the startup reads conditional ("if present"). Keeps Starter thin, which is the medical profile's own interest | XS · Low | E-1's table (same §4.1 rows) |
| U22 | §8.7 "75% rule" is an unmeasurable MUST | **Holds.** L803 + L805 MUST; decision D5 | `v2.6` | demote to SHOULD; name aDNA.aDNA ADR-016's content-load formula as the practical proxy (the measurement contract already exists in this vault) | XS · None | aDNA.aDNA ADR-016 |
| U23 | adopt (a) conformance profiles, (b) a deterministic hash manifest, (c) `ceil(bytes/4)` | **Holds.** §5.5's declaration admits `starter · standard · full` only; no manifest, no token metric in the standard (grep 0) | `v2.6` → **A3.2 (the core)** | §5.5 new subsection (overlay `<level>+<profile>`, already pre-stated in `spec_graph_exchange` §8); new §-level "Release integrity" bound to §15.4; (c) as the SHOULD method for `token_estimate` | M · Low–Med (additive) | **the one change that makes it a profile, not a fork** (aDNA.aDNA ADR-065 §6); Exchange.aDNA ADR-065 binds "two digests, never conflated" |
| U24 | search-first protocol scans `~/.config/`, `~/.claude/`, `.mcp.json` | **Holds.** `.adna/who/governance/governance_agent_protocol.md:48` | `accept-now` | scope the search to the project root by default; home-directory paths only on the operator's word | XS · Low | `doctrine_credential_handling` — the highest-value row in the set; it ships to every fork |
| U25 | base CLAUDE.md ≈ 6,500 tok always-loaded | **Holds.** `.adna/CLAUDE.md` = 28,670 B ≈ 7,168 tok by their own metric | `accept-now` | move reference blocks to on-demand docs. We take their direction, not their ≤ 3,000 number | M · Low | this vault's `idea_upstream_claude_md_prune` is already `accepted` |

### §2.2 Derived counts

Counted by script over the Disposition column of §2.1 at the seal (the command is in the session log):
**`accept-now` 10 · `v2.6` 14 · `v3.0` 1 · `decline` 0 — 25 of 25.** Four of the fourteen v2.6 rows (U15 · U18 · U19 · U23)
go to aDNA.aDNA ADR-066 at A3.2 as one cluster, as the A3.2 card names them.

### §2.3 What this reading corrects, and what it declines

- **Three claims are corrected, not their conclusions:**
  - U2: the template half is already done.
  - U4: App. B is the superset, not a verbatim copy.
  - U8: the dependency is declared, not behavioural.

  A candidate list written against a moving image goes stale by halves. Their M7 dedupe should re-run each row at the
  release it is filed against.
- **No row is declined outright.** Two halves are declined:
  - U17's "non-overlapping jobs" as a new MUST;
  - U25's ≤ 3,000-token target as a number.

  Twenty-five rows with zero declines is a finding about the list, not about this reading. It was built by people
  reading the standard to remove things from it, which is the cheapest audit the standard has had.
- **Two of their findings were already this vault's own open items** (primer I-03/I-04 fixed here but unshipped; I-16,
  I-15, I-17 drafted as ideas or errata). The overlap is evidence both readings are measuring the same object.

## §3 The eleven §16 questions — the standard's reading

Rosetta advises; Jake and Stanley sign Gate 1. Columns: Lister's default (spec §16) · Jake's ruling (charter §10, G#) ·
Stanley's **unposted** draft · the standard's reading · flag.

| Q | Question | Spec default | Jake (§10) | Stanley's draft | The standard's reading | Flag |
|---|---|---|---|---|---|---|
| 1 | **D1 — where the profile lives** | build here, place at release | G1: build in the company graph (private); at release publish to aDNA.aDNA as an official profile, after the patent check | OK (D1) | **Agree.** The profile's content is authored and owned in the company graph; the company is steward, not owner of the standard (aDNA.aDNA ADR-065 §3). The **standard owns the seam**, not the profile: the overlay syntax and release-integrity rule (aDNA.aDNA ADR-066, A3.2). "Official profile" needs a definition, which aDNA.aDNA ADR-066 should give. Leaning: the standard *lists* a named profile with its manifest root and steward; the bytes live with the steward and travel by the Exchange (named 10-16; Exchange.aDNA ADR-065). Tense **HORIZON** | agree + define "official" at A3.2 |
| 2 | PHI never in git (MED-7.2.1) | strict | G3: never; gitignored `data/` | OK | **Agree.** The standard never carries PHI (aDNA.aDNA ADR-065 §7). Strict-by-default also makes U18's purge carve-out a backstop, not a workflow | agree |
| 3 | Hosted models + PHI (MED-7.2.2) | strict now; a module only after counsel | G4: **relaxed**: off by default, an opt-in module behind a signed BAA + the institution's sign-off; spec text to change at M3 | **strict for v1**; design the hosted + BAA module, enable only after counsel | **No position on the policy.** Model routing for PHI is the profile owner's call under counsel; the standard is a shape. **One requirement either way:** whichever default ships must be **visible in the manifest**. A module that changes data egress must be in the hash-bound surface, so a validator can tell which posture an instance runs | ⚠ **the one open divergence between the two signers** (Jake ≠ Stanley + spec) |
| 4 | HITL bound (MED-8.3) | ≤ 10 files | G5: 10; the institution can change it | OK | **Agree.** The standard has no HITL bound; this stays profile-local. If the institution can change it, the changed value belongs in the instance profile (`scope: instance_profile`, spec §11), so a reviewer sees it | agree |
| 5 | Empty `who/coordination/` (MED-3.4) | keep until U15 | G6: keep | OK | **Agree, time-bound.** U15 is dispositioned `v2.6` → A3.2. When it lands, the profile drops the empty directory at its next version and loses nothing | agree |
| 6 | `ceil(bytes/4)` as normative | yes | — (not among the ten) | OK | **Agree, as the profile's metric.** The standard has **no normative token metric** today: §5.5 item 9 requires `token_estimate` with no unit (`[D]` grep). aDNA.aDNA ADR-016's kT is a *planning* unit with a separate API companion, not a file measure. Leaning for A3.2: adopt `ceil(bytes/4)` as the SHOULD method for `token_estimate` (U23 c) | agree |
| 7 | Persona | none; role line | G7: none | OK | **Agree.** The standard does not require a persona; persona is an optional framework (App. A). A neutral role line is conformant | agree |
| 8 | **D2 — name** | keep "aDNA-medical", conformance value `medical` | G2: aDNA-medical, slug `adna_medical` | OK | **Keep the name. Change the conformance value.** MED-3.1 declares `adna_conformance: medical`, and MED-3.2 calls it a profile *stacked on Starter*. The standard's declaration admits `starter · standard · full` only, so an upstream validator reads `medical` as **no level**. The profile's own claim ("also passes the upstream Starter validator") then fails at the first field. The overlay form `starter+medical` (U23 a; pre-stated in `spec_graph_exchange` §8) keeps both claims true. aDNA.aDNA ADR-066 decides the exact syntax | **refine** (spec MED-3.1, at M3) |
| 9 | Patent watch / D4 | check before any external share | G8: Jake runs it before outside sharing; provisional if an invention turns up | OK; it also covers any public talk (Draper 10-22) | **Outside the standard's remit, with one sequencing fact the standard owns.** This vault's repo `aDNA-Network/aDNA.aDNA` is **GitHub-public** (CLAUDE.md §Git-Ops), and aDNA.aDNA ADR-066 at A3.2 writes the profile seam + release-integrity manifest into it. If the "ledger-validated standard graph" is the matter under watch, **the check's scope should be stated before A3.2 pushes.** The generic seam (overlay + sha256 manifest) has broad prior art `[I]`; the ledger anchoring is Exchange.aDNA ADR-058's and is not in aDNA.aDNA ADR-066 | ⚠ **sequencing risk → the operator, before A3.2's push** |
| 10 | Gate 2 reviewer | Jake + Stanley; outside reviewer before partner use | G9: Jake + Anna (domain reviewer) | Jake **and Stanley** sign; Anna is the outside domain reviewer if she agrees | **The standard has no reviewer role**; its pattern is §7.7: owners ratify, advisers advise. Read that way, the two owners sign, and a domain reviewer's read is recorded as advice. That matches Stanley's draft | minor divergence (who signs): founders' |
| 11 | First add-back in M6 | `backlog` mechanics + `multi_agent` on paper | G10: campaigns for real; network on paper only | OK | **Agree.** Note: the campaign layer is one the standard does **not yet define** (primer I-08 → `idea_upstream_standard_codify_campaign_layer`). A real campaigns add-back is the first outside evidence for that idea; please log its friction as an upstream candidate | agree + a request |

**Derived:** 11 rows. agree 7 (Q2 · Q4–Q7 · Q11, plus Q1 with a definition owed); **refine 1** (Q8); **divergence 2**
(Q3 open between the signers; Q10 minor); **sequencing 1** (Q9). Counted from the Flag column at the seal.

## §4 What goes where

- **To A3.2** (aDNA.aDNA ADR-066): U23 (a)(b)(c) · U15 · U18 (with aDNA.aDNA ADR-063 E-2) · U19, plus three inputs from §3:
  - define "official profile" (Q1);
  - the overlay syntax that makes `starter+medical` legal (Q8);
  - the egress posture inside the hash-bound surface (Q3).

  The Q9 sequencing question goes to the operator before A3.2's push.
- **To A4.1** (v2.6 cut): U3 · U4 · U9 (standard lines) · U12 · U16 · U17 (with E-1) · U20 · U21 · U22. One §7.7 line each.
- **To A4.2** (v8.13 image): U1 · U2 · U6 · U7 · U8 · U9 (image surfaces) · U10 · U11 · U14 · U24 · U25.
- **To the v3.0 window**: U13; U3's alias removal.
- **To Lister** (by memo, advisory): this file by path. Asked back: re-run each U-row at the release it is filed
  against (§2.3), and log campaign-layer friction from the M6 pilot (Q11).

## Related

[[mission_arcade_a3_1_lister_reading]] · [[mission_arcade_a3_2_adr_066_profiles_hash_manifest]] · [[mission_arcade_a4_1_standard_v2_6]] ·
[[mission_arcade_a4_2_image_v8_13]] · [[adr_065_standard_position_two_estates]] · [[adr_063_standard_errata_v2_6]] ·
[[spec_graph_exchange]] · [[public_face_account]] · [[source_inconsistencies]]
