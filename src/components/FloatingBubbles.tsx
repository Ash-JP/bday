"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface Bubble {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  type: "circle" | "heart";
  color: string;
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate 30 random bubbles/hearts
    const newBubbles: Bubble[] = Array.from({ length: 30 }).map((_, i) => {
      const type = Math.random() > 0.6 ? "heart" : "circle";
      
      const colors = [
        "bg-white/40", 
        "bg-rose-300/40", 
        "bg-pink-300/40", 
        "bg-fuchsia-300/40",
        "bg-purple-300/40"
      ];
      
      const heartColors = [
        "text-rose-400/60",
        "text-pink-400/60",
        "text-red-400/60"
      ];

      return {
        id: i,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${10 + Math.random() * 20}s`, // 10s to 30s
        animationDelay: `${Math.random() * 15}s`,
        size: `${20 + Math.random() * 60}px`,
        type,
        color: type === "circle" ? colors[Math.floor(Math.random() * colors.length)] : heartColors[Math.floor(Math.random() * heartColors.length)],
      };
    });
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="floating-element flex items-center justify-center"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDuration: bubble.animationDuration,
            animationDelay: bubble.animationDelay,
          }}
        >
          {bubble.type === "circle" ? (
            <div
              className={`rounded-full w-full h-full backdrop-blur-sm border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)] ${bubble.color}`}
            ></div>
          ) : (
            <Heart className={`w-full h-full fill-current ${bubble.color}`} />
          )}
        </div>
      ))}
    </div>
  );
}
