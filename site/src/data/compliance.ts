/**
 * Compliance walkthrough page data — surfaced via site/src/pages/compliance/index.astro.
 *
 * Extracted from index.astro frontmatter at M5.4 D12 cycle 114
 * (data extraction follows cycle 113 home.ts precedent for page-scope card arrays).
 *
 * Edit copy here; compliance/index.astro is the layout.
 */

export interface ComplianceCard {
  title: string;
  href: string;
  description: string;
}

export const sessionCards: ComplianceCard[] = [
  {
    title: 'Session Glossary',
    href: '/glossary/glossary-session',
    description: 'Every agent-assisted work unit produces a file in how/sessions/ with session ID, intent, scope, files touched, and a closing SITREP — the primitive audit record.',
  },
  {
    title: 'SITREP Glossary',
    href: '/glossary/glossary-sitrep',
    description: 'Structured session closure (Completed / In progress / Next up / Blockers / Files touched) plus a Next Session Prompt — turns a session close into a reviewable record.',
  },
  {
    title: 'Enterprise Team Use Case',
    href: '/use-cases/enterprise-team',
    description: 'Narrative walkthrough: a 50-person platform org replaces week-long compliance investigations with scripted queries over the session corpus.',
  },
];

export const governanceCards: ComplianceCard[] = [
  {
    title: 'Governance Files',
    href: '/learn/concepts/governance-files',
    description: 'CLAUDE.md, MANIFEST.md, STATE.md, AGENTS.md at the vault root — the fixed-path governance layer auditors orient to once and reuse across every team vault.',
  },
  {
    title: 'Architecture Decisions',
    href: '/patterns/dual-audience-writing',
    description: 'ADR files under what/decisions/ pair each technical choice with rationale, trade-offs, and reviewer attribution — designed for both engineering and compliance readers.',
  },
  {
    title: 'Collision Prevention',
    href: '/glossary/glossary-collision-prevention',
    description: 'last_edited_by + updated + read-before-write contract prevents concurrent agents and humans from clobbering one another — the primitive that makes a shared vault safe.',
  },
];

export const federationCards: ComplianceCard[] = [
  {
    title: 'Federation Readiness',
    href: '/patterns/federation-readiness',
    description: 'Six-point readiness check (schema valid, opt-in, source instance, license, keywords, resolved references) gates every artifact that crosses a team boundary.',
  },
  {
    title: 'FAIR Envelope',
    href: '/patterns/fair-envelope',
    description: 'License, creators, keywords, provenance, and identifier travel with every federated artifact — legal provenance is a data field, not a separate document.',
  },
  {
    title: 'Open Standard',
    href: '/learn/concepts/open-standard',
    description: 'The specification is open and permissively licensed — no vendor lock-in, no platform dependency. Vault contents are plain markdown in git.',
  },
];

export const followUpCards: ComplianceCard[] = [
  {
    title: 'Enterprise Adoption Checklist',
    href: '/enterprise',
    description: 'The sibling page: a structured evaluation framework across compliance, session audit, federation, and integration. Scan section by section.',
  },
  {
    title: 'Enterprise Team Persona',
    href: '/adopters/adopter-enterprise-team',
    description: 'Quick-reference adopter profile: pain points, typical ontology extensions (compliance_check, team_policy, shared_pipeline), and deployment pattern.',
  },
  {
    title: 'Federation Readiness Pattern',
    href: '/patterns/federation-readiness',
    description: 'The readiness-gate pattern in full — what blocks publication, what travels with a shared artifact, how version policy works across teams.',
  },
  {
    title: 'Session Glossary',
    href: '/glossary/glossary-session',
    description: 'Canonical definition of the session record — the atomic unit of the audit trail.',
  },
];

export interface RegimeBridge {
  regime: string;
  /** what the framework asks reviewers to demonstrate */
  asks: string;
  /** the working artifacts an aDNA vault already produces that support that evidence */
  supplies: string;
}

/**
 * EV7 (Storyweave P4 M4.2): a bridge from the vault's audit-trail model to the named
 * regimes procurement teams actually cite.
 *
 * HONEST FRAMING (campaign register guardrail — the Movement-Skeptic gates every line):
 * aDNA is an open documentation standard, NOT a certified product. These rows map how a
 * vault *supplies evidence that supports* an audit; they never claim certification, which is
 * granted by accredited assessors against your own controls — not by adopting aDNA. The
 * caveat renders above the table on the page.
 */
export const regimeBridge: RegimeBridge[] = [
  {
    regime: 'SOC 2',
    asks: 'Evidence that security and change-management controls operate over time — who changed what, when, and whether it was reviewed.',
    supplies: 'Session records in how/sessions/ plus git history give a per-change, dated, attributed trail; the AAR-on-close rule is a recurring review control; STATE.md tracks open risks.',
  },
  {
    regime: 'ISO/IEC 27001',
    asks: 'A documented management system: policies, defined roles, risk treatment, and records showing the system is actually followed.',
    supplies: 'CLAUDE.md carries the standing orders and priority hierarchy; who/governance/ defines roles; what/decisions/ (ADRs) record risk-bearing choices with rationale — documented-and-followed, in plain markdown.',
  },
  {
    regime: 'EU AI Act',
    asks: 'For higher-risk AI use: record-keeping, human oversight, and traceability of how an AI-assisted output was produced.',
    supplies: 'Every agent-assisted change names its intent, inputs, and reviewer; phase and mission gates are explicit human-oversight points; the trail from output → session → context inputs is the traceability the Act asks for.',
  },
];
