---
type: pattern
created: 2026-07-02
updated: 2026-07-02
status: active   # GRADUATED at Champollion G3 (2026-07-02, D2b — 10 vault adoptions, census-verified; operator-ratified)
pattern_category: operational
applies_to: [decisions, campaigns, coordination, all_categories]
campaign_id: campaign_champollion
instances:
  - "aDNA.aDNA (this vault) — the canonical authoring skill `how/skills/skill_create_iss.md` (status active) + ADR-028 (architecture) + ADR-029 (standard-touch) + workspace Rule 8 routing; and the live counter-evidence: Champollion G0/G1/G2 all ran INLINE by choice while ISS receiver :8765 was UP"
  - "9 live consumer vaults with `iss/` wrappers (fable-review filesystem census 2026-07-02, shim-deduped): Molecules · Harness (RareHarness) · WilhelmAI · Network · CakeHealth · Obsidian · PercySleep · Warp · ZenZachary — each declaring federation_ref + persona (+ optional default_preset); RareHarnessOld carries an archived old-style wrapper (not counted live)"
graduation: "GRADUATED — ratified at Champollion G3 (2026-07-02, D2b; record: how/gates/champollion_p3_gate.output.md) on 10 vault-level adoptions (1 producer + 9 consumer vaults, census-verified). Workspace Rule 8's consumer count trued 3→10 the same gate (D6.1)."
last_edited_by: agent_rosetta
tags: [pattern, iss, operator_gate, decision_gate, askuserquestion, inline_vs_web, fallback_chain, rlhf, consumer_wrapper, champollion]
---

# pattern_iss_operator_gate

> **Plain-language version first**: sometimes an agent needs a *decision* from the operator, and the decision is too rich for a quick multiple-choice question — it's "here are four proposals, each with trade-offs and a SWOT, please rank them and leave comments." For that, the agent renders a proper **web surface**: a self-contained HTML page (an Interactive Secrets/Decision Surface — "ISS") with labelled options, side-by-side context, and a Submit button that writes the operator's answer back to a file the agent then reads. But — and this is the subtle part — the ISS is an *option*, not a reflex. For a plain yes/no or a pick-one-of-three, an inline chat question is faster and just as clear, so the agent stays inline. The real skill isn't building the surface; it's *knowing when to*. The honest evidence: on this very campaign, three operator gates in a row (G0, G1, G2) ran **inline by choice** even though the web surface was up and available — because the decisions, though weighty, were low-arity enough that inline won. The pattern is the decision boundary: rich/structured/multi-field/side-by-side → render the web gate; binary/low-arity → ask inline; and if the web can't render → fall back gracefully to inline, then to copy-paste.

## 1. Problem

Agents constantly need operator decisions — phase-exit gates, ADR ratifications, approvals, ranked structured input. Two surfaces exist, and picking wrong is costly in both directions:

1. **Inline is too thin for rich decisions.** `AskUserQuestion` is fast but flat: it can't show four proposals side-by-side, can't carry per-option SWOT + reasoning + context, can't collect a ranked or multi-field structured response. Forcing a genuinely rich decision through inline chat loses the affordances that let the operator decide *well* — the exact failure that motivated building the web gate (the MoleculeForge P3→P4 6-point architectural gate was "visibly superior" as a rendered surface vs inline).
2. **The web gate is too heavy for thin decisions.** Standing up an HTML surface, a receiver, and a round-trip for a plain yes/no is friction with no payoff — and worse, if you build a bespoke gate every time, you get N drifting one-off surfaces.
3. **A single surface with no fallback is brittle.** If the web path can't render (no `$DISPLAY`, no browser, no writable gates dir, SSH-only operator), a gate that *only* does web is a total failure for that decision.

So there are really two problems: (a) a reusable, non-bespoke *way* to render a rich operator gate, and (b) the *judgment* of when to render one at all versus staying inline — and a graceful degradation between them.

## 2. The mechanism

**ISS** (Interactive Secrets/Decision Surface) is a **sub-function of the site forge**, authored by one canonical skill and adopted by consumer vaults through a wrapper (ADR-028 = architecture, ADR-029 = standard-touch). Its shape:

- **One canonical authoring skill.** `aDNA.aDNA/how/skills/skill_create_iss.md` (status active) is the standard authoring path — a consumer vault invokes *this* skill, not a local fork. It renders a self-contained HTML gate (persona-skinned, zero build step) into `<vault>/how/gates/<gate_id>.html`, and reads the operator's answer back from `<gate_id>.output.json` via a two-file sentinel (`.pending` present + output absent = in-flight; output present = ready for pickup).
- **A three-tier *outer* fallback — this is the WHEN-to-render logic.** At invocation the skill probes capability and routes:

| Tier | Surface | Chosen when |
|---|---|---|
| **Tier 1 — web** | the rendered ISS HTML | `$DISPLAY`/`$BROWSER`/`open` present *AND* `how/gates/` writable *AND* the decision is rich/structured/side-by-side |
| **Tier 2 — inline** | `AskUserQuestion` | web unavailable **OR** option-count ≤ 4 with no rich context |
| **Tier 3 — copy-paste** | operator pastes JSON back | web + inline both unavailable, rich context |

- **A consumer wrapper is the adoption unit.** A vault landing ISS adds a `<vault>/how/federation/iss/CLAUDE.md` wrapper (placement per ADR-045) declaring a `federation_ref:` pin to the site-forge ISS substrate + a default `persona:` + optional `default_preset:`/`skin:`. Three-tier *context* load (ST-2): the canonical skill alone (≤4K) authors any gate; the wrapper adds per-vault pinning; an adaptation guide adds pattern-specific lookups only when needed.

The heart of the pattern is **the decision boundary, as actually practiced**: *rich / multi-field / benefits-from-side-by-side-comparison → Tier 1 web; binary / low-arity (≤ 4 options, no rich context) → Tier 2 inline.* And critically, **the ISS option is frequently declined even when available** — the boundary is a genuine judgment call the operator (or the agent on the operator's behalf) makes per gate, not an automatic "always render web."

## 3. Live instances (the structure IS the lesson)

**The standard + skill — authored in this vault (self-reference):**
- [[../../how/skills/skill_create_iss|skill_create_iss.md]] (status active) — the canonical authoring skill; its "When to invoke" section *is* the decision boundary ("Multi-field structured input · benefits from side-by-side comparison or rich context … Otherwise prefer `AskUserQuestion` (≤ 4 options, no rich context)"). Ratified by [[../decisions/adr_028_iss_architecture|ADR-028]] (10 architecture decisions) + [[../decisions/adr_029_iss_standard_touch|ADR-029]] (canonical-skill location, T1/T2/T3 context load, consumer-wrapper contract, the workspace-rule slot). **Workspace Rule 8** is the routing rule that makes ISS the workspace-canonical gate pattern.

**The live counter-evidence — this campaign's own gates ran inline by choice (self-reference, the load-bearing example):**
- Champollion's **G0, G1, and G2** operator gates *all ran inline* (in-chat / copy-paste tier) **while the ISS web receiver `:8765` was UP and available**. The P2 gate file records it explicitly: `outer_tier: copy_paste # inline-markdown surface per G0/G1 precedent (record homogeneity); ISS web tier available (receiver :8765 up) if preferred`, and the ratification was a plain in-chat "Your reccomendations are good! Let's move forward." These were weighty gates (a standard version cut, ADR ratifications, a role re-tier) — yet low-arity enough that inline won. **This is the pattern's core lesson in the flesh: the web surface is an option, and declining it is a legitimate, common outcome.**

**Nine live consumer wrappers — real cross-vault adoptions (concrete paths, read-only):**
- The three the standard names as reference integrations: `Molecules.aDNA/iss/CLAUDE.md` (Forge, Franklin persona) · `Harness.aDNA/iss/CLAUDE.md` (Platform — the RareHarness clinical vertical, `clinician_evaluation` default preset) · `WilhelmAI.aDNA/iss/CLAUDE.md` (Org-Vault, partner persona, `partner_onboarding` preset). Three different aDNA categories, one wrapper contract — the cross-vault uniformity ADR-029 ratifies.
- Plus six more found live at the M3.2 fable-review filesystem census (2026-07-02, shim-deduped): `Network.aDNA` · `CakeHealth.aDNA` · `Obsidian.aDNA` · `PercySleep.aDNA` · `Warp.aDNA` · `ZenZachary.aDNA` — each a real `how/federation/iss/CLAUDE.md` with `federation_ref` declarations. Adoption outran the documentation: workspace Rule 8 still says "3 live" (stale by 6, flagged out-of-scope), and the census — not the router row — is the count this pattern records. Verify-don't-inherit, applied to our own adoption claims.

> **The honest divergence, recorded not hidden**: the *architecture* (ADR-028) says "render the web gate"; the *practice* on this campaign was "stay inline." That is not a contradiction — it is exactly the three-tier fallback doing its job. The decision boundary is *judgment*, and the homogeneity-of-record argument (all Champollion gates inline, so the audit trail reads uniformly) is a real, valid reason to decline the richer surface. A pattern that only documented "always render ISS" would misrepresent how the surface is actually used.

## 4. Adoption (copy, don't re-derive)

**Authoring a gate (any agent, any vault):**
1. **Judge the arity first.** Rich / multi-field / needs-side-by-side / ranked → aim Tier 1 web. Binary / ≤ 4 options / no rich context → stay Tier 2 inline. This judgment is the whole skill; the surface is secondary.
2. If web: invoke the canonical [[../../how/skills/skill_create_iss|skill_create_iss]] — pick template + persona, bind data, render to `<vault>/how/gates/`, watch the sentinel, read the output JSON. Do **not** roll a bespoke gate.
3. Honor the **fallback chain**: probe capability; if web can't render, degrade to inline, then copy-paste — never fail the whole decision because one surface is unavailable.
4. It is legitimate to **decline** the web surface even when it's up (record homogeneity, speed) — declining is a normal outcome, not a defect.

**Landing ISS in a vault (consumer):**
1. Add a `<vault>/how/federation/iss/CLAUDE.md` wrapper (ADR-045 placement) with `federation_ref:` (pin the site-forge ISS substrate) + default `persona:` + optional `default_preset:`/`skin:` — sibling to your other federation wrappers; contains no forge code.
2. Load only Tier-1 context (the canonical skill) for most authoring; add the wrapper + an adaptation guide only when pattern-specific guidance is needed.

## 5. When NOT to use / anti-pattern

- **A plain confirmation or pick-one-of-≤4** should stay inline — that's the Tier-2 boundary. Rendering a full HTML gate for a yes/no is friction with no payoff.
- **Anti-pattern — the bespoke gate.** Rolling a one-off HTML surface instead of invoking the canonical skill produces N drifting gates and re-litigates the architecture every time. Use `skill_create_iss` (workspace Rule 8).
- **Anti-pattern — no fallback.** A gate that only does web is a total failure for an SSH-only or display-less operator. The three-tier chain is mandatory.
- **Anti-pattern — always-web reflex.** Rendering an ISS for *every* gate ignores the decision boundary; the Champollion G0/G1/G2 inline-by-choice runs are the standing proof that declining is often correct.
- **Anti-pattern — the AAR/analysis stuffed into a gate.** A decision gate collects a *decision*; durable analysis belongs in the ADR / AAR / mission artifact the gate *points at*, not in the gate surface.

## Forward integration (fold stub)

**`fold_batch: champollion_m6_1_rc`** — WHO: Rosetta (aDNA.aDNA), for ratification at Champollion **G3**, shipped via **M6.1**'s release candidate through `skill_template_release`; WHAT: the ISS consumer-wrapper pattern (a `how/federation/iss/` scaffold + `federation_ref` stub) folded into the `.adna/` fork-base so a fresh workspace inherits the operator-decision-gate wrapper (ADR-029 ST-5 already reserves this upstream-propagation slot). WHEN/HOW defer to M6.1's RC. Do NOT touch any template file or `.adna/` here.

## Provenance & graduation

Harvested at Operation Champollion **M3.2** (Pattern Harvest II, 2026-07-02, Rosetta/this vault) from the ISS standard authored in this vault (ADR-028/029, `skill_create_iss`, workspace Rule 8), the three live consumer wrappers, and — crucially — this campaign's own G0/G1/G2 gates running *inline by choice* while the web surface was up. **Instances: 10 vault-level adoptions** (the standard + canonical skill authored here · 9 live consumer `iss/` wrappers per the fable-review census) — the graduation threshold is long met; **ratification is gate work, flagged for Champollion G3**, and this file stays `status: draft` until the gate rules. Related patterns: [[pattern_question_test]] (the sibling that governs the *inline* side of the same boundary — when a question is well-formed for `AskUserQuestion`; ISS is what you reach for when the question outgrows it), [[pattern_coordination_countersign]] (an operator gate and a countersign both memorialize an approval — the gate for operator→agent, the countersign for agent→agent), [[pattern_campaign_splash]] (a campaign close often *points at* a gate's output the way it points at the AAR).
