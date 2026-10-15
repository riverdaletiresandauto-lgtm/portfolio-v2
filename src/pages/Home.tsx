import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, TrendingUp, Users, Code2 } from 'lucide-react';
import { githubRepos, experiences, ngoInfo } from '../data/content';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-dark mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Mudassir Shaik</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted mb-4 max-w-3xl mx-auto">
            Data Scientist & Software Developer with 10+ years of experience
          </p>

          <p className="text-lg text-muted/80 mb-10 max-w-2xl mx-auto">
            Building intelligent solutions that transform businesses. From ML models to enterprise apps — 
            I deliver production-ready code that drives results.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link to="/projects" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all">
              View My Work
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <a href="https://github.com/skmudassir-it" target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass text-dark rounded-2xl font-semibold hover:bg-white transition-all flex items-center gap-2">
              <Github size={20} />
              GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Code2, value: '150+', label: 'Projects Deployed' },
              { icon: TrendingUp, value: '10+', label: 'Years Experience' },
              { icon: Users, value: '50+', label: 'Businesses Helped' },
              { icon: Github, value: '120+', label: 'GitHub Repos' },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-4 text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-dark">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Repos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-dark mb-4">Featured Projects</h2>
            <p className="text-muted text-lg">Open source work that makes an impact</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {githubRepos.filter(r => r.featured).map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {repo.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                  {repo.name}
                </h3>
                <p className="text-muted text-sm mb-4">{repo.description}</p>
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>{repo.language}</span>
                  <span className="flex items-center gap-1">
                    ⭐ {repo.stars}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View All Projects on GitHub
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-dark mb-4">Experience</h2>
            <p className="text-muted text-lg">10+ years building enterprise solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-dark">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted px-3 py-1 rounded-full bg-surface">{exp.period}</span>
                </div>
                <p className="text-muted text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tech.slice(0, 5).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {exp.achievements.slice(0, 2).map((a, i) => (
                    <li key={i} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NGO Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Users size={16} />
                Community Impact
              </div>
              <h2 className="font-display text-3xl font-bold text-dark mb-4">
                Giving Back to Small Businesses
              </h2>
              <p className="text-muted mb-6">
                I actively support local entrepreneurs through {ngoInfo.name}, providing 
                free development services and digital transformation guidance to businesses 
                that need it most.
              </p>
              <div className="space-y-3">
                {ngoInfo.services.slice(0, 3).map((service, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm flex-shrink-0">✓</span>
                    <span className="text-muted text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mb-4 animate-float">
                <Users size={48} className="text-white" />
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-4xl font-bold text-primary mb-1">{ngoInfo.impact}</div>
                <div className="text-sm text-muted">Businesses Empowered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-dark mb-6">
            Let's Build Something <span className="gradient-text">Great</span>
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a data solution, enterprise application, or technical consultation — 
            I'm ready to help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Get In Touch
            </Link>
            <a href="https://github.com/skmudassir-it" target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass text-dark rounded-2xl font-semibold hover:bg-white transition-all">
              <Github className="inline mr-2" size={18} />
              Explore GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}