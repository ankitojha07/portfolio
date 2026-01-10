import CompanyExperience from "@/components/CompanyExperience";
import EducationComponent from "@/components/EducationComponent";
import ProgressBar from "@/components/ProgressBar";
import React from "react";

const Resume = () => {
  const lang_frameworks = [
    { name: "JavaScript/Node.js", percentage: 90 },
    { name: "React/Next", percentage: 90 },
    { name: "HTML/CSS", percentage: 60 },
    { name: "C++", percentage: 70 },
    { name: "Python", percentage: 50 },
  ];

  const tools = [
    { name: "Postman", percentage: 80 },
    { name: "Docker", percentage: 80 },
    { name: "n8n", percentage: 40 },
    { name: "AWS Cloud", percentage: 30 },
    { name: "Git and GitHub", percentage: 80 },
  ];

  const databases = [
    { name: "PostgreSQL", percentage: 50 },
    { name: "MongoDb", percentage: 99 },
    { name: "MySQL", percentage: 70 },
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
                {tools.map((skill, index) => (
                  <ProgressBar
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </section>

            <section className="mb-8 md:w-1/3">
              <p className="font-bold text-lg text-gray-300">Databases</p>
              <div className="flex flex-col gap-4 mt-2">
                {databases.map((skill, index) => (
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
