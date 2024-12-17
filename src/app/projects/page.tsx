import ProjectCard from "@/components/ProjectCard";
import React from "react";

const page = () => {
  const projectData = [
    {
      image: "/images/projects/image-india-tech-salaries.png",
      title: "India Tech Salaries - Responsive UI",
      url: "https://india-tech-salaries.vercel.app/",
    },
    {
      image: "/images/projects/image-task-manager-drag.png",
      title: "Task Manager - Drag & Drop",
      url: "https://task-manager-drag.netlify.app/",
    },
    {
      image: "/images/projects/image-project-cartApp.png",
      title: "Full-stack e-commerce",
      url: "https://e-commerce-ankit.vercel.app/",
    },
    {
      image: "/images/projects/image-notes-maker.png",
      title: "Notes Maker",
      url: "https://note-maker-92v7.onrender.com/",
    },
    {
      image: "/images/projects/image-gramarrly-live.png",
      title: "Grammarly Live",
      url: "https://grammarly-live.vercel.app/",
    },
    {
      image: "/images/projects/image-gfg-lpu.png",
      title: "GeeksforGeeks-LPU Website",
      url: "https://geeksforgeeks-lpu.netlify.app/",
    },
    {
      image: "/images/projects/image-covid-tracker.png",
      title: "Covid Tracker",
      url: "https://github.com/ankitojha07/covid19-tracker-summer-training-project",
    },
    {
      image: "/images/projects/image-weather-app.png",
      title: "Weather App",
      url: "https://get-weather-detail.netlify.app/",
    },
    {
      image: "/images/projects/image-digital-resume.png",
      title: "Digital Resume",
      url: "https://ankitojha-resume.netlify.app/",
    },
    {
      image: "/images/projects/image-e-commerce-ui.png",
      title: "E-commerce UI - React.js",
      url: "https://shop-by-choice.netlify.app/",
    },
    {
      image: "/images/projects/image-responsive-dashboard.png",
      title: "Responsive Dashboard",
      url: "https://github.com/ankitojha07/Dashboard-React",
    },
    {
      image: "/images/projects/image-project-old-portfolio.png",
      title: "Portfolio",
      url: "https://ankitojha07.github.io/ankitojha/",
    },
    {
      image: "/images/projects/image-travel-mate.png",
      title: "Travel Mate Android App",
      url: "https://github.com/ankitojha07/The_Travel_Mate",
    },
    {
      image: "/images/projects/image-blog-app.png",
      title: "Blog APP UI",
      url: "https://github.com/ankitojha07/blog_app_react",
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {projectData.map((data, key) => (
        <ProjectCard
          key={key}
          image={data.image}
          title={data.title}
          url={data.url}
        />
      ))}
    </div>
  );
};

export default page;
