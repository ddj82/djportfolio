import React from "react";

const Navbar = () => {
  return (
      <nav className="sticky top-0 z-50 bg-gray-800 shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <button
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="text-2xl font-bold text-blue-400"
            >
                DongJun
            </button>
            <ul className="flex space-x-6 text-sm font-medium">
                <li><a href="#about" className="text-white hover:text-blue-300">About</a></li>
            <li><a href="#projects" className="text-white hover:text-blue-300">Projects</a></li>
            <li><a href="#contact" className="text-white hover:text-blue-300">Contact</a></li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
