import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostBySlug, getAdjacentPosts, BlogPost } from '@/lib/blog';
import { Calendar, Tag, ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollToTop from '@/components/ScrollToTop';

const BlogPostPage = () => {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [adjacent, setAdjacent] = useState<{ prev: BlogPost | null, next: BlogPost | null }>({ prev: null, next: null });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPostData = async () => {
            if (slug) {
                setLoading(true);
                const data = await getPostBySlug(slug);
                const adj = await getAdjacentPosts(slug);
                setPost(data || null);
                setAdjacent(adj);
                setLoading(false);
                if (data) {
                    document.title = `${data.title} | Blog | Dr. Georgiy Shakhgildyan`;
                }
                // Scroll to top when post changes
                window.scrollTo(0, 0);
            }
        };
        fetchPostData();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-foreground/50 animate-pulse">Loading article...</p>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center pt-20">
                    <h1 className="text-3xl font-bold mb-4">Post not found</h1>
                    <Button asChild>
                        <Link to="/blog">Back to Blog</Link>
                    </Button>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 pt-24 pb-20">
                <article className="max-w-3xl mx-auto px-6 font-sans">
                    {/* Back Link */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors mb-8 text-sm group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
                    </Link>

                    {/* Header */}
                    <div className="mb-10 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-foreground/50 text-sm">
                            <span className="flex items-center gap-2">
                                <Calendar size={14} />
                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={14} />
                                {Math.ceil(post.content.length / 1000)} min read
                            </span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {post.image && (
                        <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl glass-card p-1">
                            <div className="rounded-xl overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full object-cover max-h-[500px]" />
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none 
                        prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground
                        prose-p:text-foreground/80 prose-p:leading-relaxed
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-foreground prose-strong:font-semibold
                        prose-li:text-foreground/80
                        prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                        mb-20
                    ">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>

                    {/* Navigation */}
                    <div className="border-t border-white/10 pt-12 mt-12 mb-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {adjacent.next ? (
                                <Link
                                    to={`/blog/${adjacent.next.slug}`}
                                    className="glass-card p-6 group hover:border-primary/50 transition-all text-left flex flex-col gap-2"
                                >
                                    <span className="text-xs font-semibold text-primary/60 uppercase tracking-widest flex items-center gap-2">
                                        <ArrowLeft size={12} /> Next Article
                                    </span>
                                    <span className="text-foreground font-bold font-serif line-clamp-2 group-hover:text-primary transition-colors">
                                        {adjacent.next.title}
                                    </span>
                                </Link>
                            ) : <div></div>}

                            {adjacent.prev ? (
                                <Link
                                    to={`/blog/${adjacent.prev.slug}`}
                                    className="glass-card p-6 group hover:border-primary/50 transition-all text-right flex flex-col items-end gap-2"
                                >
                                    <span className="text-xs font-semibold text-primary/60 uppercase tracking-widest flex items-center gap-2">
                                        Previous Article <ArrowRight size={12} />
                                    </span>
                                    <span className="text-foreground font-bold font-serif line-clamp-2 group-hover:text-primary transition-colors">
                                        {adjacent.prev.title}
                                    </span>
                                </Link>
                            ) : <div></div>}
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default BlogPostPage;
