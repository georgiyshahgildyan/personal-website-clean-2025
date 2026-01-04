export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    tags: string[];
    image?: string;
    draft?: boolean;
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
                    draft: data.draft === 'true' || data.draft === true,
                });
            }
        } catch (e) {
            console.error("Error parsing blog post:", path, e);
        }
    }

    // Sort by date desc and filter out drafts
    return posts
        .filter(p => !p.draft)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await getAllPosts();
    return posts.find((p) => p.slug === slug);
}

// Get adjacent posts (next and previous)
export async function getAdjacentPosts(slug: string): Promise<{ prev: BlogPost | null, next: BlogPost | null }> {
    const posts = await getAllPosts();
    const currentIndex = posts.findIndex(p => p.slug === slug);

    if (currentIndex === -1) {
        return { prev: null, next: null };
    }

    // Since posts are sorted by date desc:
    // next (newer) post is at index - 1
    // prev (older) post is at index + 1
    return {
        next: currentIndex > 0 ? posts[currentIndex - 1] : null,
        prev: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
    };
}
