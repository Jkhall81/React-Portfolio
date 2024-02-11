import React from "react";
import ProjectItem from "./ProjectItem";
import roachHotelBooking from "../assets/RoachHotelBooking.jpg";
import netflix from "../assets/netflix.png";
import ecommerceImg from "../assets/Ecommerce.jpg";
import backGImg from "../assets/projects.png";
import fuDonk from "../assets/landingpage.png";
import WowL from "../assets/WowL.jpeg";
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
            img={roachHotelBooking}
            title="Roach Hotel Booking"
            link1="https://roach-hotel-booking.vercel.app/"
            link2="https://github.com/Jkhall81/Roach-Hotel-Booking"
            textColor="black"
          />

          <ProjectItem
            img={netflix}
            title="Netflix Page"
            link1="https://melodious-lollipop-6e6ded.netlify.app/"
            link2="https://github.com/Jkhall81/Netflix"
            textColor="white"
          />

          <ProjectItem
            img={ecommerceImg}
            title="E Commerce Page"
            link1="https://junk-store.vercel.app/"
            link2="https://github.com/Jkhall81/Junk-Store"
            textColor="white"
          />
          <ProjectItem
            img={fuDonk}
            title="Fu Donk"
            link1="https://fu-donk.vercel.app/"
            link2="https://github.com/Jkhall81/Fu-Donk"
            textColor="black"
          />
          <ProjectItem
            img={beater}
            title="Hooptievana"
            link1="https://hooptievana.vercel.app/"
            link2="https://github.com/Jkhall81/Hooptievana"
            textColor="black"
          />
          <ProjectItem
            img={WowL}
            title="Wow Library"
            link1="https://wow-library.onrender.com/"
            link2="https://github.com/Jkhall81/Wow-Library"
            textColor="black"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
