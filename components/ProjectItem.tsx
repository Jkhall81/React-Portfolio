import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { lusitana } from "@/lib/fonts";
import { roboto } from "@/lib/fonts";

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
  direction,
}: ProjectItemProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center h-full w-full z-10 group">
      <Image src={image} fill alt="project image" className="rounded-lg" />
      <div className="absolute min-w-[400px] hidden group-hover:block">
        <h1
          className={`text-4xl text-center font-extrabold mb-4 ${roboto.className} ${textColor}`}
        >
          {title}
        </h1>
        <div className="flex flex-col justify-center items-center">
          <Button className="mb-4" variant="outline">
            <Link
              target="_blank"
              className={`${lusitana.className} text-xl font-bold`}
              href={link1}
            >
              Visit This Project
            </Link>
          </Button>
          <Button variant="outline">
            <Link
              target="_blank"
              className={`${lusitana.className} text-xl font-bold`}
              href={link2}
            >
              Github Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
