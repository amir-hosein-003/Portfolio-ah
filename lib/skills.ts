export interface SkillInterface {
  name: string;
  tools: string[];
}
export const skills: SkillInterface[] = [
  {
    name: "Frontend Development",
    tools: [
      "React.js",
      "Next.js",
      "ReactNative.js",
      "Tailwind css",
      "GSAP",
      "Redux Toolkit",
      "TanStack Query",
      "DaisyUI",
      "Shadcn",
      "React Hook Form",
      "Axios",
    ],
  },
  {
    name: "Backend Development",
    tools: [
      "Node.js",
      "NestJS",
      // "Express.js",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Typeorm",
      "REST API",
      "WebSocket",
      "Zod",
      "JWT",
      "Bcrypt",
    ],
  },
  {
    name: "Fullstack & Tools",
    tools: ["Git & GitHub", "Vercel", "Docker", "Cloudinary"],
  },
];
