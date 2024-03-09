"use client";

import Link from "next/link";
import { anton } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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

export const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex justify-between top-0 left-0 right-0 fixed h-6 w-full border-none text-white p-6 capitalize z-50 text-xl items-center xl:max-w-[700px] sm:max-w-[580px]">
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
