// import React from "react";

// const header = () => {
//     return (
//         <header className="bg-blue-500 text-white p-5">
//             <h1 className="text-2xl font-bold">Dashboard Admin</h1>
//         </header>
//     );
// };

// export default header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineCog6Tooth } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
// import Sidebar from "./Sidebar";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-blue-500 text-white p-5">
            <div className="flex justify-between items-center">
                <button onClick={toggleSidebar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
                <div className="text-2xl font-bold">Dashboard Admin</div>
                <div>
                    <button className="bg-gray-200 text-gray-800 p-2 rounded">
                        <HiOutlineCog6Tooth />
                    </button>
                    <button className="bg-gray-200 text-gray-800 p-2 rounded ml-2">
                        <HiOutlineLogout />
                    </button>
                    <div className="relative">
                        <button
                            className="bg-gray-200 text-gray-800 p-2 rounded"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            User
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div
                                    className="py-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <Link
                                        to="/change-password"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem"
                                    >
                                        Change Password
                                    </Link>
                                    <Link
                                        to="/logout"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem"
                                    >
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
