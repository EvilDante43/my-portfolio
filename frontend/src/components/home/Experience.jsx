import React from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { EXPERIENCE_DATA } from "../../utils/constants";

function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-white/5 bg-[#0a0a0a]">
      <Container>
        
        <SectionHeading
          title="Experience"
          subtitle="A simple chronological history of professional positions and developer internships."
        />

        <div className="max-w-3xl mx-auto relative pl-8 border-l border-red-500/20 py-2">
          
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative mb-8 last:mb-0">
              
              {/* Timeline indicator node */}
              <span className="absolute left-[-37px] top-1 h-3.5 w-3.5 rounded-full bg-red-600 border border-black shadow-[0_0_8px_#ef4444]" />

              <div className="p-6 rounded bg-[#121212]/50 border border-white/5 hover:border-yellow-500/20 transition-all duration-300">
                <span className="text-[10px] font-mono text-gray-500 block mb-2">
                  // {exp.period}
                </span>

                <h3 className="text-base font-bold text-white tracking-wide">
                  {exp.role}
                </h3>
                
                <h4 className="text-xs text-yellow-500 font-mono font-semibold uppercase mt-1">
                  {exp.company} &mdash; <span className="text-gray-400 font-sans font-normal normal-case">{exp.location}</span>
                </h4>

                <ul className="mt-4 space-y-2 text-xs text-gray-400 leading-relaxed list-inside list-disc font-sans">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="list-item">
                      {bullet}
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Experience;
