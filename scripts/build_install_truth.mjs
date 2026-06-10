#!/usr/bin/env node
/**
 * build_install_truth.mjs — prebuild install-truth projection script
 *
 * Reads:
 *   - ../../.adna/ (the local checkout of the upstream template, github.com/LatticeProtocol/aDNA)
 *     READ-ONLY — verifies the files the public install instructions reference actually exist
 *     (Workspace Standing Rule 1: .adna/ is never modified; this script only stats paths).
 *
 * Writes:
 *   - site/src/data/install_truth.json (the single source for every install command the site
 *     renders; committed). Pages import it; gate-12-install-truth asserts surfaces match it
 *     and reject the legacy forms (~/lattice, Agentic-DNA.git, clone-as-my-project).
 *
 * CI/Vercel fallback: if ../../.adna/ absent, log warning + skip overwrite (uses last-committed) —
 * same Clause-A semantics as build_vaults_data.mjs (ADR-023).
 *
 * Idempotency: byte-identical output on same inputs (sorted keys; no timestamps beyond generated
 * date, which only moves when content regenerates — mirrors the sibling script).
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
// The workspace-level template clone (~/aDNA/.adna), one level above the vault.
const TEMPLATE_ROOT = path.resolve(PROJECT_ROOT, '..', '.adna');
const OUTPUT_JSON = path.join(PROJECT_ROOT, 'site/src/data/install_truth.json');

// CI/Vercel fallback (Clause-A semantics)
if (!fs.existsSync(TEMPLATE_ROOT)) {
  console.warn(`[build_install_truth] WARN: ${TEMPLATE_ROOT} not present; using last-committed install_truth.json. (CI/Vercel fallback per ADR-023 Clause A semantics.)`);
  process.exit(0);
}

// The paths the public instructions depend on — verified against the live template checkout.
const REQUIRED_PATHS = [
  'how/templates/template_workspace_claude.md', // the workspace-router bootstrap source
  'how/skills/skill_project_fork.md',           // first-project scaffolding
  'how/skills/skill_onboarding.md',             // first-run interview
  'CLAUDE.md',                                  // template governance (role: template detection)
];

const verified_paths = {};
let allPresent = true;
for (const rel of REQUIRED_PATHS) {
  const present = fs.existsSync(path.join(TEMPLATE_ROOT, rel));
  verified_paths[rel] = present;
  if (!present) {
    allPresent = false;
    console.error(`[build_install_truth] MISSING in template: ${rel}`);
  }
}
if (!allPresent) {
  console.error('[build_install_truth] Refusing to emit install truth that references missing template files.');
  process.exit(1);
}

let template_sha = 'unknown';
try {
  template_sha = execSync('git rev-parse --short HEAD', { cwd: TEMPLATE_ROOT, encoding: 'utf-8' }).trim();
} catch {
  console.warn('[build_install_truth] WARN: could not read template git SHA.');
}

const CANONICAL_REPO = 'https://github.com/LatticeProtocol/aDNA';

const installTruth = {
  canonical_repo_git: `${CANONICAL_REPO}.git`,
  canonical_repo_https: CANONICAL_REPO,
  clone_target: '.adna',
  commands: {
    // Step order matters; pages render these verbatim.
    workspace: 'mkdir -p ~/aDNA && cd ~/aDNA',
    clone: `git clone ${CANONICAL_REPO}.git .adna`,
    router: 'cp .adna/how/templates/template_workspace_claude.md CLAUDE.md',
    launch: 'claude',
  },
  generated: new Date().toISOString().slice(0, 10),
  one_liner: `mkdir -p ~/aDNA && cd ~/aDNA && git clone --depth 1 ${CANONICAL_REPO}.git .adna && cp .adna/how/templates/template_workspace_claude.md CLAUDE.md && claude`,
  router_template: 'how/templates/template_workspace_claude.md',
  schema_version: '0.1',
  template_sha,
  verified_paths,
  workspace_root: '~/aDNA',
};

// Stable serialization: keys are already authored sorted; verify by re-sorting defensively.
function sortKeysDeep(value) {
  if (Array.isArray(value)) return value.map(sortKeysDeep);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((k) => [k, sortKeysDeep(value[k])]));
  }
  return value;
}

const nextOut = JSON.stringify(sortKeysDeep(installTruth), null, 2) + '\n';

// Idempotency guard: if only `generated`+`template_sha` would churn with identical content
// otherwise, keep the committed byte form (mirrors the sibling script's date-churn discipline).
if (fs.existsSync(OUTPUT_JSON)) {
  const prev = fs.readFileSync(OUTPUT_JSON, 'utf-8');
  const strip = (s) => s.replace(/"generated": "[^"]*"/, '"generated": ""').replace(/"template_sha": "[^"]*"/, '"template_sha": ""');
  if (strip(prev) === strip(nextOut)) {
    console.log(`[build_install_truth] OK: install_truth.json unchanged (template ${template_sha}); ${Object.keys(verified_paths).length} paths verified.`);
    process.exit(0);
  }
}

fs.writeFileSync(OUTPUT_JSON, nextOut);
console.log(`[build_install_truth] OK: wrote install_truth.json (template ${template_sha}); ${Object.keys(verified_paths).length} paths verified.`);
