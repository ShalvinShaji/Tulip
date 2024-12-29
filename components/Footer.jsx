import React from "react";
import { Facebook, Twitter, Instagram as InstaIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#e2e2e2] text-black py-8 px-6">
      <div className="container mx-auto px-4">
        <div className="mb-4 md:mb-0 text-start">
          <h3 className="text-2xl font-bold font-Sacramento">
            Tulip - Tours & Travels
          </h3>
          <p className="mt-2 font-semibold">
            Explore the world with our exclusive travel packages tailored just
            for you.
          </p>
        </div>
        <div className="mt-6 border-t font-semibold border-gray-700 pt-4 text-start flex flex-col md:flex-row md:items-center md:justify-between items-start justify-start">
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Address:</h4>
            <p className="text-sm">Tulip Tours & Travels</p>
            <p className="text-sm">Royal Plaza VIII/1439</p>
            <p className="text-sm">Near Metro Station Aluva - 683101</p>
            <p className="text-sm">Cochin, Kerala</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Phone Numbers:</h4>
            <p className="text-sm">0484 4863905</p>
            <p className="text-sm">+91 9746463966</p>
            <p className="text-sm">+91 9387705465</p>
          </div>
          <div>
            <h4 className="text-lg ">Socials:</h4>
            <div className="flex justify-center space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                <Twitter />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <InstaIcon />
              </a>
            </div>
          </div>
          <p className="text-sm mt-4">
            &copy; {new Date().getFullYear()} Tulip - Tours & Travels. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
