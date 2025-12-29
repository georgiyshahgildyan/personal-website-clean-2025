import { GraduationCap } from 'lucide-react';

const profiles = [
  {
    name: 'Google Scholar',
    icon: ({ size, ...props }: any) => <GraduationCap width={size} height={size} {...props} />,
    link: 'https://scholar.google.ru/citations?user=lKMw96wAAAAJ&hl=en'
  },
  {
    name: 'Scopus',
    icon: ({ size, ...props }: any) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <text x="12" y="16" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">Sc</text>
      </svg>
    ),
    link: 'https://www.scopus.com/authid/detail.uri?authorId=55700064900'
  },
  {
    name: 'Web of Science',
    icon: ({ size, ...props }: any) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <text x="12" y="15.5" fontSize="6" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">WoS</text>
      </svg>
    ),
    link: 'https://www.webofscience.com/wos/author/record/F-9158-2016'
  },
  {
    name: 'ResearchGate',
    icon: ({ size, ...props }: any) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <text x="12" y="16" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">RG</text>
      </svg>
    ),
    link: 'https://www.researchgate.net/profile/Georgiy-Shakhgildyan'
  },
  {
    name: 'ORCID',
    icon: ({ size, ...props }: any) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <text x="12" y="16" fontSize="9" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">iD</text>
      </svg>
    ),
    link: 'https://orcid.org/0000-0003-1202-1506'
  },
];

const ProfileIcons = () => {
  return (
    <div className="flex flex-wrap items-center gap-8 justify-center">
      {profiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-full glass-card hover:bg-foreground/10 transition-all duration-300 hover:scale-110 group"
          title={profile.name}
        >
          <profile.icon
            size={36}
            className="text-foreground/60 group-hover:text-foreground transition-colors"
          />
        </a>
      ))}
    </div>
  );
};

export default ProfileIcons;
