"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const colors = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(colors, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${colors})`;
  const border = useMotionTemplate`1px solid ${colors}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${colors}`;
  const color = useMotionTemplate`${colors}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          سلام،
          <br /> من{" "}
          <motion.span style={{ color }} className="">
            امیرحسین کنعانی{" "}
          </motion.span>
          هستم{" "}
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          من یک توسعه‌دهنده فول‌استک هستم که در Next.js، Nest.js و React تخصص
          دارم. به ساخت وب‌اپلیکیشن‌های مدرن، سریع و مقیاس‌پذیر علاقه‌مندم و
          همیشه در حال یادگیری فناوری‌های جدید و چالش‌برانگیز هستم.
        </p>
        <div className="flex flex-row items-center gap-6">
          <motion.a
            href="#skills"
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            تخصص های من
            <FiArrowLeft className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.a>
          <motion.a
            href="#contact"
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            ارتباط بامن
            <FiArrowLeft className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.a>
        </div>
      </div>

      {/* <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div> */}
    </motion.section>
  );
};
