import { Navbar } from "@/components/Navbar";
import { MobileNav } from "@/components/MobileNav";
import { lusitana } from "@/lib/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MobileNav
        containerStyles="fixed top-0 right-0 sm:hidden flex justify-end h-6 w-full z-30"
        linkStyles={`${lusitana.className} text-white text-3xl`}
        iconStyles="cursor-pointer"
      />
      <Navbar
        containerStyles="top-0 left-0 fixed h-6 w-full z-50 border-none xl:max-w-[700px] sm:max-w-[580px]"
        linkStyles="hidden sm:flex text-white p-6 capitalize text-xl justify-between items-center"
      />
      {children}
    </div>
  );
}
