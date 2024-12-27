const HeroSection = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-white text-center p-4">
                <h1 className="text-5xl font-bold mb-4">Explore the World with Tulip</h1>
                <p className="text-xl mb-8">"Travel is the only thing you buy that makes you richer."</p>
                
            </div>
        </div>
    );
};

export default HeroSection;