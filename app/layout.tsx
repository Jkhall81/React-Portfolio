import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jason Hall - Software Engineer - Fullstack Engineer",
    template: "Jason Hall - %s",
  },
  description:
    "Web Development Portfolio - Jason Hall.  Web developer specializing in React, Next.js, and creating modern, responsive interfaces using Tailwind CSS and Shadcn-UI.  Proficient in TypeScript, I can integrate backend solutions in Python using Django or Flask.  I have experience using Zod, SQL databases, and Git for version control.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleTagManager gtmId="G-DTHW6HPJCP" />
    </html>
  );
}
