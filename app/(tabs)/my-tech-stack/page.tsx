import { MyTechStackUseClient } from "@/components/UseClient/MyTechStackUseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Tech Stack",
};

const MyTechStackPage = () => {
  return (
    <div className="h-full min-h-screen">
      <MyTechStackUseClient />
    </div>
  );
};
export default MyTechStackPage;
