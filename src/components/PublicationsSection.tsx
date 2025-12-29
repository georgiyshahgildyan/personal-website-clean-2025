import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const selectedPublications = [
  {
    title: 'Local atomic structure of the high refractive index La2O3–Nb2O5–B2O3 glasses',
    authors: 'Alekseev, R. O., Avakyan, Leon A., Shakhgildyan, Georgiy Yu et al.',
    venue: 'Journal of Alloys and Compounds, 2022',
    doi: 'https://doi.org/10.1016/j.jallcom.2022.165357',
  },
  {
    title: 'Single-Pulse Laser-Induced Ag Nanoclustering in Silver-Doped Glass for High-Density 3D-Rewritable Optical Data Storage',
    authors: 'Lipatiev, A. S., Fedotov, Sergey S., Shakhgildyan, Georgiy Yu et al.',
    venue: 'ACS Applied Nano Materials, 2022',
    doi: 'https://doi.org/10.1021/acsanm.2c00765',
  },
  {
    title: 'Direct laser writing of depressed-cladding waveguides in extremely low expansion lithium aluminosilicate glass-ceramics',
    authors: 'Lipatiev, A. S., Fedotov, Sergey S., Shakhgildyan, Georgiy Yu et al.',
    venue: 'Optics and Laser Technology, 2021',
    doi: 'https://doi.org/10.1016/j.optlastec.2020.106846',
  },
  {
    title: 'Microstructure and optical properties of tracks with precipitated silver nanoparticles and clusters inscribed by the laser irradiation in phosphate glass',
    authors: 'Shakhgildyan, Georgiy Yu, Lipatiev, A. S., Fedotov, Sergey S. et al.',
    venue: 'Ceramics International, 2021',
    doi: 'https://doi.org/10.1016/j.ceramint.2021.02.012',
  },
  {
    title: 'Thermally-induced precipitation of gold nanoparticles in phosphate glass: effect on the optical properties of Er3+ ions',
    authors: 'Shakhgildyan, Georgiy Yu, Ziyatdinova, M. Z., Sigaev, Vladimir N. et al.',
    venue: 'Journal of Non-Crystalline Solids, 2020',
    doi: 'https://doi.org/10.1016/j.jnoncrysol.2020.120408',
  },
];

const recentPublications = [
  {
    title: 'Inhomogeneities in Glass: From Defects to Functional Nanostructures',
    authors: 'Shakhgildyan, Georgiy Yu. and Ojovan, Michael I.',
    venue: 'Encyclopedia, 2025',
    doi: 'https://doi.org/10.3390/encyclopedia5030136',
  },
  {
    title: 'Glass-Ceramics of the Lithium Aluminosilicate System Nucleated by TiO2: The Role of Redox Conditions of Glass Melting in Phase Transformations and Properties',
    authors: 'Maltsev, Stanislav, Dymshits, Olga, Shakhgildyan, Georgiy et al.',
    venue: 'Materials, 2025',
    doi: 'https://doi.org/10.3390/ma18040785',
  },
  {
    title: 'Spectroscopic Properties of Er3+-Doped Zinc–Phosphate Glasses',
    authors: 'Vetchinnikov, M.P., Durymanov, V.A., Shakhgildyan, G. Yu. et al.',
    venue: 'Glass and Ceramics, 2025',
    doi: 'https://doi.org/10.1007/s10717-025-00782-6',
  },
  {
    title: 'Tantalum and niobium – same row, different connectivity. A XAFS study of La2O3-Nb2O5-B2O3 and La2O3-Ta2O5-B2O3 glasses',
    authors: 'Alekseev, R.O., Avakyan, L.A., Shakhgildyan, G. Yu. et al.',
    venue: 'Journal of Alloys and Compounds, 2025',
    doi: 'https://doi.org/10.1016/j.jallcom.2025.178622',
  },
  {
    title: 'Local structure and spectroscopic properties of zinc-phosphate glasses doped with Nd3+ ions',
    authors: 'Durymanov, V.A., Vetchinnikov, M.P., Shakhgildyan, G. Yu et al.',
    venue: 'Optical Materials, 2025',
    doi: 'https://doi.org/10.1016/j.optmat.2025.117387',
  },
];

const PublicationsSection = () => {
  const [filter, setFilter] = useState<'selected' | 'recent'>('selected');
  const currentPublications = filter === 'selected' ? selectedPublications : recentPublications;

  return (
    <section id="publications" className="py-20 lg:py-32">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
          Publications
        </h2>
        <p className="text-foreground/60 text-center mb-8 max-w-2xl mx-auto">
          {filter === 'selected' ? 'Selected peer-reviewed publications' : 'Recent publications from 2025'}
        </p>

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
              Recent 2025
            </Button>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {currentPublications.map((pub, index) => (
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
                  <p className="text-sm text-foreground/50 italic">
                    {pub.venue}
                  </p>
                </div>
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium shrink-0"
                >
                  <ExternalLink size={16} />
                  DOI
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
