import { InertiaLink } from "@inertiajs/inertia-react";

const LoginAdmin = () => {
    return (
        <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
            <img
                src="../public/images/ITATS.png"
                alt=""
                className="mb-4 max-w-full"
            />
            <h2 className="text-2xl font-sans mb-6 sm:mb-16 capitalize">
                login admin
            </h2>
            <div className="max-w-md w-full p-10 bg-gray-100 rounded-lg shadow-md">
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 capitalize">
                            username
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 capitalize">
                            password
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-blue-950 text-white p-2 rounded-md hover:bg-green-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginAdmin;
