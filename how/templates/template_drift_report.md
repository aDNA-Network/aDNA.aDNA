---
type: template
created: 2026-06-02
updated: 2026-06-02
status: draft
last_edited_by: agent_stanley
tags: [template, drift_report, upstream_drift, schema, json, draft]
---

# Template: Drift Report

> The machine-readable artifact the deterministic watcher emits and the agentic reviewer drains (see [[what/patterns/pattern_upstream_drift_watch|pattern_upstream_drift_watch]]). One JSON file per watcher run: `reports/drift_report_<repo>_<utc>.json`. Always written (even at `severity: none`); enqueued for review only on material drift. **Status: `draft`** — schema v0, derived from the first live instance (`Cmux.aDNA/upstream_drift_watch/reports/drift_report_cmux_20260602T200935Z.json`).

## Field schema

| Field | Type | Meaning |
|---|---|---|
| `report_id` | string | `drift_report_<repo>_<utc>` |
| `schema` | string | pointer to this template |
| `generated_at_utc` | ISO-8601 | when the watcher ran |
| `generator` | string | watcher version / "manual" |
| `consumer_vault` | string | the vault that owns the pin |
| `upstream` | object | `{repo, license, release_api}` |
| `pin.current` | object | `{channel, version, build, commit, on_disk_*sha256, on_disk_matches_record}` |
| `pin.latest_<channel>` | object | `{channel, version, tag_commit, published_at, dmg_asset, dmg_sha256}` |
| `deltas[]` | array | per newer version: `{version, published_at, tag_commit, kind, summary, removals?, fixes_relevant_to_overlay?}` |
| `severity` | enum | `none \| informational \| opportunity \| breaking` |
| `severity_reason` | string | one-line justification |
| `surface_assessment` | object | per relied-on surface: `OK \| CHANGED \| REMOVED` + note |
| `wanted_feature_signals[]` | array | `{signal, target_channel, status: REACHED\|PENDING, evidence, action}` |
| `escalation` | object | `{needs_human: bool, reason}` |
| `recommendation` | object | `{action, config_changes, fingerprint, ...}` — the watcher's deterministic suggestion; the reviewer ratifies/overrides |
| `material_delta_hash` | sha256 | idempotency key = `sha256(canonical(material_deltas))` |
| `next_action` | string | what the reviewer should do |

## Severity rubric

- `none` — latest == pin.
- `informational` — newer version exists; no wanted-feature hit; no relied-on surface changed.
- `opportunity` — a `wanted_feature_signal` reached its `target_channel`, or a beneficial fix to a surface we use.
- `breaking` — a relied-on surface `REMOVED`/`CHANGED`. (→ `needs_human: true`.)

## Canonical example

`Cmux.aDNA/upstream_drift_watch/reports/drift_report_cmux_20260602T200935Z.json` — severity `opportunity` (`workspaceGroups@stable` reached); `pin.current` nightly `0.64.10-nightly.2666946827701`, `pin.latest_stable` `0.64.12` (DMG `23d214d2…`); surface_assessment all `OK` (washRail + overlay keys present @ v0.64.12 schema); `material_delta_hash 881fe901…`; `next_action: auto-author campaign_cmux_upstream_adapt`.

```json
{
  "report_id": "drift_report_<repo>_<utc>",
  "generated_at_utc": "<iso8601>",
  "consumer_vault": "<Vault>.aDNA",
  "upstream": { "repo": "<owner/repo>", "release_api": "https://api.github.com/repos/<owner/repo>/releases" },
  "pin": {
    "current": { "channel": "<c>", "version": "<v>", "build": "<b>", "commit": "<sha>", "on_disk_matches_record": true },
    "latest_stable": { "version": "<v>", "tag_commit": "<sha>", "published_at": "<iso>", "dmg_sha256": "<sha256>" }
  },
  "deltas": [ { "version": "<v>", "kind": "feature|refinement|fix", "summary": "<clean-room paraphrase>", "removals": [] } ],
  "severity": "none|informational|opportunity|breaking",
  "severity_reason": "<one line>",
  "surface_assessment": { "<surface>": "OK|CHANGED|REMOVED — <note>" },
  "wanted_feature_signals": [ { "signal": "<feat>", "target_channel": "<c>", "status": "REACHED|PENDING", "action": "<...>" } ],
  "escalation": { "needs_human": false, "reason": "<...>" },
  "recommendation": { "action": "<...>", "config_changes": "<...>" },
  "material_delta_hash": "<sha256>",
  "next_action": "<...>"
}
```

## Related

- [[how/skills/skill_upstream_drift_watch]] (emits it) · [[how/skills/skill_upstream_drift_review]] (drains it) · [[what/patterns/pattern_upstream_drift_watch]].
