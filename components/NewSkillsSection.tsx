import { newSkills } from "@/lib/skills";

const NewSkillsSection = () => {
  return (
    <section className="h-screen px-32 py-16">
      <h3 id="skills" className="text-4xl text-center font-bold">
        تخصص‌های من
      </h3>
      <div dir="ltr" className="grid grid-cols-2 gap-8 mt-16">
        <div className="w-full h-full border border-[#13FFAA] p-4 rounded-md">
          <h3 className="text-xl font-semibold text-[#13FFAA] mb-4">
            FrontEnd
          </h3>
          <div className=" flex flex-row flex-wrap gap-2">
            {newSkills.frontEnd.map(({ id, skill }) => (
              <span
                key={id}
                className="bg-[#13FFAA] text-[#1E67C6] rounded-xl py-2 px-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full h-full border border-[#13FFAA] p-4 rounded-md">
          <h3 className="text-xl font-semibold text-[#13FFAA] mb-4">BackEnd</h3>
          <div className=" flex flex-row flex-wrap gap-2">
            {newSkills.backEnd.map(({ id, skill }) => (
              <span
                key={id}
                className="bg-[#13FFAA] text-[#1E67C6] rounded-xl py-2 px-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSkillsSection;
