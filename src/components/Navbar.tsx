"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-6">
      <ul className="nav flex flex-row gap-4 md:gap-8 justify-center md:justify-end items-center font-bold md:text-xl">
        <li>
          <Link href="/">About</Link>
          <div
            className={`${
              pathname === "/" ? "h-1 bg-teal-600 rounded-full" : " hidden"
            } `}
          ></div>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
          <div
            className={`${
              pathname === "/resume"
                ? "h-1 bg-teal-600 rounded-full"
                : " hidden"
            } `}
          ></div>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
          <div
            className={`${
              pathname === "/projects"
                ? "h-1 bg-teal-600 rounded-full"
                : " hidden"
            } `}
          ></div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
