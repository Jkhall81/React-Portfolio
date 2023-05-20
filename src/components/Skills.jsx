import React from "react";
import { data } from "../constants/Data";
import SkillItem from "./SkillItem";
import skillz from "../assets/skills.jpg";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full m-auto md:pl-20 md:pr-20 p-4 py-16 relative h-screen"
    >
      <div
        className="absolute top-0 left-0 h-screen w-full bg-cover"
        style={{ backgroundImage: `url(${skillz})`, backgroundSize: "cover" }}
      ></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black"></div>
      <div className="relative z-10 text-white flex flex-wrap justify-center h-full">
        <h1 className="text-4xl font-bold text-center w-full mb-8">Skills</h1>
        {data.map((item, idx) => (
          <div
            key={idx}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex justify-center"
          >
            <SkillItem
              key={idx}
              title={item.title}
              experience={item.experience}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
