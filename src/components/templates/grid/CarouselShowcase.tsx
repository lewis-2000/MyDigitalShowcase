import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../../../assets/img/img1.jpg'

type CarouselItem = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
};

const carouselItems: CarouselItem[] = [
  { id: 1, title: 'Project Alpha', imageUrl: Img1, description: 'Description of Project Alpha.' },
  { id: 2, title: 'Project Beta', imageUrl: Img1, description: 'Description of Project Beta.' },
  { id: 3, title: 'Project Gamma', imageUrl: Img1, description: 'Description of Project Gamma.' },
  // Add more items as needed
];

const CarouselShowcase: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CarouselShowcase;
