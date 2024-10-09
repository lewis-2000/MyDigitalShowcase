// src/templates/project-showcase/ProjectGridWithModal.tsx
import React, { useState } from 'react';

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ProjectGridWithModalProps {
  projects: Project[];
  theme: 'light' | 'dark';
}

const ProjectGridWithModal: React.FC<ProjectGridWithModalProps> = ({ projects, theme }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={`w-full py-12 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="cursor-pointer" onClick={() => setSelectedProject(project)}>
            <img src={project.image} alt={project.title} className="rounded-lg shadow-lg mb-4 w-full" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-8 w-11/12 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="rounded-lg shadow-lg mb-4 w-full" />
            <p className="mb-4">{selectedProject.description}</p>
            <a href={selectedProject.link} className="text-blue-500 hover:underline mb-4 inline-block">
              View Project
            </a>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGridWithModal;
