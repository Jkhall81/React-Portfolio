import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jason Hall",
    template: "%s - Software Engineer",
  },
  description: "Web Development Portfolio Website of Jason Hall",
  icons: {
    icon: [{ href: "/favicon.ico", url: "/favicon.ico" }],
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
