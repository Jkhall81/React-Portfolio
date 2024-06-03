"use client";

import { useEffect } from "react";
import { useNavStore, useIntroStore } from "@/store/store";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { motion } from "framer-motion";
import { projectData } from "@/utils/data/projectData";
import { fadeIn } from "@/utils/fadein";
import { ProjectItem } from "@/components/ProjectItem";

const ProjectsPage = () => {
  const setNavVisibleTrue = useNavStore((state) => state.setNavVisibleTrue);
  const setWelcomeScreenFalse = useIntroStore(
    (state) => state.setWelcomeScreenFalse
  );
  const setIntroMovieFalse = useIntroStore((state) => state.setIntroMovieFalse);

  useEffect(() => {
    setNavVisibleTrue();
    setWelcomeScreenFalse();
    setIntroMovieFalse();
  }, [setNavVisibleTrue, setWelcomeScreenFalse, setIntroMovieFalse]);

  return (
    <HeroHighlight containerClassName="h-full">
      <h1 className="text-white text-5xl font-semibold text-center mt-[200px]">
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
              link1={item.link1}
              link2={item.link2}
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
export default ProjectsPage;
