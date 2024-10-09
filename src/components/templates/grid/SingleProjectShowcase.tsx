import React from 'react';

type SingleProjectShowcaseProps = {
  title: string;
  imageUrl: string;
  description: string;
  details: string;
};

const SingleProjectShowcase: React.FC<SingleProjectShowcaseProps> = ({ title, imageUrl, description, details }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <img src={imageUrl} alt={title} className="rounded-lg shadow-lg mb-8 lg:mb-0" />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <p className="text-gray-800">{details}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProjectShowcase;
