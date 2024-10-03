import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="px-6 bg-white border-b border-gray-200 font-signika">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="/assets/Logo.png" 
            alt="JONA Logo"
            className="md:ml-6 h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-yellow-500 font-semibold hover:text-yellow-600">
            Beranda
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Tentang Kami
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Layanan Kami
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Cara Kerja
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            FAQ
          </a>
        </nav>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-6 rounded-lg shadow-md"
          >
            Unduh Aplikasi JONA
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Menu icon (hamburger) */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
