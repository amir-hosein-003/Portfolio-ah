"use client";

import { useTranslations } from "next-intl";

import { projects } from "@/lib/projects";

import ProjectCard from "./ProjectCard"

const ProjectsSection = () => {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="px-32 py-16">
      <h3 className="text-4xl text-center font-bold">
        {t("title")}
      </h3>
      <p className="text-center text-base-content/70 mt-4">
        {t("subTitle")}
      </p>
       <div className="mt-10 flex w-full flex-col gap-8 md:mt-16">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
