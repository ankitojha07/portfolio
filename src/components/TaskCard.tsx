import React from "react";

interface TaskCardProps {
  title: string;
  description: string;
  icon: string;
}

const TaskCard = ({ title, description, icon }: TaskCardProps) => {
  return (
    <div className="flex flex-row bg-zinc-900 justify-start items-center gap-5 p-4 rounded-lg ">
      <p className="text-3xl text-teal-600">{icon}</p>
      <div className="flex flex-col justify-start items-start">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-start text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
