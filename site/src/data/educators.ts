/**
 * Educators teaching-kit page data — surfaced via site/src/pages/educators/index.astro.
 *
 * Extracted from index.astro frontmatter at M5.4 D12 cycle 117 (combined with researchers.ts)
 * (page-scope card-array data module following cycle 113 home.ts + cycle 114 compliance.ts + cycle 115 enterprise.ts + cycle 116 startup-first-hour.ts precedent).
 *
 * Edit copy here; educators/index.astro is the layout.
 */

export interface EducatorCard {
  title: string;
  href: string;
  description: string;
}

export const week1Cards: EducatorCard[] = [
  {
    title: 'Navigate an aDNA Vault',
    href: '/learn/tutorials/navigate-a-vault',
    description: 'Week 1 · 15 min · Beginner — guided tour of a live aDNA vault. Students learn the triad and governance files by walking them.',
  },
  {
    title: 'Apply the Question Test',
    href: '/learn/tutorials/question-test',
    description: 'Week 1 · 15 min · Beginner — sort 10 sample items into what/how/who. First structural-thinking exercise.',
  },
  {
    title: 'Create Your First CLAUDE.md',
    href: '/learn/tutorials/first-claude-md',
    description: 'Week 1 · 20 min · Beginner — students write the agent-orientation file for their forked project vault.',
  },
];

export const week2Cards: EducatorCard[] = [
  {
    title: 'Write a Context File',
    href: '/learn/tutorials/write-a-context-file',
    description: 'Week 2 · 30 min · Intermediate — quality-rubric-scored context file ready for their vault library.',
  },
  {
    title: 'Extend the Ontology',
    href: '/learn/tutorials/extend-the-ontology',
    description: 'Week 2 · 25 min · Intermediate — domain-specific entity type with directory, AGENTS.md, template.',
  },
  {
    title: 'Design a Mission',
    href: '/learn/tutorials/design-a-mission',
    description: 'Week 2 · 25 min · Intermediate — decompose multi-session work into claimable objectives.',
  },
];

export const week3Cards: EducatorCard[] = [
  {
    title: 'Build a Lattice',
    href: '/learn/tutorials/build-a-lattice',
    description: 'Week 3 · 30 min · Advanced — validated .lattice.yaml as a directed graph of modules.',
  },
  {
    title: 'Run a Campaign',
    href: '/learn/tutorials/run-a-campaign',
    description: 'Week 3 · 30 min · Advanced — phased multi-mission initiative with quality gates.',
  },
  {
    title: 'Federate a Vault',
    href: '/learn/tutorials/federate-a-vault',
    description: 'Week 3 · 30 min · Advanced — export, import, and compose lattices across aDNA instances.',
  },
];

export const followUpCards: EducatorCard[] = [
  {
    title: 'Educator Persona',
    href: '/adopters/adopter-educator',
    description: 'Full pain points, typical ontology extensions, and adoption narrative for university instructors.',
  },
  {
    title: 'Educator Use Case',
    href: '/use-cases/educator',
    description: 'Long-form narrative: how a graduate course in AI-augmented knowledge work runs on aDNA.',
  },
  {
    title: 'Dual-Audience Writing',
    href: '/patterns/dual-audience',
    description: 'The assessment rubric turned into a writing discipline: can a non-expert navigate this vault?',
  },
];
