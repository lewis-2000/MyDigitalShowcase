import React from 'react';

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface PortfolioGalleryProps {
  projects: Project[];
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded shadow-md overflow-hidden">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGallery;
