import React from "react";

const ProjectItem = ({ img, title, link1, link2, textColor }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group">
      <img
        src={img}
        alt={title}
        className="h-full w-full rounded-xl grouper-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3
          className={`text-4xl font-bold text-${textColor} tracking-wider text-center pb-4`}
        >
          {title}
        </h3>
        <a href={link1} target="_blank">
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            Visit Website
          </p>
        </a>
        <a href={link2} target="_blank">
          <p className="mt-3 text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            See Code
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
