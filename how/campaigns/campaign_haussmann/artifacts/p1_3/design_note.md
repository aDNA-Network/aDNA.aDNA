---
type: mission_artifact
campaign: campaign_haussmann
mission: mission_haussmann_p1_3_registry_truth
objective: O0
created: 2026-08-16
last_edited_by: agent_rosetta
tags: [haussmann, p1_3, registry, design]
---

# P1.3 O0 — leak-class → code-locus map + fix design

Baseline reality (from `leak_baseline.json`, 2026-08-17 build): **86 rows / 563 occurrences / 57 files**.
Every finding traces to one of four loci `[D]`:

## Locus map

| Leak class (rows/occ) | Where it enters | Fix locus |
|---|---|---|
| `truncated_lede` (29/193) | `publicNote()` in `scripts/build_vaults_data.mjs` **slices at the first PRIVATE_MARKER** (`s.slice(0, m.index)`) — cuts mid-parenthesis, then appends "." → `"…cohort (."` | **Generator**: sentence-level filtering (below) |
| `raw_enum` (28/214) | (a) committed notes carry enums; (b) **templates render `vault.class` raw** — `[slug].astro` spec-sheet `<dd>{vault.class}</dd>`, VaultCard/index attributes `class-${class}`, `data-class`, `data-filter-class`, `id="class-…"`, `data-search` blob (gate-27 scans raw HTML incl. attributes); (c) llms-full census `?? c` fallback; (d) persona `tbd_at_p0` values | **Generator** (persona normalize) + **templates** (label util + hyphen slugs) |
| `op_codename` (12/61), `internal_path` (7/42), `production_tidy` (6/36), `machine_ident` (3/15), `internal_id`, `backlog_finding_id` | Inventory `note` text surviving the old sanitizer → detail lede + meta desc + jsonLD + VaultCard purpose + RegistryCard (homepage — `Mac/stanley`, `Operation Rosetta`, pt08) | **Generator** (leak-pattern-aware note derivation) |
| Malformed title `"Astro — — —"` (F15) | `persona: '—'` in data + `[slug].astro` title `` `${display_name} — ${persona \|\| class}` `` | **Generator** persona normalize (placeholders → null) |
| Blank cards (zeta / F8) | `purpose = tagline \|\| note \|\| null` → nothing renders | **Template**: honest-absent line ("No public description yet.") |

## Fix design

1. **`publicNote()` v2 (generator)** — derive the public lede at **sentence granularity, never by slice**:
   load the *same* `site/tests/gates/fixtures/leak_patterns.json` gate-27 enforces (single source of truth —
   the projection can never emit what the gate forbids); keep leading sentences while each is (a) free of
   every leak pattern, (b) free of PRIVATE_MARKERS, (c) paren-balanced; **stop whole-sentence** at the first
   dirty one; client-clause redaction runs per-sentence before the check (CakeHealth fix preserved); nothing
   clean → `null` → honest-absent downstream. Cap ~3 sentences, always ending on a sentence boundary.
2. **Persona normalization (generator)**: `'—'`, `tbd_at_p0`, `''` → `null` (fixes F15 title + the persona
   half of FALSE #6/#7 at the data layer; the mmd node label drops its `<sub>` automatically).
3. **Shared label util** `site/src/utils/vaultLabels.ts`: `classLabel()` (public label; `tbd_at_p0` →
   "genesis-planning" with gloss "category to be decided at the vault's genesis"), `classSlug()`
   (underscore→hyphen for attributes/ids/CSS hooks — machine enums leave the HTML entirely),
   `personaLabel()` (placeholder→null, `_`→space, title-case, "(provisional)" suffix). Consumers:
   `[slug].astro` (spec sheet + title + lede fallback), `vaults/index.astro` (section ids, chips, facets),
   `VaultCard.astro` (attrs + search blob + honest-absent purpose), `VaultClassFacet.astro`,
   `llms-full.txt.ts` (census fallback `?? c` → `classLabel`). No gate fixture references these hooks `[D grep]`.
4. **RegistryCard `shortNote()`**: keep first-sentence presentation, but the char-slice fallback must cut at
   a word boundary and never leave an unbalanced paren.
5. **Graph currency (O2)**: `vaults.json` already 74/14; graph page + llms derive live. The stale artifacts are
   `vaults_graph.svg` (68-era) + `.mmd` — regenerate via generator + `npm run sync:graph` after the data regen.
6. **Regen gating (pt19)**: all of the above is *code*. The committed `vaults.json` still carries old notes, so
   the baseline can only reach empty after a **projection regen** (`sync:vaults`) — operator GO requested at the
   DP4 gate alongside the confidential-listing ruling (precedent: 2026-07-24 registry regen, operator-GO'd).
   Source inventory is **never** edited; diff must show sanitization-class changes only.

## Out of scope (other lanes)

Mixed-case `vault_slug` URLs (P2.1) · hero/home copy (P1.1) · registry page redesign (P2.4) · homepage
hero-art caption "15 connected vaults" (describes the curated artwork, not the registry; reviewed, honest).
