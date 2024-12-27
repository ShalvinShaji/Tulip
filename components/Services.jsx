const Services = () => {
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Example Service Card */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Service 1</h3>
                    <p className="mt-2">Description of Service 1.</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Service 2</h3>
                    <p className="mt-2">Description of Service 2.</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold">Service 3</h3>
                    <p className="mt-2">Description of Service 3.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;