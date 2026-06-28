import { skills } from "@/lib/skills";

import SkillCard from "./SkillCard";

const SkillsSection = () => {

  return (
    <section id="skills" className="h-screen py-16 px-32">
      <h3 className="text-4xl text-center font-bold">My Skills</h3>
      <p className="text-center text-base-content/70 mt-4">
        All these skills have been developed through years of hands-on
        experience.
      </p>

      <div className="mt-8 md:mt-16 grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard {...skill} key={index} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
