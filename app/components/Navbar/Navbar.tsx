import { Link, NavLink, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import resolvedConfig from "~/utils/tailwindConfig";

export type LinkType = {
  to: string;
  name: string;
};
export type NavBarType = {
  links: LinkType[];
};

const Navbar = ({ links }: NavBarType) => {
  const { hash } = useLocation();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(hash);
  }, [hash]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg backdrop-saturate-150 border-gray-200 border-b z-10">
      <div className="container py-4">
        <div className="flex text-lg justify-center items-center">
          <div className="flex flex-shrink-0 gap-2 items-center mr-auto">
            <img src="/logo.webp" height={30} width={30} alt="Logo" />
            <Link to={"/"}>
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-700 font-bold">
                maalik.dev
              </h1>
            </Link>
          </div>
          <div className="visible md:hidden flex justify-center items-center">
            <MobileMenu activeSection={activeHash} links={links} />
          </div>
          <div className="hidden md:flex gap-6">
            {links.map((link) => {
              const isActive = link.to === activeHash;
              return (
                <NavLink
                  key={link.to}
                  to={{ hash: link.to, pathname: "/" }}
                  className="relative transition-colors ease-out"
                >
                  <motion.span
                    whileHover={{
                      y: 2,
                      color: resolvedConfig.theme.colors.blue[600],
                    }}
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
