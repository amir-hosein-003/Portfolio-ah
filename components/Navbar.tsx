import Link from "next/link";

import Icon from "./ui/Icon";

const Navbar = () => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <section
      dir="ltr"
      className="absolute w-full flex flex-row items-center justify-center bg-transparent p-0 mt-4 z-50"
    >
      <div
        className={`w-xl flex flex-row items-center justify-around border border-primary shadow-[0px_4px_24px_#13FFAA60] rounded-full bg-[#020617] p-4`}
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-primary">
            {link.label}
          </Link>
        ))}
      </div>
      {/* <div className="flex flex-row items-center justify-around gap-4 border border-primary shadow-[0px_4px_24px_#13FFAA60] rounded-l-full border-r-0 bg-[#020617] p-4">
        <Icon
          icon="skill-icons:github-light"
          className="bg-blend-saturation"
          width={32}
          height={32}
        />
        <Icon
          icon="skill-icons:linkedin"
          className="bg-blend-saturation"
          width={32}
          height={32}
        />
        <Icon
          icon="logos:telegram"
          className="bg-blend-saturation"
          width={32}
          height={32}
        />
      </div> */}
    </section>
  );
};

export default Navbar;
