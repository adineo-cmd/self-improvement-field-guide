import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://self-improvement-field-guide.example.com',
  output: 'static',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true },
  compressHTML: true,
});
