"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldCheck, AlertCircle, Sparkles, Heart } from "lucide-react";

// Placeholder questions - easily editable later
const quizQuestions = [
  {
    id: 1,
    question: "What is my favorite thing about you? 🥰",
    options: ["Your smile 😊", "Your Energy ⚡", "Your voice 🎵", "Everything ❤️"],
    correctAnswer: 3, 
  },
  {
    id: 2,
    question: "Who fell first?? 💘",
    options: ["Nila Chandana 🙋‍♀️", "ME (ASH) 🙋‍♂️", "Both of us at the same time ✨", "Areellaaaa 🤷‍♀️"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Naml sthiram upayogikunne oru phrase enda?? 🤔",
    options: ["Wayyeeee 😩", "Uuuummmmmaaaaaaa 😘", "I love you ❤️", "ITH prashna awueee!!!! 🚨"],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: "How long do you think we are gonna be together? ♾️",
    options: ["50 Years 👴👵", "10 Years ⏳", "Forever 🌟", "Till I Die 💖"],
    correctAnswer: 2,
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const question = quizQuestions[currentStep];

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null && selectedOption === question.correctAnswer) return; 
    
    setSelectedOption(index);
    
    if (index === question.correctAnswer) {
      setErrorMsg("");
      setSuccessMsg("pangaaallliiii you are righttt! 🎉");
      
      if (currentStep === quizQuestions.length - 1) {
        setTimeout(() => {
          setIsUnlocked(true);
          setTimeout(() => {
            router.push("/timeline");
          }, 2000);
        }, 1500);
      }
    } else {
      setSuccessMsg("");
      setErrorMsg("Imposter! Try again!");
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setSelectedOption(null);
        setErrorMsg("");
      }, 1000);
    }
  };

  const nextQuestion = () => {
    setSuccessMsg("");
    setSelectedOption(null);
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 min-h-screen relative overflow-hidden">
      {/* Background Deep Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] bg-red-800/20 rounded-full blur-[100px] pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className={`w-full max-w-lg relative p-6 sm:p-12 rounded-sm shadow-2xl ${
              isAnimating ? "animate-shake" : ""
            }`}
          >
            {/* Vintage Paper Background (Letter feel) */}
            <div className="absolute inset-0 bg-[#fdfaf3] rounded-sm shadow-[5px_5px_15px_rgba(0,0,0,0.15)] border border-[#e5d9b5] overflow-hidden">
              {/* Subtle paper texture / lines */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
              {/* Notebook lines */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(180,50,50,0.1)_95%)] bg-[length:100%_40px] pointer-events-none mt-24"></div>
              {/* Left red margin line */}
              <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-[2px] bg-red-400/30 pointer-events-none"></div>
            </div>

            {/* Header */}
            <div className="flex flex-col items-center mb-6 sm:mb-8 relative z-10 text-red-900">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-sm border border-red-200/50">
                <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-red-800 animate-pulse" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center font-dancing px-2">Security Checkpoint</h1>
              <p className="font-dancing text-2xl sm:text-3xl mt-1 opacity-80">Verify your identity to proceed.</p>
            </div>

            {/* Question & Options inside Tearing Paper Transition */}
            <div className="relative min-h-[300px] z-10 pl-2 sm:pl-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: -20, rotateZ: 5, originX: 0.5, originY: 0 }}
                  animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                  exit={{ opacity: 0, y: 100, x: -30, rotateZ: -20, filter: "blur(2px)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <h2 className="text-4xl sm:text-5xl font-bold text-red-950 mb-8 leading-snug font-dancing">
                    {question.question}
                  </h2>

                  <div className="space-y-4 font-dancing text-3xl sm:text-4xl">
                    {question.options.map((opt, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = idx === question.correctAnswer;
                      
                      let buttonStyle = "border-red-900/20 hover:bg-red-50 text-red-900 bg-transparent hover:shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:border-red-400/50";
                      
                      if (isSelected) {
                        if (isCorrect) {
                          buttonStyle = "border-green-600/50 bg-green-50 text-green-900 shadow-[0_0_20px_rgba(22,163,74,0.3)] ring-2 ring-green-600/50";
                        } else {
                          buttonStyle = "border-red-600/50 bg-red-50 text-red-900 shadow-[0_0_20px_rgba(220,38,38,0.3)] ring-2 ring-red-600/50";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(idx)}
                          disabled={selectedOption === question.correctAnswer || isAnimating}
                          className={`w-full text-left px-4 py-4 sm:px-6 sm:py-5 rounded-xl border-2 transition-all duration-300 flex justify-between items-center group ${buttonStyle} hover:-translate-y-[2px] active:scale-[0.98]`}
                        >
                          <span className="leading-none">{opt}</span>
                          {isSelected && isCorrect && (
                            <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}><ShieldCheck className="w-8 h-8 text-green-600" /></motion.div>
                          )}
                          {isSelected && !isCorrect && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><AlertCircle className="w-8 h-8 text-red-600" /></motion.div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Messages */}
                  <div className="h-16 mt-6 flex items-center justify-center font-dancing">
                    <AnimatePresence mode="wait">
                      {errorMsg && (
                        <motion.p 
                          key="error"
                          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="text-red-700 font-bold text-3xl sm:text-4xl flex items-center gap-2"
                        >
                          <AlertCircle className="w-6 h-6 text-red-600" /> {errorMsg}
                        </motion.p>
                      )}
                      
                      {successMsg && (
                        <motion.p 
                          key="success"
                          initial={{ opacity: 0, scale: 0, rotate: -5 }}
                          animate={{ opacity: 1, scale: 1.1, rotate: 0 }}
                          className="text-red-600 font-bold text-4xl sm:text-5xl flex items-center gap-2 text-center leading-tight"
                        >
                          <Sparkles className="w-8 h-8 animate-pulse text-yellow-500 flex-shrink-0" /> 
                          {successMsg}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <AnimatePresence>
              {selectedOption === question.correctAnswer && currentStep < quizQuestions.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 relative z-10 pl-2 sm:pl-4"
                >
                  <button
                    onClick={nextQuestion}
                    className="w-full bg-red-800 text-white hover:bg-red-700 py-4 sm:py-5 rounded-xl shadow-md transition-all active:scale-[0.98] text-3xl sm:text-4xl tracking-wide font-dancing"
                  >
                    Next Question
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-center relative p-12 max-w-md w-full font-dancing"
          >
            {/* Wax seal aesthetic for success */}
            <div className="absolute inset-0 bg-[#fdfaf3] rounded-sm shadow-xl border border-[#e5d9b5] z-0"></div>
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-32 h-32 sm:w-40 sm:h-40 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_4px_15px_rgba(153,27,27,0.5)] border-[4px] border-red-900 relative z-10"
            >
              <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-red-100 fill-red-100 animate-pulse" />
            </motion.div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-red-950 mb-4 relative z-10 leading-none">Access Granted</h2>
            <p className="text-red-800/80 font-bold text-3xl sm:text-4xl relative z-10">Entering the timeline...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
