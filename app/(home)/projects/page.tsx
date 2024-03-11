import { ProjectsUseClient } from "@/components/useClient/ProjectsUseClient";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <div className="h-full min-h-screen w-full overflow-x-hidden relative">
      <Image
        src="/background/projects.png"
        fill
        quality={100}
        alt="project page background image"
        className="object-cover"
      />
      <ProjectsUseClient />
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black"></div>
    </div>
  );
};
export default ProjectsPage;
