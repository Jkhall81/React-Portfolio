"use client";

import { Hero } from "@/components/Hero";
import IntroVideo from "@/components/IntroVideo";
import { Lamp } from "@/components/Lamp";
import { useState } from "react";
import { useIntroStore } from "@/store/store";

export default function Home() {
  const [showVideo, setShowVideo] = useState("");
  const [blurClass, setBlurClass] = useState("");
  const [welcome, setWelcome] = useState("");
  const introMovie = useIntroStore((state) => state.introMovie);
  const welcomeScreen = useIntroStore((state) => state.welcomeScreen);

  return (
    <main className="w-full bg-black/100">
      {showVideo === "" && introMovie === true ? (
        <IntroVideo
          setShowVideo={setShowVideo}
          setBlurClass={setBlurClass}
          blurClass={blurClass}
          showVideo={showVideo}
        />
      ) : welcome === "" && welcomeScreen === true ? (
        <div className="bg-black h-full min-h-screen">
          <Lamp welcome={welcome} setWelcome={setWelcome} />
        </div>
      ) : (
        <Hero />
      )}
    </main>
  );
}
