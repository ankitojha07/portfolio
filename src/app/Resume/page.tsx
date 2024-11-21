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
    { name: "Azure", percentage: 60 },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
      {/* Left Section */}
      <div className="grid col-span-1 md:col-span-6 text-start gap-8">
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
      </div>

      {/* Right Section */}
      <div className="grid col-span-1 md:col-span-6 text-start gap-8">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg">Experience</p>
          <p className="font-bold text-lg">Internship</p>
          <p>Leena AI, (2023 - Present)</p>
          <p>I am currently working as a Full Stack Developer at Leena AI.</p>
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
      </div>
    </div>
  );
};

export default Resume;
