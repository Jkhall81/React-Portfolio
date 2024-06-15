"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { stack } from "@/utils/data/stackData";
import Image from "next/image";
import Link from "next/link";
import { ProjectPics } from "@/components/ProjectPics";

const headingStyles = "text-3xl font-bold";
const h2Styles = "text-5xl text-neutral-500 font-semibold";

const UWellProjectPage = () => {
  usePageSetup();
  return (
    <div className="h-full">
      <HeroHighlight className="h-full w-full">
        <div className="3xl:flex">
          <div className="flex flex-col pt-[200px] 4xl:w-[50%] px-4 4xl:px-20">
            <h1 className="text-white text-6xl pb-20">U-Well Health</h1>
            <p className="text-white prose text-3xl pb-10">
              U-Well is a Next.js application built for a telehealth startup to
              match potential patients with therapists. This ongoing project
              involves collaboration with a backend engineer and a content
              creation team. It requires careful design, secure handling of
              sensitive data, and delivering an excellent user experience.
            </p>
            <p className="text-white prose text-3xl">
              I started working on this project in March 2024. Throughout the
              development process, I have utilized Test Driven Development (TDD)
              with the aid of Jest to ensure high-quality code. For photo
              editing and stock photos, I have leveraged Adobe Express.
              Additionally, I have been preparing the site for deployment on AWS
              (Amplify), ensuring a robust and scalable infrastructure.
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
        <div className="text-white w-full pt-[240px] px-4 4xl:px-20 pb-[100px]">
          <h2 className={`${h2Styles}`}>Project Status</h2>
          <p className="prose pt-20 text-white text-3xl">
            This project is currently in the second stage of its development.
            The application has a test build deployed on Vercel and will soon be
            deployed to AWS using the Amplify service. It will then be connected
            to a MySQL database via Prisma. Following that, the client has
            requested the implementation of user authentication and the creation
            of an admin panel to manage patient and provider user data.
          </p>
        </div>
        <div className="w-full flex pt-[100px] pb-[100px] 4xl:px-20 px-4">
          <div className="w -[0%] 4xl:w-[43%]"></div>
          <div className="w-full 4xl:w-[56%] text-white">
            <h2 className={`${h2Styles}`}>Technology Choices</h2>
            <p className="prose pt-20 pb-20 text-white text-3xl">
              Initially, the client was building the site using Webflow and
              wanted me to continue with it. I suggested that Next.js might be a
              better solution. The client required some custom features,
              including two multi-step forms, one with over thirty questions.
              Building these forms was an ideal scenario to utilize the reusable
              component architecture provided by React. Next.js also offers
              built-in, often automatic, solutions for routing, SEO management,
              performance optimization, and security.
            </p>
          </div>
        </div>
        <ProjectPics />
      </HeroHighlight>
    </div>
  );
};
export default UWellProjectPage;
