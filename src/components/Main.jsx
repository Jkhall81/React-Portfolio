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
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
        <div>
          <h1>I'm Jason Hall</h1>
          <h2>
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
          <div>
            <FaGithub className="cursor-pointer" color="white" size={20} />
            <FaFacebookF className="cursor-pointer" color="white" size={20} />
            <FaLinkedinIn className="cursor-pointer" color="white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
