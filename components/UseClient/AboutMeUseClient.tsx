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
                className={`prose text-white px-4 text-4xl ${roboto.className}`}
              >
                I used to teach English in mainland{" "}
                <span className="text-indigo-600">China</span> and have worked
                construction. Now I am transitioning into the tech industry with
                skills gained from a Software Engineering Bootcamp, freelance
                work, and self-study. Currently, I am employed at an Apple data
                center as a Logistics Technician, working with hardware, wiping
                hard drives, and learning a great deal about how data centers
                operate.
              </p>
            </div>
          </div>
          {/* Text Container 2 */}
          <div className="flex flex-col items-center px-4 4xl:px-20">
            <p
              className={`text-white prose text-4xl mt-20 mb-10 ${roboto.className}`}
            >
              In addition to my work and studies, I dedicate a significant
              portion of my time to helping others in a voluntary capacity. I
              serve as a sober living house manager, a role that involves living
              and working with eleven men who are transitioning from prison,
              overcoming substance abuse, or managing mental health challenges.
            </p>
            <p
              className={`text-white prose text-4xl mb-20 ${roboto.className}`}
            >
              In this role, I provide daily support and guidance to help
              residents navigate their personal and legal challenges. I also
              coordinate with parole and probation officers, as well as case
              managers, to ensure compliance with their recovery plans and legal
              obligations. Furthermore, I create and maintain a structured,
              supportive environment that fosters accountability and personal
              growth. This work is deeply rewarding, as I get to witness
              firsthand the positive transformations in these men's lives. It
              reinforces my belief in the power of community and support in
              overcoming significant life obstacles.
            </p>
          </div>
          <div className="2xl:flex">
            <div
              className={`text-white prose px-4 text-4xl 2xl:w-[66vw] mt-8 mb-20 flex flex-col ${roboto.className}`}
            >
              <p>
                I have also done open source work on the{" "}
                <span className="text-blue-400">Django</span> project,
                showcasing my commitment to continuous learning and improvement.
                Through this work, I have learned a lot from more experienced
                Django developers about Django's architecture, documentation,
                linting, and testing. I am eager to put my unique skill set to
                use solving real-world problems and building innovative
                solutions.
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
