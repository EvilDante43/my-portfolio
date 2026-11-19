import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded bg-[#121212]/50 border border-white/5 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
    >
      
      {/* Project Image */}
      <div className="h-44 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300"
        />
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        
        <div>
          <h3 className="font-['Orbitron'] text-sm font-bold text-white tracking-wide group-hover:text-yellow-500 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-xs text-gray-400 font-sans line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tech Badges & Links */}
        <div>
          <div className="flex flex-wrap gap-1 mb-4">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-sm bg-red-950/20 border border-red-500/10 text-[9px] text-[#ffd700] uppercase font-mono"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-0.5 rounded-sm bg-white/5 text-[9px] text-gray-500 font-mono">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center border-t border-white/5 pt-3">
            <span className="text-[10px] font-mono text-red-500 font-semibold group-hover:underline">
              [ View details ]
            </span>
            <div className="flex items-center gap-3 text-gray-400">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-white transition-colors"
                >
                  <FaGithub size={14} />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={11} />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;
