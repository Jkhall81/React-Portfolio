import { ContactMeUseClient } from "@/components/UseClient/ContactMeUseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

const ContactMePage = () => {
  return (
    <div className="h-full min-h-screen">
      <ContactMeUseClient />
    </div>
  );
};
export default ContactMePage;
