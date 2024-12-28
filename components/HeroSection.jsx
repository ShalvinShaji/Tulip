const HeroSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-center h-screen px-4 lg:px-16 gap-8">
      {/* Left Section: Text */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <h1 className="text-4xl lg:text-5xl leading-tight font-Sacramento ">
          <span className="text-8xl  font-extralight">D</span>
          iscover the World with Tulip
        </h1>
        <hr className="border-t border-gray-400 w-2/3 mx-auto lg:mx-0 " />
        <p className="text-md   font-semibold">
          "Travel is the only thing you buy that makes you richer." <br />
          With Tulip, uncover hidden gems, connect with diverse cultures, and
          create unforgettable memories.
        </p>
        <hr className="border-t border-gray-400 w-2/3 mx-auto lg:mx-0 " />
      </div>

      {/* Right Section: Image and Video Grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
        {/* Top Left Image */}
        <div className="row-span-1">
          <img
            src="/images/hero/hero1.jpg"
            alt="Scenic View"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Top Right Video */}
        <div className="row-span-2">
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

        {/* Bottom Left Image */}
        <div className="row-span-1">
          <img
            src="/images/hero/hero2.jpg"
            alt="Traveler"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
