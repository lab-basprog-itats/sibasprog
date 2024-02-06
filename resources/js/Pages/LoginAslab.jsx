import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

const LoginAslab = () => {
  const { errors } = usePage().props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    Inertia.post('/login', formData);
  };

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
      <img src="../public/images/ITATS.png" alt="" className="mb-4 max-w-full" />
      <h2 className="text-2xl font-sans mb-6 sm:mb-16">Login Aslab</h2>
      <div className="max-w-md w-full p-6 bg-gray-100 rounded-lg shadow-md">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1">NPM</label>
            <input
              type="text"
              name="npm" 
              className="w-full p-2 border rounded-md"
              placeholder="Enter your username"
            />
            {errors.npm && <div className="text-red-500">{errors.npm}</div>}
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password" 
              className="w-full p-2 border rounded-md"
              placeholder="Enter your password"
            />
            {errors.password && <div className="text-red-500">{errors.password}</div>}
          </div>
          <button
            type="submit" 
            className="w-full bg-blue-950 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAslab;
