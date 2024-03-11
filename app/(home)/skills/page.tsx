import { Metadata } from "next";
import Image from "next/image";
import { SkillsUseClient } from "@/components/useClient/SkillsUseClient";

export const metadata: Metadata = {
  title: "Skills",
};

const SkillPage = () => {
  return (
    <section className="overflow-x-hidden min-h-screen relative">
      <Image
        src="/background/skills.jpg"
        fill
        alt="skill section background image"
        className="object-cover"
      />
      <SkillsUseClient />
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black z-0"></div>
    </section>
  );
};
export default SkillPage;
