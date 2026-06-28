import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
