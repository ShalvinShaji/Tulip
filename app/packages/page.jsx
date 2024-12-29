import React from "react";
import { keralaPackages } from "@/lib/servicesData";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

const page = () => {
  return (
    <section className="below-navbar flex flex-col items-center justify-center text-center min-h-screen section-padding">
      <SectionHeading
        mainHeading={"Our Kerala Packages"}
        subHeading={"Discover the Beauty of God's Own Country"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {keralaPackages.map((packageData, index) => (
          <ServiceCard
            key={index}
            title={packageData.packageName}
            description={packageData.tripDuration}
            imageUrl={packageData.img}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
