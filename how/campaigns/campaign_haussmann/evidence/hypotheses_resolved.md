---
type: artifact
artifact_type: hypothesis_resolution
campaign_id: campaign_haussmann
title: "HAUSSMANN Phase B.4 — the fifteen VITRUVIUS hypotheses, resolved"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
agent_authored: true
evidence_pack_commit: d58ea13
tags: [haussmann, phase_b, hypotheses, vitruvius]
---

# H1–H15 — resolved verdicts

> Every verdict cites its evidence packet (files under `evidence/`, pack commit `d58ea13`). Provenance:
> `[D]` direct observation · `[I]` inferred · `[R]` peer-vault record · `[D-syn]` synthetic agent
> pre-screen (disclosed; human panel runs at campaign P0/P5). Instrument: [[instrument_ingestion]].
> Severity uses the instrument's S1–S4.

| H | Verdict | Severity | The evidence, compressed |
|---|---|---|---|
| **H1** hero abstraction load | **CONFIRMED** `[D-syn]` (human panel pending) | S2 | All 3 synthetic cold-readers: 30-second test fails or barely passes; the engineer got more from the code block's `&& claude` than from any prose; the clinician briefly parsed "aDNA" as *ancient DNA*; the contributor read a "philosophy/commons manifesto site". Definition is sentence 2, after the poetry. → `coldreads/` ×3 |
| **H2** three concurrent nav systems | **REFRAMED** `[D]` | S2 | The header itself is 8 items (doctrine ceiling `[R]` Berthier 08-11) — but the real structural fault is **three parallel audience-IA branches**: `/researchers`-style top-level (3) + `/adopters/adopter-*` (5) + `/use-cases/*` (6) ≈ the same ~5 personas at up to 3 URLs each, with 4 duplicate `<title>` pairs. → `inventory/inventory_summary.md` §7 |
| **H3** high-commitment CTA, no zero-install path | **CONFIRMED** `[D]`+`[D-syn]` | S2 | No zero-install path exists anywhere (`machine_eye` items 11–12). The synthetic senior engineer **refused the one-liner** — "it hardcodes `~/aDNA` and launches an agent inside a stranger's instruction files" — and routed via GitHub raw instead. The trust cost of clone-and-run is real even for the well-disposed. → `coldreads/coldread_SYNTHETIC_senior_engineer.md` |
| **H4** registry sprawl / mixed lifecycle | **CONFIRMED** `[D]` | S2 | No tier field; statuses rendered raw (genesis 56 · pending 10 · active 7 · genesis_stub 1); blank cards (zeta = name+badge only); inconsistent detail rows (terminal lacks GOVERNANCE/LAST SYNCED); "74 VAULTS" beside "15 connected"; graph renders 68 of 74. → `captures_curated/visual_findings.md` F4/F8/F15, `machine_eye` |
| **H5** operator-federation undisclosed | **CONFIRMED** `[D]` | **S1** | Claim register: "the spec, the tooling, and the vaults are **all public**" = **FALSE** (73/74 no public repo); "Real public-good work already lives here… The proof" = UNSUPPORTED (all 4 subnetwork vaults `pending`; the one public repo's sole contributor is the operator). The engineer cold-reader reached the hostile conclusion unaided: "one org's monorepo cosplaying as an ecosystem." → `claims/claim_register.md` #1, #7 |
| **H6** mixed-case URLs | **CONFIRMED** `[D]` | S2 | 24/74 vault URLs mixed-case; **wrong casing = hard 404, no redirect**; both shapes coexist in one index. → `inventory` §6, `machine_eye` item 10 |
| **H7** audience-segment IA | **CONFIRMED + EXPANDED** `[D]` | S2 (was S3) | Not 6 pages — **14 persona-template pages** across the 3 branches of H2, incl. label/slug mismatch (Startups → `/startup-first-hour/`). Anti-pattern 7.7 at larger scale than hypothesized. → `inventory` §1/§7 |
| **H8** machine layer absent (S1 if so) | **REFRAMED** `[D]` | S2 | Not absent — **present-but-incomplete with a self-exemption edge**: llms.txt exists and is genuinely curated **but is never linked from any HTML page**; llms-full.txt is a 2 KB index mislabeled as full-corpus; `.md` twins 404 (10/10) *while 29 internal links point at `.md` paths* — a started-then-abandoned convention now breaking links; no registry JSON (4 paths 404); no MCP server; no content negotiation (byte-identical ETag); JSON-LD shallow (**0 Organization site-wide**, no Dataset, no sameAs). D10 anchor = **3/5**. → `machine_eye/machine_eye.md`, `sweep/jsonld_census.md` |
| **H9** Lattice Protocol explanatory debt | **CONFIRMED, sharpened** `[D]` | **S1** | The hero calls it "the **open** coordination protocol" — **FALSE** while the protocol repos are private and publish is counsel-gated `[R: LatticeProtocol STATE]`; the same page's "opening progressively" is the honest phrasing. All 3 cold-readers flagged the term as undefined/confusing. Resolution must fit inside the counsel embargo. → `claims` #2, `coldreads/` ×3 |
| **H10** register oscillation | **CONFIRMED, quantified** `[D]` | S2 (standing) | FKGL 12.05–17.91 on all 6 key pages (upper-bound caveat noted); "civilizational framing for a folder convention" adjacent to terse spec prose; the clinician's verbatim jargon list (context democracy, federate a wrapper, 16 Entity Types…). Third campaign to find it — Berthier: "a writing problem wearing a design problem's clothes." → `sweep/reading_level.md`, `coldreads/` |
| **H11** personas exposed unexplained | **CONFIRMED** `[D]` | S2 | Clinician assumed "tended by Rosetta" meant people until `/about` — three pages late; casing drift ("mondrian" lowercase inside a `<title>`); and the paired data contradiction: "Every vault has its own persona" = **FALSE** (7 nulls + 5 raw `tbd_at_p0`). One generator/data fix clears the enum leak + the quantifier. → `coldreads/coldread_SYNTHETIC_clinician_researcher.md`, `claims` #6/#7, `visual_findings` F9 |
| **H12** no named humans on homepage | **CONFIRMED** `[D]` | S2 | Homepage: none. `/about`: "Stanley — Founding Architect" with no surname/affiliation/link. The strongest real names available (Helene & Mikk Cederroth / Wilhelm Foundation — independently verifiable) sit unlinked from the trust path. → `claims/claim_register.md` sources, `coldreads/` clinician Q6 |
| **H13** internal language leaking | **CONFIRMED at full scale, root-caused** `[D]` | S2 | **58/74 registry pages leak** (27 truncated ledes — "(Production Tidy pt08." renders on the homepage itself; 23 raw enums; "Mac/stanley; the operator's daily-driver" on the Home card). Root cause: the projection falls back to inventory `note` fields (0/27 cards carry `tagline`; ~46/74 vaults have no card `[R]` Hestia 08-06) — **fix at the generator, not per-page**. Bonus leak class: 2–46 dev comments per page in shipped HTML. → `claims` H13 annex, `visual_findings` F7 |
| **H14** no synchronous venue | **REFRAMED** `[D]` | **S1** (via the two FALSE claims) | A venue now EXISTS — community.adna.network (Fluxer, live on third-party metal) — but: zero aDNA branding, policy-naked (no ToS/privacy/CoC), approval-gated registration, aliveness unverifiable from outside, and **no link in either direction today**. Meanwhile `/community` points readers at **Discussions (404, not enabled)** and **issue templates (repo has no `.github/`)** — the question path is broken twice over. Berthier-era "GitHub Discussions is the venue" is no longer even true. Flux verdict: NOT launch-ready; link = net-negative today; integration = campaign P3 under ADR-025 human-only + policy-floor prerequisites. → `flux/flux_assessment_draft.md`, `claims` #3/#4 |
| **H15** no numbered proposal process | **CONFIRMED** `[D]` | S2 | Nothing found on site or in vault. Calibration: MCP scored **D8 = 5** (both scorers) on its 8-state SEP process with conformance gates — the reference bar. The dossier adds PEPs/TC39/EIPs anatomy (numbered items · public status machine · tables-first · author credit · machine surface). → `cohort/scoresheet_*_mcp.md`, `dossier/haussmann_reference_dossier_draft.md` |

## New findings outside the hypothesis set (top rows for the finding register)

| ID | Finding | Sev | Source |
|---|---|---|---|
| N1 | **Docs template reserves the collapsed-sidebar column ≤375px** — body text in a ~185px channel (130px at 320), 2–5 words/line, entire docs class, both themes. Passes gate-9 (no h-overflow) and axe — only visual review caught it. | **S1** | `visual_findings` F1 |
| N2 | 29 broken internal links (11 targets — stale snake_case `.md` refs in `/reference/*`); no link gate exists | S2 | `sweep` #5 |
| N3 | Live security-header drift: only HSTS served; `vercel.json`'s CSP/XFO/XCTO/Referrer-Policy absent; MDN Observatory **C/50**. Plus an **unrecorded 08-11 deploy** (STATE's last recorded deploy is 07-24) | S2 | `sweep` #3/#4, session baseline |
| N4 | `/changelog` = one entry (2026-04-13) + `rss.xml` 1 stale item — aliveness signal contradicts the mature site; cold-reader read it as semi-abandoned | S2 | `visual_findings` F5, `machine_eye` 7, `coldreads` contributor |
| N5 | `/compliance` claims "every commit is signed" — no signatures exist (false control claim to an auditor audience) | **S1** | `claims` #5 |
| N6 | `/network` mobile clips the run-a-node steps + `git clone` block mid-command | S2 | `visual_findings` F2 |
| N7 | `/reference/specification` = one 124,605px-tall page on mobile (~150 screens), compounded by N1 | S2 | `visual_findings` F6 |
| N8 | Registry lists confidential-adjacent vaults publicly (aiLP-Dataroom, CakeHealth, PercySleep) — **operator policy ruling needed** (projection admission standard) | S2? | `visual_findings` F7 |
| N9 | 964 html-validate errors in 5 systemic classes (aria-label-misuse 245 · unique-landmark 238 · implicit button type 203 · digit-leading IDs 152 · `<hr/>` 105) — axe-clean but markup-dirty | S3 | `sweep` #6 |
| N10 | Name collision: "aDNA" reads as *ancient DNA* to life-science audiences; "Compliance" label reads as HIPAA-class compliance (page is AI-session compliance; HIPAA/PHI/IRB appear nowhere) | S3 (feeds P0 positioning) | `coldreads` clinician |
| N11 | Homepage "context democracy" diagram is desktop-legible but **collapses <768px** (mobile-specific refinement of the Berthier finding); graph-page "nearly illegible" **NOT reproduced** on desktop — remaining graph issues are data currency (68≠74, 3 vs 4) + LCP | S2 | `visual_findings` F3/F4 |
| N12 | The 4 hand-rolled Lighthouse fixtures are local-lab only; live field p75 has no instrument (CrUX null-traffic, keyless PSI quota-zero) | S3 | `sweep`, toolkit research |

## What is genuinely strong (preserve — the honesty strata)

Hero visual excellent · `/about` unusually honest ("stewarded today by one person… not a council we haven't formed") · dark/light parity clean everywhere · axe 0 across 32 route-theme runs · local perf 97–100 · sitemap complete/current · llms.txt genuinely curated · graph keyboard-twin pattern · zero-count edge kinds shown honestly · `/adopters` labels personas as "not real named adopters" · every load-bearing *number* on the site is true (74/14/15/v2.5/16/3/MIT). **The site's honesty is its strongest asset; the FALSE claims are exactly where the marketing stratum diverged from the house style.** (= instrument §8.3, now proven at claim level.)

## Related

[[instrument_ingestion]] · `claims/claim_register.md` · `captures_curated/visual_findings.md` · `machine_eye/machine_eye.md` · `flux/flux_assessment_draft.md` · [[webforge_pattern_register]]
