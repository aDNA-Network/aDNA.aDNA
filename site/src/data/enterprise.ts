/**
 * Enterprise adoption checklist page data — surfaced via site/src/pages/enterprise/index.astro.
 *
 * Extracted from index.astro frontmatter at M5.4 D12 cycle 115
 * (page-scope card-array data module following cycle 113 home.ts + cycle 114 compliance.ts precedent).
 *
 * Edit copy here; enterprise/index.astro is the layout.
 */

export interface EnterpriseCard {
  title: string;
  href: string;
  description: string;
}

export const complianceCards: EnterpriseCard[] = [
  {
    title: 'Governance Files',
    href: '/learn/concepts/governance-files',
    description: 'Four root-level files (CLAUDE.md, MANIFEST.md, STATE.md, AGENTS.md) declare policy, inventory, state, and agent routing — the same for every vault, so auditors orient once and reuse the mental model across teams.',
  },
  {
    title: 'Architecture Decisions',
    href: '/patterns/dual-audience',
    description: 'ADR files under what/decisions/ pair each technical choice with its rationale, trade-offs, and legal/compliance context — designed to satisfy both engineering and non-engineering reviewers.',
  },
  {
    title: 'Dual-Audience Review',
    href: '/patterns/dual-audience',
    description: 'Every governance artifact is legible to a platform engineer and to a compliance officer without translation — the pattern that keeps audit prep from becoming a separate workstream.',
  },
];

export const auditCards: EnterpriseCard[] = [
  {
    title: 'Session Glossary',
    href: '/glossary/glossary-session',
    description: 'Every agent-assisted work unit produces a file in how/sessions/ with session ID, intent, files touched, and a SITREP. The audit trail is the working artifact, not an afterthought.',
  },
  {
    title: 'Enterprise Team Use Case',
    href: '/use-cases/enterprise-team',
    description: 'Narrative walkthrough: a 50-person platform org replaces week-long compliance investigations with SQL queries against the session corpus. The governance overhead is what the agents already do.',
  },
  {
    title: 'Collision Prevention',
    href: '/glossary/glossary-collision-prevention',
    description: 'The last-edited-by + updated + read-before-write contract prevents parallel agents and humans from clobbering one another — the primitive that makes a shared vault safe for concurrent work.',
  },
];

export const federationCards: EnterpriseCard[] = [
  {
    title: 'Federation Readiness',
    href: '/patterns/federation-readiness',
    description: 'Six-point checklist (schema valid, opt-in, source instance, license, keywords, resolved references) gates every shared artifact. Federation is never accidental.',
  },
  {
    title: 'Lattice Composition',
    href: '/learn/concepts/lattice-composition',
    description: 'Teams publish reusable pipelines as lattices; sibling teams pull and compose them. Three implementations collapse to one maintained source — with explicit version policy.',
  },
  {
    title: 'FAIR Envelope',
    href: '/patterns/fair-envelope',
    description: 'License, creators, keywords, provenance, and identifier travel with every federated artifact. Legal provenance is a data field, not a separate document.',
  },
];

export const integrationCards: EnterpriseCard[] = [
  {
    title: 'AGENTS.md Routing',
    href: '/patterns/agents-md',
    description: 'Drop-in routing files let aDNA coexist with existing documentation systems — Confluence, internal wikis, and repo READMEs remain authoritative; AGENTS.md just points agents at them.',
  },
  {
    title: 'Base + Extension',
    href: '/patterns/base-extension',
    description: 'Keep the 14-entity base ontology; add domain-specific entity types (compliance_check, team_policy, shared_pipeline) per team without forking the standard.',
  },
  {
    title: 'Open Standard',
    href: '/learn/concepts/open-standard',
    description: 'The specification is open and permissively licensed — no vendor lock-in, no platform dependency. Teams can self-host, audit the spec, and exit cleanly.',
  },
];

export const followUpCards: EnterpriseCard[] = [
  {
    title: 'Enterprise Team Persona',
    href: '/adopters/adopter-enterprise-team',
    description: 'Quick-reference adopter profile: pain points, typical ontology extensions, and deployment pattern for platform engineering organizations.',
  },
  {
    title: 'Extend the Ontology',
    href: '/learn/tutorials/extend-the-ontology',
    description: 'Step-by-step: add a domain-specific entity type (directory + AGENTS.md + template) without forking the base standard. 25 minutes.',
  },
  {
    title: 'Federate a Vault',
    href: '/learn/tutorials/federate-a-vault',
    description: 'Walk through export, import, and compose across two aDNA instances — the handshake Teams A, B, and C will use in production. 30 minutes.',
  },
];
