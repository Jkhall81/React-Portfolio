"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { lusitana } from "@/lib/fonts";
import { roboto } from "@/lib/fonts";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/utils";

const links = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=100081060077918",
    target: "_blank",
    color: "#316ff6",
    "aria-label": "Facebook icon link",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/jason-hall-650964242",
    target: "_blank",
    color: "#0a66c2",
    "aria-label": "Linkedin icon link",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Jkhall81",
    target: "_blank",
    color: "white",
    "aria-label": "Github icon link",
  },
  {
    icon: FaWhatsapp,
    href: "https://api.whatsapp.com/send?phone=6232062944",
    target: "_blank",
    color: "#25d366",
    "aria-label": "Whatsapp Icon link",
  },
];

export default function Home() {
  return (
    <section>
      <Image
        src="/background/69561.jpg"
        fill
        quality={100}
        alt="background image"
        className="object-cover object-left"
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <motion.h1
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className={`text-white sm:text-5xl text-4xl font-bold ${lusitana.className}`}
          >
            Hi, I'm Jason
          </motion.h1>
          <motion.h2
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className={`text-white flex sm:text-3xl text-2xl pt-4 ${roboto.className}`}
          >
            I'm a
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Software Engineer",
                2000,
                "Bootcamp Grad",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className={`pl-3 ${roboto.className}`}
            />
          </motion.h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            {links.map((item, index) => {
              const LinkIcon = item.icon;
              return (
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.4 }}
                  key={index}
                >
                  <Link
                    href={item.href}
                    target={item.target}
                    aria-label={item["aria-label"]}
                  >
                    <LinkIcon color={item.color} size={35} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
