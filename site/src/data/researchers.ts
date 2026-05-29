/**
 * Researchers page data — surfaced via site/src/pages/researchers/index.astro.
 *
 * Extracted from index.astro frontmatter at M5.4 D12 cycle 117 (combined with educators.ts)
 * (page-scope card-array data module following cycle 113 home.ts + cycle 114 compliance.ts + cycle 115 enterprise.ts + cycle 116 startup-first-hour.ts precedent).
 *
 * Edit copy here; researchers/index.astro is the layout.
 */

export interface ResearcherCard {
  title: string;
  href: string;
  description: string;
}

export const readingPathCards: ResearcherCard[] = [
  {
    title: 'Write a Context File',
    href: '/learn/tutorials/write-a-context-file',
    description: '30 min · Intermediate — curate a quality-rubric-scored knowledge file your agents load before working on a specific domain or dataset.',
  },
  {
    title: 'Extend the Ontology',
    href: '/learn/tutorials/extend-the-ontology',
    description: '25 min · Intermediate — add domain-specific entity types: experiment, protocol, finding, hypothesis — whatever your research taxonomy demands.',
  },
  {
    title: 'Design a Mission',
    href: '/learn/tutorials/design-a-mission',
    description: '25 min · Intermediate — decompose a multi-week analysis arc into claimable objectives. Each objective fits in a single agent session.',
  },
  {
    title: 'Build a Lattice',
    href: '/learn/tutorials/build-a-lattice',
    description: '30 min · Advanced — compose a research workflow as a validated .lattice.yaml graph of modules. Machine-executable, human-readable.',
  },
];

export const referenceCards: ResearcherCard[] = [
  {
    title: 'FAIR Metadata',
    href: '/learn/concepts/fair-metadata',
    description: 'How aDNA satisfies the FAIR data principles — Findable, Accessible, Interoperable, Reusable — at the knowledge architecture level.',
  },
  {
    title: 'The Convergence Model',
    href: '/learn/concepts/convergence',
    description: 'Load exactly the context a task needs — not the entire dataset catalog. How aDNA narrows scope from vault to campaign to session.',
  },
  {
    title: 'Researcher Persona',
    href: '/adopters/adopter-researcher',
    description: 'Full pain points, typical ontology extensions, and adoption narrative for research labs using aDNA across multi-agent pipelines.',
  },
  {
    title: 'Research Lab Use Case',
    href: '/use-cases/research-lab',
    description: 'Long-form narrative: how a computational biology lab runs protocols, datasets, and multi-month campaigns on aDNA.',
  },
];
