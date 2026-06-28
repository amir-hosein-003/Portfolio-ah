import { projects } from "@/lib/projects";

import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-32 py-16">
      <h3 className="text-4xl text-center font-bold">My Projects</h3>
      <p className="text-center text-base-content/70 mt-4">
        You can see some of my projects I have done in the past.
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
