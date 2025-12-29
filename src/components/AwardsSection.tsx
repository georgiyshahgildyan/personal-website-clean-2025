import { Trophy, ShieldCheck, Briefcase, Calendar } from 'lucide-react';

const AwardsSection = () => {
    return (
        <section id="awards" className="py-20 lg:py-32">
            <div className="section-container">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
                    Awards & Funding
                </h2>
                <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
                    Recognition for research excellence and grant-funded projects
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column: Awards & Expert Roles */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <Trophy className="text-primary" size={24} />
                            Awards & Recognition
                        </h3>

                        <div className="glass-card p-6 border-l-4 border-l-primary relative overflow-hidden group">
                            <div className="flex flex-col gap-4">
                                <div className="text-xs font-bold text-primary uppercase tracking-widest">
                                    Moscow Government Prize 2023
                                </div>
                                <p className="text-foreground/90 font-medium leading-relaxed">
                                    Moscow Government Award for Young Scientists for advancements in laser-induced structural modification of optical materials for photonics and optoelectronics
                                </p>
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Trophy size={80} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-4 glass-card p-4 hover:bg-white/5 transition-colors">
                                <ShieldCheck className="text-primary shrink-0 mt-1" size={20} />
                                <div>
                                    <div className="text-sm font-semibold text-foreground">Russian Science Foundation (RSF) Expert</div>
                                    <div className="text-xs text-foreground/50">Scientific Expertise</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 glass-card p-4 hover:bg-white/5 transition-colors">
                                <ShieldCheck className="text-primary shrink-0 mt-1" size={20} />
                                <div>
                                    <div className="text-sm font-semibold text-foreground">"Priority-2030" Academic Leadership Program Expert</div>
                                    <div className="text-xs text-foreground/50">University Strategic Development</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Funding & Grants */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <Briefcase className="text-primary" size={24} />
                            Research Funding
                        </h3>

                        <div className="space-y-4">
                            {[
                                {
                                    fund: 'Russian Science Foundation (RSF)',
                                    title: 'Development of optical glass-ceramics co-activated by rare-earth ions and noble metal nanoparticles',
                                    period: '2022-2023',
                                    role: 'Principal Investigator',
                                },
                                {
                                    fund: 'President of the Russian Federation Grant',
                                    title: 'Nanostructured substrates based on nanoporous glasses',
                                    period: '2020-2021',
                                    role: 'Principal Investigator',
                                },
                                {
                                    fund: 'Innovation Promotion Fund',
                                    title: 'Development of high-strength transparent glass-ceramics',
                                    period: '2019-2020',
                                    role: 'Principal Investigator',
                                }
                            ].map((grant, idx) => (
                                <div key={idx} className="glass-card p-5 hover:bg-white/5 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                                            {grant.fund}
                                        </span>
                                        <span className="flex items-center gap-1 text-[10px] text-foreground/40">
                                            <Calendar size={10} />
                                            {grant.period}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {grant.title}
                                    </h4>
                                    <div className="text-[10px] text-foreground/50 font-medium">
                                        Role: {grant.role}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
