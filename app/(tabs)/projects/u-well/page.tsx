"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { stack } from "@/utils/data/stackData";
import Image from "next/image";
import Link from "next/link";

const headingStyles = "text-3xl font-bold";

const UWellProjectPage = () => {
  usePageSetup();
  return (
    <div className="h-full">
      <HeroHighlight className="h-full w-full">
        <div className="3xl:flex">
          <div className="flex flex-col pt-[200px] 4xl:w-[50%] px-4 4xl:px-20">
            <h1 className="text-white text-6xl pb-20">U-Well Health</h1>
            <p className="text-white prose text-2xl pb-10">
              U-Well is a Next.js application built for a telehealth startup to
              match potential patients with therapists. This ongoing project
              involves collaboration with a backend engineer and a content
              creation team. It requires careful design, secure handling of
              sensitive data, and delivering an excellent user experience.
            </p>
            <p className="text-white prose text-2xl">
              This section is currently being built. I started this section at 4
              AM June 13th 2024. I should have it completed soon.
            </p>
            <div className="flex w-full">
              <div className="w-full flex space-x-[160px] text-white pt-20">
                <div className="flex flex-col items-center">
                  <h2 className={`${headingStyles}`}>Project Type</h2>
                  <p className="text-2xl pt-10">Freelance</p>
                </div>
                <div className="flex flex-col items-start">
                  <h2 className={`${headingStyles}`}>Technologies Used</h2>
                  <div className="pt-6">
                    {stack.map((item, index) => (
                      <p key={index} className="text-2xl lg:pl-[90px] pt-4">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className={`${headingStyles}`}>Live Site</h2>
                  <div className="text-2xl text-amber-700 font-semibold pt-10">
                    <Link target="_blank" href="https://u-well.vercel.app">
                      View Site
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="4xl:mt-[570px] mt-[80px] px-4 h-full 4xl:w-[50vw]">
            <Image
              src="/images/uwellLandingPage.png"
              alt="image of sites landing page"
              height={1150}
              width={1250}
              className="rounded-3xl"
            />
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
};
export default UWellProjectPage;
