"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GridGlowBackground from '../components/ui/grid-glow-background';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titlesWrapperRef = useRef<HTMLDivElement>(null);

  const introText1Ref = useRef<HTMLSpanElement>(null);
  const introText2Ref = useRef<HTMLSpanElement>(null);
  const name1Ref = useRef<HTMLSpanElement>(null);
  const name2Ref = useRef<HTMLSpanElement>(null);

  const scrollTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Entrance Animation
      const enterTl = gsap.timeline();

      enterTl.fromTo(introText1Ref.current,
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      )
        .fromTo([name1Ref.current, name2Ref.current],
          { opacity: 0, y: 5 },
          { opacity: 1, y: 0, duration: 1 },
          "<"
        )
        .fromTo(introText2Ref.current,
          { opacity: 0, y: 5 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.5"
        )
        .fromTo(scrollTextRef.current,
          { opacity: 0 },
          { opacity: 0, duration: 1 },
          "-=0.5" 
        );

      // Looping Titles Animation
      gsap.to(".title-word-0 .char-fg", { y: "0%", opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.inOut", delay: 0.3 });
      gsap.to(".title-word-0 .char-bg", { y: "0%", opacity: 0.15, duration: 0.5, stagger: 0.05, ease: "power3.inOut", delay: 0.2 });

      const loopTl = gsap.timeline({ repeat: -1, delay: 4 }); 
      
      // Transition 1
      loopTl.to(".title-word-0 .char-fg", { y: "-10%", opacity: 0, duration: 0.5, stagger: 0.05, ease: "power3.inOut" }, "transition1");
      loopTl.to(".title-word-0 .char-bg", { y: "10%", opacity: 0, duration: 0.5, stagger: 0.05, ease: "power3.outIN" }, "transition1+=0.5");

      loopTl.fromTo(".title-word-1 .char-fg", 
        { y: "10%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.inOut" }, 
        "transition1"
      );
      loopTl.fromTo(".title-word-1 .char-bg", 
        { y: "10%", opacity: 0 },
        { y: "0%", opacity: 0.15, duration: 0.5, stagger: 0.05, ease: "power3.outIn" }, 
        "transition1+=0.5"
      );
      
      loopTl.to({}, { duration: 2 });

      // Transition 2
      loopTl.to(".title-word-1 .char-fg", { y: "-10%", opacity: 0, duration: 0.5, stagger: 0.05, ease: "power3.inOut" }, "transition2");
      loopTl.to(".title-word-1 .char-bg", { y: "10%", opacity: 0, duration: 0.5, stagger: 0.05, ease: "power3.outIn" }, "transition2+=0.5");
      
      loopTl.fromTo(".title-word-0 .char-fg",
        { y: "10%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.inOut" },
        "transition2"
      );
      loopTl.fromTo(".title-word-0 .char-bg",
        { y: "10%", opacity: 0 },
        { y: "0%", opacity: 0.15, duration: 0.5, stagger: 0.05, ease: "power3.outIn" },
        "transition2+=0.5"
      );
      
      loopTl.to({}, { duration: 2 });

      // Parallax effect on scroll
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 0,
        opacity: 0,
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const renderLetters = (word: string, wordIndex: number, isBg: boolean = false) =>
    word.split("").map((letter, i) => (
      <span key={`${wordIndex}-${i}-${isBg ? 'bg' : 'fg'}`} className="inline-flex pb-1">
        <span
          className={`${isBg ? 'char-bg text-transparent' : 'char-fg text-[#c481ff]'} inline-block leading-none ${isBg
              ? 'text-[50px] md:text-[75px] lg:text-[6.5vw] xl:text-[90px]'
              : 'text-[35px] md:text-[50px] lg:text-[4.5vw] xl:text-[60px]'
            }`}
          style={{
            opacity: 0,
            transform: "translateY(100%)",
            backgroundImage: isBg ? "linear-gradient(to bottom, #ff8a00 0%, #ff8a00 50%, rgba(255,138,0,0.2) 65%, transparent 100%)" : "none",
            WebkitBackgroundClip: isBg ? "text" : "unset",
            backgroundClip: isBg ? "text" : "unset",
            WebkitTextFillColor: isBg ? "transparent" : "unset",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      </span>
    ));

  return (
    <section ref={containerRef}>
      <GridGlowBackground
        backgroundColor="#050505"
        glowColors={["#F27D26", "#a87cff", "#c481ff"]} // Matched to your original theme
        glowCount={12}
      >
        <div className="z-10 w-full h-full px-6 md:px-20 flex flex-col lg:flex-row justify-center lg:items-center pt-28 pb-16 lg:py-0 relative gap-8 lg:gap-32 max-w-7xl mx-auto">
          {/* LEFT SIDE */}
          <div className="flex flex-col relative z-20 w-full lg:w-1/2 items-start lg:items-end">
            <span
              ref={introText1Ref}
              className="text-[#F27D26] font-mono text-lg md:text-xl lg:text-2xl tracking-[0.1em] uppercase mb-1 block font-light opacity-0"
            >
              Hello! I'm
            </span>

            <h1 ref={titleRef} className="flex flex-col font-heading font-bold leading-[1.1] tracking-wide uppercase text-white">
              <div className="flex justify-start lg:justify-end overflow-visible">
                <span ref={name1Ref} className="inline-block text-5xl md:text-7xl lg:text-[80px] opacity-0">JAY</span>
              </div>
              <div className="flex justify-start lg:justify-end overflow-visible -mt-2">
                <span ref={name2Ref} className="inline-block text-5xl md:text-7xl lg:text-[80px] opacity-0">PRAJAPATI</span>
              </div>
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex flex-col items-start w-full lg:w-1/2 z-10">
            <div className="relative z-10 flex flex-col items-start pt-8">
              <span
                ref={introText2Ref}
                className="text-[#F27D26] font-mono text-xl md:text-2xl lg:text-[25px] tracking-[0.1em] uppercase mb-0 font-light opacity-0"
              >
                A Software
              </span>

              <div
                ref={titlesWrapperRef}
                className="relative font-heading font-bold overflow-hidden flex items-center justify-start h-[80px] md:h-[100px] lg:h-[120px] w-[120vw] sm:w-[800px] lg:w-[1200px]"
              >
                <div className="title-word-0 flex absolute z-0 inset-y-0 items-center justify-start whitespace-nowrap -translate-y-[20px]">
                  {renderLetters("DEVELOPER", 0, true)}
                </div>
                <div className="title-word-1 flex absolute z-0 inset-y-0 items-center justify-start whitespace-nowrap -translate-y-[20px]">
                  {renderLetters("ENGINEER", 1, true)}
                </div>

                <div className="title-word-0 flex absolute overflow-hidden z-10 inset-y-0 items-center whitespace-nowrap -translate-x-[-24px]">
                  {renderLetters("ENGINEER", 0, false)}
                </div>
                <div className="title-word-1 flex absolute overflow-hidden z-10 inset-y-0 items-center whitespace-nowrap -translate-x-[-24px]">
                  {renderLetters("DEVELOPER", 1, false)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={scrollTextRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
        >
          <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#F27D26] to-transparent" />
        </div>
      </GridGlowBackground>
    </section>
  );
}