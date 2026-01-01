import { useState, useEffect } from 'react';
import { ExternalLink, Search, SortAsc, SortDesc, Database, BarChart3, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Publication {
    id: string;
    title: string;
    authors: string;
    venue: string;
    year: number;
    doi: string;
    citations: number;
    type: string;
}

interface AuthorMetrics {
    h_index: number;
    total_citations: number;
    works_count: number;
}

const AUTHOR_ID = 'A5011970336';

const PublicationsPage = () => {
    const [publications, setPublications] = useState<Publication[]>([]);
    const [filteredPubs, setFilteredPubs] = useState<Publication[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
    const [sortBy, setSortBy] = useState<'year' | 'citations'>('year');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [loading, setLoading] = useState(true);
    const [metrics, setMetrics] = useState<AuthorMetrics | null>(null);

    useEffect(() => {
        const fetchAllData = async () => {
            setLoading(true);
            try {
                // 1. Fetch Author Metrics
                const authorResponse = await fetch(`https://api.openalex.org/authors/${AUTHOR_ID}`);
                const authorData = await authorResponse.json();

                setMetrics({
                    h_index: authorData.summary_stats?.h_index || 0,
                    total_citations: authorData.cited_by_count || 0,
                    works_count: authorData.works_count || 0
                });

                // 2. Fetch Works
                const worksResponse = await fetch(`https://api.openalex.org/works?filter=author.id:${AUTHOR_ID}&per_page=100&sort=publication_year:desc`);
                const worksData = await worksResponse.json();

                const formatted = worksData.results.map((work: any) => ({
                    id: work.id.replace('https://openalex.org/', ''),
                    title: work.display_name,
                    authors: work.authorships.map((auth: any) => auth.author.display_name).join(', '),
                    venue: `${work.primary_location?.source?.display_name || 'Unknown Venue'}${work.biblio?.volume ? `, Vol. ${work.biblio.volume}` : ''}${work.biblio?.issue ? `(${work.biblio.issue})` : ''}`,
                    year: work.publication_year,
                    doi: work.doi || '',
                    citations: work.cited_by_count || 0,
                    type: work.type || 'journal-article'
                }));

                setPublications(formatted);
                setFilteredPubs(formatted);
            } catch (error) {
                console.error('Error fetching data from OpenAlex:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    // Get unique years
    const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);

    // Filter and sort publications
    useEffect(() => {
        let filtered = [...publications];

        if (searchQuery) {
            filtered = filtered.filter(pub =>
                pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.venue.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedYear !== 'all') {
            filtered = filtered.filter(pub => pub.year === selectedYear);
        }

        filtered.sort((a, b) => {
            const multiplier = sortOrder === 'asc' ? 1 : -1;
            if (sortBy === 'year') {
                return (a.year - b.year) * multiplier;
            } else {
                return (a.citations - b.citations) * multiplier;
            }
        });

        setFilteredPubs(filtered);
    }, [publications, searchQuery, selectedYear, sortBy, sortOrder]);

    const toggleSort = (field: 'year' | 'citations') => {
        if (sortBy === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortOrder('desc');
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 pt-24 pb-20">
                <div className="section-container">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">
                            Publications
                        </h1>
                        <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-4">
                            List of peer-reviewed publications by <span className="text-foreground font-semibold">Dr. Georgiy Shakhgildyan</span>.
                        </p>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center justify-center gap-2 text-primary font-medium">
                                <Database size={16} />
                                <span>Live data powered by OpenAlex</span>
                            </div>
                            {!loading && metrics && (
                                <div className="flex items-center justify-center gap-4 text-sm text-foreground/50">
                                    <span>h-index: {metrics.h_index}</span>
                                    <span>•</span>
                                    <span>Citations: {metrics.total_citations}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Search Info Row */}
                    <div className="mb-6 flex flex-wrap justify-between items-center gap-4 text-sm text-foreground/50">
                        <div className="flex items-center gap-4">
                            <span>Total: {publications.length} publications</span>
                            <span>•</span>
                            <span>Showing: {filteredPubs.length} results</span>
                        </div>
                    </div>

                    {/* Filters and Search */}
                    <div className="glass-card p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="lg:col-span-2">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" size={18} />
                                    <Input
                                        type="text"
                                        placeholder="Search title, authors, or journal..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10 bg-background/50 border-foreground/10 focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-foreground/10 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                    <option value="all">All Years</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => toggleSort('year')}
                                    className={`flex-1 ${sortBy === 'year' ? 'bg-primary/10 border-primary' : ''}`}
                                >
                                    Year {sortBy === 'year' && (sortOrder === 'desc' ? <SortDesc size={16} className="ml-1" /> : <SortAsc size={16} className="ml-1" />)}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => toggleSort('citations')}
                                    className={`flex-1 ${sortBy === 'citations' ? 'bg-primary/10 border-primary' : ''}`}
                                >
                                    Citations {sortBy === 'citations' && (sortOrder === 'desc' ? <SortDesc size={16} className="ml-1" /> : <SortAsc size={16} className="ml-1" />)}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Publications List */}
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                            <p className="mt-4 text-foreground/60 font-medium">Fetching data from OpenAlex...</p>
                        </div>
                    ) : filteredPubs.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-foreground/60 text-lg">No publications found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredPubs.map((pub) => (
                                <div
                                    key={pub.id}
                                    className="glass-card p-6 hover:scale-[1.01] transition-all duration-300"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-3 mb-2">
                                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary shrink-0">
                                                    {pub.year}
                                                </span>
                                                {pub.citations > 0 && (
                                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-foreground/5 text-foreground/70 shrink-0 flex items-center gap-1">
                                                        <Quote size={10} /> {pub.citations} citations
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                                                {pub.title}
                                            </h3>
                                            <p className="text-sm text-foreground/70 mb-1">
                                                {pub.authors}
                                            </p>
                                            <p className="text-sm text-foreground/50 italic">
                                                {pub.venue}
                                            </p>
                                        </div>
                                        {pub.doi && (
                                            <a
                                                href={pub.doi}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium shrink-0 hover:underline"
                                            >
                                                <ExternalLink size={16} />
                                                View Publication
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PublicationsPage;
