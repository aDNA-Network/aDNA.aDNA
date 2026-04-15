/**
 * transform-content.mjs
 *
 * Transforms vault Markdown files into Astro content collection MDX files.
 * Reads from aDNA.aDNA vault directories, rewrites frontmatter and wikilinks,
 * writes to site/src/content/ collections.
 *
 * Run: node scripts/transform-content.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const VAULT = join(dirname(new URL(import.meta.url).pathname), '../../');
const SITE_CONTENT = join(dirname(new URL(import.meta.url).pathname), '../src/content');

// ── Wikilink → site URL mapping ──────────────────────────────────

const wikilinkMap = {
  // Concepts
  'concept_triad': { url: '/learn/concepts/triad', label: 'The Triad' },
  'concept_ontology': { url: '/learn/concepts/ontology', label: 'The Ontology' },
  'concept_knowledge_graph': { url: '/learn/concepts/knowledge-graph', label: 'The Knowledge Graph' },
  'concept_governance_files': { url: '/learn/concepts/governance-files', label: 'Governance Files' },
  'concept_token_selection': { url: '/learn/concepts/token-selection', label: 'Token Selection' },
  'concept_convergence': { url: '/learn/concepts/convergence', label: 'The Convergence Model' },
  'concept_dual_audience': { url: '/learn/concepts/dual-audience', label: 'Dual Audience' },
  'concept_context_optimization': { url: '/learn/concepts/context-optimization', label: 'Context Optimization' },
  'concept_lattice_composition': { url: '/learn/concepts/lattice-composition', label: 'Lattice Composition' },
  'concept_open_standard': { url: '/learn/concepts/open-standard', label: 'Open Standard' },
  'concept_agentic_literacy': { url: '/learn/concepts/agentic-literacy', label: 'Agentic Literacy' },
  'concept_context_commons': { url: '/learn/concepts/context-commons', label: 'Context Commons' },
  'concept_fair_metadata': { url: '/learn/concepts/fair-metadata', label: 'FAIR Metadata' },

  // Tutorials
  'tutorial_first_claude_md': { url: '/learn/tutorials/first-claude-md', label: 'Create Your First CLAUDE.md' },
  'tutorial_navigate_a_vault': { url: '/learn/tutorials/navigate-a-vault', label: 'Navigate an aDNA Vault' },
  'tutorial_question_test': { url: '/learn/tutorials/question-test', label: 'Apply the Question Test' },
  'tutorial_write_a_context_file': { url: '/learn/tutorials/write-a-context-file', label: 'Write a Context File' },
  'tutorial_design_a_mission': { url: '/learn/tutorials/design-a-mission', label: 'Design a Mission' },
  'tutorial_extend_the_ontology': { url: '/learn/tutorials/extend-the-ontology', label: 'Extend the Ontology' },
  'tutorial_build_a_lattice': { url: '/learn/tutorials/build-a-lattice', label: 'Build a Lattice' },
  'tutorial_run_a_campaign': { url: '/learn/tutorials/run-a-campaign', label: 'Run a Campaign' },
  'tutorial_federate_a_vault': { url: '/learn/tutorials/federate-a-vault', label: 'Federate a Vault' },

  // Patterns
  'pattern_question_test': { url: '/patterns/question-test', label: 'The Question Test' },
  'pattern_agents_md': { url: '/patterns/agents-md', label: 'AGENTS.md Routing' },
  'pattern_dual_audience': { url: '/patterns/dual-audience', label: 'Dual-Audience Writing' },
  'pattern_base_extension': { url: '/patterns/base-extension', label: 'Base/Extension' },
  'pattern_context_recipe': { url: '/patterns/context-recipe', label: 'Context Recipe' },
  'pattern_fair_envelope': { url: '/patterns/fair-envelope', label: 'FAIR Envelope' },
  'pattern_mission_decomposition': { url: '/patterns/mission-decomposition', label: 'Mission Decomposition' },
  'pattern_federation_readiness': { url: '/patterns/federation-readiness', label: 'Federation Readiness' },

  // Comparisons
  'comparison_adna_vs_para': { url: '/learn/comparisons/adna-vs-para', label: 'aDNA vs. PARA' },
  'comparison_adna_vs_zettelkasten': { url: '/learn/comparisons/adna-vs-zettelkasten', label: 'aDNA vs. Zettelkasten' },
  'comparison_adna_vs_notion': { url: '/learn/comparisons/adna-vs-notion', label: 'aDNA vs. Notion' },
  'comparison_adna_vs_johnny_decimal': { url: '/learn/comparisons/adna-vs-johnny-decimal', label: 'aDNA vs. Johnny.Decimal' },
  'comparison_adna_vs_plain_markdown': { url: '/learn/comparisons/adna-vs-plain-markdown', label: 'aDNA vs. Plain Markdown' },

  // Use cases
  'use_case_solo_developer': { url: '/use-cases/solo-developer', label: 'Solo Developer' },
  'use_case_startup': { url: '/use-cases/startup', label: 'Startup' },
  'use_case_research_lab': { url: '/use-cases/research-lab', label: 'Research Lab' },
  'use_case_enterprise_team': { url: '/use-cases/enterprise-team', label: 'Enterprise Team' },
  'use_case_educator': { url: '/use-cases/educator', label: 'Educator' },
  'use_case_open_source_project': { url: '/use-cases/open-source-project', label: 'Open Source Project' },

  // Reference docs
  'adna_standard': { url: '/reference/specification', label: 'aDNA Specification' },
  'adna_design': { url: '/reference/design-rationale', label: 'Design Rationale' },
  'standard_reading_guide': { url: '/reference/reading-guide', label: 'Reading Guide' },
  'agent_first_guide': { url: '/reference/agent-first-guide', label: 'Agent-First Guide' },
  'migration_guide': { url: '/reference/migration-guide', label: 'Migration Guide' },
  'tool_setup_guide': { url: '/reference/tool-setup', label: 'Tool Setup' },
  'standard_governance': { url: '/reference/governance-model', label: 'Governance Model' },
  'context_quality_rubric': { url: '/reference/quality-rubric', label: 'Quality Rubric' },
};

function rewriteWikilinks(content) {
  // [[target|alias]] → [alias](url)
  content = content.replace(/\[\[(?:[^\]|]*\/)?([^\]|]+)\|([^\]]+)\]\]/g, (match, target, alias) => {
    const key = target.replace(/\.md$/, '');
    const entry = wikilinkMap[key];
    if (entry) return `[${alias}](${entry.url})`;
    return match; // leave unresolved wikilinks as-is
  });

  // [[target]] → [label](url)
  content = content.replace(/\[\[(?:[^\]|]*\/)?([^\]]+)\]\]/g, (match, target) => {
    const key = target.replace(/\.md$/, '');
    const entry = wikilinkMap[key];
    if (entry) return `[${entry.label}](${entry.url})`;
    return match; // leave unresolved
  });

  return content;
}

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: text };

  const rawMeta = match[1];
  const body = match[2];

  // Simple YAML parser for flat key-value pairs
  const meta = {};
  for (const line of rawMeta.split('\n')) {
    const kv = line.match(/^(\w[\w_]*)\s*:\s*(.*)$/);
    if (kv) {
      let val = kv[2].trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
      meta[kv[1]] = val;
    }
  }

  return { meta, body };
}

function stripH1(body) {
  // Remove first H1 heading (Astro layouts render the title from frontmatter)
  // Handles leading whitespace/newlines before the H1
  return body.replace(/^\s*#\s+[^\n]+\n+/, '');
}

function generateDescription(body, maxLen = 155) {
  // Extract first non-heading, non-table, non-list paragraph as description
  const stripped = stripH1(body);
  const paragraphs = stripped.split('\n\n');
  const firstPara = paragraphs.find(p => {
    const t = p.trim();
    return t && !t.startsWith('#') && !t.startsWith('|') && !t.startsWith('-') && !t.startsWith('```') && !t.startsWith('>');
  });
  if (!firstPara) return '';
  const clean = firstPara.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/[*_`]/g, '').replace(/\n/g, ' ').trim();
  return clean.length > maxLen ? clean.slice(0, maxLen - 3) + '...' : clean;
}

// ── Content mapping table ────────────────────────────────────────

const conceptMapping = [
  { source: 'concept_triad.md', slug: 'triad', title: 'The Triad', order: 1 },
  { source: 'concept_ontology.md', slug: 'ontology', title: 'The Ontology', order: 2 },
  { source: 'concept_knowledge_graph.md', slug: 'knowledge-graph', title: 'The Knowledge Graph', order: 3 },
  { source: 'concept_governance_files.md', slug: 'governance-files', title: 'Governance Files', order: 4 },
  { source: 'concept_token_selection.md', slug: 'token-selection', title: 'Token Selection', order: 5 },
  { source: 'concept_convergence.md', slug: 'convergence', title: 'The Convergence Model', order: 6 },
  { source: 'concept_dual_audience.md', slug: 'dual-audience', title: 'Dual Audience', order: 7 },
  { source: 'concept_context_optimization.md', slug: 'context-optimization', title: 'Context Optimization', order: 8 },
  { source: 'concept_lattice_composition.md', slug: 'lattice-composition', title: 'Lattice Composition', order: 9 },
  { source: 'concept_open_standard.md', slug: 'open-standard', title: 'Open Standard', order: 10 },
  { source: 'concept_agentic_literacy.md', slug: 'agentic-literacy', title: 'Agentic Literacy', order: 11 },
  { source: 'concept_context_commons.md', slug: 'context-commons', title: 'Context Commons', order: 12 },
  { source: 'concept_fair_metadata.md', slug: 'fair-metadata', title: 'FAIR Metadata', order: 13 },
];

const patternMapping = [
  { source: 'pattern_question_test.md', slug: 'question-test', title: 'The Question Test', order: 1 },
  { source: 'pattern_agents_md.md', slug: 'agents-md', title: 'AGENTS.md Routing', order: 2 },
  { source: 'pattern_dual_audience.md', slug: 'dual-audience', title: 'Dual-Audience Writing', order: 3 },
  { source: 'pattern_base_extension.md', slug: 'base-extension', title: 'Base/Extension', order: 4 },
  { source: 'pattern_context_recipe.md', slug: 'context-recipe', title: 'Context Recipe', order: 5 },
  { source: 'pattern_fair_envelope.md', slug: 'fair-envelope', title: 'FAIR Envelope', order: 6 },
  { source: 'pattern_mission_decomposition.md', slug: 'mission-decomposition', title: 'Mission Decomposition', order: 7 },
  { source: 'pattern_federation_readiness.md', slug: 'federation-readiness', title: 'Federation Readiness', order: 8 },
];

const comparisonMapping = [
  { source: 'comparison_adna_vs_para.md', slug: 'adna-vs-para', title: 'aDNA vs. PARA', order: 1 },
  { source: 'comparison_adna_vs_zettelkasten.md', slug: 'adna-vs-zettelkasten', title: 'aDNA vs. Zettelkasten', order: 2 },
  { source: 'comparison_adna_vs_notion.md', slug: 'adna-vs-notion', title: 'aDNA vs. Notion', order: 3 },
  { source: 'comparison_adna_vs_johnny_decimal.md', slug: 'adna-vs-johnny-decimal', title: 'aDNA vs. Johnny.Decimal', order: 4 },
  { source: 'comparison_adna_vs_plain_markdown.md', slug: 'adna-vs-plain-markdown', title: 'aDNA vs. Plain Markdown', order: 5 },
];

const useCaseMapping = [
  { source: 'use_case_solo_developer.md', slug: 'solo-developer', title: 'Solo Developer', order: 1 },
  { source: 'use_case_startup.md', slug: 'startup', title: 'Startup', order: 2 },
  { source: 'use_case_research_lab.md', slug: 'research-lab', title: 'Research Lab', order: 3 },
  { source: 'use_case_enterprise_team.md', slug: 'enterprise-team', title: 'Enterprise Team', order: 4 },
  { source: 'use_case_educator.md', slug: 'educator', title: 'Educator', order: 5 },
  { source: 'use_case_open_source_project.md', slug: 'open-source-project', title: 'Open Source Project', order: 6 },
];

const tutorialMapping = [
  { source: 'tutorial_first_claude_md.md', slug: 'first-claude-md', title: 'Create Your First CLAUDE.md', difficulty: 'beginner', time: '20 minutes' },
  { source: 'tutorial_navigate_a_vault.md', slug: 'navigate-a-vault', title: 'Navigate an aDNA Vault', difficulty: 'beginner', time: '15 minutes' },
  { source: 'tutorial_question_test.md', slug: 'question-test', title: 'Apply the Question Test', difficulty: 'beginner', time: '15 minutes' },
  { source: 'tutorial_write_a_context_file.md', slug: 'write-a-context-file', title: 'Write a Context File', difficulty: 'intermediate', time: '30 minutes' },
  { source: 'tutorial_design_a_mission.md', slug: 'design-a-mission', title: 'Design a Mission', difficulty: 'intermediate', time: '25 minutes' },
  { source: 'tutorial_extend_the_ontology.md', slug: 'extend-the-ontology', title: 'Extend the Ontology', difficulty: 'intermediate', time: '25 minutes' },
  { source: 'tutorial_build_a_lattice.md', slug: 'build-a-lattice', title: 'Build a Lattice', difficulty: 'advanced', time: '30 minutes' },
  { source: 'tutorial_run_a_campaign.md', slug: 'run-a-campaign', title: 'Run a Campaign', difficulty: 'advanced', time: '30 minutes' },
  { source: 'tutorial_federate_a_vault.md', slug: 'federate-a-vault', title: 'Federate a Vault', difficulty: 'advanced', time: '30 minutes' },
];

const referenceMapping = [
  { source: 'adna_standard.md', slug: 'specification', title: 'aDNA Specification', version: '2.2', stability: 'stable' },
  { source: 'adna_design.md', slug: 'design-rationale', title: 'Design Rationale', stability: 'stable' },
  { source: 'standard_reading_guide.md', slug: 'reading-guide', title: 'Reading Guide', stability: 'stable' },
  { source: 'agent_first_guide.md', slug: 'agent-first-guide', title: 'Agent-First Guide', stability: 'stable' },
  { source: 'migration_guide.md', slug: 'migration-guide', title: 'Migration Guide', stability: 'stable' },
  { source: 'tool_setup_guide.md', slug: 'tool-setup', title: 'Tool Setup', stability: 'stable' },
  { source: 'standard_governance.md', slug: 'governance-model', title: 'Governance Model', stability: 'stable' },
  { source: 'context_quality_rubric.md', slug: 'quality-rubric', title: 'Quality Rubric', stability: 'stable' },
];

// ── Transform functions ──────────────────────────────────────────

function transformDoc(sourceDir, mapping, section) {
  let count = 0;
  for (const entry of mapping) {
    const sourcePath = join(VAULT, sourceDir, entry.source);
    let raw;
    try { raw = readFileSync(sourcePath, 'utf-8'); } catch { console.warn(`  SKIP: ${sourcePath} not found`); continue; }

    const { body } = parseFrontmatter(raw);
    const content = rewriteWikilinks(stripH1(body));
    const desc = generateDescription(content);

    const frontmatter = [
      '---',
      `title: "${entry.title} — aDNA ${section === 'concepts' ? 'Concepts' : section === 'patterns' ? 'Patterns' : section === 'comparisons' ? 'Comparisons' : 'Use Cases'}"`,
      `description: "${desc.replace(/"/g, '\\"')}"`,
      `doc_title: "${entry.title}"`,
      `section: "${section}"`,
      `order: ${entry.order}`,
      '---',
    ].join('\n');

    const outPath = join(SITE_CONTENT, 'docs', `${entry.slug}.mdx`);
    writeFileSync(outPath, frontmatter + '\n\n' + content.trim() + '\n');
    count++;
  }
  return count;
}

function transformGuides() {
  let count = 0;
  for (const entry of tutorialMapping) {
    const sourcePath = join(VAULT, 'what/tutorials', entry.source);
    let raw;
    try { raw = readFileSync(sourcePath, 'utf-8'); } catch { console.warn(`  SKIP: ${sourcePath} not found`); continue; }

    const { body } = parseFrontmatter(raw);
    const content = rewriteWikilinks(stripH1(body));
    const desc = generateDescription(content);

    const frontmatter = [
      '---',
      `title: "${entry.title} — aDNA Tutorial"`,
      `description: "${desc.replace(/"/g, '\\"')}"`,
      `guide_title: "${entry.title}"`,
      `difficulty: "${entry.difficulty}"`,
      `estimated_time: "${entry.time}"`,
      `date: 2026-04-14`,
      '---',
    ].join('\n');

    const outPath = join(SITE_CONTENT, 'guides', `${entry.slug}.mdx`);
    writeFileSync(outPath, frontmatter + '\n\n' + content.trim() + '\n');
    count++;
  }
  return count;
}

function transformReference() {
  let count = 0;
  for (const entry of referenceMapping) {
    const sourcePath = join(VAULT, 'what/docs', entry.source);
    let raw;
    try { raw = readFileSync(sourcePath, 'utf-8'); } catch { console.warn(`  SKIP: ${sourcePath} not found`); continue; }

    const { body } = parseFrontmatter(raw);
    const content = rewriteWikilinks(stripH1(body));
    const desc = generateDescription(content);

    const lines = [
      '---',
      `title: "${entry.title} — aDNA Reference"`,
      `description: "${desc.replace(/"/g, '\\"')}"`,
      `ref_title: "${entry.title}"`,
      `stability: "${entry.stability}"`,
    ];
    if (entry.version) lines.push(`version: "${entry.version}"`);
    lines.push('---');

    const outPath = join(SITE_CONTENT, 'reference', `${entry.slug}.mdx`);
    writeFileSync(outPath, lines.join('\n') + '\n\n' + content.trim() + '\n');
    count++;
  }
  return count;
}

// ── Main ─────────────────────────────────────────────────────────

console.log('aDNA Content Transformer');
console.log('========================\n');

let total = 0;

console.log('Concepts → docs (section: concepts)');
total += transformDoc('what/concepts', conceptMapping, 'concepts');

console.log('Patterns → docs (section: patterns)');
total += transformDoc('what/patterns', patternMapping, 'patterns');

console.log('Comparisons → docs (section: comparisons)');
total += transformDoc('what/comparisons', comparisonMapping, 'comparisons');

console.log('Use Cases → docs (section: use-cases)');
total += transformDoc('what/use_cases', useCaseMapping, 'use-cases');

console.log('Tutorials → guides');
total += transformGuides();

console.log('Reference → reference');
total += transformReference();

console.log(`\nDone. ${total} files transformed.`);
