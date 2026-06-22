"use client";

import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AuroraAboutSection = () => {
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
      className="relative rotate-180 grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-32 py-16 text-gray-200"
    >
      <div className="-rotate-180">
        <div className="flex flex-row items-center gap-8">
          {/* image */}
          <div className="w-1/3">
            <motion.div
              style={{
                border,
                boxShadow,
              }}
              className="w-100 h-160 rounded-full overflow-hidden bg-transparent relative"
            >
              <Image
                src="/image/4.png"
                className="absolute bottom-0"
                alt="Amir Hosein"
                width={400}
                height={700}
              />
            </motion.div>
          </div>
          {/* text */}
          <div className="w-2/3 h-auto px-6">
            <h3 id="about" className="text-4xl font-bold mb-8">
              درباره‌من
            </h3>
            <p className="text-xl text-base-content/80">
              سلام! من امیرحسین هستم، یک توسعه‌دهنده
              <span className="font-bold text-primary"> فرانت‌اند </span> با بیش
              از یک سال تجربه در یادگیری و فعالیت عملی در دنیای توسعه وب. تمرکز
              اصلی من روی ساخت رابط‌های کاربری تمیز، واکنش‌گرا و کاربرپسند با
              استفاده از React و Tailwind CSS هست.
            </p>
            <p className="text-xl text-base-content/80 mt-4">
              برنامه‌نویسی برای من فقط یه مهارت نیست، یه علاقه واقعیه که مسیر
              آینده‌م رو باهاش می‌سازم. همیشه دنبال یادگیری‌ام واز چالش‌های جدید
              استقبال می‌کنم.
            </p>
            <p className="text-xl text-base-content/80 mt-4">
              در حال حاضر دانشجوی مقطع کارشناسی رشته{" "}
              <motion.span style={{ color }} className="font-bold">
                مهندسی کامپیوتر
              </motion.span>{" "}
              هستم.
            </p>
            <div className="grid grid-cols-3 gap-8 font-bold mt-16">
              <div className="h-40 flex flex-col items-center justify-center gap-2 bg-secondary/60 rounded-md">
                <Icon
                  icon="mynaui:location"
                  className="text-primary"
                  width="48"
                  height="48"
                />
                اردبیل، ایران
              </div>
              <div className="h-40 flex flex-col items-center justify-center gap-2 bg-secondary/60 rounded-md">
                <Icon
                  icon="ic:round-phone"
                  className="text-primary"
                  width="48"
                  height="48"
                />
                <Link href="tel:09337305968">09337305968</Link>
              </div>
              <div className="h-40 flex flex-col items-center justify-center gap-2 bg-secondary/60 rounded-md">
                <Icon
                  icon="ic:outline-email"
                  className="text-primary"
                  width="48"
                  height="48"
                />
                <Link href="mailto:ah.k003@gmail.com" className="">
                  ah.kanani003@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AuroraAboutSection;
