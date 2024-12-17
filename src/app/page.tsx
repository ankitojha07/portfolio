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
        Innovative and results-driven Full Stack Developer with expertise in
        MERN stack development, building scalable and user-friendly web
        applications. Proficient in designing and implementing robust solutions
        across frontend and backend, ensuring seamless user experiences and
        operational efficiency. Hands-On experience in developing secure
        authentication systems, dynamic APIs, and responsive UI components.
        Adept at integrating modern technologies to solve real-world problems,
        streamline workflows, and enhance application performance. Proven
        ability to translate complex business requirements into scalable,
        maintainable, and impactful digital products, driving success in diverse
        projects.
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
        <p className="text-start ">Abhi ke liye bs itna hi.... 🫡</p>
        <p className="text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          quisquam!
        </p>
        <p className="text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          quisquam!
        </p>
        <p className="text-start">
          Kuch bhi add kr rha hu just to fill the gap....
        </p>
        <p className="text-start">
          Upar jo profile summary hai wo bhi copy pase kiya hu 😂
        </p>
        <p className="text-start">
          Ek baat aor: Koi job referral hoga to please btana jaroor : )
        </p>
        <p className="text-start">
          Don`t forget to check the project page... wo jaroori hai
        </p>
      </div>
    </div>
  );
};

export default Home;
