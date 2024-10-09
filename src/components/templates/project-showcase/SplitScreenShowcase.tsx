// src/templates/project-showcase/SplitScreenShowcase.tsx
import React from 'react';

interface SplitScreenShowcaseProps {
  project: {
    image: string;
    video?: string;
    title: string;
    description: string;
    link: string;
  };
  theme: 'light' | 'dark';
}

const SplitScreenShowcase: React.FC<SplitScreenShowcaseProps> = ({ project, theme }) => {
  return (
    <div className={`w-full py-16 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          {project.video ? (
            <video src={project.video} controls className="rounded-lg shadow-lg w-full mb-6 md:mb-0" />
          ) : (
            <img src={project.image} alt={project.title} className="rounded-lg shadow-lg w-full mb-6 md:mb-0" />
          )}
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="mb-4">{project.description}</p>
          <a href={project.link} className="text-blue-500 hover:underline">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenShowcase;
