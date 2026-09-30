"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";

export const TauriListToolProject = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-5xl mx-auto"
    >
      <div className="w-full p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 space-y-8 backdrop-blur-sm">
        {/* Card Header & Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              // Desktop App & ETL Utility
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              Tauri List Tool
            </h2>
          </div>
          <Link
            href="https://github.com/Jkhall81/Tauri-List-Tool-Desktop-App"
            target="_blank"
            className="px-4 py-2 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
          >
            GitHub Code ↗
          </Link>
        </div>

        {/* Overview */}
        <p className="text-gray-300 text-base leading-relaxed">
          A high-performance, cross-platform desktop ETL application built with
          Rust and Next.js. Engineered to scrub Do Not Call (DNC) records,
          process massive call center lead files, and automate data
          normalization workflows.
        </p>

        {/* Screenshots Showcase */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <Image
              src="/images/tauri1.png"
              alt="Tauri list tool interface"
              width={600}
              height={350}
              className="object-contain h-[280px] w-full p-2"
            />
          </div>
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <Image
              src="/images/tauri2.png"
              alt="Tauri list tool processing screen"
              width={600}
              height={350}
              className="object-contain h-[280px] w-full p-2"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <h3 className="text-sm font-mono text-purple-400 font-semibold uppercase tracking-wider">
              // Key Capabilities
            </h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Scrubs & normalizes
                DNC and lead data sets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Standalone bundled
                Windows .EXE and MSI releases
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Deployed in daily
                production workflows for operations teams
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Fast desktop IPC
                between Rust backend and Next.js frontend
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase">
                // Application Stack
              </span>
              <p className="text-xs text-gray-300 leading-relaxed mt-2">
                Rust core backend wrapped in Tauri's native webview shell,
                featuring a responsive React/Next.js interface with TypeScript
                type safety.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Tauri",
                "Rust",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Desktop App",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
