import React from "react";

interface ProgressBarProps {
  name: string; // Name of the programming language
  percentage: number; // Skill percentage (0-100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ name, percentage }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p className="font-medium">{name}</p>
        <p className="font-medium">{percentage}%</p>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-6">
        <div
          className="bg-gradient-to-r from-teal-600 to-teal-400 h-6 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
