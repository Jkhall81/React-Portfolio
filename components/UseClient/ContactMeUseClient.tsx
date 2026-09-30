"use client";

import { ContactForm } from "@/components/ContactForm";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { usePageSetup } from "@/hooks/usePageSetup";
import { motion } from "framer-motion";
import { bitter } from "@/utils/fonts";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ContactMeUseClient = () => {
  usePageSetup();

  return (
    <HeroHighlight containerClassName="min-h-screen w-full flex flex-col justify-between py-12">
      <div className="flex flex-col items-center px-6 max-w-4xl mx-auto w-full my-auto">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`text-5xl font-bold mt-12 mb-6 text-center text-white ${bitter.className}`}
        >
          Contact <span className="text-purple-500">Me</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-300 text-xl text-center mb-12 max-w-2xl leading-relaxed"
        >
          Whether you want to discuss EHR architectures, full-stack systems, or
          data automation — drop me a message below.
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
