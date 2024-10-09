import React, { useState, useEffect } from 'react';

type SlideData = {
  image: string;
  alt: string;
  link: string;
  date: string;
  author: string;
};

type JumbotronWithBackgroundImageProps = {
  slides: SlideData[];
};

const JumbotronWithBackgroundImage: React.FC<JumbotronWithBackgroundImageProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [slides.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <a
          key={index}
          href={slide.link}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-label={slide.alt}
        >
          <div className="w-full h-full bg-cover bg-center flex flex-col justify-end p-6 text-white backdrop-brightness-50">
            <div className="backdrop-brightness-50">
              <p className="text-lg font-semibold">{slide.date}</p>
              <p className="text-md">by {slide.author}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default JumbotronWithBackgroundImage;
