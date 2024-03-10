"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

import { IoCloseOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import { cn } from "@/lib/utils";

interface MobileNavProps {
  containerStyles: string;
  linkStyles: string;
  iconStyles: string;
}

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/skills",
    name: "Skills",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/resume",
    name: "Resume",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export const MobileNav = ({
  containerStyles,
  linkStyles,
  iconStyles,
}: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`${containerStyles} ${linkStyles}`}>
      <GiHamburgerMenu
        onClick={() => setIsOpen(!isOpen)}
        size={50}
        className={`${iconStyles} text-white mt-2 mr-2`}
        aria-label="Moile hamburger menu"
      />
      <aside
        className={cn(
          "bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500",
          isOpen ? "right-0" : "-right-full"
        )}
      >
        <div className="h-full">
          {/* nav close btn */}
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 flex items-center justify-center"
          >
            <IoCloseOutline />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 h-full">
            {links.map((link, index) => {
              return (
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  href={link.path}
                  key={index}
                >
                  <div className={`${linkStyles}`}>{link.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </nav>
  );
};
