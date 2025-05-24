import React from "react";

const EducationComponent = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="company-details">
        <p className="font-bold text-lg text-gray-300">
          B.Tech | Information Technology <span>-</span>{" "}
          <span className="font-bold text-sm text-orange-500">
            Lovely Professional University
          </span>
        </p>
        <div className="location flex flex-row gap-2 justify-between items-center ">
          <p className="text-sm italic text-gray-400">Jalandhar, Punjab</p>
          <p className="text-sm italic text-gray-400">(Jul`2021 - Jun`2024)</p>
        </div>
      </div>

      <div className="company-details">
        <p className="font-bold text-lg text-gray-300">
          Diploma | Computer Science and Engineering <span>-</span>{" "}
          <span className="font-bold text-sm text-orange-500">
            Lovely Professional University
          </span>
        </p>
        <div className="location flex flex-row gap-2 justify-between items-center ">
          <p className="text-sm italic text-gray-400">Jalandhar, Punjab</p>
          <p className="text-sm italic text-gray-400">(Jul`2019 - Jun`2021)</p>
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;
