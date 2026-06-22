"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const HeroSection = () => {
  const text = useRef(null);
  const img = useRef(null);
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);
  const follow = useRef(null);

  const tl = gsap.timeline();
  const tb = gsap.timeline();

  useEffect(() => {
    tl.from(img.current, {
      opacity: 0,
      x: -150,
    }).from(c1.current, {
      y: 80,
      opacity: 0,
    });
    tb.from(text.current, {
      opacity: 0,
      y: -150,
    }).from(follow.current, {
      y: -80,
      opacity: 0,
    });
  }, []);

  return (
    <section id="hero" className="h-screen flex items-center bg-linear-to-tl from-primary/10 px-32">
      <div className="w-full h-full flex flex-col justify-between py-26">
        <div></div>
        <div className="">
          <div ref={text} className="text-center text-4xl">
            <p>سلام،</p>
            <p className="my-4">
             من{" "}
              <span className="text-5xl text-primary font-bold">
                امیرحسین کنعانی
              </span>
            </p>
            <p>
              برنامه نویس{" "}
              <span className="text-6xl text-primary font-bold">فول استک</span>{" "}
              هستم!
            </p>
          </div>
        </div>
        <div ref={c1} className="w-5xl mx-auto grid grid-cols-3 gap-6">
          <div className="flex flex-row items-center gap-4 bg-secondary/60 rounded-md p-4">
            <Icon
              icon="stash:telegram"
              className="text-primary"
              width="32"
              height="32"
            />
            <div className="flex flex-col gap2">
              <p className="text-xl font-bold">تلگرام</p>
              <Link href="https://t.me/Amir_h_228" className="">
                Amir_h_228
              </Link>
            </div>
          </div>
          <div
            ref={c2}
            className="flex flex-row items-center gap-4 bg-secondary/60 rounded-md p-4"
          >
            <Icon
              icon="ic:baseline-whatsapp"
              className="text-primary"
              width="32"
              height="32"
            />
            <div className="flex flex-col gap2">
              <p className="text-xl font-bold">واتس‌آپ</p>
              <Link href="" className="">
                09224434057
              </Link>
            </div>
          </div>
          <div
            ref={c3}
            className="flex flex-row items-center gap-4 bg-secondary/60 rounded-md p-4"
          >
            <Icon
              icon="ic:outline-email"
              className="text-primary"
              width="32"
              height="32"
            />
            <div className="flex flex-col gap2">
              <p className="text-xl font-bold">ایمیل</p>
              <Link href="mailto:ah.kanani003@gmail.com" className="">
                ah.kanani003@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-1/3 flex justify-end">
        <div
          ref={img}
          className="w-100 h-160 rounded-full overflow-hidden bg-primary/70 relative"
        >
          <Image
            src="/image/4.png"
            className="absolute bottom-0"
            alt="Amir Hosein"
            width={400}
            height={700}
          />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
