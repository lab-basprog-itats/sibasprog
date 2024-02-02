// Layout.js
import React from 'react';
import Footer from './Footer'; // Import the Footer component

const Header = ({ children }) => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
      <img src="../public/images/ITATS.png" alt="" className="mb-4 max-w-full" />
      <div className="max-w-md w-full p-10 bg-gray-100 rounded-lg shadow-md">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Header;