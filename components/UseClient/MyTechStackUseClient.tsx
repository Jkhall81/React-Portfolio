"use client";

import { useIntroStore, useNavStore } from "@/store/store";
import { useEffect } from "react";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { bitter } from "@/utils/fonts";
import { roboto } from "@/utils/fonts";
import Image from "next/image";
import { TwoColumnGrid } from "@/components/TwoColumnGrid";
import { FrontEndIcons } from "@/components/FrontEndIcons";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";
import { BackEndIcons } from "@/components/BackEndIcons";

export const MyTechStackUseClient = () => {
  const setNavVisibleTrue = useNavStore((state) => state.setNavVisibleTrue);
  const setWelcomeScreenFalse = useIntroStore(
    (state) => state.setWelcomeScreenFalse
  );
  const setIntroMovieFalse = useIntroStore((state) => state.setIntroMovieFalse);

  useEffect(() => {
    setNavVisibleTrue();
    setWelcomeScreenFalse();
    setIntroMovieFalse();
  }, [setNavVisibleTrue, setWelcomeScreenFalse, setIntroMovieFalse]);
  return (
    <HeroHighlight containerClassName="h-full">
      <div className="min-h-screen w-full flex flex-col items-center">
        <div className="pt-[100px] mb-20">
          <h1
            className={`text-white mt-20 mb-20 font-semibold text-6xl ${bitter.className}`}
          >
            My <span className="web-master">Technical</span> Arsenal
          </h1>
        </div>
        <div className="3xl:flex">
          <div className="flex w-full 2xl:w-[43vw] pr-[10px] items-center">
            {/* 1 Image */}

            <div className="mx-8 flex items-center">
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <Image
                  src="/images/programming.png"
                  alt="image of code"
                  height={450}
                  width={450}
                  className="rounded-3xl rounded-tl-[80px]"
                />
              </motion.div>
            </div>
            {/* 2 Images */}

            <div className="flex flex-col">
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <Image
                  src="/images/programming2.png"
                  alt="image of code"
                  height={450}
                  width={450}
                  className="mb-8 rounded-3xl rounded-tr-[80px]"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <Image
                  src="/images/programming3.png"
                  alt="image of code"
                  height={450}
                  width={450}
                  className="rounded-3xl rounded-br-[80px]"
                />
              </motion.div>
            </div>
          </div>

          {/* Bento Boxie Box */}
          <div className="w-full 2xl:w-[36vw] xl:ml-[5vw] mx-auto flex flex-col items-center">
            <h2 className="text-white text-5xl mt-10 font-semibold">
              Languages
            </h2>
            <div
              className={`text-white text-4xl pb-4 mt-20 space-y-4 ${roboto.className}`}
            >
              <TwoColumnGrid />
            </div>
          </div>
        </div>

        {/* Front End */}
        <div className="flex text-white">
          <div className="w-full flex flex-col items-center justify-center">
            <h2
              className={`text-5xl font-semibold mt-20 mb-20 pt-10 ${bitter.className}`}
            >
              <span className="text-pink-500">Front</span>{" "}
              <span className="text-purple-900">End</span>
            </h2>
            <FrontEndIcons />
          </div>
        </div>
        {/* Back End */}
        <div className="text-white flex mb-20">
          <div className="w-full flex flex-col items-center justify-center">
            <h2
              className={`text-5xl font-semibold mt-20 mb-20 pt-10 ${bitter.className}`}
            >
              <span className="text-purple-700">Back</span>{" "}
              <span className="text-pink-500">End</span>
            </h2>
            <BackEndIcons />
          </div>
        </div>
        {/* Deployment */}
        <div className="text-white items-center flex flex-col">
          <h2
            className={`text-5xl font-semibold mt-20 mb-20 pt-10 ${bitter.className}`}
          >
            Deployment
          </h2>
          <p className="prose text-white text-3xl mb-20">
            As a full-stack developer, I specialize in deploying robust
            applications to various platforms, including AWS, Vercel, Netlify,
            Linode, Render, and more. With extensive experience in both
            front-end and back-end development, I excel at seamlessly
            integrating user interfaces with APIs and databases. Let me help you
            bring your ideas to life with scalable and efficient solutions.
          </p>
        </div>
      </div>
    </HeroHighlight>
  );
};
