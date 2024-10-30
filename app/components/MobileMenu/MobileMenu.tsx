import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CloseIcon from "~/icons/CloseIcon";
import Hamburger from "~/icons/Hamburger";
import { LINKS } from "../Navbar/Navbar";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => {
      if (!prev) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
      return !prev;
    });
  };

  return (
    <div>
      <AnimatePresence>
        {isOpen ? (
          <CloseIcon
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            exit={{ rotate: 0 }}
            onClick={toggleOpen}
          />
        ) : (
          <Hamburger
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            exit={{ rotate: 0 }}
            onClick={toggleOpen}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex justify-center items-center fixed bg-white w-full top-[63px] h-[calc(100dvh-63px)] left-0 p-4 text-gray-600 z-10"
            initial={{ opacity: 0, x: "100vw" }} // Start with opacity 0 and slide up
            animate={{ opacity: 1, x: 0 }} // Fade in and slide down
            exit={{ opacity: 0, x: "100vw" }} // Fade out and slide up
            transition={{ duration: 0.6 }} // Transition duration
          >
            <motion.ul initial="hidden" animate="show">
              {LINKS.map((link, index) => (
                <motion.li
                  key={link.name}
                  className="text-center text-4xl font-bold mt-8"
                  variants={{
                    hidden: { opacity: 0, y: 20 }, // Start off-screen with opacity 0
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 }, // Stagger effect
                    },
                  }}
                >
                  {link.name}
                </motion.li>
              ))}
            </motion.ul>
            {/* Add more content here if needed */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
