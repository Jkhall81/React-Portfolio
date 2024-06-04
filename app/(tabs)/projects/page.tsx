import { ProjectsUseClient } from "@/components/UseClient/ProjectsUseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsUseClient />
    </div>
  );
};
export default ProjectsPage;
