---
type: evidence
packet: B5
campaign: campaign_haussmann
created: 2026-08-16
updated: 2026-08-21
status: active
last_edited_by: agent_rosetta
tags: [claim_register, evidence, vitruvius_d6_d7, h13]
---

# B5 — Claim Register · adna.network

> **Mission**: extract every factual/quantitative claim from the site's key surfaces, verify each, classify.
> **Target**: `https://adna.network`, fetched live **2026-08-16** (16 key surfaces + all 74 `/vaults/<slug>` pages, all HTTP 200).
> **Ground truth**: this repo (`site/src/data/vaults.json` · `standard.ts` · `install_truth.json` · `canonical.ts`), sibling vaults (read-only), GitHub API, live external URLs.
> **Live-vs-repo check**: all 74 live vault pages match local `vaults.json` **exactly — zero drift** `[D]`. The deployed site is the committed data.
> Raw evidence: [`claims_raw.json`](claims_raw.json) (fetch metadata, external API results, full leak table).

**Classes** — **verified** (evidence found + linked) · **verifiable** (checkable but unlinked on the page) · **unsupported** (cannot be checked from public record) · **FALSE** (contradicted by evidence — S1, blocks launch).
**Provenance** (per campaign directive §2.2) — `[D]` directly observed · `[I]` inferred · `[R]` third-party reported · `[A]` assumption. `[D] gate-20` = pre-verified by the claim-trace gate fixture (`site/tests/gates/fixtures/claim_trace_manifest.json`).

---

## 1 · Seed rows — gate-20 claim-trace manifest (pre-verified)

Carried in from the existing claim-trace mechanism. gate-20 asserts every `source_ref` resolves and machine accessors yield the expected value; independently re-confirmed against the data files this session.

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| G-01 | /, /vaults, /network | "the registry holds 74 vaults" | verified | `vaults.json` `vault_count: 74`; 74 live pages fetched; 74 slugs | — | [D] gate-20 |
| G-02 | /network, /vaults/graph | "the network has 14 cited relationships (edges)" | verified | `vaults.json` `edges` len = 14 | — | [D] gate-20 |
| G-03 | /, /llms.txt, /reference/specification | "the aDNA standard is at v2.5" | verified | `standard.ts` `STANDARD_VERSION = 'v2.5'` | — | [D] gate-20 |
| G-04 | /, /learn/what-is-adna | "the standard defines 16 base entity types" | verified | `standard.ts` `ENTITY_TYPE_COUNT = 16`; spec §5 | — | [D] gate-20 |
| G-05 | /, /reference/specification | "the standard has 3 conformance levels" | verified | `standard.ts` `CONFORMANCE_LEVELS = 3`; spec §5 defines L1/L2/L3 | — | [D] gate-20 |
| G-06 | /, /get-started | "the standard is MIT-licensed" | verified | `standard.ts` `STANDARD_LICENSE = 'MIT'`; GitHub API: `aDNA-Network/aDNA` license = MIT; `LICENSE` at repo root | — | [D] gate-20 |
| G-07 | /learn/what-is-adna | "the 16 entity types trace to the normative spec" | verified | `what/docs/adna_standard.md` exists, v2.5 | — | [D] gate-20 |
| G-08 | /, /network, /get-started | "the clone-and-run image lives at the canonical repo" | verified | `install_truth.json` `canonical_repo_https = https://github.com/aDNA-Network/aDNA`; repo public (API) | — | [D] gate-20 |
| G-09 | /commons | "four public-good subnetworks are featured" | verified (count only) | `subnetworks.json`; 4 cards render. *Substance of the claim adjudicated at R-18/R-48.* | — | [D] gate-20 |
| G-10 | /learn/what-is-adna | "proof-links all derive from the single canonical repo" | verified | `install_truth.json` `verified_paths` all true; links resolve to `aDNA-Network/aDNA` | — | [D] gate-20 |

---

## 2 · Claim register by surface

### 2.1 Homepage `/`

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| R-11 | / hero badge | "Open standard · MIT" | verified | Spec published at /reference/specification; image repo public + MIT (GitHub API) | — | [D] |
| R-12 | / hero | "aDNA is an open standard for organizing project knowledge so both humans and AI agents can navigate it" | verified | Spec public, versioned, MIT; clone-and-run image real | — | [D] |
| R-13 | / hero | "and the open network where that shared context lives" | unsupported | The shared context mostly does NOT publicly "live" anywhere a reader can reach: 73/74 registry vaults expose no public repo; registry pages are listings, not the context | S2 | [D] |
| R-14 | / hero | "built on the Lattice Protocol (**the open coordination protocol** underneath)" | **FALSE** | The protocol is not open today: `aDNA-Network/lattice-protocol` **private**, vault repo **private**, publish counsel-gated (`~/aDNA/LatticeProtocol.aDNA/STATE.md` header). No public protocol artifact exists for a reader. The site's own honest phrasing ("opening progressively", R-15) contradicts this unqualified "open" | **S1** | [D] |
| R-15 | / sub-hero (+ /network, /commons, /vaults) | "built on the Lattice Protocol — the coordination layer, **opening progressively**" | unsupported | Forward promise; nothing public to check today (repos private, counsel-gated). What it promises a reader: that protocol code/spec will become public — no timeline, artifact, or tracker is linked, so the promise is unfalsifiable from the page. Honest *relative to* R-14; should become the only phrasing | S2 | [D] |
| R-16 | / sub-hero | "Open source on GitHub · MIT-licensed" | verified | `aDNA-Network/aDNA` public, license MIT (GitHub API 2026-08-16) | — | [D] |
| R-17 | / stats strip | "74 Vaults · 16 Entity Types · 3 Conformance Levels · v2.5 Current Version · MIT Licensed" | verified | = G-01/G-04/G-05/G-03/G-06 | — | [D] gate-20 |
| R-18 | / | "Real public-good work already lives here — World Genome Academy · Context Commons · Wilhelm AI for the Undiagnosed · Rare Archive" | unsupported | Per-initiative: **Rare Archive** — real public repo `Wilhelm-Foundation/rare-archive` (Apache-2.0, 5 ★) but sole contributor is the operator (`ScienceStanley`) [D]; **WGA** — live site worldgeno.me [D], vault `pending`, no public repo; **Context Commons** — no public artifact beyond its registry row, vault `pending`; **AI4U** — no public artifact, vault `pending`; anchor institution (Wilhelm Foundation) is real [R]. All four registry records: `status: pending`, `last_synced: 2026-05-24`. Not verifiable as more than operator-orbit work | S2 | [D][R] |
| R-19 | / graph caption | "15 vaults are joined by 14 cited relationships (umbrella, federation, partner, companion)" | verified | 14 edges, exactly 15 unique nodes (`vaults.json`) [D]. *Footnote (S4): alt-text lists "partner" among the kinds; data has partner·0 — /network's version with explicit zero-counts is the accurate copy* | S4 note | [D] |
| R-20 | / "context democracy" cards | "Open — MIT-licensed — **the spec, the tooling, and the vaults are all public.**" | **FALSE** | Spec ✓ public, tooling ✓ in the image; **the vaults are not all public**: 73/74 registry entries carry no public URL; the single `github_url` (Videos.aDNA) 404s publicly [D]; fleet governance marks many vaults private/local-only ("git local-only NO remote": GOTFN, Bearly, RareGraph, aiLP-Dataroom; CakeHealth private) [D read-only sibling check]. Only ~5 of 74 registry vaults have public repos (aDNA.aDNA, III.aDNA, Canvas.aDNA, Git.aDNA + image) | **S1** | [D] |
| R-21 | / cards | "Federated — Each project keeps its own graph; they connect by citation, not central control." | verifiable | 14 declared edges exist [D]; `network_edges.yaml` requires each edge to map to a governance statement; per-edge citations not published on the page | S3 | [D] |
| R-22 | / cards | "Co-owned — No vendor owns your context — you govern it, in the open." | verifiable | Design claim: plain markdown + git + MIT = no lock-in ✓; "in the open" inherits R-20's caveat | S4 | [D][I] |
| R-23 | / registry band + /vaults | "**Every vault is a real, governed context graph — its own persona, its own history**, its own place in the network." | **FALSE** (quantifier) | "Its own persona" fails for 12/74: 7 vaults have **no persona** (ComfyUI, VAAS, SuperLeague, ContextCommons, ScienceStanley, wga, zeta) and 5 render the raw placeholder **`tbd_at_p0`** as the persona on their live pages (LatticeProtocol, Lighthouse, Datasets, MagnaPetra, WorldGenome) [D]. "Its own history": registry records carry no history fields (0/74 have missions/phases populated) | **S1** (single fix: soften quantifier or fill/suppress) | [D] |
| R-24 | / How-it-works | "Every file is plain Markdown. Browse in Obsidian, VS Code, or GitHub. No proprietary formats, no lock-in." | verified | Image repo contents are .md + yaml/json companions [D] | — | [D] |
| R-25 | / How-it-works | "Agent-native … no prompt re-engineering every session" · "Modules, datasets, and lattices compose into workflows" | verifiable | Product-benefit claims; mechanism documented in spec; no benchmark/artifact linked | S4 | [D][I] |
| R-26 | / Start-here | "The standard embeds in `.adna/`" | verified | `install_truth.json` `embedded_standard: .adna`; repo root listing shows `.adna/` [D] | — | [D] gate-20 |
| R-27 | / The Standard | "aDNA is an open specification — MIT licensed, **community-driven**, designed for extension." | unsupported | "Community-driven": image repo has **2 contributors, both founding-core** (ScienceStanley, jakejjoyner), 0 forks, 0 external PRs, Discussions disabled, no issue templates [D GitHub API]. Open *to* community ≠ driven *by* community | S2 | [D] |
| R-28 | / Join-the-network | "Mission-aligned subnetworks **already steward** real public-good work here, in the open." | unsupported | = R-18. All four subnetwork vaults `status: pending`; governance records not publicly reachable | S2 | [D] |
| R-29 | / footer (all pages) | "© 2026 aDNA Network. Released under the MIT License." | verifiable | The standard/image is MIT ✓ [D]. Referent gap: the site's own source repo (`aDNA-Network/aDNA.aDNA`, public) carries **no LICENSE file** (GitHub API license: null) — a reader checking "released under MIT" against the site source finds no license | S3 | [D] |

### 2.2 `/network`

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| R-30 | /network hero + h1 | "The network of aDNA computers … Nodes connect through real, directed relationships" | unsupported | The 14 relationships are **vault-level declarations on a single operator's node**; no second aDNA computer is publicly evidenced (Home.aDNA/Network.aDNA private by design). As a claim about a multi-machine network, nothing is reader-checkable | S2 | [D][I] |
| R-31 | /network | "The connections are not decorative. Each line is a relationship a vault actually declares" | verified | `network_edges.yaml` honesty-discipline: "every edge maps to a governance statement … No decorative or speculative edges" [D]; spot-checked against workspace router rows. Citations internal, not rendered per-edge | — | [D] |
| R-32 | /network topology | "74 vaults, 14 relationships … across five kinds": "umbrella · 1 · federation · 9 · partner · 0 · companion · 4 · supersedes · 0" | verified | Exact match to `vaults.json` edge types (9+4+1, partner/supersedes zero) [D]. Zero-counts displayed — exemplary honesty discipline | — | [D] |
| R-33 | /network | "A node is local-first — its vaults … and its credentials never leave the computer unless you send them (Standing Rule 4)" | verified | Standing Rule 4 (Home.aDNA local-by-default) present in the shipped workspace router template [D]; design fact | — | [D] |
| R-34 | /network Run-a-node | "About five minutes" (setup time) | verifiable | TTFS measurable by any reader; no recorded run linked (B-packet TTFS recording is the campaign's own instrument for this) | S4 | [A] |
| R-35 | /network Governed-in-the-open | "openly specified and openly governed — a named steward, a public process for proposing change, and every decision on the record" | verifiable | Openly specified ✓ [D]; named steward ✓ (/about) [D]; decisions on record ✓ (ADRs in public `aDNA.aDNA` repo) [D]; "public process for proposing change" — weakest leg: no proposal process with numbered states exists (VITRUVIUS H15) and the advertised channels are partly dead (R-46/R-47) | S2 | [D] |
| R-36 | /network | "Quarterly standard cadence" | unsupported | No published cadence artifact or release calendar; observed history is ad-hoc (v2.3 2026-06-22 → v2.5 2026-07-02) [D]. As a forward commitment it is unfalsifiable from the page | S2 | [D] |
| R-37 | /network | "Founding-Architect stewardship" | verified | /about names the role and the single steward; matches repo authorship [D] | — | [D] |
| R-38 | /network Opt-into-federation | "What actually crosses the boundary is a curated slice of your Home.aDNA registry — which vaults exist and the relationships they declare — never their contents." | unsupported | Describes transmission machinery a public reader cannot obtain or inspect (membership/federation substrate not in the public image; /enterprise itself says the substrate "is still being built") | S3 | [D] |

### 2.3 `/community`

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| R-39 | /community h1 | "aDNA is built by humans and agents together, in the open" | verified | Public repos with agent-attributed frontmatter/commits; `last_edited_by: agent_*` convention visible in shipped files [D] | — | [D] |
| R-40 | /community ladder | Levels 0–3 ("you get the full value at Level 0 without ever engaging" … "Recognized by maintainers, never self-appointed") | verifiable | Roles/processes documented on linked site pages; no observable instance of Levels 1–3 being exercised by a non-founder yet | S3 | [D] |
| R-41 | /community governance | "Operator-chartered — decisions are explicit and gated, never silent." | verified | ADR ratification blocks (§7.7) + phase-gate discipline visible in the public dev-vault record [D] | — | [D] |
| R-42 | /community | "MIT-licensed and versioned in public; the spec is the source of truth." | verified | = G-03/G-06; version history public | — | [D] |
| R-43 | /community | "Change process: Public — improvements run through the repository as upstream contributions, reviewable by anyone." | verifiable | Repo public, issues enabled (1 open) [D]; no external contribution has yet exercised the path; advertised entry points partly dead (R-46/R-47) | S3 | [D] |
| R-44 | /community | "By convention, content files record who last edited them — humans and agents alike." | verified | `last_edited_by` frontmatter convention, spec §7.2 + shipped files [D] | — | [D] |
| R-45 | /community | "Accountability: Every unit of work closes with a written after-action report." | verifiable | SO-5 (AAR-before-close) is the documented rule; AAR corpus exists in the public dev vault [D]; universal "every" is a convention claim, spot-checkable not proven | S4 | [D] |
| R-46 | /community Contribute | "questions and ideas start in **Discussions**." | **FALSE** | GitHub Discussions is **not enabled** on `aDNA-Network/aDNA`: API `has_discussions: false`; `https://github.com/aDNA-Network/aDNA/discussions` → **404** (2026-08-16). The named venue does not exist | **S1** | [D] |
| R-47 | /community Contribute | "Report a bug or propose a change to the standard through the public repository's **issue templates**" | **FALSE** | The public repo has **no `.github/` directory at all** — no issue templates (API: `.github/` → 404; repo root = `.adna` `.gitignore` `.gitleaks.toml` `CLAUDE.md` `LICENSE` `README.md`). Issues can be filed (has_issues ✓) but the promised templates are absent — they were staged dev-side (Refit M6) and never shipped to the image | **S1** | [D] |

### 2.4 `/commons`

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| R-48 | /commons hero | "Mission-aligned subnetworks build, share, and govern shared context in the open" | unsupported | Present-tense activity claim; all four subnetwork vaults `pending`, none publicly writable/readable except Rare Archive's external repo (operator-authored) | S2 | [D] |
| R-49 | /commons | "Real public-good work already on the aDNA network — **each one open, cited, and stewarded**." | unsupported | "Open" fails 3/4: the cited governance records (`wga.aDNA/CLAUDE.md`, `ContextCommons.aDNA/CLAUDE.md`, `WilhelmAI.aDNA/CLAUDE.md`) are **not publicly reachable** — no public repos exist for those vaults; a reader cannot open any of the four "Open governance" records | S2 | [D] |
| R-50 | /commons WGA card | "builds genomics education and research in the open, under a **five-council model** — Education, Agriculture, Research, an Indigenous-data veto, and Technology" | unsupported | Not verifiable from public record: worldgeno.me is live [D] but its homepage does not surface the council model; wga vault has no public repo. (Likely documented in the private vault — publish it or drop the specificity) | S2 | [D] |
| R-51 | /commons Context Commons card | "Stewarded by: **Community-governed**" | unsupported | No community evidence (R-27); /about states plainly there is no larger organization yet — internal tension between surfaces. Vault `pending`, persona null | S2 | [D] |
| R-52 | /commons AI4U card | "the Wilhelm Foundation's umbrella over AI initiatives … including the open Rare-AI Archive" | verifiable | Foundation real [R]; Rare Archive public [D]; the umbrella structure itself (AI4U) has no public artifact — only the registry row and the site's own copy | S3 | [D][R] |
| R-53 | /commons Rare Archive card | "Rare Archive is an open-source rare-disease AI project … with a canonical home at Wilhelm-Foundation/rare-archive" | verified | Public repo, Apache-2.0, 5 ★, real codebase (packages/tools/deploy/docs) [D GitHub API + raw] | — | [D] |
| R-54 | /commons Rare Archive card | "governed by a **five-seat steward council**" | unsupported | No council named in the public repo's README/CONTRIBUTING (grepped) [D]; not verifiable from public record | S2 | [D] |
| R-55 | /commons (both Wilhelm cards) | "Apache-2.0 + CC-BY-4.0" | verifiable | Apache-2.0 verified (repo LICENSE) [D]; CC-BY-4.0 content license not located in the public repo — checkable in principle, unlinked | S3 | [D] |
| R-56 | /commons Connect | "Three paths, in increasing depth. **Each one works today** — no account, no waitlist." | unsupported (partial) | Path 2 (federate a wrapper) ✓ and path 3 (contribute) mostly ✓ work from the public image [D]; path 1 "Follow the work — the open record is the front door" fails for Context Commons and AI4U, which have **no public face to follow** | S3 | [D] |
| R-57 | /commons registry band | "Registry regenerated 2026-07-25 from the node inventory · member records last synced 2026-05-24" | verified | `vaults.json` `generated_at: 2026-07-25`; all four subnetwork records `last_synced: 2026-05-24` [D]. Exemplary date honesty (note the sync is ~12 weeks stale) | — | [D] |

### 2.5 `/about`

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| R-58 | /about | "Stanley — Founding Architect … aDNA is stewarded today by one person" | verified | Matches repo authorship (git author Stanley; GitHub contributor ScienceStanley) [D]; the honesty framing ("not a council we haven't formed") is accurate | — | [D] |
| R-59 | /about | "The Wilhelm Foundation — Anchor partner · Helene & Mikk Cederroth" | verified | Real foundation, real named founders — wilhelmfoundation.org/about-us + chanzuckerberg.com/rao/wilhelm-foundation [R]; concrete artifact of the relationship: the Wilhelm-Foundation GitHub org hosts rare-archive with the operator as contributor [D]. (No public statement *from the Foundation* about aDNA specifically — the partnership depth is [I] from the repo hosting) | — | [R][D][I] |
| R-60 | /about | "Their work grounds two of the public-good subnetworks already on aDNA — Wilhelm AI for the Undiagnosed and the open Rare Archive" | verifiable | Rare Archive ✓ [D]; AI4U = registry row + site copy only | S3 | [D] |
| R-61 | /about agent-stewards | "**Every vault is 'tended by' a named agent** — and we name them as exactly that." | **FALSE** (quantifier) | Same contradiction as R-23: 7 vaults have no persona; 5 render `tbd_at_p0` [D]. Shares the single fix with R-23 | **S1** | [D] |
| R-62 | /about | "**The proof**: public-good work already here … real mission-aligned subnetworks already build in the open on aDNA today." | unsupported | = R-18/R-48, but titled "**The proof**" — the strongest framing on the site for the least-verifiable claim family. Only Rare Archive survives a skeptical check, and it is operator-authored | S2 | [D] |

*Credited anti-claims on /about (good honesty discipline, no adjudication needed): "stewarded today by one person … not a council we haven't formed"; "These are AI personas … not a claim of a team we don't have"; "What you should not read into the personas is a larger organization … there isn't one yet".*

### 2.6 `/get-started`

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| R-63 | /get-started | "Set up your own aDNA workspace … in about 5 minutes" | verifiable | TTFS measurable; no recorded run linked (cf. R-34) | S4 | [A] |
| R-64 | /get-started | "Everything lives on your machine; nothing is sent anywhere." | verified (narrow) | The image itself phones nothing home (no telemetry code; clone is inbound) [D]. **Material caveat (S3)**: the required tool (Claude Code) sends prompts + file contents to Anthropic's API — for the newcomer the sentence over-promises; scope it to "aDNA itself sends nothing" | S3 caveat | [D][I] |
| R-65 | /get-started | Clone commands + one-liner (`git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude`) | verified | = `install_truth.json` `one_liner`/`commands` exactly [D]; repo public | — | [D] gate-20 |
| R-66 | /get-started | "the previous template repository is preserved read-only at adna-legacy, and your clone's old URLs redirect there" | verified | `aDNA-Network/adna-legacy` public, MIT, frozen [D GitHub API] | — | [D] |
| R-67 | /get-started | "auditable inline, nothing executed from the network" | verified | The one-liner is clone + cd + launch; no curl-pipe-sh [D] | — | [D] |
| R-68 | /get-started | "Claude Code … `npm install -g @anthropic-ai/claude-code`" | verified | Real published package/CLI [R] | — | [R] |

### 2.7 `/learn/what-is-adna`

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| R-69 | /learn/what-is-adna | "16 base entity types … The 16 base types span the Triad — 4 WHO, 5 WHAT, 7 HOW" | verified | 4+5+7=16; matches spec §5 + `standard.ts` [D] | — | [D] gate-20 |
| R-70 | /learn/what-is-adna | "Until aDNA there was no shared answer: every team improvised with long READMEs and custom prompts" | unsupported | Market superlative; adjacent open conventions exist (e.g. AGENTS.md files, llms.txt, various agent-memory schemes). The softer following sentence ("aDNA is **one** open answer") is the defensible form | S3 | [I] |
| R-71 | /learn/what-is-adna | "The public image at github.com/aDNA-Network/aDNA is a real aDNA workspace" + 7 proof-links | verified | All proof-link paths in `install_truth.json` `verified_paths: true`; repo confirmed public [D] | — | [D] gate-20 |
| R-72 | /learn/what-is-adna | "a fresh clone even offers to bootstrap a complete, polished Home for an agent … (shipped at v8.0)" | verified | `template_home_claude.md` + `template_node_adna_exemplar/` in verified_paths [D] | — | [D] |
| R-73 | /learn/what-is-adna | "This documentation site is itself an aDNA vault — the structure you are reading about is the structure that produced it." | verified | Site source lives in the public `aDNA-Network/aDNA.aDNA` vault repo (`site/`) [D] | — | [D] |

### 2.8 `/reference/specification` (intro claims)

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| R-74 | /reference/specification | "v2.5 stable" | verified | = G-03; mirror re-mirrored from the v2.5 standard body (Champollion M6.1) [D] | — | [D] gate-20 |
| R-75 | /reference/specification | Conformance: 3 levels — "minimum viable" / "active multi-agent" / "mature, federatable" | verified | Spec §5 defines all three on-page [D] | — | [D] |

### 2.9 Persona pages

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| R-76 | /adopters | "ℹ Illustrative personas — These are composite archetypes — **not real named adopters**" | verified | Exemplary anti-claim: no fabricated adopters anywhere on the persona surfaces [D] | — (credit) | [D] |
| R-77 | /adopters, /educators | "3-week curriculum kit — 9 tutorials in pedagogical order" | verified | 9 tutorial rows render on /educators (3×3 weeks); tutorial pages exist on-site [D] | — | [D] |
| R-78 | /researchers | "Every lattice object includes a `fair` block: license, creators, keywords, identifier, provenance" | verified | `lattice_yaml_schema.json` + spec FAIR requirement [D] | — | [D] |
| R-79 | /researchers | "**Publishing to the registry is one command** — FAIR compliance is not a separate checklist." | unsupported | The publish CLI (`latlab lattice publish` / `adna-lab`) is **not in the public image**; its code lives in a private vault (Jupyter.aDNA/what/lab). A public reader has no command to run; the live vault registry is regenerated by the operator from a private node inventory, not via public publish | S2 | [D] |
| R-80 | /enterprise | "Every aDNA vault ships with the same four root-level governance files (CLAUDE.md, MANIFEST.md, STATE.md, AGENTS.md)" | verified | Fork kit / templates in the public image scaffold all four [D] | — | [D] |
| R-81 | /enterprise, /compliance | "six-point readiness check (schema valid, opt-in, source instance, license, keywords, resolved references) gates every shared artifact" | verified | Matches the documented 6 readiness checks (skill_lattice_publish / registry standard) [D]. *Tooling availability caveat inherits R-79* | S4 note | [D] |
| R-82 | /enterprise | "Federation across separate organizations and nodes runs on the network's opt-in, local-first membership substrate, **which is still being built**; the standard builds toward that horizon rather than implying it arrived." | verified | Anti-claim, accurate — the honest tense-discipline reference point the other surfaces should match | — (credit) | [D] |
| R-83 | /enterprise, /compliance | "Narrative walkthrough: a 50-person platform org replaces week-long compliance investigations with SQL queries against the session corpus" | unsupported (disclosed) | Hypothetical, but labeled "Narrative walkthrough" — disclosure keeps it out of S1/S2; keep the label glued to it | S4 | [D] |
| R-84 | /compliance §1 | "Git as second witness: **every commit is signed** and dated; session records cross-reference the commit." | **FALSE** | Commits are **not cryptographically signed**: `git log --show-signature` on the dev vault shows no GPG/SSH signatures [D]; no signing config ships in the image. Commits are *attributed and dated* — on a compliance surface aimed at auditors, "signed" asserts a control that does not exist | **S1** | [D] |
| R-85 | /compliance | "Read this first. aDNA is an open documentation standard, **not a certified** [framework] … certification is granted by accredited assessors … never by adopting a standard." | verified | Exemplary anti-claim; correctly scoped compliance posture | — (credit) | [D] |
| R-86 | /compliance | SOC 2 / ISO-IEC 27001 / EU AI Act rows ("the same audit trail lines up cleanly with what the frameworks ask") | verifiable | Interpretive mapping, hedged by R-85's disclaimer; mechanisms cited (session records, ADRs, gates) exist in the standard [D]; no auditor attestation exists | S3 | [D][I] |
| R-87 | /compliance | "Every governed file carries `last_edited_by` and `updated`" | verified | Spec §7.2 frontmatter profile + shipped files [D] | — | [D] |
| R-88 | /compliance | "Archive, never delete: session records, mission files, and campaign documents are a permanent audit trail." | verified | SO-6 in shipped governance; practice visible in the public dev vault [D] | — | [D] |
| R-89 | /startup-first-hour | "The aDNA.aDNA vault went through its own version on 2026-04-13" | verified | First commit `65b6546` dated **2026-04-13** ("Phase 0: scaffold aDNA.aDNA — Operation Rosetta") [D git log] | — | [D] |

### 2.10 Registry surfaces (`/vaults`, `/vaults/graph`, `/vaults/<slug>`)

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| R-90 | /vaults/Videos.aDNA | "GitHub →" (link asserting a public repo at `github.com/aDNA-Network/Videos.aDNA`) | **FALSE** | The **only** `github_url` in the whole registry, and it returns **404 / Not Found** publicly (repo private or gone) [D GitHub API + web]. The registry's single outbound code proof-link is dead for every reader | **S1** | [D] |
| R-91 | /vaults | "74 Vaults · 14 Classes · 14 Cited relationships" | verified | 74 ✓; exactly 14 distinct `class` values ✓; 14 edges ✓ [D] | — | [D] |
| R-92 | /vaults/graph | "59 vaults carry no cited relationship yet, so they sit unconnected here — that is honest topology, not missing data." | verified | 74 − 15 connected = 59 ✓ [D]. Exemplary honesty framing | — (credit) | [D] |
| R-93 | /vaults | "This registry is open. Every vault here is a real, **self-published** context graph — the same open pipeline is yours to use." | unsupported | "Self-published" mischaracterizes the pipeline: the registry is regenerated by the operator from the private `Home.aDNA` node inventory (the /commons band says so itself). The generator script *is* public (`scripts/build_vaults_data.mjs`) and /how/publishing/ resolves (200) [D] — but no external party can currently land in *this* live registry without operator action | S3 | [D] |

---

## 3 · Tense audit — present-tense network-behavior claims (`/`, `/network`, `/community`, `/commons`)

For each present-tense claim about network behavior: is it verifiable **today** by a reader (link/artifact), or aspirational?

| Surface | Present-tense claim | Verifiable today? | Judgment |
|---------|--------------------|-------------------|----------|
| / | "the open network where that shared context **lives**" | No — context not publicly reachable for 73/74 vaults | **Aspirational** (R-13) |
| / | "all of them **federating** into a shared commons" | Partly — 9 federation edges exist as declarations [D]; no live cross-node federation observable | **Aspirational** at machinery level; declaration-level real |
| / | "Real aDNA vaults — Astro, III, RareHarness, wga, RareArchive, Home — **federating** around the aDNA core **on the Lattice Protocol**" | No — protocol private; Home.aDNA is local-by-default *by rule* (it is the one vault designed NOT to federate silently) | **Aspirational**; diagram caption overstates both halves |
| / | "Mission-aligned subnetworks **already steward** real public-good work" | Partly — Rare Archive repo only | **Aspirational** as a plural (R-28) |
| /network | "Nodes **connect** through real, directed relationships" | Vault-level yes [D]; node(machine)-level no | **Aspirational** at node level (R-30) |
| /network | "each one **decides** what stays local and what joins the shared commons" | Design documented (Rule 4) [D]; join machinery not shipped | Mixed — design real, behavior aspirational |
| /network | "What actually **crosses** the boundary is a curated slice of your Home.aDNA registry" | No public artifact of the transmission path | **Aspirational** (R-38) |
| /network | "every decision on the record" | Yes — ADRs public in the dev vault [D] | Verifiable ✓ |
| /community | "aDNA **is built** by humans and agents together, in the open" | Yes — public repos, agent attribution [D] | Verifiable ✓ |
| /community | "improvements **run** through the repository as upstream contributions, reviewable by anyone" | Channel exists; zero external instances; Discussions/templates dead (R-46/47) | Mixed — leaning aspirational |
| /commons | "Mission-aligned subnetworks **build, share, and govern** shared context in the open" | No — 3/4 have no public face; governance records unreachable | **Aspirational** (R-48) |
| /commons | "Each one **works** today — no account, no waitlist" | Paths 2–3 yes [D]; path 1 fails for 2 of 4 subnetworks | Mixed (R-56) |
| /commons | "the open governance record **is** the social surface" | The four cited governance records are not publicly readable | **Aspirational** (R-49) |
| /commons | "There is no activity feed here yet … Profiles, follows, feeds … **are not built yet**" | — | ✓ Honest anti-claim (credit; the model the rest should follow) |

**Pattern**: the site's *self-descriptive* surfaces (/community record, /commons registry band, /about, /enterprise substrate note, /vaults/graph "59 unconnected") carry excellent tense discipline — while the *hero/marketing* strata of the same pages slip into present-tense network behavior ("lives", "federating", "steward", "build in the open") that only the operator's private fleet actually exhibits. The honest sentences and the aspirational sentences coexist on the same pages.


---

## 4 · H13 annex — full 74-vault registry leak sweep

**Method**: all 74 live `/vaults/<slug>` pages fetched 2026-08-16 (all 200); visible copy (h1 · lede · spec sheet) extracted and classified; cross-checked against `site/src/data/vaults.json` (zero live-vs-repo drift, so the data file IS the page copy). Full machine-readable table: [`claims_raw.json`](claims_raw.json) → `h13_leak_table`. Prov: `[D]` throughout.

**Result: 58 of 74 vault pages (78%) carry at least one internal-language leak.** H13 is **confirmed at full-sweep scale** — this is not one bad entry ("Renamed from TaskForge…") but the registry's default state: public copy is generated from internal operational notes without an editorial gate.

| Leak class | Count | What it looks like |
|---|---|---|
| Truncated note — unclosed parenthetical | 27 vaults (5 cut mid-token) | Ledes ending "Web-stack cohort (." / "(Production Tidy pt08." — the inventory→registry generator truncates notes mid-sentence |
| Raw internal enum rendered in spec sheet | 23 vaults | `Class: org_vault` · `Class: tbd_at_p0` (3) · `Persona: tbd_at_p0` (5) · `Status: genesis_stub` · `Class: framework_candidate` · `Class: node_operational` · `Class: standard_dev` |
| Internal ops jargon in lede | 14 vaults | "Data-bearing (§8", "persona TBD", "operator", "federation_ref", "Local-only" |
| Codename / campaign-mission jargon | 14 vaults | "Operation Aegis", "Operation CAKE", "Operation Vitrine", "pt08/pt09/pt12/pt13", "LIP-0005/0006" |
| Internal file path in lede | 10 vaults | "what/contextscope/", "~/aDNA/", "what/harness/", "Git.aDNA/Hopper" |
| Raw `code-as-WHAT` term in lede | 7 vaults | "code-as-WHAT engine at what/…" |
| Rename-provenance in lede | 3 vaults | "Renamed from TaskForge.aDNA…" (Operations — also rendered **on the homepage** registry band), Astro, LAVentureGraph |
| Placeholder templated lede | 1 vault | zeta: "A workspace vault — pending." |
| *Systemic (by design, flag for review)* | 24 vaults | Governance spec row renders internal paths (`Operations.aDNA/AGENTS.md`) — intelligible, but they are unreachable references for a public reader |
| *Systemic (site-wide)* | all 16 key pages | Shipped HTML carries 2–46 developer comments per page (layout rationale prose) — internal narration in the public payload |

**Clean vaults (16)**: ComfyUI.aDNA · llamacppforge · Molecules.aDNA · Videos.aDNA · III.aDNA · visualdna · awsbootstrap · bitwarden · container · fastapi · inference · prefect · TappProtocol.aDNA · warp · webforge · Spacemacs.aDNA.

**Special case — aspirational present tense in a lede**: `worldgenome` (status `genesis`, class `tbd_at_p0`) lede ends "…(Academy / Archive / Protocol / Project) — **LIVE**." — a genesis-stub declaring itself LIVE `[D]`.

### Per-vault leak table (58 rows)

| Vault slug | Leak class → quoted match | Lede as rendered (quoted) |
|---|---|---|
| `Operations.aDNA` | **rename-provenance**: "Renamed from"<br>**codename/campaign jargon**: "pt08"<br>**truncated (unclosed paren)**: "Renamed from TaskForge.aDNA (Production Tidy pt08."<br>**truncated mid-parenthetical**: "Renamed from TaskForge.aDNA (Production Tidy pt08." | "Renamed from TaskForge.aDNA (Production Tidy pt08." |
| `Astro.aDNA` | **rename-provenance**: "Renamed from" | "Astro 6 composable website builder; Production v1.0. Renamed from SiteForge.aDNA." |
| `d3` | **truncated (unclosed paren)**: "ild-face software-element context graph. Web-stack cohort (." | "Build-face software-element context graph. Web-stack cohort (." |
| `Oration.aDNA` | **internal ops jargon**: "operator" | "Greene-methodology speech-package pipeline (8-stage; 3 human gates). v0.2.0 post-C7 extraction. Phase-1+ awaits operator gate. Renamed SpeechForge.aDNA → Oration.aDNA." |
| `regenesis` | **truncated (unclosed paren)**: "Genome-seeded Forge.aDNA graph (class ratified." | "Genome-seeded Forge.aDNA graph (class ratified." |
| `threejs` | **truncated (unclosed paren)**: "s 3D/WebGL build-material context graph. Web-stack cohort (." | "Three.js 3D/WebGL build-material context graph. Web-stack cohort (." |
| `git` | **internal ops jargon**: "persona TBD" | "The aDNA network's canonical git + git-ops + CI/CD context graph (branches/commits/PRs/releases/CI-CD/cost). General-git-first with first-class GitHub/aDNA-Network context. Stoo…" |
| `organization` | **codename/campaign jargon**: "Operation Aegis"<br>**truncated (unclosed paren)**: "rd Org-Graph vaults conform to. Operation Aegis BI cohort (." | "Org-context-graph methodology (ORG-* ontology/entity-resolution/governance + the insight quartet); the source substrate BI projects into Neo4j; the standard Org-Graph vaults con…" |
| `react` | **truncated (unclosed paren)**: "ild-face software-element context graph. Web-stack cohort (." | "Build-face software-element context graph. Web-stack cohort (." |
| `tailwind` | **truncated (unclosed paren)**: "ement context graph for Tailwind CSS v4. Web-stack cohort (." | "Build-face software-element context graph for Tailwind CSS v4. Web-stack cohort (." |
| `typescript` | **internal ops jargon**: "federation_ref" | "Agent-facing context substrate for authoring/operating TypeScript (web/UI emphasized); consumed via a typescript/ wrapper + federation_ref. Persona Milner." |
| `VAAS.aDNA` | **raw internal enum (spec sheet)**: "Class: framework_candidate" | "Verification-as-a-service — multi-layer hallucination reduction, cross-lattice verification federation. Renamed VAASLattice.aDNA → VAAS.aDNA." |
| `LAVentureGraph.aDNA` | **rename-provenance**: "Renamed from" | "LA venture ecosystem knowledge graph (UCLA Anderson + Nerdstage/Demo Day LA). Renamed from la_startup.aDNA." |
| `Network.aDNA` | **codename/campaign jargon**: "LIP-0006" | "Master/Einstein-node state/membership/operations graph of the Alpha Lattice. LIP-0006 provisional." |
| `Home.aDNA` | **raw internal enum (spec sheet)**: "Class: node_operational"<br>**internal ops jargon**: "operator" | "This vault — per-node operational governance for Mac/stanley; the operator's daily-driver. Renamed LatticeHome.aDNA -> Home.aDNA." |
| `CakeHealth.aDNA` | **codename/campaign jargon**: "Operation CAKE"<br>**raw internal enum (spec sheet)**: "Class: org_graph"<br>**internal ops jargon**: "Local-only" | "Operation CAKE clinical health data context graph. Local-only repo (GitHub promotion at Stanley's call). Refreshed." |
| `percysleep` | **raw internal enum (spec sheet)**: "Class: org_graph" | "Outside-In model of Percy Sleep Inc (contactless 60GHz behavioral sleep-monitoring device + AI platform + clinician dashboard)." |
| `rareanthropic` | **codename/campaign jargon**: "LIP-0005"<br>**truncated (unclosed paren)**: "LL.md + static curriculum (WebForge documentation archetype."<br>**raw internal enum (spec sheet)**: "Class: org_graph" | "Org-Graph.aDNA (LIP-0005) — outside-in map of the Anthropic ecosystem (products/retention/HIPAA-BAA/Skills) for the rare-disease working group. One 89-node provenance-discipline…" |
| `SuperLeague.aDNA` | **raw internal enum (spec sheet)**: "Class: org_graph" | "Agentic-enablement work for SuperLeague company. Partner-cloned by Carly + Herb; Stanley not yet locally cloned." |
| `adnalabs` | **raw internal enum (spec sheet)**: "Class: org_vault" | "Unified successor to LatticeLabs.aDNA + lattice-labs; aDNA-network migration HQ." |
| `ContextCommons.aDNA` | **raw internal enum (spec sheet)**: "Class: org_vault" | "Context Commons — community-driven agentic literacy, enablement & support program." |
| `RareArchive.aDNA` | **raw internal enum (spec sheet)**: "Class: org_vault" | "Rare Archive OSS rare-disease AI project." |
| `sciencestanley` | **raw internal enum (spec sheet)**: "Class: org_vault" | "Science Stanley brand vault — single source of truth for all SS content generation. Inventory name casing corrected science_stanley -> ScienceStanley." |
| `wga.aDNA` | **raw internal enum (spec sheet)**: "Class: org_vault" | "World Genome Academy — buildpack + symphony + site." |
| `WilhelmAI.aDNA` | **raw internal enum (spec sheet)**: "Class: org_vault" | "AI4U umbrella (Wilhelm AI Initiative for the Undiagnosed). Four PLWUD-impact initiatives." |
| `zenzachary` | **raw internal enum (spec sheet)**: "Class: org_vault" | "Brand vault (Zach Sekar) within the SWS multiverse; first character bundle = Zen Zachary (techno-cyber-monk); first." |
| `ailp-dataroom` | **codename/campaign jargon**: "Operation Vitrine"<br>**truncated (unclosed paren)**: "raph (classed platform for lack of a finer recognized class." | "Dataroom INSTANCE generated by Datarooms.aDNA (its live dogfood target, Operation Vitrine) — a generated instance, not a first-class graph (classed platform for lack of a finer …" |
| `apscheduler` | **truncated (unclosed paren)**: "health — runtime verbs delegate to host=operations-bridge (." | "In-process trigger/scheduling library element (cron/interval/date fired inside a host process); no independent install/health — runtime verbs delegate to host=operations-bridge (." |
| `caddy` | **internal ops jargon**: "Data-bearing" | "Keystone cohort — reverse-proxy + TLS-termination + ingress (fleet-default). Data-bearing (fronts data). Lighthouse profile: core." |
| `cakeprotocol` | **codename/campaign jargon**: "Operation Layer" | "Bakes CakeHealth.aDNA's clinical-data craft into an agentic on-demand generator of patient-specific data systems (hardware->data->schema->dashboard->analysis). Platform.aDNA, pe…" |
| `canvas` | **codename/campaign jargon**: "pt09"<br>**internal file path (lede)**: "what/code/" | "Standard-bearer Platform.aDNA owning the aDNA Canvas Standard (agentic-context-native fork of Obsidian Advanced Canvas / JSON Canvas) + its reference tooling (validators/convert…" |
| `context` | **codename/campaign jargon**: "pt12"<br>**truncated (unclosed paren)**: "(RELOCATED from root sibling ~/aDNA/contextscope at PT pt12."<br>**truncated mid-parenthetical**: "(RELOCATED from root sibling ~/aDNA/contextscope at PT pt12."<br>**raw internal enum (lede)**: "code-as-WHAT"<br>**internal file path (lede)**: "what/contextscope/" · "~/aDNA/" | "Integrated observe->optimize context-intelligence platform (context/token telemetry + optimization + dashboard/API); code-as-WHAT engine at what/contextscope/ (RELOCATED from ro…" |
| `dashboards` | **codename/campaign jargon**: "Operation Aegis"<br>**truncated (unclosed paren)**: "zation substrate, built through WebForge. Operation Aegis (." | "Agentic, graph-backed, conversational BI/dashboards surface over an org context graph (Visualize/Converse/Learn/Monitor/Operate); composes Neo4j + Organization substrate, built …" |
| `datarooms` | **truncated (unclosed paren)**: "arooms v0.1). Platform.aDNA (class provisional, ratified R0."<br>**truncated mid-parenthetical**: "arooms v0.1). Platform.aDNA (class provisional, ratified R0."<br>**raw internal enum (lede)**: "code-as-WHAT"<br>**internal file path (lede)**: "what/datarooms_core/" | "Modular agentic-dataroom generator (purpose modules × audience lenses × trust/RBAC profiles over context graphs; code-as-WHAT what/datarooms_core/, product Datarooms v0.1). Plat…" |
| `emacs` | **truncated (unclosed paren)**: "ntent to Spacemacs.aDNA — supersession deliberate + dated (."<br>**raw internal enum (lede)**: "code-as-WHAT"<br>**internal file path (lede)**: "what/emacs/" | "The aDNA-native Emacs distribution built on Doom Emacs (:adna module category as a DOOMDIR-as-repo under a dedicated adna profile; code-as-WHAT what/emacs/). Successor-in-intent…" |
| `exchange` | **codename/campaign jargon**: "Operation Agora" | "The aDNA Exchange — federated distribution substrate through which nodes discover/publish/version/exchange context graphs + agentic topologies under configurable smart-contract-…" |
| `fluxer` | **truncated (unclosed paren)**: "RING (§8 — data-plane placement co-designed w/ Venus at its."<br>**internal ops jargon**: "DATA-BEARING" | "Agentic command of the Fluxer platform (OSS AGPLv3 Discord-mold messaging/VoIP; install/operate/configure/update/interoperate) + the Agora Loop harvest doctrine (consent+provena…" |
| `forgejo` | **truncated (unclosed paren)**: "it.aDNA/Hopper keeps the provider contract). Data-bearing (."<br>**internal ops jargon**: "Data-bearing"<br>**internal file path (lede)**: "Git.aDNA/Hopper" | "Keystone cohort — self-hosted git forge (software install/config/backup/upgrade only; seam: Git.aDNA/Hopper keeps the provider contract). Data-bearing (." |
| `gotfn` | **truncated (unclosed paren)**: "pp). Platform.aDNA (non-SDG), persona Snorri (ratified ⛩ G0."<br>**truncated mid-parenthetical**: "pp). Platform.aDNA (non-SDG), persona Snorri (ratified ⛩ G0." | "Agentic DM / world-engine / story-forge / interactive-canvas table for Gods of the Forbidden North (Pulp Hummock Press · OSE: Advanced Fantasy; 3 vols ~1,620pp). Platform.aDNA (…" |
| `groupware` | **truncated (unclosed paren)**: "ing: mail/calendar/contacts (Stalwart JMAP). Data-bearing (."<br>**internal ops jargon**: "Data-bearing" | "Keystone cohort — unified messaging: mail/calendar/contacts (Stalwart JMAP). Data-bearing (." |
| `Harness.aDNA` | **codename/campaign jargon**: "pt13"<br>**truncated (unclosed paren)**: "-as-WHAT at what/harness/ (rareharnessneo relocated PT pt13."<br>**truncated mid-parenthetical**: "-as-WHAT at what/harness/ (rareharnessneo relocated PT pt13."<br>**internal file path (lede)**: "what/harness/" | "Generic, agentically-configurable aDNA harness (pkg rareharness; governance-intent harness_adna). RareHarness = flagship Wilhelm clinical vertical. Code-as-WHAT at what/harness/…" |
| `jupyter` | **truncated (unclosed paren)**: "T at what/lab/ (the latlab repo). Persona Galileo (ratified."<br>**raw internal enum (lede)**: "code-as-WHAT"<br>**internal file path (lede)**: "what/lab/" | "Agentic Jupyter on any machine (L1/L2/L3 + Hub; per-user IAM; extensions); code-as-WHAT at what/lab/ (the latlab repo). Persona Galileo (ratified." |
| `latticeprotocol` | **raw internal enum (spec sheet)**: "Persona: tbd_at_p0"<br>**raw internal enum (lede)**: "code-as-WHAT"<br>**internal ops jargon**: "persona TBD" | "The .aDNA context graph (code-as-WHAT-object) wrapping the lattice-protocol core library (canvas/federation/aDNA SDK/marketplace/ledger). Stood up under aDNALabs.aDNA's migratio…" |
| `lighthouse` | **raw internal enum (spec sheet)**: "Persona: tbd_at_p0"<br>**internal ops jargon**: "Persona TBD" | "Deployable integrated-lighthouse node — self-hosted Forgejo as a subnet's core git + context-sync fabric + the node stack (identity/mesh/collab/inference/ops). The *deployable* …" |
| `nebula` | **truncated (unclosed paren)**: "h-overlay daemon install/config/operate (Tailscale folds in." | "Keystone cohort — node-side mesh-overlay daemon install/config/operate (Tailscale folds in." |
| `neo4j` | **codename/campaign jargon**: "Operation Aegis"<br>**truncated (unclosed paren)**: "zed projection of a source context graph. Operation Aegis (." | "Property-graph substrate — modeling/query/ingestion/GDS/agent read-boundary (N4-*); a read-optimized projection of a source context graph. Operation Aegis (." |
| `nextcloud` | **truncated (unclosed paren)**: "ort — self-hosted file-sync + collaboration. Data-bearing (."<br>**internal ops jargon**: "Data-bearing" | "Keystone cohort — self-hosted file-sync + collaboration. Data-bearing (." |
| `Obsidian.aDNA` | **raw internal enum (lede)**: "code-as-WHAT"<br>**internal file path (lede)**: "what/obsidian/" | "Default aDNA-native way to install/configure/operate/update Obsidian across a node (analog to Terminal.aDNA [ex-Cmux] for the terminal). Platform.aDNA (single-repo, code-as-WHAT…" |
| `realityscan` | **truncated (unclosed paren)**: "ane placement co-designed w/ Venus; heads-up memo landed at."<br>**internal ops jargon**: "DATA-BEARING" | "Agentic command of RealityScan (Epic professional photogrammetry, ex-RealityCapture; closed-source; Win+Linux CLI; CUDA/HIP; install/operate/configure/update/interoperate) + the…" |
| `RemoteControl.aDNA` | **raw internal enum (spec sheet)**: "Status: genesis_stub" | "Agentic mouse/kbd/screen-vision control runtime + safety framework (Talos)." |
| `store` | **truncated (unclosed paren)**: " (MinIO/AIStor; Lattice Storage Federation). Data-bearing (."<br>**internal ops jargon**: "Data-bearing" | "Keystone cohort — S3-compatible object storage (MinIO/AIStor; Lattice Storage Federation). Data-bearing (." |
| `terminal` | **raw internal enum (lede)**: "code-as-WHAT"<br>**internal file path (lede)**: "what/cmux/" | "Chief-of-staff terminal for a Lattice node; soft-fork-with-upstream of manaflow-ai/cmux (GPL-3.0-or-later; single-repo, code-as-WHAT at what/cmux/)." |
| `vercel` | **truncated (unclosed paren)**: "Software/deployment-graph. Web-stack cohort (." | "Software/deployment-graph. Web-stack cohort (." |
| `aDNA.aDNA` | **codename/campaign jargon**: "Operation Rosetta"<br>**raw internal enum (spec sheet)**: "Class: standard_dev" | "Self-referential aDNA documentation — teaches the standard by using the standard (Operation Rosetta)." |
| `datasets` | **truncated (unclosed paren)**: "ng-dataset management graph; governs the results/ mount (PT."<br>**raw internal enum (spec sheet)**: "Class: tbd_at_p0" · "Persona: tbd_at_p0" | "Working-dataset management graph; governs the results/ mount (PT." |
| `magnapetra` | **raw internal enum (spec sheet)**: "Class: tbd_at_p0" · "Persona: tbd_at_p0" | "Promoted from the lunarpro-build-kit (Magna-Petra Lunar Pro; He-3 extraction mission planning)." |
| `worldgenome` | **raw internal enum (spec sheet)**: "Class: tbd_at_p0" · "Persona: tbd_at_p0" | "Unified World Genome context-graph system (Academy / Archive / Protocol / Project) — LIVE." |
| `zeta.aDNA` | **placeholder templated lede**: "A workspace vault — pending." | "A workspace vault — pending." |

---

## 5 · Summary

### 5.1 Counts

| Class | Count | Rows |
|---|---|---|
| **verified** | **52** | G-01…G-10, R-11, R-12, R-16, R-17, R-19, R-24, R-26, R-31, R-32, R-33, R-37, R-39, R-41, R-42, R-44, R-53, R-57, R-58, R-59, R-64, R-65, R-66, R-67, R-68, R-69, R-71, R-72, R-73, R-74, R-75, R-76, R-77, R-78, R-80, R-81, R-82, R-85, R-87, R-88, R-89, R-91, R-92 |
| **verifiable** | **14** | R-21, R-22, R-25, R-29, R-34, R-35, R-40, R-43, R-45, R-52, R-55, R-60, R-63, R-86 |
| **unsupported** | **19** | R-13, R-15, R-18, R-27, R-28, R-30, R-36, R-38, R-48, R-49, R-50, R-51, R-54, R-56, R-62, R-70, R-79, R-83, R-93 |
| **FALSE (S1)** | **8** | R-14, R-20, R-23, R-46, R-47, R-61, R-84, R-90 |
| Total adjudicated | **93** | + H13 annex: 58/74 vault pages with leaks |

The verified core is strong: **every load-bearing number on the site is true** (74 / 16 / 3 / v2.5 / MIT / 14 edges / 15 connected / 14 classes / 59 unconnected / dates), and the site's registry matches the repo data with zero drift. The falsity concentrates in **universally-quantified prose** ("all", "every"), **"open" applied to things that are private**, and **contribution-channel promises that were never shipped**.

### 5.2 The 8 FALSE claims (S1 — block launch)

1. **R-20** `/` — "Open MIT-licensed — the spec, the tooling, and **the vaults are all public**." → 73/74 vaults have no public repo; the one linked repo 404s; several are governance-marked local-only.
2. **R-14** `/` hero — "built on the Lattice Protocol (**the open coordination protocol** underneath)" → protocol repos private, publish counsel-gated; the site's own "opening progressively" phrasing contradicts it.
3. **R-46** `/community` — "questions and ideas start in **Discussions**." → Discussions not enabled; github.com/aDNA-Network/aDNA/discussions → 404.
4. **R-47** `/community` — "…through the public repository's **issue templates**" → the public repo has no `.github/` directory at all; templates never shipped.
5. **R-84** `/compliance` — "**every commit is signed** and dated" → no commit signatures exist; asserts a nonexistent control to an auditor audience.
6. **R-23** `/` + `/vaults` — "Every vault … **its own persona**, its own history" → 7 vaults have no persona; 5 render raw `tbd_at_p0`.
7. **R-61** `/about` — "**Every vault is 'tended by' a named agent**" → same contradiction (single fix with R-23).
8. **R-90** `/vaults/Videos.aDNA` — "GitHub →" link → the registry's only outbound repo link returns 404.

### 5.3 Top-10 highest-stakes rows

| Rank | Row | Why it matters |
|---|---|---|
| 1 | R-20 (FALSE) | "The vaults are all public" is the site's central openness claim, and it is the most checkable — one click into the registry disproves it. Direct hit on the trust surface (VITRUVIUS D7). |
| 2 | R-46 + R-47 (FALSE ×2) | The entire advertised contribution funnel (Discussions + issue templates) is dead on arrival. A motivated first contributor — the reader the whole site courts — hits two 404s. |
| 3 | R-14 (FALSE) | "Open coordination protocol" vs private counsel-gated repos. Harmonize to the honest "opening progressively" phrasing that already exists on the same page. |
| 4 | R-84 (FALSE) | A false control claim on the compliance page is the worst possible location for one — that page's entire job is auditor trust. |
| 5 | R-23/R-61 (FALSE) + H13 enum leaks | "Every vault has its own persona" fails on the same pages that render `Persona: tbd_at_p0` raw. One data fix (fill or suppress placeholders) clears both. |
| 6 | R-90 (FALSE) | The registry's single GitHub proof-link 404s — the one place a skeptic can click through to code, broken. Remove or make the repo public. |
| 7 | R-18/R-28/R-48/R-62 (unsupported family) | "Real public-good work already lives here" / "**The proof**" — the site's strongest credibility framing rests on 4 initiatives of which only one (Rare Archive) survives a public check, and it is operator-authored. Highest gap between claimed and verifiable scale (VITRUVIUS 8.3's exact theme). |
| 8 | H13 annex (58/74) | Internal-language leakage is the registry's default state, including on the homepage card band ("Renamed from TaskForge.aDNA (Production Tidy pt08."). Confirms the H13 hypothesis: public surfaces are generated from internal artifacts without an editorial gate. Fix at the generator, not per-page. |
| 9 | R-27 + R-51 (unsupported) | "Community-driven" / "Community-governed" vs 2 founding contributors and /about's own "there isn't one yet". Internal contradiction between surfaces — the honesty posture is the brand; these two lines undercut it. |
| 10 | R-49/R-50/R-54 (unsupported) | /commons cites governance records and council structures a reader cannot reach (3/4 subnetworks have no public face). Either publish the governance records or stop citing them as "open". |

### 5.4 Credit register (honesty instances worth preserving through any rewrite)

`/network` zero-count edge kinds (partner · 0, supersedes · 0) · `/vaults/graph` "59 vaults carry no cited relationship yet … honest topology" · `/commons` + `/community` horizon boxes ("not built yet") and "what you won't find here" bands · `/about` one-person honesty + AI-persona disclosure · `/adopters` "illustrative personas — not real named adopters" · `/compliance` "not a certified framework" disclaimer · `/enterprise` "substrate … still being built" · `/commons` registry regen/sync dates displayed. **The site already knows how to tell the truth about its scale — the FALSE/unsupported rows are the places where the marketing stratum diverged from this house style.**

---

*B5 complete. Fetched surfaces + parsed text + sweep script preserved in session scratchpad; machine-readable evidence in [`claims_raw.json`](claims_raw.json). Register reconciliation cadence per directive C.4: monthly.*

---

## 6 · P1.1 resolution addendum (2026-08-17, mission `mission_haussmann_p1_1_claim_purge`)

**The FALSE set (§5.2) is resolved — 8/8.** Direction per campaign law (claims move down) + the operator's
per-row elections (disposition memo `artifacts/p1_1/disposition_memo.md` §4). Gate-26's fixture rows deleted
same-diff; zero xfail is now the suite's healthy state.

| Row | Resolution | Mechanism |
|---|---|---|
| R-14 | **RESOLVED — copy** | Hero swap to ADR-048 candidate-A (definition-as-hero); the protocol appears only in the embargo-safe trust-link ("opening progressively"). gate-23 re-anchored + now guards the FALSE gloss's return. |
| R-20 | **RESOLVED — copy** | Pillar → "the spec, the tooling, and the registry are all public." |
| R-23 / R-23b | **RESOLVED — copy** | Quantifier → "with its own place in the network — most tended by a named agent"; "its own history" dropped (no history fields exist). Data side was P1.3. |
| R-46 | **RESOLVED — copy + venue shipped** | Operator directive: questions/ideas route to the Fluxer at community.adna.network (link-GO fired early by operator override — deviation recorded in ADR-054 §Status; honest-state framing, human-only line). Discussions claim gone; Discussions NOT enabled (operator: issues only). |
| R-47 | **RESOLVED — shipped** | Staged `.github/ISSUE_TEMPLATE/` (Refit M6) pushed to `aDNA-Network/aDNA` under operator GO (P1.1 O2); `config.yml` edited to drop the Discussions contact link first. |
| R-61 | **RESOLVED — copy** | "Most vaults are 'tended by' a named agent…" |
| R-84 | **RESOLVED — copy** (operator: state the truth) | "every commit is attributed and dated". |
| R-90 | **RESOLVED — projection gate + data memo** | `/vaults/<slug>` renders external links only from probe-verified `src/data/verified_links.json` (empty as of 2026-08-17 — the dead link no longer renders); Hestia memo staged to fix the inventory at source (pt19). |

**The 19 unsupported rows — adjudicated** (each: copy lowered / scoped to design-fact / kept-with-label /
resolved structurally). R-13 resolved by the hero swap (avoid-class "lives"); R-15 kept as the ONLY protocol
phrasing; R-18, R-27, R-28, R-30, R-36, R-38, R-48, R-49, R-50, R-51, R-54, R-56, R-62, R-70, R-79, R-93
lowered per the disposition memo §2 (exact drafts there = exact shipped copy); R-83 kept (disclosed +
labeled). R-62's surface rebuild (state-of-network) remains P1.2's lane.

**New rows** (P1.1 copy, all `[D]`):

| # | Surface | Claim (quoted) | Class | Evidence | Prov |
|---|---------|----------------|-------|----------|------|
| R-94 | / movement band | "Language and DNA were co-created by everyone before us. The context that powers AI should be too — built, shared, and governed in the open, for the good of all." | verified (as intact-demotion) | ADR-048 required the lyric demoted *intact*; fixture row guards deletion | [D] |
| R-95 | /community | "registration is approval-gated, and its terms of service, privacy policy, and branding are still being stood up" | verified | Live Fluxer bootstrap probe 2026-08-17: `registration.mode: "approval"`, `legal.*` null, `branding.*` null | [D] |
| R-96 | /community | "A real-time community space is open at community.adna.network" | verified | HTTP 200 on /, /register, /login (2026-08-17) | [D] |
| R-97 | / hero quals | "For teams working with agentic coding tools on real projects." / "Not a product or service — no server, no signup, nothing leaves your machine." | verified (ADR-048 verbatim) | Ratified package (DP2); the NOT-line inherits R-64's narrow-scope caveat class (the required agent tool sends prompts to its provider) | [D] |

*Register reconciliation cadence unchanged (monthly, directive C.4). Next full re-fetch: P2.6 midscore.*

---

## §7 · P1.2 addendum — the state-of-the-network + canonical-properties surfaces (2026-08-18)

Mission `mission_haussmann_p1_2_state_of_network`. Adds two surfaces and rewrites four blocks. Every
sentence below was authored against the ground truth in the same commit that shipped it, and every
external URL was re-probed logged-out at O3 on 2026-08-18. Copy drafts with per-block rationale:
`artifacts/p1_2/copy_draft.md`. Consent basis: `artifacts/p1_2/consent_record.md`.

### §7.1 The R-62 debt, discharged

**R-62 is CLOSED.** §6 recorded that P1.1 lowered the "The proof" copy as a stopgap while *"R-62's
surface rebuild (state-of-network) remains P1.2's lane."* That rebuild has now landed in two places:

- `/about` band 4 is retitled **"The public-good work, and what you can check"**, its counts derive
  from the fixture, and **every row carries a check-state** — an "Open it ↗" link where a public
  property exists, and *"No public property yet — the vault record is at pending."* where it does
  not. The band no longer asserts that the work is real; it shows which parts of it a reader can
  open. `[D]`
- `/state-of-the-network/` gives the same fact its own dated surface.

The family R-18 / R-28 / R-48 / R-49 that shared R-62's stopgap now resolves the same way: the home
hero no longer leads with the subnetwork roll-call at all (see R-18 below).

### §7.2 New rows

| # | Surface | Claim (quoted) | Class | Evidence / ground truth | Sev | Prov |
|---|---------|----------------|-------|------------------------|-----|------|
| **R-98** | /state-of-the-network | "All of them run on one computer, operated by one person" | **verified** | 74/74 vaults on the operator's node; `Home.aDNA`/`Network.aDNA` private by design; no second node publicly evidenced. **Resolves H5 (S1) and inverts anti-pattern 7.3** — the distinction is now made on the page, in the reader's line of sight. Gate-26 fixture row. | — | [D] |
| **R-99** | /state-of-the-network | "No number on this page is typed by hand." | **verified** | Structurally true via `src/data/network_state.ts`; machine-checked by the gate-20 manifest rows added in the same commit. The coupling is what makes it a guarantee rather than a promise. | — | [D] |
| **R-100** | /canonical-properties | "If you found aDNA somewhere that is not here, it is not us." | **verified** | Completeness claim, enforced bidirectionally by the new gate-15 **G6b** set-equality assertions (nothing undeclared can appear; nothing declared can vanish). The §7.1 clone-site defense. | — | [D] |
| **R-101** | /canonical-properties | "aDNA runs none. There is no aDNA account on any social platform." | **verified** | `SocialLinks.astro` is imported nowhere; no handle exists anywhere in `site/src`. **Known expiry** — the day an account is opened, this row and the copy must change in the same diff. | — | [D] |
| R-102 | /state-of-the-network | "It is not evidence of adoption, and this site will not present it as any." | verified | A forward commitment, not a description — it is what converts the disclosure from a confession into a discipline. Nothing on the site presents the graph as adoption. | — | [D] |
| R-103 | /state-of-the-network | "every commit in it came from the same person who operates this network" *(of `Wilhelm-Foundation/rare-archive`)* | **verified** | GitHub contributors API, re-checked 2026-08-18: exactly one contributor, `ScienceStanley`, 3 contributions. The single highest-value sentence in the mission — the most damaging fact a hostile reader could surface about the network's flagship public artifact, surfaced first and dated. | — | [D] |
| R-104 | /state-of-the-network | "One vault records a code repository at all, and that one does not resolve publicly — so this site does not link it." | verified | Exactly 1 of 74 carries `github_url`; probed 404 logged-out 2026-08-18. The non-linking is enforced by P1.1's `verified_links` projection gate, not by discipline. | — | [D] |
| R-105 | /state-of-the-network | "Their records were last synced on 2026-07-06 — older than the registry above, and shown rather than hidden." | verified | `subnetworks.json` `generated_at`. Deliberately surfaced; the lag is an honest signal about pace. Pinned by a gate-20 row so it cannot be cosmetically refreshed without the copy following. | — | [D] |
| R-106 | /canonical-properties | "An early domain for this project, abandoned before launch. It does not resolve." *(adna.dev)* | verified | Probed 2026-08-18: no DNS response. Named rather than dropped — silence would leave a lapsed domain free to be re-registered against us with no way for a reader to tell. Gate-15 G6b asserts it is named but **never linked**. | — | [D] |
| R-107 | /canonical-properties | "Not every repository under our organization is listed. One is private and does not resolve publicly" | verified | `aDNA-Network/Videos.aDNA`, 404 logged-out. Disclosed as a count without an anchor, so R-90's defect (an outbound proof-link a reader cannot follow) is not re-created on a page whose subject is trustworthy links. | — | [D] |
| R-108 | /about | "Stanley Bishop — Founding Architect, aDNA · Head of AI, Wilhelm Foundation · AI-Scientist in Residence, UCLA Anderson School of Management" | verified | Name + UCLA role public on stanley.science `[D]`. Wilhelm title ratified `WilhelmAI.aDNA/STATE.md:16` `[R]`. **Discrepancy CLOSED 2026-08-19** — the alignment memo was delivered, ScienceStanley flipped the title, and this vault **re-probed rather than took the report**: `stanley.science/projects/rttp-stanford` now serves "Head of AI" ×1, and **"Lead AI Architect" returns 0 across `/`, `/about`, `/projects/`, and the project page** `[D live probe 2026-08-19]`. The two public surfaces agree. **P2.6 re-check discharged early; S4 cleared.** | — | [D][R] |
| R-109 | / movement band | "You already do the first half of this. The README that explains the project…" | verified | A design claim about the standard, not a network-behaviour claim — no tense exposure. Lands Berthier's "you already do X" item at the manifesto, where the memo placed it. Sibling paragraph; **R-94's lyric byte-untouched**. | — | [D] |
| **R-18** *(rewritten)* | / hero proof | "74 vaults — every one of them on a single computer, ours. 15 are joined by 14 declared relationships; the rest stand alone." | **verified** | Replaces the borrowed-trust subnetwork roll-call. Counts derived from `network_state.ts`. **This is §7.3's "line of sight" requirement discharged**: the fold now states the operator-federation fact instead of leaning on four subnetworks whose vaults are all pending. | — | [D] |
| R-110 | / registry band | "All of them run on one computer — the state of the network says whose, and what that means." | verified | Same fact as R-98, placed at its second point of exposure, because §7.3 wants the distinction made where the number is made. | — | [D] |

### §7.3 Rows re-verified, unchanged

- **R-58** (`/about`, "aDNA is stewarded today by one person…") — **byte-intact**, confirmed against
  the built output at O3. This mission rewrote the card around it, which is precisely the scenario
  its fixture `why` was written to catch.
- **R-94** (the movement-band lyric) — byte-intact; the new reframe is a sibling paragraph.
- **R-59** (the Cederroths) — unchanged, now with a *recorded* consent basis rather than an assumed
  one (`consent_record.md` §2). Directive §7's halt condition is **satisfied, not tripped**.
- **R-15** ("opening progressively") — reused verbatim in the horizon block; the forbidden gloss
  ("the open coordination protocol") appears nowhere on either new page.

### §7.4 Counts

| Class | §5.1 | P1.1 (§6) | **After P1.2** |
|---|---|---|---|
| verified | 52 | 56 | **69** |
| verifiable | 14 | 14 | 14 |
| unsupported | 19 | 0 *(adjudicated)* | 0 |
| FALSE (S1) | 8 | 0 *(resolved)* | **0** |
| **Total adjudicated** | 93 | 97 | **110** |

**Zero FALSE, zero unsupported, and the last structural debt (R-62) discharged.** The register's own
verdict at §5.4 was that *"the site already knows how to tell the truth about its scale"* and that
the defects were where the marketing stratum diverged from that house style. As of P1.2 the house
style has the fold.

*Register reconciliation cadence unchanged (monthly, directive C.4). Next full re-fetch: P2.6
midscore — where R-108's title discrepancy is scheduled for re-check.*

### §7.5 O3 remediation — what two independent reviews found (2026-08-18)

A **hostile cold-read** (fresh agent, scoped to the two new surfaces + the four changed blocks, with
live link probes) and a **persona ranker** (3 adopters × 6 dimensions + 2 reviewer lenses) ran
independently at O3. **They converged on the same two S1 defects**, which is the signal worth
recording: the pages whose thesis is *"check everything we say"* were shipping claims that fail
precisely when checked.

| # | The claim as shipped | Why it failed | Disposition |
|---|---|---|---|
| 1 | *"Three checks, none of which require taking this page's word for it"* | All three were artifacts served by the page being authenticated — a footer link, a metadata string, the page's own structured data. **A clone copies all three.** Check 3 was additionally FALSE: it claimed the structured data lists "the properties above" when `sameAs` deliberately carries two org-level identities. The O2a narrowing was correct; the prose was never re-read against it | **Rewritten** around the address bar — the one check a clone cannot pass — with the other two demoted to corroboration and labelled copyable |
| 2 | *"Every entry was opened from outside, logged out, on the date shown"* | False for **4 of 13** entries: machine surfaces render no `Checked` row, because a same-origin path has no outside to be checked from | **Scoped** to domains/organizations/repositories |
| 3 | `src/data/vaults.json` | No such path at repo root — the real one is `site/src/data/…`. On the section titled *"How to check this page"*, at the one step where the reader does work | **Corrected**, hyperlinked to blob URLs, all four probed 200 |
| 4 | *"open an issue"* | Pointed at the clone-and-run image, not the repository the site and its data live in | **Repointed** |
| 5 | *"One is private"* | Unevidenced: a logged-out 404 is indistinguishable from deleted or renamed | **Reduced** to the observable claim |
| 6 | *"There is no aDNA account on any social platform"* | Universal negative about every platform on earth; contradicted by its own next sentence | **Cut** (R-101 re-quoted) |
| 7 | *"Everything legitimate is on this list"* | Contradicted 40 lines later, and by `/about` linking stanley.science | **Scoped** (R-100 re-quoted) |
| 8 | *"a place to be shared"* (manifesto) | Promised a submission route that does not exist — no intake form, no documented path, all vaults the operator's own | **Rewritten** |
| 9 | *"run by that subnetwork"* (worldgeno.me) + the `not ours` badge | Both implied an independent operator; that vault runs on the same single computer. The binary badge was the design error | **Split**: a `sameAsExcluded` flag for machines, a specific `ownerNote` for readers |
| **10** | **The Wilhelm Foundation filed under "What is not ours" as independent** | **`/about` names the operator as Head of AI at the Foundation.** A reader comparing the two pages finds the conflict *the site itself supplied* — which reads as selective disclosure and costs more than the fact it hides | **Related-party disclosure on both pages** → **R-111** |
| 11 | `heroGraphCaption="15 connected vaults · 14 relationships"` | A hardcoded literal **two lines from the derived proof sentence, in the same component**, agreeing with the data only by luck — the exact drift class `network_state.ts` was written to kill | **Derived** |

**Ranker: 3.61** against a 4.0 target — but the shape of the miss validated the campaign thesis.
**Credibility 4.50 · Tone 4.50**: zero apology constructions found, and all three personas trusted
the project *more* after reading. The failure was **Actionability 2.50** — the pages converted
skepticism into trust and then dead-ended at the footer. Remedied by answering the bus-factor
question the disclosure raises (a single point of failure that is *bounded*: MIT-licensed, public
git, nothing on a server we control, every vault keeps working if the operator stops) and by adding
real exits.

**The pattern both reviewers named**, worth carrying into P2: the failures clustered as (a) *a second
party's name doing credibility work the network has not earned* and (b) *verification instructions
that break when a reader actually follows them*. Both are cheap to fix and expensive to be caught
on — **because the page invited the check**. A page that asks to be verified is held to a standard
an ordinary page is not, and that is the trade this campaign accepted deliberately.

### §7.6 P1.2 close — the re-rank, and the two claims it caught (2026-08-18)

The mission's own `verification_method` required **ranker ≥ 4.0**; O3 measured **3.61** and never
re-ran after the remediation aimed at that miss. This addendum records the re-run. Full instrument
and per-persona reasoning: `artifacts/p1_2/rerank_record.md`.

**Result: 4.11 pre-fix → 4.22 post-fix. Criterion MET** (and met before the fixes as well as after —
the fixes were taken because the instrument named them, not because the score needed them).

| Dimension | P1.2 (3.61 run) | Re-rank | Note |
|---|---|---|---|
| Credibility | 4.50 | **4.67** | held, then +F1 |
| Tone | 4.50 | 4.50 | held exactly |
| Actionability | **2.50** | **4.00** | the dimension the remediation targeted |
| Findability | *not recorded* | 3.83 | not comparable |
| Comprehension | *not recorded* | 4.50 | not comparable |
| Relevance | *not recorded* | 3.83 | not comparable |

**Only the first three rows are a true comparison.** The 3.61 run recorded neither its persona set
nor three of its six dimensions, and two of the three it did name (*Credibility*, *Tone*) are not in
the canonical `skill_decadal_aar` six — so it used a modified instrument that was never written
down. The aggregate delta is indicative, not measured. **An unrecorded measurement is a number
without provenance (convention 2), and it makes its own successor un-runnable** — the re-rank
therefore states its instrument in full.

#### New adjudicated rows

| # | Surface | The claim | Class | Why | Severity | Tag |
|---|---|---|---|---|---|---|
| R-112 | `/about` closing band | *"a real Founding Architect, a real anchor partner, **real public-good work**"* | **unsupported → rewritten** | The **R-28/R-62 claim family's second recurrence**, unqualified, fifty lines below the band *this same mission* rebuilt to stop asserting it. R-28 was lowered on `/` (→ "are taking shape around"); its `/about` sibling was never adjudicated. Band 4 now *shows* the state row by row — 4 subnetworks declared, 2 with anything openable, one of those same-orbit and the other one-contributor-ours — and the closing band asserted past it. The trailing *"Real stewards grow the network"* asserted stewards the same page says do not exist yet: **cut, not softened** | S2 | [D] |
| R-113 | `/canonical-properties` | *(absent — the page had no exits)* | **gap → fixed** | The page dead-ended at the footer while its twin, built in the same mission and sharing its scaffold, closed with five real exits. **Both reviewer lenses found this independently.** Same defect class as the original Actionability 2.50, surviving on the page the remediation did not revisit. A reader who has just satisfied themselves the site is genuine is at the point of highest intent; the page was spending it on a full stop | S2 | [D] |

Both are pinned in `tests/gates/fixtures/claim_register.json` and **red-proven**: injecting the exact
regression each row exists to catch turns those two rows red and nothing else. The R-28/R-62 family
has now recurred twice, which is the reason it is gated rather than merely corrected.

**What generalizes** (carried to P2): *a rebuilt band does not rebuild the page* — **grep the claim
family, not the component**; and *paired pages need paired reviews* — when two surfaces ship
together and share a scaffold, a fix to one is a hypothesis about both.

**Not fixed here, logged with provenance for P2.2 (⛩ DP5):** neither disclosure surface routes to
`/compliance/` or `/enterprise/`, and the one org-scale exit ("be the second independent node")
points at `/community/`, which is human-only under aDNALabs ADR-025. That is the Enterprise
Architect's 3.0 on both Actionability and Findability, and it is structural — an IA decision, not a
sentence.

---

### §7.7 — P2.4 registry redesign: the tier vocabulary and its caveat (2026-08-19)

The registry index moved from class-first to **tier-first** (⛩ variant A). Three of the new rows are
copy this mission authored; the fourth is a claim the page *stopped* making. All four ship derived,
not typed — every count in them is read from `vaults.json` at build time (KW-14) and asserted by
**gate-35**.

| # | Surface | The claim | Class | Why | Severity | Tag |
|---|---|---|---|---|---|---|
| R-114 | `/vaults` hero | *"74 context graphs — which is not 74 live projects. 7 are being worked in today, 10 are chartered, and 57 are named places with a governance skeleton and little else."* | **verified** | Every number interpolated from the registry at build time; the split is `status` `active`/`pending`/`genesis`+`genesis_stub` = 7/10/57, verified against `vaults.json` `[D]`. The sentence exists to disarm the reading the bare count invites — anti-pattern **7.4** (*quantity of entries is not evidence of network health*) answered in the first line a stranger reads, rather than in a caveat further down | — | [D] |
| R-115 | `/vaults` caveat band | *"These stages are self-declared. Each vault reports its own, and the registry has nothing to corroborate it with — no build status, no commit feed, no external check."* | **verified** | Measured, not asserted: `github_url` populated on **1 of 74** rows, `docs_site_url` on **0 of 74**, `last_synced` on **24 of 74** with **18 sharing `2026-05-24`** `[D]`. There is genuinely nothing to check a stage against. ADR-052 §tiers.2 calls this the single most important caveat on the surface, so it ships as body text — gate-35 asserts it is readable text and not a `title` attribute, because a caveat you must hover to find is one the page is hiding | — | [D] |
| R-116 | `/vaults` + `/` tier badges | *in use · chartered · planned* (replacing raw `active` · `pending` · `genesis`) | **verified** | Derived from `status` alone by one shared `tierOf()`; no vault is hand-tiered. The words claim **stage, never quality** — no `flagship`, no `mature`, no `production`, gate-35 asserts their absence *from the tier vocabulary*. `pending` answered no question a stranger was asking and `genesis` was house jargon; the homepage was additionally rendering `vault.status` **raw**, so the two surfaces would have described one vault with two words | — | [D] |
| R-117 | `/vaults` (retired) | *"Every vault below is a real, governed context graph with its own place in the network — **most tended by a named agent**."* | **unsupported → cut** | 61 of 74 rows carry a persona `[D]`, so *"most"* was numerically true — and *"tended"* was not. It reads as present, continuous activity across a set that is **57/74 planned**, i.e. a governance skeleton and little else; a persona pin on a planned vault records who *will* tend it. Aspirational present tense over a self-declared field is **anti-pattern 7.5**, and it was the claim doing the most work on the old page. Replaced by R-114, which states the split instead of characterising it | S3 | [D] |
| R-118 | `/get-started/` step 2 | *(rendered terminal block)* `$ claude` → *"✓ Loaded CLAUDE.md (workspace router) … This is a fresh aDNA workspace … What is this project called, and what problem does it solve?"* | **unsupported → to fix at P2.5 O1** | The strings are **authored, not emitted**: searched `~/aDNA/.adna/` in full — **zero hits** for `Loaded CLAUDE.md`, `what problem does it solve`, or `no projects yet`; the only occurrence in the repository is this page `[D]`. The surrounding *prose* is fair — the agent does read the router and does walk you through a first project — but the block is formatted as a recording (`$` prompt, `✓` status line) and depicts an **onboarding interview that does not fire here**: `skill_onboarding.md` gates on a forked project directory and a fresh clone has none, so the root router's `skill_project_fork.md` path runs instead `[D]`. Campaign honesty law bars staged mockups presented as live, and this sits three inches above the one line the refusing cold-read reader said he trusted (*"nothing executed from the network" — right instinct, and it's true*). **Cut at O1 leaving a labelled gap**, not refilled — a real transcript arrives from O2's clean-machine run | S3 | [D] |
| R-119 | `/get-started/` prose (2 places) | *"scaffolded for you by the **onboarding interview**"* (the what-you'll-have callout) · *"**The interview scaffolds** `<your_project>.aDNA/`"* (step 2) | **FALSE → fixed at P2.5 O1** | Registered separately from R-118 rather than folded into it, because it is a **different assertion in a different place**, and cutting the code block would have left it standing twice. The fabricated *block* and this *prose* share one error — wrong agent, wrong order — but only the block was in the finding. **This is the same-diff hazard class no route grep finds**: the defect is in sentences, not in a route, slug, or count, so ADR-057's mechanical sweep cannot see it. Found by grepping the built output for the mechanism's own words after the block was removed `[D]` | S3 | [D] |

**R-118's mechanism, corrected at O1 — the interview is real, it is just second.** The row above
says the page *"depicts an onboarding interview that does not fire here."* Reading the vendored
files at O1 showed that is **too strong**, and the register should not carry an overstatement even
in service of a correct verdict. The standard's own router states *"After creation, the project's
own CLAUDE.md triggers a Socratic onboarding interview"* (`template_workspace_claude.md:102`), and
`skill_project_fork.md:216` has the fork **offer** it once the project exists. So the interview does
fire — after the fork, invited by it. What was actually wrong on the page was **agency and order**:
the interview does not *scaffold* the project, and it is not the first thing a fresh clone meets.
The fabrication finding is unchanged (the depicted strings still return zero hits across `.adna/`),
and the disposition is unchanged. Recorded because the campaign's law cuts both ways: a claim of
ours that overshoots its evidence is the same defect as a claim of the site's. `[D]`

Noted while there, out of scope to fix: the shipped image's own `.adna/CLAUDE.md` carries internal
campaign codenames (*Operation Distillery*, *Operation Palimpsest*) and `idea_upstream_` ids. They
reach the public site only because the tour publishes the file verbatim, and they are already in
every clone — but that the **image** carries them is an editorial finding for the next template
release. Workspace Standing Rule 1 bars fixing it from here; it is allowlisted with that rationale
in `leak_allowlist.json`, not baselined.

**A note on scope, from a false positive this mission produced.** gate-35's overclaiming check was
first written to scan the whole rendered page and failed on **"flagship"** — a word inside
`Harness.aDNA`'s own tagline (*"RareHarness = flagship Wilhelm clinical vertical"*). That is
registry data Hestia owns under **pt19**, and a vault describing itself is not this site awarding it
a rank. The rule §tiers.3 states is about **tier vocabulary**; it has no view on what a vault writes
about its own work. The assertion now reads the badges and tier headings only. *An instrument
reporting the surface broken deserves the same scrutiny as one reporting it healthy* — P2.3's lesson,
recurring on schedule.

---

## §8 · P2.6 O0 re-verify — the scheduled re-fetch, and the row that was never written (2026-08-19)

§7.4 scheduled this: *"Next full re-fetch: P2.6 midscore."* Live probes against production
(`tree=db4b34f`) 2026-08-19. Three rows re-confirmed, one **discharged early**, one **written for the
first time**, and the counts corrected.

### §8.1 R-111 — the row that was created but never given a row

**§7.5 item 10** adjudicated the Wilhelm Foundation being filed under *"What is not ours"* as
independent while `/about` names the operator as Head of AI at that same Foundation. Its disposition
reads **"Related-party disclosure on both pages → R-111."** R-111 was assigned an id and **never given
a table row** — `R-110` is followed directly by `R-112` throughout the register `[D]`.

The missing row and an unshipped fix turn out to be the same gap. Measured on production:

| Surface | Operator-role disclosure | Measured |
|---|---|---|
| `/about` | *"Stanley Bishop — Founding Architect, aDNA · Head of AI, Wilhelm Foundation · …"* | present — but this is **R-108's role line**, which pre-existed; it says nothing about the Rare Archive relationship. `related` / `not ours` → **0** `[D]` |
| `/canonical-properties` | *(the "not ours" page — `not ours` ×2)* | **`Head of AI` 0 · `Stanley` 0 · `Founding Architect` 0 · `affiliat*` 0 · `disclos*` 0 · `conflict` 0** `[D]` |

So the page that files the Foundation's property as *"under their control, not ours"* discloses no
operator affiliation with that Foundation, and the page that states the affiliation never connects it
to the filing. **The related-party disclosure §7.5 item 10 called for is unshipped on both sides of the
comparison it was written to pre-empt.**

Registering it now, with the row it should have had:

| # | Surface | The claim | Class | Why | Severity | Tag |
|---|---|---|---|---|---|---|
| **R-111** | `/canonical-properties` + `/about` | *(absent — no related-party disclosure connecting the operator's Wilhelm Foundation role to the Rare Archive being filed as independent)* | **gap → open** | Adjudicated at P1.2 §7.5 item 10 with disposition *"related-party disclosure on both pages"*; the id was assigned, the row never written, and the remediation never shipped. The underlying reasoning is unchanged and is the register's own: *a reader comparing the two pages finds the conflict the site itself supplied — which reads as selective disclosure and costs more than the fact it hides.* Both facts are individually disclosed and true; what is missing is the **link** between them, on the page where a skeptical reader would look for it. Bears directly on **D7**, the campaign's binding constraint | **S2** | [D] |

**Why this survived three missions**: it is not a route, a slug, or a count, so ADR-057's same-diff
sweep is structurally blind to it (campaign CLAUDE.md §7); and it is an **absence**, so no grep for a
wrong string finds it. The only instrument that catches a disposition which never shipped is a register
whose ids are checked for continuity — which is what produced it here. **Routed** to the re-plan;
`/about` and `/canonical-properties` are P1.2 surfaces, so the fix is a Decade-2 copy item, not a
P2.6 one (this mission writes no `site/` changes).

### §8.2 Rows re-verified

| Row | Expected | Measured on production 2026-08-19 | Verdict |
|---|---|---|---|
| **R-34** | `/network` *"About five minutes"*, `[A]`, no recorded run | present ×1 `[D]` | **still open** — discharged or revised at O0b, never by copy |
| **R-63** | `/get-started` *"in about 5 minutes"*, `[A]`, no recorded run | present ×1 `[D]` | **still open** — same |
| **R-118** | fabricated terminal block cut at P2.5 O1 | `Loaded CLAUDE.md` **0** · `what problem does it solve` **0**; labelled gap (*"not yet recorded"*) present `[D]` | **fix holds** |
| **R-119** | false mechanism prose fixed at P2.5 O1 | `interview scaffolds` **0**; the surviving *"onboarding interview"* occurrence reads *"It **then offers to run** an onboarding interview…"* — the corrected agency and order from R-118's own correction note `[D]` | **fix holds** |
| **R-108** | `/about` title discrepancy, scheduled for P2.6 re-check | **discharged early 2026-08-19** by live re-probe; recorded in-row | **closed** |

**R-118 / R-119 objective-id repointing.** Both rows say a real transcript *"arrives from **O2's**
clean-machine run"* — P2.5's numbering. P2.5 closed at O1 with that criterion unmet, and the work
re-homed to **P2.6 O0b** (the run) and **O0c** (the fold). Read those references as **P2.6 O0b/O0c**.
The rows are otherwise unchanged.

### §8.3 Counts — derived, and corrected against §7.4

§7.4's *"Total adjudicated: 110"* was accurate after P1.2 and has been stale since §7.7 added six rows.
Recomputed by parsing the register's own table rows rather than carried forward `[D]`:

| Measure | Value |
|---|---|
| Physical table rows | **133** |
| **Unique ids** | **119** (10 `G-*` + 109 `R-*`, `R-11`…`R-119`) |
| Ids appearing twice (re-quoted in later addenda) | 14 — R-14, R-18, R-20, R-23, R-34, R-46, R-47, R-61, R-63, R-84, R-90, R-108, R-118, R-119 |
| Gaps in the `R-*` sequence | **0** — R-111 was the only one, and §8.1 closes it |

*Counted after this section was written, not before.* The first draft of this table read 127 rows / 9
duplicates — correct for the register as it stood one paragraph earlier, and wrong the moment §8.1 added
R-111's row and §8.2 re-quoted five existing ones. **A derived number typed into prose stops being
derived** (WebForge KW-14); re-deriving after the edit that changes it is the whole of the discipline.
Reproduce with a parse of `^\| *\*{0,2}(R|G)-\d+` over this file.

**Open by disposition: 3** — R-34, R-63 (both `[A]`, awaiting O0b), and R-111 (new, S2). FALSE: **0**.
Unsupported: **0**.

### §8.4 A measurement artifact this re-verify produced, recorded against ourselves

The first pass of §8.2 used `grep -c "$string"` against the served HTML and reported apparent
regressions on R-118 and R-119. **`grep -c` counts matching *lines*, not occurrences** — served HTML is
effectively one long line, so it returns `1` for "matched somewhere" and cannot distinguish one
occurrence from twenty. A `re.finditer` pass with context extraction showed both hits to be single,
legitimate, correct copy. The rows above are the corrected reading.

Recorded because the campaign's law cuts both ways, and because a register is only as good as the probe
behind it: **an instrument reporting the surface broken deserves the same scrutiny as one reporting it
healthy** — §7.7's lesson, recurring one mission later, this time against our own hand. Occurrence
counting with context extraction is now the register's probe idiom; `grep -c` on served HTML is not.

### §8.5 New rows — the cold-read re-test (O0c-a), verified

Three fresh-context synthetic cold-reads ran against the shipped funnel (`evidence/coldreads/*_p2_6.md`,
synthesis in `coldread_synthesis_p2_6.md`). Each reader was barred from the repository and had live HTTP
only. **Their output is `[D-syn]`; every row below was then re-probed directly and carries `[D]`.** A
synthetic reader may notice a thing; it does not get to assert one.

| # | Surface | The claim | Class | Why | Severity | Tag |
|---|---|---|---|---|---|---|
| **R-120** | `/` hero paragraph | *"…no server, no signup, **nothing leaves your machine**. Your context is just the notes, docs, and decisions you already keep — now shaped into a graph your agents can navigate, **and shared in the open**."* | **unsupported → open** | The grammatical subject of *"shared in the open"* is **"Your context"**. Read literally — how a first-time reader reads — the site promises your notes stay local and are published, in consecutive sentences. The intended referent is almost certainly the *standard*, not the reader's context; that is not what the sentence says. It sits in the 30-second zone, inside the paragraph carrying the site's strongest trust claim. The clinician cold-reader called the pair **disqualifying on its own** for anyone holding patient notes `[D-syn]`; both clauses verified verbatim on production `[D]` | **S2** | [D] |
| **R-121** | `/learn/what-is-adna` "Before and after" | *"Without aDNA: a lab's 200 files sprawl across Notion, Drive, and Git. Every session starts by pasting an outdated summary; last month's decisions get re-litigated; a new collaborator needs three days to orient."* | **unsupported → open** | Specific quantities (*200 files*, *three days*) under a **"Before and after"** heading, with no lab, no date, no source. **Weaker than R-118 and recorded as such** — there is no `$` prompt or `✓` line impersonating real output; it is an unlabelled hypothetical, not a forged recording. The finding is the **inconsistency of standard**: the campaign cut a fabrication one mission ago and published why, and a cold reader found the next one unaided, calling it *"the only thing that damages the credibility the rest of the site genuinely earns"* `[D-syn]`. Text verified verbatim `[D]` | **S3** | [D] |
| **R-122** | `/` + footer — the contribution funnel | *"Contribute on GitHub"* → `aDNA-Network/aDNA` | **gap → open** | The CTA target has **`CONTRIBUTING.md` 404 and `CODE_OF_CONDUCT.md` 404**; both exist (**200/200**) in `aDNA-Network/aDNA.aDNA`, reachable only via the small footer *"Edit this page"* link `[D, GitHub raw]`. The contributor documentation is real and good — it is behind the wrong door. Bears on **D9**, scored 2 at baseline with *"advertised mouth = two 404s"*; this is the same defect class surviving in a new location | **S2** | [D] |
| **R-123** | `/` badge *"MIT-licensed"* vs the docs repo | `aDNA-Network/aDNA.aDNA` — `license: null`, `LICENSE` **404**, `LICENSE.md` **404** `[D, GitHub API + raw]` | **unsupported → open** | The badge is **true of the image repo it links to** (`aDNA-Network/aDNA` → MIT `[D]`), so this is not a false badge. The defect is that *"Edit this page"* routes a contributor's PR into the **unlicensed** repo — they are invited to contribute under no stated terms. The one finding in this batch with a legal edge rather than an editorial one; a contribution accepted there has no inbound license | **S2** | [D] |
| **R-124** | `/privacy` + `/security` | *(absent — no clinical or regulatory posture of any kind)* | **gap → open** | **0 occurrences** on both pages for every one of: HIPAA · GDPR · PHI · de-identif\* · IRB · consent · patient · clinical · health `[D]`. Meanwhile `/` mentions *rare* ×15, *undiagnosed* ×2, *Wilhelm* ×3 `[D]`. Stated fairly: aDNA is a file-layout convention and *"nothing leaves your machine"* is nearly the whole answer — the defect is **routing, not policy**. A clinician arriving through the site's own rare-disease framing, asking the first question her profession obliges her to ask, finds no page that acknowledges the question exists `[D-syn]` | **S3** | [D] |

> **Annotation (P4.5a, 2026-08-20).** R-124's homepage figures above (*rare ×15 · undiagnosed ×2 ·
> Wilhelm ×3*) were re-probed and have moved to **×18 · ×2 · ×5** `[D]`. They were true when measured;
> registry-driven copy moves underneath a hand-counted figure. Left as-written, corrected in **§9.4**.
> R-124's own disposition changed too — **deferred out of P4.5a**, see §9.3.

> **⛔ SUPERSEDED 2026-08-20 by ⛩ DP6 ⊳ D-C — kept, never deleted (SO-6).** The paragraph below states
> that this finding is *"not filed as a copy defect"* and that the live question is *"routed to the P2.6
> re-plan."* Both were true when written and are false now: the re-plan **ruled it**
> (`p2_replan.md:285-291` — *"cut it from the hero… Owner: P4.5a"*), and it **is** filed, as **R-125** in
> §9 below. Read what follows as the record of *why it went one mission unregistered* — not as its status.
> This heading is exactly the shape §8.1 warned about: *adjudicated, assigned an id, never given a row.*

**Not registered — the embargo case.** *"Lattice Protocol"* is named in the homepage hero (*"built on
the Lattice Protocol — the coordination layer, opening progressively"*) and defined **nowhere**: the
glossary returns **0** for *lattice*, and `/glossary/lattice` + `/glossary/lattice-protocol` both **404**
`[D]`. Two of three cold-readers flagged it. It is **not filed as a copy defect** because campaign
constraint 9 — the **counsel embargo** — forbids publishing or linking protocol material until D-8 rules,
so the term *cannot* be defined on the site today. The live question is therefore not *"define it"* but
*"should the hero name a term the embargo forbids explaining"* — a decision, routed to the P2.6 re-plan.

**Open by disposition after §8.5: 8** — R-34, R-63 (awaiting O0b) · R-111 (S2) · R-120, R-122, R-123
(S2) · R-121, R-124 (S3). FALSE: **0**. The register's totals in §8.3 are superseded by §8.6.

### §8.6 Counts — re-derived after §8.5

| Measure | Value |
|---|---|
| Physical table rows | **138** |
| **Unique ids** | **124** (10 `G-*` + 114 `R-*`, `R-11`…`R-124`) |
| Gaps in the `R-*` sequence | **0** |

Re-derived, not carried — the same parse as §8.3, run again because §8.5 changed the input. This is the
second time in one mission that a typed derived count went stale inside its own commit; the discipline
is not "count carefully once", it is **count last**.

---

## §9 · P4.5a addendum — the row that was owed, and one that leaves (2026-08-20)

Written as the **first act of P4.5a**, the mission ⊳ D-A ruled to the front of Decade 2. The re-plan named
this step explicitly (`p2_replan.md:500-504`): P4.5a *"inherits four registered rows and one unregistered
one, which is precisely how R-111 went missing for three missions."* Every row below was **re-probed live
against production at execution time** (campaign convention 12), not quoted forward from the 2026-08-19
O0c-a probe — using the register's own idiom (`re.finditer` with context extraction over served HTML, never
`grep -c`, which counts *lines* and served HTML is one line).

### §9.1 New row — the ⊳ D-C hero finding, finally registered

| # | Surface | The claim | Class | Why | Severity | Tag |
|---|---|---|---|---|---|---|
| **R-125** | `/` hero trust-links — and `/network`, `/commons`, `/vaults`, which share the same `HomeHero` component | *"built on the **Lattice Protocol** — the coordination layer, opening progressively"* | **unsupported → cut** | A term named in the 30-second zone and **defined nowhere**. Re-probed 2026-08-20 `[D]`: `/glossary/` returns **0** occurrences of *lattice*; `/glossary/lattice`, `/glossary/lattice/`, `/glossary/lattice-protocol`, `/glossary/lattice-protocol/` are **404 ×4**. Flagged by **2 of 3** synthetic cold-readers at O0c-a `[D-syn]`, then re-probed here `[D]`. It is **not FALSE** — it is *unexplainable*: campaign constraint 9, the **counsel embargo**, forbids defining or linking protocol material until D-8 rules, so the term cannot be repaired by adding a definition. Hence `cut`, not `fix`. **⛩ Ruled at DP6 ⊳ D-C** (`p2_replan.md:285-291`), owner **P4.5a**, **reversible the moment counsel rules at D-8**. **Spread, measured not assumed**: the sentence is hardcoded in *both* arms of `HomeHero.astro`'s `graphLed` branch (`:230` graph-led, `:349` not), so it renders **×1 on each of four surfaces** — `/`, `/network`, `/commons`, `/vaults` — all 200, all verified `[D]`. **Severity S2 is a first assignment** — no prior file assigns ⊳ D-C an S-level — calibrated against the two nearest rows: **R-15** (the identical sentence, `unsupported`, **S2**) and **R-120** (the other 30-second-zone defect, **S2**) | **S2** | [D] |

**R-125's boundary, measured after the cut and stated so nobody re-sweeps it.** Post-fix, the term is
**0 on all four HomeHero surfaces** and survives in exactly **two** built pages, both deliberately left
`[D]`:

1. `/learn/tutorials/exchange-adoption-path/` — a deep tutorial that names the term inside an explicitly
   **TAUGHT-AS-DESIGN** block and says in its own voice that *"the Protocol repo itself is
   pre-public-launch."* D-C's reasoning is *"a term you may not explain does not belong in the first
   sentence a stranger reads"* — this is neither the first sentence nor unexplained.
2. `/get-started/what-your-agent-reads/skill-onboarding/` — **the vendored `.adna` file, rendered
   byte-exact at a verified pin** (P2.5 O1, drift-gated by gate-36). **This one is not editable and must
   not be "fixed"**: the page's entire claim is *these bytes came from that commit*, so altering the text
   would falsify the page and turn its own drift gate red. A copy edit is the wrong instrument here.

> **⚑ Finding routed onward, NOT actioned here (out of P4.5a's ruled scope).** That vendored file
> publishes *"the **Lattice Protocol marketplace**… coming soon"* on a public surface. Campaign constraint
> 9 forbids *publishing or linking protocol material* until D-8 rules, and this is protocol material
> reaching a reader through a verbatim-vendoring pipeline that no copy review covers by construction —
> the tour republishes whatever `.adna` says. It is also a **forward promise with no date**, the R-15
> class. Not fixed here because the fix is not a copy edit: it is either an upstream `.adna` change
> (`skill_template_release`) or a tour-selection change, and both are decisions rather than corrections.
> **Owner: the operator to route** — P3.5 (D9/funnel) and P4.5b (voice) both plausibly touch it.

### §9.2 R-15 — superseded by R-125, and said so rather than closed quietly

**R-15** (`:54`) carries the same sentence with the disposition *"Honest **relative to** R-14; should become
the only phrasing."* That judgment was correct in its own frame — it ranked this phrasing above the retired
FALSE gloss — but ⊳ D-C moves the baseline: the question is no longer *which* protocol phrasing is honest,
it is whether the hero names an unexplainable term at all. **R-15 is superseded by R-125**, not
independently resolved, and it is recorded here rather than allowed to lapse silently when the cut lands.
The operator ruled the cut covers **all four surfaces** with **term-free replacement phrasing** — the spec
link survives, only the embargoed term goes — so R-15's live text is removed by the same edit.
**Consequence to state plainly:** a row outside P4.5a's four inherited rows is being disposed of by
P4.5a's work. That is recorded, not absorbed.

### §9.3 R-124 — assessed, and **deferred out of P4.5a** for the reason its own caveat predicted

The re-plan attached an escape hatch (`p2_replan.md:214-217`): R-124 *"needs an audience decision before it
needs copy"*, and if so it **drops back out of P4.5a and is stated as deferred — not silently fixed with copy
that presumes an answer nobody has given.** Assessed at execution:

- The absence re-confirms `[D]` — `/privacy/` and `/security/` both return **0** for every one of
  HIPAA · GDPR · PHI · de-identif\* · IRB · consent · patient · clinical · health.
- §8.5 frames the defect as *"routing, not policy."* **Probed, that framing does not survive**: routing
  requires a destination, and **no page on the site answers the question** — so any fix must *author* the
  posture rather than point at it.
- Authoring it means answering *"is this site for clinicians handling patient data?"* — a **positioning**
  claim, which is ADR-048 / P0.1 territory and ratified ground. Writing it inside a copy increment would be
  precisely the presumptive copy the caveat forbids.

**Disposition: R-124 is deferred out of P4.5a**, unchanged and still **open** at S3. It needs the audience
decision first; the owning mission is for the operator to route (P4.5b and P5.1 both touch positioning).

### §9.4 Freshness corrections to §8.5's derived counts

§8.5's R-124 row cites the homepage as *"rare ×15, undiagnosed ×2, Wilhelm ×3"*, measured 2026-08-19.
Re-probed 2026-08-20 on served HTML `[D]`: **rare ×18 · undiagnosed ×2 · Wilhelm ×5.** The originals were
true when measured — registry-driven copy moves underneath a hand-counted figure — so §8.5 is **annotated,
not rewritten**. The direction matters: the rare-disease framing the row complains about has grown, not
shrunk, since the row was filed.

### §9.5 Counts — re-derived after §9.1, and a parse defect found while deriving them

| Measure | Value |
|---|---|
| Physical table rows | **140** *(138 at §8.6, +1 for R-125, +1 for R-126)* |
| **Unique ids** | **126** (10 `G-*` + 116 `R-*`, `R-11`…`R-126`) |
| Gaps in the `R-*` sequence | **0** |

Derived by script after the last edit to this file, per §8.6's rule: *the discipline is not "count carefully
once", it is **count last**.*

> **And it had to be re-derived twice.** This table first read **139 / 125**, correct at the time §9.1 was
> written. **R-126** was then found and filed at O-E — *after* the counts — which invalidated them inside
> the same commit. That is the third occurrence of this exact failure in two missions, and it is the reason
> the rule is *count last* rather than *count carefully*: a derived figure is invalidated by any later edit,
> and "later" includes edits you did not plan to make. Re-derived here **after** §9.8 landed.

**⚠ A parse defect, found because the first derivation disagreed with §8.6 and was not published.** The
parse behind §8.3/§8.6 is described only as *"the same parse"* — it is **never written down**. A
reasonable stricter reading (require the id to be a closed table cell) returns **137**, not 139, because it
silently drops two rows whose id cell carries an annotation rather than a bare id: `:357`
`| R-23 / R-23b |` (a compound cell) and `:421` `| **R-18** *(rewritten)* |`. Both are real rows. The
figure published above uses the **looser, §8.6-comparable parse** so the delta against 138 means what it
appears to mean.

The lesson generalizes past this file: **an undocumented derivation is a number nobody can reproduce, and
two defensible parses of the same table differ by 2 rows here.** The two off-by-one-class row shapes are
recorded above so the next derivation can be checked rather than trusted. Filed as a follow-up for P4.4
(gate hardening): pin the parse in a script rather than in the phrase *"the same parse."*

### §9.6 Open by disposition — as at registration, before P4.5a's copy edits land

**Open: 9** — R-34, R-63 (awaiting ⛩ O0b) · R-111, R-120, R-122, R-123, **R-125** (S2) · R-121, R-124 (S3).
**FALSE: 0.** Supersedes the tally of **8** at §8.5. R-15 is not counted again: it is superseded by R-125
(§9.2), not separately open. **R-126 is not counted here** — it was found and fixed at O-E, after this
tally's cut-off, and never existed as open debt; it is stated in §9.8 and in the close tally below.

Of these, **P4.5a is scoped to close four** — R-111, R-120, R-121, R-125. **R-124 leaves the mission
deferred** (§9.3), and **R-122/R-123 belong to P3.5**, the next mission in the ruled order. This tally is
restated at P4.5a's close against what actually shipped, rather than assumed forward from here.

### §9.7 R-111 narrows to ONE surface — our own row outran its evidence

R-111 (`:612`) reads *"`/canonical-properties` + `/about`"* and asserts *"the remediation never shipped."*
Re-probed live 2026-08-20, **that is half wrong, and the half that is wrong is ours** `[D]`:

| Surface | Disclosure present? | Evidence |
|---|---|---|
| `/state-of-the-network/` | **✅ shipped** | *"Related-party disclosure: the person who operates this network also holds a role at the Foundation, so treat the relationship as a close one, not as an independent third party vouching for us."* |
| `/about/` | **✅ shipped** | *"Note the overlap named above: aDNA's Founding Architect also holds a role at the Foundation, so read this as a close relationship rather than an independent organisation vouching for us."* |
| `/canonical-properties/` | **❌ absent** | The Rare Archive row reads *"Legitimately connected to aDNA, and not controlled by it"* and *"In the Wilhelm Foundation's own GitHub organization, under their control, not ours"* — **0** occurrences of any related-party or affiliation language on the page |

**R-111's live scope is therefore `/canonical-properties` alone.** The `/about` half was remediated at the
P1.2 close and the row was never updated to say so. The gap that remains is the sharp one — it is the page
whose entire job is *"here is how you check we are who we say we are"*, filing the Foundation under
**"not ours"** while two sibling pages disclose that the operator holds a role there.

**Why this is recorded and not quietly narrowed.** The campaign's standing rule is that a claim of ours
which outruns its evidence is the same defect as one of the site's. R-111 was itself filed as the register's
cautionary tale — *adjudicated, assigned an id, never given a table row* — and the row written to fix that
then **overstated the defect for two missions**. Both failure directions are the same root cause: **the row
was never re-probed against the live page.** §9's rule (re-probe at execution, never quote forward) is what
caught it.

**Fixture note — the same id means two different things in two places.** `tests/gates/fixtures/claim_register.json`
pins `R-111` as a **`verified`** row on `/state-of-the-network`, asserting the shipped sentence stays put.
The register's R-111 is the **unshipped** half. Neither is wrong; they are the two faces of one finding, and
nothing said so until now. Read the fixture row as *"the disclosure that shipped must not vanish"* and the
register row as *"the disclosure that did not ship, now scoped to `/canonical-properties`."*

### §9.8 R-126 — every changelog entry displayed the wrong date, and the date depended on who built it

Found at O-E while shipping P4.5a's own changelog entry: the new `2026-08-20` entry rendered as
**"August 19, 2026"**. Probed across the whole page rather than assumed to be a one-off — **all four
existing entries were off by one too** `[D]`:

| Frontmatter `date` | Rendered before the fix | After |
|---|---|---|
| `2026-08-17` | August 16, 2026 | August 17, 2026 |
| `2026-08-18` | August 17, 2026 | August 18, 2026 |
| `2026-08-19` | August 18, 2026 | August 19, 2026 |
| `2026-08-20` | August 19, 2026 | August 20, 2026 |

| # | Surface | The claim | Class | Why | Severity | Tag |
|---|---|---|---|---|---|---|
| **R-126** | `/changelog` — every entry | *(the displayed release date, e.g. "August 19, 2026" for the entry dated `2026-08-20`)* | **FALSE → fixed at P4.5a** | `changelog.astro:35` called `toLocaleDateString('en-US', …)` with **no `timeZone`**. A frontmatter date parses to **UTC midnight**, and the format call then renders it in the **build machine's** zone — so a build from PDT (UTC-7) rolled every date back one day. **The rendered date was a function of where the build ran**: CI in UTC produced correct dates, a laptop produced wrong ones, from identical source. The same `<time>` element's `datetime` attribute used `toISOString()` and was always right, so the machine-readable and human-readable dates **disagreed on the same line** — and only the wrong one was visible. Fixed by pinning `timeZone: 'UTC'`; all five entries verified correct post-fix `[D]`. Blast radius measured, not assumed: `grep` finds **exactly one** date-formatting call site in `src/` (the other two `toLocaleString()` calls format line counts, not dates), so no other surface carried this | **S3** | [D] |

**Why it is filed FALSE rather than `unsupported`.** A date is a factual claim about when something
happened, and the page stated one that was wrong — not unverifiable, wrong. It is the register's own
category. It is also the **third** defect in this campaign whose root cause is a value being read in a
context different from the one it was written in — after the shallow-clone date resolution (P2.2) and the
`install_truth` pin frozen by its own idempotency guard (P2.5). *A timestamp with no zone is not a time.*

**Scope note.** This is not one of P4.5a's four ruled rows. It was fixed anyway because the mission was
**shipping into this exact surface** — publishing a new entry while knowing its date rendered wrong would
have been shipping a known defect to satisfy a scope boundary. One-line change, no new claim authored.

---

## §10 — P3.5: the funnel repair, and a finding that shrank when it was re-probed

### §10.1 R-122 narrows — the register outran its evidence for the second mission running

R-122 (`:681`) reads: *"The CTA target has **`CONTRIBUTING.md` 404 and `CODE_OF_CONDUCT.md` 404**; both
exist (**200/200**) in `aDNA-Network/aDNA.aDNA`."* Re-probed live at execution 2026-08-20, per convention
12, before any repair was designed `[D, GitHub raw + API]`:

| Path | `aDNA-Network/aDNA` (the CTA target) | `aDNA-Network/aDNA.aDNA` |
|---|---|---|
| `CONTRIBUTING.md` (root) | **404** | 200 |
| **`.adna/CONTRIBUTING.md`** | **200** ← *the row missed this* | n/a |
| `CODE_OF_CONDUCT.md` | **404** | 200 |
| `LICENSE` | 200 (MIT) | **404** |
| `.github/ISSUE_TEMPLATE/` | present — `bug_report` · `change_proposal` · `config` | the same three |

**Half of R-122 is wrong.** The image repo's contributor guide is not missing; it sits at
`.adna/CONTRIBUTING.md`, one directory below the three locations GitHub's contributor UI reads (root,
`.github/`, `docs/`). It is present and invisible, which produces the identical reader experience and a
**different repair**: promote a file, do not write one. Only the **CoC** is genuinely absent there.

So the finding is not *"the contributor documentation is behind the wrong door."* It is: **one file is
behind the wrong door, and one file does not exist.** R-122's severity (**S2**) and its disposition
(**open**) are unchanged — it was right that the funnel is broken and right about why it matters. It was
wrong about what is missing, which is the part that determines the fix.

**This is the second consecutive mission in which a re-probe shrank an inherited row** — P4.5a's §9.7 cut
R-111 from two surfaces to one. Two instances is a pattern worth naming: *a row is written once, at the
moment of discovery, and then quoted forward by every mission that inherits it.* The probe costs minutes.
Both times it changed the work.

**A third correction, of a claim this register never made but the mission nearly did:** neither repo lacks
issue templates. Recorded so it is not re-derived, and so no future row asserts it by inference from
"the funnel is broken."

### §10.2 New rows

| # | Surface | The claim | Class | Why | Severity | Tag |
|---|---|---|---|---|---|---|
| **R-127** | `aDNA-Network/aDNA` → `.adna/CONTRIBUTING.md`, §"Code of Conduct" | *"This project **will adopt** the Contributor Covenant v2.1 as its Code of Conduct. The `CODE_OF_CONDUCT.md` file **will be added in a future update**."* | **stale → fixed at P3.5** | A promissory claim in the contributor-facing document, and it is **stale in both directions at once**. In the **docs repo** the promise is simply out of date: `CODE_OF_CONDUCT.md` sits beside it at 200, and that file's own header says it *"closes the reference both documents made to a `CODE_OF_CONDUCT.md` that had not yet been added"* — so one file announces the debt discharged while its neighbour still promises it `[D]`. In the **image repo**, which is the door the site advertises, the promise is *accurate*, which is worse: the CoC is genuinely 404 there. Future tense in a governance document is the campaign's anti-pattern 7.5 with a legal edge — a contributor is asked to agree to standards published nowhere. Discharged by shipping the CoC to the image repo (⊳ D-J) and by the fact that the sentence then becomes true of both | **S3** | [D] |
| **R-128** | `aDNA-Network/aDNA/LICENSE` vs every other identity surface | *"Copyright (c) 2026 **Lat Labs**"* | **inconsistent → open** | The MIT licence names a copyright holder that appears **nowhere else**: `PUBLISHER` is `'aDNA Network'` (`src/data/canonical.ts:37`), the footer renders *"© 2026 aDNA Network"*, the org vault is **aDNA Labs**, and `grep -rn "Lat Labs" site/src/` returns **0 hits** `[D]`. It reads as a survival from the pre-pivot LatticeLabs era. **Not fixed here, deliberately**: ⊳ D-D ruled *"MIT, matching the image repo"*, and the staged `LICENSE` is therefore **byte-identical** to the image's (md5 `bd83bba167223a594152917038063171`, verified both sides) — so the ruling is satisfied literally. Correcting a copyright holder is a legal act and not an agent's call; **`#needs-human`**, routed to the operator with the same reasoning ⊳ D-D itself used | **S3** | [D] |

### §10.3 What P3.5 shipped, and what it claims

The proposal surface authors new public claims, so they are registered rather than assumed benign. Each is
**derived at build time or checked by `gate-37`**, which is what distinguishes them from the class this
campaign exists to remove.

| # | Surface | The claim | Class | Backing | Severity | Tag |
|---|---|---|---|---|---|---|
| **G-11** | `/community/proposals/` | The occupancy figures — *"There are N proposals on record"*, the next number, and the per-state counts | **verified** | Derived from the collection at build; `gate-37 §3` asserts every state count equals the number of proposals actually holding it, and `§7` asserts the JSON index and the archive describe the same set. No count is typed | — | [D] |
| **G-12** | `/community/proposals/aep-1/` | AEP-1's status is **`final`** | **verified** | ADR-055 §4 defines `final` as *enforced*, and `gate-37 §4` fails if a `final` proposal names a conformance check that does not exist on disk. AEP-1 names `gate-37` itself, so the claim is self-checking: delete the gate and the claim fails with it | — | [D] |
| **G-13** | `/community/proposals/` + `/community` | *"Only a human can ratify"* and *"every proposal discloses whether an agent drafted it"* | **verified** | `authored_by_agent` is a **required** schema field (not optional), and `gate-37 §5` fails if anything reaches `accepted`/`final` without a named ratifier, or if a `draft`/`review` row claims one | — | [D] |
| **G-14** | `/community/proposals/` | *"There is no published median review time here because none has been measured yet"* | **verified** | The honest-absence claim. `gate-37 §8` asserts `median_review_days` is `null` in the machine index **and** that the page publishes no numeric median — so the absence cannot be quietly filled in later without the gate being edited deliberately | — | [D] |

**One claim was deliberately not made.** The surface says nothing about how many people participate, how
fast proposals are reviewed, or how many contributors exist. ADR-055 §8 requires the page to state its own
youth; on ship day the archive holds **2** proposals, one of which is the process itself, and the page says
so.

### §10.4 A gate that already knew the answer

`gate-14`'s **C-1** rule — *proof-links must point at the public image `aDNA-Network/aDNA`, not the dev
vault* — **failed this mission's first build**, on a link to the docs repo's `CONTRIBUTING.md`. It was
right, and it was answering R-122 before the register did: if the site may not route contributors to the
dev vault, then the contributor documentation **must** live in the image repo. The ruled repair and the
existing gate agree, and the gate said so first.

This is the P4.5a finding running the other way. There, a gate was **coupled to a defect** and had to be
inverted rather than deleted. Here, a gate was coupled to a **rule the register had not yet applied**, and
the correct response was to obey it. *Read a failing gate for what it knows before deciding it is in the
way.*

### §10.5 Counts — derived last

| Measure | Value |
|---|---|
| Physical table rows | **146** |
| **Unique ids** | **132** (14 `G-*` + 118 `R-*`, `R-11`…`R-128`) |
| Gaps in the `R-*` sequence | **0** |

Derived by script after the final edit to this file, per §8.6's *count last* rule and §9.5's warning that
"later" includes edits you did not plan to make. The parse is the **looser, §8.6-comparable** one (§9.5),
so the delta against 140 is comparable to the deltas before it; pinning that parse in a script remains the
P4.4 follow-up.

### §10.6 Open by disposition — after P3.5

**Open: 7** — R-34, R-63 (awaiting ⛩ O0b) · R-111 (S2, `/canonical-properties`, unshipped half) ·
**R-122, R-123** (S2 — closed **only** when the ⊳ D-J pushes land; open until then) · R-124 (S3, awaiting
the audience call) · **R-128** (S3, `#needs-human`, the copyright holder).
**FALSE: 0.**

Supersedes §9.6's tally of 9. Discharged since: **R-120, R-121, R-125** (P4.5a) and **R-127** (here, on
the same push as R-122). R-126 was never open debt (§9.8).

### §10.7 Close — the three rows discharged, verified live

R-122, R-123 and R-127 close on **outward acts**, not on edits, so they are verified against the
public internet rather than against the tree. The opening probe matrix (§10.1), re-run after both
pushes, 2026-08-20 `[D]`:

| Path | `aDNA-Network/aDNA` | `aDNA-Network/aDNA.aDNA` |
|---|---|---|
| `CONTRIBUTING.md` (root) | **404 → 200** | 200 |
| `CODE_OF_CONDUCT.md` | **404 → 200** | 200 |
| `LICENSE` | 200 | **404 → 200** |

GitHub's own API now reports `license: MIT` for the docs repo, where R-123 recorded `license: null`
`[D]`. The staged file was byte-identical to the image's (md5 `bd83bba167223a594152917038063171`,
verified both sides before the push), so ⊳ D-D's *"matching the image repo"* is literally true and not
merely intended.

**R-122 closed** · **R-123 closed** · **R-127 closed** — the promise *"the `CODE_OF_CONDUCT.md` file
will be added in a future update"* is now true of both repositories, which is the only way to discharge
a promissory claim without editing the promise.

**Live probe: 26 FAIL → 0.** Pre-deploy 3 PASS / 26 FAIL, post-deploy **29 PASS / 0 FAIL**
(`artifacts/p3_5/probe_predeploy_red.txt` · `probe_postdeploy_green.txt`). The three pre-deploy passes
were the off-site files, already pushed by then — which is what demonstrates the probe distinguishes
live-true from live-false rather than failing at everything.

> **Two vacuous passes were found in the probe by its own red run**, and are recorded because the
> lesson outlives them. `json?.count === json?.proposals?.length` evaluates `undefined === undefined`
> against a site with no index at all, and *"the archive publishes no median"* is trivially true of a
> page that returns 404. Both **passed against production before the feature existed**. A red run is
> not only evidence that the fix is needed — it is the only moment an assertion's vacuous branch is
> actually exercised. Both were guarded before the deploy.

### §10.8 Open by disposition — final, after the P3.5 deploy

**Open: 4** — R-34, R-63 (both `[A]`, awaiting ⛩ O0b) · R-111 (S2, `/canonical-properties`, the
unshipped half) · R-124 (S3, awaiting the audience call) · R-128 (S3, `#needs-human`, the copyright
holder).

That is **5**, not 4 — and the miscount is left visible rather than silently corrected, because it is
§9.5's warning landing for the fourth time in three missions: **a total typed beside the list it
summarises drifts from it the moment the list changes.** The list is the datum. **Open: 5.**

**FALSE: 0.** Supersedes §10.6's tally of 7. Discharged since: **R-122, R-123, R-127**.

---

## §11 — R-128 closed, and the scoping grep that was wrong twice

### §11.1 The ruling, and its reversal recorded

**⛩ Operator, 2026-08-20 (wind-down session): *"No latlabs at all."*** This **reverses** the disposition
taken at the P3.5 push gate hours earlier (*"leave both, decide later"*), and the reversal is stated
rather than quietly applied — a register that silently overwrites its own dispositions is not a record.

Holder ruled **aDNA Labs**, which matches `aDNALabs.aDNA`'s own `display_name`. That vault's frontmatter
already carries `previous_names: [LatticeLabs, lattice-labs]` `[D]`, so *"Lat Labs"* was an **unrecorded
fourth variant** — which is why it read as stale rather than as a deliberate legal name.

### §11.2 The scope, and the error in deriving it

The sweep was scoped from a `grep … | head -20`. **The truncation hid files.** The scope put to the
operator was *"four live LICENSEs"*; the real MIT-copyright-holder class is **six**:

| # | File | Disposition |
|---|---|---|
| 1 | `aDNA-Network/aDNA/LICENSE` | ✅ → aDNA Labs |
| 2 | `aDNA-Network/aDNA.aDNA/LICENSE` | ✅ → aDNA Labs |
| 3 | `Exchange.aDNA/LICENSE` | ✅ → aDNA Labs |
| 4 | `LAVentureGraph.aDNA/LICENSE` | ✅ → aDNA Labs |
| 5 | **`zeta.aDNA/LICENSE`** | ✅ → aDNA Labs — **missed at scoping**, found by the verification grep |
| 6 | **`.adna/LICENSE`** | **NOT edited — Standing Rule 1 forbids modifying `.adna/`.** It is a downstream copy, synced *from* the image repo by `skill_template_release` step (e), so fixing #1 fixes this one **at the next template release**. Editing it directly would create drift the release would then overwrite |

**Why #5 was fixed without returning to the gate.** The operator's ruling selected a **principle** —
*live MIT copyright holders become aDNA Labs; the BSL Licensor is left alone* — and `zeta.aDNA` is
plainly in the first class. Applying the principle while flagging the changed input here is the pattern
this campaign already uses for a ruling whose inputs move after the signature. The **quoted scope
("four") is preserved verbatim above** beside the corrected count.

**The lesson is the campaign's own, landing again.** §9.5: *"count last"*, and *derive, never type*. This
time the defect was upstream of the count — **a truncated grep is a derived figure too**, and `head -20`
silently converted a complete answer into a confident partial one. Both the count *and the enumeration it
came from* have to be complete before either is quoted.

### §11.3 What was deliberately left standing

A purge that does not say what it spared reads as a purge that missed things. Remaining `"Lat Labs"`
occurrences workspace-wide: **74** `[D, derived after the edits]`, in three keep-classes:

| Class | Count | Why it stays |
|---|---|---|
| **BSL Licensor** — `Licensor: Lat Labs, Inc.` in `Jupyter.aDNA/what/lab/` + 4 `adna-lab` worktrees | 5 LICENSE files | A **named party to a commercial licence**, not a copyright line; `ADR_001_bsl_license.md` ties commercial terms to the name. `"Inc."` implies a registered entity, so the question is counsel's. ⛩ ruled **leave; route a memo** → `who/coordination/coord_2026_08_20_galileo_bsl_licensor.md` |
| **Package metadata** — `pyproject.toml` authors, `__author__`, Dockerfile `LABEL`, `team@latlabs.io` | — | Belongs to `adna-lab` / `lattice-protocol`; cross-vault, memo-not-edit (Rule 10) |
| **Historical records** — `.agentic/` ADRs, session completions, `AGENTS.md` | the bulk | **SO-6 archive-never-delete.** `skill_project_rename` names rewriting these as the §15 violation, and warns that a naive grep over-counts this defect *by an order of magnitude* — which is exactly what a 90-hit blanket purge would have been |

### §11.4 The row closes

| # | Surface | The claim | Class | Verification | Severity | Tag |
|---|---|---|---|---|---|---|
| **R-128** | the live MIT LICENSEs | *"Copyright (c) 2026 **Lat Labs**"* | **inconsistent → CLOSED 2026-08-20** | All six MIT-class files resolved: five rewritten to `Copyright (c) 2026 aDNA Labs` and **byte-identical** (md5 `b189a96420df57c630764b57ba7ff2f4`, all five), the sixth (`.adna/`) inheriting at the next template release per Standing Rule 1. **⊳ D-D still holds** — it ruled the docs repo *"MIT, matching the image repo"*, both moved together, so they now match **on a correct name instead of a stale one** | **S3** | [D] |

**Verification, stated at the strength it actually has.** The R-122/R-123 pattern is *verify an outward act
against the public internet, not the tree* — and here that is only possible for **two of the five** repos:

| Repo | Verification | Strength |
|---|---|---|
| `aDNA-Network/aDNA` · `aDNA-Network/aDNA.aDNA` | raw `LICENSE` re-fetched post-push; both read *aDNA Labs*; md5 parity confirmed both sides | **`[D]` public** |
| `zeta.aDNA` (**private** — API returns *Not Found* unauthenticated, raw 404) · `Exchange.aDNA` (Codeberg) · `LAVentureGraph.aDNA` (self-hosted `rd-forge`) | push accepted (`d079288..6e7eb2e`, `de778ad..6527f57`, `05e4f58..3fe62d8`) + local content confirmed | **`[D]` local + push-receipt** |

Recording the difference matters because the whole point of the R-122/R-123 pattern is that a tree can be
right while the world is wrong. For three of these repos that check is **unavailable, not passed** — and
writing "verified live" across all five would be the exact claim-inflation this register exists to catch.

### §11.5 Counts — derived last

| Measure | Value |
|---|---|
| Physical table rows | **147** *(146 at §10.5, +1 for R-128's close row)* |
| **Unique ids** | **132** (14 `G-*` + 118 `R-*`, `R-11`…`R-128`) — unchanged; R-128 was already registered at §10.2 |
| Gaps in the `R-*` sequence | **0** |

Derived by `artifacts/p3_5/derive_register_counts.py` after the final edit to this file — the script that
now pins the looser, §8.6-comparable parse, so the figure is reproducible rather than asserted. Run it
again if anything below this line changes.

### §11.6 Open by disposition — after the wind-down

**R-34 · R-63** (both `[A]`, awaiting ⛩ O0b) · **R-111** (S2, `/canonical-properties`, the unshipped
half) · **R-124** (S3, awaiting the audience call).

## §12 — R-129: a row that is well-formed and no longer true (registered 2026-08-21)

| ID | Surface | Claim | Verdict | Basis | Sev | Prov |
|---|---|---|---|---|---|---|
| **R-129** | `/vaults/forgejo/` | *renders* `status: genesis` | **FALSE — stale, not malformed** | `Forgejo.aDNA` has been a **running service since 2026-08-08** (ladder P0–P6 closed; other lanes depend on it daily), reported by its own persona Ilmarinen `[R]`. The registry whose claim is that it publishes real self-published context graphs is, on this row, publishing the opposite | **S2** | `[R]` |

**⛔ This vault cannot fix it, and must not try.** `vaults.json` is registry *data* — Hestia-owned,
operator-gated (**pt19**, convention 5). Staged as a data ask:
`who/coordination/coord_2026_08_21_rosetta_to_hestia_forgejo_row_stale.md`. Convention 5's exact shape:
*this campaign fixes projection code and stages data asks as memos.*

**Why it took a peer to find it, and what that says about this register.** The register catches
truncation, jargon and internal paths — every one of them detectable **from the copy itself**. It is
**structurally blind to a well-formed sentence that is simply no longer true**, because staleness is not
a property of the text. Ilmarinen's formulation, adopted as campaign convention 15:

> *a stale row and a broken row look identical from the outside, and only the named vault can tell you
> which one you have.*

There is already a `forgejo` row in this register for the truncated lede (*"Data-bearing ("*). Note what
that means: the register had **looked at this row and passed it** on everything it can see. The
truncation was the visible defect; the falsehood underneath it was not.

**⚠ Consequence for the FALSE: 0 claim below.** That count means *zero false claims this register has
found*, and it always did — but it has been read as *zero false claims on the site*. Those are different
statements, and R-129 is the instance that separates them. The count is not restated here; the
distinction is.

**The list is the datum; no total is typed beside it** — §10.8 left a miscount visible for exactly this
reason, and the fix is to stop writing the number, not to write it more carefully. **FALSE: 0.**

## §13 — P3.2: three new sentences, and the count that checks itself (registered 2026-08-21)

P3.2 put new prose on `/vaults`, in `llms.txt`, and in a new reference page — plus, for the first
time, **claims inside a JSON payload**. Every new sentence gets a row (the P1.2 rule).

| ID | Surface | Claim | Verdict | Basis | Sev | Prov |
|---|---|---|---|---|---|---|
| **R-130** | `/vaults` as-data note | *"`/vaults.json` serves all 74 entries and 14 relationships as JSON, with the same fields these pages render."* | **verified** | Both figures are **rendered from the projection**, never typed — `{vault_count}` and `{edges?.length}` are the same expressions the page's own stat strip uses. gate-17 G16 asserts `vault_count === vaults.length` and `edge_count === edges.length` against the served payload, so the sentence cannot outlive the data `[D]`. *"the same fields these pages render"* is the endpoint's construction rule, not an aspiration: `PUBLIC_VAULT_FIELDS` is the union of what `/vaults/[slug]` and the card display | — | [D] |
| **R-131** | `/vaults.json` → `about.versioning` | *"Breaking changes get a NEW versioned URL … The canonical `/vaults.json` follows the newest version only after that version has been served at its versioned URL for at least 90 days."* | **verifiable → unexercised** | A **forward promise about our own future conduct**, and the honest classification is `verifiable`, not `verified`: no breaking change has occurred, so nothing has tested it. Recorded in the same register-verifiable form ADR-056 clause 7 already carries. What *is* verified today is the mechanism the promise needs — a versioned URL exists and serves byte-identically `[D]` | **S4** | [D] |
| **R-132** | `/vaults.json` → `caveat` | *"Every entry is self-declared … The graph is a graph of declared relationships, not evidence of adoption."* | **verified** | Restates the `/vaults` page caveat ratified at P2.4 (ADR-052 §tiers.2) into the payload. Independently true of the data: `github_url` 1/74, `docs_site_url` 0/74, `last_synced` 24/74 with 18 sharing one date — there is nothing to corroborate a status against `[D]` | — | [D] |

> **⛩ LIVE-VERIFIED 2026-08-21** (`tree=861e871`, deploy `2026-08-22T00:29:33Z`). R-130/131/132 were
> registered against the **local preview build** while P3.2 sat undeployed under the operator's
> ship-scope ruling. All three are now measured on `https://adna.network`: `/vaults.json` **200**,
> 80,997 B, 74 vaults + 14 edges; `/api/registry.v1.json` **200** and `cmp`-identical; the `caveat`
> and `about.versioning` strings served as registered. **R-131 stays `verifiable → unexercised`** —
> deploying the mechanism does not exercise the promise, and moving it to `verified` because the
> endpoint went live would be precisely the up-move this register exists to prevent.

### §13.1 A claim class this register has not carried before

Rows R-131 and R-132 live **inside a JSON payload**, not in rendered copy. That matters for the
register's own coverage, and is worth stating rather than absorbing silently: **every prior row in
this file is a sentence in HTML.** A gate that greps the built pages — which is most of them — would
not have seen either row, exactly as gate-27 could not see the 221 `.md` twins when they arrived
(P3.1's finding) and cannot see `.json` today.

The endpoint is nonetheless the more dangerous surface for an overclaim, because a machine consumer
takes a field at face value and has no page context to read it against. Two consequences, both
acted on rather than noted:

1. `field_coverage` makes the payload's central quantitative claim **self-checking** — gate-17 G16
   recounts every entry against the rows it describes, so a narrated coverage number fails.
2. The **leak-lint gap is real and is routed, not closed here** — gate-27 scans `.html` and `.md`
   only (`gate-27-leak-lint.spec.ts:136`). Extending it to `.json`, with the machine enums
   (`org_graph`, `tbd_at_p0`, `genesis_stub`) scope-allowlisted as API keys while every other leak
   class still applies, is a **P4.4** item — that mission already owns the "gates that cannot see a
   whole surface class" work. Filed as **F-i**.

### §13.2 What P3.2 deliberately did not claim

**The D10 anchor is not claimed here.** The re-score belongs to P5.2 with fresh isolated scorers,
never to the mission that did the building — the same discipline P3.1 applied to anchor 4.

**Item 9 is not claimed closed.** Its `Dataset`-on-the-registry half is done; its *"vault entity
pages are generic `WebPage`"* half is untouched and recorded open in
`machine_eye_delta_p3_2.md`. The acceptance criterion said *the registry*, and the registry index is
what shipped.

### §13.3 Open by disposition — after P3.2

**R-34 · R-63** (both `[A]`, awaiting ⛩ O0b) · **R-111** (S2, `/canonical-properties`, the unshipped
half) · **R-124** (S3, awaiting the audience call) · **R-129** (S2, staged to Hestia — this vault
cannot fix registry data) · **R-131** (S4, unexercised by construction).

**The list is the datum; no total is typed beside it.** **FALSE: 0** — with §12's distinction still
standing: that is zero false claims *this register has found*.

---

## 14 · P3.3 rows — the homepage machine-door block (R-133+)

> Added 2026-08-21 at P3.3 O3. **⚠ These rows describe copy that is BUILT AND NOT DEPLOYED.** Until
> the deploy is recorded in [[machine_eye_delta_p3_3]], every row below is a claim about the tree,
> not about `adna.network`. The live homepage greps **0** for any of them `[D]`.

| # | Surface | Claim (quoted) | Class | Evidence/ground truth | Severity | Prov |
|---|---------|----------------|-------|----------------------|----------|------|
| **R-133** | / machine-door heading | *"Built to be read by agents"* | **verified** | Not a capability claim — a framing for the three surfaces beneath it, each independently verified below. The site does serve agent-targeted surfaces: `/llms.txt` 200, twins 10/10 200 `text/markdown`, registry JSON 200 `[D]` | — | [D] |
| **R-134** | / machine-door | *"This site is itself an aDNA vault — the structure it documents is the structure that produced it."* | **verified** | True and already asserted at `/learn/what-is-adna` since before this campaign; this row moves it to the homepage, which is machine_eye item 13's actual complaint (*"narrative, on one deep page, not the homepage"*). ⚠ **Still not machine-checkable** — no `source_vault_path` meta, no frontmatter passthrough, no JSON-LD field tying a page to its source `.md`. An agent must read and trust prose. That half of item 13 is **untouched and stays open** | — | [D][R] |
| **R-135** | / machine-door | *"Each surface below is generated from the same source as the pages themselves, so it cannot drift out of step with them."* | **verified** | Structural, and enforced in code: `src/utils/twin.ts` — *"THE NO-DRIFT LAW: a twin is derived, never authored"*; tiers A/B render from the collections the HTML renders from, tier C from the built artifact; the registry endpoint is a projection of the same `vaults.json` the `/vaults` pages read. All regenerate per build, so none can lag the page `[D]`. ⭐ **This sentence replaced a FALSE one — see §14.1** | — | [D] |
| **R-136** | / machine-door | *"/llms.txt — A curated index of this site, written to be read by an agent rather than rendered."* | **verified** | 200, `text/plain`, 3,137 B; hand-written per-link descriptions, not an auto-dump (machine_eye item 1, re-confirmed 2026-08-21) `[D]` | — | [D] |
| **R-137** | / machine-door | *"/llms-full.txt carries the whole corpus in one file."* | **verified** | 200, `text/plain`, **950,827 B** live. Was 2,018 B and an index at baseline — item 2's *"the name overclaims"* finding is discharged; the name is now accurate `[D]` | — | [D] |
| **R-138** | / machine-door | *"Add `.md` to a documentation URL — or send `Accept: text/markdown` — and get the source instead of the page. 222 pages have one."* | **verified** | Count **derived** from `src/data/twin_manifest.json` at build (never typed — KW-14), corroborated independently by the build log (*"advertised 222 via rel=alternate; manifest lists 222 total"*) `[D]`. Both URL forms serve: 10/10 → 200 `text/markdown`; negotiation returns `text/markdown` + `Vary: Accept` `[D]`. **Not a universal claim, deliberately**: 2 of 224 built pages have no twin (`/design-system/`, `/vaults/graph/`), neither of them prose documentation — the sentence states the count instead of saying "any page" | — | [D] |
| **R-139** | / machine-door | *"/api/registry.v1.json — The vault registry as versioned JSON, so the network can be queried as data instead of scraped out of HTML."* | **verified** | 200, `application/json`, 80,997 B live `[D]`. The contrast is the baseline's own finding: item 8 recorded that *"an agent's only path to the vault list is scraping /vaults/ HTML or parsing slugs out of sitemap-0.xml"* | — | [D] |

### §14.1 ⭐ The row this register caught in its own author's copy, before it shipped

The block's second sentence was first drafted as:

> ~~*"The surfaces below are a by-product of that, not an add-on bolted on later."*~~

**It is false, and the register pass is what caught it** — not review, not a gate. The twins were
built at **P3.1** and the registry endpoint at **P3.2**, both on 2026-08-21, both *because*
`machine_eye` had scored them ABSENT on 08-16. They are, in the plainest temporal reading, add-ons
bolted on later. The sentence was reaching for a real structural property — derivation from a single
source — and dressed it as a claim about history that the campaign's own mission files disprove.

Replaced with **R-135**, which claims only the structural fact and is checkable in `twin.ts`.

⚠ **Worth naming: the defect was in copy written by the agent running the honesty campaign, in the
same session, for the block whose entire subject is machine-readable honesty.** Convention 1 says
claims move DOWN to verifiability; this is the first instance in the campaign of that rule biting
its own author mid-sentence, and it took one pass over the drafted copy to find. That is the
argument for the register pass being a step, not a review reflex.

### §14.2 What P3.3 deliberately did not claim

**No server, anywhere.** `adna-mcp-server` is built and red-tested at `mcp/` and is **unpublished**.
The block names no server, no install line, no `npx`. Verified by sweeping the **rendered** output
(convention 7 — same-diff cannot see a false sentence): `mcp` · `npx` · `adna-mcp-server` ·
`npm install` · `Model Context Protocol` → **0 each** in `dist/index.html` `[D]`.

**No `/.well-known/mcp.json`.** It stays 404. A descriptor naming an unpublished package is a false
claim on a machine surface — the same law as the copy, applied to a machine surface.

**The D10 anchor is not claimed.** The re-score belongs to P5.2 with fresh isolated scorers, never to
the mission that did the building — the discipline P3.1 and P3.2 both applied.

### §14.3 Open by disposition — after P3.3

**R-34 · R-63** (both `[A]`, awaiting ⛩ O0b) · **R-111** (S2, `/canonical-properties`) · **R-124**
(S3, awaiting the audience call) · **R-129** (S2, staged to Hestia) · **R-131** (S4, unexercised —
**still unexercised; P3.2 deployed the mechanism, which is not the same as exercising the promise**).

**The list is the datum; no total is typed beside it.** **FALSE: 0** — and §14.1 is the honest
footnote on that zero: one false claim was drafted this session and cut before it reached the tree.
