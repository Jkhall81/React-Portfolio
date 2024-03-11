"use client";

import { icons } from "@/lib/skillIcons";
import { lusitana } from "@/lib/fonts";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";

export const SkillsUseClient = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <motion.h1
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className={`${lusitana.className} text-white text-4xl font-bold mb-7 mt-28 z-20`}
      >
        What can I build for you?
      </motion.h1>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 h-full">
        {icons.map((item, index) => {
          const LinkIcon = item.icon;
          return (
            <motion.div
              key={index}
              variants={fadeIn(item.motion, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="p-10 z-10"
            >
              <p className="text-center mb-2 text-white text-2xl">
                {item.name}
              </p>
              <LinkIcon className="mb-2" color={item.color} size={120} />
              <p className="text-center text-white">{item.experience}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
