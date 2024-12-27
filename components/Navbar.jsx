"use client";
import useStore from "@/store/useStore";

const Navbar = () => {
  const { isNavbarOpen, toggleNavbar } = useStore();

  return (
    <nav className="bg-transparent shadow-none fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-mahogany">Tulip</h1>
        <div className="hidden md:flex space-x-6">
          <a
            className="text-white hover:text-mahogany transition duration-300"
            href="/"
          >
            Home
          </a>
          <a
            className="text-white hover:text-mahogany transition duration-300"
            href="/services"
          >
            Services
          </a>
          <a
            className="text-white hover:text-mahogany transition duration-300"
            href="/contact"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isNavbarOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 p-4 bg-black bg-opacity-50">
            <li>
              <a
                className="text-white hover:text-mahogany transition duration-300"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-mahogany transition duration-300"
                href="/services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-mahogany transition duration-300"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
