---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.5
obj: 3
track: T9
finding_id: [F-S2-6-9]
status: proposed   # design at P3; .adna/ template upstream-promotion deferred to v8 P6; node.aDNA apply lands at M3.5 Obj 9 populate-apply pass this same mission
upstream_target: ".adna/ (LatticeProtocol/aDNA@27e6395; v7.0 frozen) — `.adna/template_home_node_vault.md` + `.adna/template_vault_gallery.base` upstream-promotion at v8 P6 single-commit-per-patch cycle. Local landing at M3.5 Obj 9: node.aDNA/HOME.md line 42 + node.aDNA/what/inventory/vault_gallery.base."
upstream_state_at_authoring: "v7.0 frozen at 27e6395 (post-M06 S2 pre-tag commit); post-M3.2-close addendum at 5861133 operator-override NOT precedent"
created: 2026-05-24
updated: 2026-05-24
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_5, obj_3, t9, bases_driven_home, three_tier_render_fallback, dataview_fallback, plain_markdown_last_resort, vault_gallery_base, six_section_structure_8th_canonical_instance, t8_forward_reference_stub_post_graduation_first_consumer, v8_p6_propagation_queue, rosetta, standing_order_8_18th_19th_tactical_invocation_candidate, m245_routing_layer_5th_behavioral_test, batteries_included]
---

# T9 Design Spec — Bases-driven HOME.md template (3-tier render fallback)

> **What this is**: a proposed-patch artifact for **one node.aDNA mutation** at `node.aDNA/HOME.md` line 42 (Gallery section) + **one new Bases definition file** at `node.aDNA/what/inventory/vault_gallery.base`, and a forward-promotion candidate for v8 P6 cycle at `.adna/template_home_node_vault.md` + `.adna/template_vault_gallery.base`. Local apply lands at M3.5 Obj 9 this same mission (hybrid scope per operator AskUserQuestion Q1=Hybrid); `.adna/` upstream-promotion deferred to v8 P6.
>
> **Design-at-P3, propagation-at-P6 — 4th survival test**: M3.5 inherits the discipline ratified at M3.1+M3.2+M3.3+M3.4. The HOME template + Bases definition template are node-vault-class artifacts. v8 P6 ratifies the upstream candidates; M3.5 ships the local consumer at Obj 9.
>
> **First consumer of T8 forward-reference-stub discipline POST-GRADUATION**: M3.4 close GRADUATED the discipline at 3/3 use instances. T9 spec includes a `## Forward integration with M3.7` stub section; this is the FIRST CONSUMER of the discipline post-graduation, reinforcing the graduation by demonstrating consumer behavior.
>
> **Standing Order #8 self-reference (18th tactical invocation candidate)** — the gallery rendered by Bases reads frontmatter from the very vault_cards/ directory that T10 schema v0.2 specifies; T10 + T9 mutually self-reference. Recursive: rendering the gallery requires the schema; the schema's per-vault-class variants determine what the gallery groups by.

## 1. Finding statement (F-S2-6-9)

`node.aDNA/HOME.md` line 42 is a 1500-byte static HTML `<div class="vault-gallery">` block with 16 hardcoded vault cards. When vault inventory changes (vaults added, vaults removed, persona/class drift), the gallery silently drifts from the canonical inventory at `node.aDNA/what/inventory/inventory_vaults.yaml` (`vault_count: 31`). Manual sync via the §Maintenance footer (line 124-132) is required; nothing in the current HOME ties the gallery render to the YAML inventory or the per-vault info pages at `node.aDNA/what/vault_cards/the_*.aDNA.md`.

> **F-S2-6-9 (gallery render decoupled from canonical source; manual-sync; partial coverage 16-of-31; load-bearing for batteries-included north-star)**: 16 hardcoded vault cards inside `<div class="vault-gallery">` represent only ~52% of the 31-vault lattice. Adopters opening Obsidian see 16 cards; the YAML inventory lists 31. The HOME.md Maintenance footer instructs the operator to manually re-author the static HTML when inventory changes — a workflow that doesn't survive the north-star UX goal *"easy and fluid way to build/operate/utilize context graphs"* (operator-stated; lives in MEMORY.md). The Bases core plugin is enabled (`node.aDNA/.obsidian/core-plugins.json` `"bases": true`) and Dataview community plugin is loaded (HOME.md Maintenance footer line 132 self-evidence); neither is consumed for the gallery render today.
>
> — [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|`campaign_obsidian_deployment_stabilization.md`]] absorbed-source area + [[../../../../STATE.md|STATE router]] north-star reference

**Why this is the right scope for T9**: T9 is the rendering primitive — it answers *"how does the gallery render dynamically while preserving plug-agnostic legibility?"* The dynamic-rendering question is orthogonal to the schema-shape question (T10) and the cross-vault-projection question (T11). Splitting the rendering primitive into a 3-tier fallback (Bases primary + Dataview JS fallback + plain markdown last-resort) preserves the Maintenance footer's plain-markdown-as-last-resort discipline while gaining first-class Obsidian-native dynamism via Bases. T9 ships the rendering contract; T10 ships the data contract the rendering consumes; T11 ships the cross-vault projection.

## 2. Root cause

Three layered causes explain why HOME.md ships static HTML today:

1. **Workspace-fork-time pragmatism**. The node.aDNA vault was bootstrapped 2026-05-11 (M04 in `campaign_lattice_compliance_upgrade`). At fork-time, Bases was not yet a core plugin in production Obsidian (Bases shipped as a 1.x core feature only in early 2026). Static HTML is the most plugin-agnostic render — it works in Obsidian, in a plain markdown viewer, on GitHub's HTML preview, on a static site. Choosing static HTML at fork-time was the right call for the moment.

2. **No design existed for the 3-tier fallback pattern**. Even with Bases + Dataview available, no doctrine names what tier should be primary, what tier the fallback, what the last-resort is. The Maintenance footer line 132 says *"intentionally a static-data Dataview view so it remains legible as plain markdown when Dataview is unavailable"* — that's the legibility discipline, but it doesn't specify the Bases → Dataview → plain cascade. T9 names the cascade as canonical, gives each tier its semantic role, and provides literal patch text for all three.

3. **Per-vault info pages (T10 scope) were stubs (16 stubs of 31 vaults)**. Until per-vault cards exist with rich frontmatter, neither Bases nor Dataview have meaningful data to render — both depend on the vault_card frontmatter schema. T9 + T10 + T11 are intentionally bundled in M3.5 because the rendering layer and the data layer are interdependent; shipping rendering without schema produces empty cards; shipping schema without rendering produces unused data.

The compounding produces today's state: the 16-card static HTML gallery shows what existed at M3.1 era (when 16 stubs were created at 2026-05-21); the 15+ vaults forked since then are absent from the gallery; the Maintenance footer asks the operator to do manual work that the YAML inventory already encodes. T9 closes this by replacing line 42 with a 3-tier fallback that reads the vault_cards directory and the inventory_vaults.yaml dynamically.

## 3. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **3-tier fallback: Bases primary + Dataview JS fallback + plain markdown commented last-resort** (RECOMMENDED). Replace HOME.md line 42 with Bases embed `![[what/inventory/vault_gallery.base]]` as primary + Dataview JS fallback block (commented; opt-in by uncommenting) + plain markdown link list (commented; last-resort if both plugins disabled). NEW Bases definition file `node.aDNA/what/inventory/vault_gallery.base` defines `type == "vault_card"` filter + class-grouped Gallery cards view + All vaults table + Active only table. | Line 42 mutation in HOME.md + 1 NEW file `vault_gallery.base` (~80 lines YAML) | One mutation visible in Obsidian Gallery section; gallery now renders dynamically; Maintenance footer line 132 absorbed by Bases tier semantics | Adds 1 new file type to vault (`.base`); requires Bases core plugin enabled (already true per `core-plugins.json`); Dataview tier requires Dataview community plugin (already loaded per Maintenance footer evidence); plain-markdown tier is fully plugin-agnostic. **Rejected-but-mitigated risk**: Bases is relatively new; rendering behavior may vary across Obsidian versions — 3-tier cascade handles this gracefully (downgrade to Dataview tier without re-authoring HOME). |
| 2 | **Bases-only** (rejected). Replace line 42 with Bases embed only; no fallback tiers. | Line 42 mutation + 1 NEW file `vault_gallery.base` (~80 lines YAML) | Gallery renders only in Obsidian with Bases enabled; no fallback | **Rejected**: loses Maintenance footer line 132 plugin-agnostic legibility discipline — if Bases plugin disabled in a future Obsidian release OR if vault opened in non-Obsidian markdown viewer, gallery shows raw embed syntax. The 3-tier cascade is the discipline; Bases-only abandons it. |
| 3 | **Dataview-only** (rejected). Replace line 42 with Dataview JS block; no Bases tier. | Line 42 mutation (~50 lines JS) | Gallery renders only with Dataview enabled; no Bases-native experience | **Rejected**: Bases is the Obsidian-native primitive going forward; Dataview is a community plugin with separate maintenance lifecycle. New vault designs should default to Bases as primary tier with Dataview as fallback (mirrors the Bases-first design language in modern Obsidian docs). Reversing the cascade (Dataview primary + Bases fallback) inverts the intended primitive-progression. |
| 4 | **Static HTML + sync skill** (rejected). Keep line 42 static; add a `skill_inventory_to_gallery_sync.md` that regenerates the HTML block from inventory YAML at operator-invocation. | Line 42 unchanged + NEW skill file (~200 lines) | Gallery still static; operator must run sync skill on every inventory change | **Rejected**: solves the manual-sync problem with an automation but doesn't shift the rendering primitive. The HOME.md remains drift-prone (sync requires explicit operator action); doesn't get the batteries-included experience the north-star UX goal requires. Sync skill could exist separately as a fallback maintenance tool for the plain-markdown tier of Option 1, but it doesn't replace the cascade. |
| 5 | **Externalize gallery to separate canvas/note** (rejected). Move gallery out of HOME.md into a dedicated `node.aDNA/gallery.canvas` or `node.aDNA/Gallery.md`; HOME.md links to it. | Line 42 → link only + NEW file (~varies) | Gallery rendered in separate note; HOME.md loses inline gallery | **Rejected**: HOME.md is the per-vault landing page (`type: home_page`; cssclasses dashboard + homepage); the gallery is the visual hero of the operator's first-contact experience. Externalizing breaks the first-contact UX and adds a navigation hop. The Maintenance footer line 124-132 explicitly scopes Maintenance for "inventory changes" — the gallery belongs in HOME. |

## 4. Recommendation

**Option 1 — 3-tier fallback: Bases primary + Dataview JS fallback + plain markdown commented last-resort** — is recommended, matching the Maintenance footer line 132 legibility discipline ("*intentionally a static-data Dataview view so it remains legible as plain markdown when Dataview is unavailable*") generalized to a 3-tier cascade with Bases now as the primary primitive.

### Rationale

- **The 3-tier cascade preserves Maintenance footer doctrine while gaining dynamism.** Tier 1 (Bases) is the first-class Obsidian-native render; Tier 2 (Dataview JS) is the fallback if Bases plugin disabled; Tier 3 (plain markdown commented) is the last-resort if both plugins disabled or vault opened in a non-Obsidian viewer. The cascade is implemented inline in HOME.md line 42's replacement (not three separate sections) — operators see Tier 1's output by default; uncommenting Tier 2 or Tier 3 enables the fallbacks at zero re-authoring cost.
- **Bases is the Obsidian-native primitive going forward.** Bases shipped as a core plugin and is enabled by default in modern Obsidian. The `.base` file format defines filters/formulas/properties/views over frontmatter — exactly what the vault_cards directory provides. The Bases tier reads `type == "vault_card"` cards from `node.aDNA/what/vault_cards/` and renders them grouped by `class` with persona-formatted labels. T10 v0.2 schema's 22-field frontmatter (`vault_slug`, `display_name`, `persona`, `class`, `img_class`, `status`, `headline_mission_state`, etc.) provides the columns the Bases views consume.
- **Dataview JS fallback is non-breaking and operator-discoverable.** The Dataview block is committed but inside `%% Tier 2 Dataview JS fallback %%` HTML comment markers OR `<!-- Tier 2 Dataview JS fallback -->` markdown comments. Operators wanting fallback uncomment in-place. Same data source (vault_cards/ frontmatter); same emitted CSS class structure (`<div class="vault-gallery"><div class="vault-card class-...">...`) per `hestia_accent.css` consumer compatibility.
- **Plain markdown commented last-resort handles plugin-disabled edge cases.** If both Bases and Dataview are disabled (e.g., vault opened in mobile Obsidian without plugin sync, or in a plain markdown viewer for offline review), Tier 3 is a static commented link list to the per-vault cards. This is the absolute fallback per Maintenance footer line 132 discipline.
- **`vault_gallery.base` lives at `node.aDNA/what/inventory/`, NOT `.obsidian/`.** Zero `.obsidian/` mutations required. The `.base` file is part of vault content (versioned in git) — operators can copy it cross-vault as a Bases-driven gallery template at v8 P6 propagation.
- **Backward compatibility with the 16 existing vault_cards** is preserved by T10's backwards-compat clause (T10 §finding statement): the 11-field stub frontmatter parses cleanly against the v0.2 22-field schema (additive optional fields); Bases filter `type == "vault_card"` matches both stub and elaborated cards.
- **v8 P6 propagation contract**: HOME template + Bases definition template are node-vault-class artifacts. Candidates `.adna/template_home_node_vault.md` + `.adna/template_vault_gallery.base` join the v8 P6 propagation queue (~17-20 → ~22-26 at M3.5 close per mission spec line 434).

### Acceptance smoke test (operator-side; verification_surface=operator per ADR-014 Clause C)

1. **Operator opens `node.aDNA/HOME.md` in Obsidian**; confirms Gallery section renders via Bases primary tier (Bases view with grouped vault cards) — no raw embed syntax visible.
2. **Operator disables Bases plugin** (temporary; in Settings → Core plugins → Bases off); reloads HOME.md; uncomments Tier 2 Dataview JS block; confirms gallery renders via Dataview tier.
3. **Operator disables both Bases and Dataview**; reloads HOME.md; uncomments Tier 3 plain markdown links; confirms gallery shows static link list.
4. **Operator re-enables Bases plugin**; gallery returns to Tier 1 Bases render (re-comment Tier 2/3 to original state).
5. **No `.obsidian/` config mutations occurred** (Tier 1 enable/disable test done via Settings UI, not config edit).

## 5. Literal patch text

### Patch A — `node.aDNA/HOME.md` line 42 replacement (Gallery section only)

The current line 42 is a single-line static HTML block (1500 bytes). The replacement spans ~70 lines and includes all 3 tiers.

```diff
@@ -39,9 +39,77 @@
 ## Gallery

-<div class="vault-gallery"><div class="vault-card class-node"><a href="what/vault_cards/the_node.aDNA.md"><img src="who/assets/vault_cards/node.aDNA.jpg" onerror="this.style.display='none'"><div class="card-label">node.aDNA · Hestia</div></a></div><div class="vault-card class-framework">... [16 cards total, ~1500 bytes total static HTML] ...</div></div>
+<!-- Tier 1 (primary): Obsidian Bases view — renders if Bases core plugin enabled. -->
+<!-- Bases definition lives at node.aDNA/what/inventory/vault_gallery.base. -->
+
+![[what/inventory/vault_gallery.base]]
+
+<!-- Tier 2 (fallback): Dataview JS — renders if Bases unavailable AND Dataview community plugin loaded.
+     Uncomment the ```dataviewjs block below to enable.
+
+~~~dataviewjs
+const cards = dv.pages('"what/vault_cards"').where(p => p.type === "vault_card").sort(p => p.class);
+const gallery = dv.el("div", "", {cls: "vault-gallery"});
+for (const card of cards) {
+    const img_class = card.img_class || `class-${card.class}`;
+    const wrap = gallery.createDiv({cls: `vault-card ${img_class}`});
+    const a = wrap.createEl("a", {href: card.file.path});
+    a.createEl("img", {attr: {
+        src: `who/assets/vault_cards/${card.vault}.jpg`,
+        onerror: "this.style.display='none'"
+    }});
+    const label = a.createDiv({cls: "card-label"});
+    label.setText(card.persona ? `${card.vault} · ${card.persona}` : card.vault);
+}
+~~~
+-->
+
+<!-- Tier 3 (last-resort): plain markdown link list — renders in any markdown viewer.
+     Uncomment the link list below if both Bases AND Dataview are unavailable.
+
+- [aDNA.aDNA](what/vault_cards/the_aDNA.aDNA.md) · Rosetta
+- [III.aDNA](what/vault_cards/the_III.aDNA.md) · Argus
+- [node.aDNA](what/vault_cards/the_node.aDNA.md) · Hestia
+- [LatticeNetwork.aDNA](what/vault_cards/the_LatticeNetwork.aDNA.md) · Venus
+- [LatticeLabs.aDNA](what/vault_cards/the_LatticeLabs.aDNA.md) · Berthier
+- [LatticeAgent.aDNA](what/vault_cards/the_LatticeAgent.aDNA.md) · Stanley
+- [LatticeTerminal.aDNA](what/vault_cards/the_LatticeTerminal.aDNA.md) · Spock
+- [CanvasForge.aDNA](what/vault_cards/the_CanvasForge.aDNA.md) · Hermes
+- [SiteForge.aDNA](what/vault_cards/the_SiteForge.aDNA.md)
+- [VideoForge.aDNA](what/vault_cards/the_VideoForge.aDNA.md) · Iris
+- [MoleculeForge.aDNA](what/vault_cards/the_MoleculeForge.aDNA.md) · Franklin
+- [RareHarness.aDNA](what/vault_cards/the_RareHarness.aDNA.md) · Asclepius
+- [WilhelmAI.aDNA](what/vault_cards/the_WilhelmAI.aDNA.md) · Hygieia
+- [LAVentureGraph.aDNA](what/vault_cards/the_LAVentureGraph.aDNA.md)
+- [ContextCompass.aDNA](what/vault_cards/the_ContextCompass.aDNA.md) · Ariadne
+- [Spacemacs.aDNA](what/vault_cards/the_Spacemacs.aDNA.md) · Daedalus
+- (additional ~15 vault_cards added at M3.5 Obj 9 populate-apply pass)
+-->
+
+<!-- Render-tier cascade: Bases (Tier 1) → Dataview JS (Tier 2) → plain markdown (Tier 3).
+     Maintenance footer (line 124-132 below) explains how to re-author each tier when inventory changes;
+     T9 design spec at aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj3_t9_design_spec.md
+     details the cascade rationale. -->
```

### Patch B — NEW `node.aDNA/what/inventory/vault_gallery.base` (Bases definition file)

```yaml
filters:
  and:
    - file.path.startsWith("what/vault_cards/")
    - 'type == "vault_card"'

formulas:
  card_label: |
    if(persona, vault + " · " + persona, vault)
  status_emoji: |
    if(status == "active", "✅",
      if(status == "genesis", "🌱",
        if(status == "pending", "⏳",
          if(status == "superseded", "🪦", "·"))))
  card_image: |
    "who/assets/vault_cards/" + vault + ".jpg"
  card_link: |
    file.path

properties:
  vault:
    displayName: Vault
  persona:
    displayName: Persona
  class:
    displayName: Class
  status:
    displayName: Status
  status_emoji:
    displayName: ""
  card_label:
    displayName: Card

views:
  - type: cards
    name: Gallery
    order:
      - status_emoji
      - card_label
    image: card_image
    imageAspectRatio: 1.0
    cardSize: 220
    groupBy: class
    sort:
      - column: class
        direction: ASC
      - column: vault
        direction: ASC

  - type: table
    name: All vaults
    order:
      - status_emoji
      - vault
      - persona
      - class
      - status
    sort:
      - column: class
      - column: vault

  - type: table
    name: Active only
    filters:
      and:
        - 'status == "active"'
    order:
      - vault
      - persona
      - class
    sort:
      - column: class
      - column: vault
```

**Notes on `.base` file contract**:

- The `.base` file is YAML; Bases parses + renders the views in Obsidian.
- `filters.and` restricts to `type == "vault_card"` cards under `what/vault_cards/` — won't pick up other markdown files.
- `formulas` derive computed fields: `card_label` joins vault + persona; `status_emoji` is a simple status visualization; `card_image` constructs the image path; `card_link` exposes the file path.
- `properties` declares display names; columns appear in views based on `order`.
- 3 views: **Gallery** (default; class-grouped card view with images); **All vaults** (table; full inventory); **Active only** (table; filter `status == "active"`).
- The default view (Gallery) renders inline at `![[what/inventory/vault_gallery.base]]` embed in HOME.md.

### Patch C — `.adna/template_home_node_vault.md` (v8 P6 upstream candidate; not landed at M3.5)

```markdown
---
type: home_page
cssclasses: [dashboard, homepage]
node: {{NODE_NAME}}
operator: {{OPERATOR}}
persona: {{PERSONA}}
governance: CLAUDE.md
data_source: what/inventory/inventory_vaults.yaml
vault_count: 0   # filled by skill_inventory_refresh
updated: {{DATE}}
last_edited_by: agent_init
tags: [home, lattice_home, gallery, {{PERSONA_LOWER}}, node_adna, exemplar]
---

<div class="banner-{{PERSONA_LOWER}}">⚑ &nbsp; Lattice — {{NODE_NAME}} · {{PERSONA}} &nbsp; ⚑</div>

<div class="{{PERSONA_LOWER}}-greeting">

*{{PERSONA_GREETING}}*

</div>

## Node Status

| | |
|---|---|
| **Node** | `{{NODE_NAME}}` |
| **Operator** | `{{OPERATOR}}` |
| **Machine class** | {{MACHINE_CLASS}} |
| **Persona** | {{PERSONA}} |
| **Workspace root** | `{{WORKSPACE_ROOT}}` |
| **Vault count** | filled by skill_inventory_refresh |
| **Last inventory refresh** | filled by skill_inventory_refresh |
| **Governance** | [[CLAUDE]] · [[MANIFEST]] · [[STATE]] · [[CHANGELOG]] |

Counts sourced from `./what/inventory/inventory_vaults.yaml`. Refresh via [[how/skills/skill_inventory_refresh|skill_inventory_refresh]].

---

## Gallery

<!-- Tier 1 (primary): Obsidian Bases view -->

![[what/inventory/vault_gallery.base]]

<!-- Tier 2 (fallback): Dataview JS — uncomment to enable when Bases unavailable -->
<!-- Tier 3 (last-resort): plain markdown links — uncomment if both plugins disabled -->

---

(remaining sections per node-vault standard — Vaults / Named Projects / Tools & Quick Nav / Maintenance — populated by skill_inventory_refresh.md + skill_node_bootstrap_interview.md)
```

### Patch D — `.adna/template_vault_gallery.base` (v8 P6 upstream candidate; not landed at M3.5)

Same body as Patch B (vault_gallery.base literal), but at upstream `.adna/template_vault_gallery.base` for new-vault inheritance via `skill_project_fork.md`.

## 6. v8 P6 propagation contract

| Stage | Action | Authority | Verification |
|---|---|---|---|
| **P6 entry gate** | Operator ratifies P5 → P6 phase transition per Campaign SO #19. v8 P6 propagation queue includes T9's 2 promotion candidates: (a) `.adna/template_home_node_vault.md` (HOME template; per-persona substitutions); (b) `.adna/template_vault_gallery.base` (Bases definition template). Both join queue alongside T1+T2+T3+T4+T6+T7 prior candidates + T10's vault_card schema template + T11's data-projection contract + T7+T8 skills + ADR-014/-023. Queue growth ~17-20 → ~22-26 per mission spec Note line 434. | Operator + Rosetta | Plan ratification at P5 → P6 entry session |
| **P6 commit decision** | Bundle vs. separate: **Option (b) per-component** preserves the HOME template + Bases definition as orthogonal primitives (operators can adopt one without the other). | Operator at P6 entry | Commit messages name T9 + F-S2-6-9 + cite this spec |
| **P6 commit** | Apply via `cp aDNA.aDNA/what/templates/template_home_node_vault.md .adna/` (or equivalent path resolution per v8 P6 promotion workflow). Apply Bases template similarly. Commit message template: `v7.x: add template_home_node_vault.md + template_vault_gallery.base (Bases-driven HOME gallery 3-tier render fallback; T9 per M3.5; F-S2-6-9; Nth instance of single-commit additive-upstream pattern)`. | Operator pushes; Rosetta drafts | `git -C .adna log -1 --oneline` shows new commit; smoke test §4 passes |
| **P6 post-commit smoke** | Fresh fork via updated `skill_project_fork.md`; confirm new node-vault inherits HOME template + Bases definition file; operator opens forked node.aDNA in Obsidian + gallery renders via Bases tier with the fresh vault's vault_cards/. | Rosetta or dispatched validator | PASS on operator-side smoke |
| **P6 ecosystem propagation** | Notify 19+ partner vaults that v7.x ships node-vault HOME template upgrade + Bases definition pattern; node-vault forks made between v7.0 and v7.x can opt-in by replacing their static HOME gallery with the 3-tier cascade. **Cross-vault propagation candidates**: SiteForge.aDNA partner-site templates absorb the Bases definition pattern for per-vault registry surfaces; LatticeNetwork.aDNA Venus-persona registry inherits the cascade for the Network.aDNA aggregate view. | Berthier coord memos | Coord memos in `who/coordination/archive/` with `status: acknowledged` |

**P6 verification expectation**: zero regressions against v7.0 (existing HOME.md files unchanged unless operator opts in); fresh forks gain the Bases-driven HOME template; F-S2-6-9 closed at the template layer.

**P6 rollback path**: revert via `git revert`. Template removal from `.adna/` restores fresh forks to static HOME default; vault-local HOME.md remains unchanged.

## Forward integration with M3.7

DEFERRED STUB — operationalizes at M3.7 (modular III for Obsidian).

M3.7 (modular III for Obsidian) runs III cycles against the Bases-driven gallery rendering + Dataview JS fallback + plain markdown last-resort. T12 design spec names 5 ranker dimensions (`persona_growth_v0` + `research_context_generation_v0` + cross-vault-relationship-fidelity + vault-card-completeness + registry-freshness); M3.7 implements measurement modules + runs cycles against the HOME render across Bases / Dataview / plain markdown tiers + per-vault cards. T9's 3-tier cascade gives M3.7 three measurement surfaces per HOME page; each tier scored independently against ranker dimensions (e.g., Bases tier may rank higher on Findability via the grouped card view; plain-markdown tier may rank higher on Trust via plain-text legibility). M3.7 design spec cites T9 + T10 + T11 + T12; M3.7 implementation-class missions declare `verification_surface: dispatch` for III-rendered output operator-side smoke per ADR-014 Clause C. Defers WHEN+HOW+WHY of III-dimension-formalization to v8 P5 100-III-loops capstone and III-on-Obsidian runtime to M3.7.

## Cross-references

- [[../mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md|M3.5 mission spec]] — parent mission (Obj 3)
- [[m35_obj4_t10_design_spec.md|T10 design spec]] — sibling (per-vault info-page schema v0.2; T9 renders T10's data shape)
- [[m35_obj5_t11_design_spec.md|T11 design spec]] — sibling (Astro registry surface; cross-vault projection of same data)
- [[m35_obj6_t12_design_spec.md|T12 design spec]] — sibling (III-target forward-reference; future ranker dimensions for the rendered output)
- [[m34_obj3_t7_design_spec.md|M3.4 T7 design spec]] — substrate (6-section structure template; 8th canonical instance at this T9 spec)
- [[m34_obj4_t8_design_spec.md|M3.4 T8 design spec]] — substrate (forward-reference-stub discipline; T9 is FIRST CONSUMER post-graduation)
- [[../../../../how/skills/skill_verification_handoff.md|M3.4 T7 skill]] — `skill_home_polish.md` (M3.5 Obj 6) DELEGATES to this for `--mode verify`
- [[../../../../how/skills/skill_obsidian_integration_test.md|M3.3 T6 skill]] — depth-2 DELEGATION target via T7
- [[../../../../how/skills/skill_obsidian_canonicalize.md|M3.2 skill]] — depth-3 DELEGATION target via T6
- [[../../../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — Clause C consumer-mission obligation (M3.5 declares `verification_surface: operator`)
- [[../../../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023]] — sibling (data-projection contract; T11 + T9 are co-equal renders of the same projection)
- [[../../../../STATE.md|STATE router]] — M3.5 S1 OPENED bullet
- `/Users/stanley/lattice/node.aDNA/HOME.md` — live mutation target (line 42)
- `/Users/stanley/lattice/node.aDNA/what/inventory/inventory_vaults.yaml` — canonical source-of-truth (vault_count: 31)
- `/Users/stanley/lattice/node.aDNA/.obsidian/core-plugins.json` — Bases enabled verification (`"bases": true`)

## Notes

- **Patch A + Patch B are both load-bearing.** Patch A is the visible HOME.md change operators see; Patch B is the Bases definition that makes Patch A's Tier 1 render meaningful. Neither alone delivers the batteries-included gallery.
- **Self-reference (Standing Order #8 — 18th tactical invocation candidate)**: T9 design spec recommends the gallery render that this very vault's gallery (in `aDNA.aDNA/`) does NOT use — `aDNA.aDNA` is a `standard_dev` class vault (not `node_operational`); its HOME (if any) follows a different render contract. T9 specifically targets `node.aDNA` (HOME.md), which is the operator's per-node operational landing page. The 3-tier cascade is the recommended primitive for node-vault-class HOMEs; node.aDNA is the first instance. Future node-vault forks inherit via `.adna/template_home_node_vault.md` at v8 P6 propagation.
- **T8 forward-reference-stub discipline first consumer post-graduation**: T9 spec includes `## Forward integration with M3.7` stub. Pattern GRADUATED at M3.4 close (3/3 use instances); M3.5 is the first consumer post-graduation. Reinforces graduation by demonstrating consumer behavior.
- **6-section structure 8th canonical instance** at this T9 spec (T7+T8 added 6th+7th at M3.4; T1+T2+T3+T4+T5+T6 added 1st-6th at M3.1+M3.2+M3.3). `skill_design_spec_authoring.md` graduation advances 8 → 9 of 3+ use instances at this spec.
- **Dual-audience note**: a newcomer reading the spec finds Option 1 explained in plain language ("the gallery should update when vaults change; Bases is the modern way; Dataview is the fallback; plain markdown is the last-resort") + the Patch A + Patch B literal text as concrete artifacts. A developer reads the `.base` YAML in Patch B + the 3-tier cascade structure in Patch A + the v8 P6 promotion contract in §6 + the integration with T10 schema + ADR-023 projection contract.
- **`.obsidian/` zero touches**: T9 ships zero `.obsidian/` config or plugin file mutations. The Bases core plugin is already enabled at `node.aDNA/.obsidian/core-plugins.json` (`"bases": true`); Dataview community plugin is already loaded per HOME.md Maintenance footer line 132 evidence. T9 mutations target only HOME.md (vault content) + a NEW `.base` file under `node.aDNA/what/inventory/` (vault content).

## Completion Summary

T9 design spec landed at M3.5 S2; HOME.md Gallery section + `vault_gallery.base` lands at M3.5 Obj 9 populate-apply pass (this same S2 session); `.adna/template_home_node_vault.md` + `.adna/template_vault_gallery.base` deferred to v8 P6 single-commit-per-patch propagation cycle. 6-section structure 8th canonical instance ratified. T8 forward-reference-stub discipline FIRST CONSUMER post-graduation; reinforces M3.4 graduation.
