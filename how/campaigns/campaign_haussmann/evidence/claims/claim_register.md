---
type: evidence
packet: B5
campaign: campaign_haussmann
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_haussmann_b5
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

