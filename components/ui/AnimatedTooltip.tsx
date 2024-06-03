"use client";

import React, { ReactNode, useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Props {
  children: ReactNode;
  name: string;
  index: number;
  color: string;
}

export const AnimatedTooltip = ({ children, name, index, color }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  return (
    <>
      <div
        className="relative flex justify-center group"
        key={name}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 flex text-xs items-center justify-center rounded-md bg-black z-50 shadow-xl mx-auto py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] " />
              <div className="absolute w-[80%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px]" />
              <div
                className="text-2xl font-bold relative z-30"
                style={{
                  backgroundImage: `linear-gradient(to right, ${color}, white)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {name}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {children}
      </div>
    </>
  );
};
