import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <nav className="bg-gray-200 text-gray-800 p-5">
            <ul>
                <li>
                    <Link to="/dashboard" className="mb-2">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/manajemen-aslab" className="mb-2">
                        Manajemen Aslab
                    </Link>
                </li>
                <li>
                    <Link to="/manajemen-dosen" className="mb-2">
                        Manajemen Dosen
                    </Link>
                </li>
                <li>
                    <Link to="/manajemen-mahasiswa" className="mb-2">
                        Manajemen Mahasiswa
                    </Link>
                </li>
                <li>
                    <Link to="/jadwal-kuliah" className="mb-2">
                        Jadwal Kuliah
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
