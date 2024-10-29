import { useState } from "react";
import CloseIcon from "~/icons/CloseIcon";
import Hamburger from "~/icons/Hamburger";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {isMenuOpen ? (
        <CloseIcon role="button" onClick={() => setIsMenuOpen(false)} />
      ) : (
        <Hamburger role="button" onClick={() => setIsMenuOpen(true)} />
      )}
    </div>
  );
};

export default MobileMenu;
