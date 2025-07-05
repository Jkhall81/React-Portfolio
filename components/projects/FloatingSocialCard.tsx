"use client";

import SocialLinks from "@/components/SocialLinks";

export const FloatingSocialCard = () => {
  return (
    <div className="hidden xl:block fixed right-6 top-40 z-40">
      <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700 shadow-xl rounded-2xl p-4 w-16 flex flex-col items-center gap-4">
        <SocialLinks size={20} classNames="flex-col items-center gap-4" />
      </div>
    </div>
  );
};
