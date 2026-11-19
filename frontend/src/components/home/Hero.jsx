import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import GlowButton from "../common/GlowButton";
import { PERSONAL_INFO } from "../../utils/constants";

function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Bio parameters */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          <span className="text-xs uppercase tracking-widest text-[#ffd700] font-semibold mb-2 font-mono">
            // Full Stack Web Developer
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-red-500">{PERSONAL_INFO.name}</span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-xl mb-10 leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/projects">
              <GlowButton variant="gold">
                View Projects
              </GlowButton>
            </Link>
            <Link to="/contact">
              <GlowButton variant="red">
                Contact Me
              </GlowButton>
            </Link>
          </div>

        </div>

        {/* Right Side: Clean minimalistic Arc Reactor graphic */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          
          {/* Subtle gold glow behind reactor */}
          <div className="absolute w-60 h-60 rounded-full bg-[#f59e0b]/5 blur-3xl animate-pulse" />

          {/* Simple Vector Arc Reactor */}
          <div className="relative w-56 h-56 rounded-full border border-white/5 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-2 border-red-500/20 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#121212] border-2 border-[#ffd700]/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white shadow-[0_0_15px_#fff,0_0_25px_#ef4444]" />
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}

export default Hero;
