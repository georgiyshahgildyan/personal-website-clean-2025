import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, BlogPost } from '@/lib/blog';
import { Calendar, ArrowRight } from 'lucide-react';

const LatestBlogSection = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const allPosts = await getAllPosts();
            setPosts(allPosts.slice(0, 3));
        };
        fetchPosts();
    }, []);

    if (posts.length === 0) return null;

    return (
        <section id="blog-preview" className="py-20 lg:py-32">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-center md:text-left w-full md:w-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4">
                            Latest from the Blog
                        </h2>
                        <p className="text-foreground/60 max-w-xl">
                            Recent updates from the lab and thoughts on glass science.
                        </p>
                    </div>

                    <Link
                        to="/blog"
                        className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 group"
                    >
                        View All Posts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="glass-card group hover:scale-[1.02] transition-all duration-300 block h-full overflow-hidden"
                        >
                            <div className="h-48 bg-primary/5 relative overflow-hidden">
                                {post.image ? (
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                                        <span className="text-4xl">✨</span>
                                    </div>
                                )}
                                {post.tags?.[0] && (
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-semibold text-foreground border border-white/10">
                                            {post.tags[0]}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-foreground/50 mb-3">
                                    <Calendar size={12} />
                                    {new Date(post.date).toLocaleDateString()}
                                </div>

                                <h3 className="text-lg font-bold font-serif text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-foreground/70 text-sm line-clamp-3 mb-4">
                                    {post.description}
                                </p>

                                <span className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                    Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
                    >
                        View All Posts <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogSection;
