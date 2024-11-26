import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import MoonIcon from "~/icons/MoonIcon";
import SunIcon from "~/icons/SunIcon";

const DarkToggle = ({ className }: { className?: string }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggle() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <motion.button
      onClick={toggle}
      className={twMerge("relative", className)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <SunIcon className="size-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <MoonIcon className="size-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DarkToggle;
