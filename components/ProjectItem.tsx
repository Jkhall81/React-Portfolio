"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { roboto } from "@/utils/fonts";
import { LitButton } from "./ui/LitButton";

interface ProjectItemProps {
  image: string;
  href: string;
  title: string;
  textColor: string;
  direction: string;
}

export const ProjectItem = ({
  image,
  href,
  title,
  textColor,
}: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log("isHovered", isHovered);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col justify-center items-center h-full w-full"
    >
      <Image
        src={image}
        fill
        alt="project image"
        className="rounded-2xl object-cover"
      />
      <div
        className={`absolute min-w-[200px] sm:min-w-[400px] ${
          isHovered ? "block" : "hidden"
        }`}
      >
        <h1
          className={`text-4xl text-center font-extrabold mb-4 ${roboto.className} ${textColor}`}
        >
          {title}
        </h1>
        <div className="flex flex-col justify-center items-center ">
          <Link className={`mb-4 text-xl`} href={href}>
            <LitButton title="Take the tour" classNames="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
