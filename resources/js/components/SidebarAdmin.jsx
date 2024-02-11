// import React, { useState } from "react";
// import { CubeTransparentIcon } from "@heroicons/react/24/solid";
// import { InertiaLink } from "@inertiajs/inertia-react";

// const SidebarAdmin = ({ menuOptions }) => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <aside
//             className={`bg-white text-blue-800 ${
//                 isSidebarOpen ? "w-64" : "w-16"
//             } p-8 transition-all duration-300 ease-in-out relative`}
//         >
//             <div className="flex items-center mb-8">
//                 <CubeTransparentIcon className="h-8 w-8 mr-2" />
//                 <h2 className="text-lg font-bold">Admin PAGE</h2>
//             </div>
//             <ul>
//                 {menuOptions.map((option, index) => (
//                     <li key={index} className="py-2 flex items-center">
//                         <CubeTransparentIcon className="h-5 w-5 mr-2" />
//                         {option === "Dashboard Admin" ? (
//                             <InertiaLink href="/shadow">{option}</InertiaLink>
//                         ) : option === "List Praktikan" ? (
//                             <InertiaLink href="/listpraktikan">
//                                 {option}
//                             </InertiaLink>
//                         ) : option === "Tugas Asistensi" ? (
//                             <InertiaLink href="/tugas-aslab">
//                                 {option}
//                             </InertiaLink>
//                         ) : option === "Entry Pelanggaran" ? (
//                             <InertiaLink href="/entrypelanggaran">
//                                 {option}
//                             </InertiaLink>
//                         ) : option === "Unduh Nilai" ? (
//                             <InertiaLink href="/unduhnilai">
//                                 {option}
//                             </InertiaLink>
//                         ) : (
//                             <span>{option}</span>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//             <button
//                 className="absolute bottom-4 left-4 text-blue-700"
//                 onClick={toggleSidebar}
//             >
//                 {isSidebarOpen ? "Close" : "Open"}
//             </button>
//         </aside>
//     );
// };

// export default SidebarAdmin;

import React, { useState } from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import { InertiaLink } from "@inertiajs/inertia-react";

const SidebarAdmin = ({ menuOptions }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <aside
            className={`bg-white text-blue-800 ${
                isSidebarOpen ? "w-64" : "w-16"
            } p-8 transition-all duration-300 ease-in-out relative`}
        >
            <div className="flex items-center mb-8">
                <CubeTransparentIcon className="h-8 w-8 mr-2" />
                <h2 className="text-lg font-bold">Admin PAGE</h2>
            </div>
            <ul>
                {menuOptions.map((option, index) => (
                    <li key={index} className="py-2 flex items-center">
                        <CubeTransparentIcon className="h-5 w-5 mr-2" />
                        {option === "Dashboard" ? (
                            <InertiaLink href="/shadow">{option}</InertiaLink>
                        ) : option === "Management User" ? (
                            <>
                                <button onClick={toggleDropdown}>
                                    {option}
                                </button>
                                {dropdownOpen && (
                                    <ul className="pl-4">
                                        <li className="capitalize">
                                            <InertiaLink href="/manage-dosen">
                                                dosen
                                            </InertiaLink>
                                        </li>
                                        <li className="capitalize">
                                            <InertiaLink href="/manage-aslab">
                                                aslab
                                            </InertiaLink>
                                        </li>
                                    </ul>
                                )}
                            </>
                        ) : option === "Management Praktikum" ? (
                            <>
                                <button onClick={toggleDropdown}>
                                    {option}
                                </button>
                                {dropdownOpen && (
                                    <ul className="pl-4">
                                        <li className="capitalize">
                                            <InertiaLink href="/praktikum">
                                                praktikum
                                            </InertiaLink>
                                        </li>
                                        <li className="capitalize">
                                            <InertiaLink href="/sesi-praktikum">
                                                sesi praktikum
                                            </InertiaLink>
                                        </li>
                                        <li className="capitalize">
                                            <InertiaLink href="/periode-dosen">
                                                dosen aktif
                                            </InertiaLink>
                                        </li>
                                        <li className="capitalize">
                                            <InertiaLink href="/periode-aslab">
                                                aslab aktif
                                            </InertiaLink>
                                        </li>
                                    </ul>
                                )}
                            </>
                        ) : option === "Management Modul" ? (
                            <>
                                <button onClick={toggleDropdown}>
                                    {option}
                                </button>
                                {dropdownOpen && (
                                    <ul className="pl-4">
                                        <li className="capitalize">
                                            <InertiaLink href="/modul-dosen">
                                                modul dosen
                                            </InertiaLink>
                                        </li>
                                        <li className="capitalize">
                                            <InertiaLink href="/modul-aslab">
                                                modul aslab
                                            </InertiaLink>
                                        </li>
                                    </ul>
                                )}
                            </>
                        ) : option === "Management Materi" ? (
                            <InertiaLink href="/manage-materi">
                                {option}
                            </InertiaLink>
                        ) : option === "Management Penilaian" ? (
                            <>
                                <button onClick={toggleDropdown}>
                                    {option}
                                </button>
                                {dropdownOpen && (
                                    <ul className="pl-4">
                                        <li className="capitalize">
                                            <InertiaLink href="/penilaian-dosen">
                                                dosen
                                            </InertiaLink>
                                        </li>
                                        <li className="capitalize">
                                            <InertiaLink href="/penilaian-aslab">
                                                aslab
                                            </InertiaLink>
                                        </li>
                                    </ul>
                                )}
                            </>
                        ) : option === "Management Pelanggaran" ? (
                            <InertiaLink href="/manage-pelanggaran">
                                {option}
                            </InertiaLink>
                        ) : option === "Praktikan" ? (
                            <InertiaLink href="/list-praktikan">
                                {option}
                            </InertiaLink>
                        ) : (
                            <span>{option}</span>
                        )}
                    </li>
                ))}
            </ul>
            <button
                className="absolute bottom-4 left-4 text-blue-700"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? "Close" : "Open"}
            </button>
        </aside>
    );
};

export default SidebarAdmin;
