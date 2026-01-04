import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts, BlogPost } from '@/lib/blog';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollToTop from '@/components/ScrollToTop';

const BLOG_TAGS = ["Glass", "Glass-ceramics", "Research", "Applications", "News"];

const BlogPage = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    useEffect(() => {
        document.title = "Glass Science Blog | Dr. Georgiy Shakhgildyan";
        const fetchPosts = async () => {
            const data = await getAllPosts();
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const filteredPosts = selectedTag
        ? posts.filter(p => p.tags.includes(selectedTag))
        : posts;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 pt-24 pb-20">
                <div className="section-container">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">
                            Glass Science Blog
                        </h1>
                        <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-4">
                            Insights into glass science, research developments, and industry applications.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-primary font-medium">
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                Latest Insights
                            </span>
                        </div>
                    </div>

                    {/* Tags Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        <Button
                            variant={selectedTag === null ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTag(null)}
                            className="rounded-full px-6"
                        >
                            All
                        </Button>
                        {BLOG_TAGS.map(tag => (
                            <Button
                                key={tag}
                                variant={selectedTag === tag ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedTag(tag)}
                                className="rounded-full px-6"
                            >
                                {tag}
                            </Button>
                        ))}
                    </div>

                    {/* Posts Grid */}
                    {loading ? (
                        <div className="text-center py-20 text-foreground/50">Loading articles...</div>
                    ) : (
                        <>
                            {filteredPosts.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredPosts.map((post) => (
                                        <Link
                                            key={post.slug}
                                            to={`/blog/${post.slug}`}
                                            className="glass-card group overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
                                        >
                                            {/* Image Placeholder or Actual Image */}
                                            <div className="h-48 bg-primary/5 relative overflow-hidden">
                                                {post.image ? (
                                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                                                        <span className="text-4xl">✨</span>
                                                    </div>
                                                )}
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-semibold text-foreground border border-white/10">
                                                        {post.tags[0]}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex items-center gap-2 text-xs text-foreground/50 mb-3">
                                                    <Calendar size={12} />
                                                    {new Date(post.date).toLocaleDateString()}
                                                </div>

                                                <h3 className="text-xl font-bold font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                                                    {post.title}
                                                </h3>

                                                <p className="text-foreground/70 text-sm line-clamp-3 mb-6 flex-1">
                                                    {post.description}
                                                </p>

                                                <div className="flex items-center gap-2 text-primary text-sm font-medium mt-auto">
                                                    Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <div className="text-4xl mb-4">✍️</div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">No articles yet</h3>
                                    <p className="text-foreground/60">New content in this category is coming soon. Stay tuned!</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>

            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default BlogPage;
