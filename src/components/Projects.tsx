import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Yt-Deluxe",
    period: "Jan 2024 – May 2024",
    description: "Engineered a cross-platform media downloader supporting high-concurrency video and audio downloads from YouTube.",
    tech: ["React.js", "Python", "FastAPI", "REST API", "Vercel"],
    image: "/YT-Deluxe.png",
    githubUrl: "https://github.com/Utsavstack/YT-Deluxe",
    liveUrl: "https://yt-deluxe.vercel.app",
    highlights: [
      "Video trimming feature for segment downloads",
      "Secure, rate-limited architecture for production readiness",
      "PWA-ready frontend deployed on Vercel"
    ]
  },
  {
    title: "Foodash",
    period: "Aug 2024 – Nov 2024",
    description: "Architected and deployed a full-stack food delivery web application with real-time order tracking and live status updates.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "NextAuth.js", "Razorpay"],
    image: "/foodash.png",
    githubUrl: "https://www.github.com/Jayprajapati27",
    liveUrl: "https://foodash-idar.vercel.app",
    highlights: [
      "Integrated Firebase Realtime Database for live data sync",
      "Razorpay payment gateway for secure UPI and card transactions",
      "JWT-based authentication and role-based authorization"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <h2 className="text-4xl md:text-7xl font-mono font-bold tracking-tighter uppercase text-white">
            Featured <br /> <span className="text-[#F27D26]">Projects</span>
          </h2>
          <p className="text-white/50 max-w-sm font-mono text-xs uppercase tracking-widest">
            A selection of my recent work in full-stack development and API integration.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#F27D26] font-mono text-sm uppercase tracking-widest">{project.period}</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                <h3 className="text-3xl md:text-6xl font-bold text-white mb-6">{project.title}</h3>
                <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/50">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-mono text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative group">
                <div className="aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-6 -right-2 md:-right-6 flex gap-3 md:gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#F27D26] hover:text-white transition-colors">
                      <Github className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F27D26] text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                      <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
