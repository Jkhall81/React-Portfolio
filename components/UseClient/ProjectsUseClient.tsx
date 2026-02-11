"use client";

import { usePageSetup } from "@/hooks/usePageSetup";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { GoldenSolProject } from "../projects/goldenSolProject";
import { TauriListToolProject } from "../projects/TauriListToolProject";
import { ThreatDetectorProject } from "../projects/ThreatDetectorProject";
import { FloatingSocialCard } from "../projects/FloatingSocialCard";
import { NVMPerlProject } from "../projects/NVMPerlProject";
import { LinuxOpenSource } from "../projects/LinuxOpenSource";

export const ProjectsUseClient = () => {
  usePageSetup();

  return (
    <HeroHighlight containerClassName="py-32 px-6">
      <h1 className="text-white text-5xl font-bold text-center mb-20">
        Projects
      </h1>

      <div className="flex flex-col items-center gap-24 w-full max-w-5xl mx-auto">
        <FloatingSocialCard />
        <GoldenSolProject />
        <TauriListToolProject />
        <ThreatDetectorProject />
        <NVMPerlProject />
        <LinuxOpenSource />
      </div>
    </HeroHighlight>
  );
};
