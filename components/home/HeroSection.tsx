"use client";

import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

// const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const HeroSection = () => {
  const { locale } = useParams();
  const t = useTranslations("heroSection");

  return (
    <section className="bg-[radial-gradient(125%_125%_at_50%_0%,#020617_50%,#13FFAA)] relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          {t("title")}
        </h1>
        {/* <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          سلام،
          <br /> من <span className="text-primary">امیرحسین کنعانی </span>
          هستم{" "}
        </h1> */}
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          {t("about")}
        </p>
        {/* <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          من یک توسعه‌دهنده فول‌استک هستم که در Next.js، Nest.js و React تخصص
          دارم. به ساخت وب‌اپلیکیشن‌های مدرن، سریع و مقیاس‌پذیر علاقه‌مندم و
          همیشه در حال یادگیری فناوری‌های جدید و چالش‌برانگیز هستم.
        </p> */}
        <div className="flex flex-row items-center gap-6">
          <Link
            href="#skills"
            className={`group relative flex ${
              locale === "fa" ? "flex-row" : "flex-row-reverse"
            } w-fit items-center gap-1.5 border border-primary shadow-[0px_4px_24px_#13FFAA] rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 hover:scale-[1.015]`}
          >
            {t("skillsBtn")}
            {locale === "fa" ? (
              <FiArrowLeft className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            ) : (
              <FiArrowRight className="transition-transform group-hover:rotate-45 group-active:-rotate-12" />
            )}
          </Link>
          <Link
            href="#contact"
            className={`group relative flex ${
              locale === "fa" ? "flex-row" : "flex-row-reverse"
            } w-fit items-center gap-1.5 border border-primary shadow-[0px_4px_24px_#13FFAA] rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 hover:scale-[1.015]`}
          >
            {t("contactBtn")}
            {locale === "fa" ? (
              <FiArrowLeft className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            ) : (
              <FiArrowRight className="transition-transform group-hover:rotate-45 group-active:-rotate-12" />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
