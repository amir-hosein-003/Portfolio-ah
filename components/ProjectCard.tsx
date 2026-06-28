import Image from "next/image";
import Link from "next/link";

import { ProjectInterface } from "@/lib/projects";

import Icon from "./ui/Icon";

const ProjectCard = (props: ProjectInterface) => {
  return (
    <Link
      href={props.url || "/"}
      target={props.url ? "_blank" : "_self"}
      className="from-base-200 to-primary/20 overflow-hidden rounded-3xl bg-linear-to-r"
    >
      <div className="flex flex-row items-center justify-between gap-4 px-4 pt-4 lg:pt-16 lg:px-16">
        <div className="text-primary flex flex-row items-center gap-4 text-sm font-semibold">
          <span>{props.company}</span>
          <div className="bg-primary h-1 w-1 rounded-full"></div>
          <span>{props.year}</span>
          <div className="bg-primary h-1 w-1 rounded-full"></div>
          <span>{props.stack}</span>
        </div>
        <div className="flex flex-row items-center gap-2 text-primary text-sm font-semibold">
          {props.visibility === "Private" ? (
            <Icon icon="uil:lock" width={20} height={20} />
          ) : (
            <Icon icon="uil:unlock" width={20} height={20} />
          )}
          <p className="">{props.visibility}</p>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 gap-4 ${props.image ? "lg:grid-cols-2" : "lg:grid-cols-1"}`}
      >
        <div
          className={`order-2 flex flex-col px-4 py-4 md:pb-16 lg:order-1 ${props.image ? "md:pl-16" : "md:px-16"}`}
        >
          <h3 className="mt-4 text-2xl font-semibold md:text-3xl lg:mt-8">
            {props.title}
          </h3>
          <p className="text-base-content/80 mt-4 text-xs sm:text-sm md:text-base">
            {props.description}
          </p>
          <div className="divider my-4 lg:my-8"></div>
          <div className="flex flex-row flex-wrap gap-2">
            {props.tools.map((tool, index) => (
              <div
                className="btn btn-soft btn-primary btn-sm md:btn-md rounded-full"
                key={index}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 flex w-full items-center justify-center lg:order-2">
          {props.image && (
            <Image
              height={1000}
              width={1800}
              src={props.image}
              alt={props.title}
              className="m-0 w-full rounded-b-none object-cover lg:-mr-36 lg:-mb-36 lg:rounded-3xl"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
