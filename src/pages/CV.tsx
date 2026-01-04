import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Trophy, BookOpen, Globe, Award, ShieldCheck, Mail, MapPin, Link as LinkIcon, FileText, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";

const CVPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Curriculum Vitae | Dr. Georgiy Shakhgildyan";
    }, []);

    const selectedPublications = [
        {
            title: "One-step micro-modification of optical properties in silver-doped zinc phosphate glasses by femtosecond direct laser writing",
            venue: "Journal of Non-Crystalline Solids, Vol. 481",
            year: 2017,
            doi: "https://doi.org/10.1016/j.jnoncrysol.2017.12.011",
            citations: 53
        },
        {
            title: "Formation of Luminescent and Birefringent Microregions in Phosphate Glass Containing Silver",
            venue: "Glass and Ceramics, Vol. 73(7-8)",
            year: 2016,
            doi: "https://doi.org/10.1007/s10717-016-9872-1",
            citations: 32
        },
        {
            title: "Multilevel data writing in nanoporous glass by a few femtosecond laser pulses",
            venue: "Applied Optics, Vol. 57(4)",
            year: 2018,
            doi: "https://doi.org/10.1364/ao.57.000978",
            citations: 29
        },
        {
            title: "3-bit writing of information in nanoporous glass by a single sub-microsecond burst of femtosecond pulses",
            venue: "Optics Letters, Vol. 43(4)",
            year: 2018,
            doi: "https://doi.org/10.1364/ol.43.000851",
            citations: 27
        },
        {
            title: "Direct laser writing of depressed-cladding waveguides in extremely low expansion lithium aluminosilicate glass-ceramics",
            venue: "Optics & Laser Technology, Vol. 138",
            year: 2021,
            doi: "https://doi.org/10.1016/j.optlastec.2020.106846",
            citations: 26
        },
        {
            title: "Thermally-induced precipitation of gold nanoparticles in phosphate glass: effect on the optical properties of Er3+ ions",
            venue: "Journal of Non-Crystalline Solids, Vol. 550",
            year: 2020,
            doi: "https://doi.org/10.1016/j.jnoncrysol.2020.120408",
            citations: 25
        },
        {
            title: "Local atomic structure of the high refractive index La2O3–Nb2O5–B2O3 glasses",
            venue: "Journal of Alloys and Compounds, Vol. 917",
            year: 2022,
            doi: "https://doi.org/10.1016/j.jallcom.2022.165357",
            citations: 24
        },
        {
            title: "Microstructure and optical properties of tracks with precipitated silver nanoparticles and clusters inscribed by the laser irradiation in phosphate glass",
            venue: "Ceramics International, Vol. 47(10)",
            year: 2021,
            doi: "https://doi.org/10.1016/j.ceramint.2021.02.012",
            citations: 24
        },
        {
            title: "Direct femtosecond laser-induced formation of CdS quantum dots inside silicate glass",
            venue: "Optics Letters, Vol. 43(11)",
            year: 2018,
            doi: "https://doi.org/10.1364/ol.43.002519",
            citations: 23
        },
        {
            title: "Effect of Gold Nanoparticles on the Crystallization and Optical Properties of Glass in ZnO-MgO-Al2O3-SiO2 System",
            venue: "Crystals, Vol. 12(2)",
            year: 2022,
            doi: "https://doi.org/10.3390/cryst12020287",
            citations: 23
        }
    ];

    const researchProjects = {
        pi: [
            {
                title: "Development of optical glass-ceramics co-activated by rare-earth ions and noble metal nanoparticles with controlled plasmon resonance for photonic applications",
                funder: "Russian Science Foundation (RSF) Project 22-73-00236",
                years: "2022 — 2024"
            },
            {
                title: "Development of New Luminescent Media Based on Glasses Activated by Metal Nanoparticles and Rare-Earth Elements",
                funder: "Mendeleev University Internal Grant 2020-012",
                years: "2020 — 2021"
            },
            {
                title: "Nanostructured Substrates Based on Silver-Activated Nanoporous Glasses for Ultra-Low Concentration Biomolecule Detection via SERS",
                funder: "Grant of the President of the Russian Federation MK-1194.2020.3",
                years: "2020 — 2021"
            },
            {
                title: "Femtosecond Laser Formation of 3D Microchannel Structures Based on Silver Nanoaggregates in Phosphate Glasses for Integrated Quantum Photonic Chips",
                funder: "Russian Foundation for Basic Research (RFBR) Project 19-32-80032",
                years: "2019 — 2020"
            },
            {
                title: "Development of High-Strength Transparent Glass-Ceramics for Mobile Device Screen Protection",
                funder: "Innovation Promotion Fund Project C1-40533 (START)",
                years: "2019"
            },
            {
                title: "Local Formation of Silver Clusters and Nanoparticles in Phosphate Glasses under Femtosecond Laser Irradiation",
                funder: "Russian Foundation for Basic Research (RFBR) Project 18-33-00595",
                years: "2018 — 2019"
            },
            {
                title: "Sapphirine Glass-Ceramics for Mobile Device Screen Protection",
                funder: "National Intellectual Development Fund Project 004/E/03/2018",
                years: "2018 — 2019"
            },
            {
                title: "Sapphirine Glass-Ceramics with Increased Mechanical Properties",
                funder: "Industrial Project (LG Chem, South Korea)",
                years: "2018 — 2019"
            }
        ],
        participant: "Principal/Key Investigator for 15+ research projects funded by RSF, RFBR, ARF (Advanced Research Fund), and the Ministry of Science and Higher Education."
    };
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen gradient-bg py-20 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">
            {/* Background decoration */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] -mr-96 -mt-96 opacity-50" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] -ml-64 -mb-64 opacity-50" />
            </div>

            <div className="max-w-4xl mx-auto space-y-12 pb-20 relative z-10">
                {/* Navigation & Actions */}
                <div className="flex justify-start mb-8 no-print">
                    <Button variant="ghost" asChild className="hover:bg-white/10 rounded-xl transition-all hover:translate-x-[-4px] text-white/70 hover:text-white">
                        <Link to="/" className="flex items-center gap-2">
                            <span>←</span> Back to Home
                        </Link>
                    </Button>
                </div>

                {/* CV Header */}
                <header className="glass-card p-10 sm:p-14 relative overflow-hidden group">
                    {/* Print-only photo */}
                    <div className="print-only absolute top-10 right-10 w-32 h-40 rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg">
                        <img
                            src="/photo-shkh-vertical.jpg"
                            alt="Dr. Georgiy Shakhgildyan"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-3xl sm:text-6xl font-bold text-foreground mb-4 font-serif tracking-tight sm:whitespace-nowrap leading-tight">
                            Dr. Georgiy Shakhgildyan
                        </h1>
                        <h2 className="text-xl sm:text-2xl font-medium text-primary mb-8 leading-relaxed">
                            Associate Professor | PhD in Chemical Engineering
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-foreground/80">
                            <div className="flex items-center gap-3 group/item">
                                <div className="p-2 rounded-lg bg-primary/5 group-hover/item:bg-primary/10 transition-colors">
                                    <Mail size={18} className="text-primary" />
                                </div>
                                <a href="mailto:shakhgildian.g.i@muctr.ru" className="hover:text-primary transition-colors underline underline-offset-4 decoration-primary/20">
                                    shakhgildian.g.i@muctr.ru
                                </a>
                            </div>
                            <div className="flex items-center gap-3 group/item">
                                <div className="p-2 rounded-lg bg-primary/5 group-hover/item:bg-primary/10 transition-colors">
                                    <Linkedin size={18} className="text-primary" />
                                </div>
                                <a href="https://www.linkedin.com/in/shakhgildyan/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-4 decoration-primary/20">
                                    linkedin.com/in/shakhgildyan
                                </a>
                            </div>
                            <div className="flex items-center gap-3 group/item">
                                <div className="p-2 rounded-lg bg-primary/5 group-hover/item:bg-primary/10 transition-colors">
                                    <MapPin size={18} className="text-primary" />
                                </div>
                                <span className="font-medium">Mendeleev University, Moscow, Russia</span>
                            </div>
                            <div className="flex items-center gap-3 group/item">
                                <div className="p-2 rounded-lg bg-primary/5 group-hover/item:bg-primary/10 transition-colors">
                                    <LinkIcon size={18} className="text-primary" />
                                </div>
                                <a href="https://shakhgildyan.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-4 decoration-primary/20">
                                    shakhgildyan.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-primary/10 flex flex-wrap gap-6 text-sm">
                            <a href="https://scholar.google.ru/citations?user=lKMw96wAAAAJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-all hover:scale-105">
                                <ExternalLink size={16} /> Google Scholar
                            </a>
                            <a href="https://orcid.org/0000-0003-1202-1506" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-all hover:scale-105">
                                <ExternalLink size={16} /> ORCID
                            </a>
                            <a href="https://www.scopus.com/authid/detail.uri?authorId=57192979768" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-all hover:scale-105">
                                <ExternalLink size={16} /> Scopus
                            </a>
                        </div>
                    </div>
                </header>

                {/* Education */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                        <div className="p-3 rounded-2xl bg-primary/10">
                            <GraduationCap className="text-primary" size={28} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground font-serif">Education</h3>
                    </div>

                    <div className="space-y-10 pl-4">
                        <div className="relative pl-10 border-l-2 border-primary/20 group">
                            <div className="absolute w-5 h-5 bg-background border-4 border-primary rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform" />
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                                <h4 className="text-xl font-bold text-foreground">Master of Business Administration (MBA)</h4>
                                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20">
                                    2024 — 2026
                                </span>
                            </div>
                            <div className="text-foreground/80 font-bold mb-1">SKOLKOVO Moscow School of Management</div>
                            <div className="text-primary/90 font-medium mb-2 flex items-center gap-2 italic">
                                <Trophy size={14} /> Full Grant Recipient (Merit-based)
                            </div>
                            <div className="text-foreground/70 leading-relaxed italic">Ongoing Executive Program for academic leaders</div>
                        </div>

                        <div className="relative pl-10 border-l-2 border-primary/20 group">
                            <div className="absolute w-5 h-5 bg-background border-4 border-primary/40 rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform" />
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                                <h4 className="text-xl font-bold text-foreground">PhD in Chemical Engineering</h4>
                                <span className="px-4 py-1.5 bg-primary/5 text-foreground/60 rounded-full text-sm font-medium border border-border/50">
                                    2012 — 2015
                                </span>
                            </div>
                            <div className="text-foreground/80 font-medium mb-1">Mendeleev University of Chemical Technology</div>
                            <p className="text-sm text-foreground/60 italic leading-relaxed">
                                Thesis: “Phosphate glasses doped with metal nanoparticles and rare-earth ions”
                            </p>
                        </div>

                        <div className="relative pl-10 border-l-2 border-primary/20 group">
                            <div className="absolute w-5 h-5 bg-background border-4 border-primary/20 rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform" />
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                                <h4 className="text-xl font-bold text-foreground">Master's Degree in Chemical Engineering</h4>
                                <span className="px-4 py-1.5 bg-primary/5 text-foreground/60 rounded-full text-sm font-medium border border-border/50">
                                    2007 — 2012
                                </span>
                            </div>
                            <div className="text-foreground/80 font-medium mb-2">Mendeleev University of Chemical Technology</div>
                            <p className="text-sm text-foreground/60 italic leading-relaxed">
                                Honor thesis: “Porous glass microspheres for targeted drug delivery”
                            </p>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                        <div className="p-3 rounded-2xl bg-primary/10">
                            <Briefcase className="text-primary" size={28} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground font-serif">Professional Experience</h3>
                    </div>

                    <div className="space-y-12 pl-4">
                        <div className="relative pl-10 border-l-2 border-primary/20 group">
                            <div className="absolute w-5 h-5 bg-background border-4 border-primary rounded-full -left-[11px] top-1" />
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                                <h4 className="text-xl font-bold text-foreground">Associate Professor (Docent)</h4>
                                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20">
                                    Nov 2021 — Present
                                </span>
                            </div>
                            <div className="text-primary/70 font-medium mb-4">Mendeleev University of Chemical Technology</div>
                            <ul className="space-y-3">
                                {[
                                    "Leading development of optical glass-ceramics and ion-strengthened glasses for photonics applications.",
                                    "Developing innovative educational programs and delivering undergraduate/graduate lectures in materials science.",
                                    "Principal Investigator for large-scale research projects funded by RSF and state academic grants."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-foreground/75 text-sm leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative pl-10 border-l-2 border-primary/20 group">
                            <div className="absolute w-5 h-5 bg-background border-4 border-primary/40 rounded-full -left-[11px] top-1" />
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                                <h4 className="text-xl font-bold text-foreground">Assistant Professor</h4>
                                <span className="px-4 py-1.5 bg-primary/5 text-foreground/60 rounded-full text-sm font-medium border border-border/50">
                                    Mar 2018 — Nov 2021
                                </span>
                            </div>
                            <div className="text-foreground/60 font-medium mb-4">Mendeleev University of Chemical Technology</div>
                            <ul className="space-y-2">
                                {[
                                    "Researched micro- and nanomodification of glass and laser crystallization mechanisms.",
                                    "Coordinated research within international Megagrant frameworks and industry-led R&D partnerships."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-foreground/75 text-sm leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative pl-10 border-l-2 border-primary/20 group">
                            <div className="absolute w-5 h-5 bg-background border-4 border-primary/20 rounded-full -left-[11px] top-1" />
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                                <h4 className="text-xl font-bold text-foreground">Leading Engineer</h4>
                                <span className="px-4 py-1.5 bg-primary/5 text-foreground/60 rounded-full text-sm font-medium border border-border/50">
                                    Sep 2012 — Mar 2018
                                </span>
                            </div>
                            <div className="text-foreground/60 font-medium mb-4">Mendeleev University of Chemical Technology</div>
                            <ul className="space-y-2">
                                {[
                                    "Developed glass microspheres for targeted drug delivery systems.",
                                    "Conducted fundamental research on gold nanoparticles formation in phosphate glasses."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-foreground/75 text-sm leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Selected Publications */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                        <div className="p-3 rounded-2xl bg-primary/10">
                            <FileText className="text-primary" size={28} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground font-serif">Selected Publications</h3>
                    </div>

                    <div className="space-y-4 pl-4">
                        {selectedPublications.map((pub, i) => (
                            <div key={i} className="glass-card p-6 group transition-all hover:bg-white/10 hover:translate-x-1">
                                <div className="flex justify-between items-start gap-4 mb-3">
                                    <h4 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                                        {pub.title}
                                    </h4>
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/5 rounded-full shrink-0 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                                        <span className="text-xs font-bold text-primary">{pub.citations} Citations</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                                    <span className="font-medium">{pub.venue}</span>
                                    <span>•</span>
                                    <span>{pub.year}</span>
                                </div>
                                <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline group-hover:gap-3 transition-all">
                                    View DOI <ExternalLink size={12} />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Research Projects */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                        <div className="p-3 rounded-2xl bg-primary/10">
                            <BookOpen className="text-primary" size={28} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground font-serif">Research Projects</h3>
                    </div>

                    <div className="space-y-6 pl-4">
                        <h4 className="text-xl font-bold text-foreground mb-4 opacity-70">As Principal Investigator</h4>
                        <div className="grid grid-cols-1 gap-4">
                            {researchProjects.pi.map((project, i) => (
                                <div key={i} className="glass-card p-6 relative overflow-hidden group border-l-4 border-l-primary/40">
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <h5 className="font-bold text-foreground group-hover:text-primary transition-colors leading-relaxed">
                                            {project.title}
                                        </h5>
                                        <span className="text-xs font-bold text-primary whitespace-nowrap px-3 py-1 bg-primary/5 rounded-full">
                                            {project.years}
                                        </span>
                                    </div>
                                    <div className="text-sm text-foreground/60">
                                        {project.funder}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-8 glass-card bg-primary/5 border border-primary/20 rounded-3xl">
                            <h4 className="text-xl font-bold text-foreground mb-4">Key Investigator Experience</h4>
                            <p className="text-foreground/80 leading-relaxed italic">
                                {researchProjects.participant}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills & Expertise */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                        <div className="p-3 rounded-2xl bg-primary/10">
                            <ShieldCheck className="text-primary" size={28} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground font-serif">Skills & Expertise</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pl-4">
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-foreground/90">Experimental Methods</h4>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Glass synthesis",
                                    "Optical Spectroscopy",
                                    "LIBS",
                                    "DSC",
                                    "Mechanical properties",
                                    "X-ray Diffraction (XRD)",
                                    "SEM/TEM"
                                ].map(skill => (
                                    <span key={skill} className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-2xl border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-foreground/90">Core Competencies</h4>
                            <ul className="space-y-4">
                                {[
                                    "Advanced research planning and execution",
                                    "Scientific manuscript and grant writing",
                                    "R&D project and scientific team management",
                                    "Strategic academic leadership"
                                ].map((comp, i) => (
                                    <li key={i} className="flex gap-3 text-foreground/75 text-sm font-medium leading-relaxed">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                                        {comp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Teaching */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                        <div className="p-3 rounded-2xl bg-primary/10">
                            <Globe className="text-primary" size={28} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground font-serif">Teaching & AI Proficiency</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pl-4">
                        <div className="glass-card p-8 space-y-6 border-primary/10">
                            <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Award className="text-primary" size={20} /> Mendeleev University
                            </h4>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Lectures & Courses</h5>
                                    <ul className="space-y-3 text-sm text-foreground/80 font-medium">
                                        <li>"Technology of Special Glasses and Glass-Based Materials" (for undergraduate students)</li>
                                        <li>"From Glasses to Glass-Ceramics: Structure and Properties" (for undergraduate students)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Supervision</h5>
                                    <p className="text-sm text-foreground/70 leading-relaxed font-medium italic">
                                        Scientific guidance of 10+ undergraduate and graduate students since 2021.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-foreground px-2">Languages & Tools</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center glass-card p-5 group hover:bg-white/10 transition-all">
                                    <span className="font-bold text-foreground">Russian</span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-black rounded-lg uppercase tracking-wider">Native</span>
                                </div>
                                <div className="flex justify-between items-center glass-card p-5 group hover:bg-white/10 transition-all">
                                    <span className="font-bold text-foreground">English</span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-black rounded-lg uppercase tracking-wider">B2 Professional</span>
                                </div>
                                <div className="flex flex-col glass-card p-5 group hover:bg-white/10 transition-all gap-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-foreground">AI Systems</span>
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-black rounded-lg uppercase tracking-wider">Proficient</span>
                                    </div>
                                    <p className="text-xs text-foreground/60 italic font-medium">Advanced user of AI systems for research optimization and data management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing */}
                <div className="text-center pt-20 border-t border-primary/10">
                    <p className="text-foreground/30 text-xs font-medium tracking-widest uppercase mb-12">
                        Updated January 2026
                    </p>
                    <Button asChild variant="outline" className="btn-glass px-12 py-6 h-auto text-lg rounded-3xl group">
                        <Link to="/publications" className="flex items-center gap-3">
                            View Full Publications List
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    </Button>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
};

export default CVPage;
