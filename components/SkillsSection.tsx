"use client";

import { Skill, skills } from "@/lib/skills";
import gsap from "gsap";
import React, { useEffect } from "react";

const SkillsSection = () => {
  useEffect(() => {
    document.querySelectorAll(".progress").forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        width: 0,
        duration: 1,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <section id="skills" className="h-screen px-32 py-16">
      <h3 className="text-4xl text-center font-bold">تخصص‌های من</h3>
      <div className="grid grid-cols-2 gap-8 mt-16" dir="ltr">
        {skills.map((skill: Skill) => (
          <div
            key={skill.id}
            className="flex flex-col bg-secondary/30 rounded-xl p-4"
          >
            <div className="w-full h-full flex items-center justify-between">
              <p className="font-bold">{skill.skill}</p>
              <p className="">{skill.percent}%</p>
            </div>
            <div className="progress w-full h-4 bg-secondary rounded-2xl overflow-hidden mt-4">
              <div
                className="h-4 bg-primary transition-all delay-1000"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
