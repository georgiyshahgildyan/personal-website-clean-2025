export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    tags: string[];
    image?: string;
}

// Simple frontmatter parser to avoid nodejs dependencies in browser
function parseFrontmatter(raw: string) {
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

    if (!match) {
        return {
            data: {},
            content: raw
        };
    }

    const frontmatterBlock = match[1];
    const content = match[2];
    const data: Record<string, any> = {};

    frontmatterBlock.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) return;

        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();

        // Remove quotes
        if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
        }

        // Handle arrays (simple bracket notation)
        if (value.startsWith('[') && value.endsWith(']')) {
            const arrayContent = value.slice(1, -1);
            data[key] = arrayContent.split(',').map(item => {
                item = item.trim();
                if (item.startsWith('"') && item.endsWith('"')) return item.slice(1, -1);
                return item;
            });
        } else {
            data[key] = value;
        }
    });

    return { data, content };
}

// Get all posts
export async function getAllPosts(): Promise<BlogPost[]> {
    const modules = import.meta.glob('../content/blog/*.md', { as: 'raw' });

    const posts: BlogPost[] = [];

    for (const path in modules) {
        try {
            const rawContent = await modules[path]();
            const { data, content } = parseFrontmatter(rawContent);

            // Extract slug from filename: ../content/blog/2025-01-02-welcome.md -> 2025-01-02-welcome
            const slug = path.split('/').pop()?.replace('.md', '') || '';

            if (data.title) {
                posts.push({
                    slug,
                    title: data.title,
                    date: data.date || new Date().toISOString(),
                    description: data.description || '',
                    tags: Array.isArray(data.tags) ? data.tags : [],
                    image: data.image,
                    content: content,
                });
            }
        } catch (e) {
            console.error("Error parsing blog post:", path, e);
        }
    }

    // Sort by date desc
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await getAllPosts();
    return posts.find((p) => p.slug === slug);
}
