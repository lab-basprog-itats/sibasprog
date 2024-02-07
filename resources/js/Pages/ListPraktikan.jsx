import React from 'react';
import { CubeTransparentIcon } from '@heroicons/react/24/solid';
import { InertiaLink } from '@inertiajs/inertia-react'; 
import Header from '../components/Header';
import Sidebar from '../components/SidebarAslab'; 

const DashboardAslab = () => {
  const adminMenuOptions = ['Dashboard', 'List Praktikan', 'Entry Nilai', 'Entry Pelanggaran', 'Unduh Nilai']; 

  return (
    <div className="flex flex-col md:flex-row"> 
      <Sidebar menuOptions={adminMenuOptions} />
      <div className="flex-grow text-blue-700">
        <Header> 
        </Header>
      </div>
    </div>
  );
};

export default DashboardAslab;
