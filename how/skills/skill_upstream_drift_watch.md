---
type: skill
skill_type: process
category: operations
created: 2026-06-02
updated: 2026-06-30
status: draft
trigger: "Scheduled (daily) or manual run for a pinned-dependency vault — deterministically diff upstream release state against the recorded pin + fingerprints, emit a severity-classified drift report, and enqueue a reviewer stub on material drift. No AI; detects and reports, never acts."
last_edited_by: agent_stanley
token_estimate: ~900
tags: [skill, process, upstream_drift, watcher, deterministic, shell, no_ai, severity, idempotency, spec_upstream_pin, draft]
---

# Skill: Upstream Drift Watch (deterministic watcher)

> **Status: `draft`** — pending two-cycle ratification. The cheap, unattended **detection** half of [[what/patterns/pattern_upstream_drift_watch|pattern_upstream_drift_watch]]. **No AI.** Fetch upstream state → diff against the recorded pin + fingerprints → emit a severity-classified drift report → on material drift, enqueue a stub for the agentic reviewer. Idempotent; safe to run on a daily schedule.

## Purpose

Turn the manual "is there an upstream update, and does it matter?" check into a deterministic shell run that any pinned-dependency vault can schedule. It **detects and reports; it never acts** — remediation is the reviewer's draft + the operator's gate.

## Trigger

- Scheduled (daily) by the L0 lease-gated scheduler (`aDNALabs.aDNA/.../scheduler_tier1_pilot.py` → `watch` subcommand), or
- Manually: `<vault>/<consumer-adapter> watch` (e.g. `lattice upstream watch` for Cmux).

## Inputs — the per-consumer `drift_config.yaml`

| Key | Meaning |
|---|---|
| `upstream.repo` / `release_api` / `channels` | where to fetch the upstream release surface |
| `pin_record` | path to the vault's pin record (`spec_upstream_pin` shape) |
| `fingerprint_dir` | the baseline hashes/snapshots to diff against |
| `wanted_feature_signals` | features whose arrival on a `target_channel` flips severity to `opportunity` (e.g. `workspaceGroups@stable`) |
| `affected_surface_map` | delta-kind → which surfaces the **reviewer** must load (the watcher only flags; the map powers L1) |
| `escalation_thresholds` | severity → importance default (`breaking→irreversible`, `opportunity→load-bearing`, `informational→routine`) |
| `seen_ledger` | path to the idempotency ledger (JSONL) |
| `adapter` | the consumer's deterministic surface-probe script (repo-specific) |

## Implementation

1. **Load config** — read `drift_config.yaml`; resolve `pin_record` → the current `{channel, version, build, commit}`.
2. **Fetch upstream state** — via the adapter: latest release(s)/channel build, published dates, tag commits, and (cheap) the declared surface (e.g. a published JSON schema, the `--help`/verb surface, registry tags). Tolerate transient failures (`|| true`); a probe *failure* is itself a drift signal (surface moved), not a silent pass.
3. **Compute deltas** — enumerate versions strictly newer than the pin; per delta capture `{version, published_at, tag_commit, kind}`.
4. **Probe surfaces deterministically** (adapter) — diff the live surface vs `fingerprint_dir`: schema keys present/absent, verb set added/removed, enum values retained. Record per-surface `OK | CHANGED | REMOVED`.
5. **Classify severity**:
   - `none` — latest == pin (nothing newer).
   - `informational` — newer version exists; no `wanted_feature_signal` hit; no relied-on surface changed.
   - `opportunity` — a `wanted_feature_signal` reached its `target_channel`, OR a beneficial fix to a surface we use.
   - `breaking` — a relied-on surface `REMOVED`/`CHANGED` (adapter-reported).
6. **Idempotency** — compute `material_delta_hash = sha256(canonical(material_deltas))`. If present in `seen_ledger` → still write the report but **do not enqueue** (already handled). An *open* adapt-campaign for this consumer also suppresses re-enqueue.
7. **Emit the drift report** — write `reports/drift_report_<repo>_<utc>.json` per [[how/templates/template_drift_report|template_drift_report]].
8. **Severity gate** — if `none`: STOP (cost ≈ 0). Else: append a one-line stub to `drift_queue.md` (`<utc> <repo> <severity> <report-path> <material_delta_hash>`) — the hand-off the L1 reviewer drains.
9. **Exit 0** — the watcher never mutates the graph, never re-pins, never opens a network browser. Detection only.

## Outputs

| Output | Type | Description |
|---|---|---|
| `reports/drift_report_<repo>_<utc>.json` | data | the structured drift report (always, even at `none`) |
| `drift_queue.md` stub line | data | enqueues the reviewer (only on material drift, only if unseen) |
| `seen_ledger.jsonl` append | data | idempotency anchor (written by the reviewer on resolution; the watcher reads it) |

## Error Handling

- **Upstream fetch fails** (rate-limit/auth/offline) → write a report with `severity: informational` + a `probe_error` note; do not crash the schedule. Repeated failures are themselves worth a stub.
- **Pin record unreadable** → fail loudly (config error); this is a setup bug, not drift.
- **Adapter missing** → fail loudly; a consumer wrapper without its adapter is mis-installed.

## Related

- [[how/skills/skill_upstream_drift_review]] (the L1 agentic half) · [[what/patterns/pattern_upstream_drift_watch]] · [[how/templates/template_drift_report]]
- [[how/skills/skill_orchestration_tiers]] (L0 lease-gated scheduling) · `Cmux.aDNA/upstream_drift_watch/` (first consumer).
