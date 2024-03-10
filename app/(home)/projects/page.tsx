"use client";

import Image from "next/image";
import { ProjectItem } from "@/components/ProjectItem";
import { projectData } from "@/lib/projectData";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <div className="h-full min-h-screen w-full overflow-x-hidden relative">
      <Image
        src="/background/projects.png"
        fill
        quality={100}
        alt="project page background image"
        className="object-cover"
      />
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
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black"></div>
    </div>
  );
};
export default ProjectsPage;
