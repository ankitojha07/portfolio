import React from "react";

interface TagsProps {
  title: string;
  icon: React.ReactNode; // Icon as a React node
}

export default function Tags({ title, icon }: TagsProps) {
  return (
    <div className="flex gap-2 bg-zinc-900 py-2 text-white rounded-full border px-4 text-md w-full border-teal-800 justify-center items-center">
      <span className="text-teal-500">{icon}</span>
      <p className="text-center">{title}</p>
    </div>
  );
}
