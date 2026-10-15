import { Link } from 'react-router-dom';
import { Github, Star, Code2, ExternalLink } from 'lucide-react';
import { githubRepos } from '../data/content';

export default function Projects() {
  const featured = githubRepos.filter(r => r.featured);
  const webApps = githubRepos.filter(r => r.category === 'web-app');
  const dataScience = githubRepos.filter(r => r.category === 'data-science' || r.category === 'ml');
  const enterprise = githubRepos.filter(r => r.category === 'enterprise');

  const SectionHeader = ({ title, description, count }: { title: string; description: string; count: number }) => (
    <div className="mb-8">
      <h2 className="font-display text-3xl font-bold text-dark mb-2">{title}</h2>
      <p className="text-muted">{description}</p>
      <span className="inline-block mt-2 text-sm text-primary font-medium">{count} projects</span>
    </div>
  );

  const RepoCard = ({ repo }: { repo: typeof githubRepos[0] }) => (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all group block"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <Code2 className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
          {repo.category}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
        {repo.name}
        <ExternalLink size={14} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      <p className="text-muted text-sm mb-4 line-clamp-2">{repo.description}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted">{repo.language}</span>
        <span className="flex items-center gap-1 text-muted">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          {repo.stars}
        </span>
      </div>
    </a>
  );

  return (
    <>
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold text-dark mb-4">Projects & GitHub</h1>
          <p className="text-xl text-muted mb-8">
            150+ production applications deployed across diverse domains
          </p>
          <a
            href="https://github.com/skmudassir-it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass text-dark rounded-2xl font-semibold hover:bg-white transition-all"
          >
            <Github size={20} />
            View Full GitHub Profile
          </a>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Featured Projects"
            description="Highlighting my most impactful open source work"
            count={featured.length}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map(repo => <RepoCard key={repo.name} repo={repo} />)}
          </div>
        </div>
      </section>

      {/* Data Science & ML */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Data Science & Machine Learning"
            description="Analytics, predictions, and intelligent systems"
            count={dataScience.length}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {dataScience.map(repo => <RepoCard key={repo.name} repo={repo} />)}
          </div>
        </div>
      </section>

      {/* Web Applications */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Web Applications"
            description="Modern, responsive websites and applications"
            count={webApps.length}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {webApps.map(repo => <RepoCard key={repo.name} repo={repo} />)}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Enterprise Solutions"
            description="Business applications and enterprise integrations"
            count={enterprise.length}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {enterprise.map(repo => <RepoCard key={repo.name} repo={repo} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-dark mb-4">Explore All 120+ Repos</h2>
          <p className="text-muted mb-8">
            From small business websites to enterprise-scale applications — see the complete portfolio.
          </p>
          <a
            href="https://github.com/skmudassir-it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold hover:shadow-xl transition-all"
          >
            <Github size={20} />
            Visit GitHub Profile
          </a>
        </div>
      </section>
    </>
  );
}