"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const AboutSection = () => {
  const txt1 = useRef(null);
  const img = useRef(null);

  useEffect(() => {
    gsap.from(txt1.current, {
      opacity: 0,
      x: 140,
    });
    gsap.from(img.current, {
      opacity: 0,
      scale: 1.8,
    });
  }, []);

  return (
    <section className="h-screen px-32 py-16">
      <h3 id="about" className="text-4xl text-center font-bold">
        درباره‌من
      </h3>
      <div className="flex flex-row gap-8 mt-16">
        {/* image */}
        <div className="w-1/3 -mt-32">
          <div
            ref={img}
            className="w-100 h-160 rounded-full overflow-hidden bg-transparent relative shadow-[0px_0px_23px_-9px_#6493de]"
          >
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
        <div ref={txt1} className="w-2/3 h-auto px-6">
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
            <span className="font-bold text-primary">مهندسی کامپیوتر</span>{" "}
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
        {/* <div ref={img} className="w-1/3">
          <Image src="/image/3.jpg" className="h-auto" alt="me" width={300} height={500} />
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
