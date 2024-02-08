import React, { useState } from 'react';
import { CubeTransparentIcon } from '@heroicons/react/24/solid'; 
import { InertiaLink } from '@inertiajs/inertia-react'; 

const SidebarAslab = ({ menuOptions }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`bg-white text-blue-800 ${isSidebarOpen ? 'w-64' : 'w-16'} p-8 transition-all duration-300 ease-in-out relative`}>
      <div className="flex items-center mb-8">
        <CubeTransparentIcon className="h-8 w-8 mr-2" />
        <h2 className="text-lg font-bold">ASLAB PAGE</h2>
      </div>
      <ul>
      {menuOptions.map((option, index) => (
        <li key={index} className="py-2 flex items-center">
          <CubeTransparentIcon className="h-5 w-5 mr-2" />
          { option === 'Dashboard' ? (
            <InertiaLink href="/dashboard-aslab">{option}</InertiaLink>
          ) : option === 'List Praktikan' ? (
            <InertiaLink href="/listpraktikan">{option}</InertiaLink>
          ) : option === 'Entry Nilai' ? (
            <InertiaLink href="/entrynilai">{option}</InertiaLink>
          ) : option === 'Entry Pelanggaran' ? (
            <InertiaLink href="/entrypelanggaran">{option}</InertiaLink>
          ) : option === 'Unduh Nilai' ? (
            <InertiaLink href="/unduhnilai">{option}</InertiaLink>
          ) : (
            <span>{option}</span>
          )}
        </li>
      ))}
      </ul>
      <button className="absolute bottom-4 left-4 text-blue-700" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close' : 'Open'}
      </button>
    </aside>
  );
};

export default SidebarAslab;
