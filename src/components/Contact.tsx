import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUpRight, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="py-24 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-mono font-bold tracking-tighter uppercase text-white mb-12">
              Let's <br /> <span className="text-[#F27D26]">Connect</span>
            </h2>
            <p className="text-xl text-white/50 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="flex flex-col justify-end gap-8">
            <a 
              href="mailto:jayprajapati.tech05@email.com"
              className="group flex items-center justify-between p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#F27D26] transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-mono text-white/40 text-xs uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-xl font-bold text-white">jayprajapati.tech05@email.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[#F27D26] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://www.linkedin.com/in/jayprajapati-exe" 
                className="flex items-center justify-between text-white p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-bold">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a 
                href="https://www.github.com/Jayprajapati27" 
                className="flex items-center justify-between text-white p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <Github className="w-5 h-5" />
                  <span className="font-bold">GitHub</span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://www.twitter.com/im_jay05" 
                className="flex items-center justify-between text-white p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <Twitter className="w-5 h-5" />
                  <span className="font-bold">Twitter</span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a 
                href="https://www.instagram.com/jayprajapati.dev" 
                className="flex items-center justify-between text-white p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <Instagram className="w-5 h-5" />
                  <span className="font-bold">Instagram</span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-white/30 text-sm font-mono uppercase tracking-widest">
            © 2026 Jay Prajapati. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#about" className="font-mono text-white/30 hover:text-white transition-colors text-xs uppercase tracking-widest">About</a>
            <a href="#projects" className="font-mono text-white/30 hover:text-white transition-colors text-xs uppercase tracking-widest">Projects</a>
            <a href="#skills" className="font-mono text-white/30 hover:text-white transition-colors text-xs uppercase tracking-widest">Skills</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
