import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-6">
      <ul className="nav flex flex-row gap-8 justify-end items-center font-bold text-xl">
        <li>About</li>
        <li>Resume</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default Navbar;
