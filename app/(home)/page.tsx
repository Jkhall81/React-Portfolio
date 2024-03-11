import Image from "next/image";
import { HomeUseClient } from "@/components/useClient/HomeUseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section>
      <Image
        src="/background/69561.jpg"
        fill
        quality={100}
        alt="background image"
        className="object-cover object-left"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black">
        <HomeUseClient />
      </div>
    </section>
  );
}
