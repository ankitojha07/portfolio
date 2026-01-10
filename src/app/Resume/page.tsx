import CompanyExperience from "@/components/CompanyExperience";
import EducationComponent from "@/components/EducationComponent";
import ProgressBar from "@/components/ProgressBar";
import React from "react";

const Resume = () => {
  const lang_frameworks = [
    { name: "JavaScript", percentage: 90 },
    { name: "React JS", percentage: 90 },
    { name: "Next JS", percentage: 70 },
    { name: "Node.js", percentage: 90 },
    { name: "Typescript", percentage: 70 },
    { name: "CSS3", percentage: 90 },
    { name: "HTML5", percentage: 90 },
    { name: "C++", percentage: 90 },
    { name: "Python", percentage: 90 },
  ];

  const skills = [
    { name: "AWS Cloud", percentage: 50 },
    { name: "Chat GPT", percentage: 99 },
    { name: "Kore.AI", percentage: 70 },
    { name: "Figma", percentage: 100 },
    { name: "Canva", percentage: 100 },
    { name: "Integreations", percentage: 80 },
  ];
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
      {/* Left Section */}
      <div className="grid col-span-1 md:col-span-12 gap-8">
        <section className="grid col-span-1 md:col-span-5 text-start gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-lg">Experience</p>

            {/* Experience card start */}
            <CompanyExperience />
            {/* exp card end  */}

            {/* Experience card start */}

            {/* exp card end  */}
          </div>
        </section>

        {/* Right Section */}
        <section className="grid col-span-1 md:col-span-5 text-start gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg text-gray-300">Education</p>
            <EducationComponent />
          </div>
        </section>

        {/* bottom section  */}
        <section className="grid col-span-1 md:col-span-3 text-start gap-8">
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
        </section>
        <section className="grid col-span-1 md:col-span-2 text-start gap-8">
          <p className="font-bold text-lg text-gray-300">Tools & Softwares</p>
          <p className="text-gray-500">
            These are the tool on which I am confident enough to design or build
            something.
          </p>
          <div className="flex flex-col gap-4">
            {skills.map((skill, index) => (
              <ProgressBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resume;
