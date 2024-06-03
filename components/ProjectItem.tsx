"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { lusitana } from "@/utils/fonts";
import { roboto } from "@/utils/fonts";
import { LitButton } from "./ui/LitButton";
import { MagicButton } from "./ui/MagicButton";

interface ProjectItemProps {
  image: string;
  link1: string;
  link2: string;
  title: string;
  textColor: string;
  direction: string;
}

export const ProjectItem = ({
  image,
  link1,
  link2,
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
        className="rounded-lg object-cover"
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
          <Link target="_blank" className={`mb-4 text-xl`} href={link1}>
            <LitButton title="Visit This Project" classNames="" />
          </Link>

          <Link
            target="_blank"
            className={`${lusitana.className} text-xl font-bold`}
            href={link2}
          >
            <MagicButton title="Github Code" classNames="w-[190px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
