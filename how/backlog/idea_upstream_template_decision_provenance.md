---
type: backlog_idea
status: proposed
priority: medium
created: 2026-09-16
updated: 2026-09-16
last_edited_by: agent_rosetta
filed_from: aDNA.aDNA (gate-advisory sitting, 2026-09-16)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, template, fork, provenance, adr_003, hooks, release]
---

# Upstream: template-decision provenance + downstream re-vendor advisory (rides the next release)

**What.** Three related items for the next template release (v8.12 candidate scope), all of
the class "the template's reach ends at fork time":

1. **Resolve `adr_003`'s status at template altitude** — flip
   `.adna/what/decisions/adr_003_system_configuration_as_context_topic.md` to `accepted` with
   a §7.7 block citing [[adr_060_template_decision_provenance]] (pending that ADR's
   ratification). Source finding: Hestia 2026-09-15 — 26 forks carry the byte-identical
   `proposed` copy and every fleet ADR census is inflated by it.
2. **`skill_project_fork` stamps copied decisions** with `provenance: template_inherited` (+
   template version), so censuses exclude inherited rows mechanically. ⛔ No bulk flip across
   the 26 existing copies (ADR-060's rejection clause); release notes advise fork operators
   instead.
3. **Downstream re-vendor advisory for the pre-push hook** — Ilmarinen (2026-09-07, corrected
   2026-09-15): 31 already-vendored `pre-push-sanitize.sh` copies carry the pre-4.2.0 guard
   that a template release cannot reach (the 4.3.0 cure shipped 2026-09-11 and closes only the
   fork-time leak). The ownerless set gets an owner: the release notes name the defect, the
   one-line re-vendor command, and the A8 §4 `NOT_INSTALLED` framing; any *active* fleet sweep
   remains Home's (Hestia's) call, not this release's act.

**Why upstream.** All three are framework-level: they change what every future fork inherits
and what every fleet census can read, not anything specific to this vault.

**Gate.** Items 1–2 wait on ADR-060 ratification; item 3 is release-notes prose needing no
ADR. All three execute only inside `skill_template_release`'s operator-fired gate (Standing
Rule 1).
