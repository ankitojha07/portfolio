import React from "react";

const CompanyExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="intern-exp flex flex-col gap-2">
        <div className="company-details">
          <p className="font-bold text-lg text-gray-300">
            Frontend Developer <span>|</span>{" "}
            <span className="font-bold text-sm text-blue-500">
              Leena AI Inc.
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
            Worked on scalable web applications using React.js, Next.js, and
            TypeScript, improving UI performance and maintainability.
          </li>
          <li>
            Collaborated with cross-functional teams to integrate RESTful APIs
            and deliver responsive, accessible, and SEO-friendly interfaces.
          </li>
          <li>
            Implemented dynamic features such as form builders, dashboard views,
            and workflow configurations using component-driven architecture.
          </li>
          <li>
            Refactored legacy components to modular, reusable code using Redux
            and modern React hooks.
          </li>
        </ul>
      </div>

      <div className="intern-exp flex flex-col gap-2">
        <div className="company-details">
          <p className="font-bold text-lg text-gray-300">
            Intern <span>|</span>{" "}
            <span className="font-bold text-sm text-blue-500">
              Leena AI Inc.
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
