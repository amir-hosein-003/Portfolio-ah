import AboutSection from "@/components/home/AboutSection";
// import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
// import NewSkillsSection from "@/components/NewSkillsSection";
import AdvanceCard from "@/components/AdvanceCard";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";

export default function Home() {
  return (
    <div
      className="relative before:absolute before:top-0 before:left-0 before:w-full bg-[#020617]
      before:h-full before:content-[''] before:opacity-[0.03] before:z-10 before:pointer-events-none
      before:bg-[url('https://www.ui-layouts.com/noise.gif')]"
    >
      <HeroSection />
      <AboutSection />
      <AdvanceCard />
      {/* <NewSkillsSection /> */}
      <SkillsSection />
      {/* // <SkillsSection /> */}
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
