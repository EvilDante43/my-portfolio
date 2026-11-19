import React from "react";

function ProjectFilter({ activeFilter, setActiveFilter, categories }) {
  return (
    <div className="flex flex-wrap gap-3 mb-10 justify-center">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => setActiveFilter(cat)}
          className={`
            px-4 py-2 rounded font-['Orbitron'] text-[10px] uppercase tracking-widest border transition-all duration-300 active:scale-95
            ${activeFilter === cat
              ? "border-[#ffd700] text-[#ffd700] bg-yellow-950/10 shadow-[0_0_15px_rgba(255,215,0,0.15)]"
              : "border-white/5 text-gray-500 hover:text-white hover:border-white/10 bg-transparent"}
          `}
        >
          [ {cat} ]
        </button>
      ))}
    </div>
  );
}

export default ProjectFilter;
