"use client";

import { useEffect } from "react";
import { ContactForm } from "@/components/ContactForm";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { useIntroStore, useNavStore } from "@/store/store";

export const ContactMeUseClient = () => {
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
    <HeroHighlight containerClassName="h-full">
      <div className="h-screen flex flex-col items-center">
        <h1 className="web-master font-bold text-5xl mb-20 mt-[200px]">
          Contact Me
        </h1>
        <ContactForm />
      </div>
    </HeroHighlight>
  );
};
