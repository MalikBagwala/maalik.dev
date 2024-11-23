import { Link } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { NavBarType } from "../Navbar/Navbar";

const MobileMenu = ({
  activeSection,
  links,
}: { activeSection: string | null } & NavBarType) => {
  const [isOpen, setOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false); // State to control link animation

  const toggleOpen = () => {
    setOpen((prev) => {
      if (!prev) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
      return !prev;
    });
    // Reset showLinks when closing the menu
    setShowLinks(false);
  };

  return (
    <>
      <HamburgerButton isOpen={isOpen} setOpen={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex justify-center items-center fixed bg-white w-full top-[44px] h-[calc(100dvh-44px)] left-0 p-4 text-neutral-600 z-10"
            initial={{ opacity: 0, x: "100vw" }} // Start with opacity 0 and slide in from the right
            animate={{ opacity: 1, x: 0 }} // Fade in and slide down
            exit={{ opacity: 0, x: "100vw" }} // Fade out and slide back to the right
            transition={{ duration: 0.6 }} // Transition duration
            onAnimationComplete={() => {
              // Set showLinks to true after the menu animation completes
              setShowLinks(true);
            }}
          >
            <motion.ul initial="hidden" animate={showLinks ? "show" : "hidden"}>
              {links.map((link, index) => {
                const isActive = activeSection === link.to;
                return (
                  <Link
                    to={{ hash: link.to }}
                    key={link.name}
                    onClick={toggleOpen}
                  >
                    <motion.li
                      className={twMerge(
                        "text-center text-4xl font-bold mt-8",
                        isActive && "text-primary"
                      )}
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
                  </Link>
                );
              })}
            </motion.ul>
            {/* Add more content here if needed */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
