"use client";

import { useEffect } from "react";
import { useNavStore, useIntroStore } from "@/store/store";
import { roboto } from "@/utils/fonts";
import { bitter } from "@/utils/fonts";
import Image from "next/image";
import { LitButton } from "@/components/ui/LitButton";
import Link from "next/link";
import { HeroHighlight } from "@/components/ui/HeroHighlight";

export const AboutMeUseClient = () => {
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
            <div className="w-[43vw] mb-10 mx-auto flex justify-center">
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
                I began my academic journey at{" "}
                <span className="text-indigo-600">Iowa State University</span>,
                where I earned a B.A. in Anthropology with a minor in Mandarin
                in 2003. My passion for understanding diverse cultures and
                languages shaped my early career path. To further enhance my
                expertise, I pursued an MBA in Health Organization Management
                from Texas Tech University, graduating in 2012. More recently, I
                completed a Software Engineering Bootcamp at Master School in
                2024, equipping myself with the technical skills necessary for
                the ever-evolving tech industry.
              </p>
            </div>
          </div>
          {/* Text Container 2 */}
          <div>
            <p
              className={`text-white prose text-3xl mt-20 mb-20 ${roboto.className}`}
            >
              Currently, I am employed at an{" "}
              <span className="text-blue-600">Apple</span> data center as a
              Logistics Technician, where I manage the intricate logistics of
              data center operations. My professional journey has been diverse,
              reflecting my adaptability and wide-ranging interests. I have
              taught English at Chinese universities, providing me with
              invaluable cross-cultural communication skills. Additionally, I
              have hands-on experience in the construction industry, which has
              honed my project management and teamwork abilities. Alongside
              these roles, I have been a freelance web developer, where I have
              successfully delivered various projects, showcasing my technical
              prowess and problem-solving skills.
            </p>
          </div>
          <div className="2xl:flex">
            <div
              className={`text-white prose text-3xl 2xl:w-[66vw] mt-8 mb-20 flex flex-col ${roboto.className}`}
            >
              <p>
                I am a passionate Full Stack Engineer actively seeking a
                full-time developer position. With a strong foundation in
                Python, JavaScript/TypeScript, and SQL, I enjoy working with
                modern technologies such as React,{" "}
                <span className="text-blue-400">Next.js</span>, TailwindCSS,
                Postgres, Docker, Django, the Django Rest Framework, and Flask.
                My commitment to continuous learning and improvement is evident
                through my contributions to open source projects, particularly
                in the Django community.
              </p>
              <p>
                I thrive in dynamic environments and am excited about the
                opportunity to bring my diverse skill set and experience to a
                forward-thinking team.
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
