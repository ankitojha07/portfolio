import React from "react";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoTwitter,
} from "react-icons/io";

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center gap-5 text-2xl text-teal-600">
      <a href="https://www.youtube.com/@guylovescoding" target="_blank">
        <IoLogoYoutube />
      </a>
      <a href="https://www.x.com/guylovescoding" target="_blank">
        <IoLogoTwitter />
      </a>
      <a href="https://github.com/ankitojha07" target="_blank">
        <IoLogoGithub />
      </a>
      <a href="https://www.linkedin.com/in/ankit0jha/" target="_blank">
        <IoLogoLinkedin />
      </a>
      <a href="https://www.instagram.com/ankitojha_07/" target="_blank">
        <IoLogoInstagram />
      </a>
      <a
        href="https://chat.whatsapp.com/E27XYKEV5iWJyr6J4UJkPs"
        target="_blank"
      >
        <IoLogoWhatsapp />
      </a>
    </div>
  );
};

export default SocialIcons;
