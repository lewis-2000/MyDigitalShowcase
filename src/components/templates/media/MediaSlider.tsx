import React, { useState } from 'react';

interface MediaItem {
  src: string;
  altText: string;
  caption?: string;
}

interface MediaSliderProps {
  mediaItems: MediaItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const MediaSlider: React.FC<MediaSliderProps> = ({ mediaItems, autoPlay = false, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
      }, autoPlayInterval);
      return () => clearInterval(intervalId);
    }
  }, [autoPlay, autoPlayInterval, mediaItems.length]);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img src={item.src} alt={item.altText} className="w-full" />
            {item.caption && <p className="text-center mt-2">{item.caption}</p>}
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white">
        &lt;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white">
        &gt;
      </button>
    </div>
  );
};

export default MediaSlider;
