import Image from "next/image";

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="relative w-full h-[400px] bg-white text-black rounded-2xl shadow-xl overflow-hidden cursor-grab">
      <div className="relative h-[200px] w-full bg-gray-100">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-3">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
