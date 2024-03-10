"use client";

import Link from "next/link";
import { anton } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarProps {
  containerStyles: string;
  linkStyles: string;
}

const navlinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "skills",
    path: "/skills",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const Navbar = ({ containerStyles, linkStyles }: NavbarProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className={`${containerStyles} ${linkStyles}`}>
      {navlinks.map((item, index) => {
        return (
          <Link
            className={cn(
              `transition-transform transform font-bold hover:scale-110 ${anton.className}`,
              pathname === item.path ? "text-[#0a66c2]" : ""
            )}
            key={index}
            href={item.path}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};
