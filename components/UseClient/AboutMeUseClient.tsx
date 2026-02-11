"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { motion } from "framer-motion";
import Image from "next/image";
import { bitter, roboto } from "@/utils/fonts";
import { FloatingSocialCard } from "../projects/FloatingSocialCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const AboutMeUseClient = () => {
  usePageSetup();

  return (
    <HeroHighlight containerClassName="py-24 px-6">
      <FloatingSocialCard />
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Header Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h1
            className={`text-6xl font-bold text-white tracking-tight ${bitter.className}`}
          >
            Jason <span className="text-purple-500">Hall</span>
          </h1>
          <p
            className={`text-2xl text-gray-400 font-light max-w-2xl mx-auto ${roboto.className}`}
          >
            Software Developer & Open Source Contributor specialized in
            high-performance backend systems.
          </p>
        </motion.div>

        {/* Section 1: The Narrative (Anthropology & Career Shift) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <h2
              className={`text-4xl font-semibold text-white ${bitter.className}`}
            >
              Systems Thinking Through a Human Lens
            </h2>
            <div
              className={`text-lg text-gray-300 space-y-4 leading-relaxed ${roboto.className}`}
            >
              <p>
                My path into engineering wasn’t linear. With a degree in{" "}
                <strong>Anthropology</strong> and years spent teaching in{" "}
                <strong>Mainland China</strong>, I developed a fascination with
                how complex structures—both human and digital—evolve and scale.
              </p>
              <p>
                This background gives me a unique perspective on technical debt
                and system architecture. I don't just see code; I see the
                workflows and human processes that depend on it.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <Image
              src="/images/programming.png"
              alt="Code and Logic"
              width={500}
              height={350}
              className="relative rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </motion.div>

        {/* Section 2: Professional Infrastructure (The "Heavy Lifting") */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 lg:order-1 relative group">
            <Image
              src="/images/masterSchool.png"
              alt="Software Engineering Training"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2
              className={`text-4xl font-semibold text-white ${bitter.className}`}
            >
              Infrastructure & Reliability
            </h2>
            <div
              className={`text-lg text-gray-300 space-y-4 leading-relaxed ${roboto.className}`}
            >
              <p>
                Currently, I manage high-concurrency production environments at{" "}
                <strong>Iconic Results</strong>. I bridge the gap between legacy
                reliability and modern scalability, architecting{" "}
                <strong>ETL pipelines</strong> and automating{" "}
                <strong>distributed infrastructure</strong> that processes
                millions of data points annually.
              </p>
              <ul className="grid grid-cols-2 gap-4 text-sm font-mono text-purple-400 mt-6">
                <li>// Rust & Perl ETL</li>
                <li>// MySQL Optimization</li>
                <li>// Linux SysAdmin</li>
                <li>// API Architecture</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Section 3: Open Source (The Modern Edge) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2
              className={`text-4xl font-semibold text-white ${bitter.className}`}
            >
              Committed to Open Source
            </h2>
            <p
              className={`text-xl text-gray-300 leading-relaxed ${roboto.className}`}
            >
              I am an active contributor to the <strong>Ruff</strong>,{" "}
              <strong>Ansible</strong>, and <strong>Apache Airflow</strong>{" "}
              ecosystems. My focus is on <strong>Rust-based tooling</strong> and
              improving the developer experience through high-performance
              linting and automation standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/70">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm italic">
                "Refactoring chaos into modular solutions."
              </span>
            </div>
          </div>
        </motion.div>

        {/* Outro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center pb-20"
        >
          <p
            className={`text-2xl text-white font-medium mb-8 ${bitter.className}`}
          >
            Let's build something that lasts.
          </p>
          <div className="h-px w-24 bg-purple-500 mx-auto opacity-50"></div>
        </motion.div>
      </div>
    </HeroHighlight>
  );
};
