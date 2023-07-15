import React from "react";
import ProjectItem from "./ProjectItem";
import cryptoImg from "../assets/cryptocurrency.jpeg";
import netflix from "../assets/netflix.png";
import dataImg from "../assets/data-security.jpeg";
import backGImg from "../assets/projects.png";
import postit from "../assets/postit.jpg";
import movieapp from "../assets/bgpic.jpg";
import beater from "../assets/beater2.webp";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full m-auto md:pl-20 md:pr-20 p-4 py-16 relative min-h-screen"
    >
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover"
        style={{ backgroundImage: `url(${backGImg})`, backgroundSize: "cover" }}
      ></div>
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black"></div>
      <div className="relative max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center text-white">Projects</h1>
        <p className="text-center py-8 text-white">
          These projects are showcases of my front-end work, demonstrating the
          power of React and the versatility of Tailwind CSS. Leveraging the
          capabilities of APIs, these applications seamlessly integrate
          up-to-date data, providing users with dynamic and real-time
          information.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          <ProjectItem
            img={cryptoImg}
            title="Crypto Page"
            link="https://cryptobase-f3acf.firebaseapp.com/"
            textColor="white"
          />

          <ProjectItem
            img={netflix}
            title="Netflix Page"
            link="https://melodious-lollipop-6e6ded.netlify.app/"
            textColor="white"
          />

          <ProjectItem
            img={dataImg}
            title="Data Security Page"
            link="https://spiffy-squirrel-eb6e18.netlify.app/"
            textColor="black"
          />
          <ProjectItem
            img={postit}
            title="Social Media App"
            link="https://postit-81wu.onrender.com/"
            textColor="black"
          />
          <ProjectItem
            img={movieapp}
            title="Flask Movie App"
            link="https://movie-webapp.onrender.com/"
            textColor="black"
          />
          <ProjectItem
            img={beater}
            title="Hooptievana"
            link="https://hooptievana.vercel.app/"
            textColor="black"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
