import React from "react";
import { data } from "../constants/Data";
import SkillItem from "./SkillItem";
import tiger from "../assets/tiger.jpg";

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-[1040px] m-auto md:pl-20 md:pr-20 p-4 py-16 relative h-screen"
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${tiger})` }}
      ></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black"></div>
      <div className="relative z-10 text-white flex flex-wrap justify-center h-full">
        <h1 className="text-4xl font-bold text-center w-full mb-8">Skills</h1>
        {data.map((item, idx) => (
          <div className="w-full md:w-1/3 p-4 flex justify-center">
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
