import Image from "next/image";
import React from "react";

interface ProjectPropes {
  image: string;
  title: string;
}

const ProjectCard = ({ image, title }: ProjectPropes) => {
  return (
    <div className="max-w-[250px] w-full bg-zinc-900 rounded-md shadow-md">
      <Image
        src={image}
        alt="Ankit Ojha image"
        width={400}
        height={400}
        className="rounded-t-md w-full h-auto"
      />
      <p className="p-4 text-center font-semibold text-white">{title}</p>
    </div>
  );
};

export default ProjectCard;
