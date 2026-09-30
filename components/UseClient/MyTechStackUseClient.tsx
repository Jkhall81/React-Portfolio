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

export const MyTechStackUseClient = () => {
  usePageSetup();

  return (
    <HeroHighlight containerClassName="h-full">
      <FloatingSocialCard />
      <div className="min-h-screen w-full flex flex-col items-center text-white">
        {/* Header Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-[100px] w-full max-w-5xl px-6 mb-20 text-center space-y-6"
        >
          <h1
            className={`text-5xl md:text-6xl font-semibold ${bitter.className}`}
          >
            Technical Stack & Capabilities
          </h1>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 ${roboto.className}`}
          >
            Production frameworks, databases, cloud architecture, and testing
            tooling used in healthcare and enterprise applications.
          </p>
        </motion.div>

        {/* Section 1: Core Frameworks & Languages */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-6xl px-6 mb-16"
        >
          <h2
            className={`text-3xl font-semibold mb-8 text-purple-400 ${bitter.className}`}
          >
            // Languages & Web Frameworks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-3">
              <h3 className="text-xl font-bold text-white">
                TypeScript & JavaScript
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Primary stack for full-stack web applications, React ecosystem,
                and typed backend systems.
              </p>
              <div className="pt-2 text-xs font-mono text-purple-300">
                Next.js · React · Node.js · Express
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-3">
              <h3 className="text-xl font-bold text-white">
                NestJS Architecture
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Building modular, enterprise-grade REST APIs, atomic state
                transitions, and backend services.
              </p>
              <div className="pt-2 text-xs font-mono text-purple-300">
                REST APIs · OAuth/JWT · Service Layer
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-3">
              <h3 className="text-xl font-bold text-white">
                Scripting & Data Pipelines
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Data wrangling, codebase analysis, ETL, normalization, and
                legacy data cleaning scripts.
              </p>
              <div className="pt-2 text-xs font-mono text-purple-300">
                Python · Perl · PHP
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Databases & Cloud Infrastructure */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-6xl px-6 mb-16"
        >
          <h2
            className={`text-3xl font-semibold mb-8 text-purple-400 ${bitter.className}`}
          >
            // Databases & Cloud Infrastructure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Relational Data & Migration
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Designing schemas, query optimization, and automating migrations
                for production health records and high-concurrency systems.
              </p>
              <ul className="text-sm font-mono text-gray-300 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span> PostgreSQL & MySQL
                  Query Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span> Perl & Python
                  Production Ingestion Pipelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span> Multi-tenant
                  Database Domain-Based Routing
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Cloud Architecture & DevOps
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Deploying and scaling containerized services, managing
                multi-tenant environments, and automating deployments.
              </p>
              <ul className="text-sm font-mono text-gray-300 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span> GCP (Cloud Run,
                  Cloud Build, Cloud SQL)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span> Docker
                  Containerization & Linux Server Admin
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span> CI/CD with GitHub
                  Actions, Ansible & Terraform
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Testing & Security Standards */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-6xl px-6 mb-32 p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10"
        >
          <h2
            className={`text-3xl font-semibold mb-6 text-center text-white ${bitter.className}`}
          >
            Quality Assurance & Security Controls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center pt-4">
            <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
              <h4 className="text-lg font-bold mb-2 text-purple-300">
                E2E & Unit Testing
              </h4>
              <p className="text-gray-400 text-sm">
                Playwright integration suites, Jest unit tests, and regression
                prevention.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
              <h4 className="text-lg font-bold mb-2 text-purple-300">
                Vulnerability Auditing
              </h4>
              <p className="text-gray-400 text-sm">
                Dependency scanning via Snyk & npm audit, static analysis with
                Semgrep.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
              <h4 className="text-lg font-bold mb-2 text-purple-300">
                API Testing & Fuzzing
              </h4>
              <p className="text-gray-400 text-sm">
                Postman testing workflows and automated API contract fuzzing
                with Schemathesis.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </HeroHighlight>
  );
};
