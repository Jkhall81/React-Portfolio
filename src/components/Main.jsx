import React from "react";
import background_image from "../assets/69561.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={background_image}
        alt="background image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/40 bg-gradient-to-r from-black">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-white sm:text-5xl text-4xl font-bold">
            I'm Jason Hall
          </h1>
          <h2 className="text-white flex sm:text-3xl text-2xl pt-4">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Software Engineer",
                2000,
                "Programmer",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://github.com/Jkhall81"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" color="white" size={30} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100081060077918"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer" color="white" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/jason-hall-650964242"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="cursor-pointer"
                color="white"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
