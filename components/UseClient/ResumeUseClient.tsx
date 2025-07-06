"use client";

import { usePageSetup } from "@/hooks/usePageSetup";

const pdfSrc = "/Jason-Hall-Resume-20250706.pdf";

export const ResumeUseClient = () => {
  usePageSetup();
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <iframe
        className="pt-16"
        src={pdfSrc}
        width="100%"
        height="100%"
        allowFullScreen
      />
    </div>
  );
};
