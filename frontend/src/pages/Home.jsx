import { useState } from "react";
import Loader from "../components/common/Loader";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import SkillsPreview from "../components/home/SkillsPreview";
import Experience from "../components/home/Experience";
import GithubStats from "../components/home/GithubStats";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CTASection from "../components/home/CTASection";

import Spotlight from "../components/ui/Spotlight";
import BlurBlob from "../components/ui/BlurBlob";

import useLenis from "../hooks/useLenis";

function Home() {
  const [loading, setLoading] = useState(true);

  // Initialize smooth scroll Lenis
  useLenis();

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative min-h-screen bg-[#070708] text-white">
          
          {/* Subtle Red/Gold Glow Backdrops */}
          <Spotlight />

          <BlurBlob color="red" size="w-[500px] h-[500px]" position="top-1/4 left-[-15%]" opacity="opacity-10" />
          <BlurBlob color="gold" size="w-[450px] h-[450px]" position="bottom-1/4 right-[-10%]" opacity="opacity-5" />

          {/* Core clean sections */}
          <Hero />
          
          <GithubStats />

          <AboutPreview />
          
          <SkillsPreview />
          
          <Experience />
          
          <FeaturedProjects />

          <CTASection />

        </div>
      )}
    </>
  );
}

export default Home;