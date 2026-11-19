import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { PERSONAL_INFO } from "../../utils/constants";

function SocialLinks() {
  const socials = [
    { Icon: FaGithub, link: PERSONAL_INFO.github, label: "GitHub" },
    { Icon: FaLinkedin, link: PERSONAL_INFO.linkedin, label: "LinkedIn" },
    { Icon: FaTwitter, link: "#", label: "Twitter" },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((soc, idx) => {
        const { Icon, link, label } = soc;
        return (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/5 bg-black/60 rounded font-['Orbitron'] text-[10px] text-gray-400 uppercase tracking-widest hover:border-red-500/30 hover:text-white hover:bg-red-950/10 transition-all duration-300"
          >
            <Icon size={12} />
            <span>{label}</span>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
