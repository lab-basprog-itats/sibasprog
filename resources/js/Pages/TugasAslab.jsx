import React, { useState } from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Inertia } from '@inertiajs/inertia';
import HeaderAslab from '../components/HeaderAslab';
import FooterAslab from '../components/FooterAslab';
import SidebarAslab from '../components/SidebarAslab';

const DashboardAslab = () => {
  const [taskName, setTaskName] = useState('');
  const [taskFile, setTaskFile] = useState(null);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskType, setTaskType] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    switch (name) {
      case 'taskName':
        setTaskName(value);
        break;
      case 'taskDescription':
        setTaskDescription(value);
        break;
      case 'taskType':
        setTaskType(value);
        break;
      case 'taskDeadline':
        setTaskDeadline(value);
        break;
      case 'taskFile':
        setTaskFile(files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('taskName', taskName);
    formData.append('taskFile', taskFile);
    formData.append('taskDescription', taskDescription);
    formData.append('taskType', taskType);
    formData.append('taskDeadline', taskDeadline);

    Inertia.post('/submit-task', formData);
    
    setTaskName('');
    setTaskFile(null);
    setTaskDescription('');
    setTaskType('');
    setTaskDeadline('');
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
              <label htmlFor="taskName" className="block text-sm font-medium text-gray-700">Nama Tugas:</label>
              <input
                type="text"
                id="taskName"
                name="taskName"
                value={taskName}
                onChange={handleChange}
                className="mt-3 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="taskFile" className="block text-sm font-medium text-gray-700">File Tugas:</label>
              <input
                type="file"
                id="taskFile"
                name="taskFile"
                onChange={handleChange}
                className="mt-3 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700">Deskripsi:</label>
              <textarea
                id="taskDescription"
                name="taskDescription"
                value={taskDescription}
                onChange={handleChange}
                className="mt-3 p-2 w-full border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="taskType" className="block text-sm font-medium text-gray-700">Jenis Tugas:</label>
              <select
                id="taskType"
                name="taskType"
                value={taskType}
                onChange={handleChange}
                className="mt-3 p-2 w-full border border-gray-300 rounded-md"
              >
                <option value="Modul 1">Modul 1</option>
                <option value="Modul 2">Modul 2</option>
                <option value="Modul 3">Modul 3</option>
                <option value="Modul 4">Modul 4</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="taskDeadline" className="block text-sm font-medium text-gray-700">Durasi Waktu Pengumpulan:</label>
              <DateTime
                id="taskDeadline"
                name="taskDeadline"
                value={taskDeadline}
                onChange={(date) => setTaskDeadline(date)}
                className="mt-3 p-2 w-full border border-gray-300 rounded-md"
                inputProps={{ style: { width: "100%" } }} 
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
