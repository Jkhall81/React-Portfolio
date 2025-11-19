"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";
import {
  FaTerminal,
  FaBolt,
  FaLinux,
  FaWindows,
  FaApple,
} from "react-icons/fa";

export const NVMPerlProject = () => {
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
        <h2 className="text-4xl font-bold text-blue-400 mb-2">
          🚀 nvm-pl — Node Version Manager for Perl
        </h2>

        <p className="text-lg text-gray-300 mb-6">
          A fast, lightweight, cross-platform Node.js version manager written in
          pure Perl. Install, switch, and manage multiple Node.js versions with
          ease — with full support for Linux, macOS, Windows, Bash, Zsh, Cmd,
          and PowerShell.
        </p>

        {/* Optional Screenshot */}
        {/* <div className="mb-8">
          <Image
            src="/images/nvmpl-terminal.png"
            alt="nvm-pl terminal usage"
            width={1200}
            height={600}
            className="rounded-lg border border-stone-800 object-contain w-full"
          />
        </div> */}

        {/* GitHub + CPAN Links */}
        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href="https://github.com/Jkhall81/nvm-pl"
            target="_blank"
            className="px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition font-medium"
          >
            View Code
          </Link>
          <Link
            href="https://metacpan.org/dist/NVM-Perl"
            target="_blank"
            className="px-4 py-2 rounded-md border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-black transition font-mono text-sm"
          >
            Install from CPAN
          </Link>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-200 mb-8">
          <div className="flex flex-col items-center">
            <FaBolt size={30} className="text-yellow-400" />
            Fast (Pure Perl)
          </div>
          <div className="flex flex-col items-center">
            <FaLinux size={30} className="text-green-400" />
            Linux Support
          </div>
          <div className="flex flex-col items-center">
            <FaApple size={30} className="text-gray-300" />
            macOS Support
          </div>
          <div className="flex flex-col items-center">
            <FaWindows size={30} className="text-blue-400" />
            Windows Support
          </div>
        </div>

        {/* Example Usage */}
        <pre className="text-blue-300 bg-black p-4 rounded-md text-sm font-mono whitespace-pre-wrap break-words mb-10">
          {`# Install NVM::Perl
cpanm NVM::Perl

# Install Node.js
nvm-pl install 25.1.0

# Switch to a version
nvm-pl use 25.1.0

# List installed versions
nvm-pl ls`}
        </pre>

        {/* Key Features */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-300">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Fast & lightweight — written entirely in Perl</li>
              <li>Cross-platform: Linux, macOS, Windows</li>
              <li>Supports Bash, Zsh, Cmd, and PowerShell</li>
              <li>Smart caching avoids re-downloading Node.js</li>
              <li>Auto-updates shell configuration</li>
              <li>72+ tests, CI/CD on 3 platforms</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-300">Why nvm-pl?</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>No slow shell hacks or massive JS deps</li>
              <li>Reliable, well-tested, clean codebase</li>
              <li>Same commands as nvm — easy migration</li>
              <li>Instant switching via symlink/junction system</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
