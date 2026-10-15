import { Outlet, Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-surface">
      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <span className="font-display text-xl font-semibold text-dark">Mudassir Shaik</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="https://github.com/skmudassir-it" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/mudassirshaik" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-muted hover:text-dark"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden glass border-t border-white/20">
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm font-medium py-2 ${
                    location.pathname === link.path ? 'text-primary' : 'text-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/20">
                <a href="https://github.com/skmudassir-it" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/mudassirshaik" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:skmudassir.it@gmail.com" className="text-muted hover:text-primary">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MS</span>
                </div>
                <span className="font-display text-lg font-semibold text-dark">Mudassir Shaik</span>
              </div>
              <p className="text-muted text-sm">Data Scientist & Software Developer building impactful solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-dark mb-4">Quick Links</h4>
              <div className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link key={link.path} to={link.path} className="block text-sm text-muted hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-dark mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="https://github.com/skmudassir-it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/mudassirshaik" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:skmudassir.it@gmail.com" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-muted">
            © {new Date().getFullYear()} Mudassir Shaik. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}