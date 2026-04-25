/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Brain, 
  ChevronRight, 
  Code, 
  ExternalLink, 
  Globe, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Rocket, 
  Users, 
  Zap,
  Github,
  Twitter,
  Linkedin,
  ArrowUpRight
} from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Initiatives", href: "#initiatives" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "Urdu AI Toolkit",
    description: "Bridging the linguistic gap with advanced LLM integration for Urdu speakers.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["NLP", "Education", "Open Source"],
    link: "#"
  },
  {
    title: "Rural Tech Connect",
    description: "Digital literacy platform designed for high-impact in low-connectivity areas.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    tags: ["Innovation", "Social Impact"],
    link: "#"
  },
  {
    title: "AI Literacy Course",
    description: "A comprehensive localized curriculum for emerging tech in secondary schools.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    tags: ["Urdu", "AI", "Teaching"],
    link: "#"
  }
];

const SKILLS = [
  { category: "AI & ML", items: ["Generative AI", "LLM Fine-tuning", "Prompt Engineering", "NLP"] },
  { category: "Digital Creation", items: ["Course Design", "Technical Writing", "Brand Strategy", "Content Eco-systems"] },
  { category: "Innovation", items: ["Rural Tech Strategy", "Community Architecture", "Product Ownership"] },
  { category: "Tech Stack", items: ["Python", "TypeScript", "React", "Cloud Architecture"] }
];

const IMPACT_STATS = [
  { label: "Students Reached", value: "50k+" },
  { label: "Community Builders", value: "200+" },
  { label: "Open Source Contribs", value: "100+" },
  { label: "Project Initiatives", value: "12" }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-bg-dark text-gray-300">
      <div className="fixed inset-0 pointer-events-none bg-grid-white opacity-20 z-0" />
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-bg-dark/80 backdrop-blur-md py-4 border-b border-white/5" : "py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tighter text-white flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
              <span className="text-bg-dark">S</span>
            </div>
            SHAFIQ
          </motion.div>
          
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium hover:text-brand-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 rounded-full border border-white/10 hover:border-brand-primary transition-all text-sm font-medium hover:text-brand-primary"
          >
            Work with me
          </motion.button>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex items-center px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-brand-primary mb-6 uppercase tracking-widest">
                <Zap className="w-3 h-3" /> AI Educator & Innovator
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
                Empowering <br />
                <span className="text-brand-primary text-glow">The Future</span> <br />
                through AI.
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-light">
                Founder-level architectural work in Urdu AI ecosystems and rural innovation. 
                Bridging communities through accessible technology and social impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-full bg-brand-primary text-bg-dark font-bold hover:scale-105 transition-transform flex items-center gap-2">
                  View Projects <ArrowUpRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 rounded-full glass-card font-bold hover:bg-white/10 transition-colors">
                  Read My Vision
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-square glass-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200" 
                  alt="AI and Technology Concept" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-secondary/20 blur-[100px] rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {IMPACT_STATS.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-2xl glass-card overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800" alt="Innovation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="aspect-square rounded-2xl glass-card overflow-hidden bg-brand-primary/10 flex items-center justify-center p-8">
                  <Brain className="w-full h-full text-brand-primary opacity-50" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl glass-card overflow-hidden bg-brand-secondary/10 flex items-center justify-center p-8">
                  <Users className="w-full h-full text-brand-secondary opacity-50" />
                </div>
                <div className="aspect-[3/4] rounded-2xl glass-card overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800" alt="Community" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-brand-primary uppercase tracking-[0.2em] font-bold text-sm mb-6">Background</h4>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Architecting Social Change through <span className="text-white">Digital Literacy.</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                <p>
                  As an AI Educator and Community Innovator, I specialize in translating complex technological paradigms 
                  into actionable human impact. My focus lies at the intersection of Urdu language processing and 
                  rural digital ecosystems.
                </p>
                <p>
                  I've spent the last decade building programs that democratize access to high-tier AI education, 
                  ensuring that geographical and linguistic barriers do not stop the next generation of innovators 
                  from thriving in the global digital economy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <h4 className="text-brand-primary uppercase tracking-[0.2em] font-bold text-sm mb-6">Work</h4>
                <h2 className="text-4xl md:text-6xl font-display font-bold">Featured Projects</h2>
              </div>
              <button className="text-brand-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                Browse Full Catalog <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, i) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-wider text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-primary transition-colors flex items-center justify-between">
                    {project.title} <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-4">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section id="initiatives" className="py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h4 className="text-brand-primary uppercase tracking-[0.2em] font-bold text-sm mb-6 text-center">Global Reach</h4>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-24">Strategic Initiatives</h2>
            
            <div className="space-y-4">
              {[
                { title: "Urdu AI localized Ecosystem", type: "Core Infrastructure", desc: "Building the first comprehensive AI library specifically optimized for the Urdu script." },
                { title: "Rural Micro-Innovation Hubs", type: "Community Development", desc: "Transforming village centers into tech-learning nodes using sustainable hardware models." },
                { title: "Public sector AI Advocacy", type: "Policy Support", desc: "Advising regional educational boards on the integration of LLMs in public curriculum." }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-8 md:p-12 rounded-3xl glass-card flex flex-col md:flex-row gap-8 items-start md:items-center group hover:bg-white/[0.08] transition-all cursor-default"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Rocket className="w-8 h-8 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-brand-secondary font-bold mb-2">{item.type}</div>
                    <h3 className="text-3xl font-display font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 font-light max-w-2xl">{item.desc}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                <h4 className="text-brand-primary uppercase tracking-[0.2em] font-bold text-sm mb-6">Expertise</h4>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Specialized Toolsets</h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  A multi-disciplinary approach combining technical engineering with socio-digital strategy.
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {SKILLS.map((set, i) => (
                  <motion.div 
                    key={set.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-2xl border border-white/5 bg-white/[0.03]"
                  >
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <Code className="w-5 h-5 text-brand-primary" /> {set.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {set.items.map(skill => (
                        <span key={skill} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-gray-400">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden glass-card relative isolate">
            <div className="absolute inset-0 bg-brand-primary/5 -z-10" />
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/5">
                <h4 className="text-brand-primary uppercase tracking-[0.2em] font-bold text-sm mb-6 text-glow">Contact</h4>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight">Let's build the <br />future together.</h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Me</div>
                      <div className="text-lg font-medium text-white">hello@shafiqai.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Social Chat</div>
                      <div className="text-lg font-medium text-white">@shafiq_innovation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Current Base</div>
                      <div className="text-lg font-medium text-white">Innovation Labs, Rural Hub</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 p-12 lg:p-20">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/5 focus:border-brand-primary/50 focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/5 focus:border-brand-primary/50 focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Project Interest</label>
                    <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/5 focus:border-brand-primary/50 focus:outline-none transition-colors appearance-none text-gray-400 font-light">
                      <option>AI Education Partnership</option>
                      <option>Rural Tech Initiative</option>
                      <option>Digital Product Design</option>
                      <option>General Collaboration</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Your Message</label>
                    <textarea rows={5} placeholder="Tell me about your vision..." className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/5 focus:border-brand-primary/50 focus:outline-none transition-colors resize-none" />
                  </div>
                  <button className="w-full py-4 rounded-xl bg-brand-primary text-bg-dark font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
                    SendMessage <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-bold text-white mb-4">SHAFIQ</div>
            <p className="text-sm text-gray-500 font-light max-w-sm">
              Architecting the next generation of social innovation through localized digital empowerment.
            </p>
          </div>
          
          <div className="flex gap-10">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>

          <div className="flex gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
          <div>© {new Date().getFullYear()} MUHAMMAD SHAFIQ. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
