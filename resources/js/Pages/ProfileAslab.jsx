import React, { useState } from 'react';
import Avatar from 'react-avatar';
import HeaderAslab from '../components/HeaderAslab';
import FooterAslab from '../components/FooterAslab';
import SidebarAslab from '../components/SidebarAslab';

const ProfileAslab = () => {
  const user = {
    name: 'Muhammad Samsul',
    npm: '062021107454',
  };

  const adminMenuOptions = ['Dashboard', 'List Praktikan', 'Tugas Asistensi', 'Entry Pelanggaran', 'Unduh Nilai']; 

  
  return (
    <div className="flex flex-col md:flex-row"> 
      <SidebarAslab menuOptions={adminMenuOptions} />
      <div className="flex-grow text-blue-700">
        <HeaderAslab>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative grid mx-10 mb-4 -mt-14 h-28 place-items-center"> {/* Mengubah nilai margin-top menjadi positif */}
                <Avatar name={user.name} size="120" round={true} />
            </div>
              <div className="flex flex-col items-center gap-4 p-6">
                <p>Nama: {user.name}</p> 
                <p>NPM: {user.npm}</p> 
                <div className="mb-4">
                    <label htmlFor="modul" className="block text-sm font-medium text-gray-700">Old Password</label>
                    <input
                        type="text"
                        id="modul"
                        name="modul"
                        required
                        className="mt-3 p-2 w-full border border-gray-300 rounded-md"
                        />
                </div>
                <div className="mb-4">
                    <label htmlFor="modul" className="block text-sm font-medium text-gray-700">New Password</label>
                    <input
                        type="text"
                        id="modul"
                        name="modul"
                        required
                        className="mt-3 p-2 w-full border border-gray-300 rounded-md"
                        />
                </div>
                <div className="mb-4">
                    <label htmlFor="modul" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="text"
                        id="modul"
                        name="modul"
                        required
                        className="mt-3 p-2 w-full border border-gray-300 rounded-md"
                        />
                </div>
              </div>
            </div>
          </div>
        </HeaderAslab>
        <FooterAslab/>
      </div>
    </div>
  );
};

export default ProfileAslab;
