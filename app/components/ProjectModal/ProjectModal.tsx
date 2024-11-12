import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectType } from "../Projects";

type SpringModalType = {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType;
};
const SpringModal = ({ isOpen, onClose, project }: SpringModalType) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return function cleanup() {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="backdrop-blur p-8 fixed inset-0 z-50 cursor-pointer overflow-hidden"
        >
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              rotate: "12.5deg",
              translateX: "-50%",
              translateY: 0,
            }}
            animate={{ scale: 1, opacity: 1, rotate: "0deg", translateY: -40 }}
            exit={{ scale: 0, opacity: 0, rotate: "0deg", translateY: -40 }}
            transition={{ duration: 0.28 }}
            onClick={(e) => e.stopPropagation()}
            className={twMerge(
              // Layout & Positioning
              "absolute top-12 lg:top-24 bottom-0 left-1/2 h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-7rem)] overflow-y-auto",

              // Sizing
              "w-full max-w-full lg:max-w-4xl",

              // Styling
              "bg-white text-gray-600 border border-gray-300 p-6 rounded-lg shadow-xl cursor-default"
            )}
          >
            <header className="flex">{project.title}</header>
            <footer></footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
