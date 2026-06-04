/**
 * Generate branded OG images (1200x630) for the aDNA documentation site.
 *
 * Usage: node scripts/generate-og-images.mjs
 *
 * Generates:
 *   public/images/og-default.png   — generic aDNA branding
 *   public/images/og-learn.png     — for concept/tutorial pages
 *   public/images/og-patterns.png  — for pattern pages
 *   public/images/og-reference.png — for reference/glossary pages
 *   public/images/og-community.png — for community/adopter pages
 */

import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'images');
mkdirSync(outDir, { recursive: true });

const WIDTH = 1200;
const HEIGHT = 630;

function buildSvg(title, subtitle, accentColor = '#9d7cd8') {
  // Escape XML entities
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#24283b"/>
      <stop offset="100%" stop-color="#16161e"/>
    </linearGradient>
    <linearGradient id="helix" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0.03"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Decorative DNA helix motif -->
  <g opacity="0.15">
    <circle cx="950" cy="120" r="200" fill="none" stroke="${accentColor}" stroke-width="1"/>
    <circle cx="950" cy="120" r="150" fill="none" stroke="${accentColor}" stroke-width="0.5"/>
    <circle cx="1050" cy="400" r="280" fill="none" stroke="${accentColor}" stroke-width="0.7"/>
    <circle cx="100" cy="550" r="180" fill="none" stroke="${accentColor}" stroke-width="0.5"/>
  </g>

  <!-- Logo -->
  <text x="80" y="100" font-family="sans-serif" font-weight="700" font-size="42">
    <tspan fill="${accentColor}">a</tspan><tspan fill="#E0E0E0">DNA</tspan>
  </text>

  <!-- Title -->
  <text x="80" y="300" font-family="sans-serif" font-weight="700" font-size="56" fill="#FFFFFF">
    ${esc(title)}
  </text>

  <!-- Subtitle -->
  <text x="80" y="370" font-family="sans-serif" font-weight="400" font-size="26" fill="#9aa5ce">
    ${esc(subtitle)}
  </text>

  <!-- Bottom bar -->
  <rect x="80" y="530" width="60" height="4" rx="2" fill="${accentColor}"/>
  <text x="160" y="536" font-family="sans-serif" font-size="16" fill="#565a6e">
    adna.network
  </text>
</svg>`;
}

const variants = [
  {
    file: 'og-default.png',
    title: 'Agentic DNA',
    subtitle: 'Give your project a knowledge architecture',
    accent: '#9d7cd8',
  },
  {
    file: 'og-learn.png',
    title: 'Learn aDNA',
    subtitle: 'Concepts, tutorials, and comparisons',
    accent: '#7dcfff',
  },
  {
    file: 'og-patterns.png',
    title: 'aDNA Patterns',
    subtitle: 'Reusable architectural patterns for knowledge projects',
    accent: '#e0a84c',
  },
  {
    file: 'og-reference.png',
    title: 'aDNA Reference',
    subtitle: 'Specification, glossary, and technical reference',
    accent: '#bb9af7',
  },
  {
    file: 'og-community.png',
    title: 'aDNA Community',
    subtitle: 'Roles, contributions, and adopter personas',
    accent: '#7dcfff',
  },
  {
    file: 'og-how.png',
    title: 'aDNA How',
    subtitle: 'Publishing, workshops, and lattice examples',
    accent: '#7aa2f7',
  },
];

for (const v of variants) {
  const svg = buildSvg(v.title, v.subtitle, v.accent);
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: WIDTH },
  });
  const png = resvg.render().asPng();
  const outPath = join(outDir, v.file);
  writeFileSync(outPath, png);
  console.log(`  ✓ ${v.file} (${(png.length / 1024).toFixed(0)} kB)`);
}

console.log(`\nDone — ${variants.length} OG images generated in public/images/`);
