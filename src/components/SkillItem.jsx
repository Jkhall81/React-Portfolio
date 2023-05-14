import React from "react";

const SkillItem = ({ title, experience, icon }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-stone-200 items-center">
      <li className="flex flex-col items-center">
        <div />

        <span className="text-center text-2xl">
          <strong>{title}</strong>
        </span>

        {React.createElement(icon, { className: "w-20 h-20" })}

        <span className="text-center">{experience}</span>
      </li>
    </ol>
  );
};

export default SkillItem;
