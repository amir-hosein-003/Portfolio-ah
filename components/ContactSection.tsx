"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const ContactSection = () => {
  const [textLength, setTextLength] = useState<number>(0);

  const { locale } = useParams();
  const t = useTranslations("contact");

  return (
    <section
      dir={locale === "fa" ? "rtl" : "ltr"}
      id="contact"
      className="h-screen px-32 py-16"
    >
      <h3 className="text-4xl text-center font-bold">{t("title")}</h3>
      <p className="text-center text-base-content/70 mt-4">{t("subTitle")}</p>
      <div className="flex items-center justify-center mt-28">
        <div className="">
          <div className="w-2xl flex flex-col gap-6">
            <div className="w-full flex flex-row items-center gap-6">
              <input
                type="text"
                placeholder={t("namePlaceholder")}
                className="w-full border border-[#71717120] rounded-xl focus:border-primary outline-0 p-4"
              />
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="w-full border border-[#71717120] rounded-xl focus:border-primary outline-0 p-4"
              />
            </div>
            <input
              type="email"
              placeholder={t("subjectPlaceholder")}
              className="border border-[#71717120] rounded-xl focus:border-primary outline-0 p-4"
            />
            <span className="relative w-full">
              <textarea
                onChange={(e) => setTextLength(e.target.value.length)}
                placeholder={t("messagePlaceholder")}
                maxLength={300}
                className="min-h-32 w-full border border-[#71717120] rounded-xl focus:border-primary outline-0 p-4"
              />
              <span
                className={`text-sm text-base-content/80 absolute ${
                  locale === "fa" ? "left-4" : "right-4"
                } top-2`}
              >
                300/{textLength}
              </span>
            </span>
            <button type="submit" className="btn btn-primary btn-lg rounded-xl">
              {t("submitBtn")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
