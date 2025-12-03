"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";
import { FaLinux, FaTerminal, FaCodeBranch } from "react-icons/fa";

export const AnsibleOpenSource = () => {
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
        <h2 className="text-4xl font-bold text-amber-300 mb-2">
          🐧 Ansible Open Source Contributions
        </h2>

        <p className="text-lg text-gray-300 mb-6">
          I contribute regularly to the <strong>Ansible Core</strong> project,
          focusing on improving modules, fixing platform inconsistencies,
          strengthening test coverage, and refining documentation and developer
          experience. My work centers around writing clean, reliable automation
          logic and collaborating with maintainers in a large-scale,
          production-grade open source ecosystem.
        </p>

        {/* GitHub Link */}
        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href="https://github.com/ansible/ansible/pulls?q=is%3Apr+author%3Ajkhall81+"
            target="_blank"
            className="px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition font-medium"
          >
            View All Ansible PRs
          </Link>
        </div>

        {/* Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 text-center text-gray-200 mb-8">
          <div className="flex flex-col items-center">
            <FaLinux size={30} className="text-green-400" />
            Cross-Platform Fixes
          </div>

          <div className="flex flex-col items-center">
            <FaTerminal size={30} className="text-blue-400" />
            Module Enhancements
          </div>

          <div className="flex flex-col items-center">
            <FaCodeBranch size={30} className="text-purple-300" />
            Test & CI Improvements
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-amber-300">
              Contribution Areas
            </h3>

            <ul className="list-disc list-inside text-gray-300">
              <li>Improving Ansible module behavior and edge-case handling</li>
              <li>Enhancing reliability through integration and unit tests</li>
              <li>Fixing Linux/FreeBSD compatibility issues</li>
              <li>Refactoring code and adding clearer documentation</li>
              <li>Collaborating directly with maintainers and reviewers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-amber-300">
              What This Demonstrates
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Ability to work inside a large, enterprise-level codebase</li>
              <li>Experience following strict CI/CD and review workflows</li>
              <li>
                Strong understanding of automation and configuration tools
              </li>
              <li>Commitment to open source and collaborative development</li>
              <li>Skills directly aligned with automation roles at Red Hat</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
