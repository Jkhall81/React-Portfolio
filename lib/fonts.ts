import { Lusitana, Roboto, Anton } from "next/font/google";

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});
