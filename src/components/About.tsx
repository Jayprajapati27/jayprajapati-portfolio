import { motion } from 'motion/react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-7xl font-mono font-bold tracking-tighter uppercase mb-8">
            Professional <br /> <span className="text-[#F27D26]">Summary</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
            Full Stack Developer specializing in MERN stack and Next.js with hands-on experience building and deploying scalable, production-ready web applications. 
            Proficient in JavaScript, React.js, Node.js, Python (FastAPI), and cloud deployment.
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4 text-white/60">
              <Mail className="w-5 h-5 text-[#F27D26]" />
              <span>jayprajapati.tech05@email.com</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <Phone className="w-5 h-5 text-[#F27D26]" />
              <span>+91 9512975543</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <MapPin className="w-5 h-5 text-[#F27D26]" />
              <span>Idar, Gujarat, India</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center"
        >
          <img 
            src="\Genius.jpg" 
            alt="Jay Prajapati" 
            className="w-full h-full object-cover opacity-80 hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">
            <p className="text-[#F27D26] font-mono text-sm uppercase tracking-widest mb-2">Education</p>
            <h3 className="text-xl md:text-2xl font-bold">Bachelor of Computer Application</h3>
            <p className="text-white/50 text-sm md:text-base">Hemchandracharya North Gujarat University</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
