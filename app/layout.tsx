import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const vazir = localFont({
  src: "../public/fonts/Vazir.ttf",
  weight: "600",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Amir Hosein Kanani",
  description:
    "I`m Full-Stack Developer(React.js, Next.js, Nest.js, TypeScript...).",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  return (
    <html lang={locale === "fa" ? "fa" : "en"}>
      <body
        dir={locale === "fa" ? "rtl" : "ltr"}
        className={`${locale === "fa" ? vazir.className : poppins.variable} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
