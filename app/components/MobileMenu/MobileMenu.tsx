import { AnimatePresence } from "framer-motion";
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
      {isOpen && (
        <div className="flex justify-center items-center fixed bg-white w-full top-[63px] h-[calc(100dvh-63px)] left-0 p-4 text-gray-600">
          <ul>
            {LINKS.map((link) => {
              return (
                <li
                  key={link.name}
                  className="text-center text-4xl font-bold mt-8"
                >
                  {link.name}
                </li>
              );
            })}
          </ul>
          {/* Add more content here if needed */}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
