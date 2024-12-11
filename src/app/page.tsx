import TaskCard from "@/components/TaskCard";
import React from "react";

const Home = () => {
  const tasks = [
    {
      title: "Frontend Development",
      description:
        "I can build a beautiful and scalable SPA using HTML, CSS, and React JS",
    },
    {
      title: "Backend Development",
      description: "I can design and maintain APIs using Node.js and Express",
    },
    {
      title: "API Development",
      description:
        "I can develop robust REST APIs using Django REST API and Node API",
    },
    {
      title: "Competitive Coder",
      description: "A daily problem solver in HackerRank and LeetCode",
    },
    {
      title: "UI/UX designer",
      description: "Stunning user interface designer using Figma and Framer",
    },
    {
      title: "Whatever",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
    },
  ];
  return (
    <div className="flex flex-col justify-start gap-8">
      <p className="text-justify tracking-wide text-md font-sans">
        Dynamic and passionate professional dedicated to full-stack web
        development and software engineering. Known for collaborative teamwork,
        innovative problem-solving, and a commitment to delivering high-quality
        solutions and driven by a desire to leverage technology to create
        impactful and user-centric experiences.
      </p>
      <p className="font-bold text-start text-xl">What I am doing?</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>

      <p className="font-bold text-start text-xl">More info?</p>
      <p className="text-start ">Abhi ke liye bs itna hi.... 🫡</p>
    </div>
  );
};

export default Home;
