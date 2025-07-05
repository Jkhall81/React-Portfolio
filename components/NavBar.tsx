"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

export const NavBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about-me" },
    { name: "My Tech Stack", href: "/my-tech-stack" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact Me", href: "/contact-me" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur bg-black/70 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <Link
          href="/"
          className="text-xl font-bold text-pink-500 tracking-wide"
        >
          Jason Hall
        </Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg transition-all duration-200 hover:text-purple-400 hover:scale-105",
                pathname === link.href ? "text-purple-500 font-semibold" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
