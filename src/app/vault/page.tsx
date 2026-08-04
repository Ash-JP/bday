"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { Mail, Gift, X, Heart, ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder letters - easily editable later
const letters = [
  {
    id: 1,
    trigger: "Open when you miss me",
    title: "When you miss me...",
    content: "Ith ninak eppo enne miss adichalm eduth nokana. I'm always with you, dee! I love you sooooo muchhhh! ❤️✨",
    media: [
      { type: "image", url: "/vault1.jpeg" }
    ],
    icon: Mail,
  },
  {
    id: 2,
    trigger: "Open when you need a laugh",
    title: "When you need a laugh...",
    content: "Wera arem kanikanda, namalde edel mathi. Eppo sangadam wannalm nee enne wilikane, njn ninne appo thanne set aki widam. I love you pabngallliiii... 😂💖",
    media: [
      { type: "image", url: "/vault2.jpeg" }
    ],
    icon: Gift,
  },
  {
    id: 3,
    trigger: "Open when it's exactly midnight",
    title: "Happy Birthday Nila!",
    content: "This is your officila birthday wish! You, my first and only gf in 22 years of my life, are entering the peak age of 21 today. Ath kond all the best dee! FFAA! Nee ille enik ellam, Abu keta? No matter aru endu paranjalm nee parayunna kelkana enik ishtam. You can tell me anything, and I hope that one day we will be able to celebrate our last birthdays also together. Ee warsham nee kore streess aai, adi kitti, padupet padich... eneem oron wrum, but u can handle it! 🎂👑",
    media: [
      { type: "image", url: "/vault3.jpeg" }
    ],
    icon: Gift,
  },
  {
    id: 4,
    trigger: "Open when you're feeling stressed",
    title: "Take a deep breath...",
    content: "Enganm eni ninak pettanu enne wilichit kiteelel ith thurannu nokanam. Breath! Arum ninne onnum cheyilla, nobody will leave. I will always be with you and help you. Endu prashnam wannalm namk handle akam, Nila can handle it! Y Nila supppeerrr allee? Nee muthalle! Appo tension adikand pathuke aloicha matrhi sheriaywm keta. 🧘‍♀️🫂",
    media: [
      { type: "video", url: "/vault4.1.mp4" },
      { type: "image", url: "/vault4.jpeg" }
    ],
    icon: Mail,
  },
  {
    id: 5,
    trigger: "Open when you can't sleep",
    title: "Late night thoughts...",
    content: "Ninak ippo urakam warunilla ennuwechal shiram paripadi thanne anu. Stress anel enne wilikya, ithokke waich nokuwa. Just remember us hugging each other and sleeping, me kissing you... Nee ente nenjil kidakunna pole aloich kidanna mathi. Njn indawm dee eppozh, janduu! I love u deee, ethra paranjalm theeerilla kettaaa! 🌙😴",
    media: [
      { type: "image", url: "/vault5.jpeg" },
      { type: "image", url: "/vault5.2.jpeg" }
    ],
    icon: Mail,
  },
  {
    id: 6,
    trigger: "Open when you just need to know...",
    title: "Just so you know...",
    content: "I love you. Ithonnm porandd njn weendum weendum pareya, I LOVE YOU! I'll always love you no matter what. Enne kond sahikan patunna ellam sahikum, not becasueh its what I am expected to do, because I WANT TO! Enik ariyam ninne, nee ennod angane onnm kallam parayilla. Endelm pattiyalm just know that u have a 'get out of trouble' card. Ennelm nammal adi ayal ithu upayogichal njn appothanne kshamikum keta? I love you dee! Daily njn parayum ninak bodyamayalm, njn paranjond nikkum till my last breath! ❤️🥺",
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop" }
    ],
    icon: Heart,
  },
];

const VaultCarousel = ({ media, title }: { media: { type: string, url: string }[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % media.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  return (
    <div className="relative w-full h-56 sm:h-80 md:h-96 flex-shrink-0 group/carousel overflow-hidden bg-black/90">
      {media.map((item, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-500 ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          {item.type === "video" ? (
            <video src={item.url} controls preload="metadata" playsInline className="w-full h-full object-contain" />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={item.url} alt={title} className="w-full h-full object-contain" loading="lazy" />
          )}
        </div>
      ))}
      
      {media.length > 1 && (
        <>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-md">
            <ChevronLeft className="w-5 h-5 pr-0.5" />
          </button>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-md">
            <ChevronRight className="w-5 h-5 pl-0.5" />
          </button>
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-none">
            {media.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-colors shadow-sm ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`}></div>
            ))}
          </div>
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/20 to-transparent pointer-events-none z-10"></div>
      <h2 className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg font-dancing leading-tight z-20 pointer-events-none">
        {title}
      </h2>
    </div>
  );
};

export default function VaultPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState<typeof letters[0] | null>(null);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 7000);

    return () => {
      window.removeEventListener("resize", updateSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="flex-1 min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      
      {/* Background Enhancements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {showConfetti && windowSize.width > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={600} gravity={0.15} />
        </div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ 
          opacity: { duration: 1 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 relative"
      >
        <div className="inline-block p-4 sm:p-5 bg-white/40 backdrop-blur-md rounded-3xl shadow-xl shadow-purple-500/10 border border-white/60 mb-6">
          <Gift className="w-12 h-12 sm:w-16 sm:h-16 text-rose-500" />
        </div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-indigo-950 tracking-tight mb-4 drop-shadow-sm font-dancing leading-tight">
          Your Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Vault</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-indigo-900/80 font-medium tracking-tight px-4">
          Click an envelope when the time is right.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {letters.map((letter, idx) => {
          const Icon = letter.icon;
          return (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -15, scale: 1.05, rotateY: 12, rotateX: 8 }}
              whileTap={{ scale: 0.95, rotateY: 0, rotateX: 0 }}
              onClick={() => setSelectedLetter(letter)}
              className="cursor-pointer group relative glass-card p-6 sm:p-8 min-h-[200px] sm:min-h-[240px] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(124,58,237,0.25)]"
              style={{ perspective: 1000 }}
            >
              <div className="glass-card-inner"></div>
              
              {/* Envelope flap aesthetic */}
              <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-50 border-b border-white/20 transform -skew-y-6 origin-top-left group-hover:-translate-y-4 transition-transform duration-500"></div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-md text-indigo-400 group-hover:text-rose-500 transition-colors duration-500 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-indigo-950 leading-tight font-dancing px-2">
                  {letter.trigger}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12" style={{ perspective: 1200 }}>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedLetter(null)}
              className="absolute inset-0 bg-indigo-950/60 backdrop-blur-md"
            ></motion.div>

            {/* Modal Content - 3D Flip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: 90, z: -500 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotateY: -90, z: -500 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-white"
            >
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 sm:p-2.5 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110 z-30 backdrop-blur-sm shadow-lg"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Image / Video Section Carousel */}
              <VaultCarousel media={selectedLetter.media} title={selectedLetter.title} />

              {/* Content Section */}
              <div className="p-6 sm:p-10 overflow-y-auto custom-scrollbar">
                <p className="text-lg sm:text-2xl lg:text-3xl text-indigo-950/80 leading-relaxed whitespace-pre-wrap font-medium">
                  {selectedLetter.content}
                </p>
                
                <div className="mt-8 sm:mt-12 flex justify-center">
                  <div className="w-16 h-1 bg-rose-200 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
