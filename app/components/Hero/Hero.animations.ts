import { Variants } from "framer-motion";

// Container variants for staggered children animations
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Child variants for text elements
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 1,
      stiffness: 90,
      damping: 15,
    },
  },
};

// Waving hand animation
export const handVariants: Variants = {
  wave: {
    rotate: [0, 45, 0],
    transition: {
      duration: 1.2,
      repeat: 0,
    },
  },
};

// Image animation
export const imageVariants: Variants = {
  hidden: { rotate: 0, scale: 0 },
  show: {
    scale: 1,
    rotate: 360,
    transition: {
      type: "spring",
      mass: 1,
      stiffness: 90,
      damping: 15,
    },
  },
};
