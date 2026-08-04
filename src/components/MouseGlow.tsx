"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdCounter = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.hypot(e.clientX - lastMousePos.current.x, e.clientY - lastMousePos.current.y);
      
      // Only spawn particles if moved a certain distance to prevent too many renders
      if (distance > 15) {
        lastMousePos.current = { x: e.clientX, y: e.clientY };
        
        const colors = ["bg-red-500", "bg-rose-400", "bg-pink-500", "bg-red-400"];
        const newParticle = {
          id: particleIdCounter.current++,
          x: e.clientX,
          y: e.clientY,
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        setParticles((prev) => [...prev, newParticle].slice(-20)); // Keep max 20 particles
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 800);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              opacity: 1, 
              scale: Math.random() * 0.5 + 0.5, 
              x: p.x, 
              y: p.y 
            }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              x: p.x + (Math.random() - 0.5) * 60, 
              y: p.y + (Math.random() - 0.5) * 60 + 20 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`absolute w-3 h-3 rounded-full ${p.color} shadow-[0_0_10px_rgba(225,29,72,0.8)]`}
            style={{ willChange: "transform, opacity" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
