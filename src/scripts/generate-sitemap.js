// src/scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { getCollection } from 'astro:content';

async function generateSitemap() {
  const posts = await getCollection('posts');
  const baseUrl = 'https://insideviewglobal.com'; // Your site URL
  const urls = [
    { loc: '/', changefreq: 'daily', priority: 1.0 }, // Add homepage
    ...posts.map(post => ({
      loc: `/posts/${post.slug}`,
      lastmod: post.date,
      changefreq: 'weekly',
      priority: 0.8,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      ({ loc, lastmod, changefreq, priority }) => `
    <url>
      <loc>${baseUrl}${loc}</loc>
      ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  // Save the sitemap.xml to the public folder
  const sitemapPath = path.resolve('public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  console.log('Sitemap has been generated!');
}

generateSitemap();
