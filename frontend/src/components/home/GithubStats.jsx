import React from "react";
import Container from "../common/Container";

function GithubStats() {
  const stats = [
    { title: "MERN MODULES", value: "3 Projects" },
    { title: "SYSTEM STATUS", value: "Operational" },
    { title: "ALGORITHMS RESOLVED", value: "250+" },
  ];

  return (
    <section className="py-8 bg-[#0a0a0a] border-t border-b border-white/5">
      <Container>
        <div className="grid grid-cols-3 gap-4 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="border-r last:border-none border-white/5 py-2">
              <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                {stat.title}
              </span>
              <span className="text-base sm:text-lg font-bold text-yellow-500 font-mono">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default GithubStats;
