import ProjectCard from "@/components/ProjectCard";
import React from "react";

const page = () => {
  const projectData = [
    {
      image: "/project-cards.png",
      title: "Full-stack e-commerce",
      url: "https://e-commerce-ankit.vercel.app/",
    },
    {
      image: "/project-cards.png",
      title: "Notes Maker",
      url: "https://note-maker-92v7.onrender.com/",
    },
    {
      image: "/project-cards.png",
      title: "Grammarly Live",
      url: "https://grammarly-live.vercel.app/",
    },
    {
      image: "/project-cards.png",
      title: "GeeksforGeeks-LPU Website",
      url: "https://geeksforgeeks-lpu.netlify.app/",
    },
    {
      image: "/project-cards.png",
      title: "Covid Tracker",
      url: "https://github.com/ankitojha07/covid19-tracker-summer-training-project",
    },
    {
      image: "/project-cards.png",
      title: "Weather App",
      url: "https://github.com/ankitojha07/nextJs-weatherApp",
    },
    {
      image: "/project-cards.png",
      title: "Digital Resume",
      url: "https://ankitojha-resume.netlify.app/",
    },
    {
      image: "/project-cards.png",
      title: "E-commerce UI - React.js",
      url: "https://shop-by-choice.netlify.app/",
    },
    {
      image: "/project-cards.png",
      title: "Responsive Dashboard",
      url: "https://github.com/ankitojha07/Dashboard-React",
    },
    {
      image: "/project-cards.png",
      title: "Portfolio",
      url: "https://ankitojha07.github.io/ankitojha/",
    },
    {
      image: "/project-cards.png",
      title: "Travel Mate Android App",
      url: "https://github.com/ankitojha07/The_Travel_Mate",
    },
    {
      image: "/project-cards.png",
      title: "Blog APP UI",
      url: "https://github.com/ankitojha07/blog_app_react",
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {projectData.map((data, key) => (
        <ProjectCard key={key} image={data.image} title={data.title} />
      ))}
    </div>
  );
};

export default page;
