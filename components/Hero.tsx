"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useNavStore } from "@/store/store";
import { useIntroStore } from "@/store/store";
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
  const setIntroMovieFalse = useIntroStore((state) => state.setIntroMovieFalse);
  const setWelcomeScreenFalse = useIntroStore(
    (state) => state.setWelcomeScreenFalse
  );
  const words = "Full-Stack Engineer";

  useEffect(() => {
    setNavVisibleTrue();
    setIntroMovieFalse();
    setWelcomeScreenFalse();
  }, [setNavVisibleTrue, setIntroMovieFalse, setWelcomeScreenFalse]);

  return (
    <main className="h-full min-h-screen">
      <div className="h-full">
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
        <div className="flex flex-col min-w-[33vw] items-center">
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
              variants={fadeIn("up", 0.6)}
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
        <div className="pt-[20vh] 3xl:flex  3xl:items-start 3xl:min-w-[66vw]">
          <div className="mx-auto max-w-[950px]">
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
                  width={950}
                  className="rounded-3xl ms-1"
                />
              </BackgroundGradient>
            </motion.div>
            <motion.p
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className={`text-white prose mx-auto text-2xl mt-14 ${roboto.className}`}
            >
              Comprehensive Web Development Services: I specialize in building,
              designing, and deploying high-quality web applications{" "}
              <span className="text-sky-400"> tailored</span> to meet your
              business needs. From initial concept to final deployment, I ensure
              a seamless process that brings your ideas to life.
            </motion.p>
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="flex justify-center mt-10"
            >
              <Link href="/my-tech-stack">
                <LitButton title="Learn More" classNames="w-[10vw] text-lg" />
              </Link>
              <Link href="/contact-me">
                <MagicButton
                  title="Contact Me"
                  classNames="ml-8 w-[10vw] text-lg"
                />
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col items-center 3xl:mx-[3vw] 3xl:w-[15vw] h-full">
            <div className="3xl:w-[17vw] pb-20 w-[950px]">
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                className={`prose text-2xl mx-auto 3xl:mx-0 pt-[4vh] text-white ${roboto.className}`}
              >
                With expertise in delivering comprehensive web solutions, I can
                create user interfaces, manage databases, perform thorough
                testing, handle deployment, and develop APIs, ensuring a
                seamless and <span className="text-violet-600"> robust</span>{" "}
                web development process from start to finish.
              </motion.p>
              <Image
                src="/images/wires.png"
                alt="thin colored lines"
                height={650}
                width={650}
                className="hidden 3xl:flex absolute pl-[2vw] mt-[4vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
