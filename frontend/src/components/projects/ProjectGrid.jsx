import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects, onProjectClick }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20 font-mono text-gray-500 text-sm">
        // No project blueprints found in database cache.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id || project._id}
          project={project}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
