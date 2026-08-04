"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/timeline3.jpeg",
  "/timeline4.jpeg",
  "/timeline6.jpeg",
  "/timeline7.jpeg",
  "/vault1.jpeg",
  "/vault2.jpeg",
  "/vault3.jpeg",
];

export default function FloatingImages() {
  const [mounted, setMounted] = useState(false);
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate random positions, delays, sizes, and images
    const newBubbles = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * 90, // Left %
      size: Math.random() * 100 + 100, // Size between 100px and 200px
      delay: Math.random() * 15, // Delay in seconds
      duration: Math.random() * 20 + 20, // Duration between 20s and 40s
      image: images[Math.floor(Math.random() * images.length)],
      rotation: Math.random() * 30 - 15, // Random tilt
    }));
    setBubbles(newBubbles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-[-250px] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden border-[6px] border-white/80"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
            rotate: bubble.rotation,
          }}
          animate={{
            y: [0, -1500],
            rotate: [bubble.rotation, bubble.rotation + (Math.random() * 40 - 20)],
            opacity: [0, 0.4, 0.6, 0.4, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "linear",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bubble.image} className="w-full h-full object-cover" alt="" />
        </motion.div>
      ))}
    </div>
  );
}
