import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import storyblok from '@storyblok/astro';
import icon from "astro-icon";
import { loadEnv } from 'vite';
import cloudflare from '@astrojs/cloudflare';
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
  site: 'https://www.insideviewglobal.com',
  integrations: [tailwind(), sitemap(), mdx(), alpinejs(), icon(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: env.STORYBLOK_IS_PREVIEW === 'yes',
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
  ],output: env.STORYBLOK_IS_PREVIEW === 'yes' ? 'server' : 'static',
  ...(env.STORYBLOK_ENV === 'development' && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true
      }
    }
  }), 
  adapter: cloudflare({
    imageService: 'cloudflare'
 })
});