/**
 * Sidebar navigation data structure matching M09 site IA.
 * 4 top-level groups with ordered pages.
 */

export interface NavItem {
  label: string;
  href: string;
  order: number;
}

export interface NavSubgroup {
  label: string;
  items: NavItem[];
}

export interface NavGroup {
  label: string;
  items: (NavItem | NavSubgroup)[];
}

function isSubgroup(item: NavItem | NavSubgroup): item is NavSubgroup {
  return 'items' in item;
}

export { isSubgroup };

export const navigation: NavGroup[] = [
  {
    label: 'Learn',
    items: [
      { label: 'What is aDNA?', href: '/learn/what-is-adna', order: 1 },
      {
        label: 'Concepts',
        items: [
          { label: 'The Triad', href: '/learn/concepts/triad', order: 2 },
          { label: 'The Ontology', href: '/learn/concepts/ontology', order: 3 },
          { label: 'The Knowledge Graph', href: '/learn/concepts/knowledge-graph', order: 4 },
          { label: 'Governance Files', href: '/learn/concepts/governance-files', order: 5 },
          { label: 'Token Selection', href: '/learn/concepts/token-selection', order: 6 },
          { label: 'The Convergence Model', href: '/learn/concepts/convergence', order: 7 },
          { label: 'Context Optimization', href: '/learn/concepts/context-optimization', order: 8 },
          { label: 'Lattice Composition', href: '/learn/concepts/lattice-composition', order: 9 },
          { label: 'Open Standard', href: '/learn/concepts/open-standard', order: 10 },
          { label: 'Agentic Literacy', href: '/learn/concepts/agentic-literacy', order: 11 },
          { label: 'Context Commons', href: '/learn/concepts/context-commons', order: 12 },
          { label: 'FAIR Metadata', href: '/learn/concepts/fair-metadata', order: 13 },
        ],
      },
      {
        label: 'Tutorials',
        items: [
          { label: 'Create Your First CLAUDE.md', href: '/learn/tutorials/first-claude-md', order: 15 },
          { label: 'Navigate an aDNA Vault', href: '/learn/tutorials/navigate-a-vault', order: 16 },
          { label: 'Apply the Question Test', href: '/learn/tutorials/question-test', order: 17 },
          { label: 'Write a Context File', href: '/learn/tutorials/write-a-context-file', order: 18 },
          { label: 'Design a Mission', href: '/learn/tutorials/design-a-mission', order: 19 },
          { label: 'Extend the Ontology', href: '/learn/tutorials/extend-the-ontology', order: 20 },
          { label: 'Build a Lattice', href: '/learn/tutorials/build-a-lattice', order: 21 },
          { label: 'Run a Campaign', href: '/learn/tutorials/run-a-campaign', order: 22 },
          { label: 'Federate a Vault', href: '/learn/tutorials/federate-a-vault', order: 23 },
        ],
      },
      {
        label: 'Comparisons',
        items: [
          { label: 'aDNA vs. PARA', href: '/learn/comparisons/adna-vs-para', order: 24 },
          { label: 'aDNA vs. Zettelkasten', href: '/learn/comparisons/adna-vs-zettelkasten', order: 25 },
          { label: 'aDNA vs. Notion', href: '/learn/comparisons/adna-vs-notion', order: 26 },
          { label: 'aDNA vs. Johnny.Decimal', href: '/learn/comparisons/adna-vs-johnny-decimal', order: 27 },
          { label: 'aDNA vs. Plain Markdown', href: '/learn/comparisons/adna-vs-plain-markdown', order: 28 },
        ],
      },
    ],
  },
  {
    label: 'Use Cases',
    items: [
      { label: 'Solo Developer', href: '/use-cases/solo-developer', order: 1 },
      { label: 'Startup', href: '/use-cases/startup', order: 2 },
      { label: 'Research Lab', href: '/use-cases/research-lab', order: 3 },
      { label: 'Enterprise Team', href: '/use-cases/enterprise-team', order: 4 },
      { label: 'Educator', href: '/use-cases/educator', order: 5 },
      { label: 'Open Source Project', href: '/use-cases/open-source-project', order: 6 },
    ],
  },
  {
    label: 'Patterns',
    items: [
      { label: 'The Question Test', href: '/patterns/question-test', order: 1 },
      { label: 'AGENTS.md Routing', href: '/patterns/agents-md', order: 2 },
      { label: 'Dual-Audience Writing', href: '/patterns/dual-audience', order: 3 },
      { label: 'Base/Extension', href: '/patterns/base-extension', order: 4 },
      { label: 'Context Recipe', href: '/patterns/context-recipe', order: 5 },
      { label: 'FAIR Envelope', href: '/patterns/fair-envelope', order: 6 },
      { label: 'Mission Decomposition', href: '/patterns/mission-decomposition', order: 7 },
      { label: 'Federation Readiness', href: '/patterns/federation-readiness', order: 8 },
    ],
  },
  {
    label: 'Glossary',
    items: [
      {
        label: 'Core Architecture',
        items: [
          { label: 'aDNA', href: '/glossary/glossary-adna', order: 1 },
          { label: 'Triad', href: '/glossary/glossary-triad', order: 2 },
          { label: 'what/', href: '/glossary/glossary-what', order: 3 },
          { label: 'how/', href: '/glossary/glossary-how', order: 4 },
          { label: 'who/', href: '/glossary/glossary-who', order: 5 },
          { label: 'Question Test', href: '/glossary/glossary-question-test', order: 6 },
          { label: 'Bare Triad', href: '/glossary/glossary-bare-triad', order: 7 },
          { label: 'Embedded Triad', href: '/glossary/glossary-embedded-triad', order: 8 },
          { label: 'Deployment Form', href: '/glossary/glossary-deployment-form', order: 9 },
          { label: 'Ontology Extension', href: '/glossary/glossary-ontology-extension', order: 10 },
        ],
      },
      {
        label: 'Governance & Metadata',
        items: [
          { label: 'Governance File', href: '/glossary/glossary-governance-file', order: 11 },
          { label: 'AGENTS.md', href: '/glossary/glossary-agents-md', order: 12 },
          { label: 'README.md', href: '/glossary/glossary-readme-md', order: 13 },
          { label: 'Frontmatter', href: '/glossary/glossary-frontmatter', order: 14 },
          { label: 'Conformance Level', href: '/glossary/glossary-conformance-level', order: 15 },
          { label: 'Conformant Instance', href: '/glossary/glossary-conformant-instance', order: 16 },
        ],
      },
      {
        label: 'Operations',
        items: [
          { label: 'Session', href: '/glossary/glossary-session', order: 17 },
          { label: 'SITREP', href: '/glossary/glossary-sitrep', order: 18 },
          { label: 'Mission', href: '/glossary/glossary-mission', order: 19 },
          { label: 'Template', href: '/glossary/glossary-template', order: 20 },
          { label: 'Skill', href: '/glossary/glossary-skill', order: 21 },
          { label: 'Content-as-Code', href: '/glossary/glossary-content-as-code', order: 22 },
        ],
      },
      {
        label: 'Knowledge & Coordination',
        items: [
          { label: 'Context Library', href: '/glossary/glossary-context-library', order: 23 },
          { label: 'Coordination Note', href: '/glossary/glossary-coordination-note', order: 24 },
          { label: 'Collision Prevention', href: '/glossary/glossary-collision-prevention', order: 25 },
        ],
      },
    ],
  },
  {
    label: 'Community',
    items: [
      { label: 'Roles & Progression', href: '/community/community-roles', order: 1 },
      { label: 'Processes', href: '/community/community-processes', order: 2 },
      { label: 'Context Commons', href: '/community/community-context-commons', order: 3 },
      { label: 'Contribution Standards', href: '/community/community-contribution-standards', order: 4 },
      {
        label: 'Adopter Personas',
        items: [
          { label: 'Solo Developer', href: '/adopters/adopter-solo-developer', order: 5 },
          { label: 'Enterprise Team', href: '/adopters/adopter-enterprise-team', order: 6 },
          { label: 'Educator', href: '/adopters/adopter-educator', order: 7 },
          { label: 'Startup', href: '/adopters/adopter-startup', order: 8 },
          { label: 'Researcher', href: '/adopters/adopter-researcher', order: 9 },
        ],
      },
    ],
  },
  {
    label: 'How',
    items: [
      {
        label: 'Publishing',
        items: [
          { label: 'Vault-to-Site Pipeline', href: '/how/publishing/vault-to-site', order: 1 },
          { label: 'Content Mapping', href: '/how/publishing/content-mapping', order: 2 },
          { label: 'Social Sharing', href: '/how/publishing/social-sharing', order: 3 },
        ],
      },
      {
        label: 'Workshops',
        items: [
          { label: 'Vault Exploration', href: '/how/workshops/vault-exploration', order: 1 },
          { label: 'Build Your First Vault', href: '/how/workshops/build-your-first-vault', order: 2 },
          { label: 'Lattice Design', href: '/how/workshops/lattice-design', order: 3 },
          { label: 'Facilitation Guide', href: '/how/workshops/facilitation-guide', order: 4 },
        ],
      },
      {
        label: 'Lattice Examples',
        items: [
          { label: 'Content Pipeline', href: '/how/lattice-examples/lattice-content-pipeline', order: 1 },
          { label: 'Campaign Execution', href: '/how/lattice-examples/lattice-campaign-execution', order: 2 },
          { label: 'Context Serving', href: '/how/lattice-examples/lattice-context-serving', order: 3 },
          { label: 'Dual Audience Review', href: '/how/lattice-examples/lattice-dual-audience-review', order: 4 },
        ],
      },
    ],
  },
  {
    label: 'Reference',
    items: [
      { label: 'Specification', href: '/reference/specification', order: 1 },
      { label: 'Design Rationale', href: '/reference/design-rationale', order: 2 },
      { label: 'Reading Guide', href: '/reference/reading-guide', order: 3 },
      { label: 'Agent-First Guide', href: '/reference/agent-first-guide', order: 4 },
      { label: 'Migration Guide', href: '/reference/migration-guide', order: 5 },
      { label: 'Tool Setup', href: '/reference/tool-setup', order: 6 },
      { label: 'Governance Model', href: '/reference/governance-model', order: 7 },
      { label: 'Quality Rubric', href: '/reference/quality-rubric', order: 8 },
    ],
  },
];
