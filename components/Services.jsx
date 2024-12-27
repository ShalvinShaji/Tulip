"use client";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import servicesData from "@/lib/servicesData";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
      <h3 className="text-xl text-center mb-6">
        Explore the best travel packages tailored for you
      </h3>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {servicesData.map((service, index) => (
            <div className="embla__slide" key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-mahogany text-white border-2 border-white rounded-full p-2 mr-2 flex items-center justify-center"
          onClick={() => emblaApi.scrollPrev()}
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          className="bg-mahogany text-white border-2 border-white rounded-full p-2 flex items-center justify-center"
          onClick={() => emblaApi.scrollNext()}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Services;
