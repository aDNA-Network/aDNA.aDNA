---
type: artifact
artifact_id: release_staging_ledger_v8_11
title: "v8.11 staging ledger — the F-w fold at its source, the ADR-011 canvas migration, C4's retirement, and the deploy tail that a version bump makes mandatory"
campaign: campaign_haussmann
created: 2026-09-11
updated: 2026-09-11
status: proposed          # ⛩ DECISION SURFACE — nothing ratified, nothing built, no `.adna/` byte touched (Standing Rule 1)
last_edited_by: agent_rosetta
session: session_stanley_20260911_015723_haussmann_increment_2
supersedes_none: true
relates: [release_staging_ledger_template_release_prep, skill_template_release, adr_011_canvas, f_w, pattern_diagrammatic_context]
tags: [artifact, template_release, ledger, v8_11, f_w, adr_011, canvas_migration, marketplace, deploy_tail, gate]
---

# v8.11 staging ledger — ⛩ a decision surface, not a plan of record

> ⛩ **Ordered by ruling R2 (2026-09-11): the v8.11 release AND its deploy tail fire BEFORE `P5.1`
> recruitment produces evidence.** Re-derived at this ledger's authoring `[D] 2026-09-11`:
> `how/campaigns/campaign_haussmann/evidence/p5_1/` **does not exist**, both P5.1 instruments still
> read `ready_for_operator`, and all six files in `evidence/coldreads/` are **SYNTHETIC** (P2.6 /
> P4.5b) ⇒ **zero human evidence is pinned to any build stamp.** The window is open.
> ⛔ **Supersession: the instant any `evidence/p5_1/` artifact exists this measurement is void and the
> deploy hold is fully engaged.** Re-derive it at the gate; do not quote this paragraph.

> ⚠ **LEDGER ROWS ARE HYPOTHESES.** v8.6 reverted a wrong `cp` because a row claimed work disk showed
> already done; v8.8 caught a false pointer in the flagship `CLAUDE.md` at fire time; **v8.10's own
> ledger sat at `status: proposed` for two days after the gate fired.** Every row below was measured
> against disk on **2026-09-11** and must be measured **again** before firing.

## §0 · Derived at authoring — never carried

| Fact | Value | How |
|---|---|---|
| `.adna/` governance version | **8.10** | `.adna/CLAUDE.md:3` |
| Standard version | **v2.5** | `.adna/README.md` badge |
| `.adna/` hook version | **4.3.0** | `grep LAYER_CONTRACT_VERSION` |
| `Git.aDNA` hook version | **4.3.0** | same, at their source of record |
| Tour manifest | `source_ref: v8.10` · `local_sync_sha: 6f8f3d2…` · `source_commit_date: 2026-09-07` | `site/src/data/tour_manifest.json` |
| `main` CI | ✅ green, run `34549133139` at `67ad713` | convention 19 |
| unpushed | **0** — HEAD **==** `origin/main` | `git ls-remote`, at the remote |
| prod alias | **`a2ad53b`**, built `2026-09-08T03:37:24Z` | `/.well-known/adna-build.json` |
| `adna_validate --governance` | ✅ **Zero drift** | `python3.13 …/adna_validate.py --governance .` |

⭐ **The hook needs NO payload row this time, and that was measured rather than assumed.** Both trees
read `4.3.0`. v8.10's dominant payload item does not recur — *and the reason to check is that the last
two releases each found the pin had lapsed between the offer and the ack.*

## §1 · ⛔⛔ READ THIS BEFORE THE PAYLOAD: the two trees are NOT a copy and a source

A whole-tree `diff` between `aDNA.aDNA` and `.adna/` reports **divergence nearly everywhere** — 418
files in the image, and every governance file among them differs. **That is correct and expected, and
it is not payload.** `aDNA.aDNA` is a *customized fork* that carries its own `CLAUDE.md`, `STATE.md`,
`MANIFEST.md`, `HOME.md`, `README.md`, `CHANGELOG.md`, `AGENTS.md` and `.obsidian/` state; `.adna/` is
the *pristine template* whose same-named files are the template's own.

⇒ ***the payload is an ENUMERATED list, never a tree diff***, and step (b.2)'s
*"diff both trees"* means **diff the payload paths in both trees**, not the trees.

⭐ **The consequence that nearly cost the template:** `HOME.md` exists at the same relative path in
both, and the two files are **different objects** — ours is this vault's generated splash
(`generated_by: build_home.py`, persona `rosetta`), theirs is the template node-home carrying
`{{node_hostname}}` placeholders and substituted at bootstrap. **Folded dev→image on path identity, it
would overwrite the template with our dashboard.**

> ***A path is not an identity, and a fold rule keyed on paths cannot tell a counterpart from a
> namesake.***

⚠ **Said in fairness, because the instrument is not at fault:** `skill_template_release` step (b.2)
already says the diff must be empty *"modulo **deliberate image-only deltas** … recorded by path +
reason … Silence is not a reason."* The escape clause exists; **row P2 below is that record.** What
would have failed is not the skill but a mechanical application of it — which is what a ledger is for.

## §2 · The payload

| # | Item | Direction | Source of record | Status |
|---|---|---|---|---|
| **P1** | **`F-w` fold — five files, dev graph → image** | fold | the dev graph (already correct) | proposed |
| **P2** | ⛔ **`.adna/HOME.md` §Marketplace + `:15`** | **IMAGE-ONLY** | the image (no counterpart) | proposed |
| **P3** | **ADR-011 canvas migration** — 8 files, both trees | both | Canvas.aDNA ADR-011 | proposed |
| **P4** | **Five version surfaces** `8.10 → 8.11` | image | this ledger | ⛩ Q1 |
| **P5** | **`CHANGELOG.md` entry** | image | authored at fire | proposed |
| **P6** | ⛩ **Deploy tail** — tour manifest regen + prod deploy | site | `build_tour_files.mjs` | ⛩ Q4 |
| **P7** | `example_mission_product_launch.md` — a dangling step name | both | ⛩ Q3 | ⛩ Q3 |
| **P8** | Same-diff consequences of P1 (two count surfaces) | mixed | ⛩ Q2 | ⛩ Q2 |

### P1 — ⭐ `F-w` is CLOSED AT ITS SOURCE, and the whole remaining population is in the image

This is the row that tells you what kind of release this is. Measured `[D] 2026-09-11`, promise-class
hits (read, not counted):

| File | dev graph | image `.adna/` |
|---|---|---|
| `how/skills/skill_onboarding.md` | ✅ clean — Step 9 renamed *Marketplace Teaser → **Portability Note*** (09-09), body honest | ⛔ `:204` heading + `:208` body |
| `how/skills/skill_node_bootstrap_interview.md` | ✅ clean — **C4 struck**, `question_count: 18`, `marketplace_interests` dropped per ⛩ R3 | ⛔ `:69` + `:153`, `question_count: 19` |
| `how/templates/template_node_adna_exemplar/HOME.md.template` | ✅ clean (0 hits in the whole dir) | ⛔ `:31` structure comment |
| `how/templates/template_node_adna_exemplar/README.md` | ✅ clean | ⛔ `:30` |
| `…/.obsidian/snippets/{{persona_lower}}_accent.css.template` | ✅ clean | ⛔ `:1186` |

⇒ **v8.11's `F-w` half is a fold, not an authoring job.** The candidates staged at
`artifacts/template_release/staged/` (`exemplar_README.md.candidate` ·
`persona_accent.css.template.candidate` · `HOME.md.template.candidate` ·
`skill_onboarding.md.candidate`) are **corroboration, not the source** — the dev graph is.

**Post-fold control, and it is an absence assertion with its surface named:**
`grep -rn -i marketplace .adna --include='*.md' --include='*.css' --include='*.yaml' --include='*.template'`
must return **only** the three legitimate hits — `what/docs/adna_reference.md` (`MarketplaceRegistry`,
a real registry class), `CHANGELOG.md` (the entry that *retires* the promise; convention 17 —
a surface documenting a retirement contains the retired string), and `CLAUDE.md`'s version comment —
plus whatever Q3 rules for P7. ⛔ **Read the hits; do not count them.** That is exactly how v8.10
fixed two of six.

### P2 — ⛔ the loudest survivor, and it is in no prior list

`.adna/HOME.md` — the **template node-home**, substituted into every bootstrapped node:

- `:74-78` — an entire **`## Marketplace`** section with a live link to
  `https://lattice-protocol.com/marketplace` and a *"Link target may be a `[TBD per LP marketplace
  launch]` placeholder until the marketplace is live"* note.
- `:15` — the intro: *"…jump into specific vaults, and **link out to the marketplace**."*

**None of the six recorded `F-w` sites is this file.** It is the most user-facing instance in the
image: a rendered section on the first page a new operator opens, promising a product that does not
exist and linking to it.

⛔ **It cannot be folded** (§1). The edit is authored **into the release tree**, staged as a candidate
first, and recorded here as a **deliberate image-only delta with its reason** — which is what step
(b.2) asks for.

⚠ **Recommended shape, not ruled:** replace the section with the same honest destination `F-w`(b)
already shipped at `HOME.md.template:54` — *"browse the public vault registry"* — so the image says one
thing in two places rather than two things. The intro line at `:15` is a same-diff obligation of the
section edit: **fix one and not the other and the page contradicts itself.**

### P3 — the ADR-011 canvas migration, verified in both trees

`metadata._reserved` → `metadata.frontmatter._reserved`. Measured `[D] 2026-09-11`, **8/8 files** in
the legacy shape (`hello_world` · `template_agent_graph` · `template_architecture` ·
`template_pipeline`, in **both** `.adna/what/lattices/examples/` and
`aDNA.aDNA/what/lattices/examples/`):

```
metadata keys      : ['version', 'frontmatter', '_reserved']
metadata.frontmatter: PRESENT and EMPTY ({})
_reserved.authority : "view"     (4/4 in each tree)
```

⭐ **The carrier already exists**, so the migration *relocates into* an empty object rather than
creating one — which also explains the failure mode exactly: `canvas_std` resolves
`metadata.frontmatter._reserved`, finds `{}` rather than a missing path, and reports `core` with
nothing to complain about. Mondrian's md5 `f9459bc3cbb21391fe28dd76d3e44902` for
`template_architecture.canvas` **reproduces byte-exactly in both trees**, seventeen days on.

⛔ **Scope: 8 files, ours and the image's. NOT the fleet.** The ~200 canvases across ~47 already-forked
vaults are a downstream population; Canvas **offered** that migration and did not perform it, and
nothing here asks for it. The fold fixes what every *future* fork receives.

### P4 — the five version surfaces `8.10 → 8.11` (⛩ Q1)

Derived, not remembered:

1. `.adna/CLAUDE.md:3` — `version: "8.10"`
2. `.adna/CLAUDE.md:10` — the inline release comment (a new `<!-- v8.11 | … -->` line)
3. `.adna/README.md:10` — the **governance badge**: both the shields label *and* the release-tag URL
4. `.adna/CHANGELOG.md` — a new entry (P5)
5. ⛔ **The image repo's ROOT `README.md` badge — ABSENT on this node** (`ls ~/aDNA/README.md` → not
   found; it is clone-only). **v8.6 *and* v8.7 both shipped it stale.** It is checkable only inside
   the throwaway clone, at step (c).

⛔ **`Standard v2.5` / `standard-v2.5` are NOT touched** unless Q1 rules otherwise.

### P6 — ⛩ the deploy tail, and a version bump makes it mandatory by construction

`sourceRef` derives from `.adna/CLAUDE.md`'s `version:`, and the trust-page manifest STALE-checks on
**three** conditions — content sha, `source_ref`, `local_sync_sha`. Today it reads `source_ref: v8.10`
· `local_sync_sha: 6f8f3d2…` · `source_commit_date: 2026-09-07`. **All three move.**

⇒ ⭐⭐ **If the release fires and the deploy does not follow,
`/get-started/what-your-agent-reads/` publishes `v8.10` provenance for a standard that has moved** —
a stale claim on **the one surface built to be checked, which publishes its own hashes and invites a
diff.** *`F-w`'s own class, produced by shipping `F-w`'s fix.* **Firing the release and deferring the
deploy is the one combination that leaves a false claim live.**

⚠ **Deploy discipline (node quirks, not optional):** `site/scripts/deploy_adna.sh prod` only; token by
**env var** (`SS_VERCEL_TOKEN`), never `--token`; no override flags; **push precedes deploy, each its
own ⛩ GO** (`inject_build_stamp.mjs:83` stamps HEAD and nothing checks HEAD is public); record the
`deploy_record` line in the session log **and** `STATE.md`.
⚠ A **changelog entry** will be owed and `/` **is** a `gate-49` template, so a `home` re-baseline
fires — confirm the red in-container first, regenerate, then assert exactly 2 of 24 changed. Derive
`title ≤ 70` / `description ≤ 160` from `src/content.config.ts`; **both of the last entry's fields
were over on the first try.**

## §3 · ⛩ Questions carried to the gate — ✅ **ALL FIVE RULED 2026-09-11**

> ⛩ **Ruled at the fire gate, operator Stanley, 2026-09-11.** Every question was ruled **as
> recommended**; the recommendations are left standing below unedited so a later reader can see what was
> put and what came back, rather than a table that reads as if it had always been settled.
>
> | # | Ruling |
> |---|---|
> | **Q1** | **`v8.11`.** Standard **HOLDS at v2.5**. |
> | **Q2** | **Correct OURS to 18** with the divergence named; **HOLD the router at 19** until the release fires; **then memo Hestia** (Rule 10 — never an edit from here). |
> | **Q3** | **KEEP** the historical lines, **add a one-line pointer** naming the rename. P1's expected-hit list moves in the same act. |
> | **Q4** | **Fire the release AND its deploy tail together**, before recruitment produces evidence — R2 restated at the gate. |
> | **Q5** | **REPLACE**, not delete. `:15` is a same-diff obligation of the section edit. |
>
> ⭐ **Q3 turned out to govern more than P7.** It settles a *class* — *keep the historical record, add a
> pointer, do not falsify it* — and §5.4 applies it to the step-(b.1) keep-vs-genericize calls the fold
> raises, rather than returning to the operator with a sixth question whose answer had just been given.

| # | Question | Recommendation |
|---|---|---|
| **Q1** | **Version: `v8.11` or `v9.0`?** | ⛩ **Recommend `v8.11`.** ADR-011's two-track policy governs. This payload is **content honesty + a metadata relocation** — no semantic change to a security-relevant gate, unlike v8.10's hook fail-open which argued for a major. The standard holds at **v2.5** either way. |
| **Q2** | **P8 — the two count surfaces that move with C4.** `aDNA.aDNA/CLAUDE.md:321` says *"19-question"* while our own skill reads `question_count: 18`. The workspace router (`~/aDNA/CLAUDE.md`) also says 19. | ⛩ **Recommend: correct OURS to 18 now with the divergence named; leave the ROUTER at 19 until the release fires, then send Hestia a memo.** They are **two surfaces about two different objects** — ours describes our disk (18), the router describes what a fork runs (`.adna/`, still 19, **correct today**). The campaign's own rule: they may disagree for exactly as long as the gate is open **provided somebody says which is which**, and nothing currently does. ⛔ The router is `Home.aDNA`'s file (`~/aDNA/CLAUDE.md` is a symlink into `Home.aDNA/what/inventory/`) — **a memo under Rule 10, never an edit from here.** |
| **Q3** | **P7 — `how/templates/examples/example_mission_product_launch.md:76,79`** narrates *"the marketplace teaser (Step 9)"* and *"Added Step 9 (Marketplace Teaser)"*, in **both** trees. It is an example mission **describing a past mission**. | ⛩ **Recommend KEEP, with a one-line pointer note.** It is *historical provenance*, which `skill_project_rename`'s keep/strip classifier preserves — rewriting it would falsify a record of what that mission actually did. But it now names a step that no longer carries that name, so a reader following it finds nothing. **Cheapest honest fix: a parenthetical naming the rename.** ⚠ Whatever is ruled, the P1 control's expected-hit list changes with it — say so in the same act. |
| **Q4** | **⛩ The deploy tail (P6).** | ⛩ **Recommend: fire the release AND its deploy tail together, before recruitment produces evidence** — which is exactly what R2 already ordered. §2 P6 is why: they are not separable without leaving a false claim live. |
| **Q5** | **P2's wording** — replace `.adna/HOME.md` §Marketplace with the vault-registry destination, or **delete the section outright**? | ⛩ **Recommend REPLACE, not delete.** The section answers a real question a new operator has (*where do I find other people's graphs?*), and `F-w`(b) already shipped the honest answer at `HOME.md.template:54`. Deleting leaves the question unanswered and the `:15` intro line dangling; replacing makes the image say one thing twice. |

## §4 · Fire-time checklist (NOT yet run)

- [ ] **Re-verify every §2 row against disk** — rows are hypotheses, and this ledger is a hypothesis.
- [ ] **Re-derive the R2 window** — `evidence/p5_1/` must still be absent, or the deploy hold is live.
- [ ] Assemble in a **throwaway clone** of `aDNA-Network/aDNA`; `git status` shows **exactly** the
      ratified N paths — **any extra is a NO-GO**.
- [ ] Step (b.1) DE-LINK + dev-vault-name sweep over the **whole assembled tree**, never a line-list.
- [ ] Step (b.2) back-write **every** payload path that exists in the dev graph; record **P2** as the
      deliberate image-only delta **with its reason** (silence is not a reason).
- [ ] **Five version surfaces**, including the clone-only root `README.md` badge — **unverifiable from
      this node**, and stale in two prior releases.
- [ ] `gitleaks` clean; `adna_validate --governance` (**python3.13**, path arg required) → Zero drift.
- [ ] Hook `--self-test` in the assembled tree.
- [ ] **P1 post-fold control**: the marketplace grep returns only its expected-hit list, **read**.
- [ ] **P3 control**: all 8 canvases resolve `metadata.frontmatter._reserved.authority == "view"`, and
      **no** top-level `metadata._reserved` remains.
- [ ] rsync local sync `-a -c --delete --exclude .git`.
- [ ] Regenerate the tour manifest; ⛩ **push, then deploy** — two GOs, in that order.
- [ ] **Tags-only; never move a pushed tag** — a miss ships as a follow-up commit to `main`.
- [ ] Re-run the vault suite **AFTER** the record edits (`gate-41` reads governance frontmatter) and
      re-review `MANIFEST.md` genuinely — **never date-bump**; G41d's ratchet is at **0**.
- [ ] ⛩ **Update this ledger's `status:` and write its ratification block IN THE FIRING COMMIT.**
      *v8.10's ledger read `proposed` — "6 questions awaiting rulings" — for two days after its gate
      fired, so a reader arriving at the ratification record itself was told nothing was decided.*

---

## §5 · ⛩ RE-VERIFICATION AT THE FIRE GATE — `[D] 2026-09-11T04:0xZ`

Every §2 row was re-measured against disk, as §0's own banner demands. **Six rows reproduced exactly.
Three things moved, and one of them is a defect in this ledger's own control.**

### §5.1 · What reproduced

| Row | Re-measured | Result |
|---|---|---|
| **P1** | promise-class hits in both trees, **read** | ✅ reproduces — dev clean of the *promise*, image carries the heading at `skill_onboarding.md:204` and the `C4` row + table cell at `skill_node_bootstrap_interview.md:69,153` |
| **P2** | `.adna/HOME.md` | ✅ reproduces **verbatim** — `:15` intro clause and the whole `## Marketplace` section with the live link and the *"until the marketplace is live"* note |
| **P3** | all 8 canvases, both trees | ✅ reproduces **8/8** — top-level `metadata._reserved` present, `metadata.frontmatter` present and empty |
| **P4** | `.adna/CLAUDE.md:3` = `8.10`; `README.md:10` badge + release-tag URL | ✅ reproduces |
| **P7** | `example_mission_product_launch.md:76,79`, both trees | ✅ reproduces |
| §0 hook | `.adna/` = **4.3.0** | ✅ reproduces ⇒ **no hook payload row**, confirmed not assumed |
| §0 governance | `adna_validate --governance .` | ✅ **Zero drift** |

### §5.2 · ⚠ Two §0 figures were stale, neither changing a decision

- **`unpushed: 0` → `1`.** HEAD is `11c8b2c` (Increment 2); `origin/main` is `67ad713`, read **at the
  remote**. True when the ledger was written, false by the time it was committed — *the ledger was
  invalidated by the commit that contained it.*
- ⛔ **`evidence/coldreads/` is EIGHT files, not six.** §0 says *"all **six** … are SYNTHETIC"*. Disk
  holds **8**, and the discriminating fact is not the count but the field: **8/8 carry
  `synthetic: true`**, including the one whose filename lacks `SYNTHETIC`
  (`coldread_synthesis_p2_6.md`), which also says on its face *"PRE-SCREEN only; the human panel is
  P5.1."*
  ⇒ **R2's window re-derives OPEN and its arithmetic was wrong.** *Six* was a **typed** figure (KW-14)
  sitting inside the paragraph whose own closing line reads ***"Re-derive it at the gate; do not quote
  this paragraph."***
  ⭐ **The supersession clause is what caught it**, and it caught it in the direction nobody checks —
  the one where the conclusion is right anyway. ⚠ Width: *8/8 synthetic* is a claim about the
  `coldreads/` packet; **`evidence/p5_1/` being ABSENT** is the separate measurement that carries
  *"zero human evidence exists"*, and it re-derives **ABSENT**.

### §5.3 · ⛔⛔ THE DEFECT: P1's post-fold control names THREE expected hits; **SIX** files legitimately carry the string

> ⚠⚠ **This heading read *"the true figure is SEVEN"* until the control was actually run, and it was
> wrong in the same way the thing it corrects was wrong.** The table below has **seven rows**, but one of
> them — `HOME.md` — reads **"0 after P2"**. Counting the rows instead of reading them gives 7; reading
> them gives **6 files**, which is what the post-fold grep returns `[D]`.
> ⇒ ***I corrected a count by counting.*** The ledger's own rule is *read the hits, do not count them*,
> and the correction to it was drafted by counting a table. **Same defect, one level up, committed inside
> the paragraph naming the defect** — and it only fell because the control was run rather than predicted.

§2 P1's control says the post-fold grep *"must return **only** the three legitimate hits"* —
`adna_reference.md` · `CHANGELOG.md` · `CLAUDE.md`'s version comment — *"plus whatever Q3 rules for P7."*

**Derived from the post-fold state rather than the current one, the image will legitimately carry the
string in seven files.** The two skills the fold *brings over* are the ones the list forgets:

| File | Post-fold hits | Legitimate because |
|---|---|---|
| `how/skills/skill_onboarding.md` | `:5` · `:208` · `:212` · `:213` | `:208` is **the honest sentence itself** (*"There is no marketplace today and none is promised here"*) — already byte-identical in **both** trees; `:212-213` is the SO-6 strike record of the rename |
| `how/skills/skill_node_bootstrap_interview.md` | `:5` · `:14` · `:155`–`:163` | the SO-6 retirement record for `C4`, which is what stops a later agent "correcting" the question back |
| `how/templates/examples/example_mission_product_launch.md` | `:76` · `:79` + the new pointer | ⛩ **Q3 ruled KEEP** |
| `what/docs/adna_reference.md` | `:59` | `MarketplaceRegistry`, a real registry class |
| `CHANGELOG.md` | `:39` + the new v8.11 entry | the entries that **retire** the promise |
| `CLAUDE.md` | `:10` + the new v8.11 comment | version-history comments |
| `HOME.md` | **0** after P2 | replaced |

⇒ **run as written, the control reds on a CORRECT fold** — and the cheap way to make it green is to
strike the retirement records, which would breach **SO-6** and delete the exact provenance that prevents
the regression. ***A control derived from an artifact's current state cannot certify the state the
change produces.*** This is the ledger's own *"read the hits; do not count them"* rule turned on the
ledger: the expected-hit list was assembled by reading **today's image**, and the fold's whole purpose
is to make today's image obsolete.

⚠ **Said in fairness:** `:208` is **already honest in the image**. §2 P1's table marks it `⛔ :204
heading + :208 body`, which reads as two defects; **`:208` is not one** — v8.10 fixed the body and left
the heading, which is precisely what that row's own prose says elsewhere. The fold is still correct
(it carries the heading rename); only the row's characterisation was.

### §5.4 · ⛩ Step (b.1) dispositions — settled by the Q3 ruling, not re-asked

The fold carries **dev-graph-specific referents** into the image, which step (b.1).2's commit-SHA and
dev-name scan surfaces and requires a **keep-vs-genericize** call on. The class was ruled **this
morning at Q3** — *keep the historical record, add a pointer, do not falsify it* — so it is applied
rather than put back to the operator:

| Hit | Call | Reason |
|---|---|---|
| `skill_node_bootstrap_interview.md:27` — *"This is the dev-graph copy of the skill; `.adna/…` is the mirror"* | **GENERICIZE** | folded verbatim it becomes a file inside `.adna/` asserting it is *not* the file inside `.adna/` — **self-falsifying on arrival** |
| `skill_onboarding.md:5` — `updated:` comment citing dev commit **`c5ff7da`** | **GENERICIZE** | a real dev-graph SHA in a shipped how-to; (b.1).2 names this exact shape, and the SHA resolves in no clone of the image |
| `…:5` / `…:5` — *"⛔ DEV GRAPH ONLY — `.adna/` is never edited"* | **GENERICIZE** | an instruction that is false in the tree it lands in |
| `skill_onboarding.md:212-213` — the ⛩ Step-9 rename record | **KEEP** | SO-6; and it is what stops the heading being restored |
| `skill_node_bootstrap_interview.md:155-163` — the `C4` retirement record | **KEEP** | SO-6; convention 17 — *a surface documenting a retirement contains the retired string* |
| `…:162-163` — the ⛩ R3 ruling + Hestia's zero-tail measurement | **KEEP, TRIMMED** | the *ruling* is standard-relevant; the **node-specific** measurement (`Home.aDNA`, this node's grep) is not, and naming another operator's vault in the public image is the leak (b.1) exists to stop |

⛔ **Every disposition is recorded in the release session file as (b.1).3 requires. A silent skip is
the failure mode that step exists to close.**

### §5.5 · ⛔⛔ P2 IS WORSE THAN RECORDED: the link is DEAD, measured — `[D] 2026-09-11`

| Link | HTTP |
|---|---|
| `https://lattice-protocol.com/marketplace` — what `.adna/HOME.md:76` ships today | ⛔ **404** |
| `https://adna.network/vaults` — the replacement | ✅ **200** |

Every row above described P2 as a **false promise**. It is also a **broken link**, and nobody had
clicked it. The template node-home is substituted into **every bootstrapped node**, so the first page a
new operator opens has been offering them a **404** under a heading promising a marketplace — and the
note beneath it (*"Update this section when the destination is confirmed"*) is an instruction to a
future maintainer that has sat unexecuted long enough for the destination to stop existing.

⇒ ***a claim can rot in two independent ways at once, and checking the one you filed does not check the
other.*** `F-w` was filed as a **copy-honesty** defect; the link was never in scope, so no sweep ever
resolved it — and a promise nobody can follow reads, to a reader, as exactly the same page as a promise
they can. ⭐ **It cost one `curl`**, and the only reason it ran is the standing habit of verifying an
external destination at the object before shipping it — here applied to the link being **removed**,
which is not where anyone thinks to look.

**Candidate staged** at `staged/node_home_HOME.md.candidate`, diff asserted to be **exactly** the three
intended edits plus the retired note (167 → 165 lines), **0** promise-class hits remaining.
