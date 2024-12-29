import Image from "next/image";

const Landing = () => {
  return (
    <div className=" flex flex-col lg:flex-row items-center justify-center text-center min-h-screen section-padding below-navbar ">
      {/* Text Section */}
      <div className="flex-1 space-y-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-5xl font-Sacramento">
          <span className="text-8xl font-extralight">D</span>
          iscover the World with Tulip
        </h1>
        <hr className="border-t border-gray-400 w-1/3 mx-auto lg:ms-0 text-center" />
        <p className="text-md font-semibold">
          "Travel is the only thing you buy that makes you richer." <br />
          With Tulip, uncover hidden gems, connect with diverse cultures, and
          create unforgettable memories.
        </p>
        <hr className="border-t border-gray-400 w-1/3 mx-auto lg:me-0" />
      </div>

      {/* Image and Video Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 p-4 w-full">
        {/* Image 1 */}
        <div className="sm:col-span-1 sm:row-span-1">
          <Image
            src="/images/hero/hero1.jpg"
            alt="Scenic View"
            width={800} // Specify width
            height={400} // Specify height
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Video */}
        <div className="sm:col-span-1 sm:row-span-2 row-span-1 flex justify-center items-start">
          <video
            className="w-full h-full object-cover rounded-lg shadow-md"
            autoPlay
            loop
            muted
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Image 2 */}
        <div className="sm:col-span-1 sm:row-span-1">
          <Image
            src="/images/hero/hero2.jpg"
            alt="Traveler"
            width={800} // Specify width
            height={400} // Specify height
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
