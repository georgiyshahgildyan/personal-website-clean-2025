import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Layers, Zap, Binary, CheckCircle2, ChevronRight } from 'lucide-react';

const researchAreas = [
  {
    title: 'Optical Glass-Ceramics',
    description: 'Design and study of transparent glass-ceramics combining optical performance with enhanced hardness and mechanical strength.',
    icon: <Layers className="text-primary" size={24} />,
    image: '/research/glass_ceramics.png',
    achievements: [
      'Developed transparent LAS and ZMAS glass-ceramics with controlled crystallization and near-zero thermal expansion, suitable for precision optics',
      'Demonstrated one-step crystallization of gahnite (ZnAl₂O₄) glass-ceramics with high optical transparency (≈90%) and enhanced mechanical properties (Vickers hardness up to 950 kg/mm²)',
      'Achieved laser-induced amorphization of nanocrystals inside thermally stable glass-ceramics, enabling direct laser writing of waveguides in sitalls',
      'Results implemented in industrial optics (LZOS) and applicable to photonics and micro-optical components'
    ]
  },
  {
    title: 'Photonic Glasses',
    description: 'Glasses activated with rare-earth ions and plasmonic metal nanoparticles for light emission, amplification, and sensing.',
    icon: <Zap className="text-primary" size={24} />,
    image: '/research/photonic_glasses.png',
    achievements: [
      'Demonstrated controlled plasmonic nanoparticle formation (Ag, Au) in phosphate and silicate glasses via thermal treatment and laser processing',
      'Revealed plasmon-enhanced and plasmon-quenched luminescence regimes of rare-earth ions (Er³⁺, Eu³⁺) depending on nanoparticle size and clustering',
      'Achieved tunable plasmon resonance shifts up to 100 nm in phase-separated oxide glasses by nanoscale refractive index control',
      'Developed high-refractive-index optical glasses (nD > 1.9) in La₂O₃–Nb₂O₅–B₂O₃ systems, relevant for AR and photonic devices, with structural models validated by EXAFS/XANES'
    ]
  },
  {
    title: 'Laser Writing in Glass',
    description: 'Femtosecond laser modification of glass for optical data storage, waveguides, and integrated photonic architectures.',
    icon: <Binary className="text-primary" size={24} />,
    image: '/research/laser_writing.png',
    achievements: [
      'Developed single-stage femtosecond laser writing of luminescent microdomains containing Ag nanoclusters or CdS quantum dots inside bulk glass',
      'Demonstrated plasmonic waveguides written directly in glass with optical losses down to ~1 dB/cm and supercontinuum generation up to 100 nm',
      'Achieved ultrafast 3D optical data storage with storage density >10 Gb/cm³ and demonstrated 3-bit recording using only a few femtosecond pulses',
      'Recorded single-mode waveguides in low-CTE glass-ceramics (LAS, ZMAS) with losses as low as 2.4 dB/cm at 1064 nm'
    ]
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 lg:py-32 overflow-hidden">
      <div className="section-container relative">
        {/* Decorative ambient light */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-serif text-foreground mb-4">
            Research Focus
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Combining materials science and photonics to develop next-generation optical technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {researchAreas.map((area, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="glass-card p-8 group cursor-pointer hover:scale-[1.02] transition-all duration-500 border-primary/5 hover:border-primary/20"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/20">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                    View Contributions <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-2xl border-white/10 overflow-hidden rounded-3xl">
                <div className="grid lg:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/0 via-background/0 to-background/10 lg:to-background/20" />
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12 space-y-8">
                    <DialogHeader>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                        Key Achievements
                      </div>
                      <DialogTitle className="text-3xl lg:text-4xl font-bold font-serif text-foreground">
                        {area.title}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                      {area.achievements.map((achievement, i) => (
                        <div key={i} className="flex gap-4">
                          <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
                          <p className="text-foreground/80 text-sm lg:text-base leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
