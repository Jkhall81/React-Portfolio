import { create } from "zustand";

interface NavStore {
  navVisible: boolean;
  setNavVisibleTrue: () => void;
}

export const useNavStore = create<NavStore>((set) => ({
  navVisible: false,
  setNavVisibleTrue: () => {
    set({ navVisible: true });
  },
}));

interface IntroStore {
  introMovie: boolean;
  setIntroMovieFalse: () => void;
  welcomeScreen: boolean;
  setWelcomeScreenFalse: () => void;
}

export const useIntroStore = create<IntroStore>((set) => ({
  introMovie: true,
  welcomeScreen: true,
  setIntroMovieFalse: () => {
    set({ introMovie: false });
  },
  setWelcomeScreenFalse: () => {
    set({ welcomeScreen: false });
  },
}));
