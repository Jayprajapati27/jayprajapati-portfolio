import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(navLinks[0].name);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const activeLink = navLinks.find(link => link.href === `#${id}`);
            if (activeLink) {
              setActiveTab(activeLink.name);
            }
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const isTop = href === '#' || href === '/#';
    
    if ((window as any).lenis) {
      if (isTop) {
        (window as any).lenis.scrollTo(0, { duration: 1.2 });
      } else {
        (window as any).lenis.scrollTo(href, { duration: 1.2, offset: -80 });
      }
      return;
    }

    if (isTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetId = href.replace(/.*\#/, "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-10 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
      )}
      style={{ zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Premium Image Logo Replacement */}
        <a 
          href="#" 
          onClick={(e) => handleAnchorClick(e, '#')}
          className="relative flex items-center group transition-transform duration-500 hover:scale-105"
        >
          {/* Subtle warm ambient glow behind the logo on hover */}
          <div className="absolute inset-0 bg-[#F27D26]/20 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <img 
            src="/jp (2).png" 
            alt="JP Logo" 
            className="relative h-10 md:h-12 w-auto object-contain transition-all duration-500 drop-shadow-[0_0_10px_rgba(242,125,38,0.15)] group-hover:drop-shadow-[0_0_15px_rgba(242,125,38,0.4)]"
          />
        </a>

        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-2 py-1">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleAnchorClick(e, link.href);
                  setActiveTab(link.name);
                }}
                className={cn(
                  "relative font-mono px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors rounded-full",
                  isActive ? "text-[#DDA0DD]" : "text-white/50 hover:text-white"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="tubelight"
                    className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 60 }}
                  >
                    <div className="absolute -top-[5px] md:-top-[6px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#F27D26] rounded-t-full">
                      <div className="absolute w-12 h-6 bg-[#F27D26]/30 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-[#F27D26]/30 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-[#F27D26]/30 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            );
          })}
        </div>

        {/* Premium Awwwards-Style 'Hire Me' Button & Hamburger */}
        <div className="flex items-center gap-4">
          <motion.a 
            href="#contact"
            onClick={(e) => {
              handleAnchorClick(e, '#contact');
              setIsMobileMenuOpen(false);
            }}
            className="relative group inline-block hidden sm:inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Smooth Breathing Ambient Neon Purple Glow */}
            <motion.div 
              className="absolute inset-0 bg-[#9333EA] rounded-full blur-[10px] group-hover:blur-[16px] transition-all duration-500"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [0.98, 1.03, 0.98]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />

            {/* Core Premium Button Base - Dark Purple BG / White Text */}
            <div className="relative flex items-center justify-center px-5 py-2 bg-[#3B0764] text-white font-mono text-[12px] font-bold uppercase tracking-widest rounded-full overflow-hidden border border-white/30 group-hover:border-[#C084FC]/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] group-hover:shadow-[inset_0_0_15px_rgba(147,51,234,0.6),0_0_20px_rgba(147,51,234,0.8)] transition-all duration-500">
              
              {/* Glossy Top Edge Highlight */}
              <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated Light Sweep Effect */}
              <motion.div
                className="absolute -inset-y-2 w-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg]"
                initial={{ x: "-150%" }}
                animate={{ x: "150%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                  repeatDelay: 1.5,
                }}
              />

              {/* Typography with subtle glowing drop-shadow on hover */}
              <span className="relative z-10 transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                Hire Me
              </span>
            </div>
          </motion.a>

          <button 
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="flex flex-col py-6 px-6 gap-6">
              {navLinks.map((link) => {
                const isActive = activeTab === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleAnchorClick(e, link.href);
                      setActiveTab(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "font-mono text-lg uppercase tracking-[0.2em] transition-colors py-2 border-b border-white/5",
                      isActive ? "text-[#F27D26]" : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
              
              <a 
                href="#contact"
                onClick={(e) => {
                  handleAnchorClick(e, '#contact');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 flex sm:hidden items-center justify-center px-5 py-3 bg-[#F27D26] text-white font-mono text-[12px] font-bold uppercase tracking-widest rounded-full"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}