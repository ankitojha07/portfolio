import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const ContactCard = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-zinc-900 w-full max-w-md py-8 rounded-lg">
      <div className="flex flex-row gap-3 justify-center items-center">
        <IoLocationOutline />
        <p>New Delhi, India</p>
      </div>
      <p className="text-md leading-3 tracking-wider font-thin">
        ankitojha1409@gmail.com
      </p>
      <p className="text-sm leading-3 tracking-wide font-thin">
        +91-8700091952
      </p>
    </div>
  );
};

export default ContactCard;
