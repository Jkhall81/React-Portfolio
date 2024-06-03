import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface Props {
  classNames?: string;
  size: number;
}

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

const SocialLinks = ({ classNames, size }: Props) => {
  return (
    <div className={cn("flex justify-evenly w-full", `${classNames}`)}>
      {links.map((item, index) => {
        const LinkIcon = item.icon;
        return (
          <div key={index}>
            <Link
              href={item.href}
              target={item.target}
              aria-label={item["aria-label"]}
            >
              <LinkIcon color={item.color} size={size} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default SocialLinks;
