export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  tools: string[];
  company: string;
  year: number;
  stack: string;
  visibility: string;
  url?: string;
}
export const projects: ProjectInterface[] = [
  {
    title: "Etutor - Online Learning Platform",
    description:
      "ETutor Online is a full-stack Udemy-like platform built with Next.js + Server Actions, where users can be both students and instructors. Students purchase and enroll in courses, instructors upload and manage content. Features include Next-Auth authentication, payments, and responsive UI with Tailwind. MongoDB + Mongoose provided flexible data modeling. A collaborative Agile team project with Git version control.",
    image: "/image/etutor-online-learning.png",
    tools: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Server Actions",
      "DaisyUI",
      "Shadcn",
      "React Hook Form",
      "NextAuth",
      "Recharts",
      "TypeScript",
      "Cloudinary",
    ],
    company: "Collaborative Team Project",
    year: 2025,
    stack: "Full-Stack",
    visibility: "Public",
    url: "https://github.com/AmirmAfzal/Etutor_Online_Learning",
  },
  {
    title: "Ai Language Learning Saas",
    description:
      "AI Language Tutor is a scenario-based language learning platform where users choose real-life contexts (e.g., restaurant, fast food, coffee shop) and an AI agent teaches the target language within that situation. I developed the entire frontend using Next.js, consuming a separate backend API. The interface features scenario selection, real-time chat UI, responsive design with Tailwind CSS, and progress tracking. A collaborative team project with a focus on frontend architecture and seamless API integration.",
    image: "/image/ai-language-landing.png",
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Redux Toolkit",
      "Cloudinary",
      "Axios",
    ],
    company: "Collaborative Team Project",
    year: 2025,
    stack: "Front-End",
    visibility: "Private",
  },
  {
    title: "Online Service Platform",
    description:
      "A full-stack online service platform built with Next.js + Server Actions, currently under development. I am the developer behind the project, handling everything from architecture to UI. Features include MongoDB with Mongoose, shadcn/ui, and role-based dashboards for both admins and users. Focused on scalability, clean code, and modern UX",
    image: "/image/online-services.png",
    tools: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Shadcn",
      "React Hook Form",
      "Zod",
      "Recharts",
      "NextAuth",
      "Server Actions",
    ],
    company: "Personal Project",
    year: 2025,
    stack: "Full-Stack",
    visibility: "Private",
  },
  {
    title: "RESTful Appointment Service with NestJS & MongoDB",
    description:
      "A RESTful appointment scheduling API built with NestJS, MongoDB, and JWT authentication. Features include user registration/login with role-based access (admin, provider, client), service management, appointment booking/cancellation, and interactive Swagger documentation. The API implements secure authentication with JWT tokens, data validation, and follows modular architecture patterns for scalability and maintainability.",
    image: "",
    tools: [
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Swagger",
      "Jest",
    ],
    company: "Personal Project",
    year: 2025,
    stack: "Back-End",
    visibility: "Public",
    url: "https://github.com/amir-hosein-003/nest-appointments-api",
  },
];
