import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import Header from '../components/Header.jsx';

const LoginAslab = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const npm = e.target.elements.npm.value;
    const password = e.target.elements.password.value;

    try {
      await Inertia.post('/login-aslab', { npm, password });
      Inertia.visit('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Header>
      <h2 className="text-2xl font-sans mb-6 sm:mb-16">Login Aslab</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1">NPM</label>
          <input
            type="text"
            name="npm"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your NPM"
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-950 text-white p-2 rounded-md hover:bg-blue-900 transition duration-300"
        >
          Login
        </button>
      </form>
    </Header>
  );
};

export default LoginAslab;
