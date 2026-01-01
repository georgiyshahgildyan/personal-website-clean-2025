import { useState, useEffect } from 'react';
import { ExternalLink, Database, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AUTHOR_ID = 'A5011970336';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  doi: string;
  citations: number;
}

const PublicationsSection = () => {
  const [filter, setFilter] = useState<'selected' | 'recent'>('selected');
  const [selectedPubs, setSelectedPubs] = useState<Publication[]>([]);
  const [recentPubs, setRecentPubs] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPubs = async () => {
      setLoading(true);
      try {
        // Fetch up to 100 works to ensure we have all author's works for proper sorting
        const response = await fetch(`https://api.openalex.org/works?filter=author.id:${AUTHOR_ID}&per_page=100&sort=publication_year:desc`);
        const data = await response.json();

        const allWorks = data.results.map((work: any) => ({
          title: work.display_name,
          authors: work.authorships.map((auth: any) => auth.author.display_name).join(', '),
          venue: `${work.primary_location?.source?.display_name || 'Unknown Venue'}${work.biblio?.volume ? `, Vol. ${work.biblio.volume}` : ''}${work.biblio?.issue ? `(${work.biblio.issue})` : ''}, ${work.publication_year}`,
          doi: work.doi || '',
          citations: work.cited_by_count || 0,
          year: work.publication_year
        }));

        // Selected: Top 3 by citations (strictly)
        const selected = [...allWorks]
          .sort((a, b) => b.citations - a.citations)
          .slice(0, 3);

        // Recent: Top 3 by year (already sorted descending from API)
        const recent = [...allWorks].slice(0, 3);

        setSelectedPubs(selected);
        setRecentPubs(recent);
      } catch (error) {
        console.error('Error fetching publications for homepage:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPubs();
  }, []);

  const currentPublications = filter === 'selected' ? selectedPubs : recentPubs;

  return (
    <section id="publications" className="py-20 lg:py-32">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          {/* Section Title with Link - Fixed centering and font consistency */}
          <Link
            to="/publications"
            className="group relative inline-flex items-center justify-center text-3xl lg:text-4xl font-bold font-serif text-foreground hover:text-primary transition-colors mb-4 text-center"
          >
            Publications
            <ArrowRight
              className="absolute -right-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary"
              size={28}
            />
          </Link>

          {/* Live Badge with Link */}
          <a
            href={`https://openalex.org/${AUTHOR_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary/60 text-xs mb-6 hover:text-primary transition-colors group"
          >
            <Database size={12} className="group-hover:scale-110 transition-transform" />
            <span className="underline underline-offset-2 decoration-primary/20 hover:decoration-primary">
              Live from OpenAlex
            </span>
          </a>

          <p className="text-foreground/60 text-center max-w-2xl mx-auto">
            {filter === 'selected' ? 'Top 3 most cited academic works' : 'Latest contributions and recent findings'}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-1.5 flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFilter('selected')}
              className={filter === 'selected'
                ? 'btn-primary text-primary-foreground rounded-lg'
                : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg'}
            >
              Selected
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFilter('recent')}
              className={filter === 'recent'
                ? 'btn-primary text-primary-foreground rounded-lg'
                : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg'}
            >
              Recent
            </Button>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {loading ? (
            <div className="flex flex-col items-center py-10 gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="text-sm text-foreground/40 font-medium">Updating from OpenAlex...</p>
            </div>
          ) : (
            currentPublications.map((pub, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-1">
                      {pub.authors}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <p className="text-sm text-foreground/50 italic">
                        {pub.venue}
                      </p>
                      {pub.citations > 0 && (
                        <span className="text-[10px] uppercase tracking-wider font-bold bg-primary/10 text-primary px-2 py-0.5 rounded flex items-center gap-1">
                          <Quote size={8} /> {pub.citations} citations
                        </span>
                      )}
                    </div>
                  </div>
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium shrink-0 group/doi"
                    >
                      <ExternalLink size={16} className="group-hover/doi:scale-110 transition-transform" />
                      DOI
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/publications"
            className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors inline-flex items-center gap-2 group"
          >
            View all publications <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
