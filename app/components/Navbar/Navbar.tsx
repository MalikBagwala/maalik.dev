import { Link, NavLink, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import MobileMenu from "../MobileMenu/MobileMenu";

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
    <nav
      style={{
        backdropFilter: "saturate(180%) blur(20px)",
        background: "rgba(22, 22, 23, .8)",
        color: "#fffc",
      }}
      className="fixed lg:top-[1rem] left-1/2 transform -translate-x-1/2 lg:rounded-full lg:min-w-sm z-10 !px-0 text-sm w-full lg:w-fit"
    >
      <div className="container px-4 p-2 lg:px-2">
        <div className="flex justify-center items-center gap-x-16">
          <div className="flex flex-shrink-0 gap-2 items-center mr-auto">
            <img src="/logo.webp" height={24} width={24} alt="Logo" />
            <Link to={"/"}>
              <motion.h1 className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-light to-primary-light font-bold">
                maalik.dev
              </motion.h1>
            </Link>
          </div>
          <div className="visible md:hidden flex justify-center items-center">
            <MobileMenu activeSection={activeHash} links={links} />
          </div>
          <div className="hidden md:flex gap-6 mr-2">
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
                    }}
                    className={twMerge(
                      "transition-colors ease-out",
                      isActive && "text-primary-light"
                    )}
                  >
                    {link.name}
                  </motion.span>
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
