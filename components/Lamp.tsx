"use client";

import { useEffect } from "react";
import { LampContainer } from "./ui/LampContainer";
import { motion } from "framer-motion";

interface Props {
  welcome: string;
  setWelcome: (value: string) => void;
}

export const Lamp = ({ welcome, setWelcome }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      setWelcome("hidden");
    }, 3000);
  }, []);

  return (
    <div className={`${welcome}`}>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <span className="web-master">
            Welcome <br />
          </span>
        </motion.h1>
      </LampContainer>
    </div>
  );
};
