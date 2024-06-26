"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";
import Image from "next/image";
import Link from "next/link";
import { bitter } from "@/utils/fonts";
import { roboto } from "@/utils/fonts";
import SocialLinks from "./SocialLinks";

export const Hero = () => {
  usePageSetup();

  return (
    <main className="h-full min-h-screen">
      <div className="h-full w-full">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[70vw] top-10 left-[10vw]"
          fill="purple"
        />
        <Spotlight
          className="left-[350px] top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
      <div className="3xl:flex h-full">
        <div className="pt-[250px]">
          <div className="flex flex-col min-w-[33vw] justify-center items-center">
            <h1 className="text-white text-7xl pb-6 mt-[300px]">
              <span className={`web-master font-extrabold ${bitter.className}`}>
                Jason Hall
              </span>
            </h1>
            <h2 className="text-white text-5xl pt-[30px]">
              Full-Stack Engineer
            </h2>
            <div className="flex flex-col w-full mx-20 items-center text-white">
              <p className="text-4xl">
                <span className="text-purple-500 text-4xl"></span>{" "}
              </p>

              <p
                className={`prose mt-8 text-white text-2xl ${roboto.className}`}
              ></p>

              <SocialLinks size={40} classNames="mt-10" />
            </div>
          </div>
        </div>
        <div className="pt-[20vh] flex flex-col 3xl:flex 3xl:items-start 3xl:min-w-[66vw]">
          <div className="2xl:max-w-[51vw] 4xl:max-w-[60vw] min-h-[78vh] mx-auto pb-[200px]">
            <motion.div
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <BackgroundGradient>
                <Link
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa"
                >
                  <Image
                    src="/images/69561.jpg"
                    alt="Kanagawa Wave"
                    height={950}
                    width={1250}
                    className="rounded-3xl ms-[1/2px]"
                  />
                </Link>
              </BackgroundGradient>
            </motion.div>
            {/* <div className="flex justify-center pt-[80px]">
              <Link href="/my-tech-stack">
                <LitButton
                  title="Learn More"
                  classNames="w=[200px] 2xl:w-[10vw] text-lg"
                />
              </Link>
              <Link href="/contact-me">
                <MagicButton
                  title="Contact Me"
                  classNames="ml-8 w-[200px] xl:w-[10vw] text-lg"
                />
              </Link>
            </div> */}
          </div>
          <div className="flex flex-col items-center 3xl:mx-[3vw] 3xl:w-[15vw]"></div>
        </div>
      </div>
    </main>
  );
};
