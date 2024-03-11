"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/utils";
import { lusitana } from "@/lib/fonts";

export const AboutUseClient = () => {
  return (
    <div>
      <div className="relative flex flex-col h-screen w-full overflow-hidden z-10">
        <div className="flex flex-row h-full">
          <div className="hidden sm:block flex-1 flex justify-center items-center text-white">
            {/* add some design stuff later?  I could have used two flex rows wrapped in a flex col and used justify end and start to do this.  But I like this better for some reason. */}
          </div>
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="w-[350px] p-2 sm:flex-1 flex justify-center items-center text-white"
          >
            <Image
              src="/image/Jason2.jpg"
              height={400}
              width={400}
              alt="picture of website's creator"
              className="rounded-r-lg"
            />
          </motion.div>
        </div>
        <div className="flex flex-row h-full">
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className={`${lusitana.className} flex-1 flex justify-center items-center text-white text-xl sm:text-3xl p-4 sm:ml-[5rem]`}
          >
            <p>
              As a Full Stack Developer, I specialize in Next.js, React,
              TypeScript / JavaScript, Python (Django, Flask), and the many
              flavors of SQL! I am a graduate of the Masterschool Software
              Engineering Bootcamp, and I hold a BA in Anthropology with a minor
              in Mandarin from Iowa State University. Currently seeking Software
              Engineering job opportunities, I enjoy weight-lighting, learning,
              and playing Clash Royale during coding breaks.
            </p>
          </motion.div>
          <div className="hidden flex-1 sm:flex justify-center items-center text-white">
            {/* box four */}
          </div>
        </div>
      </div>
    </div>
  );
};
