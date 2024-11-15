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

  console.log(activeHash);
  return (
    <nav className="fixed lg:top-[1rem] left-1/2 transform -translate-x-1/2 backdrop-blur-lg border-gray-50/60 backdrop-contrast-120 border shadow-lg lg:rounded-full w-full lg:container z-10 !px-0">
      <div className="container py-4">
        <div className="flex text-lg justify-center items-center">
          <div className="flex flex-shrink-0 gap-2 items-center mr-auto">
            <img src="/logo.webp" height={30} width={30} alt="Logo" />
            <Link to={"/"}>
              <motion.h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-700 font-bold">
                maalik.dev
              </motion.h1>
            </Link>
          </div>
          <div className="visible md:hidden flex justify-center items-center">
            <MobileMenu activeSection={activeHash} links={links} />
          </div>
          <div className="hidden md:flex gap-6">
            {links.map((link) => {
              const isActive = link.to === activeHash;
              console.log(isActive);
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
                      "transition-colors ease-out font-bold",
                      isActive ? "!text-blue-600" : "text-gray-600"
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
