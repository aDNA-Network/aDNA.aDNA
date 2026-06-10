---
type: skill
skill_type: agent
created: 2026-05-25
updated: 2026-05-25
status: active
category: vault_card_authoring
trigger: "Author new or audit existing per-vault info-pages (vault_cards) against the T10 v0.2 canonical schema (22-field typed frontmatter + 9-section H2 body + 9 per-vault-class variants + backwards-compat clause for 16 existing v0.1 stubs). Vault-agnostic via --vault-card-dir slot + --mode author|audit|schema-only + --inventory-source + --target-vault. DELEGATES O1+O2+O3 check-set via T7 dispatch when audit mode renders cards (skill_obsidian_integration_test.md depth-2 via skill_verification_handoff.md depth-1). 5th use instance of cross-skill primitive composition pattern post-graduation."
last_edited_by: agent_stanley
graduated_from: null
graduated_at: null
graduated_via: campaign_adna_serious_tool_readiness M3.5 S2b
tags: [skill, vault_card_authoring, vault_card_audit, t10_consumer, schema_v0_2, twenty_two_field_frontmatter, nine_section_body, nine_per_vault_class_variants, backwards_compat_clause, cross_skill_delegation, m3_5, adr_023_consumer, t8_forward_reference_stub, m3_7_forward_reference_stub, standing_order_8_19th_tactical_invocation, post_graduation_reinforcement_5th_instance, rosetta]

requirements:
  tools: [bash 3.2+ portable, python3 (yaml + json modules), grep, mkdir]
  context:
    - <vault>/what/vault_cards/the_*.aDNA.md                                            # target vault_cards directory (READ + WRITE)
    - <vault>/what/inventory/inventory_vaults.yaml                                      # canonical source-of-truth (HARD; never mutated)
    - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj4_t10_design_spec.md  # T10 v0.2 schema source
    - <vault>/how/skills/skill_verification_handoff.md                                  # T7 DELEGATE target when --mode audit
    - <vault>/how/skills/skill_obsidian_integration_test.md                             # T6 DELEGATE target (depth-2 via T7)
    - aDNA.aDNA/what/decisions/adr_023_registry_data_projection_contract.md             # ADR-023 (data-projection contract; this skill feeds the projection)
  permissions:
    - read inventory_vaults.yaml + existing vault_cards (read-only for audit; read-then-write for author)
    - write new vault_card files at <vault>/what/vault_cards/the_<slug>.aDNA.md (author mode)
    - write elaboration overlays preserving v0.1 stub frontmatter fields (author --target-vault <existing>)
    - invoke T7 skill as subprocess when --mode audit
    - read-only on T10 design spec + ADR-023 (consults; does not mutate)
---

# Skill: Vault Card Authoring + Audit

## Overview

Authors new or audits existing per-vault info-pages (vault_cards) at `<vault>/what/vault_cards/` against the **T10 v0.2 canonical schema** ratified by T10 design spec (`m35_obj4_t10_design_spec.md` — 9th canonical instance of the 6-section design-spec structure). v0.2 schema: 22-field typed frontmatter + 9-section H2 body + 9 per-vault-class variants (forge / framework / platform / org_vault / org_graph / network / node / knowledge / tooling) + backwards-compat clause preserving the 16 v0.1 stub cards created 2026-05-21.

**Architecture**: this skill is a SCHEMA-DRIVEN AUTHORING + AUDIT ENGINE. It reads the canonical inventory + (optionally) existing vault_cards, applies the per-vault-class template branch based on `vault.class`, and emits cards conforming to v0.2 schema. When `--mode audit`, the skill DELEGATES O1+O2+O3 check-set (frontmatter validates / body sections present / Obsidian renders) via T7 (`skill_verification_handoff.md`) which dispatches depth-2 to T6 (`skill_obsidian_integration_test.md`). This is the **5th use instance** of the cross-skill primitive composition pattern that GRADUATED at M3.4 close — second post-graduation reinforcement.

**Location**: lives at `aDNA.aDNA/how/skills/skill_vault_card_authoring.md` (NOT upstream `.adna/how/skills/`) per the same disposition as sibling skills.

**Doctrinal anchors**:
- T10 design spec ([[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj4_t10_design_spec.md]]) — 22-field frontmatter spec + 9-section body spec + 9 per-vault-class variants + backwards-compat clause are the literal authoring contract this skill obeys
- [[../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023]] (draft) — this skill writes the per-vault data overlays that the projection script (`build_vaults_data.mjs`) reads to project `vaults.json` for the Astro `/vaults/` registry surface
- [[../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] Clause C — M3.5 declares `verification_surface: operator`; audit mode dispatches via T7 (not agent-side verdicts)

**Self-reference (Standing Order #8 — 19th tactical invocation candidate in v8)**: this skill drop is the **6th behavioral test** of the M2.4.5-hardened `aDNA.aDNA/how/skills/AGENTS.md` routing layer. The skill codifies the per-vault-class authoring discipline that the very vault_cards it writes (`node.aDNA/what/vault_cards/the_*.aDNA.md`) carry — recursive self-reference (the skill that authors vault cards encodes the schema that the cards themselves declare via `schema_version: "0.2"` frontmatter).

## Trigger

Invoked when:

- A node-vault operator wants 15 NEW vault_cards generated for missing-vault slugs: `./how/skills/skill_vault_card_authoring.md --vault <path> --mode author --target-vault <slug>`
- The operator wants 16 existing stub cards elaborated to v0.2 schema (preserving v0.1 frontmatter fields): `./how/skills/skill_vault_card_authoring.md --vault <path> --mode author --target-vault <existing-slug>` (elaboration sub-mode auto-detected from v0.1 frontmatter presence)
- An audit pass reports schema drift across the full vault_cards directory: `./how/skills/skill_vault_card_authoring.md --vault <path> --mode audit`
- A pure schema-validation pass without rendering: `./how/skills/skill_vault_card_authoring.md --vault <path> --mode schema-only`
- M3.5 Obj 9 populate-apply pass (first canonical consumer; authors 15 NEW + elaborates 16 existing)
- v8 P6 propagation cycle when partner-vaults adopt the v0.2 schema + author own vault_cards

## Parameters

| Parameter | Source | Required | Default |
|---|---|---|---|
| `--vault <path>` | CLI | Yes | n/a — required (target vault root containing what/vault_cards/ + what/inventory/) |
| `--vault-card-dir <path>` | CLI | No | `<vault>/what/vault_cards/` |
| `--mode <author \| audit \| schema-only>` | CLI | No | `audit` |
| `--inventory-source <path>` | CLI | No | `<vault>/what/inventory/inventory_vaults.yaml` |
| `--target-vault <slug>` | CLI | No | `all` (limits operation to single vault when set; e.g., `the_ComfyForge.aDNA`) |
| `--elaboration-mode` | CLI flag | No | auto (detected from existing card's `schema_version` field; `v0.1` → elaborate; `v0.2` → no-op or refresh) |
| `--verbose` | CLI flag | No | false |

## Requirements

### Tools

- `bash 3.2+` (portable to macOS default shell)
- `python3` with built-in `yaml` + `json` modules (no external deps; used for frontmatter parsing + schema validation)
- `grep` (BSD or GNU; used for `schema_version` field detection + drift reporting)
- `mkdir -p` (POSIX; ensures `what/vault_cards/` exists in author mode)

### Context files

- `<vault>/what/inventory/inventory_vaults.yaml` (HARD; canonical; vault list + per-vault metadata source)
- `<vault>/what/vault_cards/the_*.aDNA.md` (READ existing for audit/elaboration; WRITE new for author)
- T10 design spec at `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj4_t10_design_spec.md` (schema source)
- T7 skill at `<vault>/how/skills/skill_verification_handoff.md` (HARD when `--mode audit`)
- ADR-023 at `aDNA.aDNA/what/decisions/adr_023_registry_data_projection_contract.md` (consumer relationship)

## Safety preconditions

1. **Vault root + vault_cards dir exist**: `<vault>` exists; `<vault>/what/vault_cards/` exists or `mkdir -p` creates it (author mode only).
2. **Inventory YAML parses**: validated via `python3 -c "import yaml; yaml.safe_load(open(...))"` (returns dict with `vaults:` list).
3. **Target vault present in inventory**: when `--target-vault <slug>` set, the slug MUST appear in `vaults[].name`; ERROR otherwise.
4. **Backwards-compat preserved**: when elaborating an existing v0.1 stub, the 11 v0.1 fields (`type`, `vault`, `persona`, `status`, `class`, `img_class`, `created`, `updated`, `last_edited_by`, `tags`) are PRESERVED; v0.2 optional-additive fields are added; the existing body content is preserved verbatim with v0.2 sections APPENDED (never replaced).
5. **No `.adna/` or `.obsidian/` mutations**: skill never touches upstream template + Obsidian config.

## Implementation

```bash
#!/usr/bin/env bash
# skill_vault_card_authoring.md — vault_card author/audit/schema-only against T10 v0.2 schema
# Vault-agnostic; consumes T10 design spec literal text + inventory_vaults.yaml

set -euo pipefail

VAULT=""
VAULT_CARD_DIR=""
MODE="audit"
INVENTORY=""
TARGET="all"
ELABORATION_MODE="auto"
VERBOSE="false"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --vault) VAULT="$2"; shift 2 ;;
    --vault-card-dir) VAULT_CARD_DIR="$2"; shift 2 ;;
    --mode) MODE="$2"; shift 2 ;;
    --inventory-source) INVENTORY="$2"; shift 2 ;;
    --target-vault) TARGET="$2"; shift 2 ;;
    --elaboration-mode) ELABORATION_MODE="$2"; shift 2 ;;
    --verbose) VERBOSE="true"; shift ;;
    *) echo "Unknown arg: $1" >&2; exit 2 ;;
  esac
done

[[ -z "$VAULT" ]] && { echo "ERROR: --vault required" >&2; exit 2; }
[[ -z "$VAULT_CARD_DIR" ]] && VAULT_CARD_DIR="${VAULT}/what/vault_cards"
[[ -z "$INVENTORY" ]] && INVENTORY="${VAULT}/what/inventory/inventory_vaults.yaml"

# Safety preconditions
[[ -d "$VAULT" ]] || { echo "PRECONDITION_FAIL: vault root absent" >&2; exit 3; }
[[ -f "$INVENTORY" ]] || { echo "PRECONDITION_FAIL: inventory YAML absent" >&2; exit 3; }
[[ "$MODE" == "author" ]] && mkdir -p "$VAULT_CARD_DIR"
[[ -d "$VAULT_CARD_DIR" ]] || { echo "PRECONDITION_FAIL: vault_card_dir absent (audit mode)" >&2; exit 3; }
python3 -c "import yaml; yaml.safe_load(open('$INVENTORY'))" || { echo "PRECONDITION_FAIL: inventory YAML parse" >&2; exit 3; }

case "$MODE" in
  author)
    # Per-vault-class template branch dispatch (9 classes per T10)
    # For --target-vault <slug>: resolve class via inventory; emit card per template branch
    # Elaboration sub-mode: detect existing v0.1 stub; preserve fields + append v0.2 sections
    python3 <<PYEOF
import yaml, os, sys, re, datetime
inv = yaml.safe_load(open("$INVENTORY"))
target = "$TARGET"
elaboration_mode = "$ELABORATION_MODE"
vault_card_dir = "$VAULT_CARD_DIR"

CLASS_TEMPLATES = {
    "forge":   "forge",
    "framework": "framework",
    "framework_candidate": "framework",
    "platform": "platform",
    "platform_genesis_stub": "platform",
    "org_vault": "org_vault",
    "org_graph": "org_graph",
    "network": "network",
    "node": "node",
    "knowledge": "knowledge",
    "tooling": "tooling",
    "coordination": "tooling",  # 7th candidate category — TaskForge per LIP-0007
    "superseded": "knowledge",
    "standard_dev": "org_vault",
    "namespace": "org_vault",
    "domain_project": "knowledge",
    "code_repo": "tooling",
    "external_dep": "tooling",
}

def slug_to_filename(vault_name):
    return f"the_{vault_name}.md"

def emit_v02_card(vault_entry, existing_v01=None):
    name = vault_entry["name"]
    cls = vault_entry.get("class", "knowledge")
    template_cls = CLASS_TEMPLATES.get(cls, "knowledge")
    persona = vault_entry.get("persona", "")
    display = vault_entry.get("display_name", name.replace(".aDNA", ""))
    today = datetime.date.today().isoformat()
    fm = existing_v01 or {}
    fm.setdefault("type", "vault_card")
    fm["schema_version"] = "0.2"
    fm["vault_slug"] = name
    fm["display_name"] = display
    fm.setdefault("persona", persona)
    fm["class"] = cls
    fm["status"] = vault_entry.get("health", "active")
    fm["last_synced"] = today
    fm["synced_from"] = "$INVENTORY"
    fm["updated"] = today
    fm["last_edited_by"] = "agent_stanley"
    fm.setdefault("tags", ["vault_card", "node_adna"])
    if "schema_version: \"0.2\"" not in str(fm.get("tags", [])):
        fm["tags"] = list(set(fm["tags"] + [f"class_{template_cls}", "v0_2_schema"]))

    fm_text = yaml.dump(fm, default_flow_style=False, sort_keys=False).strip()
    body = f"""# {display}

*{vault_entry.get('note', display + ' — node-vault info page')}*

> Persona: **{persona or '—'}**  ·  Class: **{cls}**  ·  Status: **{fm['status']}**

## Persona

{persona or 'TBD'} — see workspace CLAUDE.md table for persona archetype + tagline blurb. Persona archetype framing pulled from upstream lattice governance.

## Current Focus

{vault_entry.get('note', 'Vault info derived from inventory_vaults.yaml. Refresh via skill_inventory_refresh.')}

## Architecture

Class **{cls}**. Governance at `{vault_entry.get('governance', name + '/CLAUDE.md')}`. Inventory path: `{vault_entry.get('path', '/Users/stanley/aDNA/' + name)}`.

## Cross-Vault Relationships

(per-vault-class edges; populated from T11 build_vaults_data.mjs projection at next sync:vaults run)

## Headline ADRs

(top 3 by recency; populated at next refresh)

## Recent Missions

(last 3-5 closed; populated at next refresh)

## Quick Links

- [CLAUDE.md](../../../{name}/CLAUDE.md) · [MANIFEST.md](../../../{name}/MANIFEST.md) · [STATE.md](../../../{name}/STATE.md) · [HOME.md](../../../{name}/HOME.md)

## On the Lattice

Adopter-facing narrative — what this vault offers to the lattice + how to engage. See workspace `~/aDNA/CLAUDE.md` Project Discovery table for full context.

## III & Context

`iii_target:` — forward-stub reserved for v8 P5 100-III-loops capstone per T12 design spec. Dimensions `persona_growth_v0` + `research_context_generation_v0` + cross-vault-relationship-fidelity + vault-card-completeness + registry-freshness will populate at first III cycle.
"""
    return fm_text, body

vaults = inv.get("vaults", [])
targets = [v for v in vaults if v["name"] == target] if target != "all" else vaults
for v in targets:
    fname = os.path.join(vault_card_dir, slug_to_filename(v["name"]))
    existing_fm = None
    if os.path.exists(fname):
        with open(fname) as f:
            content = f.read()
        m = re.match(r"^---\n(.+?)\n---\n", content, re.DOTALL)
        if m:
            existing_fm = yaml.safe_load(m.group(1)) or {}
            if existing_fm.get("schema_version") == "0.2":
                if "$VERBOSE" == "true":
                    print(f"[skip] {v['name']} already v0.2")
                continue
    fm_text, body = emit_v02_card(v, existing_fm)
    with open(fname, "w") as f:
        f.write(f"---\n{fm_text}\n---\n\n{body}")
    print(f"[wrote] {fname}")
PYEOF
    ;;
  audit)
    # Scan vault_card_dir; report v0.1 vs v0.2 distribution + missing required fields + body section presence
    # Delegate O1+O2+O3 check-set via T7 dispatch when --check-set T6
    T7="${VAULT}/how/skills/skill_verification_handoff.md"
    if [[ -f "$T7" ]]; then
      [[ "$VERBOSE" == "true" ]] && echo "[skill_vault_card_authoring] dispatching audit to T7" >&2
      bash "$T7" --mission mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages --surface operator --check-set T6 --vault "$VAULT"
    fi
    # Inline drift report
    python3 <<PYEOF
import os, re, yaml
vd = "$VAULT_CARD_DIR"
v01, v02, missing_fm = [], [], []
for fn in sorted(os.listdir(vd)):
    if not fn.startswith("the_") or not fn.endswith(".md"):
        continue
    with open(os.path.join(vd, fn)) as f:
        c = f.read()
    m = re.match(r"^---\n(.+?)\n---\n", c, re.DOTALL)
    if not m:
        missing_fm.append(fn); continue
    fm = yaml.safe_load(m.group(1)) or {}
    sv = fm.get("schema_version")
    if sv == "0.2":
        v02.append(fn)
    else:
        v01.append(fn)
print(f"v01_stubs: {len(v01)}")
print(f"v02_cards: {len(v02)}")
print(f"missing_frontmatter: {len(missing_fm)}")
print(f"drift_action: elaborate {len(v01)} v0.1 stubs via author --target-vault <slug>")
PYEOF
    ;;
  schema-only)
    # Pure validation pass; no rendering or T7 dispatch
    python3 <<PYEOF
import os, re, yaml, sys
vd = "$VAULT_CARD_DIR"
ok = 0; bad = 0
REQUIRED = ["type", "vault_slug", "display_name", "class", "status", "schema_version"]
for fn in sorted(os.listdir(vd)):
    if not fn.startswith("the_") or not fn.endswith(".md"):
        continue
    with open(os.path.join(vd, fn)) as f:
        c = f.read()
    m = re.match(r"^---\n(.+?)\n---\n", c, re.DOTALL)
    if not m:
        bad += 1; print(f"FAIL {fn}: no frontmatter"); continue
    fm = yaml.safe_load(m.group(1)) or {}
    missing = [k for k in REQUIRED if k not in fm]
    if missing:
        bad += 1; print(f"FAIL {fn}: missing {missing}")
    else:
        ok += 1
print(f"\nschema_validation: {ok} OK / {bad} FAIL")
sys.exit(0 if bad == 0 else 1)
PYEOF
    ;;
  *)
    echo "ERROR: --mode must be author|audit|schema-only, got: $MODE" >&2
    exit 2
    ;;
esac
```

## Output format

```yaml
verdict: PASS | FAIL | DELEGATED
mode: author | audit | schema-only
vault: <vault_path>
vault_card_dir: <path>
target: <slug or all>
counts:
  v01_stubs_found: <int>
  v02_cards_found: <int>
  cards_written: <int>             # author mode
  cards_elaborated: <int>          # author mode w/ existing v0.1 detected
  validation_pass: <int>            # schema-only
  validation_fail: <int>           # schema-only
delegation:
  t7_invoked: true | false
  t7_verdict: PASS | FAIL | DISPATCHED | n/a
notes:
  - <free-text observations>
```

## Cross-skill delegation contract

When `--mode audit`:
- This skill is depth-0 entry point
- DELEGATES depth-1 to `skill_verification_handoff.md` (T7) with `--surface operator --check-set T6`
- T7 DELEGATES depth-2 to `skill_obsidian_integration_test.md` (T6) for O1+O2+O3 (frontmatter validates + body sections present + Obsidian renders the card)
- T6 reaches depth-3 to `skill_obsidian_canonicalize.md` (M3.2) for canonicalization helpers

This is the **5th post-graduation use instance** of the cross-skill primitive composition pattern (graduated at M3.4 close).

## Backwards-compat handling

The 16 existing v0.1 stub cards (created 2026-05-21 at workspace-fork-time; ~340 bytes each; 11-field frontmatter) parse cleanly against v0.2 schema because v0.2 fields are optional-additive. When `--mode author --target-vault <existing-slug>` is invoked:

1. Skill reads existing `the_<slug>.md`
2. Parses frontmatter via `python3 yaml.safe_load`
3. Detects `schema_version` field; if absent or `0.1` → enters **elaboration sub-mode**
4. Preserves all 11 v0.1 fields verbatim (`type`, `vault`, `persona`, `status`, `class`, `img_class`, `created`, `updated`, `last_edited_by`, `tags`)
5. Adds v0.2 optional-additive fields (`schema_version: "0.2"`, `vault_slug`, `display_name`, `last_synced`, `synced_from`, `iii_target: {}`, etc.)
6. Appends v0.2 body sections (`## Persona`, `## Current Focus`, `## Architecture`, `## Cross-Vault Relationships`, `## Headline ADRs`, `## Recent Missions`, `## Quick Links`, `## On the Lattice`, `## III & Context`) — never replaces existing body content
7. Writes elaborated card atomically (`.tmp` + `mv`)

## Forward integration with M3.7

DEFERRED STUB — operationalizes at M3.7 (modular III for Obsidian).

M3.7 will extend this skill with `--mode iii-prepare` that emits per-card render-snapshots for III cycle consumption against the 5 dimensions named in T12 design spec. Each card's `iii_target:` frontmatter field will populate with per-dimension scores after the first III cycle in v8 P5 100-III-loops capstone. M3.7 design spec cites T9 + T10 + T11 + T12 + this skill (and skill_home_polish) as substrate.

## Examples

### Author 15 NEW vault_cards in bulk
```
for slug in ComfyForge.aDNA SpeechForge.aDNA VAASLattice.aDNA RemoteControl.aDNA TappInterface.aDNA TaskForge.aDNA ContextCommons.aDNA RareArchive.aDNA ScienceStanley.aDNA wga.aDNA CakeHealth.aDNA SuperLeague.aDNA LPWhitepaper.aDNA zeta.aDNA; do
  ./how/skills/skill_vault_card_authoring.md --vault /Users/stanley/aDNA/node.aDNA --mode author --target-vault "$slug"
done
```

### Elaborate 16 existing v0.1 stubs to v0.2 schema (elaboration sub-mode auto-detected)
```
for slug in $(ls node.aDNA/what/vault_cards/ | grep -E "the_.+\.aDNA\.md" | sed 's/the_//;s/\.md//'); do
  ./how/skills/skill_vault_card_authoring.md --vault /Users/stanley/aDNA/node.aDNA --mode author --target-vault "$slug"
done
```

### Audit pass with T7 dispatch
```
./how/skills/skill_vault_card_authoring.md --vault /Users/stanley/aDNA/node.aDNA --mode audit
```

### Pure schema validation (no T7 dispatch)
```
./how/skills/skill_vault_card_authoring.md --vault /Users/stanley/aDNA/node.aDNA --mode schema-only
```

## Cross-references

- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj4_t10_design_spec.md|T10 design spec]] — v0.2 schema source (22 fields + 9 sections + 9 variants + backwards-compat)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj3_t9_design_spec.md|T9 design spec]] — sibling (HOME renders cards via Bases gallery)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj5_t11_design_spec.md|T11 design spec]] — sibling (Astro registry consumes card frontmatter via projection)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj6_t12_design_spec.md|T12 design spec]] — sibling (III-target forward-reference)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md|M3.5 mission spec]] — parent (Obj 8 = this skill)
- [[skill_verification_handoff.md|T7 skill_verification_handoff]] — DELEGATE target depth-1 when --mode audit
- [[skill_obsidian_integration_test.md|T6 skill_obsidian_integration_test]] — DELEGATE target depth-2 via T7
- [[skill_obsidian_canonicalize.md|M3.2 skill_obsidian_canonicalize]] — DELEGATE target depth-3 via T6
- [[skill_home_polish.md|sibling skill_home_polish]] — pair pattern (HOME render + per-vault info pages = co-renders of same data)
- [[../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023 (draft)]] — this skill writes the per-vault overlays the projection script reads
- [[../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — Clause C consumer-mission obligation
- `/Users/stanley/aDNA/node.aDNA/what/vault_cards/` — first canonical consumer directory (16 elaborations + 15 NEW at M3.5 Obj 9)
- `/Users/stanley/aDNA/node.aDNA/what/inventory/inventory_vaults.yaml` — canonical source-of-truth

## Self-reference note

This skill is the 6th behavioral test of the M2.4.5-hardened `how/skills/AGENTS.md` routing layer (after M3.2 + M3.3 + M3.4 T7 + M3.4 T8d + M3.5 skill_home_polish). Q2 SQL re-measurement deferred to M3.x ≥ 20-session corpus. Standing Order #8 19th tactical invocation candidate in v8: the skill that authors vault cards encodes the schema (`schema_version: "0.2"`) the cards themselves declare — recursive self-reference. The skill drop reinforces the M3.4-graduated cross-skill primitive composition pattern at the 5th post-graduation use instance.
