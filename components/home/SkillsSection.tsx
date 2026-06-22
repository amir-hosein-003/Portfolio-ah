"use client";

import { newSkills } from "@/lib/skills";
import { useTranslations } from "next-intl";

const SkillsSection = () => {
  const t = useTranslations("skills");

  return (
    <section className="h-screen py-16 px-32">
      <h3 id="skills" className="text-4xl text-center font-bold">
        {t("title")}
      </h3>
      <div className="grid grid-cols-2 gap-16 mt-6" dir="ltr">
        <div className="w-full mt-8">
          <h3 className="text-2xl font-semibold border-b border-b-primary pb-4 my-6">
            FrontEnd
          </h3>
          <div className="grid grid-cols-2 gap-x-16 py-2">
            {newSkills.frontEnd.map(({ id, skill }) => (
              <div key={id} className="flex flex-row items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-xl text-primary">{skill}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-8">
          <h3 className="text-2xl font-semibold border-b border-b-primary pb-4 my-6">
            BackEnd
          </h3>
          <div className="grid grid-cols-2 gap-x-16 py-2">
            {newSkills.backEnd.map(({ id, skill }) => (
              <div key={id} className="flex flex-row items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-xl text-primary">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
