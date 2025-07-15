"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { motion } from "framer-motion";
import Image from "next/image";
import { bitter, roboto } from "@/utils/fonts";
import { FloatingSocialCard } from "../projects/FloatingSocialCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const MyTechStackUseClient = () => {
  usePageSetup();

  return (
    <HeroHighlight containerClassName="h-full">
      <FloatingSocialCard />
      <div className="min-h-screen w-full flex flex-col items-center text-white">
        {/* Hero / Image Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-[100px] w-full max-w-7xl px-6 mb-32"
        >
          <h1
            className={`text-6xl font-semibold mb-16 text-center ${bitter.className}`}
          >
            The Tools I Use to Build, Fix, and Create
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/programming.png"
                alt="Code Screenshot"
                width={450}
                height={450}
                className="rounded-3xl rounded-tl-[80px]"
              />
            </div>
            <div className="flex flex-col gap-8">
              <Image
                src="/images/programming2.png"
                alt="Code Screenshot"
                width={450}
                height={450}
                className="rounded-3xl rounded-tr-[80px]"
              />
              <Image
                src="/images/programming3.png"
                alt="Code Screenshot"
                width={450}
                height={450}
                className="rounded-3xl rounded-br-[80px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Section: Professional Work */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-6xl px-6 mb-24"
        >
          <h2
            className={`text-5xl font-semibold mb-8 text-center ${bitter.className}`}
          >
            Professional Stack
          </h2>
          <p
            className={`text-xl text-center mb-12 max-w-4xl mx-auto ${roboto.className}`}
          >
            I specialize in automation, system administration, data handling,
            and backend development in high-volume environments. My daily
            toolkit includes:
          </p>
          <ul className="text-2xl space-y-2 list-disc list-inside text-gray-200">
            <li>Perl, PHP, JavaScript, SQL, MySQL</li>
            <li>Postman, REST API development (Dancer2)</li>
            <li>Quickbase, Salesforce, Boberdoo, Ytel</li>
            <li>Vicidial systems, custom UI integrations, ETL pipelines</li>
            <li>Linux system administration (OpenSUSE, Ubuntu, Mint)</li>
            <li>Automation scripting (Perl), jQuery, in-house tooling</li>
          </ul>
        </motion.section>

        {/* Section: DevOps / Infrastructure */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-6xl px-6 mb-24"
        >
          <h2
            className={`text-5xl font-semibold mb-8 text-center ${bitter.className}`}
          >
            DevOps & Infrastructure
          </h2>
          <p
            className={`text-xl text-center mb-12 max-w-4xl mx-auto ${roboto.className}`}
          >
            I manage deployments, containers, and server operations across cloud
            and local environments.
          </p>
          <ul className="text-2xl space-y-2 list-disc list-inside text-gray-200">
            <li>Docker (multi-container setups)</li>
            <li>AWS, Vercel, Netlify, Linode, Render</li>
            <li>CI/CD pipelines, GitHub, SSH, Bash</li>
          </ul>
        </motion.section>

        {/* Section: Freelance / Personal */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-6xl px-6 mb-32"
        >
          <h2
            className={`text-5xl font-semibold mb-8 text-center ${bitter.className}`}
          >
            Freelance & Personal Projects
          </h2>
          <p
            className={`text-xl text-center mb-12 max-w-4xl mx-auto ${roboto.className}`}
          >
            I love modern web development and enjoy building interfaces and
            full-stack apps using today’s best tools:
          </p>
          <ul className="text-2xl space-y-2 list-disc list-inside text-gray-200">
            <li>JavaScript / TypeScript</li>
            <li>React, Next.js, Tailwind, CSS</li>
            <li>Express, Hono, REST APIs</li>
            <li>Front-end UI design and web tooling</li>
          </ul>
        </motion.section>
      </div>
    </HeroHighlight>
  );
};
