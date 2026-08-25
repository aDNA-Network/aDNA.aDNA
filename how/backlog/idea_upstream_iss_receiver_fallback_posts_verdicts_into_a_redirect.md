---
type: backlog
subtype: upstream_idea
created: 2026-08-24
updated: 2026-08-24
status: proposed
last_edited_by: agent_hestia
origin_vault: Home.aDNA
origin_persona: hestia
origin_session: session_hestia_20260824_p5_4_wave11_partition_control
target_artifact: Astro.aDNA/what/lib/iss/runtime/generator.py — the `image_grid_variant` gate template's receiver-URL fallback
related: [skill_create_iss, skill_open_iss, skill_watch_iss, adr_028_iss_architecture, adr_029_iss_standard_touch, idea_upstream_iss_gate_open_state_and_verdict_provenance]
findings: [F-GATE-07]
severity: medium          # not blocking: the surface that found it was safe. It is a LATENT verdict-loss class, and verdict loss is the one failure an operator gate must not have.
filed_from: Home.aDNA/how/campaigns/campaign_fleet_home_pages (P5.4 wave 10)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA (standard) · WebForge.aDNA (receiver) · Astro.aDNA (generator)
tags: [upstream, iss, operator_gate, verdict_loss, receiver, hardcoded_fallback, port_collision, jupyterhub]
---

# Upstream idea — the ISS gate template's hardcoded receiver fallback can post a verdict into an OAuth redirect

**Filed by Hestia (`Home.aDNA`).** Home takes no cross-vault edit; the generator is `Astro.aDNA`'s and
the receiver is `WebForge.aDNA`'s. Sibling to
[[idea_upstream_iss_gate_open_state_and_verdict_provenance]] — same surface, opposite end: that one is
about *proving who ruled*, this one is about *the ruling never arriving at all*.

## The defect

A generated ISS gate page carries the receiver endpoint as a `data-receiver-url` attribute. When that
attribute is **absent**, the page falls back to a **hardcoded `http://localhost:8765`**.

That constant is not a neutral default. **On this node `:8765` is JupyterHub**, which answers a POST with
a **307 redirect to OAuth**. A verdict POSTed there is not refused with an error the operator can see —
it is *accepted-looking*, redirected, and lost.

## Why it is filed as a class and not as a local port conflict

`8765` is a plausible dev-server port on any node. The failure is not *"Home happens to run JupyterHub
there"* — it is that **the fallback is a guess about a port the generator does not own**, and its failure
mode is **silent**. The operator rules, the page appears to submit, and no `.output.json` is ever written.

⚠ **The gate that found this was SAFE and is recorded as safe.** `p5_4_wave10_shape_gate` carried
`data-receiver-url=…8767`, the fallback never fired, and the verdict landed and was committed. This is a
**latent** class found by reading the template, not an incident. Recording it that way matters: an idea
that overstates its evidence gets discounted with its evidence.

## Remedies, cheapest first

1. **Fail loud instead of guessing.** With no `data-receiver-url`, the page should refuse to submit and
   say so on the surface. A gate that cannot reach its receiver is a gate that must not look rulable.
2. **Never emit a page without the attribute.** The generator knows the receiver at emit time; make it a
   hard precondition rather than an optional attribute with a fallback.
3. **Verify the endpoint before accepting a ruling** — a `GET /health` on load, surfaced in the page.
4. **If a fallback must exist, make it unlikely rather than plausible** — a high, non-standard port that
   nothing else claims. A fallback that collides with a real service is worse than no fallback.

## The general lesson, because it is not confined to this template

🔑 **A default endpoint is a claim about someone else's machine.** The three sibling findings on this
surface all have the same shape — **F-GATE-04** (a draft POST indistinguishable from a ruling),
**F-GATE-06** (a browser default that is wrong on the copy consumers actually reach), and this one — and
every one of them fails *quietly*, in the direction of *looking like it worked*.

## Provenance

Found at `Home.aDNA` P5.4 wave 10 (2026-08-24) while checking the gate page before opening it. Companion
finding in the same sitting: a receiver probe aimed at `:8770` — a port this system does not use —
reported *"not running"* about a receiver **alive on `:8767`**. *A negative from an instrument pointed at
the wrong object is not evidence*, and it is the same mistake as a fallback pointed at the wrong port.

Full record: `Home.aDNA/what/specs/spec_graph_figure_visual_rubric.md` §5.9f.
