import React from "react";
import AboutSection from "./AboutSection";

const HeroSectionPro = () => {
  return (
    <section className="h-[200vh] relative bg-radial from-accent/50 via-accent to-transparent">
      <div className="w-256 h-256 absolute top-64 left-64 -z-1 rounded-full bg-radial from-accent/50 via-accent to-transparent shadow-xl shadow-accent"></div>
      {/* Hero Section */}
      <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <p className="text-5xl">
            سلام، من{" "}
            <span className="text-6xl text-[#00D2FF]">امیرحسین کنعانی </span>
            هستم{" "}
          </p>
          <p className="mt-4">
            من یک توسعه‌دهنده فول‌استک هستم که در Next.js، Nest.js و React تخصص
            دارم.
          </p>
          <p className="">
            به ساخت وب‌اپلیکیشن‌های مدرن، سریع و مقیاس‌پذیر علاقه‌مندم و همیشه
            در حال یادگیری فناوری‌های جدید و چالش‌برانگیز هستم.
          </p>
        </div>
      </div>
      <div className="">
        <AboutSection />
      </div>
    </section>
  );
};

export default HeroSectionPro;
