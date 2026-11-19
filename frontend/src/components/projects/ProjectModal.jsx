import React from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import GlowButton from "../common/GlowButton";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      
      {/* Modal Inner HUD Pane */}
      <div className="relative w-full max-w-3xl rounded bg-[#121212] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Top Header Controls */}
        <div className="flex justify-between items-center bg-[#181818] border-b border-white/5 px-6 py-4">
          <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
            // Specifications: {project.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors p-1"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Modal scrolling body */}
        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column: Visual Screenshot & Links */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="rounded overflow-hidden border border-white/5 h-48 bg-black/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Links buttons */}
            <div className="flex gap-3">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <GlowButton variant="red" className="w-full">
                    Repository
                  </GlowButton>
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <GlowButton variant="gold" className="w-full">
                    Launch
                  </GlowButton>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Parameters and specifications */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white font-['Orbitron']">
                {project.title}
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* Full Tech list */}
            <div>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest block mb-2">// INTEGRATED SYSTEMS</span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/5 text-[10px] text-yellow-500 font-mono uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectModal;
