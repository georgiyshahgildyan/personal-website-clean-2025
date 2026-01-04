import { Button } from "@/components/ui/button";
import { BookOpen, Award, ExternalLink, Calendar, Briefcase, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Research Projects | Dr. Georgiy Shakhgildyan";
    }, []);

    const projectsData = {
        pi: [
            {
                title: "Development of optical glass-ceramics co-activated by rare-earth ions and noble metal nanoparticles with controlled plasmon resonance for photonic applications",
                funder: "Russian Science Foundation (RSF)",
                id: "Project 22-73-00236",
                years: "2022 — 2024"
            },
            {
                title: "Development of New Luminescent Media Based on Glasses Activated by Metal Nanoparticles and Rare-Earth Elements",
                funder: "Mendeleev University Internal Grant",
                id: "Project 2020-012",
                years: "2020 — 2021"
            },
            {
                title: "Nanostructured Substrates Based on Silver-Activated Nanoporous Glasses for Ultra-Low Concentration Biomolecule Detection via SERS",
                funder: "Grant of the President of the Russian Federation",
                id: "Project MK-1194.2020.3",
                years: "2020 — 2021"
            },
            {
                title: "Femtosecond Laser Formation of 3D Microchannel Structures Based on Silver Nanoaggregates in Phosphate Glasses for Integrated Quantum Photonic Chips",
                funder: "Russian Foundation for Basic Research (RFBR)",
                id: "Project 19-32-80032",
                years: "2019 — 2020"
            },
            {
                title: "Development of High-Strength Transparent Glass-Ceramics for Mobile Device Screen Protection",
                funder: "Innovation Promotion Fund (START)",
                id: "Project C1-40533",
                years: "2019"
            },
            {
                title: "Local Formation of Silver Clusters and Nanoparticles in Phosphate Glasses under Femtosecond Laser Irradiation",
                funder: "Russian Foundation for Basic Research (RFBR)",
                id: "Project 18-33-00595",
                years: "2018 — 2019"
            },
            {
                title: "Sapphirine Glass-Ceramics for Mobile Device Screen Protection",
                funder: "National Intellectual Development Fund",
                id: "Project 004/E/03/2018",
                years: "2018 — 2019"
            },
            {
                title: "Sapphirine Glass-Ceramics with Increased Mechanical Properties",
                funder: "Industrial Project (LG Chem, South Korea)",
                id: "Industrial Contract",
                years: "2018 — 2019"
            }
        ],
        participant: [
            {
                title: "Rational Design of High-Strength Transparent Glass-Ceramics via Advanced Structural Analysis",
                funder: "Russian Science Foundation (RSF)",
                id: "Project 25-43-01075",
                years: "2025 — 2027"
            },
            {
                title: "Multiple enhancement of laser radiation of Nd and Er ions by broadband bimetallic plasmonic nanoparticles and their arrays in zinc phosphate glasses: search for effective conditions for energy transfer, synthesis and practical implementation",
                funder: "Russian Science Foundation (RSF)",
                id: "Project 23-12-00102",
                years: "2023 — 2025"
            },
            {
                title: "Kvarts-D",
                funder: "Foundation for Advanced Research",
                id: "Industrial Project",
                years: "2022 — 2024"
            },
            {
                title: "Spatial-selective crystallization of glasses under the influence of a laser beam",
                funder: "Russian Science Foundation (RSF)",
                id: "Project 17-73-20324",
                years: "2017 — 2019"
            },
            {
                title: "Mechanisms for increasing the efficiency of sensitization of luminescence of Yb3+ ions by Cr3+ ions in oxide glasses",
                funder: "Russian Foundation for Basic Research (RFBR)",
                id: "Project 18-53-00005",
                years: "2018 — 2020"
            },
            {
                title: "Synthesis and spectroscopic study of Ln–Au-containing glasses",
                funder: "Russian Foundation for Basic Research (RFBR)",
                id: "Project 17-53-04123",
                years: "2017 — 2019"
            },
            {
                title: "Modification of phosphate glasses with metal nanoparticles under the influence of a laser beam for recording information",
                funder: "Grant of the President of the Russian Federation",
                id: "Project MK-9290.2016.3",
                years: "2016 — 2017"
            },
            {
                title: "Mechanisms for increasing the efficiency of visualization of 'solar-blind' and vacuum ultraviolet oxide glasses",
                funder: "Russian Foundation for Basic Research (RFBR)",
                id: "Project 16-53-00157",
                years: "2016 — 2017"
            },
            {
                title: "Local structural rearrangements in glasses under the influence of femtosecond laser radiation",
                funder: "Russian Foundation for Basic Research (RFBR)",
                id: "Project 16-03-00541",
                years: "2016 — 2017"
            },
            {
                title: "Ultrastable optical memory based on oxide glass, nanostructured by femtosecond laser radiation",
                funder: "Foundation for Advanced Research",
                id: "Major Research Project",
                years: "2015"
            },
            {
                title: "Laser micro- and nanomodification of materials for photonics and information technology",
                funder: "Ministry of Education and Science",
                id: "Mega-grant 14.Z50.31.0009",
                years: "2014"
            },
            {
                title: "Nanostructuring of phosphate glasses doped with noble metals under laser irradiation",
                funder: "Russian Foundation for Basic Research (RFBR)",
                id: "Project 14-03-31587",
                years: "2014 — 2015"
            },
            {
                title: "Formation of crystalline waveguides in glasses with a laser beam",
                funder: "Russian Foundation for Basic Research (RFBR)",
                id: "Project 14-03-00931",
                years: "2014 — 2015"
            },
            {
                title: "New functionality of glass and ceramic glass",
                funder: "Ministry of Education and Science",
                id: "Mega-grant 11.G34.31.0027",
                years: "2011 — 2013"
            }
        ]
    };

    return (
        <div className="min-h-screen gradient-bg relative overflow-x-hidden">
            <Header />

            <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Page Title */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 font-serif">
                            Research Projects
                        </h1>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                            Overview of research initiatives led as Primary Investigator and key contributions to major scientific grants.
                        </p>
                    </div>

                    {/* PI Projects Section */}
                    <div className="space-y-12 mb-20">
                        <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                            <div className="p-3 rounded-2xl bg-primary/10">
                                <Award className="text-primary" size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground font-serif">Principal Investigator (PI)</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {projectsData.pi.map((project, i) => (
                                <div key={i} className="glass-card p-8 group transition-all hover:bg-white/10 hover:translate-y-[-4px]">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                        <div className="space-y-4 flex-1">
                                            <div className="flex items-center gap-3">
                                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                                                    {project.years}
                                                </span>
                                                <span className="text-xs text-foreground/40 font-mono tracking-wider uppercase">
                                                    {project.id}
                                                </span>
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-foreground/60">
                                                <Briefcase size={16} className="text-primary/60" />
                                                <span className="font-medium">{project.funder}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Participant Section */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                            <div className="p-3 rounded-2xl bg-secondary/10">
                                <BookOpen className="text-secondary" size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground font-serif">Key Investigator Contributions</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {projectsData.participant.map((project, i) => (
                                <div key={i} className="glass-card p-6 border-secondary/10 group transition-all hover:bg-white/10">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                        <div className="space-y-3 flex-1">
                                            <div className="flex items-center gap-3">
                                                <span className="px-2.5 py-0.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full border border-secondary/20">
                                                    {project.years}
                                                </span>
                                                <span className="text-[10px] text-foreground/30 font-mono tracking-wider uppercase">
                                                    {project.id}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-secondary transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-xs text-foreground/50">
                                                <span className="font-semibold text-secondary/70">{project.funder}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Back */}
                    <div className="mt-24 text-center">
                        <Button asChild variant="outline" className="btn-glass px-10 py-6 h-auto text-lg rounded-2xl group">
                            <Link to="/" className="flex items-center gap-3">
                                <ChevronRight className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default ProjectsPage;
