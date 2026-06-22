"use client";

import NavLink from "@/components/NavLink";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Navbar = () => {
  const colors = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(colors, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const border = useMotionTemplate`1px solid ${colors}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${colors}`;
  return (
    <nav className="absolute w-full h-16 flex flex-row items-center justify-center gap-16 px-32 z-50">
      <motion.div
        style={{ border, boxShadow }}
        className="flex flex-row items-center justify-center gap-16 bg-transparent rounded-full px-16 py-2 my-2"
      >
        <NavLink href="#hero">خانه</NavLink>
        <NavLink href="#about">‌درباره‌من</NavLink>
        <NavLink href="#skills">تخصص‌ها</NavLink>
        <NavLink href="#projects">پروژه‌ها</NavLink>
        <NavLink href="#contact">تماس</NavLink>
      </motion.div>
      {/* <div className="flex items-center gap-8">
              <p className="">مرا دنبال کنید...</p>
        <div className="flex items-center gap-4 text-primary">
          <Icon icon="garden:linkedin-stroke-12" width="23" height="23" />
          <Icon icon="gg:instagram" width="25" height="25" />
          <Icon icon="qlementine-icons:facebook-16" width="26" height="26" />
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
