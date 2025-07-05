"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import SocialLinks from "./SocialLinks";
import { usePageSetup } from "@/hooks/usePageSetup";

export const Hero = () => {
  usePageSetup();
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <Spotlight
        className="absolute top-0 left-0 w-[100vw] h-[100vh] z-0"
        fill="blue"
      />
      <Spotlight
        className="absolute top-1/3 left-1/2 w-[60vw] h-[60vh] z-0 opacity-30"
        fill="purple"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Jason Hall
        </h1>
        <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
          Full-Stack Engineer
        </h2>
        <p className="mt-6 text-lg text-gray-400">
          Building internal tools, scripting weird automation, and learning in
          public.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact-me"
            className="px-6 py-2 border border-gray-500 rounded-md hover:bg-gray-800 transition"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-10">
          <SocialLinks size={32} />
        </div>
      </motion.div>
    </main>
  );
};
