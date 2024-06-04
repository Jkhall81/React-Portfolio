import { AboutMeUseClient } from "@/components/UseClient/AboutMeUseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

const AboutMePage = () => {
  return (
    <div className="">
      <AboutMeUseClient />
    </div>
  );
};
export default AboutMePage;
