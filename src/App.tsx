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
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100">
      <div className="fixed inset-0 pointer-events-none bg-grid-white opacity-20 z-0" />
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-xl py-4 border-b border-white/5" : "py-8"}`}>
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-medium tracking-tight text-white flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center font-bold text-white shadow-lg shadow-amber-500/20">
              S
            </div>
            MUHAMMAD SHAFIQ
          </motion.div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {NAV_LINKS.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 bg-white text-slate-950 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-50 transition-all"
          >
            Collaborate
          </motion.button>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center px-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                Founder & AI Educator
              </div>
              <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent mb-8">
                Pioneering AI for the <br />
                <span className="text-white">next billion.</span>
              </h1>
              <p className="text-base text-slate-400 max-w-lg mb-10 leading-relaxed font-light">
                Founder-level architectural work in Urdu AI ecosystems and rural innovation. 
                Bridging communities through accessible technology and social impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 rounded-xl bg-slate-100 text-slate-950 font-bold hover:bg-white active:scale-[0.98] transition-all flex items-center gap-2">
                  View Projects <ArrowUpRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
                  Our Vision
                </button>
              </div>

              <div className="flex space-x-6 pt-12">
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide font-bold">Students Taught</div>
                </div>
                <div className="w-[1px] bg-white/10 h-10 self-center" />
                <div>
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide font-bold">Open Models</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-5 relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-white/5 border border-white/10 p-3">
                <img 
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Muhammad Shafiq AI Innovation" 
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section id="initiatives" className="py-32 px-10 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-20">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Active Initiatives</h2>
              <div className="h-[1px] flex-1 mx-8 bg-white/10"></div>
              <button className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                All Work <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: "Urdu GPT Framework", 
                  type: "NLP Research", 
                  desc: "The first localized large language model optimized for regional nuances and socio-cultural context in Pakistan.",
                  color: "border-amber-500/50"
                },
                { 
                  title: "Rural Innovation Hub", 
                  type: "AgriTech", 
                  desc: "Establishing physical tech nodes in underserved villages to provide satellite internet and AI-assisted tools.",
                  color: "border-rose-500/50"
                }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative bg-white/5 border border-white/10 rounded-[2rem] p-10 overflow-hidden hover:${item.color} transition-all`}
                >
                  <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Rocket className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">{item.type}</div>
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-slate-400 font-light text-lg leading-relaxed mb-8 max-w-lg">{item.desc}</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-slate-300 font-medium">Core Strategy</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-slate-300 font-medium">Community Impact</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800" alt="Innovation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-8">
                  <Brain className="w-full h-full text-amber-500 opacity-50" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-8">
                  <Users className="w-full h-full text-rose-500 opacity-50" />
                </div>
                <div className="aspect-[3/4] rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
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
              <h4 className="text-slate-500 uppercase tracking-[0.2em] font-bold text-xs mb-6">Background</h4>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Architecting Social Change through <span className="text-white">Digital Literacy.</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
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

        {/* Skills & About Section */}
        <section id="skills" className="py-32 px-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h4 className="text-amber-500 uppercase tracking-[0.2em] font-bold text-xs mb-6">Expertise</h4>
                <h2 className="text-4xl font-bold mb-8">Technical Competencies</h2>
                <div className="space-y-8">
                  {[
                    { label: "AI Strategy", value: "100%", sub: "Expert" },
                    { label: "Urdu NLP", value: "92%", sub: "Lead" },
                    { label: "Digital Products", value: "85%", sub: "9 Years" }
                  ].map((skill, i) => (
                    <div key={skill.label}>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-slate-300">{skill.label}</span>
                        <span className="text-slate-500">{skill.sub}</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.value }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                          className={`h-full ${i === 0 ? "bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]" : i === 1 ? "bg-rose-500" : "bg-slate-400"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-amber-600 to-rose-700 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-3">Latest Research</h3>
                <p className="text-sm text-white/80 mb-6 font-light leading-relaxed">
                  "Synthesizing Urdu Dialects for Generative Audio Models" - A study on LLM localized fine-tuning.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider border-b border-white/30 pb-1 hover:border-white transition-all">
                  Read Publication <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {PROJECTS.map((project, i) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white/5 border border-white/10 rounded-[2rem] p-6 hover:border-white/20 transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h4 className="text-slate-500 uppercase tracking-[0.2em] font-bold text-xs mb-6">Collaborate</h4>
            <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 tracking-tight">Let's build the <br />future together.</h2>
            
            <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-16 flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="Your Email" 
                className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-amber-500 transition-colors" 
              />
              <textarea 
                placeholder="Inquiry Details" 
                rows={4}
                className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
              <button className="w-full py-4 bg-slate-100 text-slate-950 font-bold rounded-2xl text-sm hover:bg-white active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Send Message <Rocket className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-10 py-12 border-t border-white/5 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-slate-500">S</div>
          <span>Based in Punjab, Pakistan</span>
        </div>
        
        <div className="flex space-x-10">
          <a href="#" className="hover:text-slate-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-slate-400 transition-colors">GitHub</a>
        </div>

        <span>© {new Date().getFullYear()} MUHAMMAD SHAFIQ</span>
      </footer>
    </div>
  );
}
