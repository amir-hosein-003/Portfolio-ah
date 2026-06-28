import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="bg-[radial-gradient(125%_140%_at_50%_0%,#020617_50%,#13FFAA)] relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-3xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          Hi! I'm Amir Hosein Kanani
        </h1>
        <p className="my-6 max-w-xl text-center text-base-content/70 leading-relaxed md:text-lg md:leading-relaxed">
          I am a full-stack developer specializing in Next.js, Nest.js, and
          React. I am passionate about building modern, fast, and scalable web
          applications and am always eager to learn new and challenging
          technologies.
        </p>
        <div className="flex flex-row items-center gap-6">
          <Link
            href="#skills"
            className={`group relative flex flex-row w-fit items-center gap-1.5 border border-primary shadow-[0px_4px_24px_#13FFAA60] rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-transform hover:bg-gray-950/50 hover:scale-[1.015] hover:shadow-[0px_4px_24px_#13FFAA]`}
          >
            My skills
            <FiArrowRight className="transition-transform group-hover:rotate-45 group-active:-rotate-12" />
          </Link>
          <Link
            href="#contact"
            className={`group relative flex flex-row w-fit items-center gap-1.5 border border-primary shadow-[0px_4px_24px_#13FFAA60] rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-transform hover:bg-gray-950/50 hover:scale-[1.015] hover:shadow-[0px_4px_24px_#13FFAA]`}
          >
            Contact me
            <FiArrowRight className="transition-transform group-hover:rotate-45 group-active:-rotate-12" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
