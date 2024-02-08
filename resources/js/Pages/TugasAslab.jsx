import React, { useState } from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Inertia } from '@inertiajs/inertia';
import HeaderAslab from '../components/HeaderAslab';
import FooterAslab from '../components/FooterAslab';
import SidebarAslab from '../components/SidebarAslab';

const DashboardAslab = () => {
  const [kodeSoal, setKodeSoal] = useState('');
  const [modul, setModul] = useState('');
  const [catatan, setCatatan] = useState('');
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    switch (name) {
      case 'kodeSoal':
        setKodeSoal(value);
        break;
      case 'modul':
        setModul(value);
        break;
      case 'catatan':
        setCatatan(value);
        break;
      case 'file':
        setFile(files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('kodeSoal', kodeSoal);
    formData.append('modul', modul);
    formData.append('catatan', catatan);
    formData.append('file', file);

    // Kirim data menggunakan Inertia
    Inertia.post('/submit-task', formData);
    
    // Reset state setelah pengiriman
    setKodeSoal('');
    setModul('');
    setCatatan('');
    setFile(null);
  };

  const adminMenuOptions = ['Dashboard', 'List Praktikan', 'Tugas Asistensi', 'Entry Pelanggaran', 'Unduh Nilai']; 

  return (
    <div className="flex flex-col md:flex-row"> 
      <SidebarAslab menuOptions={adminMenuOptions} />
      <div className="flex-grow text-blue-700">
        <HeaderAslab> 
          <h2 className="text-xl font-bold mb-4">Tugas Aslab</h2>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              <label htmlFor="kodeSoal" className="block text-sm font-medium text-gray-700">Kode Soal:</label>
              <input
                type="text"
                id="kodeSoal"
                name="kodeSoal"
                value={kodeSoal}
                onChange={handleChange}
                className="mt-3 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="modul" className="block text-sm font-medium text-gray-700">Modul:</label>
              <input
                type="text"
                id="modul"
                name="modul"
                value={modul}
                onChange={handleChange}
                required
                className="mt-3 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="catatan" className="block text-sm font-medium text-gray-700">Catatan:</label>
              <textarea
                id="catatan"
                name="catatan"
                value={catatan}
                onChange={handleChange}
                className="mt-3 p-2 w-full border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="file" className="block text-sm font-medium text-gray-700">File:</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
                required
                className="mt-3 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Tambah Tugas
            </button>
          </form>
        </HeaderAslab>
        <FooterAslab></FooterAslab>
      </div>
    </div>
  );
};

export default DashboardAslab;
