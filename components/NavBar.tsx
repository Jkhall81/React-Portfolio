"use client";

import Link from "next/link";
import { lusitana } from "@/utils/fonts";
import { cn } from "@/utils/cn";
import { useNavStore } from "@/store/store";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const navVisible = useNavStore((state) => state.navVisible);
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About Me", href: "/about-me" },
    { name: "My Tech Stack", href: "/my-tech-stack" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact Me", href: "/contact-me" },
  ];
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "absolute z-[40] top-0 h-[70px] hidden bg-transparent w-full xl:flex",
        `${navVisible ? "" : "hidden"}`
      )}
    >
      <div className="w-[33vw]"></div>
      <div
        className={`w-[66vw] text-white text-xl font-bold items-center flex justify-evenly ${lusitana.className}`}
      >
        {navLinks.map((link, index) => (
          <Link
            className={cn(
              "hover:text-purple-600 text-2xl hover:scale-110",
              pathname === link.href ? "text-purple-600" : ""
            )}
            href={link.href}
            key={index}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
