---
type: exemplar_site
created: 2026-09-15
updated: 2026-09-15
inspected: 2026-09-15
last_edited_by: agent_codex
status: proposed
site: https://design-system.service.gov.uk/
functional_role: docs/design system
tonal_revolutionary: 15
tonal_basis: executor_heuristic_not_quality_score
hero_word_count: 38
hero_count_method: visible_headline_and_first_synopsis_excludes_actions_metadata
section_count: 10
section_count_method: sampled_nonutility_h2_groups_includes_subsections_not_full_page_composition
top_level_nav_count: 6
nav_model: "Six named primary destinations; search and consent controls excluded."
cta_count: 1
primary_verb: "Get started"
positioning_verbs: "design, use, learn"
above_fold_focus: "Service-design task statement; cookie choices precede it"
density_band: "medium"
palette_type: "Blue identity band, white headline, dark body text and underlined links; GDS Transport headline."
motion_budget: untested_normal_motion_static_reduced_preference_only
registry_treatment: "Styles, components and patterns form an organized resource catalog."
community_treatment: "Community is a primary navigation destination; participation/support groups also appear in the DOM headings."
demo_as_proof: "Component illustration plus dated release information, not task-execution proof."
evidence: how/campaigns/campaign_garnier/evidence/research/native/govuk.json
tags: [exemplar_site, garnier, research, govuk]
---

# GOV.UK Design System — GARNIER inspection, 2026-09-15

## Captured

[D] [Public page](https://design-system.service.gov.uk/); native Chromium desktop 1440×900 and mobile 375×812, light preference and reduced motion. Reviewed both fold and subsequent-frame PNGs in `how/campaigns/campaign_garnier/evidence/research/native/govuk__{desktop,mobile-lg}__{fold,next}.png`. The initial mobile consent block pushes the start action into the following screen. The content below the hero uses headings, short paragraphs and consistent link styles. Desktop aligns three resource groups; mobile preserves readable text rather than shrinking that grid.

[D] Hero count includes the visible headline and its first synopsis, excluding actions, navigation and metadata. Section count is a bounded heading diagnostic, not a full-page visual census. See [[reference_set_garnier_20260915]] for exact limitations and comparison rules.

## Lift for aDNA

[I] Use the existing aDNA type and spacing tokens as a coherent scale. Give paragraph, caption, code, action and metadata distinct roles. Keep links identifiable and write action labels that predict their outcome. This is a proposed application to GARNIER, not a claim that this site's visual choices caused successful outcomes.

## Avoid

[I] Do not copy government branding or prescribe its 19px paragraph size as a universal WCAG requirement. Its current type scale is a useful tested precedent, not a substitute for checking aDNA's font metrics and content.

## Reviewer reads

[I] One executor applied three existing heuristic lenses; these are not independent reviews or participant results.

- **Design Critic:** Hierarchy comes from type and spacing rather than decoration.
- **Anti-Bloat Editor:** Keep one concise lead paragraph; reserve small copy for secondary information.
- **Information Architect:** A newcomer can distinguish styles, reusable components and task patterns before drilling down.

## Related

[[reference_set_garnier_20260915]] · [[garnier_quality_research]] · [[front_page_doctrine]] · [[campaign_garnier]].
