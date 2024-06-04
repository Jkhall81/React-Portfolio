"use client";

interface Props {
  setBlurClass: (value: string) => void;
  blurClass: string;
  setShowVideo: (value: string) => void;
  showVideo: string;
}

import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import { useEffect } from "react";

const IntroVideo = ({
  setBlurClass,
  blurClass,
  setShowVideo,
  showVideo,
}: Props) => {
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setBlurClass("blur-sm");
    }, 5000);

    const timer2 = setTimeout(() => {
      setBlurClass("blur-md");
    }, 5100);

    const timer3 = setTimeout(() => {
      setBlurClass("blur-lg");
    }, 5200);

    const timer4 = setTimeout(() => {
      setBlurClass("blur-xl");
    }, 5300);

    const timer5 = setTimeout(() => {
      setBlurClass("blur-2xl");
    }, 5400);

    const timer6 = setTimeout(() => {
      setBlurClass("blur-3xl");
    }, 5500);

    const timer7 = setTimeout(() => {
      setShowVideo("hidden");
    }, 5600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);
  return (
    <div
      className={`${blurClass} ${showVideo} mx-auto flex h-full max-w-[80vw] min-h-screen items-center justify-center`}
    >
      <BackgroundGradient className="rounded-[22px] aboslute inset-0 dark:bg-zinc-900">
        <video className="rounded-2xl" autoPlay loop muted src="/intro.mp4" />
      </BackgroundGradient>
    </div>
  );
};
export default IntroVideo;
