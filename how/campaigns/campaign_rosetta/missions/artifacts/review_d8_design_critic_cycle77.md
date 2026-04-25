---
type: review
reviewer: design_critic
decadal: D8
cycle: 77
created: 2026-04-24
status: complete
---

# Design Critic Review — D8 Interaction Depth (Cycle 77)

Evaluated the four D8 additions: homepage step-demo terminals, clipboard-copy auto-wiring, concept-page Mermaid diagrams, and the TryInClaudeCode CTA component.

## Findings

### PASS — Step-demo terminals (cycles 72-73)
macOS-style dark terminal windows with traffic-light dots, monospace text, and signal-rich content (directory tree, CLAUDE.md excerpt, mission YAML). The convention is purposeful and established — not decorative. Content is substantive enough to earn the visual weight. **No action needed.**

### PASS (with fix) — Mermaid diagrams (cycle 75)
Initial rendering issue: six diagram node labels used `\n` escape sequences which Mermaid does not render as line breaks (would show error fallback). **Fixed in cycle 77** — all labels simplified to single-line text. Final diagrams use the site's accent color palette and render in `bg-alt` container with border. Some diagrams are simple (2-3 nodes), which is appropriate for first-contact comprehension.

**Minor concern (non-blocking)**: The ontology diagram with 14 nodes may render wide at mid-range viewports. Acceptable at v1 — diagram is informational, not decorative.

### PASS — Clipboard-copy buttons (cycle 74)
Auto-wired via DocumentationLayout script. Consistent with CodeBlock.astro styling (same `.copy-btn` class and opacity-on-hover pattern). Mobile: always visible (opacity 1). Desktop: appears on hover. **No action needed.**

### PASS (with action item) — TryInClaudeCode CTA (cycle 76)
Accent-tinted background differentiates cleanly from prose. Terminal-icon SVG (not emoji). Description is concrete and action-oriented. Install command is copyable.

**Action item for cycle 80 / pre-deploy**: Validate `npm install -g @anthropic-ai/claude-code` is the current correct install command for Claude Code. If the command has changed, update the CTA component.

**Minor concern (non-blocking)**: At 480px, `flex-direction: column` moves the icon above the body text, creating a decorative-header effect. Acceptable for v1.

## Visual Coherence Check
All four additions use design tokens (`--color-accent`, `--color-border`, `--color-bg-alt`, `--font-mono`, `--space-*`, `--radius-*`). No palette violations. Visual register consistent with the "warm + precise + anti-jargon" voice. **PASS.**

## Summary
- **Blocking findings**: 0
- **Fixed findings**: 1 (Mermaid `\n` labels — corrected same cycle)
- **Non-blocking concerns**: 2 (ontology diagram width, CTA 480px layout)
- **Action items**: 1 (validate Claude Code install command before deploy)
- **D8 Delight impact**: +0.04 estimated (demos replace empty placeholders; diagrams add visual interest; CTA adds call-to-action weight)
