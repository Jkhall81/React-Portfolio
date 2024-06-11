import GridBackground from "./ui/GridBackground";
import Link from "next/link";

const footerLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "Support", href: "/support" },
  { name: "Resources", href: "/resources" },
];

const Footer = () => {
  return (
    <div className="h-[200px]">
      <GridBackground>
        <div className="flex w-full h-full">
          <div className="w-[50%]"></div>
          <div className="w-[50%] flex items-center justify-center">
            {footerLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="text-neutral-400 font-semibold hover:scale-110 hover:text-purple-400 text-3xl px-[40px]"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </GridBackground>
    </div>
  );
};
export default Footer;
