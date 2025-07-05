"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { motion } from "framer-motion";
import Image from "next/image";
import { bitter } from "@/utils/fonts";
import { FloatingSocialCard } from "../projects/FloatingSocialCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const AboutMeUseClient = () => {
  usePageSetup();

  return (
    <HeroHighlight containerClassName="py-24 px-6">
      <FloatingSocialCard />
      <div className="max-w-4xl mx-auto space-y-40">
        {/* Section 1: Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className={`text-5xl font-bold text-white ${bitter.className}`}>
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            A journey through change, service, and systems thinking.
          </p>
        </motion.div>

        {/* Section 2: Background */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed space-y-6"
        >
          <p>
            I earned my BA in Anthropology from Iowa State University and spent
            several years teaching English in mainland China. I've also worked
            construction, managed people, and problem-solved in chaotic
            environments. My path into tech wasn’t linear — it was shaped by
            exploration, reinvention, and a deep curiosity about how systems
            work.
          </p>
          <p>
            Today, I split my time between two meaningful roles: I work
            full-time as a Full-Stack Developer at a high-volume call center,
            building tools to support operations and internal workflows — and I
            live and work as a sober house manager, helping men in recovery
            reintegrate into society.
          </p>
        </motion.div>

        {/* Section 3: Certificate */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/masterSchool.png"
            alt="Software Engineering Certificate"
            width={500}
            height={500}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Section 4: Reflection */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed space-y-6"
        >
          <p>
            The work I do outside of tech grounds me. As a house manager, I live
            with and support men navigating addiction recovery, parole, and
            major life transitions. I help them build structure, stay
            accountable, and move forward. It’s work that requires presence,
            patience, and integrity.
          </p>
          <p>
            That experience shapes how I approach software: with empathy,
            clarity, and a focus on solving problems that matter.
          </p>
        </motion.div>

        {/* Section 5: Outro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto"
        >
          <p>
            I build things that make life easier, more efficient, or more human.
            Whether it’s improving systems or supporting someone’s comeback —
            that’s where I feel at home.
          </p>
          <p className="mt-6 text-xl text-white font-semibold">
            Let’s make something meaningful.
          </p>
        </motion.div>
      </div>
    </HeroHighlight>
  );
};
