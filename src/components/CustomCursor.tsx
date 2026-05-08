import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  life: number;
  maxLife: number;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const isHovering = useRef(false);
  const isMoving = useRef(false);
  const moveTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Inject a global style to hide the default cursor rigorously
    const styleTag = document.createElement('style');
    styleTag.id = 'hide-default-cursor';
    styleTag.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(styleTag);

    const cursor = cursorRef.current;
    const canvas = canvasRef.current;
    if (!cursor || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initial positioning via set to prevent starting at 0,0
    gsap.set(cursor, { x: window.innerWidth / 2, y: window.innerHeight / 2, xPercent: -50, yPercent: -50 });

    // GSAP quickTo for highly performant, smooth mouse following with delay
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      xTo(e.clientX);
      yTo(e.clientY);

      isMoving.current = true;
      if (moveTimer.current) clearTimeout(moveTimer.current);
      moveTimer.current = setTimeout(() => {
        isMoving.current = false;
      }, 50);

      // Add particles on move mapping speed to particle count could be better, but simple is fine
      addParticles(e.clientX, e.clientY, isHovering.current ? 4 : 2);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        isHovering.current = true;
        gsap.to(cursor, { 
          scale: 3, 
          backgroundColor: "rgba(242, 125, 38, 0.1)", // Soft orange translucent
          border: "3px solid rgba(242, 125, 38, 0.5)",
          duration: 0.3, 
          ease: 'back.out(2)' 
        });
        // Sparkle burst
        addParticles(mouse.current.x, mouse.current.y, 15);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        isHovering.current = false;
        gsap.to(cursor, { 
          scale: 1, 
          backgroundColor: "#ffffffff",
          border: "0px solid transparent",
          duration: 0.3, 
          ease: 'power2.out' 
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Particle logic
    const addParticles = (x: number, y: number, count: number) => {
      if (particlesRef.current.length > 150) return; // Reduced limit for better performance
      
      for (let i = 0; i < count; i++) {
        // Random variations for premium feel
        const size = Math.random() * 3 + (isHovering.current ? 2.5 : 1);
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          size,
          alpha: Math.random() * 0.5 + 0.5,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5 - 0.5, 
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.15,
          life: 0,
          maxLife: Math.random() * 30 + 20  // Reduced life for better performance 
        });
      }
    };

    // Draw customized premium sparkle (4-pointed star)
    const drawSparkle = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
      const spikes = 4;
      const rot = Math.PI / 2 * 3;
      let cx = x;
      let cy = y;
      let step = Math.PI / spikes;

      ctx.beginPath();
      for (let i = 0; i < spikes; i++) {
        cx = x + Math.cos(rot + i * step * 2) * radius;
        cy = y + Math.sin(rot + i * step * 2) * radius;
        ctx.lineTo(cx, cy);
        
        cx = x + Math.cos(rot + i * step * 2 + step) * (radius * 0.2);
        cy = y + Math.sin(rot + i * step * 2 + step) * (radius * 0.2);
        ctx.lineTo(cx, cy);
      }
      ctx.lineTo(x, y - radius);
      ctx.closePath();
    };

    const render = () => {
      // Clear with slight trailing effect if desired, but request is full clear for pure particles
      ctx.clearRect(0, 0, width, height);

      // Generate ambient sparkles when hovering
      if (isHovering.current && !isMoving.current && Math.random() > 0.8) {
        addParticles(mouse.current.x, mouse.current.y, 1);
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        
        // Physics update
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.02; // Subtle anti-gravity/float effect for sparkles
        p.rotation += p.rotationSpeed;
        p.life++;
        
        // Smooth fade out
        p.alpha = Math.max(0, 1 - (p.life / p.maxLife));

        if (p.life >= p.maxLife) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        
        // Glowing blend mode & shadows for richness
        ctx.globalCompositeOperation = 'screen';
        ctx.shadowBlur = 0; // Removed shadow for lightweight performance
        // ctx.shadowColor = 'rgba(242, 125, 38, 0.8)';
        
        // Use gradient for individual sparkles can be overkill, solid orange is great with colored shadow
        ctx.fillStyle = `rgba(255, 165, 0, ${p.alpha})`;
        
        // Draw the custom sparkle
        drawSparkle(ctx, 0, 0, p.size * (p.alpha + 0.5)); // Scale slightly down as it dies
        ctx.fill();
        
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      const styleEl = document.getElementById('hide-default-cursor');
      if (styleEl) styleEl.remove();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
      if (moveTimer.current) clearTimeout(moveTimer.current);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
        style={{ mixBlendMode: 'screen' }} 
      />
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[9999] flex items-center justify-center will-change-transform"
        style={{
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(242, 125, 38, 0.6)',
          mixBlendMode: 'screen'
        }}
      />
    </>
  );
}
