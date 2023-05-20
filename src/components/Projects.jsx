import React from "react";
import ProjectItem from "./ProjectItem";
import cryptoImg from "../assets/cryptocurrency.jpeg";
import netflix from "../assets/netflix.png";
import dataImg from "../assets/data-security.jpeg";
import backGImg from "../assets/projects.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full m-auto md:pl-20 md:pr-20 p-4 py-16 relative h-screen"
    >
      <div
        className="absolute top-0 left-0 h-screen w-full bg-cover"
        style={{ backgroundImage: `url(${backGImg})`, backgroundSize: "cover" }}
      ></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black"></div>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit
        sapiente impedit velit eaque cumque eius facilis aut repellendus nobis,
        doloribus amet nihil inventore quis deleniti consequatur, dolore neque
        quia.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={cryptoImg}
          title="Crypto Page"
          link="https://cryptobase-f3acf.firebaseapp.com/"
        />

        <ProjectItem
          img={netflix}
          title="Netflix Page"
          link="https://melodious-lollipop-6e6ded.netlify.app/"
        />

        <ProjectItem
          img={dataImg}
          title="Data Security Page"
          link="https://spiffy-squirrel-eb6e18.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
