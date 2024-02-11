import React from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import { InertiaLink } from "@inertiajs/inertia-react";
import Header from "../components/Header";
import Sidebar from "../components/SidebarAdmin";

const Shadow = () => {
    const adminMenuOptions = [
        "Dashboard",
        "Management User",
        "Management Praktikum",
        "Management Modul",
        "Management Materi",
        "Management Penilaian",
        "Management Pelanggaran",
        "Praktikan",
    ];

    // const manageUser = ["Dosen", "Aslab"];

    // const managePraktikum = [
    //     "Praktikum",
    //     "Sesi Praktikum",
    //     "Aslab Aktif",
    //     "Dosen Aktif",
    // ];

    // const manageModul = ["Modul Dosen", "Modul Aslab"];

    // const managePenilaian = ["Dosen", "Aslab"];

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar menuOptions={adminMenuOptions} />
            <div className="flex-grow text-blue-700">
                <Header>
                    <h2 className="bold capitalize">
                        Informasi Praktikum Struktur Data 2024
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <InertiaLink
                            href="/periodeDosen"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <CubeTransparentIcon className="h-6 w-6" />
                            <div>
                                <p className="text-3xl size-10">5</p>
                                <h3 className="text-xl mb-2">Dosen Aktif</h3>
                            </div>
                        </InertiaLink>

                        <InertiaLink
                            href="/periodeAslab"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <CubeTransparentIcon className="h-6 w-6" />
                            <div>
                                <p className="text-3xl size-10">10</p>
                                <h3 className="text-xl mb-2">Aslab Aktif</h3>
                            </div>
                        </InertiaLink>

                        <InertiaLink
                            href="/sesiPraktikum"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <CubeTransparentIcon className="h-6 w-6" />
                            <div>
                                <p className="text-3xl size-10">3</p>
                                <h3 className="text-xl mb-2">
                                    Total Sesi Praktikum
                                </h3>
                            </div>
                        </InertiaLink>

                        <InertiaLink
                            href="/modulDosen"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <CubeTransparentIcon className="h-6 w-6" />
                            <div>
                                <p className="text-3xl size-10">4</p>
                                <h3 className="text-xl mb-2">
                                    Total Modul Dosen
                                </h3>
                            </div>
                        </InertiaLink>

                        <InertiaLink
                            href="/modulAslab"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <CubeTransparentIcon className="h-6 w-6" />
                            <div>
                                <p className="text-3xl size-10">4</p>
                                <h3 className="text-xl mb-2">
                                    Total Modul Aslab
                                </h3>
                            </div>
                        </InertiaLink>

                        <InertiaLink
                            href="/daftarPraktikan"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <CubeTransparentIcon className="h-6 w-6" />
                            <div>
                                <p className="text-3xl size-10">99</p>
                                <h3 className="text-xl mb-2">
                                    Total Praktikan
                                </h3>
                            </div>
                        </InertiaLink>
                    </div>
                </Header>
            </div>
        </div>
    );
};

export default Dashboard;

// import React, { useState } from "react";
// import { CubeTransparentIcon } from "@heroicons/react/24/solid";
// import { InertiaLink } from "@inertiajs/inertia-react";

// const Sidebar = ({ menuOptions }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <aside
//       className={`bg-white text-blue-800 ${
//         isSidebarOpen ? "w-64" : "w-16"
//       } p-8 transition-all duration-300 ease-in-out relative`}
//     >
//       <div className="flex items-center mb-8">
//         <CubeTransparentIcon className="h-8 w-8 mr-2" />
//         <h2 className="text-lg font-bold">Admin PAGE</h2>
//       </div>
//       <ul>
//         {menuOptions.map((option, index) => (
//           <li key={index} className="py-2 flex items-center">
//             <CubeTransparentIcon className="h-5 w-5 mr-2" />
//             {option === "Management User" ? (
//               <>
//                 <button onClick={toggleDropdown}>{option}</button>
//                 {dropdownOpen && (
//                   <ul className="pl-4">
//                     <li>
//                       <InertiaLink href="#">Dosen</InertiaLink>
//                     </li>
//                     <li>
//                       <InertiaLink href="#">Aslab</InertiaLink>
//                     </li>
//                   </ul>
//                 )}
//               </>
//             ) : option === "Management Praktikum" ? (
//               <>
//                 <button onClick={toggleDropdown}>{option}</button>
//                 {dropdownOpen && (
//                   <ul className="pl-4">
//                     <li>
//                       <InertiaLink href="#">Praktikum</InertiaLink>
//                     </li>
//                     <li>
//                       <InertiaLink href="#">Sesi Praktikum</InertiaLink>
//                     </li>
//                     <li>
//                       <InertiaLink href="#">Dosen Aktif</InertiaLink>
//                     </li>
//                     <li>
//                       <InertiaLink href="#">Aslab Aktif</InertiaLink>
//                     </li>
//                   </ul>
//                 )}
//               </>
//             ) : (
//               <InertiaLink href="#">{option}</InertiaLink>
//             )}
//           </li>
//         ))}
//       </ul>
//       <button
//         className="absolute bottom-4 left-4 text-blue-700"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? "Close" : "Open"}
//       </button>
//     </aside>
//   );
// };

// export default Sidebar;
