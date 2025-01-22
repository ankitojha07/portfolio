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
        Forward-thinking Frontend Web Developer proficient in{" "}
        <span className="text-teal-600 font-bold italic">
          {" "}
          React.js, Next.js, Tailwind CSS, and TypeScript{" "}
        </span>
        , with a strong focus on crafting dynamic, user-centric interfaces and
        optimizing web performance. Experienced in implementing responsive
        designs, integrating{" "}
        <span className="text-teal-600 font-bold italic">RESTful APIs </span>,
        and leveraging modern tools like Webpack and Vite to build scalable and
        maintainable solutions. Skilled in transforming Figma designs into
        seamless, interactive web applications tailored to user needs. Excels in
        collaborating with cross-functional teams to deliver robust and
        efficient digital experiences
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
      <div className="text-zinc-400 flex flex-col gap-2">
        <p className="text-start ">that`s it 🫡</p>
        <p className="text-start">Feel free to reach out for anything : )</p>
        {/*
        <p className="text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          quisquam!
        </p>
        <p className="text-start">
          Kuch bhi add kr rha hu just to fill the gap....
        </p>
        <p className="text-start">
          Ek baat aor: Koi job referral hoga to please btana jaroor : )
        </p>
        <p className="text-start">
          Don`t forget to check the project page... wo jaroori hai
        </p> */}
      </div>
    </div>
  );
};

export default Home;
