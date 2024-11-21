import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectProps {
  image: string;
  title: string;
  url: string;
}

const ProjectCard = ({ image, title, url }: ProjectProps) => {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" passHref>
      <div className="max-w-[250px] w-full bg-zinc-900 rounded-md shadow-md cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out">
        <Image
          src={image}
          alt="Project Image"
          width={400}
          height={400}
          className="rounded-t-md w-full h-auto"
        />
        <p className="p-4 text-center font-semibold text-white">{title}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
