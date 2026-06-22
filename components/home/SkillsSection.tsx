"use client";

import { useTranslations } from "next-intl";

import { skills } from "@/lib/skills";

import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const t = useTranslations("skills");

  return (
    <section className="h-screen py-16 px-32">
      <h3 id="skills" className="text-4xl text-center font-bold">
        {t("title")}
      </h3>
      <p className="text-center text-base-content/70 mt-4">{t("subTitle")}</p>

      <div
        dir="ltr"
        className="mt-8 md:mt-16 grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {skills.map((skill, index) => (
          <SkillCard {...skill} key={index} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
