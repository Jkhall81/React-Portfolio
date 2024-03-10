import { AboutUseClient } from "@/components/AboutUseClient";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <section className="relative">
      <Image
        src="/background/flowers.jpg"
        fill
        quality={100}
        alt="same image from home screen"
        className="object-cover"
      />
      <AboutUseClient />
      <div className="w-full h-screen top-0 left-0 absolute bg-black/30 bg-gradient-to-r from-black"></div>
    </section>
  );
};
export default AboutPage;
