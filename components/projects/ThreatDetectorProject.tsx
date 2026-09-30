"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";

export const ThreatDetectorProject = () => {
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
              // CPAN Security Module & CLI Parser
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              ThreatDetector — Apache Log Parser
            </h2>
          </div>
          <div className="flex gap-3">
            <Link
              href="https://metacpan.org/release/JHALL/ThreatDetector-0.04"
              target="_blank"
              className="px-4 py-2 text-xs font-mono rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition"
            >
              CPAN Package ↗
            </Link>
            <Link
              href="https://github.com/Jkhall81/Apache_Log_Parser"
              target="_blank"
              className="px-4 py-2 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
            >
              GitHub Code ↗
            </Link>
          </div>
        </div>

        {/* Overview */}
        <p className="text-gray-300 text-base leading-relaxed">
          A zero-config Perl security module and CLI utility designed to parse
          Linux server Apache logs, detect real-time intrusion patterns, and
          isolate malicious payloads across production web and telephony
          systems.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Capabilities */}
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <h3 className="text-sm font-mono text-purple-400 font-semibold uppercase tracking-wider">
              // Intrusion Pattern Detection
            </h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> SQL Injection (SQLi)
                & URL-encoded payloads
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Cross-Site Scripting
                (XSS) & Command Injection
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Brute force
                authentication & suspicious headers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▹</span> Zero external config
                required — drop-in API call
              </li>
            </ul>
          </div>

          {/* Terminal Output Preview */}
          <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between space-y-3">
            <span className="text-xs font-mono text-gray-400 uppercase">
              // Threat Output Stream
            </span>
            <pre className="text-xs font-mono text-purple-300 whitespace-pre-wrap leading-relaxed">
              {`Parsing log file...
[SQLi] 192.168.1.42 GET /index.php?id=1%20OR%201=1
[XSS]  192.168.1.42 GET /search?q=<script>alert(1)</script>
Threat summary exported to ./threat_results.log`}
            </pre>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Perl", "CPAN", "Log Parsing", "Security", "Linux Admin"].map(
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
