import { create } from "zustand";

// Navbar
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

// Footer
interface FooterStore {
  footerVisible: boolean;
  setFooterVisibleTrue: () => void;
}

export const useFooterStore = create<FooterStore>((set) => ({
  footerVisible: false,
  setFooterVisibleTrue: () => {
    set({ footerVisible: true });
  },
}));

// Intro
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
