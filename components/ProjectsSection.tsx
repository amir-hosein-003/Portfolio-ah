"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { projects } from "@/lib/projects";
import ProjectCard from "@/components/home/ProjectCard"

const ProjectsSection = () => {
  const t = useTranslations("projects");

  return (
    <section className="px-32 py-16">
      <h3 id="projects" className="text-4xl text-center font-bold">
        {t("title")}
      </h3>
      <p className="text-center text-base-content/70 mt-4">
        {t("subTitle")}
      </p>
      {/* <div className="grid grid-cols-3 gap-8 mt-16" dir="ltr">
        {projects.map((project: Project) => (
          <div key={project.id} className="bg-accent/8 rounded-xl p-4">
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={400}
            />
            <p className="font-bold mt-2">{project.title}</p>
            <p className="text-base-content/80 mt-4">{project.frameWorks}</p>
          </div>
        ))}
      </div> */}
       <div className="mt-10 flex w-full flex-col gap-8 md:mt-16">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
