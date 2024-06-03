"use client";

import { useIntroStore, useNavStore } from "@/store/store";
import { useEffect } from "react";

const pdfSrc = "/Jason-Hall-Resume-May-2024.pdf";

const ResumePage = () => {
  const setNavVisibleTrue = useNavStore((state) => state.setNavVisibleTrue);
  const setWelcomeScreenFalse = useIntroStore(
    (state) => state.setWelcomeScreenFalse
  );
  const setIntroMovieFalse = useIntroStore((state) => state.setIntroMovieFalse);

  useEffect(() => {
    setNavVisibleTrue();
    setWelcomeScreenFalse();
    setIntroMovieFalse();
  }, [setNavVisibleTrue, setWelcomeScreenFalse, setIntroMovieFalse]);

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
export default ResumePage;
