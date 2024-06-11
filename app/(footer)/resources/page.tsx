"use client";

import { useNavStore, useIntroStore, useFooterStore } from "@/store/store";
import { useEffect } from "react";

const ResourcesPage = () => {
  const setNavVisibleTrue = useNavStore((state) => state.setNavVisibleTrue);
  const setFooterVisibleTrue = useFooterStore(
    (state) => state.setFooterVisibleTrue
  );
  const setIntroMovieFalse = useIntroStore((state) => state.setIntroMovieFalse);
  const setWelcomeScreenFalse = useIntroStore(
    (state) => state.setWelcomeScreenFalse
  );

  useEffect(() => {
    setNavVisibleTrue();
    setFooterVisibleTrue();
    setIntroMovieFalse();
    setWelcomeScreenFalse();
  }, [setNavVisibleTrue, setIntroMovieFalse, setWelcomeScreenFalse]);

  return (
    <div className="h-screen flex justify-center bg-black">
      <div className="mt-[300px]">
        <h1 className="text-white text-5xl font-bold ">Resources Page</h1>
        <p className="prose text-white text-2xl pt-[60px] text-center">
          This section is currently under construction!
        </p>
      </div>
    </div>
  );
};
export default ResourcesPage;
