// import React, { useState } from "react";
// import { CubeTransparentIcon } from "@heroicons/react/24/solid";
// import { InertiaLink } from "@inertiajs/inertia-react";

// const Sidebar = ({ menuOptions }) => {
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
//                         <InertiaLink href="#">{option}</InertiaLink>{" "}
//                         {/* InertiaLink */}
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

// export default Sidebar;

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

const Sidebar = ({ menuOptions }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
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
                        {option === "Management User" ? (
                            <>
                                <button onClick={toggleDropdown}>
                                    {option}
                                </button>
                                {dropdownOpen && (
                                    <ul className="pl-4">
                                        <li>
                                            <InertiaLink href="/manageDosen">
                                                Dosen
                                            </InertiaLink>
                                        </li>
                                        <li>
                                            <InertiaLink href="/manageAslab">
                                                Aslab
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
                                        <li>
                                            <InertiaLink href="/praktikum">
                                                Praktikum
                                            </InertiaLink>
                                        </li>
                                        <li>
                                            <InertiaLink href="/sesiPraktikum">
                                                Sesi Praktikum
                                            </InertiaLink>
                                        </li>
                                        <li>
                                            <InertiaLink href="/periodeDosen">
                                                Dosen Aktif
                                            </InertiaLink>
                                        </li>
                                        <li>
                                            <InertiaLink href="/periodeAslab">
                                                Aslab Aktif
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
                                        <li>
                                            <InertiaLink href="/modulDosen">
                                                Modul Dosen
                                            </InertiaLink>
                                        </li>
                                        <li>
                                            <InertiaLink href="/modulAslab">
                                                Modul Aslab
                                            </InertiaLink>
                                        </li>
                                    </ul>
                                )}
                            </>
                        ) : option === "Management Penilaian" ? (
                            <>
                                <button onClick={toggleDropdown}>
                                    {option}
                                </button>
                                {dropdownOpen && (
                                    <ul className="pl-4">
                                        <li>
                                            <InertiaLink href="/penilaianDosen">
                                                Dosen
                                            </InertiaLink>
                                        </li>
                                        <li>
                                            <InertiaLink href="/peniolaianAslab">
                                                Aslab
                                            </InertiaLink>
                                        </li>
                                    </ul>
                                )}
                            </>
                        ) : (
                            <InertiaLink href="#">{option}</InertiaLink>
                        )}
                    </li>
                ))}
            </ul>
            <button
                className="absolute bottom-4 left-4 text-blue-700"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? "Close" : "Open"}
            </button>
        </aside>
    );
};

export default Sidebar;
