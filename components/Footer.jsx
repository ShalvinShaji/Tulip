const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-2">© 2024 Travel Agency. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:text-blue-400">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-400">Terms of Service</a>
                    <a href="#" className="hover:text-blue-400">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;