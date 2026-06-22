"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const { locale } = useParams();
  const t = useTranslations("about");

  return (
    <section
      dir={locale === "fa" ? "rtl" : "ltr"}
      className="relative grid min-h-screen rotate-180 bg-[radial-gradient(125%_140%_at_50%_0%,#020617_50%,#13FFAA)] place-content-center overflow-hidden bg-gray-950 px-32 py-16 text-gray-200"
    >
      <div className="-rotate-180">
        <div className="flex flex-row items-center gap-8">
          {/* image */}
          <div className="w-1/3">
            <div className="w-100 h-160 bg-base-200/20 border border-primary shadow-[0px_4px_24px_#13FFAA] rounded-full overflow-hidden bg-transparent relative">
              <Image
                src="/image/4.png"
                className="absolute bottom-0"
                alt="Amir Hosein"
                width={400}
                height={700}
              />
            </div>
          </div>
          {/* text */}
          <div className="w-2/3 h-auto px-6">
            <h3 id="about" className="text-4xl font-bold">
              {t("title")}
            </h3>
            <p className="text-base-content/70 mt-4">{t("subTitle")}</p>
            <p className="text-xl text-base-content/80 mt-8">
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
              <span className="font-bold text-primary">مهندسی کامپیوتر</span>{" "}
              هستم.
            </p>
            <div className="grid grid-cols-3 gap-8 font-bold mt-16">
              <div className="h-40 flex flex-col items-center justify-center gap-2 bg-base-200/20 border-2 border-[#71717120] rounded-md transition-transform hover:scale-[1.05] hover:bg-primary/5">
                <Icon
                  icon="mynaui:location"
                  className="text-primary"
                  width="48"
                  height="48"
                />
                {t("location")}
              </div>
              <Link
                href="tel:09337305968"
                className="h-40 flex flex-col items-center justify-center gap-2 bg-base-200/20 border-2 border-[#71717120] rounded-md transition-transform hover:scale-[1.05] hover:bg-primary/5"
              >
                <Icon
                  icon="ic:round-phone"
                  className="text-primary"
                  width="48"
                  height="48"
                />
                <p>09337305968</p>
              </Link>
              <Link
                href="mailto:ah.k003@gmail.com"
                className="h-40 flex flex-col items-center justify-center gap-2 bg-base-200/20 border-2 border-[#71717120] rounded-md transition-transform hover:scale-[1.05] hover:bg-primary/5"
              >
                <Icon
                  icon="ic:outline-email"
                  className="text-primary"
                  width="48"
                  height="48"
                />
                <p className="">ah.kanani003@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
