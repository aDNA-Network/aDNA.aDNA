import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://adna.network',
  output: 'static',
  adapter: vercel(),
  // Deliberate rename redirect (Champollion M4.4): the pattern page moved to free the
  // concept's natural slug. Named here per the F-CHM-207 no-silent-redirects lesson.
  redirects: {
    '/patterns/dual-audience': '/patterns/dual-audience-writing',
  },
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
