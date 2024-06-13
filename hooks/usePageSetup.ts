import { useNavStore, useIntroStore, useFooterStore } from "@/store/store";
import { useEffect } from "react";

export const usePageSetup = () => {
  const setNavVisibleTrue = useNavStore((state) => state.setNavVisibleTrue);
  const setFooterVisibleTrue = useFooterStore(
    (state) => state.setFooterVisibleTrue
  );
  const setWelcomeScreenFalse = useIntroStore(
    (state) => state.setWelcomeScreenFalse
  );
  const setIntroMovieFalse = useIntroStore((state) => state.setIntroMovieFalse);

  useEffect(() => {
    setNavVisibleTrue();
    setFooterVisibleTrue();
    setWelcomeScreenFalse();
    setIntroMovieFalse();
  }, [
    setNavVisibleTrue,
    setFooterVisibleTrue,
    setWelcomeScreenFalse,
    setIntroMovieFalse,
  ]);
};
