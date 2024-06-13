"use client";

import { ContactForm } from "@/components/ContactForm";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { usePageSetup } from "@/hooks/usePageSetup";

export const ContactMeUseClient = () => {
  usePageSetup();

  return (
    <HeroHighlight containerClassName="h-full pb-[200px] 4xl:pb-0">
      <div className="h-screen flex flex-col items-center">
        <h1 className="web-master font-bold text-5xl mb-20 mt-[200px]">
          Contact Me
        </h1>
        <p className="text-white text-3xl prose px-4 text-center pb-20">
          Feel free to reach out or have me complete a coding challenge or
          project.
        </p>
        <ContactForm />
      </div>
    </HeroHighlight>
  );
};
