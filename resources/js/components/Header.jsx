import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'; 

const Header = ({ children }) => {
  return (
    <div className="bg-blue-100 min-h-screen flex-col">
      <div className="flex items-center justify-between px-4 sm:px-10 py-1 bg-blue-900 shadow-md">
        <div className='h-12 sm:h-28 ml-auto'>
          {/* Opsi profil */}
          <InertiaLink href="/profile" className="text-white hover:text-blue-100 h-12 sm:h-auto">Profil</InertiaLink>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto mt-[-50px] h-full p-4 sm:p-12 bg-gray-100 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Header;
