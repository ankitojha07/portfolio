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
    <div className="flex flex-col justify-center items-center gap-5">
      <Image
        src="/images/Ankit-ojha.png"
        alt="Ankit Ojha image"
        width={200}
        height={200}
        className="rounded-full border border-gray-800"
      />
      <h1 className="font-bold text-2xl font-Doto">Ankit Ojha</h1>
      <Tags title="Full-Stack Web Developer" icon={""} />
      <Link
        href="https://drive.google.com/file/d/1LcNJrA7-XtpRLrCHmkWIoOE01AQHyHRq/view?usp=sharing"
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
    </div>
  );
};

export default Sidebar;
