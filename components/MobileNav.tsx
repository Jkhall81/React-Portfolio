"use client";

import { useState } from "react";
import { useNavStore } from "@/store/store";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navVisible = useNavStore((state) => state.navVisible);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
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
        "z-[40] h-[90px] flex xl:hidden w-full top-0 absolute bg-transparent",
        `${navVisible ? "" : "hidden"}`
      )}
    >
      <div className="flex items-center w-full p-4 justify-end">
        <GiHamburgerMenu
          onClick={handleClick}
          size={75}
          color="purple"
          className="hover:cursor-pointer"
        />
      </div>
      <aside
        className={cn(
          "fixed z-[40] bottom-0 top-0 w-full h-full p-10 transition-all duration-[1500ms]",
          isOpen ? "right-0" : "-right-[200%]"
        )}
      >
        <Image
          src="/images/skills.jpg"
          alt="japanese landscape"
          fill
          className="object-cover"
        />
        <div className="absolute flex flex-col z-[50] w-full h-full">
          <div className="w-full flex items-center justify-end">
            <IoClose
              onClick={handleClick}
              size={75}
              color="purple"
              className="mr-[45px] hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            {navLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  onClick={handleClick}
                  className="py-4"
                  href={link.href}
                >
                  <span className="text-4xl font-semibold web-master">
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </nav>
  );
};
