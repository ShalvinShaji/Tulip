const Testimonials = () => {
    return (
        <div className="bg-gray-100 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
            <div className="container mx-auto flex flex-col items-center">
                <blockquote className="text-center italic max-w-xl">
                    "This travel agency provided the best experience! Highly recommend!"
                </blockquote>
                <cite className="mt-4 font-semibold">- Happy Client</cite>
            </div>
        </div>
    );
};

export default Testimonials;