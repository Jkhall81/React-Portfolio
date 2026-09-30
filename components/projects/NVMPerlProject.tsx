"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";

export const NVMPerlProject = () => {
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
              // CPAN Package & CLI Utility
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              nvm-pl — Node Version Manager
            </h2>
          </div>
          <div className="flex gap-3">
            <Link
              href="https://metacpan.org/dist/NVM-Perl"
              target="_blank"
              className="px-4 py-2 text-xs font-mono rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition"
            >
              CPAN Package ↗
            </Link>
            <Link
              href="https://github.com/Jkhall81/nvm-pl"
              target="_blank"
              className="px-4 py-2 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
            >
              GitHub Code ↗
            </Link>
          </div>
        </div>

        {/* Overview */}
        <p className="text-gray-300 text-base leading-relaxed">
          A fast, lightweight, cross-platform Node.js version manager built in
          pure Perl. Designed as a zero-dependency alternative to shell-heavy
          version managers, supporting Linux, macOS, Windows, Bash, Zsh, Cmd,
          and PowerShell.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Capabilities */}
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <h3 className="text-sm font-mono text-purple-400 font-semibold uppercase tracking-wider">
              // Highlights & Capabilities
            </h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Cross-platform
                (Linux, macOS, Windows)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Instant version
                switching via symlinks/junctions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Smart caching system
                to prevent re-downloads
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Fully tested (72+
                tests & CI/CD across 3 platforms)
              </li>
            </ul>
          </div>

          {/* Quick Terminal Command Snippet */}
          <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between space-y-3">
            <span className="text-xs font-mono text-gray-400 uppercase">
              // Terminal Quickstart
            </span>
            <pre className="text-xs font-mono text-purple-300 whitespace-pre-wrap leading-relaxed">
              {`# Install from CPAN
cpanm NVM::Perl

# Install & Switch Node versions
nvm-pl install 25.1.0
nvm-pl use 25.1.0`}
            </pre>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Perl", "CPAN", "CLI", "Cross-Platform", "CI/CD"].map((tag) => (
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
