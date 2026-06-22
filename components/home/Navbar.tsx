"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from "next/navigation";
import { redirect } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import NavLink from "../NavLink";

const Navbar = () => {
  const { locale } = useParams();
  const t = useTranslations("navbar");

  return (
    <section
      dir={locale === "fa" ? "rtl" : "ltr"}
      className="absolute w-full flex flex-row items-center justify-between bg-transparent p-0 mt-4 z-50"
    >
      <div
        className={`w-xl flex flex-row items-center justify-around shadow-[0px_4px_24px_#13FFAA] ${
          locale === "fa" ? "rounded-l-full" : "rounded-r-full"
        } bg-[#020617] p-4`}
      >
        <NavLink href="#hero">{t("home")}</NavLink>
        <NavLink href="#about">{t("about")}</NavLink>
        <NavLink href="#skills">{t("skills")}</NavLink>
        <NavLink href="#projects">{t("projects")}</NavLink>
        <NavLink href="#contact">{t("contact")}</NavLink>
      </div>
      <div
        className={`w-32 min-h-14 ${
          locale === "fa"
            ? "-translate-x-20 hover:translate-x-0 rounded-r-full"
            : "translate-x-20 hover:-translate-x-0 rounded-l-full"
        } transition-all relative flex flex-row items-center justify-around shadow-[0px_4px_24px_#13FFAA] bg-secondary p-4`}
      >
        <Icon
          icon="mynaui:cog-one"
          className="absolute inset-3 text-primary cursor-pointer"
          width="32"
          height="32"
        />
        <div
          className={`flex flex-row items-center justify-around w-full ${
            locale === "fa" ? "mr-10" : "ml-10"
          }`}
        >
          <button
            onClick={() =>
              redirect({ href: "/", locale: locale === "fa" ? "en" : "fa" })
            }
            className="text-primary cursor-pointer"
          >
            {locale === "fa" ? "EN" : "FA"}
          </button>
          <Icon
            icon="mynaui:sun-medium"
            className="text-primary cursor-pointer"
            width="24"
            height="24"
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
