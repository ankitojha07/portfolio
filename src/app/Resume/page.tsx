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
      {/* Stack Experience and Education full-width, then three equal columns below */}
      <div className="col-span-1 md:col-span-12">
        <div className="grid gap-8">
          <section className="w-full text-start">
            <p className="font-semibold text-lg">Experience</p>
            <div className="mt-2">
              <CompanyExperience />
            </div>
          </section>

          <section className="w-full text-start">
            <p className="font-bold text-lg text-gray-300">Education</p>
            <div className="mt-2">
              <EducationComponent />
            </div>
          </section>

          {/* bottom: full width container; stacks on small, 3 equal columns on md+ */}
          <div className="w-full flex flex-col md:flex-row gap-12">
            <section className="mb-8 md:w-1/3">
              <p className="font-bold text-lg">Languages and Frameworks</p>
              <div className="flex flex-col gap-4 mt-2">
                {lang_frameworks.map((skill, index) => (
                  <ProgressBar
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </section>

            <section className="mb-8 md:w-1/3">
              <p className="font-bold text-lg text-gray-300">
                Tools & Softwares
              </p>
              <div className="flex flex-col gap-4 mt-2">
                {skills.map((skill, index) => (
                  <ProgressBar
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </section>

            <section className="mb-8 md:w-1/3">
              <p className="font-bold text-lg text-gray-300">Database</p>
              <div className="flex flex-col gap-4 mt-2">
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
        </div>
      </div>
    </main>
  );
};

export default Resume;
