"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { motion } from "framer-motion";
import { projectData } from "@/utils/data/projectData";
import { fadeIn } from "@/utils/fadein";
import { ProjectItem } from "@/components/ProjectItem";

export const ProjectsUseClient = () => {
  usePageSetup();
  return (
    <HeroHighlight containerClassName="h-full">
      <h1 className="text-white text-5xl font-bold text-center p-2 mt-[200px]">
        Projects
      </h1>
      <div className="flex mt-[100px] min-h-screen flex-wrap justify-center w-full h-full pt-12">
        {projectData.map((item, index) => (
          <motion.div
            variants={fadeIn(item.direction, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            key={index}
            className="w-full p-12 h-[500px] lg:w-[600px] lg:p-6 md:h-[550px] sm:h-[500px]"
          >
            <ProjectItem
              image={item.image}
              href={item.href}
              title={item.title}
              textColor={item.textColor}
              direction={item.direction}
            />
          </motion.div>
        ))}
      </div>
    </HeroHighlight>
  );
};
