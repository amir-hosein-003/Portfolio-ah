import Link from "next/link";
import Image from "next/image";

import Icon from "./ui/Icon";

const AboutSection = () => {
  return (
    <section
      id="about"
      dir="ltr"
      className="relative grid min-h-screen rotate-180 bg-[radial-gradient(125%_140%_at_50%_0%,#020617_50%,#13FFAA)] place-content-center overflow-hidden bg-gray-950 px-32 py-16 text-gray-200"
    >
      <div className="-rotate-180">
        <div className="flex flex-row items-center gap-8">
          {/* image */}
          <div className="w-1/3">
            <div className="w-100 h-160 bg-base-200/20 border border-primary shadow-[0px_4px_24px_#13FFAA] rounded-full overflow-hidden relative">
              <Image
                src="/image/4.png"
                className="absolute bottom-0"
                alt="Amir Hosein"
                width={400}
                height={700}
              />
            </div>
          </div>
          {/* text */}
          <div className="w-2/3 h-auto px-6">
            <h3 className="text-4xl font-bold">About me</h3>
            <p className="text-base-content/70 mt-4">Get To Know Me Better</p>
            <p className="text-lg leading-relaxed text-base-content/70 mt-8">
              Hi, I'm Amirhosein Kanani. a passionate Full-Stack Developer who
              loves building creative, user-focused digital experiences. I
              specialize in modern web and mobile technologies like React, React
              Native, Next.js, and NestJS, and I enjoy turning complex problems
              into elegant, efficient solutions. With over 2 years of experience
              in both front-end and back-end development, I'm always looking to
              learn new tools, contribute to meaningful projects, and grow as a
              developer. When I'm not coding, you might find me exploring new
              technologies, working on side projects, or learning something new.
            </p>
            <div className="grid grid-cols-3 gap-8 font-bold mt-16">
              <div className="h-40 flex flex-col items-center justify-center gap-2 bg-base-200/20 border-2 border-[#71717120] rounded-md transition-transform hover:scale-[1.05] hover:bg-primary/5">
                <Icon
                  icon="mynaui:location"
                  className="text-primary"
                  width="48"
                  height="48"
                />
                Ardebil, Iran
              </div>
              <Link
                href="tel:09337305968"
                className="h-40 flex flex-col items-center justify-center gap-2 bg-base-200/20 border-2 border-[#71717120] rounded-md transition-transform hover:scale-[1.05] hover:bg-primary/5"
              >
                <Icon
                  icon="ic:round-phone"
                  className="text-primary"
                  width="48"
                  height="48"
                />
                <p>09337305968</p>
              </Link>
              <Link
                href="mailto:ah.k003@gmail.com"
                className="h-40 flex flex-col items-center justify-center gap-2 bg-base-200/20 border-2 border-[#71717120] rounded-md transition-transform hover:scale-[1.05] hover:bg-primary/5"
              >
                <Icon
                  icon="ic:outline-email"
                  className="text-primary"
                  width="48"
                  height="48"
                />
                <p className="">ah.kanani003@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
