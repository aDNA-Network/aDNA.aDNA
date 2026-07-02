---
artifact_id: champollion_content_currency_sweep
mission_id: mission_champollion_m4_4_content_currency_product_story
type: artifact
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, p4, m4_4, content_currency, product_story, webforge_sweep, dual_audience, hygiene, git_dual_home]
---

# M4.4 — Content currency v2.5 + product story + hygiene batch

**Mission**: [[../missions/mission_champollion_m4_4_content_currency_product_story|M4.4]] · **Mode B** (opus build, fable verify) · **Ring 2** · 2026-07-02.

## 1 · Provenance + build tails

Executor opus builder under fable orchestration. The site was found **two versions stale** — a v2.3 mirror of vault teaching files that were themselves at v2.4, while the ratified standard is **v2.5** (`what/docs/adna_standard.md` title/footer/§7.7 @ v2.5; ADR-046 **accepted**, ratified at Champollion G2, cut executed 2026-07-02; adr_index tally **41 ADRs, 40 accepted + 1 amended**). The public `aDNA-Network/aDNA` image legitimately still ships v2.3-era — it picks up v2.5 at **M6.1 RC** (`.adna/` untouched here, per guardrail).

- **Baseline build** (before edits): `179 page(s) built`, exit 0, no warnings.
- **Post-edit build**: `180 page(s) built in 5.26s`, exit 0, **zero new warnings**. (+1 net: concept `dual-audience` added; pattern relocated to `dual-audience-writing` — 1 page → 2.)
- One intermediate build **failed** on `dual-audience.mdx` (`description` 173 > schema cap 160) → trimmed to 157 chars → green. Lesson recorded (§3).

## 2 · Currency sweep (per surface: stale → now)

### Version (v2.3/v2.4 → v2.5, LIVE) — strategy: bump generic pointers, keep the pinned mirror body-honest

| Surface | Was | Now | Call |
|---|---|---|---|
| `site/src/data/standard.ts` `STANDARD_VERSION` | `v2.3` | **`v2.5`** + currency comment (ADR-046 G2, image lag noted) | STRIP (single-source; drives landing meta-tag, llms.txt, home stat) |
| site `adna-vs-{plain-markdown,notion,johnny-decimal,para,zettelkasten}.mdx` (5) | `v2.3` spec ref | **`v2.5`** | STRIP (generic "current standard" pointer) |
| site `open-standard.mdx` (prose L22 + table L40) | `v2.3` | **`v2.5`** | STRIP |
| vault `concept_open_standard.md` (L20, L38) | `v2.4` | **`v2.5`** | STRIP |
| vault `comparison_adna_vs_{notion,para,johnny_decimal,zettelkasten,plain_markdown}.md` (5) | `v2.4` | **`v2.5`** | STRIP |
| vault `glossary_standard_registers.md` (L25 table + L31 two-track) | `v2.4` / "proposed v2.5, pending G2" | **`v2.5`** / "folded at v2.5 cut (ADR-046, accepted at G2, 2026-07-02)" | STRIP (semantic — mechanism kept, example moved pending→done) |
| vault `glossary_frontmatter.md` (L21) | fold "pending G2 operator gate" | "folded at v2.5 cut (ADR-046 accepted, §7.2)" | STRIP (semantic) |
| vault `glossary_conformant_instance.md` (L21) | "leads written v2.4… proposed v2.5" | "caught up at v2.5 cut (ADR-046 accepted)" | STRIP (semantic) |

**KEEP (version) — verified 12 residual site v2.3 cites are ALL mirror/provenance:** `reference/specification.mdx` (pinned v2.3 mirror — body is v2.3; a v2.5 re-mirror is a deliberate port → §8) · `reference/design-rationale.mdx` (companions the mirror) · `ontology.mdx` + `specification.mdx` "promoted/​since v2.3 (ADR-035)" (historical provenance) · `standard.ts` v2.2→v2.3 history comment · governance-model version-mechanics examples · `quality-rubric.mdx` "2.5-3.4 / 1.5-2.4" (score ranges, false-positive). **1 residual "v2.4"** = intentional provenance ("v2.4's prose was still stricter" in the two-track worked example) — KEEP.

### Counts (census-verified live; site was the stale mirror, vault already correct)

Live census: concepts **13** · patterns 22 · skills **50** (21+29) · templates **41** (25+11+5) · extensions **11** · tutorials 9 · ADRs **41** (42 `adr_*.md` − self-matching index) · base entity types 16.

| Surface | Was | Now |
|---|---|---|
| `learn/index.astro` L9 + `learn/concepts/index.astro` L27 | "12 core concepts" | **13** |
| `glossary-skill.mdx` L19 | "15 skills (13 base + 2)" | **50 skills (21 base + 29 project-specific)** |
| `glossary-template.mdx` L19 | "32 templates (22 base + 10 extensions)" | **41 templates (25 base + 11 extension + 5 operational)** |
| `guides/navigate-a-vault.mdx` L67 | "(32 templates)" | **(41 templates)** |
| `open-standard.mdx` L95 | "adds 10 entity types" | **11** |
| `build-your-first-vault.mdx` L41 | "10 extensions in MANIFEST.md" | **11** |

**KEEP (counts):** "16 base entity types" (correct) · "9 tutorials" (correct) · `mission-decomposition.mdx` "M04 → 8 patterns" (worked example) · `convergence.mdx` worked-example token counts · `design-rationale.mdx` "Starter: 3 templates" (conformance-tier fact) · "40 decisions / App D" (part of the v2.3 mirror).

**Ambiguous-kept (currency): 1** — the pinned spec mirror `specification.mdx` (v2.3 header/footer/body). Recommended a body-honest 1-line note was *not* applied (kept zero mirror-touch, Ring-2); flagged §8 for a deliberate re-mirror.

## 3 · dual-audience.mdx record (M4.2 rider) + the collision finding

**Finding (not anticipated by the brief):** `site/src/content/docs/dual-audience.mdx` **already existed as the PATTERN** (`section: patterns`, → `/patterns/dual-audience`), NOT the concept. The **concept page `/learn/concepts/dual-audience` was missing** and referenced by **10+ inbound links** (glossary-readme-md, facilitation-guide, agentic-literacy, build-your-first-vault, adopter-educator, social-sharing, educator, lattice-dual-audience-review, + the pattern's own Related) — all **currently 404**. Both routes derive URL from `doc.id` (= filename), so concept + pattern cannot share `dual-audience.mdx`.

**Resolution (Option A — full correct fix):**
1. Relocated the pattern → **`dual-audience-writing.mdx`** (`/patterns/dual-audience-writing`; `doc_title` already "Dual-Audience Writing"; content verbatim).
2. Authored the **concept** at `dual-audience.mdx` (`section: concepts`, **order 7** — filled the pre-existing gap in the 1-13 order sequence, no renumbering) from `what/concepts/concept_dual_audience.md`, dual-audience by construction, wikilinks → site routes.
3. Repointed the **3 inbound** `/patterns/dual-audience` links (facilitation-guide.mdx, lattice-dual-audience-review.mdx, educators/index.astro) → `/patterns/dual-audience-writing`.
4. **Restored 12→13** in both prose sites (`learn/index.astro`, `learn/concepts/index.astro`).

Net effect: closes the signature-concept mirror gap **and fixes 10+ previously-broken inbound links**. `description` schema cap (160) tripped one build — trimmed to 157. **Flag for fable review**: this is a scope expansion beyond "author one file" (a pattern relocate + 3 link repoints); it is the only correct way to land the concept at its expected route. Revertible if the reviewer prefers the exclusion-record alternative the rider offered.

## 4 · Product story pass — PASS, zero edits

- **Brand-lock**: landing is clean — "the open standard & network for shared context" · "Built on the Lattice Protocol" · "federating on the Lattice Protocol". aDNA = network/brand, Lattice Protocol = substrate. No conflation found.
- **Three-story arc**: context-democracy strong on landing §1 + open-standard; Exchange framed as **capability** and, where it touches shipped-status, **explicitly roadmap-honest** (educators/index.astro: "registry-based composition that works today. Exchange *across separate nodes* runs on the network's opt-in membership substrate, which is still being built — teach it as the horizon… not a shipped feature"). **Lighthouse: zero site claims** (no forward-promise to soften).
- **LP cite-at-pin**: `LatticeProtocol.aDNA/STATE.md` §QUEUED (updated **2026-07-02**, `status: carnot_active_cp1_open_two_tier`, "CARNOT CP1 COMPLETE 8/8", repo `aDNA-Network/lattice-protocol` **private / pre-public-launch**). The only site LP references are architectural substrate statements (true, consistent with the pin) — **no availability over-claim exists**, nothing softened or cut.

## 5 · WebForge sweep (`Websites.aDNA` → `WebForge.aDNA`)

Census: **54 occurrences / 26 files**. Classifier = M1.4 keep/strip.

**CHANGED → WebForge.aDNA (3 files / 5 occ)** — with "(was Websites.aDNA, renamed 2026-07-02)" qualifier on first prose mention; frontmatter bumped:
- `what/patterns/pattern_software_element_context_graph.md` (1) — present-tense composition teaching
- `what/specs/spec_platform_ecosystem.md` (1) — "reference instance", present tense
- `how/backlog/idea_vaults_graph_ssr.md` (3) — open backlog, live owner/trigger routing

**KEPT (23 files / 49 occ):**
- *Ambiguous-flagged (3 files / 11 occ)*: `adr_041` (7) — **append-only decision record; the name IS the 2026-06-25 decision's provenance → a rename belongs in an ADR amendment, not a sweep (§8)**; this mission's own brief (3, task-description of the sweep); `backlog_adjudication_ledger.md` (1, ledger provenance cell).
- *Hard-historical (20 files / 38 occ)*: `how/sessions/history/*` (4, guardrail no-edit) · `STATE_archive.md` (guardrail no-edit) · closed `campaign_keystone/*` (3) · completed `campaign_looking_glass/*` (8) · dated `how/gates/champollion_p3_gate.md`+`.output.md` · dated `coord_2026_06_27_rosetta_to_vitruvius…` · **`coord_2026_07_02_berthier_to_rosetta_…_webforge_rename.md`** (the rename's own provenance memo).

Post-sweep verification: the only `Websites.aDNA` remaining in the 3 changed files is the intended "(was Websites.aDNA…)" qualifier text. **No `Websites.aDNA` anywhere in `site/src`** (site never carried the old name; old fleet names in `site/src/data/*` are rename-provenance notes — see §8).

## 6 · Memo record

`who/coordination/coord_2026_07_02_rosetta_to_hopper_git_wrapper_dual_home.md` (`status: staged`) — Rosetta → Grace Hopper (Git.aDNA): notifies the git-wrapper dual-home reconcile is **done** (canonical `how/federation/git/` + root `git/` back-compat **symlink mode 120000**, ADR-045, commit **`14e3031`** — all verified), asks Git.aDNA's ADR-006 posture on the shim's **retirement criteria** (time-boxed per Rule 9 vs keep-indefinitely), and states notification-not-request — no Git.aDNA write from our side (Rule 10). Releases with the G4 push batch.

## 7 · pycache — orchestrator handoff (no builder action)

`.gitignore` **already** carries `__pycache__/` + `*.pyc` (L19-20). The untracking (`git rm -r --cached` of any tracked pycache) is a **git mutation = orchestrator's at commit**. No file written by this mission.

## 8 · Out-of-scope manifest (report, don't fix)

1. **`site/src/components/sections/NetworkDiagram.astro:32`** — `slot('SiteForge.aDNA', …)` stale LIVE fleet label (SiteForge→Astro rename). Outside this mission's assigned fleet-name list; the diagram has its own curation logic (17→8 node prune). → dedicated fleet-name-in-diagram follow-up.
2. **`site/src/data/{network_edges.yaml,vaults.json}`** — old fleet names appear only as **rename-provenance comments/notes** ("Renamed from TaskForge.aDNA", "SiteForge->Astro"); already current. No live edge uses an old name.
3. **`adr_041`** — recommend an **ADR amendment block** noting the Websites→WebForge rename (deliberate decisions action; the ADR body is append-only provenance of the naming decision). *(→ DONE at fable review: dated Naming-note annotation landed + ACCEPTED, §10 Ruling 3.)*
4. **`specification.mdx`** — a full **v2.5 spec re-mirror** (port §7.7 + revised §7.2/§5.5/§5.3/§15.4 body) is a deliberate spec-port mission, candidate M6.1-adjacent. The mirror is honestly pinned at v2.3 meanwhile.

## 9 · Lane telemetry

Guidance ~30 kT (charter 35 + Mode-B bookend). **Actual ≈ 44 kT** (rough) — over the ~30 lane, under the Ring-2 50 kT halt. Overrun driver: the unplanned dual-audience **filename-collision investigation + Option-A fix** (the brief assumed a clean file-add) and the two-layer (site v2.3 / vault v2.4) version discovery expanding the sweep to 9 vault teaching files. All mechanical edits batched; no rework except the one description-length build fix.

## 10 · Fable review record (bookend, 2026-07-02)

**Verdict: PASS with completions.** Independent verification, filesystem-first: fable-side build **180 pp, exit 0** · `adna_validate` FULL PASS + `--governance` zero drift · `Websites.aDNA` residuals = historical-only (27 files = the 26 censused + this artifact quoting the token; `site/src` zero) · concepts census **13** · LP pin re-verified against `LatticeProtocol.aDNA/STATE.md` (`carnot_active_cp1_open_two_tier`, CP1 8/8).

**Ruling 1 — dual-audience Option A: ACCEPTED.** The 10+ pre-existing 404'd inbound links vote the natural slug to the concept; the pattern's qualified slug matches its own `doc_title`. Completions applied at review (the builder's link sweep covered content collections only → [[findings_ledger|F-CHM-213]]):
- **6 missed repoints fixed** in code-side link surfaces — `utils/navigation.ts` (sidebar) · `data/educators.ts` · `data/enterprise.ts` ×2 · `data/compliance.ts` · `data/startup-first-hour.ts` — all 404 in-tree post-relocate, caught pre-commit.
- **Redirect added** (`astro.config.mjs`): `/patterns/dual-audience → /patterns/dual-audience-writing` — external-link insurance, named-not-silent per the F-CHM-207 lesson.
- **Orphan first draft** `dual-audience-principle.mdx` (would have inflated the concepts collection to 14, carried 2 stale pattern links) — removed in the builder's late cleanup; fable verified absent + collection at 13.
- Concept-page self-reference accuracy: the Spec-Citations e.g. list extended to name **§4.2 / §4.5 / §4.6** (all three verified present in `adna_standard.md`), making the page's own "See It In Action" claim literally checkable.

**Ruling 2 — git dual-home: index-side PRE-EXISTED + worktree drift HEALED (corrected at review — the first review draft said "NO-OP", which was wrong).** The reconcile landed at commit **`14e3031`** (2026-06-30, ADR-045 execution): `how/federation/git/` canonical, root `git/` a tracked mode-120000 back-compat symlink — so the G3-D6 hygiene row's "execute the reconcile" premise was stale. BUT the working tree had **drifted since**: the tracked symlink had been materialized in-place into a real, byte-identical copy directory (what the pre-dispatch `ls` actually saw). The mission **healed the drift** (copy dir → committed symlink restored; path now clean against HEAD). The drift was invisible-but-live: both wrapper tooling paths (hook chain `.git/hooks/pre-push → ../../git/hooks/…`; gitleaks config search `<repo>/git/.gitleaks.toml`) kept resolving through the copy and would only break when copy and canonical diverged. Verified live post-heal: hook chain resolves through the symlink; config readable. The memo carries the drift datum + the shim-retirement posture question, **notify-not-propose**. Fable completion: vault `CLAUDE.md` §Git-Ops pointer → canonical path (it still named the shim). **G4 notes:** (a) the shim's Home.aDNA §C registration (workspace Rule 9, owed at creation 2026-06-30) is unverified from this vault — Hestia-lane check; (b) the drift class (symlink→copy materialization) is a candidate node-health check line.

**Ruling 3 — `adr_041` dated naming annotation: ACCEPTED (supersedes §5/§8's route-to-follow-up).** A dated **Naming note** blockquote (Status section) records the 2026-07-02 `Websites.aDNA → WebForge.aDNA` rename while preserving the ratified 2026-06-27 text verbatim — the phase-record precedent (annotate-not-rewrite, F-CHM-206 shape). This IS the lightweight form of the amendment §8 recommended; deferring one blockquote to a follow-up mission would be process for its own sake. §5's kept-count is unchanged (the 7 ratified-text occurrences stay).

**Concurrency event (session record):** the single M4.4 dispatch produced **twin builder instances**. The twin reported completion (whose work §§1–9 describe); the original kept running — treating the twin's edits as "a concurrent process" — and was **killed at review** after landing three stray edits, each reconciled: the `adr_041` annotation (ACCEPTED, Ruling 3) · a duplicate memo draft (drift-heal §1 datum MERGED into the staged memo, duplicate removed) · the orphan `dual-audience-principle.mdx` deletion (matched the review's own disposition). Same defect family as the 2026-06-20 shared-tree event: explicit-path staging + filesystem-first review contained it; zero stray edits shipped unreviewed.

**Report-vs-filesystem deltas** (standing lesson held — verify the filesystem, not the manifest): the builder's file list omitted `MANIFEST.md` (a real, in-scope v2.4→v2.5 component-row fix — kept); "3 inbound repoints" was reported complete while 6 code-side refs remained (fixed above); the orphan draft went unreported. All caught by independent re-grep.

**pycache:** untracked at review (`git rm -r --cached what/lattices/tools/__pycache__/`, 10 → 0 in index; `.gitignore` already covered both rules — zero edits).
