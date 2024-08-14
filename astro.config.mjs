import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import storyblok from '@storyblok/astro';
import icon from "astro-icon";
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://insideviewglobal.com',
  integrations: [tailwind(), sitemap(), mdx(), alpinejs(), icon(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Add your components here
        blogPost: 'storyblok/BlogPost',
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
       grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        RichBodyContent: 'storyblok/RichBodyContent',
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: 'ca', // optional,  or 'eu' (default)
      },
    }),
  ]
});