import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectGrid from "../projects/ProjectGrid";
import ProjectModal from "../projects/ProjectModal";
import GlowButton from "../common/GlowButton";
import { PROJECTS_DATA } from "../../utils/constants";

function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter featured blueprints
  const featured = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <section id="featured-projects" className="py-20 bg-[#070708]">
      <Container>
        
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore the latest operational web systems and digital full-stack solutions."
        />

        <div className="space-y-10">
          
          <ProjectGrid
            projects={featured}
            onProjectClick={(p) => setSelectedProject(p)}
          />

          <div className="flex justify-center pt-4">
            <Link to="/projects">
              <GlowButton variant="red">
                View All Projects
              </GlowButton>
            </Link>
          </div>

        </div>

      </Container>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default FeaturedProjects;
