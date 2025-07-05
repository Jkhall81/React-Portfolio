"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about-me" },
    { name: "My Tech Stack", href: "/my-tech-stack" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact Me", href: "/contact-me" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Nav Toggle Button */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-end h-[70px] px-4 bg-black/70 backdrop-blur border-b border-neutral-800">
        <GiHamburgerMenu
          onClick={toggleMenu}
          size={32}
          className={cn(
            "text-purple-400 hover:cursor-pointer transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-90" : "rotate-0"
          )}
        />
      </nav>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          {/* Glass Card with Gradient */}
          <div className="relative w-[90%] max-w-md rounded-2xl border border-white/20 p-10 shadow-2xl bg-gradient-to-br from-[#5f0a87]/60 via-[#a4508b]/40 to-[#e0c3fc]/30 backdrop-blur-xl">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-purple-300 hover:text-purple-100"
            >
              <IoClose size={30} />
            </button>

            {/* Nav Links */}
            <nav className="flex flex-col items-center space-y-6 mt-6 text-white text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className={cn(
                    "text-2xl font-semibold transition duration-300 transform hover:scale-110 hover:text-pink-400 hover:drop-shadow-[0_0_8px_#e879f9]",
                    pathname === link.href ? "text-purple-400" : ""
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
