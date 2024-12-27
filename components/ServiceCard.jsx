import Image from "next/image";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="  rounded-lg shadow-lg p-6 h-full group bg-white bg-opacity-10 backdrop-blur-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="w-full h-48 relative mb-4 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          style={{ objectFit: "cover" }}
          className="rounded transition-transform duration-500 transform scale-100 group-hover:scale-105"
        />
      </div>
      <p className="text-white-500">{description}</p>
    </div>
  );
};

export default ServiceCard;
