import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["Fullstack Engineer", "ex-CTO", "Designgineer"];

type RotateWordsType = {
  words?: string[];
  delay?: number;
};

const scrambleText = (word: string, progress: number): string => {
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  return word
    .split("")
    .map((char, idx) => {
      if (progress > idx / word.length) return char; // Resolve the character
      return chars[Math.floor(Math.random() * chars.length)];
    })
    .join("");
};

const RotateWords = ({ words = WORDS, delay = 2500 }: RotateWordsType) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [scrambledText, setScrambledText] = useState(words[0]);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.1;
      setScrambledText(scrambleText(words[currentWordIndex], progress));

      if (progress >= 1) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, delay);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentWordIndex, words, delay]);

  return (
    <motion.h1
      key={currentWordIndex}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ mass: 1, type: "spring" }}
      style={{ fontFamily: "monospace" }}
    >
      {scrambledText}
    </motion.h1>
  );
};

export default RotateWords;
