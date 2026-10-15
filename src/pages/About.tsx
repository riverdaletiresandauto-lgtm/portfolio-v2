import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Award, GraduationCap, Heart } from 'lucide-react';
import { experiences, ngoInfo } from '../data/content';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
            <span className="text-white text-4xl font-bold">MS</span>
          </div>
          <h1 className="font-display text-5xl font-bold text-dark mb-4">About Me</h1>
          <p className="text-xl text-muted mb-8">
            Data Scientist & Software Developer passionate about building impactful solutions
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/skmudassir-it" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/mudassirshaik" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:skmudassir.it@gmail.com" className="w-12 h-12 rounded-full glass flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-dark mb-6">Who I Am</h2>
              <p className="text-muted mb-4">
                I'm a Data Scientist and Software Developer with over 10 years of experience 
                transforming complex business problems into elegant technical solutions.
              </p>
              <p className="text-muted mb-4">
                My expertise spans the full stack — from machine learning models and data pipelines 
                to enterprise applications and cloud infrastructure. I've deployed 150+ projects 
                across diverse industries including retail, healthcare, manufacturing, and finance.
              </p>
              <p className="text-muted">
                Beyond coding, I'm committed to giving back. Through my NGO work, I help small 
                businesses establish their digital presence and leverage technology for growth.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Award, label: 'SAP Certified Developer', sublabel: 'S/4HANA, BTP, Integration Suite' },
                { icon: GraduationCap, label: 'M.S. Information Systems', sublabel: 'Indiana Wesleyan University' },
                { icon: Heart, label: 'Community Leader', sublabel: 'Helping 50+ small businesses grow' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">{item.label}</h3>
                    <p className="text-sm text-muted">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-dark text-center mb-12">Professional Journey</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-dark">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted px-3 py-1 rounded-full bg-surface mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NGO Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold text-dark mb-4">Community Impact</h2>
              <p className="text-muted">
                I believe in using technology to empower underserved businesses. Through my NGO work, 
                I provide free technical assistance to small business owners who need it most.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {ngoInfo.services.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">✓</span>
                  <span className="text-muted">{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-2xl font-bold text-dark mb-2">{ngoInfo.impact}</p>
              <p className="text-muted">Small businesses transformed through technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">Want to work together?</h2>
          <p className="text-muted mb-8">I'm always open to discussing new projects and opportunities.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold hover:shadow-xl transition-all">
            <Mail size={18} />
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}