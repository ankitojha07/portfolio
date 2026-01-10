import React from "react";

const CompanyExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="intern-exp flex flex-col gap-2">
        <div className="company-details">
          <p className="font-bold text-lg text-gray-300">
            Solution Engineer <span>|</span>{" "}
            <span className="font-bold text-sm text-blue-500">
              <a href="https://www.leena.ai/" target="_blank">
                Leena AI Inc.
              </a>
            </span>
          </p>
          <div className="location flex flex-row gap-2 justify-between items-center ">
            <p className="text-sm italic text-gray-400">Gurugram, Haryana</p>
            <p className="text-sm italic text-gray-400">(Aug`2024 - Present)</p>
          </div>
        </div>
        <ul className="list-disc pl-5 text-sm text-gray-500">
          {" "}
          <li>
            Led end-to-end implementation of AI-driven chatbots and voice bots,
            including requirement gathering, solution design, configuration,
            deployment, and client onboarding, ensuring high adoption and
            measurable business impact.
          </li>
          <li>
            Designed and optimized enterprise-grade conversational workflows by
            mapping business processes, writing/testing prompt logic, and
            applying NLP techniques to improve intent recognition and reduce
            fallback responses..
          </li>
          <li>
            Deployed Voice AI agents for high-volume use cases, enhancing
            customer engagement, reducing manual intervention, and handling
            thousands of conversations daily.
          </li>
          <li>
            Integrated AI agents with third-party platforms (e.g., HRMS,
            ticketing systems, SuccessFactors, SFTP servers) via RESTful APIs
            and custom connectors, ensuring seamless data flow across systems.
          </li>
          <li>
            Conducted rigorous testing, debugging, and performance tuning of AI
            solutions, ensuring accuracy, scalability, and reliable performance
            in production environments.
          </li>
          <li>
            Partnered with stakeholders, product teams, and engineering to
            gather requirements, resolve technical challenges, and align
            solutions with strategic goals.
          </li>
          <li>
            Collaborated with VPs and senior executives to provide client
            feedback, shape the AI product roadmap, and influence feature
            development for long-term scalability.
          </li>
          <li>
            Designed automated workflows for HR and IT processes (onboarding,
            offboarding, employee lifecycle), streamlining operations and
            reducing support resolution times.
          </li>
          <li>
            Delivered client training and enablement sessions, ensuring smooth
            onboarding and empowering business teams to manage AI-driven
            workflows effectively.
          </li>
        </ul>
      </div>

      <div className="intern-exp flex flex-col gap-2">
        <div className="company-details">
          <p className="font-bold text-lg text-gray-300">
            Intern <span>|</span>{" "}
            <span className="font-bold text-sm text-blue-500">
              <a href="https://www.leena.ai/" target="_blank">
                Leena AI Inc.
              </a>
            </span>
          </p>
          <div className="location flex flex-row gap-2 justify-between items-center ">
            <p className="text-sm italic text-gray-400">Gurugram, Haryana</p>
            <p className="text-sm italic text-gray-400">(Aug`2023 - Aug`24`)</p>
          </div>
        </div>

        <ul className="list-disc pl-5 text-sm text-gray-500">
          {" "}
          <li>
            Developed and optimized JavaScript workflows to filter, clean, and
            transform API responses, ensuring efficient data processing and
            integration with front-end applications.
          </li>
          <li>
            Contributed to the development of the company`s official website by
            building and integrating multiple reusable React.js components,
            improving functionality and user interface consistency.
          </li>
          <li>
            Conducted REST API Testing using Postman to validate endpoint
            functionality, ensuring seamless integration of chatbot features
            with backend services.
          </li>
          <li>
            Assisted in pre-sales activities by creating POCs, and conducting
            product demos and technical presentations to prospective clients.
          </li>
          <li>
            Collaborated with cross-functional stakeholders to gather and
            analyze requirements, ensuring alignment with business objectives
            and technical feasibility.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyExperience;
