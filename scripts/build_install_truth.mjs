#!/usr/bin/env node
/**
 * build_install_truth.mjs — prebuild install-truth projection script
 *
 * Canonical face (ADR-034, 2026-06-10): github.com/aDNA-Network/aDNA — a clone-and-run WORKSPACE
 * IMAGE (pre-instantiated router CLAUDE.md at root + the full standard tree embedded at .adna/).
 * Install = 1 command: clone to ~/aDNA, cd, claude. The predecessor template repo
 * (LatticeProtocol/aDNA) is ARCHIVED as aDNA-Network/adna-legacy; old URLs redirect there.
 *
 * Reads:
 *   - ../../.adna/ (the local node's standard-tree checkout; frozen legacy clone at content parity
 *     with the released embed — maintained post-release by skill_template_release step e)
 *     READ-ONLY — verifies the standard-tree files the install/onboarding story depends on exist
 *     (Workspace Standing Rule 1: .adna/ is never modified; this script only stats paths).
 *
 * Writes:
 *   - site/src/data/install_truth.json (the single source for every install command the site
 *     renders; committed). Pages import it; gate-12-install-truth asserts surfaces match it
 *     and reject the legacy forms (~/lattice, Agentic-DNA.git, clone-as-my-project, the old
 *     LatticeProtocol/aDNA clone, the dead cp-router step).
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

// The standard-tree paths the install/onboarding story depends on — verified against the local
// .adna checkout (content parity with the image's embedded .adna/ per ADR-034).
const REQUIRED_PATHS = [
  'how/templates/template_workspace_claude.md', // release-source of the image's pre-instantiated root router (no longer a user-facing cp step)
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

const CANONICAL_REPO = 'https://github.com/aDNA-Network/aDNA';
const LEGACY_REPO = 'https://github.com/aDNA-Network/adna-legacy'; // archived; old LatticeProtocol/aDNA URLs redirect here (repo-id semantics, ADR-034 §2)

const installTruth = {
  canonical_repo_git: `${CANONICAL_REPO}.git`,
  canonical_repo_https: CANONICAL_REPO,
  clone_target: '~/aDNA',
  commands: {
    // Step order: clone → enter → launch. Pages render these verbatim (gate-12).
    clone: `git clone ${CANONICAL_REPO}.git ~/aDNA`,
    enter: 'cd ~/aDNA',
    launch: 'claude',
  },
  embedded_standard: '.adna',
  generated: new Date().toISOString().slice(0, 10),
  legacy_repo_https: LEGACY_REPO,
  one_liner: `git clone ${CANONICAL_REPO}.git ~/aDNA && cd ~/aDNA && claude`,
  router_template: 'how/templates/template_workspace_claude.md',
  schema_version: '0.2',
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
