import ProgressBar from "@/components/ProgressBar";
import React from "react";

const Resume = () => {
  const lang_frameworks = [
    { name: "Typescript", percentage: 70 },
    { name: "C++", percentage: 60 },
    { name: "Python", percentage: 50 },
    { name: "CSS", percentage: 90 },
    { name: "React JS", percentage: 90 },
    { name: "Next JS", percentage: 40 },
    { name: "Node.js", percentage: 70 },
  ];

  const skills = [
    { name: "JavaScript", percentage: 90 },
    { name: "Canva", percentage: 80 },
    { name: "Chatbot Development", percentage: 70 },
    { name: "Integreations", percentage: 80 },
    { name: "AWS Cloud", percentage: 60 },
  ];
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
      {/* Left Section */}
      <section className="grid col-span-1 md:col-span-6 text-start gap-8">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">Education</p>
          <p className="font-semibold text-lg">Computer Science Engineering</p>
          <p>Lovely Professional University, (2021-2024)</p>
          <p>Completed my bachelor`s in technology.</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-lg">Languages and Frameworks</p>
          <div className="flex flex-col gap-4">
            {lang_frameworks.map((skill, index) => (
              <ProgressBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="grid col-span-1 md:col-span-6 text-start gap-8">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg">Experience</p>

          {/* Experience card start */}
          <div className="intern-exp flex flex-col gap-2">
            <div className="company-details">
              <p className="font-bold text-lg">
                Frontend Developer <span>|</span>{" "}
                <span className="font-bold text-sm text-blue-500">
                  Leena AI Inc.
                </span>
              </p>
              <div className="location flex flex-row gap-2 justify-between items-center ">
                <p className="text-sm italic text-gray-400">
                  Gurugram, Haryana
                </p>
                <p className="text-sm italic text-gray-400">
                  (Aug`2023 - Aug`24`)
                </p>
              </div>
            </div>
            <ul className="list-disc pl-5 text-sm text-gray-500">
              {" "}
              <li>
                Worked on scalable web applications using React.js, Next.js, and
                TypeScript, improving UI performance and maintainability.
              </li>
              <li>
                Collaborated with cross-functional teams to integrate RESTful
                APIs and deliver responsive, accessible, and SEO-friendly
                interfaces.
              </li>
              <li>
                Implemented dynamic features such as form builders, dashboard
                views, and workflow configurations using component-driven
                architecture.
              </li>
              <li>
                Refactored legacy components to modular, reusable code using
                Redux and modern React hooks.
              </li>
            </ul>
          </div>
          {/* exp card end  */}

          {/* Experience card start */}
          <div className="intern-exp">
            <p className="font-bold text-lg">Internship</p>
            <div className="flex flex-row gap-2 justify-between items-center ">
              <p className="font-bold text-sm text-blue-500">Leena AI, </p>
              <p className="text-sm italic text-gray-400">
                (Aug`2023 - Aug`24`)
              </p>
            </div>
            <p>I am currently working as a Full Stack Developer at Leena AI.</p>
          </div>
          {/* exp card end  */}
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-lg">Tools & Softwares</p>
          <div className="flex flex-col gap-4">
            {skills.map((skill, index) => (
              <ProgressBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
