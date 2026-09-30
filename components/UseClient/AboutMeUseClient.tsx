"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { motion } from "framer-motion";
import { bitter, roboto } from "@/utils/fonts";
import { FloatingSocialCard } from "../projects/FloatingSocialCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const AboutMeUseClient = () => {
  usePageSetup();

  const coreStack = [
    "Next.js",
    "NestJS",
    "TypeScript",
    "Python",
    "Perl",
    "GCP / Cloud Architecture",
    "Docker",
    "PostgreSQL",
    "Playwright",
    "Snyk",
    "Semgrep",
  ];

  return (
    <HeroHighlight containerClassName="py-32 px-6">
      <FloatingSocialCard />
      <div className="max-w-4xl mx-auto space-y-28">
        {/* Header Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-6 pt-12"
        >
          <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-mono">
            // Full-Stack & EHR Architecture
          </span>
          <h1
            className={`text-6xl md:text-7xl font-bold text-white tracking-tight ${bitter.className}`}
          >
            Jason <span className="text-purple-500">Hall</span>
          </h1>
          <p
            className={`text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed ${roboto.className}`}
          >
            Building secure, scalable web applications and data architectures
            for healthcare platforms.
          </p>
        </motion.div>

        {/* Vertical Timeline / Flow Container */}
        <div className="relative border-l-2 border-purple-500/20 ml-4 md:ml-32 space-y-20 pl-8 md:pl-12">
          {/* Node 1: Domain Focus */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative space-y-4"
          >
            {/* Custom Dot Indicator */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            </div>

            <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              01 / Perspective & Domain
            </span>
            <h2
              className={`text-3xl font-semibold text-white ${bitter.className}`}
            >
              Systems Thinking & Healthcare Context
            </h2>
            <div
              className={`text-lg text-gray-300 space-y-4 leading-relaxed max-w-2xl ${roboto.className}`}
            >
              <p>
                My background combines software engineering with healthcare
                management. Holding an{" "}
                <strong className="text-white">
                  MBA in Health Organization Management
                </strong>
                , a degree in{" "}
                <strong className="text-white">Anthropology</strong>, and a
                minor in <strong className="text-white">Mandarin</strong>, I
                look at software through both technical and operational
                lenses[cite: 1].
              </p>
              <p>
                I build applications that match real-world hospital workflows,
                maintain strict data security standards, and directly support
                clinical teams.
              </p>
            </div>
          </motion.div>

          {/* Node 2: Technical Approach */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative space-y-4"
          >
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            </div>

            <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              02 / Execution & Reliability
            </span>
            <h2
              className={`text-3xl font-semibold text-white ${bitter.className}`}
            >
              Engineering Focus
            </h2>
            <div
              className={`text-lg text-gray-300 space-y-4 leading-relaxed max-w-2xl ${roboto.className}`}
            >
              <p>
                My work centers on turning complex data operations into simple,
                reliable software. Whether refactoring multi-step API
                transactions into atomic state calls or migrating legacy health
                databases into modern cloud setups, I prioritize platform
                stability and developer velocity[cite: 1].
              </p>
              <p>
                I place a heavy focus on backend predictability, rigorous
                end-to-end testing with Playwright, and security auditing across
                every service I deploy[cite: 1].
              </p>
            </div>

            {/* Stack Pills Banner Embedded in Flow */}
            <div className="pt-6">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm space-y-4 max-w-2xl">
                <span className="text-xs font-mono text-gray-400 uppercase">
                  // Core Production Tooling
                </span>
                <div className="flex flex-wrap gap-2">
                  {coreStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Node 3: Ecosystem */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative space-y-4"
          >
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            </div>

            <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">
              03 / Open Source & Standards
            </span>
            <h2
              className={`text-3xl font-semibold text-white ${bitter.className}`}
            >
              Ecosystem & Open Source
            </h2>
            <div
              className={`text-lg text-gray-300 space-y-4 leading-relaxed max-w-2xl ${roboto.className}`}
            >
              <p>
                I have a background contributing to open-source developer
                tooling including{" "}
                <strong className="text-white">Ansible Lint</strong>,{" "}
                <strong className="text-white">Apache Airflow</strong>, Fedora's{" "}
                <strong className="text-white">Noggin</strong>, and{" "}
                <strong className="text-white">Ruff</strong>[cite: 1]. While my
                day-to-day work is focused on shipping healthcare systems[cite:
                1], I apply open-source standards for code quality and test
                coverage to everything I build.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Outro CTA Banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center pt-16 border-t border-white/10"
        >
          <p
            className={`text-2xl text-white font-medium mb-6 ${bitter.className}`}
          >
            Let's build something reliable.
          </p>
          <a
            href="/contact-me"
            className="inline-block px-8 py-3 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-700 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </HeroHighlight>
  );
};
