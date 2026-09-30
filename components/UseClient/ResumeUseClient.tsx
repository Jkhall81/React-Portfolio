"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { motion } from "framer-motion";
import { bitter, roboto } from "@/utils/fonts";
import { FloatingSocialCard } from "../projects/FloatingSocialCard";

const pdfSrc = "/Jason_Hall_Resume_2026-09-21.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ResumeUseClient = () => {
  usePageSetup();

  return (
    <HeroHighlight containerClassName="min-h-screen pt-36 pb-20 px-4 md:px-8">
      <FloatingSocialCard />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header & Download Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              // Curriculum Vitae
            </span>
            <h1
              className={`text-4xl md:text-5xl font-bold text-white mt-1 ${bitter.className}`}
            >
              Resume
            </h1>
          </div>

          <div className="flex gap-3">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
            >
              Open Raw PDF ↗
            </a>
            <a
              href={pdfSrc}
              download="Jason_Hall_Resume.pdf"
              className="px-4 py-2.5 text-xs font-mono rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition shadow-lg shadow-purple-600/20"
            >
              Download PDF ↓
            </a>
          </div>
        </motion.div>

        {/* Native Glassmorphic Resume Canvas */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 md:p-12 backdrop-blur-sm shadow-2xl space-y-10 text-gray-200"
        >
          {/* Header Info */}
          <div className="space-y-2 border-b border-white/10 pb-6">
            <h2 className={`text-4xl font-bold text-white ${bitter.className}`}>
              Jason Hall
            </h2>
            <p className="text-purple-400 font-mono text-lg">
              Software Engineer — EHR & Infrastructure
            </p>
            <p className="text-sm text-gray-400">
              Omak, WA · jason.kei.hall@gmail.com · 623-206-2944
            </p>
          </div>

          {/* Personal Statement */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-purple-400 uppercase tracking-widest">
              // Personal Statement
            </h3>
            <p
              className={`text-base text-gray-300 leading-relaxed ${roboto.className}`}
            >
              Full-stack developer and systems engineer specializing in
              electronic health record (EHR) platforms and healthtech
              infrastructure. Focused on building secure, scalable web
              applications and data architectures that support clinical care.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-xs font-mono text-purple-400 uppercase tracking-widest border-b border-white/10 pb-2">
              // Work Experience
            </h3>

            {/* Advance Northwest */}
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1">
                <h4 className="text-xl font-semibold text-white">
                  Software Engineer{" "}
                  <span className="text-gray-400 text-base font-normal">
                    @ Advance Northwest
                  </span>
                </h4>
                <span className="text-xs font-mono text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                  Mar 2026 – Present
                </span>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside leading-relaxed">
                <li>
                  <strong className="text-white">
                    Accelerated EHR MVP delivery:
                  </strong>{" "}
                  Salvaged a stalled 6-month-old EHR codebase and successfully
                  launched product MVP within 2 months of arrival.
                </li>
                <li>
                  <strong className="text-white">
                    Architected atomic form state management:
                  </strong>{" "}
                  Refactored complex, distributed form submission from making
                  7-15 independent API calls to a unified, atomic transaction
                  model.
                </li>
                <li>
                  <strong className="text-white">
                    Engineered multi-tenant GCP architecture:
                  </strong>{" "}
                  Streamlined application maintenance and deployment workflows
                  by migrating from fragmented per-organization API and frontend
                  instances to a unified backend and frontend setup.
                </li>
                <li>
                  <strong className="text-white">
                    Orchestrated legacy data migrations:
                  </strong>{" "}
                  Engineered data cleaning pipelines using Perl to clean and
                  normalize client health data prior to loading into Production
                  GCP Cloud SQL instances.
                </li>
              </ul>
            </div>

            {/* Iconic Results */}
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1">
                <h4 className="text-xl font-semibold text-white">
                  Software Developer{" "}
                  <span className="text-gray-400 text-base font-normal">
                    @ Iconic Results
                  </span>
                </h4>
                <span className="text-xs font-mono text-gray-400">
                  Sep 2024 – Mar 2026
                </span>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside leading-relaxed">
                <li>
                  Built large-scale ETL pipelines in Go and Perl to normalize
                  millions of customer leads per year for Vicidial and internal
                  systems.
                </li>
                <li>
                  Designed and deployed a fully automated Call QA platform using
                  Python, Faster-Whisper, LangChain, and ChatGPT API—reducing
                  manual QA workload by 80%.
                </li>
                <li>
                  Developed and maintained internal web applications using PHP,
                  Perl, JavaScript/jQuery, React, and REST APIs; integrated
                  Salesforce, Quickbase, Boberdoo, Ytel, TrustedForm, and
                  Jornaya via REST/XML webhooks.
                </li>
                <li>
                  Created custom MySQL reporting and auditing tools for
                  compliance, performance tracking, and operational analytics;
                  supported 20+ Linux servers and 200–300 concurrent Vicidial
                  agents with SIP/Asterisk debugging and database tuning.
                </li>
                <li>
                  Automated infrastructure and provisioning using PXE-boot Linux
                  images, FOG server deployment, Samba administration, Cron
                  workflows, and vulnerability scanning via Vuls.
                </li>
                <li>
                  Investigated and resolved a security incident by identifying a
                  SQL injection attack through Apache logs, implementing
                  prepared statements, and hardening privileged authentication.
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-purple-400 uppercase tracking-widest border-b border-white/10 pb-2">
              // Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <p className="font-semibold text-white">
                  BA Anthropology / Minor Mandarin
                </p>
                <p className="text-gray-400 text-xs">Iowa State University</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <p className="font-semibold text-white">
                  MBA Health Organization Management
                </p>
                <p className="text-gray-400 text-xs">Texas Tech University</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </HeroHighlight>
  );
};
