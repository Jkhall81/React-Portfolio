"use client";

import { ProjectItem } from "@/components/ProjectItem";
import { projectData } from "@/lib/projectData";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";

export const ProjectsUseClient = () => {
  return (
    <div className="flex flex-wrap justify-center w-full h-full pt-12">
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
            link1={item.link1}
            link2={item.link2}
            title={item.title}
            textColor={item.textColor}
            direction={item.direction}
          />
        </motion.div>
      ))}
    </div>
  );
};
