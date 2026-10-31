import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adineo-cmd.github.io',
  base: '/self-improvement-field-guide/',
  output: 'static',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true },
  compressHTML: true,
});
