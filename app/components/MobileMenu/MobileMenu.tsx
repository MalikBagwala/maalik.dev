import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CloseIcon from "~/icons/CloseIcon";
import Hamburger from "~/icons/Hamburger";

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
        <div className="flex flex-grow  fixed bg-white w-full top-[62px] left-0 h-full p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos!
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
