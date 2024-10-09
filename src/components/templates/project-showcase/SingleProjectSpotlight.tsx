// src/templates/project-showcase/SingleProjectSpotlight.tsx
import React from 'react';

interface SingleProjectSpotlightProps {
  project: {
    image: string;
    title: string;
    description: string;
    link: string;
  };
  theme: 'light' | 'dark';
}

const SingleProjectSpotlight: React.FC<SingleProjectSpotlightProps> = ({ project, theme }) => {
  return (
    <div className={`w-full py-16 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img src={project.image} alt={project.title} className="rounded-lg shadow-lg w-full md:w-1/2 mb-6 md:mb-0 md:mr-8" />
        <div className="md:w-1/2">
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

export default SingleProjectSpotlight;
