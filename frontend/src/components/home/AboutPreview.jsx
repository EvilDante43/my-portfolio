import React from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from "../../utils/constants";

function AboutPreview() {
  const stats = [
    { name: "Languages & Core DSA", value: "95%" },
    { name: "Frontend Development", value: "90%" },
    { name: "Backend APIs & Database", value: "93%" },
  ];

  const college = EDUCATION_DATA[0];

  return (
    <section id="about" className="py-20 border-t border-white/5 bg-[#0a0a0a]">
      <Container>
        
        <SectionHeading
          title="About Me"
          subtitle="Biography, academic qualifications, and overall engineering metrics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Education */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 rounded-lg bg-[#121212]/50 border border-white/5">
              <h3 className="text-xs text-red-500 font-bold uppercase tracking-wider mb-3 font-mono">
                // Biography
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Computer Science undergraduate pursuing a Bachelor of Technology. Highly adept in constructing performant web architectures, building scalable database interfaces, and coding complex state patterns. Equipped with strong foundations in Data Structures and Algorithms.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#121212]/50 border border-white/5">
              <h3 className="text-xs text-yellow-500 font-bold uppercase tracking-wider mb-3 font-mono">
                // Education
              </h3>
              <div>
                <h4 className="text-white text-sm font-semibold">{college.degree}</h4>
                <p className="text-xs text-gray-400 mt-1">{college.institution}</p>
                <div className="flex justify-between items-center mt-3 text-[10px] text-gray-500 font-mono">
                  <span>SCORE: {college.details}</span>
                  <span>{college.period}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Performance stats & achievements */}
          <div className="lg:col-span-6 p-6 rounded-lg bg-[#121212]/50 border border-white/5 flex flex-col justify-between min-h-[300px]">
            
            <div className="space-y-6">
              <h4 className="text-xs text-white font-semibold tracking-wider uppercase mb-4 font-mono">// Core Capabilities:</h4>
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span>{stat.name}</span>
                    <span className="text-yellow-500 font-bold">{stat.value}</span>
                  </div>
                  {/* Simple progress bar */}
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-yellow-500 rounded-full"
                      style={{ width: stat.value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements Snippet */}
            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-gray-400 space-y-2 font-sans">
              <span className="text-[10px] text-[#ffd700] uppercase block tracking-wider font-mono">// Key Credentials:</span>
              <p className="italic">{ACHIEVEMENTS_DATA[0]}</p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default AboutPreview;
