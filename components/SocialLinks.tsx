"use client";

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface Props {
  classNames?: string;
  size: number;
}

const SocialLinks = ({ classNames, size }: Props) => {
  return (
    <div className={cn("flex justify-evenly gap-6 w-full", classNames)}>
      {/* Email */}
      <Link
        href="mailto:jason.kei.hall@gmail.com"
        target="_blank"
        aria-label="Email icon link"
        className="p-3 rounded-full transition duration-300 ease-in-out hover:scale-110 hover:bg-[#f87171]/20 hover:shadow-[0_0_20px_#f87171]"
      >
        <MdEmail color="#f87171" size={size} />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/jason-hall-650964242"
        target="_blank"
        aria-label="Linkedin icon link"
        className="p-3 rounded-full transition duration-300 ease-in-out hover:scale-110 hover:bg-[#0a66c2]/20 hover:shadow-[0_0_20px_#0a66c2]"
      >
        <FaLinkedinIn color="#0a66c2" size={size} />
      </Link>

      {/* GitHub */}
      <Link
        href="https://github.com/Jkhall81"
        target="_blank"
        aria-label="Github icon link"
        className="p-3 rounded-full transition duration-300 ease-in-out hover:scale-110 hover:bg-white/10 hover:shadow-[0_0_20px_#ffffff80]"
      >
        <FaGithub color="#ffffff" size={size} />
      </Link>

      {/* WhatsApp */}
      <Link
        href="https://api.whatsapp.com/send?phone=6232062944"
        target="_blank"
        aria-label="Whatsapp icon link"
        className="p-3 rounded-full transition duration-300 ease-in-out hover:scale-110 hover:bg-[#25d366]/20 hover:shadow-[0_0_20px_#25d366]"
      >
        <FaWhatsapp color="#25d366" size={size} />
      </Link>
    </div>
  );
};

export default SocialLinks;
