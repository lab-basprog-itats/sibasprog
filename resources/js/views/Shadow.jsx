// import React from "react";
// import Header from "./components/header";
// import Footer from "./components/footer";

// const Dashboard = () => {
//     return (
//         <div className="container mx-auto">
//             <Header />
//             <main className="p-5">
//                 <h2 className="text-xl font-bold mb-5">
//                     Selamat datang di dashboard admin
//                 </h2>
//                 <p>Ini adalah halaman utama dashboard admin.</p>
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default Dashboard;

// import React from "react";
// import Header from "../Pages/components/header";
// import Sidebar from "../components/Sidebar";
// import Footer from "../Pages/components/footer";

// function Dashboard() {
//     return (
//         <div className="flex">
//             <Sidebar />
//             <div className="container mx-auto flex-1 p-5">
//                 <div className="p-5 bg-teal-500 text-black">
//                     <Header />
//                 </div>
//                 <main className="p-5">
//                     <h2 className="text-xl font-bold mb-5">
//                         Selamat datang di dashboard admin
//                     </h2>
//                     <p>Ini adalah halaman utama dashboard admin.</p>
//                 </main>
//                 <div className="bg-gray-200 text-gray-800 p-5">
//                     <Footer />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;

import React from "react";

function Sidebar() {
    return (
        // <div className="bg-gray-800 text-white p-4">
        //     <h1 className="text-2xl font-bold mb-4 uppercase">admin page</h1>
        //     <ul>
        //         <li>
        //             <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        //         </li>
        //         <li>
        //             <h2 className="text-xl font-bold mb-4 mt-4">
        //                 List Praktikan
        //             </h2>
        //         </li>
        //         <li>
        //             <h2 className="text-xl font-bold mb-4 mt-4">Entry Nilai</h2>
        //         </li>
        //         <li>
        //             <h2 className="text-xl font-bold mb-4 mt-4">
        //                 Entry Pelanggaran
        //             </h2>
        //         </li>
        //         <li>
        //             <h2 className="text-xl font-bold mb-4 mt-4">Unduh Nilai</h2>
        //         </li>
        //     </ul>
        // </div>
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

function AdminPage() {
    return (
        <div className="container mx-auto p-4">
            <div className="flex mb-4">
                <Sidebar />
                <div className="w-1/4 mr-4">
                    <ul>
                        <li>Total Praktikan: 10</li>
                        <li>Total Aslab: 5</li>
                        <li>Total Tugas: 4</li>
                        <li>Total Other: 0</li>
                    </ul>
                </div>
                <div className="w-1/4 ml-4">
                    <h2 className="text-xl font-bold mb-2">Profil</h2>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
