import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://shakhgildyan.com';
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const PUBLIC_DIR = path.join(__dirname, '../public');

// Static routes
const routes = [
    '',
    '/publications',
    '/blog',
];

function generateSitemap() {
    console.log('🗺️  Generating sitemap...');

    // 1. Get blog posts
    let blogposts = [];
    if (fs.existsSync(BLOG_DIR)) {
        const files = fs.readdirSync(BLOG_DIR);
        blogposts = files
            .filter(file => file.endsWith('.md'))
            .map(file => {
                const slug = file.replace('.md', '');
                return `/blog/${slug}`;
            });
    }

    // 2. Combine all routes
    const allRoutes = [...routes, ...blogposts];

    // 3. Create XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.includes('blog') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    // 4. Write file
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
    console.log(`✅ Sitemap generated with ${allRoutes.length} locations`);
}

generateSitemap();
