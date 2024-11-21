"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-6">
      <ul className="nav flex flex-row gap-8 justify-end items-center font-bold text-xl">
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
