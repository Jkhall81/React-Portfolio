"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { roboto } from "@/utils/fonts";
import { bitter } from "@/utils/fonts";
import Image from "next/image";
import { LitButton } from "@/components/ui/LitButton";
import Link from "next/link";
import { HeroHighlight } from "@/components/ui/HeroHighlight";

export const AboutMeUseClient = () => {
  usePageSetup();
  return (
    <HeroHighlight containerClassName="h-full">
      <div className="flex flex-col w-full">
        <div>
          <Image
            src="/images/banner.png"
            alt="image of website creator"
            height={700}
            width={1500}
            className="ml-[8vw] mt-[12vh]"
          />
        </div>
        <div className="flex flex-col items-center mt-12">
          <h1
            className={`text-white font-bold text-7xl mb-20 mt-20 ${bitter.className}`}
          >
            About Me
          </h1>
          <div className="2xl:flex">
            <div className="2xl:w-[43vw] mb-10 mx-auto flex justify-center">
              {/* Image Container */}
              <Image
                src="/images/masterSchool.png"
                alt="bootcamp certificate"
                height={650}
                width={650}
                className="rounded-3xl z-[40]"
              />
            </div>
            {/* Text Container 1 */}
            <div className="2xl:w-[56vw] flex items-center justify-center">
              <p
                className={`prose text-white px-4 text-3xl ${roboto.className}`}
              >
                I used to teach English at universities, two, in mainland{" "}
                <span className="text-indigo-600">China</span> and worked in
                construction. Now I am transitioning into the tech industry with
                skills gained from a Software Engineering Bootcamp and
                self-study.
              </p>
            </div>
          </div>
          {/* Text Container 2 */}
          <div>
            <p
              className={`text-white prose text-3xl px-4 mt-20 mb-20 ${roboto.className}`}
            >
              Currently, I am employed at an{" "}
              <span className="text-blue-600">Apple</span> data center as a
              Logistics Technician, working with hardware and wiping hard
              drives. Alongside this role, I also do freelance web development
              work, successfully delivering various projects and showcasing my
              technical prowess and problem-solving skills.
            </p>
          </div>
          <div className="2xl:flex">
            <div
              className={`text-white prose px-4 text-3xl 2xl:w-[66vw] mt-8 mb-20 flex flex-col ${roboto.className}`}
            >
              <p>
                I have also done open source work on the{" "}
                <span className="text-blue-400">Django</span> project,
                showcasing my commitment to continuous learning and improvement.
                I am eager to put my unique skill set to use solving real-world
                problems and building innovative solutions.
              </p>
            </div>
            <div className="2xl:w-[33vw] text-white flex flex-col items-center mt-8">
              <h2 className={`text-6xl font-bold mb-10 ${bitter.className}`}>
                My <span className="text-purple-500">Tech</span>{" "}
                <span className="text-pink-500">Stack</span>
              </h2>
              <p className="text-3xl pl-[2vw]">
                Learn more about the technologies I work with.
              </p>
              <Link href="/my-tech-stack" className="mt-14 mb-20">
                <LitButton title="Learn More" classNames="w-[300px] text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};
