import { useState } from "react";
import Navbar from "./Navbar";
import { cn } from "../utils/utils";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    {
      name: "About",
      url: "#about-me",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Education",
      url: "#education",
    },
  ];

  return (
    <>
      <header className="item-center container fixed top-0 z-20 flex w-full justify-between bg-slate-800  px-4 py-3  font-mono text-white">
        <Navbar links={links} />
        <div className="flex w-full items-center justify-end md:hidden">
          <button
            className="inline-flex flex-col gap-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={cn(
                isMenuOpen && "translate-y-1.5 -rotate-45 delay-200",
                "h-[2px] w-5 transform  bg-white transition duration-300 ease-in-out",
              )}
            ></span>
            <span
              className={cn(
                isMenuOpen ? "w-0" : "w-5",
                "h-[2px] transform bg-white transition-all duration-200 ease-in-out",
              )}
            ></span>
            <span
              className={cn(
                isMenuOpen && "-translate-y-1.5 rotate-45 delay-200",
                "h-[2px] w-5 transform bg-white transition duration-300 ease-in-out",
              )}
            ></span>
          </button>
        </div>
      </header>
      <MobileMenu isMenuOpen={isMenuOpen} links={links} />
    </>
  );
}

export default Header;
