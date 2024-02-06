import React from 'react';
import { CubeTransparentIcon } from '@heroicons/react/24/solid';
import { InertiaLink } from '@inertiajs/inertia-react'; 
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'; 

const Dashboard = () => {
  const adminMenuOptions = ['Dashboard', 'List Praktikan', 'Entry Nilai', 'Entry Pelanggaran', 'Unduh Nilai']; 

  return (
    <div className="flex flex-col md:flex-row"> 
      <Sidebar menuOptions={adminMenuOptions} />
      <div className="flex-grow text-blue-700">
        <Header> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
            <InertiaLink href="/dashboard" className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4">
              <CubeTransparentIcon className="h-6 w-6" />
              <div>
                <p className='text-3xl size-10'>10</p>
                <h3 className="text-xl mb-2">Total Praktikan</h3>
              </div>
            </InertiaLink>

            <InertiaLink href="/aslabs" className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4">
              <CubeTransparentIcon className="h-6 w-6" />
              <div>
                <p className='text-3xl size-10'>5</p>
                <h3 className="text-xl mb-2">Total Aslab</h3>
              </div>
            </InertiaLink>

            <InertiaLink href="/tasks" className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4">
              <CubeTransparentIcon className="h-6 w-6" />
              <div>
                <p className='text-3xl size-10'>4</p>
                <h3 className="text-xl mb-2">Total Tugas</h3>
              </div>
            </InertiaLink>

            <InertiaLink href="/others" className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4">
              <CubeTransparentIcon className="h-6 w-6" />
              <div>
                <p className='text-3xl size-10'>0</p>
                <h3 className="text-xl mb-2">Total Other</h3>
              </div>
            </InertiaLink>
          </div>
        </Header>
      </div>
    </div>
  );
};

export default Dashboard;
