import React, { useState } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { SKILLS_DATA } from "../../utils/constants";

function SkillsPreview() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 border-t border-white/5 bg-[#070708]">
      <Container>
        
        <SectionHeading
          title="Skills"
          subtitle="Core engineering modules, languages, databases, and deployment libraries."
        />

        {/* Categories Switches */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/5 pb-6">
          {SKILLS_DATA.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`
                px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider border transition-all duration-300 font-mono
                ${activeCategory === idx 
                  ? "border-red-500 text-red-500 bg-red-950/10 shadow-[0_0_10px_rgba(239,68,68,0.1)]" 
                  : "border-white/5 text-gray-500 hover:text-white bg-transparent"}
              `}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills list items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SKILLS_DATA[activeCategory].items.map((skill, idx) => {
            const skillLevel = SKILLS_DATA[activeCategory].level[idx] || 85;
            
            return (
              <div
                key={idx}
                className="group p-4 rounded bg-[#121212]/50 border border-white/5 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-semibold text-white tracking-wide font-mono">
                    {skill}
                  </h4>
                  <span className="text-[10px] font-mono text-yellow-500">{skillLevel}%</span>
                </div>
                
                {/* Clean rating line */}
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-600 rounded-full"
                    style={{ width: `${skillLevel}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

export default SkillsPreview;
