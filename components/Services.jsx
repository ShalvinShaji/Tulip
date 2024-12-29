"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicesData from "@/lib/servicesData";
import ServiceCard from "./ServiceCard";

const ServicesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    className: "w-full max-w-6xl mx-auto",
    responsive: [
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 2, // Show 2 slides on medium devices
        },
      },
      {
        breakpoint: 768, // Small devices
        settings: {
          slidesToShow: 1, // Show 1 slide on small devices
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center text-gray-900 mb-4"
          id="services"
        >
          Our Services
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 font-semibold">
          Discover our premium travel experiences
        </p>
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div key={index} className="px-4">
              <ServiceCard
                title={service.title}
                description={service.description}
                imageUrl={service.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesCarousel;
