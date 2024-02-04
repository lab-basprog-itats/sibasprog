import React from "react";
import { Inertia } from "@inertiajs/inertia-react";
import Header from "../components/Header.jsx";

const LoginAdmin = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        try {
            await Inertia.post("/login-admin", { username, password });
            Inertia.visit("/resources/js/views/DashboardAdmin.jsx");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <Header>
            <h2 className="text-2xl font-sans mb-6 sm:mb-16 capitalize">
                login admin
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-1 capitalize">username</label>
                    <input
                        type="text"
                        name="username"
                        className="w-full p-2 border rounded-md"
                        placeholder="enter username"
                    />
                </div>
                <div>
                    <label className="block mb-1 capitalize">password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-950 text-white p-2 rounded-md hover:bg-blue-900 transition duration-300 capitalize"
                >
                    login
                </button>
            </form>
        </Header>
    );
};

export default LoginAdmin;
