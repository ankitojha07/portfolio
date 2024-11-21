import React from "react";
import Image from "next/image";
import Tags from "./Tags";
import SocialIcons from "./SocialIcons";
import ContactCard from "./ContactCard";
import Button from "./Button";

const Sidebar = () => {
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
      <Tags title="Web Developer" />
      <Tags title="Download Resume" />
      <SocialIcons />
      <ContactCard />
      <Button label="Email Me" />
      <Button label="Light UI" />
    </div>
  );
};

export default Sidebar;
