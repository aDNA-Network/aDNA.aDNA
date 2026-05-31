---
type: artifact
artifact_class: seed_brief
created: 2026-05-30
updated: 2026-05-30
status: active
last_edited_by: agent_stanley
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p5_m57_adnalabs_expansion_planning_stub
persona: rosetta
tags: [artifact, seed_brief, m5_7, brand_pivot, adnalabs, adna_network, site_expansion, marketplace, registry, community, network, domain_cutover]
---

# M5.7 Seed Brief — aDNALabs Site Expansion (grounding for the self-expanding planning stub)

> **Purpose.** This brief is the *grounding substrate* the M5.7 planning stub consumes when it expands itself (Objective 1) into the full planning mission spec. It captures the strategic pivot + the exploration findings harvested during the M5.6-close wind-down, so the next session starts from evidence, not a blank page. It is **not** the plan itself — the planning mission produces that. Authored read-only from a pre-pause audit; figures are as-of 2026-05-30 and must be re-verified at planning time.

## 1. The brand pivot (operator-stated)

- **aDNA** becomes the **forward-facing name/ethos** for the network, community, and lab.
- **Lattice** becomes "**just**" the underlying **protocol/standard** for distributed/federated/DLT compute orchestration, memorialization, compliance, and validation — the substrate **aDNA builds context on/with**.
- Org renames (launched from `LatticeLabs.aDNA`): **`LatticeLabs` → aDNALabs**, **`LatticeNetwork` → aDNANetwork**.
- **This vault's website becomes the main forward face of aDNALabs** — "the people's frontier lab" and the **creator / maintainer / steward** of the Lattice Protocol and the aDNA standard/platform.
- The site's URL moves to **aDNA.network** (Squarespace `sarosal@gmail.com` → Vercel; same path as stanley.science).
- aDNA.network also expands to be the site **for the network of aDNA computers** sharing/operating aDNA context over the Lattice protocols.

**Implication for this campaign:** the terminal goal shifts from "serious *documentation* tool readiness (ranker ≥ 4.95)" to "**aDNALabs forward face** readiness." Docs polish is necessary but no longer sufficient. → Full re-scope (M5.0-scale).

## 2. Current site — what exists (as-of 2026-05-30)

- **Stack/deploy**: Astro 6 static, `@astrojs/vercel` adapter; `site:` = `https://adna.dev` (`site/astro.config.mjs`, `SITE_URL` env-overridable); `sitemap()` + `mdx()`; `prebuild` runs `site/scripts/build_vaults_data.mjs`.
- **Sections (nav)**: Learn (What-is-aDNA + 11 Concepts + 9 Tutorials + 5 Comparisons) · Use Cases (6 personas) · Patterns (8) · Glossary (~41 terms) · Community (5 items) · Guides (Publishing + Workshops + Lattice Examples) · Reference (8). ~65+ doc pages. (`site/src/utils/navigation.ts`, `site/src/content.config.ts`.)
- **`/vaults/` registry** — index + `[slug]` detail + `graph` view over `site/src/data/vaults.json` (34 vaults across ~15 classes; rich schema: persona, class, status, phase, relationships, federation_refs, github/docs URLs). **This is the aDNANetwork seed.**
- **Role landing pages** — educators/researchers/enterprise/startup-first-hour/compliance now on the shared `<PersonaPage>` (M5.6).
- **Positioning today**: "aDNA — An Integrated Standard for Context and Knowledge" (docs-standard framing; developer-first). "Lattice Protocol" appears in footer/GitHub org metadata, the "Lattice Composition" concept, and 4 Lattice-example pages — **not** in main positioning.

## 3. Gap analysis — what the aDNALabs forward face needs (NOT yet on the site)

| Track | Exists? | Gap / seed |
|---|---|---|
| **A. Standard / docs** | ✅ mostly | Mature. Brand-application pass needed (aDNA-forward vs Lattice-as-protocol). |
| **B. Marketplace / registry for context graphs** | ❌ no UI | **Seed**: `what/lattices/examples/` (~10 `.lattice.yaml`) + `lattice_yaml_schema.json` + FAIR blocks + `latlab lattice publish/pull/compose` + `skill_lattice_publish`. Needs browse/detail/publish UI. |
| **C. Community / labs / org** | ⚠️ thin | `/community/` has 5 items. Needs lab/org directory (org_vault/org_graph classes from vaults.json), showcase, contribution funnel. |
| **D. aDNANetwork** | ⚠️ seed | `/vaults/` registry + federation_refs exist; needs network/federation framing + topology + "aDNA computers" surface + node onboarding. |
| **E. aDNALabs positioning** | ❌ no | about/vision/blog; "people's frontier lab + steward of Lattice Protocol + aDNA standard"; homepage hero re-frame; brand/SEO + org identity. |
| **F. Domain → aDNA.network** | ❌ | See §6. |

## 4. D16–D20 re-scope review (under the pivot)

Current decadal theme set (`m50_decadal_theme_set.md`) D16–D20 are **all docs-polish** — they predate the pivot. Stub-level disposition (the planning mission decides + the operator ratifies):

| Decadal | Current theme | Likely fate under aDNALabs pivot |
|---|---|---|
| **D16** Reference & Glossary Streamline | docs polish | KEEP, but expand glossary for new terms (aDNANetwork, marketplace, registry, federation, "aDNA computer"). |
| **D17** Cross-Page Narrative Coherence (RLP) | docs polish | EXPAND — must cover NEW journeys (marketplace publisher/consumer, lab/org visitor, network/node operator), not just the 5 doc personas. |
| **D18** Visual Hierarchy & Typography v2 | docs polish | EXPAND — aDNA-forward brand system; aDNA-vs-Lattice visual distinction. |
| **D19** Mobile & Responsive v2 | docs polish | KEEP; test new surfaces + new personas. |
| **D20** Performance & Hardening & Adversarial Capstone (RLP, final) | docs polish + P5 exit | EXPAND — exit gate must cover the new tracks (marketplace/labs/network/brand), not docs-only. |
| **NEW tracks** | — | Marketplace/registry build · Labs/community/org · aDNANetwork surface · aDNALabs positioning (about/vision/blog) · brand application · domain cutover. Likely new decadals/missions + an **amended Phase-5 exit gate** (or a successor phase/campaign — operator-gated). |

## 5. Persona-bench gaps

Current 21-persona bench (5 Rosetta adopters + 5 specialist reviewers + 6 P5 adopters + 5 visual reviewers; `who/adopters/` + `who/reviewers/`) is **docs-reader-centric**. The expanded scope likely needs NEW personas:

- **Marketplace Publisher** (publishing a lattice/context-graph; FAIR/provenance/licensing).
- **Marketplace Consumer** (discovering/pulling/composing a context graph).
- **Lab / Org Steward** (an org running aDNA at scale; distinct from Enterprise Architect — governance + showcase).
- **Network / Node Operator** (running an aDNA computer; federation, sync, compliance).
- **Community Lead** (governance-focused; distinct from the existing Community Organizer).

The planning mission does the gap analysis + decides which are new files vs. refinements of existing personas.

## 6. Domain cutover to aDNA.network

- **Playbook exists**: `how/skills/skill_vercel_squarespace_domain_cutover.md` v0.1.0 (graduated from ScienceStanley M08 stanley.science cutover). 5 phases: TTL pre-lower → cutover (operator go-signal; per-record DNS writes) → 24h synthetic monitor → TTL restore → ISS approval + AAR. Scripts in `ScienceStanley.aDNA/audit/scripts/` (07–17).
- **Inputs to pin**: domain apex `adna.network`; canonical form (apex modern vs www); `vercel_org_id`/`project_id` from `site/.vercel/project.json`; `vercel_token` keychain name.
- **Operator-interactive**: Squarespace `sarosal@gmail.com` OAuth re-auth at TTL-lower + cutover + TTL-restore (non-TTY blocked). Email-MX delta guard (M08 incident Q4).
- **Sequencing**: cutover is operator-gated and coordinates with the brand rename go-signal; also update `site/astro.config.mjs` `site:`/`SITE_URL` + `branding.json` + sitemap.

## 7. Precedent + how to run the planning

- **Planning-class template**: M5.0 (`mission_adna_str_p5_m50_p5_entry_planning.md`) — `mission_class: planning`, `verification_surface: agent`, governance/design artifacts only, paused-but-resumable pattern, amendment coord memo + theme set + persona bench + methodology + governance bundle as deliverables. **The M5.7 planning mission is isomorphic** (a bigger re-scope).
- **Pause pattern**: `status: paused` / `paused_but_resumable: true` / `resume_gates` (see `coord_2026_05_25_v8_p4_pause_p5_pivot.md`).
- **Coord memo canon**: 8 sections (Purpose/Context/What-we-do/What-they-do/Impact/Open-questions/Ack/Cross-refs) + Notes-for-operator; `who/coordination/`; cross-vault `filing_path`/`canonical_source` per SO #13.

## 8. Cross-references

- Stub: [[mission_adna_str_p5_m57_adnalabs_expansion_planning_stub]]
- Coord-await: `who/coordination/coord_2026_05_30_inbound_await_brand_refactor_adnalabs.md`
- Decadal theme set (under re-scope): [[m50_decadal_theme_set]]
- Planning precedent: [[mission_adna_str_p5_m50_p5_entry_planning]]
- Domain cutover skill: `how/skills/skill_vercel_squarespace_domain_cutover.md`
- aDNANetwork seed: `site/src/data/vaults.json` + `site/src/pages/vaults/`
- Marketplace seed: `what/lattices/examples/` + `what/lattices/lattice_yaml_schema.json` + `how/skills/skill_lattice_publish.md`
