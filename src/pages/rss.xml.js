// import rss from "@astrojs/rss";
// import { getCollection } from "astro:content";
// export async function get() {
//   const posts = await getCollection('posts');
//   return rss({
//     title: 'Astro Learner | Blog',
//     description: 'My journey learning Astro',
//     site: 'https://my-blog-site.netlify.app',
//     items: posts.map((post) => ({
//       title: post.data.title,
//       pubDate: post.data.pubDate,
//       description: post.data.description,
//       link: `/posts/${post.slug}/`,
//     })),
//     customData: `<language>en-us</language>`,
//     stylesheet: '/rss/styles.xsl',
//   });
// }
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Inside View Global Site',
    description: 'Inside View Global Site',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en</language>`,
    stylesheet: '/rss/styles.xsl',
  });
}
