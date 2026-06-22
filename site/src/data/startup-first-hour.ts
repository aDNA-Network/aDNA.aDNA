/**
 * Startup first-hour walkthrough page data — surfaced via site/src/pages/startup-first-hour/index.astro.
 *
 * Extracted from index.astro frontmatter at M5.4 D12 cycle 116
 * (page-scope card-array data module following cycle 113 home.ts + cycle 114 compliance.ts + cycle 115 enterprise.ts precedent).
 *
 * Edit copy here; startup-first-hour/index.astro is the layout.
 */

export interface StartupFirstHourCard {
  title: string;
  href: string;
  description: string;
}

export const stageCards: StartupFirstHourCard[] = [
  {
    title: 'Minutes 0–10 · Clone and install',
    href: '/learn/tutorials/navigate-a-vault',
    description: 'Fork the base template into your repo root. You get the triad (what/, how/, who/), the 16-entity base ontology, and a working CLAUDE.md scaffold.',
  },
  {
    title: 'Minutes 10–25 · CLAUDE.md',
    href: '/learn/tutorials/first-claude-md',
    description: 'Edit the root CLAUDE.md to name your project, voice, and standing orders. This is the first file every agent session reads.',
  },
  {
    title: 'Minutes 25–40 · STATE.md',
    href: '/learn/concepts/governance-files',
    description: 'Write a one-paragraph operational snapshot: current phase, blockers, next steps. Every new hire and every new agent session reads this second.',
  },
  {
    title: 'Minutes 40–60 · First ADR',
    href: '/learn/concepts/knowledge-graph',
    description: 'Capture one decision that currently lives in a Slack thread as what/decisions/adr_001_<slug>.md. Future agents and future hires read this instead of re-asking.',
  },
];

export const checkpointCards: StartupFirstHourCard[] = [
  {
    title: 'Vault is legible to an agent',
    href: '/learn/concepts/governance-files',
    description: 'CLAUDE.md + STATE.md means a fresh agent session reads two files and knows where everything is. No per-session re-explanation.',
  },
  {
    title: 'Decisions stop evaporating',
    href: '/patterns/dual-audience',
    description: 'One ADR seeds a decision log. Within a month the founding-engineer bus factor starts breaking down — the "why" lives on disk.',
  },
  {
    title: 'Onboarding has an entry point',
    href: '/adopters/adopter-startup',
    description: 'Your next hire reads STATE.md and walks the ADR list. No Slack archaeology, no "ping me if you have questions."',
  },
];

export const followUpCards: StartupFirstHourCard[] = [
  {
    title: 'Tutorial: Your First CLAUDE.md',
    href: '/learn/tutorials/first-claude-md',
    description: 'The long-form tutorial for the 10–25 minute stage. Go deeper when you have 20 minutes to invest in the agent-orientation file.',
  },
  {
    title: 'Governance Files',
    href: '/learn/concepts/governance-files',
    description: 'The four root-level files (CLAUDE.md, MANIFEST.md, STATE.md, AGENTS.md) and what each one does. Reference this when you graduate past hour one.',
  },
  {
    title: 'Startup Persona',
    href: '/adopters/adopter-startup',
    description: 'Adopter profile: pain points, typical ontology extensions (api_spec, onboarding_checklist, customer_feedback), and deployment pattern.',
  },
  {
    title: 'Tutorial: Design a Mission',
    href: '/learn/tutorials/design-a-mission',
    description: 'Hour one is individual discipline; hour two is team coordination. When you have a sprint-sized goal, a mission file turns it into claimable objectives.',
  },
];
