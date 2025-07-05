"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";
import { FaTerminal, FaServer, FaBug, FaLock } from "react-icons/fa";

export const ThreatDetectorProject = () => {
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
        <h2 className="text-4xl font-bold text-yellow-400 mb-2">
          🛡️ ThreatDetector
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          A modular Apache log parser written in Perl to detect intrusion
          attempts across Vicidial and Linux-based web servers. Designed for
          real-world ops, sysadmins, and security-conscious devs.
        </p>

        {/* Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm mb-8 text-center text-gray-200">
          <div className="flex flex-col items-center">
            <FaBug size={28} className="text-pink-500" />
            SQL Injection
          </div>
          <div className="flex flex-col items-center">
            <FaBug size={28} className="text-purple-500" />
            XSS & Command Injection
          </div>
          <div className="flex flex-col items-center">
            <FaLock size={28} className="text-green-500" />
            Brute Force Logins
          </div>
          <div className="flex flex-col items-center">
            <FaTerminal size={28} className="text-blue-400" />
            Suspicious Headers
          </div>
          <div className="flex flex-col items-center">
            <FaServer size={28} className="text-orange-400" />
            Remote SSH Scanning
          </div>
          <div className="flex flex-col items-center">
            <FaBug size={28} className="text-red-500" />
            Encoded Payloads
          </div>
        </div>

        {/* GitHub + Coming Soon */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Link
            href="https://github.com/Jkhall81/Apache_Log_Parser"
            target="_blank"
            className="px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition font-medium"
          >
            View Code
          </Link>
          <span className="px-4 py-2 rounded-md border border-yellow-500 text-yellow-400 font-mono text-sm opacity-70">
            Coming Soon: CPAN Module
          </span>
        </div>

        <pre className="text-green-400 bg-black p-4 rounded-md text-sm font-mono whitespace-pre-wrap break-words mt-6 mb-8">
          SSH [192.168.1.42] ✔ Connected Scanning /var/log/apache2/access.log...
          Found 8 SQLi attempts Found 3 XSS payloads Report saved to:
          ./logs/threat-summary-192.168.1.42.json
        </pre>

        {/* Features / Notes */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-yellow-300">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Detects and classifies 10+ attack types from Apache logs</li>
              <li>Works across multiple servers via SSH</li>
              <li>Host-specific config overrides and summaries</li>
              <li>Colorized CLI for setup, scanning, and feedback</li>
              <li>Minimal dependencies: Perl 5.10+ and a few CPAN modules</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-300">
              Modules Used
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>
                <code>JSON</code>, <code>File::Slurp</code>,{" "}
                <code>Getopt::Long</code>
              </li>
              <li>
                <code>Term::ANSIColor</code>, <code>IPC::System::Simple</code>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
