import { motion } from 'motion/react';
import { Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    company: "Code Master Technology",
    role: "Intern/Web Development Training",
    period: "June 2025 – April 2026",
    location: "Idar, Gujarat, India",
    points: [
      "Collaborated on real-world projects like YT-Deluxe and Foodash",
      "Gained hands-on experience in full-stack development using React, SQL, JavaScript",
      "Optimized UI/UX components based on feedback, enhancing usability"
    ]
  }
];

const certifications = [
  {
    title: "Digital AI Literacy Certification",
    issuer: "Hackberry Softech Pvt. Ltd.",
    date: "March 2026",
    score: "44/50"
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata (Forage)",
    date: "2025",
    details: "Validated expertise in EDA, Generative AI, and data storytelling"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-[#F27D26] w-6 h-6" />
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-white uppercase tracking-tight">Experience</h2>
            </div>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] rounded-full bg-[#F27D26]" />
                <span className="text-[#F27D26] font-mono text-xs uppercase tracking-widest mb-2 block">{exp.period}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-white/60 mb-4">{exp.company} • {exp.location}</p>
                <ul className="space-y-3">
                  {exp.points.map((p, i) => (
                    <li key={i} className="text-white/40 text-sm leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <Award className="text-[#F27D26] w-6 h-6" />
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-white uppercase tracking-tight">Certifications</h2>
            </div>
          </motion.div>

          <div className="space-y-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#F27D26]/30 transition-colors"
              >
                <span className="text-[#F27D26] font-mono text-xs uppercase tracking-widest mb-2 block">{cert.date}</span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-white/50 text-sm">{cert.issuer}</p>
                {cert.score && <p className="mt-2 text-[#F27D26] font-mono text-xs">Score: {cert.score}</p>}
                {cert.details && <p className="mt-2 text-white/30 text-xs italic">{cert.details}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
