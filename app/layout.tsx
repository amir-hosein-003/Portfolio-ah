import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const vazir = localFont({
  src: "../public/fonts/Vazir.ttf",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Amir Hosein Kanani",
  description:
    "I`m Full-Stack Developer(React.js, Next.js, Nest.js, TypeScript...).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fa">
      <body dir="rtl" className={`${vazir.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
