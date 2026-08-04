"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Lock, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const timelineEvents = [
  {
    id: 1,
    date: "The Beginning",
    title: "When We First Met",
    description: "The moment our story started. It started as something really professional. Naml onnu aspire wech kandu, samsarichu company aai. Pakshe we were nothing more than friends then. ✨",
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop" }
    ]
  },
  {
    id: 2,
    date: "Not Our Date Moment",
    title: "We Connected",
    description: "Pinne nee wera oruthante bdayki wendi wannu. Nammal innit kanakakunnu poi, me as your cameraman! Pakshe annu nammal video eukand kore samsaarichu, and I felt that you were such a genuine person, and you deserved so much better. ❤️",
    media: [
      { type: "video", url: "/timeline2.mp4" }
    ]
  },
  {
    id: 3,
    date: "May",
    title: "The 8 Hour Call",
    description: "Ithairnu the actual day we felt the spark. We talked a lot, I told you everything there is to know about me, neeyum koree paranju ennod. Next day enik exam airnu, still njn adyamai oralde aduth 8 manikoor okke samsarich. Athrekm njn oralde aduth samsarikan patumennu enik areelernu. Njn oru choonda ittath kond iwdam ware ethi! 📞💕",
    media: [
      { type: "image", url: "/timeline3.jpeg" },
      { type: "image", url: "/timeline3.2.jpeg" },
      { type: "image", url: "/timeline3.4.jpeg" }
    ]
  },
  {
    id: 4,
    date: "May",
    title: "The Confession",
    description: "THE DAY! Enokke pareyane pole nee oru ottamindum pidich wannu ente aduthek. FFFAAAAA! In my house, ente achan ulla samayam onnum pareyand angane njn ninne roomil kond poi, and awdennu ninne propose aki... baaki ninak ariyalo. 💍🙈",
    media: [
      { type: "image", url: "/timeline4.jpeg" },
      { type: "image", url: "/timeline4.2.jpeg" },
      { type: "image", url: "/timeline4.4.jpeg" }
    ]
  },
  {
    id: 5,
    date: "May 23",
    title: "Our First Date",
    description: "Ente lifile thanne njn etawm koodthal enjoy cheytha oru day. I had a blast! Ninne kooti Kozhikode muzhuwan karangi, namde first official date. You were my first. Oru restum illand one activity after the other, onnu thulli kalich. Pinne basketball kalich, pinne SM Street poi, biriyani kazhich, Mananchira poi, cringe couples aai. Tired aai, FFAAAA, innitm namk maduthilla! Ninne ingane kond nadakan enik ishtama. 🏀🌆",
    media: [
      { type: "video", url: "/timeline5.mp4" },
      { type: "image", url: "/timeline5.2.jpeg" },
      { type: "image", url: "/timeline5.3.jpeg" },
      { type: "image", url: "/timeline5.7.jpeg" }
    ]
  },
  {
    id: 6,
    date: "May 30",
    title: "Ernakulam Date",
    description: "The next date. Allel oru paalam paninjal angotm ingotm pole njnm wannu angot ninte naatilek. Enum paranj Tinkerhub paripadi, angane I came to TVM. Nee witiln hackathon anu paranju irangiyatha. We spent an entire day with each other, dance together. I kissed you till I burned all my calories! Kore tempt aaki nee enne, pakshe njn nalla chekan aai ninnu. One of the best experiences I had. Calmest and peaceful sleep I ever had. I hope I woke up everyday like that looking at your face. Ninte kannunoki ninne kettipidich eneekanam enik ella diwasawm. 🚆✨",
    media: [
      { type: "image", url: "/timeline6.jpeg" },
      { type: "image", url: "/timeline6.2.jpeg" },
      { type: "image", url: "/timeline6.3.jpeg" }
    ]
  },
  {
    id: 7,
    date: "June 5",
    title: "The Short and Sweet One",
    description: "Just as how short and sweet you are, namde shortest date we had. Nee ninte best volunteer prize meedikan wannu, njn ente prize aya ninne medikan wannu. We did not spend an entire day, but from the moment we met we never let go of our hands till we left. I even got u flowers, never had I thought I would do that. I love u deeeeeee! Ninne annum kanan enathem pole odukatha bhangi airnu... I'll always be with you. 💐🥰",
    media: [
      { type: "image", url: "/timeline7.jpeg" },
      { type: "image", url: "/timeline7.3.jpeg" }
    ]
  },
  {
    id: 8,
    date: "August 4",
    title: "Present Me",
    description: "Ninak areela how much I love you.... Deee pangaliii enik ninnne athrekm ishta, pakshe ille enik ninte aduth weran patanilla athinte wishamond. Njn arkm ingane onnm cheythitilladi, eni areela cheyan karanam anagne arum enikm cheythitilla. YOU ARE MY SUNSHINE, MOONLIGHT, EVERYTHING! I am not good with words but I did not want to use AI, so ellam njn irunnu type akuwa. Ninte 21st bday ayitm I am not able to do anything for you, but I will, njn cheyum. Eneem ella bdays njn ninte koode indawm I promise you that. Ippo thanne Ritty paranju wera pillerokke warunind. Night ninak wish akanm evdeyo kondpokan njn ninnod parayilla, ith kanumbo nee arinja mathi. Nee nalla urakam anadi, odukatha urakam. Njn kore paranjoki awarod onnu samsarich nala evening set akan, pakshe awar kelkumo areela nokaam. Pakshe eni ippo ithre pattulu, so I'm doing this! 🎂💖",
    media: [
      { type: "image", url: "/timeline8.jpeg" },
      { type: "image", url: "/timeline8.2.jpeg" }
    ]
  },
];

const MediaCarousel = ({ media }: { media: { type: string, url: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % media.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  return (
    <div className="relative h-80 sm:h-96 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-inner group-hover:shadow-lg transition-shadow duration-500 bg-gray-100 group/carousel">
      {media.map((item, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-500 ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          {item.type === "video" ? (
            <video src={item.url} controls preload="metadata" playsInline className="object-contain w-full h-full transform transition-transform duration-700 group-hover:scale-105" />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={item.url} alt="Memory" className="object-contain w-full h-full transform transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          )}
        </div>
      ))}
      
      {media.length > 1 && (
        <>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] text-white rounded-full z-20 opacity-0 group-hover/carousel:opacity-100 transition-all shadow-md">
            <ChevronLeft className="w-5 h-5 pr-0.5" />
          </button>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] text-white rounded-full z-20 opacity-0 group-hover/carousel:opacity-100 transition-all shadow-md">
            <ChevronRight className="w-5 h-5 pl-0.5" />
          </button>
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {media.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-colors shadow-sm ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`}></div>
            ))}
          </div>
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
    </div>
  );
};

export default function TimelinePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <main className="flex-1 flex flex-col items-center justify-start py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mt-12 mb-28 relative z-10"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="flex justify-center mb-8 relative"
        >
          <div className="absolute inset-0 bg-rose-200/40 blur-3xl rounded-full scale-150"></div>
          <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-rose-500 animate-pulse fill-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)] relative z-10" />
        </motion.div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-indigo-950 tracking-tight mb-6 drop-shadow-sm font-dancing leading-tight flex flex-col items-center">
          <span>Happy Birthday,</span>
          <span className="text-8xl sm:text-9xl md:text-[10rem] bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600 mt-2 pb-4">Nila!</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-indigo-900/80 max-w-2xl mx-auto font-medium tracking-tight px-4">
          A look back at us, before you unlock your present.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative max-w-5xl w-full mx-auto mb-32">
        {/* Background Track for line */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 sm:w-2 bg-purple-200/50 transform sm:-translate-x-1/2 rounded-full"></div>
        
        {/* Animated Progress Line */}
        <motion.div 
          className="absolute left-6 sm:left-1/2 top-0 w-1 sm:w-2 bg-gradient-to-b from-rose-400 via-purple-500 to-blue-500 transform sm:-translate-x-1/2 rounded-full origin-top z-0"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>

        <div className="space-y-16 sm:space-y-32">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
              className={`relative flex flex-col sm:flex-row items-center group ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 sm:left-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full border-4 border-white transform sm:-translate-x-1/2 -translate-x-[11px] sm:-translate-x-[16px] mt-6 sm:mt-0 shadow-[0_0_15px_rgba(244,63,94,0.5)] z-20 transition-transform group-hover:scale-125 duration-300"></div>

              {/* Content Card (Optimized for scroll performance) */}
              <div className={`w-full sm:w-1/2 pl-16 pr-2 sm:px-12 flex flex-col relative z-10 ${index % 2 === 0 ? "sm:items-start" : "sm:items-end text-left sm:text-right"}`}>
                <div className="bg-white/95 border border-white/60 p-6 sm:p-10 w-full max-w-lg transition-all duration-300 shadow-xl rounded-3xl hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden group-hover:shadow-rose-500/10">
                  
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 text-sm sm:text-base font-bold rounded-full mb-5 tracking-widest uppercase shadow-sm border border-white/50">
                    <Sparkles className="w-4 h-4" />
                    {event.date}
                  </span>
                  
                  <h3 className="text-4xl sm:text-5xl font-bold text-indigo-950 mb-4 tracking-tight font-dancing leading-tight">
                    {event.title}
                  </h3>
                  
                  <p className="text-indigo-900/80 mb-6 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                    {event.description}
                  </p>
                  
                  <MediaCarousel media={event.media} />

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pb-24 text-center relative z-10"
      >
        <div className="absolute inset-0 bg-rose-300 blur-[80px] opacity-30 rounded-full scale-150 -z-10"></div>
        <Link
          href="/vault"
          className="premium-button inline-flex items-center justify-center space-x-3 rounded-full px-12 py-6 font-bold text-2xl sm:text-3xl"
        >
          <span>Unlock Your Gift</span>
          <Lock className="w-6 h-6 sm:w-8 sm:h-8" />
        </Link>
      </motion.div>
    </main>
  );
}
