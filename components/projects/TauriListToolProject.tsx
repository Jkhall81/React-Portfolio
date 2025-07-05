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
      className="w-full max-w-5xl px-6 py-16 mx-auto"
    >
      <div className="bg-stone-900/40 border border-stone-700 rounded-2xl shadow-lg p-6 md:p-10 text-white">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-400 mb-2">
          🧰 Tauri List Tool
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          A fast, cross-platform ETL utility built with Tauri + Next.js +
          TypeScript to process DNC lists, scrub call center data, and save
          hours of manual work.
        </p>

        {/* Screenshots */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
          <Image
            src="/images/tauri1.png"
            alt="Tauri list tool screenshot 1"
            width={600}
            height={350}
            className="rounded-lg border border-stone-800 object-contain h-[350px] w-full"
          />
          <Image
            src="/images/tauri2.png"
            alt="Tauri list tool screenshot 2"
            width={600}
            height={350}
            className="rounded-lg border border-stone-800 object-contain h-[350px] w-full"
          />
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-8">
          <Link
            href="https://github.com/Jkhall81/Tauri-List-Tool-Desktop-App"
            target="_blank"
            className="px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition font-medium"
          >
            View Code
          </Link>
        </div>

        {/* Stack / Features */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-green-300">Tech Stack</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>
                <strong>Tauri</strong> – Native desktop app shell powered by
                Rust
              </li>
              <li>
                <strong>Rust</strong> – Backend system and app bundling via
                Tauri
              </li>
              <li>
                <strong>Next.js</strong> – Frontend UI
              </li>
              <li>
                <strong>TypeScript</strong> – Typed app logic
              </li>
              <li>Tailwind CSS, React, Bun</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-300">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Scrubs and preprocesses DNC and lead data lists</li>
              <li>Locally bundled .EXE and MSI builds for Windows users</li>
              <li>Used daily by call center coworkers</li>
              <li>Two-process dev flow with Tauri and Next</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
