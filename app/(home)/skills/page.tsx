"use client";

import Image from "next/image";
import { icons } from "@/lib/skillIcons";
import { lusitana } from "@/lib/fonts";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";

const SkillPage = () => {
  return (
    <section>
      <Image
        src="/background/skills.jpg"
        fill
        alt="skill section background image"
        className="object-cover"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <motion.h1
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className={`${lusitana.className} text-white text-4xl font-bold mb-7`}
          >
            What can I build for you?
          </motion.h1>
          <div className="grid grid-cols-4 gap-4">
            {icons.map((item, index) => {
              const LinkIcon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn(item.motion, 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.4 }}
                  className="p-10"
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
      </div>
    </section>
  );
};
export default SkillPage;
