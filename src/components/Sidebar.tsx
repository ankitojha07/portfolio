"use client";
import React from "react";
import Image from "next/image";
import Tags from "./Tags";
import SocialIcons from "./SocialIcons";
import ContactCard from "./ContactCard";
import Button from "./Button";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";

const Sidebar = () => {
  const handleMailClick = () => {
    const mailToUrl = (window.location.href = "mailto:ankitojha1409@gmail.com");
    window.open(mailToUrl, "_blank");
  };

  return (
    <main className="flex w-full overflow-hidden justify-center items-center h-screen">
      <section className="flex flex-col justify-center items-center gap-4">
        <Image
          src="/images/a3.jpeg"
          alt="Ankit Ojha image"
          width={300}
          height={100}
          className="rounded-full border border-gray-600"
        />
        <h1 className="font-bold text-3xl font-Doto">Ankit Ojha</h1>
        <Tags title="Solution Engineer (FDE)" icon={""} />
        <Link
          href="https://drive.google.com/file/d/1gcXVbEX02NIg7qdfqmFn7TwqtyaMB8lD/view?usp=sharing"
          target="_blank"
          className="w-full"
        >
          <Tags title="Download Resume" icon={<IoMdDownload />} />
        </Link>
        <SocialIcons />
        <ContactCard />
        <div onClick={handleMailClick} className="w-full">
          <Button label="Email Me" />
        </div>
        {/* <Button label="Light UI" /> */}
      </section>
    </main>
  );
};

export default Sidebar;
