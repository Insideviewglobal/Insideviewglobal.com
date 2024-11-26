import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import alpinejs from '@astrojs/alpinejs';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

import robotsTxt from 'astro-robots-txt';

import cloudflare from '@astrojs/cloudflare';

import node from '@astrojs/node';

const env = loadEnv('', process.cwd());

// https://astro.build/config
export default defineConfig({
  output: 'server',
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'css-variables',
    },
  },

  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },

  site: 'https://insideviewglobal.com',

  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
    alpinejs(),
    icon(),
    robotsTxt({
      userAgent: '*', // Apply this rule to all bots
      disallow: ['/admin/', '/private/', 'src'], // Disallow these directories
      allow: ['/public/'], // Allow this directory
      sitemap: 'https://insideviewglobal.com/sitemap-0.xml', // Add a sitemap link
    }),
  ],
  adapter: node({
    mode: 'standalone',
  }),
});
