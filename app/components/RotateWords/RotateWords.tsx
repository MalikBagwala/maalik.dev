import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const WORDS = ["Fullstack Engineer", "ex-CTO", "Designgineer"];
type RotateWordsType = {
  words?: string[];
  delay?: number;
};
const RotateWords = ({ words = WORDS, delay = 2500 }: RotateWordsType) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, delay);

    return function cleanup() {
      clearInterval(interval);
    };
  }, []);
  const currentWord = words[currentWordIndex];
  return (

      <AnimatePresence mode="wait">
        <motion.h1
          key={currentWord}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ mass: 1, type: "spring" }}
        >
          {currentWord}
        </motion.h1>
      </AnimatePresence>
    
  );
};

export default RotateWords;
