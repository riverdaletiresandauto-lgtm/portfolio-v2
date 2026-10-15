import { skillCategories } from '../data/content';

export default function Skills() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold text-dark mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted">
            Full-stack capabilities across data science, web development, and enterprise solutions
          </p>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h2 className="font-display text-2xl font-bold text-dark mb-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary" />
                {category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="glass rounded-2xl p-6 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <h3 className="font-semibold text-dark mb-3">{skill.name}</h3>
                    <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-dark text-center mb-12">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'SAP Certified Development Associate - SAP S/4HANA',
              'SAP Certified Application Associate - SAP Business Technology Platform',
              'AWS Certified Cloud Practitioner',
              'Google Data Analytics Professional Certificate',
              'Microsoft Azure Fundamentals',
              'SAP Certified Integration Associate',
            ].map((cert, i) => (
              <div key={i} className="glass rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm font-bold">✓</span>
                </div>
                <p className="text-sm text-dark font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-dark text-center mb-12">Tools & Platforms</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Vercel', 'GitHub Actions', 'Jenkins', 'Postman', 'Figma', 'Notion', 'Jira'].map((tool) => (
              <span
                key={tool}
                className="px-6 py-3 glass rounded-full text-dark font-medium hover:bg-white hover:shadow-lg transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}