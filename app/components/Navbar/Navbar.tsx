import { Link, NavLink, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import MobileMenu from "../MobileMenu/MobileMenu";

export const LINKS = [
  { to: "#projects", name: "Projects" },
  { to: "#skills", name: "Skills" },
  { to: "#testimonials", name: "Testimonials" },
  { to: "#contact", name: "Contact" },
];

const Navbar = () => {
  const { hash } = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg backdrop-saturate-150 border-gray-200 border-b z-[1000]">
      <div className="container py-4">
        <div className="flex text-lg">
          <div className="flex flex-shrink-0 gap-2 items-center mr-auto">
            <img src="/logo.webp" height={30} width={30} alt="Logo" />
            <Link to={"/"}>
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-700 font-bold">
                maalik.dev
              </h1>
            </Link>
          </div>
          <div className="visible md:hidden">
            <MobileMenu activeSection={hash} />
          </div>
          <div className="hidden md:flex gap-6">
            {LINKS.map((link) => {
              const isActive = link.to === hash;
              return (
                <NavLink
                  key={link.to}
                  to={{ hash: link.to, pathname: "/" }}
                  className="relative transition-colors ease-out"
                >
                  <motion.span
                    whileHover={{ y: 2 }}
                    className={twMerge(
                      "transition-colors ease-out",
                      isActive ? "text-blue-600" : "text-gray-700"
                    )}
                  >
                    {link.name}
                  </motion.span>
                  <motion.div
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-600 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{
                      type: "tween",
                      ease: "easeOut",
                      duration: 0.5,
                    }}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
