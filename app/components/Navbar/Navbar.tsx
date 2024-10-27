import { Link, NavLink, useLocation } from "@remix-run/react";
import { twMerge } from "tailwind-merge";
const LINKS = [
  {
    to: "#projects",
    name: "Projects",
  },
  {
    to: "#testimonials",
    name: "Testimonials",
  },
  {
    to: "#skills",
    name: "Skills",
  },
  {
    to: "#contact",
    name: "Contact",
  },
];
const Navbar = () => {
  const { hash } = useLocation();
  console.log(hash);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg backdrop-saturate-150 border-gray-200 border-b z-50">
      <div className="container py-6">
        <div className="flex text-xl">
          <div className="flex flex-shrink-0 gap-2 items-center mr-auto">
            <img src="/logo.webp" height={30} width={30} alt="Logo" />
            <Link to={"/"}>
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-700 font-bold">
                maalik.dev
              </h1>
            </Link>
          </div>
          <div className="flex gap-6">
            {LINKS.map((link) => {
              const isActive = link.to === hash;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={twMerge(
                    "hover:text-blue-600 transition-colors ease-out",
                    isActive && "text-blue-600"
                  )}
                >
                  {link.name}
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
