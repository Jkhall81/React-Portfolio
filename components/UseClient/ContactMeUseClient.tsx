"use client";

import { ContactForm } from "@/components/ContactForm";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { usePageSetup } from "@/hooks/usePageSetup";
import { motion } from "framer-motion";
import { bitter } from "@/utils/fonts";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ContactMeUseClient = () => {
  usePageSetup();

  return (
    <HeroHighlight containerClassName="h-full pb-[200px] 4xl:pb-0">
      <div className="flex flex-col items-center px-6 max-w-4xl mx-auto">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`text-5xl font-bold mt-40 mb-6 text-center text-white ${bitter.className}`}
        >
          Contact <span className="text-pink-500">Me</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white text-xl sm:text-2xl text-center mb-16 max-w-2xl"
        >
          Whether it's automation, full-stack development, or building tools
          that solve real problems — I'm all ears.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          <ContactForm />
        </motion.div>
      </div>
    </HeroHighlight>
  );
};
