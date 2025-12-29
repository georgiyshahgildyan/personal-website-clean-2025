const researchAreas = [
  {
    title: 'Optical Glass-Ceramics',
    description: 'Design and study of transparent glass-ceramics combining optical performance with enhanced hardness and mechanical strength.',
  },
  {
    title: 'Photonic Glasses',
    description: 'Glasses activated with rare-earth ions and plasmonic metal nanoparticles for light emission, amplification, and sensing.',
  },
  {
    title: 'Laser Writing in Glass',
    description: 'Femtosecond laser modification of glass for optical data storage, waveguides, and integrated photonic architectures.',
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 lg:py-32">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
          Research Focus
        </h2>
        <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
          Primary research areas and interests
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="glass-card p-6 lg:p-8 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
