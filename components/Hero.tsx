"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useNavStore, useIntroStore, useFooterStore } from "@/store/store";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { LitButton } from "./ui/LitButton";
import { MagicButton } from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { bitter } from "@/utils/fonts";
import { rufina } from "@/utils/fonts";
import { roboto } from "@/utils/fonts";
import SocialLinks from "./SocialLinks";

export const Hero = () => {
  const setNavVisibleTrue = useNavStore((state) => state.setNavVisibleTrue);
  const setFooterVisibleTrue = useFooterStore(
    (state) => state.setFooterVisibleTrue
  );
  const setIntroMovieFalse = useIntroStore((state) => state.setIntroMovieFalse);
  const setWelcomeScreenFalse = useIntroStore(
    (state) => state.setWelcomeScreenFalse
  );
  const words = "Full-Stack Engineer";

  useEffect(() => {
    setNavVisibleTrue();
    setFooterVisibleTrue();
    setIntroMovieFalse();
    setWelcomeScreenFalse();
  }, [setNavVisibleTrue, setIntroMovieFalse, setWelcomeScreenFalse]);

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
        <div className="flex flex-col min-w-[33vw] justify-center items-center">
          <motion.h1
            variants={fadeIn("top", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="text-white text-7xl pb-6 mt-[300px]"
          >
            <span className={`web-master font-extrabold ${bitter.className}`}>
              Jason Hall
            </span>
          </motion.h1>
          <div className="flex flex-col mx-20 items-center text-white">
            <TextGenerateEffect
              className={`pb-6 text-3xl ${rufina.className}`}
              words={words}
            />
            <p className="text-4xl">
              Make your <span className="text-purple-500 text-4xl">ideas</span>{" "}
              a digital reality.
            </p>

            <motion.p
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className={`prose mt-8 text-white text-2xl ${roboto.className}`}
            >
              In addition to technical expertise, I prioritize clear
              <span className="text-sky-600"> communication</span>, ensure
              projects are completed on schedule, offer reasonable pricing, and
              provide a comprehensive and client-focused web development
              service.
            </motion.p>
            <SocialLinks size={40} classNames="mt-10" />
          </div>
        </div>
        <div className="pt-[20vh] flex flex-col 3xl:flex 3xl:items-start 3xl:min-w-[66vw]">
          <div className="max-w-[60vw] mx-auto">
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <BackgroundGradient className="">
                <Image
                  src="/images/69561.jpg"
                  alt="Kanagawa Wave"
                  height={950}
                  width={1250}
                  className="rounded-3xl ms-[1/2px]"
                />
              </BackgroundGradient>
            </motion.div>

            <div className="flex justify-center pt-[50px]">
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
            </div>
          </div>
          <div className="flex flex-col items-center 3xl:mx-[3vw] 3xl:w-[15vw] h-full"></div>
        </div>
      </div>
    </main>
  );
};
