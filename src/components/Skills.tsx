import { motion } from 'motion/react';

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "HTML5", "CSS3"]
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Redux", "Tailwind CSS"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "CursorAI", "Android Studio", "REST API", "NextAuth.js", "Razorpay"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter uppercase text-white">
            Technical <br /> <span className="text-[#F27D26]">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-[#F27D26]/50 transition-colors group"
            >
              <h3 className="text-[#F27D26] font-mono text-sm uppercase tracking-widest mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/70 border border-white/10 group-hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
