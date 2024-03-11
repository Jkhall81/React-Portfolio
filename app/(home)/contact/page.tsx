import Image from "next/image";
import { roboto } from "@/lib/fonts";
import { ContactUseClient } from "@/components/useClient/ContactUseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <div className="">
      <Image
        src="/background/contact.jpg"
        fill
        alt="japanese winter landscape"
        className="object-fit"
      />
      <div className="w-full h-full flex flex-col justify-center items-center absolute z-10">
        <h1
          className={`${roboto.className} text-sky-500 text-6xl mb-12 font-bold mt-40`}
        >
          Get In Touch
        </h1>
        <ContactUseClient />
      </div>
      <div className="w-full h-full top-0 left-0 absolute bg-black/30 bg-gradient-to-r from-black"></div>
    </div>
  );
};
export default ContactPage;
