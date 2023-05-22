import React from "react";

const ProjectItem = ({ img, title, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group">
      <img
        src={img}
        alt={title}
        className="h-full w-full rounded-xl grouper-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-3xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-2xl text-white text-center">React Js</p>
        <a href={link}>
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            Visit Website
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
