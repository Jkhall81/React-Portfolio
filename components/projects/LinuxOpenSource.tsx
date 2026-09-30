"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";

export const LinuxOpenSource = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-5xl mx-auto"
    >
      <div className="w-full p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 space-y-8 backdrop-blur-sm">
        {/* Card Header & Badge */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              // Kernel Subsystem Patch
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              Linux Kernel Contribution
            </h2>
          </div>
          <Link
            href="https://git.kernel.org/pub/scm/linux/kernel/git/gregkh/char-misc.git/commit/?h=char-misc-next&id=b7f42b0cfb94d4cc96371ef77c4ecffbc1c02ac2"
            target="_blank"
            className="px-4 py-2 text-xs font-mono rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition"
          >
            Upstream Commit ↗
          </Link>
        </div>

        {/* Overview */}
        <p className="text-gray-300 text-base leading-relaxed">
          Authored a key refactor for the <strong>Rust Binder</strong> driver in
          the Linux Kernel (
          <code className="text-purple-300">drivers/android/binder</code>).
          Replaced manual linked-list management with{" "}
          <code className="text-purple-300">KVVec</code> and{" "}
          <code className="text-purple-300">Arc</code>-based tracking,
          eliminating several <code className="text-purple-300">unsafe</code>{" "}
          blocks to move the driver toward an idiomatic, memory-safe ownership
          model.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Engineering Details */}
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <h3 className="text-sm font-mono text-purple-400 font-semibold uppercase tracking-wider">
              // Technical Pillars
            </h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Refactored raw linked
                lists into idiomatic Rust abstractions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Leveraged{" "}
                <code className="text-purple-300">Arc</code> reference counting
                for memory safety
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Streamlined IPC
                subsystem memory tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Merged upstream into
                Greg Kroah-Hartman's{" "}
                <code className="text-purple-300">char-misc-next</code> tree
              </li>
            </ul>
          </div>

          {/* Commit Metadata Box */}
          <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase">
                // Upstream Metadata
              </span>
              <div className="mt-3 space-y-2 font-mono text-xs text-gray-300">
                <div>
                  <span className="text-gray-500">Subsystem:</span>{" "}
                  drivers/android/binder
                </div>
                <div>
                  <span className="text-gray-500">Commit ID:</span> b7f42b0cfb94
                </div>
                <div>
                  <span className="text-gray-500">Tree:</span> char-misc-next
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Rust", "Linux Kernel", "Memory Safety", "IPC Subsystem"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-gray-400"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
