import TaskCard from "@/components/TaskCard";
import React from "react";
import Image from "next/image";

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
      title: "Solution Engineering",
      description:
        "I can design and implement solutions for complex problems using modern technologies",
    },
  ];
  return (
    <main className="flex flex-col justify-start gap-4 text-gray-300">
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
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <TaskCard
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
          <li>DevOps: Docker, GitHub Actions</li>
          <li>Tools: VS Code, Postman, Figma, Git</li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className="text-2xl font-bold mb-4 text-start">
          📚 Currently Learning
        </h2>
        <ul className="list-disc text-start ml-6 space-y-1">
          <li>Advanced React patterns</li>
          <li>AWS (SAA-C03 Certification)</li>
          <li>System Design Basics</li>
          <li>Open Source Contribution</li>
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
            🏔️ <strong>Mountain Travel</strong> – Reconnecting with nature helps
            me reset and recharge.
          </li>
          <li>
            🎮 <strong>Gaming</strong> – I enjoy immersive story-driven and
            strategy games.
          </li>
          <li>
            📚 <strong>Reading Books</strong> – Whether it's fiction,
            psychology, or tech, I love reading.
          </li>
          <li>
            📷 <strong>Photography</strong> – Capturing the beauty of places and
            moments fuels my creativity.
          </li>
          <li>
            🏏 <strong>Watching Cricket</strong> – I'm a passionate cricket fan
            and rarely miss a big match.
          </li>
          <li>
            👨‍👩‍👧‍👦 <strong>Family & Friends</strong> – I deeply value time spent
            with loved ones.
          </li>
        </ul>
      </section>

      <section aria-label="Photos Section" className="my-4">
        <h2 className="text-2xl font-semibold mb-4 text-start">📷 Photos</h2>
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
            src="/images/photography/8.jpg"
            alt="6"
            width={200}
            height={200}
            className="rounded-xl shadow-md object-cover h-48 w-full"
          />
          <Image
            src="/images/photography/9.jpg"
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
