import React from "react";
import { HiMiniComputerDesktop } from "react-icons/hi2";

interface TaskCardProps {
  title: string;
  description: string;
}

const TaskCard = ({ title, description }: TaskCardProps) => {
  return (
    <div className="flex flex-row bg-zinc-900 justify-start items-center gap-5 p-4 rounded-lg ">
      <HiMiniComputerDesktop className="text-6xl text-teal-600" />
      <div className="flex flex-col justify-start items-start">
        <p className="font-bold">{title}</p>
        <p className="text-start">{description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
