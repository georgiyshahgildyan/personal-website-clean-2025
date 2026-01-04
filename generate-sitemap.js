import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, 'src/content/blog');
const PUBLIC_DIR = path.join(__dirname, 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const BASE_URL = 'https://shakhgildyan.com';

// Get all blog post files
function getBlogPosts() {
    if (!fs.existsSync(BLOG_DIR)) {
        console.log('Blog directory not found, skipping blog posts');
        return [];
    }

    const files = fs.readdirSync(BLOG_DIR);
    return files
        .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
        .filter(file => {
            const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
            // Check for draft: true in frontmatter
            const isDraft = /draft:\s*true/.test(content);
            return !isDraft;
        })
        .map(file => {
            const slug = file.replace(/\.(md|mdx)$/, '');
            const filePath = path.join(BLOG_DIR, file);
            const stats = fs.statSync(filePath);
            return {
                slug,
                lastmod: stats.mtime.toISOString().split('T')[0]
            };
        });
}

// Generate sitemap XML
function generateSitemap() {
    const blogPosts = getBlogPosts();
    const currentDate = new Date().toISOString().split('T')[0];

    const urls = [
        {
            loc: `${BASE_URL}/`,
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '1.0'
        },
        {
            loc: `${BASE_URL}/publications`,
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '0.9'
        },
        {
            loc: `${BASE_URL}/projects`,
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '0.9'
        },
        {
            loc: `${BASE_URL}/cv`,
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '0.8'
        },
        {
            loc: `${BASE_URL}/blog`,
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '0.8'
        },
        ...blogPosts.map(post => ({
            loc: `${BASE_URL}/blog/${post.slug}`,
            lastmod: post.lastmod,
            changefreq: 'monthly',
            priority: '0.7'
        }))
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

    fs.writeFileSync(SITEMAP_PATH, xml);
    console.log(`✅ Sitemap generated with ${urls.length} URLs`);
    console.log(`   - Main pages: ${urls.length - blogPosts.length}`);
    console.log(`   - Blog posts: ${blogPosts.length} (excluding drafts)`);
}

generateSitemap();
