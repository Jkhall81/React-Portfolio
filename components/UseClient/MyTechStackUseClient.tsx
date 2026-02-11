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
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-[100px] w-full max-w-7xl px-6 mb-32"
        >
          <h1
            className={`text-6xl font-semibold mb-8 text-center ${bitter.className}`}
          >
            Systems Engineer & Open Source Contributor
          </h1>
          <p
            className={`text-2xl text-center mb-16 max-w-3xl mx-auto text-gray-300 ${roboto.className}`}
          >
            I specialize in backend infrastructure, high-performance developer
            tooling, and the modernization of mission-critical systems.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/programming.png"
                alt="Code Screenshot"
                width={450}
                height={450}
                className="rounded-3xl rounded-tl-[80px] border border-white/10"
              />
            </div>
            <div className="flex flex-col gap-8">
              <Image
                src="/images/programming2.png"
                alt="Code Screenshot"
                width={450}
                height={450}
                className="rounded-3xl rounded-tr-[80px] border border-white/10"
              />
              <Image
                src="/images/programming3.png"
                alt="Code Screenshot"
                width={450}
                height={450}
                className="rounded-3xl rounded-br-[80px] border border-white/10"
              />
            </div>
          </div>
        </motion.div>

        {/* Section: High-Performance & Open Source (The "Future" Side) */}
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
            Tooling & Open Source
          </h2>
          <p
            className={`text-xl text-center mb-12 max-w-4xl mx-auto ${roboto.className}`}
          >
            I contribute to the performance and reliability of ecosystems used
            by thousands of developers. My focus is on Rust-based tooling and
            robust automation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-200">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Active Contributions
              </h3>
              <ul className="text-xl space-y-3 list-disc list-inside">
                <li>
                  <strong>Ruff & Rust:</strong> Improving Python linting
                  performance.
                </li>
                <li>
                  <strong>Ansible Lint:</strong> Maintaining standards for
                  infra-as-code.
                </li>
                <li>
                  <strong>Ansible VS Code Extension:</strong> Enhancing
                  developer DX.
                </li>
                <li>
                  <strong>Apache Airflow:</strong> Optimizing data
                  orchestration.{" "}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Modern Stack
              </h3>
              <ul className="text-xl space-y-3 list-disc list-inside">
                <li>Rust, TypeScript, Go, Python</li>
                <li>React, Next.js, Tailwind CSS</li>
                <li>Docker, GitHub Actions (CI/CD)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section: Distributed Infrastructure (The "Professional" Side) */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-6xl px-6 mb-24 py-16 bg-white/5 rounded-3xl border border-white/10"
        >
          <h2
            className={`text-5xl font-semibold mb-8 text-center ${bitter.className}`}
          >
            Distributed Infrastructure
          </h2>
          <p
            className={`text-xl text-center mb-12 max-w-4xl mx-auto ${roboto.className}`}
          >
            I manage high-volume production environments where performance and
            uptime are non-negotiable. I bridge the gap between legacy
            reliability and modern scalability.
          </p>
          <ul className="text-2xl space-y-4 max-w-3xl mx-auto text-gray-200">
            <li className="flex gap-4">
              <span>
                <strong>High-Concurrency:</strong> Built ETL pipelines in Rust
                and Perl processing millions of leads.
              </span>
            </li>
            <li className="flex gap-4">
              <span>
                <strong>Hardened Systems:</strong> Security auditing, SQL
                injection mitigation, and RBAC.
              </span>
            </li>
            <li className="flex gap-4">
              <span>
                <strong>Complex Integrations:</strong> Deep experience with
                Vicidial/Asterisk, CRM integration, and REST/XML webhooks.
              </span>
            </li>
            <li className="flex gap-4">
              <span>
                <strong>Data Engineering:</strong> Custom MySQL reporting and
                operational analytics for 200+ agents.
              </span>
            </li>
          </ul>
        </motion.section>

        {/* Section: Personal / Education */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-6xl px-6 mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-white/10 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">Multilingual</h4>
              <p className="text-gray-400 text-lg">
                Fluent in Mandarin & Spanish.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">Education</h4>
              <p className="text-gray-400 text-lg">
                BA Anthropology, ISU
                <br />
                Software Engineering, Masterschool
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">Philosophy</h4>
              <p className="text-gray-400 text-lg">
                Refactoring legacy into clean, modular solutions.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </HeroHighlight>
  );
};
