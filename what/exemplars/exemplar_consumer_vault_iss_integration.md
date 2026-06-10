---
type: exemplar
subtype: consumer_vault_onboarding
slug: exemplar_consumer_vault_iss_integration
campaign_origin: campaign_siteforge_iss (P5.M5)
status: ratified
created: 2026-05-28
last_edited_by: agent_siteforge_native
substrate_pin: "SiteForge.aDNA ISS P5.M4 close — 287/3-fail pytest baseline (3 C69 port tests pre-existing); substrate rollup md5 c6857d7b…"
pinned_at_commit: "59599c2"
target_time_budget: "≤ 30 min one-time setup per consumer vault"
authority_ratified_by:
  - adr_028_iss_architecture
  - adr_029_iss_standard_touch
  - workspace_standing_rule_8
tags: [exemplar, onboarding, consumer_vault, iss_integration, 30min_budget, t1_t2_t3, p5_m5, i3]
---

# Exemplar — Consumer-Vault ISS Integration (≤ 30 min)

> **What this is.** A hands-on, step-by-step onboarding guide for adding the ISS capability to a new consumer vault. The end state: a vault can author and submit one operator-decision gate using only standard artifacts. Target time budget: **≤ 30 min** one-time setup; subsequent gates cost only the per-gate authoring time (≤ 2 min per ADR-028 §AD-10).

> **Who this is for.** An agent in a vault that does **not** yet have an `iss/` wrapper. The vault could be a forge, a platform, a framework, an org-vault, an org-graph, a network, a node, or a coordination vault — all 8 aDNA categories carry adaptation guidance at `SiteForge.aDNA/what/lib/iss/adaptation_guides/`.

## § 0 — Preconditions

Before you start, confirm three things:

1. **Workspace has Standing Rule 8** — `grep "^8\." ~/aDNA/CLAUDE.md` returns the ISS discoverability rule. If absent, the workspace router is pre-Standing-Rule-8 and the standard hasn't propagated to your node yet; the operator should pull workspace CLAUDE.md updates first.

2. **Target vault exists** — `<vault>.aDNA/` is a real directory. The vault should have a `CLAUDE.md` of its own (its governance) and ideally a `STATE.md` (its operational snapshot).

3. **Canonical skill is reachable** — `test -f ~/aDNA/aDNA.aDNA/how/skills/skill_create_iss.md && echo OK`. If MISSING, the standard hasn't propagated and you can either bootstrap from `SiteForge.aDNA/how/skills/skill_create_iss.md` (the pre-lift location, still present per Standing Rule 8 soak-period precedent) or wait for the P5.M4 `.adna/` PR to land and clone the aDNA standard.

If all three preconditions hold, proceed.

## § 1 — T1 discovery check (≤ 3 min)

**Objective**: confirm the discovery tier-1 anchor is present; no edits required at this step.

```bash
# verify Workspace Standing Rule 8 wording
grep -A2 "^8\. \*\*Agent-authored" ~/aDNA/CLAUDE.md
```

You should see Rule 8 naming `skill_create_iss.md` + ADR-028 + ADR-029 + the `<vault>/iss/CLAUDE.md` wrapper convention + adaptation guides at `SiteForge.aDNA/what/lib/iss/adaptation_guides/`.

This step is purely **read-confirm**; you don't touch any files. T1 is always-loaded; if Rule 8 is present, your discovery tier 1 is already satisfied.

**Time check**: ≤ 3 min elapsed.

## § 2 — T2 wrapper opt-in (≤ 8 min)

**Objective**: create the `iss/` wrapper directory and CLAUDE.md with the `federation_ref` block.

```bash
# 1. create the wrapper directory
mkdir -p <vault>.aDNA/iss

# 2. determine your vault's parameters
#    - vault_id: short slug (e.g. moleculeforge, wilhelmai, zenzachary)
#    - persona: one of franklin / hermes / rosetta / partner / tokyo / neutral
#    - default_preset: one of partner_onboarding / clinician_evaluation / minimal_ux / enterprise_decision, OR null for gate-by-gate
#    - pinned_at_commit: SHA of SiteForge.aDNA HEAD right now (≤ 8 chars)
PIN=$(git -C ~/aDNA/SiteForge.aDNA rev-parse --short HEAD)
echo "PIN=$PIN"
```

Then author `<vault>.aDNA/iss/CLAUDE.md` with the wrapper template (`t2_wrapper_template.md` § 2 + § 3 surrounding sections). The skeleton:

```markdown
---
type: federation_wrapper
wrapper_for: SiteForge.aDNA (ISS subsystem)
created: 2026-05-28
last_edited_by: <your_agent_id>
substrate_pin: "SiteForge.aDNA ISS P5.M5 substrate-clean confirmation"
pinned_at_commit: "<PIN>"
tags: [federation, iss, consumer_wrapper, <vault_id>, p5_m5_landing]
---

# <Vault> `iss/` — SiteForge ISS Consumer Wrapper

<one-sentence charter: what this wrapper consumes, which sibling wrappers it coexists with>

## federation_ref

```yaml
federation_ref:
  source_vault: SiteForge.aDNA
  source_skill: how/skills/skill_create_iss.md
  source_library: what/lib/iss/
  source_skin_descriptor: what/lib/iss/skins/<vault_id>/skin.yaml
  version_policy: minor
  pinned_at_commit: "<PIN>"
  persona_token_default: <persona>
  default_preset: <preset|null>
  gate_path_discipline: "<vault>/how/gates/<gate_id>.output.json"
  fallback_tier: web
  rlhf_emit: false
  local_extensions: []
```

## Skin descriptor

<vault>'s skin descriptor is canonical at:

```
~/aDNA/SiteForge.aDNA/what/lib/iss/skins/<vault_id>/skin.yaml
```

(If your vault does not yet have a skin descriptor, see § 3 — it is optional at first onboarding.)

## What this wrapper consumes

- Authoring skill at `aDNA.aDNA/how/skills/skill_create_iss.md` (T3 anchor; loaded on demand)
- Library at `SiteForge.aDNA/what/lib/iss/` (generator + primitives + templates + tokens + skins; never copied here)
- Skin descriptor at `SiteForge.aDNA/what/lib/iss/skins/<vault_id>/skin.yaml` (read-only mirror)
- Twin ADRs at `aDNA.aDNA/what/decisions/adr_028_iss_architecture.md` + `adr_029_iss_standard_touch.md`

## Local extensions

`local_extensions: []` at landing per ADR-029 ST-3. Per-vault corrections graduate upstream via III.aDNA ADR-003 procedural shape (frequency ≥ 3, acceptance ≥ 0.80, operator approval).

## Pin discipline

Re-pin (`pinned_at_commit:` update) when (a) SiteForge.aDNA ships a minor release that this vault wants to consume, OR (b) a substrate-changing campaign closes affecting wrapper-visible contracts.
```

**Verification**:

```bash
# YAML block parses
python3 -c "import yaml; print(yaml.safe_load(open('<vault>.aDNA/iss/CLAUDE.md').read().split('---')[2].split('\`\`\`yaml')[1].split('\`\`\`')[0]))"
# wrapper file has content
wc -c <vault>.aDNA/iss/CLAUDE.md   # expect > 0
# federation_ref block is under 500 chars
awk '/^federation_ref:/,/^  local_extensions: \[\]/' <vault>.aDNA/iss/CLAUDE.md | wc -c   # expect ≤ 500
```

**Time check**: ≤ 11 min elapsed.

## § 3 — Skin descriptor (optional first-pass, ≤ 5 min)

**Objective**: either stub a vault-specific skin descriptor OR consume the `neutral` skin for first onboarding.

A skin descriptor lives at `SiteForge.aDNA/what/lib/iss/skins/<vault_id>/skin.yaml`. Minimal shape:

```yaml
vault_id: <vault_id>
display_name: <Vault>.aDNA
recommended_persona: <persona>
brand_css: |
  :root {
    --skin-vault: "<vault_id>";
    --skin-display-name: "<Vault>.aDNA";
    /* optional: --skin-accent: #<hex>, --skin-font-stack: "...", etc */
  }
```

**Skip-and-return-later path**: if your vault doesn't have a brand identity yet (e.g. a freshly-forked org-vault), set the wrapper's `source_skin_descriptor:` to `what/lib/iss/skins/neutral/skin.yaml` (the substrate default) for now. The skin can be authored at a later milestone without breaking the wrapper.

**Time check**: ≤ 16 min elapsed.

## § 4 — First gate invocation (≤ 10 min)

**Objective**: author one HTML gate at `<vault>/how/gates/<gate_id>.html` using the canonical skill.

The agent should now load `~/aDNA/aDNA.aDNA/how/skills/skill_create_iss.md` on demand (T3 tier) and invoke `generate()` with the four fields from `context_passing_protocol.md` § 1:

```python
generate(
    template_name = "phase_exit",          # or any other supported template
    persona_token = "<persona>",            # falls back to T2 default if omitted
    mission_id = "mission_<your_first_gate_test>",
    vault_context_snippet = "Onboarding the vault to ISS — first gate is a phase_exit confirmation that the wrapper landed correctly and round-trips end-to-end.",
    gate_options = [
        {"label": "Approve — onboarding complete", "description": "Wrapper landed, gate rendered, round-trip works.", "recommended": True}
    ],
)
```

The skill emits:
- `<vault>/how/gates/<gate_id>.html` — the gate (single-file HTML)
- `<vault>/how/gates/<gate_id>.pending` — sentinel

**Verification**:

```bash
# gate HTML exists
ls -la <vault>.aDNA/how/gates/*.html
# pending sentinel exists
ls -la <vault>.aDNA/how/gates/*.pending
# open in browser
open <vault>.aDNA/how/gates/<gate_id>.html
# you should see: persona greeting, intro paragraph (the vault_context_snippet), the option, a submit button
```

**Time check**: ≤ 26 min elapsed.

## § 5 — Operator submits gate (≤ 3 min)

**Objective**: operator clicks submit; round-trip writes `<gate_id>.output.json` and rotates `.pending` → `.archived`.

Default tier `web` invokes the T1A round-trip path: browser POSTs to `localhost:8765/save`; sidecar (auto-launched by `gate_receiver.py`) writes JSON to the canonical landing path.

If `localhost:8765` is unreachable (firewall, headless session), the gate's inner fallback chain (T1B `<a download>` → T2 FSA-API → T3 clipboard) per ADR-028 §AD-5/§AD-7 takes over without operator intervention.

**Verification**:

```bash
# output.json appears
ls -la <vault>.aDNA/how/gates/*.output.json
# pending rotated to archived
ls -la <vault>.aDNA/how/gates/*.archived
# JSON is well-formed and schema-v1
python3 -c "import json; d = json.load(open('<vault>.aDNA/how/gates/<gate_id>.output.json')); assert d['schema_version'] == '1.0'; print(d['responses'])"
```

**Time check**: ≤ 29 min elapsed.

## § 6 — Calling agent retrieves (≤ 1 min)

**Objective**: calling agent reads `<gate_id>.output.json` on next invocation and consumes `responses{}`.

Per `output_routing_protocol.md` § 4:

```python
output_path = f"{vault_root}/how/gates/{gate_id}.output.json"
data = json.loads(open(output_path).read())
assert data["schema_version"] == "1.0"
assert data["mission_id"] == "mission_<your_first_gate_test>"
operator_response = data["responses"]
# continue mission with operator_response in hand
```

**Time check**: ≤ 30 min elapsed. **Done.**

## § 7 — Sanity-check checklist

- [ ] Workspace Standing Rule 8 confirmed present (T1 discovery)
- [ ] `<vault>.aDNA/iss/CLAUDE.md` exists with `federation_ref` block ≤ 500 chars
- [ ] YAML block parses; all 6 placeholders substituted
- [ ] Canonical T3 skill at `aDNA.aDNA/how/skills/skill_create_iss.md` loaded successfully
- [ ] First gate HTML rendered + opens in browser + shows persona greeting + intro + option + submit
- [ ] Operator submission produced `<gate_id>.output.json` + `<gate_id>.archived`
- [ ] JSON parses against schema v1.0; `responses{}` contains expected fields
- [ ] Total elapsed time ≤ 30 min

## § 8 — Common pitfalls

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| **F-1 instruction-to-control mismatch** (ZZ Gate 1B) | Prose in `vault_context_snippet` asks for control affordance that template doesn't render | Read the chosen template's primitives; rewrite snippet to match what the template will render |
| **F-2 nonexistent-control references** | Snippet names a primitive (e.g. "slider") absent from the template | Consult `discovery_contract.md` § 3 for templates_available; pick a template whose controls match |
| **F-3 semantic-dimension mismatch** | Snippet asks "avoidance priority"; control labeled "CONFIDENCE" | Align snippet vocabulary to template's resolved control labels |
| **F-4 implicit-extensibility-no-surface** | Snippet invites adding items but template has fixed-cardinality options | Pick a template that supports your cardinality (e.g. `decision_gate_n_ranking` vs `decision_gate_3option`) |
| **Mustache-literal-in-text** (F-3 in `skill_create_iss.md` §Gotchas) | Snippet contains literal `{{` or `}}` describing template fields | Entity-escape as `&#123;&#123;` and `&#125;&#125;` per skill §Gotchas |
| **Default preset selected wrong template** | `default_preset: clinician_evaluation` chose a template that doesn't fit the gate | Set `default_preset: null` in wrapper for gate-by-gate selection |
| **`rlhf_emit: true` set without `iii/` wrapper** | Wrapper opts in to RLHF but vault has no `iii/` | ACCUMULATE skipped gracefully; sidecar logs to `meta.notes`; default to `false` until vault has live `iii/` campaign |
| **Skin descriptor missing** | Gate renders with no brand cascade | Either stub `skin.yaml` (this exemplar § 3) or accept the `neutral` skin |
| **`<vault>/how/gates/` missing** | Skill creates dir on first write — not an error | Pre-create with `mkdir -p <vault>/how/gates` for clarity |

The first four (F-1 to F-4) are the canonical ZZ Sangha Gate 1B failure modes that seeded P5.M6 (`mission_p5_6_gate_prompt_quality_review_process`). Until P5.M6's systematic pre-publish lint lands, mentally walk steps 4-5 of `context_passing_protocol.md` § 4 (snippet inline + options loop) with the template's resolved controls in view.

## § 9 — Worked example — MoleculeForge.aDNA

The cleanest live worked-example is **MoleculeForge.aDNA** (Franklin persona; deployed P4.M1; byte-stable since).

**Files to inspect end-to-end:**

```bash
# T1 anchor
grep -A2 "^8\. \*\*Agent-authored" ~/aDNA/CLAUDE.md

# T2 wrapper
cat ~/aDNA/MoleculeForge.aDNA/iss/CLAUDE.md

# T3 skill
cat ~/aDNA/aDNA.aDNA/how/skills/skill_create_iss.md

# substrate library
ls ~/aDNA/SiteForge.aDNA/what/lib/iss/

# skin descriptor
cat ~/aDNA/SiteForge.aDNA/what/lib/iss/skins/moleculeforge/skin.yaml

# any submitted gates (if any)
ls ~/aDNA/MoleculeForge.aDNA/how/gates/ 2>/dev/null
```

MoleculeForge's wrapper carries `persona_token_default: franklin`, `default_preset: null` (gate-by-gate), `fallback_tier: web`. It coexists orthogonally with the sibling `iii/` wrapper landed at MoleculeForge E0.M3. The pattern this exemplar walks through is the same pattern MoleculeForge demonstrates at production scale.

## § 10 — Cross-references

- **Sibling protocols (substrate-level at SiteForge.aDNA)** — `what/lib/iss/protocols/discovery_contract.md` (tier model) · `context_passing_protocol.md` (authoring-call signature) · `output_routing_protocol.md` (output landing + retrieval) · `t2_wrapper_template.md` (the ≤ 500-char block this exemplar imports verbatim in § 2)
- **Canonical skill (T3 anchor)** — `aDNA.aDNA/how/skills/skill_create_iss.md` (status `active` per P5.M1 close 2026-05-26; ~51 kB)
- **Twin ADRs** — `aDNA.aDNA/what/decisions/adr_028_iss_architecture.md` (architecture; 10 ADs; ratified P5.M2 2026-05-26) · `adr_029_iss_standard_touch.md` (standard-touch; 6 STs; ratified P5.M2 2026-05-26)
- **Workspace Standing Rule 8** — `~/aDNA/CLAUDE.md` §Standing Rules §8 (landed P5.M3 2026-05-26)
- **Adaptation guides** (read per your vault's aDNA category) — `SiteForge.aDNA/what/lib/iss/adaptation_guides/forge_platform_guide.md` (Forge + Platform patterns) · `framework_orgvault_orggraph_guide.md` (Framework + Org-Vault + Org-Graph) · `network_node_coordination_guide.md` (Network + Node + Coordination)
- **3 live wrapper canonical references** — `MoleculeForge.aDNA/iss/CLAUDE.md` (Franklin / Forge) · `WilhelmAI.aDNA/iss/CLAUDE.md` (Partner / Org-Vault; coexists with `siteforge/` wrapper) · `RareHarnessOld.aDNA/iss/CLAUDE.md` (Franklin / Platform; canonical anchor pending CF→RH-Reorg-Settlement)
- **P5.M6 (filed stub)** — `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/mission_p5_6_gate_prompt_quality_review_process.md` (will close the F-1/F-2/F-3/F-4 lint loop; until then, follow § 8 manually)
