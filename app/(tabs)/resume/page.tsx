import { ResumeUseClient } from "@/components/UseClient/ResumeUseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

const ResumePage = () => {
  return (
    <div>
      <ResumeUseClient />
    </div>
  );
};
export default ResumePage;
