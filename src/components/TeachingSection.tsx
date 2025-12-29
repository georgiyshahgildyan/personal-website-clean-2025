import { BookOpen, Calendar } from 'lucide-react';

const courses = [
  {
    title: '[Course Title 1: Introduction to Subject]',
    year: '2023–2024',
  },
  {
    title: '[Course Title 2: Advanced Topics]',
    year: '2022–2024',
  },
  {
    title: '[Course Title 3: Graduate Seminar]',
    year: '2021–2023',
  },
  {
    title: '[Course Title 4: Research Methods]',
    year: '2020–2022',
  },
];

const TeachingSection = () => {
  return (
    <section id="teaching" className="py-20 lg:py-32">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
          Teaching
        </h2>
        <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
          Courses and academic instruction
        </p>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="glass-card p-5 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground/90 font-medium leading-snug mb-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-foreground/50">
                    <Calendar size={14} />
                    {course.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
