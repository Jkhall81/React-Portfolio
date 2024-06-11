"use client";

import { useNavStore } from "@/store/store";
import { useIntroStore } from "@/store/store";
import { useEffect } from "react";

const SupportPage = () => {
  const setNavVisibleTrue = useNavStore((state) => state.setNavVisibleTrue);
  const setIntroMovieFalse = useIntroStore((state) => state.setIntroMovieFalse);
  const setWelcomeScreenFalse = useIntroStore(
    (state) => state.setWelcomeScreenFalse
  );

  useEffect(() => {
    setNavVisibleTrue();
    setIntroMovieFalse();
    setWelcomeScreenFalse();
  }, [setNavVisibleTrue, setIntroMovieFalse, setWelcomeScreenFalse]);

  return (
    <div className="h-screen flex justify-center bg-black">
      <div className="mt-[300px]">
        <h1 className="text-white text-5xl font-bold ">Support Page</h1>
        <p className="prose text-white text-2xl pt-[60px] text-center">
          This section is currently under construction!
        </p>
      </div>
    </div>
  );
};
export default SupportPage;
