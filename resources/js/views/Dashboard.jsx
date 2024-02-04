import React from 'react';
import Header from '../components/Header.jsx';

const Dashboard = () => {
  return (
    <Header>
      <h2 className="text-2xl font-sans mb-6 sm:mb-16">Dashboard</h2>
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <p>Welcome to the Dashboard!</p>
      </div>
    </Header>
  );
};

export default Dashboard;
