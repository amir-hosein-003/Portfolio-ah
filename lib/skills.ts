export type Skill = {
  id: number;
  skill: string;
  percent: number;
};

export const skills: Skill[] = [
  {
    id: 1,
    skill: "HTML",
    percent: 90,
  },
  {
    id: 2,
    skill: "CSS",
    percent: 80,
  },
  {
    id: 3,
    skill: "JAVASCRIPT",
    percent: 70,
  },
  {
    id: 4,
    skill: "TYPESCRIPT",
    percent: 50,
  },
  {
    id: 5,
    skill: "REACT.JS",
    percent: 60,
  },
  {
    id: 6,
    skill: "NEXT.JS",
    percent: 50,
  },
  {
    id: 7,
    skill: "TAILWINDCSS",
    percent: 80,
  },
  {
    id: 8,
    skill: "NODE.JS",
    percent: 40,
  },
];

export type Skills = {
  [key: string]: {
    id: number;
    skill: string;
  }[];
};

export const newSkills: Skills = {
  frontEnd: [
    { id: 1, skill: "React.js" },
    { id: 2, skill: "Next.js" },
    { id: 3, skill: "Tailwind css" },
    { id: 4, skill: "GSAP" },
    { id: 5, skill: "Redux toolkit" },
    { id: 6, skill: "TanStack query" },
    { id: 7, skill: "DaisyUI" },
    { id: 8, skill: "Shadcn" },
    { id: 9, skill: "React Hook Form" },
    { id: 10, skill: "Zod" },
    { id: 11, skill: "Axios" },
  ],
  backEnd: [
    { id: 1, skill: "Node.js" },
    { id: 2, skill: "Nest.js" },
    { id: 3, skill: "MongoDB" },
    { id: 4, skill: "PostgreSQL" },
    { id: 5, skill: "Mongoose" },
    { id: 6, skill: "Typeorm" },
    { id: 7, skill: "REST API" },
    { id: 8, skill: "GraphQL" },
    { id: 9, skill: "JWT" },
    { id: 10, skill: "Bcrypt" },
    { id: 11, skill: "WebSocket" },
  ],
  tools: [
    { id: 1, skill: "Git & GitHub" },
    { id: 2, skill: "Cloudinary" },
  ],
};
