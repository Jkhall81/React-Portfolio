import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Image from "next/image";

interface SkeletonProps {
  src: string;
  imageClassNames: string;
}

export const TwoColumnGrid = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            <Skeleton src={item.src} imageClassNames={item.imageClassNames} />
          }
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
};
const Skeleton = ({ src, imageClassNames }: SkeletonProps) => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent dark:border-white/[0.2]">
    <Image
      src={src}
      alt="abstract image of face"
      fill
      className={imageClassNames}
    />
  </div>
);
const items = [
  {
    title: "TypeScript",
    description: "JavaScript's annoying little cousin.",
    header: null,
    className: "md:col-span-2",
    src: "/images/face.png",
    imageClassNames: "px-[100px] 4xl:px-[150px] py-2",
  },
  {
    title: "JavaScript",
    description: "Make it with Node.",
    header: null,
    className: "md:col-span-1",
    src: "/images/face2.png",
    imageClassNames: "p-2",
  },
  {
    title: "Python",
    description:
      "The backend, automation, and the murky realm of Data Science.",
    header: null,
    className: "md:col-span-1",
    src: "/images/face3.png",
    imageClassNames: "p-2 px-[40px] 4xl:px-[70px]",
  },
  {
    title: "SQL",
    description: "The most used query language in the history of ever.",
    header: null,
    className: "md:col-span-2",
    src: "/images/face4.png",
    imageClassNames: "px-[120px] 4xl:px-[180px] py-2",
  },
];
