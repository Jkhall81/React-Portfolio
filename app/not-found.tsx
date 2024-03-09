"use client";
import Link from "next/link";
import Image from "next/image";
import { roboto } from "@/lib/fonts";
import { lusitana } from "@/lib/fonts";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/utils";

// TODO: style this

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Image
        src="/background/not-found2.jpg"
        fill
        quality={100}
        alt="japanese landscape painting"
        className="object-cover"
      />
      <motion.div
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className={`${roboto.className} z-10 text-white flex flex-col justify-center items-center`}
      >
        <h2 className="text-orange-300 text-3xl font-bold mb-6">
          404 Not Found
        </h2>
        <p className={`${lusitana.className} text-2xl font-semibold mb-6`}>
          Could not find request resource!
        </p>
        <Link
          className="text-orange-300 cursor-pointer hover:text-sky-700 text-2xl"
          href="/"
        >
          Return Home
        </Link>
      </motion.div>
      <div className="w-full h-screen top-0 left-0 absolute bg-black/30 bg-gradient-to-r from-black"></div>
    </div>
  );
}
