"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";
import { cn } from "@/utils/cn";

export const GoldenSolProject = () => {
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
        <h2 className="text-4xl font-bold text-pink-400 mb-2">
          🌞 Golden Sol Tanning
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          A modern, fast, and fully custom website for a mobile spray tanning
          company in Scottsdale.
        </p>

        {/* Image Preview */}
        <div className="rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/goldenSol.png" // Replace with your screenshot
            alt="Golden Sol Screenshot"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-8">
          <Link
            href="https://golden-sol-tanning.com/"
            target="_blank"
            className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition text-white font-medium"
          >
            Visit Site
          </Link>
          <Link
            href="https://github.com/Jkhall81/Golden-Sol"
            target="_blank"
            className="px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition font-medium"
          >
            View Code
          </Link>
        </div>

        {/* Stack / Features */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-pink-300">Tech Stack</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>
                <strong>Next.js 15</strong> – App Router, Turbopack
              </li>
              <li>
                <strong>React 19</strong>
              </li>
              <li>
                <strong>Tailwind CSS 4</strong>
              </li>
              <li>
                <strong>Firebase Admin SDK</strong> + Firestore
              </li>
              <li>React Icons, clsx, custom hooks</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-300">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Custom analytics system (no third-party scripts)</li>
              <li>
                Tracks page views, screen size, IP address, referrer, user
                agent, and visit time
              </li>
              <li>Appointment booking with email notifications via Resend</li>
              <li>
                Serverless tracking and appointment data logging with Firebase
                Firestore
              </li>
              <li>Responsive, accessible, and mobile-optimized design</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
