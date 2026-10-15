import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    setError('');
    setSubmitted(true);
    // Simulate form submission
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold text-dark mb-4">Get In Touch</h1>
          <p className="text-xl text-muted">
            Let's discuss your next project or opportunity
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-dark mb-6">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'skmudassir.it@gmail.com', href: 'mailto:skmudassir.it@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (901) 415-0779', href: 'tel:+19014150779' },
                  { icon: MapPin, label: 'Location', value: 'United States', href: '#' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon size={20} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted">{item.label}</p>
                      <p className="font-semibold text-dark">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 glass rounded-2xl">
                <h3 className="font-semibold text-dark mb-2">Response Time</h3>
                <p className="text-muted text-sm">I typically respond within 24 hours. For urgent matters, feel free to call or email directly.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="glass rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-dark mb-6">Send a Message</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-green-100 text-green-700 flex items-center gap-3">
                    <CheckCircle2 size={20} />
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-100 text-red-700 flex items-center gap-3">
                    <AlertCircle size={20} />
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="project">Project Inquiry</option>
                      <option value="consulting">Consulting</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="ngp">NGO Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-dark mb-8">Connect With Me</h2>
          <div className="flex justify-center gap-6">
            {[
              { name: 'GitHub', url: 'https://github.com/skmudassir-it', icon: 'GH' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/mudassirshaik', icon: 'IN' },
              { name: 'Email', url: 'mailto:skmudassir.it@gmail.com', icon: '@' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-dark font-bold hover:bg-primary hover:text-white transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}