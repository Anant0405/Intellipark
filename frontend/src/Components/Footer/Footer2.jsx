import React from 'react';

export default function Footer2() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12 p-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0">
            <p className="text-2xl font-bold mb-2">"Intelligent Innovation shaping our digital world."</p>
            <p className="text-gray-400 mb-4">Medi-caps University, Indore, India</p>
            <p className="text-gray-400 mb-4">Phone: +91 9399966075 | +91-9691646424 | +91 6267207998</p>
            <p className="text-gray-400 mb-4">Email: amanjain.0916@gmail.com | amitkhatri389@gmail.com | anantjain0405@gmail.com</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Go to top
            </a>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-8">© Intelli-Park. All rights reserved.</p>
      </footer>
    </>
  );
}