import { useState, useEffect } from 'react';
import ProfileIcons from './ProfileIcons';
import { Database } from 'lucide-react';

const AUTHOR_ID = 'A5011970336';

const MetricsSection = () => {
  const [metrics, setMetrics] = useState([
    { label: 'h-index', value: '...' },
    { label: 'Citations', value: '...' },
    { label: 'Papers', value: '...' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch(`https://api.openalex.org/authors/${AUTHOR_ID}`);
        const data = await response.json();

        setMetrics([
          { label: 'h-index', value: (data.summary_stats?.h_index || 0).toString() },
          { label: 'Citations', value: (data.cited_by_count || 0).toLocaleString() },
          { label: 'Papers', value: (data.works_count || 0).toString() },
        ]);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <section id="metrics" className="py-20 lg:py-32">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
          Impact & Profiles
        </h2>

        <a
          href={`https://openalex.org/${AUTHOR_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-primary/60 text-xs mb-8 hover:text-primary transition-colors group"
        >
          <Database size={12} className="group-hover:scale-110 transition-transform" />
          <span className="underline underline-offset-2 decoration-primary/20 hover:decoration-primary">
            Live data powered by OpenAlex
          </span>
        </a>

        {/* Metrics Grid */}
        <div className="glass-card p-8 lg:p-16 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="text-5xl lg:text-7xl font-bold gradient-text mb-3 tracking-tight min-h-[1em]">
                  {metric.value}
                </div>
                <div className="text-xs lg:text-sm text-foreground/50 uppercase tracking-[0.2em] font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Links */}
        <div className="flex justify-center">
          <ProfileIcons />
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
