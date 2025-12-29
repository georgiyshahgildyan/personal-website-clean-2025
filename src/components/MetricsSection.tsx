import ProfileIcons from './ProfileIcons';

const metrics = [
  { label: 'h-index', value: '19' },
  { label: 'Citations', value: '812' },
  { label: 'Papers', value: '99' },
];

const MetricsSection = () => {
  return (
    <section id="metrics" className="py-20 lg:py-32">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
          Impact & Profiles
        </h2>
        <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
          Research metrics and academic profiles
        </p>

        {/* Metrics Grid */}
        <div className="glass-card p-8 lg:p-16 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="text-5xl lg:text-7xl font-bold gradient-text mb-3 tracking-tight">
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
