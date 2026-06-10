---
type: exemplar
subtype: agent_usage_full_walkthrough
slug: exemplar_iss_full_walkthrough
campaign_origin: campaign_siteforge_iss (P7.1)
status: ratified
created: 2026-05-30
last_edited_by: agent_siteforge_native
substrate_pin: "SiteForge.aDNA ISS P7.1 session-open — 328 passed + 9 subtests; substrate rollup md5 f3f786dd… (post-P6.M4)"
pinned_at_commit: "59599c2"
target_time_budget: "≤ 2 min agent decision-moment → operator-readable gate (cached); ≤ 5 min cold-start"
authority_ratified_by:
  - adr_028_iss_architecture
  - adr_029_iss_standard_touch
  - adr_030_iss_skin_family_default_copy
tags: [exemplar, iss, full_walkthrough, agent_usage, end_to_end, session_trace, troubleshooting, p7_1, adr_030, partner_clean_copy]
---

# Exemplar — ISS Full Walkthrough (agent usage, end-to-end)

> **What this is.** The canonical end-to-end reference for an agent *using* the ISS subsystem in a single working session: from "I need an operator decision" → authoring an HTML gate → the operator completing it → reading the result back → continuing the mission. It documents the production substrate as of **ADR-028 (architecture) + ADR-029 (standard-touch) + ADR-030 (partner-clean copy)**.

> **How this differs from the onboarding exemplar.** [`exemplar_consumer_vault_iss_integration.md`](exemplar_consumer_vault_iss_integration.md) (P5.M5) covers **one-time vault onboarding** — how a vault that has no `iss/` wrapper gets set up (≤ 30 min, organized by discovery tier). **This** exemplar assumes the vault is already ISS-enabled and covers **per-session agent usage** (≤ 2 min per gate). For the cross-vault onboarding leg (§ 4), this exemplar *references* the onboarding exemplar rather than repeating it.

> **Who this is for.** An agent that has hit an operator decision-moment in any ISS-enabled vault (any of the 8 aDNA pattern categories — see `SiteForge.aDNA/what/lib/iss/adaptation_guides/`).

---

## § 1 — Quick start (3 steps to first gate)

You're an agent. You need a structured operator decision. Minimum path:

```python
import sys
sys.path.insert(0, "/Users/stanley/aDNA/SiteForge.aDNA/what/lib/iss/runtime")
import generator

# 1. Compose the gate data (one dict).
data = {
    "gate_id": "mymission_decision_gate_3option_20260530_141500",  # <mission>_<template>_<YYYYMMDD_HHMMSS>
    "vault": "MoleculeForge.aDNA",
    "composite_title": "Approve the experiment design?",
    "composite_question": "Proceed to wet-lab, revise, or hold?",
    # template-specific fields (options, sections, …) — see § 2c
}

# 2. Render the gate (template, persona, font_mode, data).
html = generator.generate("decision_gate_3option", "franklin", "system", data)

# 3. Write it to the canonical landing path; tell the operator to open it.
open("/Users/stanley/aDNA/MoleculeForge.aDNA/how/gates/" + data["gate_id"] + ".html", "w").write(html)
```

That's the whole inner loop. The rest of this exemplar is the full trace, the partner variant, and what to do when something doesn't go to plan.

---

## § 2 — Full session trace (decision-moment → continue)

Worked anchor: **MoleculeForge.aDNA** (Franklin persona; the canonical reference vault).

### 2a — The decision-moment

You're mid-mission and you reach a point only the operator can resolve (a phase-exit sign-off, an ADR ratification, an approval, a structured input). Don't guess and don't block silently — author a gate.

### 2b — Load the authoring skill (T3, on demand)

The canonical skill is the T3 anchor — load it only now, not always:

```
~/aDNA/aDNA.aDNA/how/skills/skill_create_iss.md
```

T1 (Workspace Standing Rule 8) told you ISS exists; your vault's `iss/CLAUDE.md` (T2) told you the persona/skin/preset defaults; the skill (T3) tells you the authoring call. Total context ≤ 12 kT (per ADR-029 ST-2 / `discovery_contract.md`).

### 2c — Choose template + persona/skin/preset

Pick the template whose form controls match your decision (don't describe controls the template can't render — that's the F-1..F-4 lint class, § 5):

| Template | Use when |
|---|---|
| `decision_gate_3option` | one decision, ~3 named options |
| `decision_gate_n_ranking` | rank/choose among N options |
| `adr_gate` | ratify one decision: ACCEPT / AMEND / DEFER / REJECT |
| `phase_exit` | multi-facet review + composite sign-off |
| `approval_gate` | single approve/reject |
| `confidence_rating` | rate confidence on a scale |
| `pilot_evaluation` | structured pilot scoring |
| `structured_input_form` | collect typed fields |
| `image_grid_variant` | choose among visual options |

Persona is one of `franklin · hermes · rosetta · partner · tokyo · neutral`. In practice you pass the vault's **skin** and let it resolve the rest: the skin descriptor (`SiteForge.aDNA/what/lib/iss/skins/<vault>/skin.yaml`) supplies `recommended_persona` + a default `preset`, both overridable per-gate. MoleculeForge → `franklin`, no default preset (gate-by-gate).

### 2d — Author via `generate()`

```python
html = generator.generate(template_name, persona, font_mode, data)
# template_name: one of the 9 above
# persona: a VALID_PERSONAS token (or pass data["skin"]="moleculeforge" and persona="franklin")
# font_mode: "online" | "offline" | "system"  (ADR-028 §AD-9)
# data: gate fields + optional chrome flags (show_provenance, first_timer_hint, …) or a preset
```

Write the result to the **canonical landing path** (ADR-028 §AD-6):

```
<vault>/how/gates/<gate_id>.html         # the gate
<vault>/how/gates/<gate_id>.pending      # sentinel (created alongside)
```

`<gate_id>` = `<mission_id>_<template>_<YYYYMMDD_HHMMSS>`. Authoring is sub-second with cached templates — well under the ≤ 2-min ergonomics target (Campaign SO #8 / ADR-028 §AD-10).

### 2e — Operator completes it (round-trip)

The operator opens the HTML in a browser and submits. The default `web` tier (T1A) POSTs the answer to a local `gate_receiver`:

```bash
PYTHONPATH=/Users/stanley/aDNA/SiteForge.aDNA python \
  /Users/stanley/aDNA/SiteForge.aDNA/what/lib/iss/runtime/gate_receiver.py \
  --port 8766 --gates-root /Users/stanley/aDNA/MoleculeForge.aDNA/how/gates
```

The receiver writes `<gate_id>.output.json` next to the HTML and clears the `.pending` sentinel. If the receiver is unreachable, the gate's **inner fallback chain** (T1B `<a download>` → T2 File-System-Access API → T3 clipboard) takes over with no agent intervention (ADR-028 §AD-5).

> **Receiver-port note:** the gate's `round_trip.js` defaults to `localhost:8765`. If a receiver is already running on a non-default port (e.g. 8766), set `data["receiver_url"] = "http://localhost:8766"` at authoring time so the rendered gate POSTs to the right place. (Substrate has no auto-discovery of running receivers — CF→Receiver-url-auto-discovery-warning.)

### 2f — Read the result back

On your next turn, poll for the output file (poll `.output.json` *presence*, not `.pending` absence) and load it:

```python
import json
out = f"/Users/stanley/aDNA/MoleculeForge.aDNA/how/gates/{data['gate_id']}.output.json"
result = json.loads(open(out).read())
assert result["schema_version"] == "1.0"          # ADR-028 §AD-7
decision = result["responses"]                     # per-template response shape
```

### 2g — Continue

Consume `result["responses"]` and proceed. The output JSON is RLHF-schema-compatible (`III.aDNA adr_005_rlhf_signal_channel.md`); if your vault has an `iii/` wrapper **and** an active learning campaign, set `rlhf_emit: true` in the wrapper to forward the signal (default `false`; `output_routing_protocol.md` § 5).

---

## § 3 — Partner-facing variant (post-P6.M4 / ADR-030)

When the operator is an **external partner** (not an internal operator), use a partner-family skin. ADR-030 makes partner gates **clean-by-default**: the chrome (first-timer hint, provenance footer, post-submit explainer) serves partner-clean copy automatically — no internal aDNA jargon — when the gate resolves to the `partner` family (declared by the skin's `persona_family: partner`, e.g. `wilhelmai` / `zenzachary`, or inferred from the `partner_onboarding` preset).

Two partner-specific authoring fields close the last gaps:

```python
data["provenance_vault_display"] = "AI4U — Wilhelm AI Initiative for the Undiagnosed"
# footer shows this program name; the routing `vault` id stays canonical for output.json

data["decision_significance"] = "binding"   # or "constitutional" — governance-grade badge
# (partner-appropriate; avoids the internal "PHASE EXIT" label)

# Optional explicit override of the reversibility line:
data["post_submit_reversibility_text"] = "Your selections are recorded; the team may follow up."
```

An explicit author value always wins; absent one, the partner-clean default is served. (See ADR-030 PC-1..PC-5.)

---

## § 4 — Cross-vault leg: a not-yet-onboarded vault

If the target vault has **no `iss/` wrapper yet**, onboard it first (one-time, ≤ 30 min) using the onboarding exemplar — do not improvise the setup here:

➡ **[`exemplar_consumer_vault_iss_integration.md`](exemplar_consumer_vault_iss_integration.md)** (§ 0 preconditions → § 2 T2 wrapper → § 3 skin → § 4 first gate).

Once the wrapper exists at `<vault>/iss/CLAUDE.md` (with its `federation_ref` block), this exemplar's § 2 trace applies unchanged. Pick the adaptation guide for the vault's aDNA pattern category:

- Forge / Platform → `SiteForge.aDNA/what/lib/iss/adaptation_guides/forge_platform_guide.md`
- Framework / Org-Vault / Org-Graph → `…/framework_orgvault_orggraph_guide.md`
- Network / Node / Coordination → `…/network_node_coordination_guide.md`

---

## § 5 — Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| **`output.json` never appears** | receiver not running, or gate POSTed to the wrong port | confirm a `gate_receiver` is up on the gate's `receiver_url` port; check for a `.gate_receiver.<port>.lock` sidecar at `gates_root`; or use the inner fallback (download/clipboard) |
| **Gate downloads instead of POSTing** | `localhost` receiver unreachable → T1B `<a download>` fallback fired | expected behavior; retrieve the downloaded JSON, or start the receiver and re-submit |
| **web tier entirely unavailable** (headless / firewalled) | no browser round-trip possible | fall back through the **outer chain**: web → **AskUserQuestion** → **copy-paste** (ADR-028 §AD-8). The gate's Tier-2/Tier-3 blocks render the question + a paste-able reply line |
| **`.pending` lingers after submit** | you're polling the sentinel, not the output | poll `<gate_id>.output.json` *presence*; the receiver clears `.pending` atomically on write |
| **Authoring-lint advisories on stderr (F-1..F-4)** | gate prose describes a control the chosen template doesn't render (P5.M6) | match prose to the template's actual controls; see `skill_create_iss.md` § pre-publish checklist. F-3 over-fires on descriptive prose — the sanctioned `rate_dimension_label` override is render-invariant (CF→F3-lint-descriptive-keyword-false-positive) |
| **Partner gate shows internal jargon** | gate didn't resolve to the `partner` family | ensure the skin declares `persona_family: partner` (or use the `partner_onboarding` preset); set `provenance_vault_display` for the footer (§ 3 / ADR-030) |
| **Mustache literal `{{` shows in output** | literal braces in prose | entity-escape as `&#123;&#123;` / `&#125;&#125;` (`skill_create_iss.md` § Gotchas) |

---

## § 6 — Cross-references

- **Canonical skill (T3)** — `aDNA.aDNA/how/skills/skill_create_iss.md` (`status: active`; open/watch siblings `skill_open_iss.md` + `skill_watch_iss.md`)
- **ADRs** — `aDNA.aDNA/what/decisions/adr_028_iss_architecture.md` · `adr_029_iss_standard_touch.md` · `adr_030_iss_skin_family_default_copy.md`
- **Workspace discovery (T1)** — `~/aDNA/CLAUDE.md` Standing Rule 8
- **Onboarding exemplar (vault setup)** — `exemplar_consumer_vault_iss_integration.md` (P5.M5)
- **Protocols** — `SiteForge.aDNA/what/lib/iss/protocols/`: `discovery_contract.md` · `context_passing_protocol.md` · `output_routing_protocol.md` · `t2_wrapper_template.md`
- **Adaptation guides** — `SiteForge.aDNA/what/lib/iss/adaptation_guides/` (all 8 aDNA pattern categories)
- **Live wrappers** — `MoleculeForge.aDNA/iss/CLAUDE.md` (Franklin / Forge) · `RareHarness.aDNA/iss/CLAUDE.md` (Franklin / Platform) · `WilhelmAI.aDNA/iss/CLAUDE.md` (partner / Org-Vault)
- **Substrate** — `SiteForge.aDNA/what/lib/iss/runtime/` (`generator.py`, `gate_receiver.py`, `round_trip.js`)
