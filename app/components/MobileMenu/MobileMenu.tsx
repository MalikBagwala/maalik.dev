import { useSpring } from "@react-spring/web";
import { useState } from "react";
import CloseIcon from "~/icons/CloseIcon";
import Hamburger from "~/icons/Hamburger";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create spring animation for rotation and opacity
  const [{ rotate, opacity }] = useSpring(
    () => ({
      rotate: isMenuOpen ? 180 : 0,
      opacity: isMenuOpen ? 1 : 0,
      config: {
        tension: 300,
        friction: 20,
      },
    }),
    [isMenuOpen]
  );

  // Create inverse opacity spring for hamburger icon
  const [{ opacity: hamburgerOpacity }] = useSpring(
    () => ({
      opacity: isMenuOpen ? 0 : 1,
      config: {
        tension: 300,
        friction: 20,
      },
    }),
    [isMenuOpen]
  );

  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0">
        <CloseIcon
          onClick={() => setIsMenuOpen(false)}
          style={{
            rotate,
            opacity,
            transform: rotate.to((r) => `rotate(${r}deg)`),
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="absolute inset-0">
        <Hamburger
          onClick={() => setIsMenuOpen(true)}
          style={{
            rotate: rotate.to((r) => `rotate(-${r}deg)`),
            opacity: hamburgerOpacity,
          }}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileMenu;
