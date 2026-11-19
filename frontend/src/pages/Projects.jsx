import { useState, useEffect } from "react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ProjectGrid from "../components/projects/ProjectGrid";
import ProjectFilter from "../components/projects/ProjectFilter";
import ProjectModal from "../components/projects/ProjectModal";
import Spotlight from "../components/ui/Spotlight";
import BlurBlob from "../components/ui/BlurBlob";

import { getProjects } from "../services/projectService";
import { PROJECTS_DATA } from "../utils/constants";
import useLenis from "../hooks/useLenis";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize smooth scroll
  useLenis();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        if (data && data.success && data.projects.length > 0) {
          // Map database projects format if needed
          const mapped = data.projects.map((p) => ({
            id: p._id,
            title: p.title,
            description: p.description,
            techStack: p.techStack,
            image: p.image,
            liveLink: p.liveLink || "",
            githubLink: p.githubLink || "",
            category: p.category || "Full Stack",
            featured: p.featured || false,
          }));
          setProjects(mapped);
        } else {
          // Fallback to static constants if db is empty
          setProjects(PROJECTS_DATA);
        }
      } catch (error) {
        console.error("Failed to query MERN projects backend. Using local blueprints cache.", error);
        setProjects(PROJECTS_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === activeFilter));
    }
  }, [activeFilter, projects]);

  const categories = ["All", "Full Stack", "MERN Stack"];

  return (
    <div className="relative min-h-screen bg-[#070708] pt-32 pb-20 overflow-hidden">
      
      <Spotlight />
      <BlurBlob color="red" size="w-[500px] h-[500px]" position="top-[-10%] right-[-10%]" opacity="opacity-15" />
      <BlurBlob color="cyan" size="w-[400px] h-[400px]" position="bottom-[-10%] left-[-10%]" opacity="opacity-10" />

      <Container>
        
        <SectionHeading
          title="Secure Blueprints Repository"
          subtitle="A list of full-stack modules, commerce platforms, and utility APIs. Authenticated with TLS."
          align="center"
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 font-mono text-xs text-[#00f0ff] uppercase tracking-widest gap-2">
            <span className="h-5 w-5 rounded-full border-2 border-t-transparent border-[#00f0ff] animate-spin" />
            <span>Syncing database streams...</span>
          </div>
        ) : (
          <div className="space-y-8">
            
            <ProjectFilter
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              categories={categories}
            />

            <ProjectGrid
              projects={filteredProjects}
              onProjectClick={(project) => setSelectedProject(project)}
            />

          </div>
        )}

      </Container>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}

export default Projects;