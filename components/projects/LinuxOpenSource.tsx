"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";
import { FaLinux, FaRust, FaShieldAlt } from "react-icons/fa";

export const LinuxOpenSource = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-5xl px-6 py-16 mx-auto"
    >
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl shadow-2xl p-6 md:p-10 text-white">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-4xl font-bold text-orange-400">
            🐧 Linux Kernel Contribution
          </h2>
          <span className="text-xs font-mono bg-orange-400/10 text-orange-400 px-3 py-1 rounded-full border border-orange-400/20">
            drivers/android/binder
          </span>
        </div>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          I helped author a significant refactor for the{" "}
          <strong>Rust Binder</strong> driver in the Linux Kernel. By replacing
          manual linked-list management with <code>KVVec</code> and{" "}
          <code>Arc</code>-based tracking, I eliminated several{" "}
          <code>unsafe</code> blocks and moved the driver toward a more
          idiomatic and memory-safe ownership model.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href="https://git.kernel.org/pub/scm/linux/kernel/git/gregkh/char-misc.git/commit/?h=char-misc-next&id=b7f42b0cfb94d4cc96371ef77c4ecffbc1c02ac2"
            target="_blank"
            className="px-5 py-2 rounded-md bg-orange-500 text-black hover:bg-orange-400 transition font-bold"
          >
            View Upstream Commit
          </Link>
          <div className="px-5 py-2 rounded-md border border-zinc-700 text-zinc-400 font-mono text-sm">
            ID: b7f42b0cfb94
          </div>
        </div>

        {/* Technical Pillar Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-gray-300 mb-12">
          <div className="flex flex-col items-center">
            <FaRust size={32} className="text-orange-600 mb-2" />
            <span className="font-semibold">Rust for Linux</span>
            <span className="text-xs text-zinc-500">Memory Safe IPC</span>
          </div>

          <div className="flex flex-col items-center">
            <FaShieldAlt size={32} className="text-blue-400 mb-2" />
            <span className="font-semibold">Refactored Safety</span>
            <span className="text-xs text-zinc-500">Removed Unsafe Lists</span>
          </div>

          <div className="flex flex-col items-center">
            <FaLinux size={32} className="text-white mb-2" />
            <span className="font-semibold">Upstreamed</span>
            <span className="text-xs text-zinc-500">char-misc-next</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
