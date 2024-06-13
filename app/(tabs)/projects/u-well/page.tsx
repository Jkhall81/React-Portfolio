"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { HeroHighlight } from "@/components/ui/HeroHighlight";

const UWellProjectPage = () => {
  usePageSetup();
  return (
    <div className="min-h-screen">
      <HeroHighlight className="h-full w-full min-h-screen">
        <div className="flex flex-col pt-[200px] px-4 4xl:px-20">
          <h1 className="text-white text-6xl pb-20">U-Well Health</h1>
          <p className="text-white prose text-2xl pb-10">
            U-Well is a Next.js application built for a telehealth startup to
            match potential patients with therapists. This ongoing project
            involves collaboration with a backend engineer and a content
            creation team. It requires careful design, secure handling of
            sensitive data, and delivering an excellent user experience.
          </p>
          <p className="text-white prose text-2xl">
            This section is currently being built. I started this section at 4
            AM June 13th 2024. I should have it completed soon.
          </p>
        </div>
      </HeroHighlight>
    </div>
  );
};
export default UWellProjectPage;
