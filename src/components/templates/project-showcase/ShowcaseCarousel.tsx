// src/templates/project-showcase/ShowcaseCarousel.tsx
import React from 'react';

interface ShowcaseCarouselProps {
  projects: {
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  theme: 'light' | 'dark';
}

const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({ projects, theme }) => {
  return (
    <div className={`w-full py-10 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto">
        <div className="flex overflow-x-auto space-x-8">
          {projects.map((project, index) => (
            <div key={index} className="min-w-[300px] flex-shrink-0">
              <img src={project.image} alt={project.title} className="rounded-lg shadow-lg w-full mb-4" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCarousel;
