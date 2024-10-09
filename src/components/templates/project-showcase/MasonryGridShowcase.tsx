// src/templates/project-showcase/MasonryGridShowcase.tsx
import React from 'react';

interface MasonryGridShowcaseProps {
  projects: {
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  theme: 'light' | 'dark';
}

const MasonryGridShowcase: React.FC<MasonryGridShowcaseProps> = ({ projects, theme }) => {
  return (
    <div className={`w-full py-10 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img src={project.image} alt={project.title} className="rounded-lg shadow-lg mb-2 w-full" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGridShowcase;
