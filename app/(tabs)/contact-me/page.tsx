import { ContactMeUseClient } from "@/components/UseClient/ContactMeUseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

const ContactMePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <ContactMeUseClient />
    </div>
  );
};

export default ContactMePage;
