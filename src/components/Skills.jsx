import React from "react";
import { data } from "../constants/Data";
import SkillItem from "./SkillItem";
import skillz from "../assets/skills.jpg";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full m-auto md:pl-20 md:pr-20 p-4 py-16 relative min-h-screen flex items-center justify-center"
    >
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover"
        style={{ backgroundImage: `url(${skillz})`, backgroundSize: "cover" }}
      ></div>
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black"></div>
      <div className="relative z-10 text-white flex flex-wrap justify-center">
        <h1 className="text-4xl font-bold text-center w-full mb-8">Skills</h1>
        <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-14">
          {data.map((item, idx) => (
            <div key={idx} className="flex justify-center">
              <SkillItem
                title={item.title}
                experience={item.experience}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
