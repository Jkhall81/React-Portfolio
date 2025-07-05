import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import "./globals.css";
// import Footer from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Hall – Full-Stack Engineer",
  description:
    "Full-stack engineer with expertise in Next.js, React, TypeScript, Perl, PHP, and backend systems. Building performant web apps, automations, and developer tools.",
  authors: [{ name: "Jason Hall", url: "https://jason-hall.dev" }],
  keywords: [
    "Full-stack engineer",
    "Next.js developer",
    "Perl programmer",
    "PHP developer",
    "React",
    "TypeScript",
    "Web development",
    "Automation tools",
    "Software engineer portfolio",
  ],
  metadataBase: new URL("https://jason-hall.dev"),
  openGraph: {
    title: "Jason Hall – Full-Stack Engineer",
    description:
      "Building scalable web apps and developer tools with Next.js, Perl, PHP, and more.",
    url: "https://jason-hall.dev",
    siteName: "Jason Hall Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <NavBar />
        <MobileNav />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
