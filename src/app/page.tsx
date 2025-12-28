import TaskCard from "@/components/TaskCard";
import React from "react";
import Image from "next/image";

const Home = () => {
  const tasks = [
    {
      icon: "💡",
      title: "Solution Engineering",
      description:
        "Engineering practical and scalable solutions for complex business problems using modern tech stacks and best practices in software development.",
    },
    {
      icon: "🔗",
      title: "API Integration",
      description:
        "Seamlessly integrating third-party APIs such as RESTful services and GraphQL to enhance application functionality and user experience.",
    },
    {
      icon: "🚀",
      title: "Frontend Development",
      description:
        "Crafting beautiful and scalable Single Page Applications (SPAs) using HTML, CSS, and React.js with a focus on performance and responsiveness.",
    },
    {
      icon: "🔧 ",
      title: "Backend Development",
      description:
        "Designing and maintaining efficient, secure APIs using Node.js and Express, with a strong emphasis on clean architecture and scalability.",
    },
    {
      icon: "🔗",
      title: " API Development",
      description:
        "Building robust and maintainable RESTful APIs using Django REST Framework and Node.js, tailored for high-performance applications.",
    },

    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Designing stunning, user-centric interfaces using Figma and Framer, blending aesthetics with usability for seamless user experiences.",
    },
  ];
  return (
    <main className="flex flex-col justify-start gap-4 text-gray-300">
      <p className="text-justify tracking-wide text-md font-sans">
        Results-oriented Solution Engineer{" "}
        <span className="font-bold italic">
          (Forward Deployed Engineer - FDE)
        </span>{" "}
        with a strong techno-functional background, specializing in analyzing
        client requirements, designing robust architectures, and delivering
        end-to-end solutions across enterprise environments. Skilled in
        implementing automation workflows and custom system integrations using
        REST APIs, SFTP, and leading platforms like SAP SuccessFactors. Proven
        track record of enhancing operational efficiency through scalable,
        client-centric solutions while maintaining strong stakeholder
        communication and collaboration.
      </p>
      <p className="font-bold text-start text-xl">What I do?</p>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <TaskCard
            icon={task.icon}
            key={index}
            title={task.title}
            description={task.description}
          />
        ))}
      </section>

      <section className="text-start my-4">
        <h2 className="text-xl font-bold mb-4">🛠️ Tech Stack</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Frontend: React, Tailwind CSS, JavaScript, HTML, CSS</li>
          <li>Backend: Node.js, Express, MongoDB</li>
          <li>Database: Postgres, Drizzle-ORM</li>
          <li>DevOps: Docker, GitHub Actions</li>
          <li>Tools: VS Code, Postman, Figma, Git</li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className="text-2xl font-bold mb-4 text-start">
          🌟 Life Outside Work
        </h2>
        <ul className="list-disc text-start ml-6 space-y-2">
          <li>
            🏍️ <strong>Bike Riding</strong> – I love hitting the road and
            exploring scenic routes.
          </li>
          <li>
            🏔️ <strong>Travel</strong> – Reconnecting with nature helps me reset
            and recharge.
          </li>

          <li>
            📚 <strong>Reading Books</strong> – Whether it`s fiction,
            psychology, or tech, I love reading.
          </li>
        </ul>
      </section>

      <section aria-label="Photos Section" className="my-4">
        <h2 className="text-2xl font-semibold mb-4 text-start">
          📷 Few Random Clics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Image
            src="/images/photography/1.jpg"
            alt="Bike Riding"
            width={200}
            height={200}
            className="rounded-xl shadow-md object-cover h-48 w-full"
          />
          <Image
            src="/images/photography/2.jpg"
            alt="Mountain Travel"
            width={200}
            height={200}
            className="rounded-xl shadow-md object-cover h-48 w-full"
          />
          <Image
            src="/images/photography/3.jpg"
            alt="Gaming"
            width={200}
            height={200}
            className="rounded-xl shadow-md object-cover h-48 w-full"
          />
          <Image
            src="/images/photography/4.jpg"
            alt="Reading Books"
            width={200}
            height={200}
            className="rounded-xl shadow-md object-cover h-48 w-full"
          />
          <Image
            src="/images/photography/5.jpg"
            alt="Watching Cricket"
            width={200}
            height={200}
            className="rounded-xl shadow-md object-cover h-48 w-full"
          />
          <Image
            src="/images/photography/6.jpg"
            alt="6"
            width={200}
            height={200}
            className="rounded-xl shadow-md object-cover h-48 w-full"
          />
          <Image
            src="/images/photography/7.jpg"
            alt="6"
            width={200}
            height={200}
            className="rounded-xl shadow-md object-cover h-48 w-full"
          />

          <Image
            src="/images/photography/10.jpg"
            alt="6"
            width={200}
            height={200}
            className="rounded-xl shadow-md object-cover h-48 w-full"
          />
          <Image
            src="/images/photography/11.jpg"
            alt="6"
            width={200}
            height={200}
            className="rounded-xl shadow-md object-cover h-48 w-full"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
