"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: Props) => {
  const pathName = usePathname();
  const isActive =
    href === "/"
      ? pathName === "/"
      : pathName === href || pathName.startsWith("/" + href);

  return (
    <Link
      href={href}
      className={` ${
        isActive
          ? "transition-all border-b-3 border-primary text-primary font-bold p-1"
          : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
