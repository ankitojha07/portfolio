"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
    sticky top-0 z-20
    w-full
    flex flex-col gap-6 p-4 transition-all duration-300
    ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-black"}
  `}
    >
      <ul className="nav flex flex-row gap-2 md:gap-4 lg:gap-8 justify-center lg:justify-end items-center font-semibold md:text-xl text-sm flex-nowrap whitespace-nowrap overflow-x-auto">
        <li>
          <Link href="/">Home</Link>
          <div
            className={`${
              pathname === "/" ? "h-1 bg-teal-600 rounded-full" : " hidden"
            } `}
          ></div>
        </li>
        <li>
          <Link href="/resume">About Me</Link>
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
        <li>
          <Link href="/blogs">Blogs</Link>
          <div
            className={`${
              pathname === "/blogs" ? "h-1 bg-teal-600 rounded-full" : " hidden"
            } `}
          ></div>
        </li>
        <li>
          <Link href="/testimonials">Testimonials</Link>
          <div
            className={`${
              pathname === "/testimonials"
                ? "h-1 bg-teal-600 rounded-full"
                : " hidden"
            } `}
          ></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
