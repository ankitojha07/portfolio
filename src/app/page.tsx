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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        similique, hic saepe et architecto quidem adipisci a vitae!
        Necessitatibus facere nostrum reprehenderit blanditiis aliquam
        voluptatum deserunt tempore asperiores ea numquam hic esse nihil dolorum
        repellendus corrupti et vero, quo sapiente error laudantium vitae.
        Distinctio quasi adipisci praesentium quam maxime error quia voluptates
        ipsum deleniti fuga tempora cumque voluptatem, doloribus molestias
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
    </div>
  );
};

export default Home;
