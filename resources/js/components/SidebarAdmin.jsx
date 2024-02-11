import React, { useState } from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import { InertiaLink } from "@inertiajs/inertia-react";

const SidebarAdmin = ({ menuOptions }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropdownStyles = `absolute bg-white text-blue-800 py-2 shadow-md w-48 mt-2 rounded right-1/2 transform -translate-x-1/2 z-10`;

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        // setDropdownOpen({
        //     ...dropdowns,
        //     [dropdownName]: !dropdowns[dropdownName],
        // });
    };

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
                                {/* <button onClick={toggleDropdown}>
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
                                )} */}
                                <button onClick={toggleDropdown}>
                                    {option}
                                </button>
                                <div
                                    className={`${
                                        dropdownOpen ? dropdownStyles : "hidden"
                                    }`}
                                    onClick={toggleDropdown}
                                >
                                    {option}
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
                                </div>
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

// import React, { useState } from "react";
// import { CubeTransparentIcon } from "@heroicons/react/24/solid";
// import { InertiaLink } from "@inertiajs/inertia-react";
// import DropdownAdmin from "./DropdownAdmin";

// const SidebarAdmin = ({ menuOptions }) => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = (option) => {
//         setDropdownOpen(!dropdownOpen);
//     };

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
//                     <li key={index} className="py-2 flex items-center relative">
//                         <CubeTransparentIcon className="h-5 w-5 mr-2" />
//                         {option === "Dashboard" ? (
//                             <InertiaLink href="/shadow">{option}</InertiaLink>
//                         ) : option === "Management User" ? (
//                             <DropdownAdmin
//                                 options={["dosen", "aslab"]}
//                                 href={"/manage-"}
//                                 dropdownOpen={dropdownOpen}
//                                 toggleDropdown={toggleDropdown}
//                             />
//                         ) : option === "Management Praktikum" ? (
//                             <DropdownAdmin
//                                 options={[
//                                     "praktikum",
//                                     "sesi praktikum",
//                                     "dosen aktif",
//                                     "aslab aktif",
//                                 ]}
//                                 href={"/praktikum"}
//                                 dropdownOpen={dropdownOpen}
//                                 toggleDropdown={toggleDropdown}
//                             />
//                         ) : option === "Management Modul" ? (
//                             <DropdownAdmin
//                                 options={["modul dosen", "modul aslab"]}
//                                 href={"/modul-"}
//                                 dropdownOpen={dropdownOpen}
//                                 toggleDropdown={toggleDropdown}
//                             />
//                         ) : option === "Management Materi" ? (
//                             <InertiaLink href="/manage-materi">
//                                 {option}
//                             </InertiaLink>
//                         ) : option === "Management Penilaian" ? (
//                             <DropdownAdmin
//                                 options={["dosen", "aslab"]}
//                                 href={"/penilaian-"}
//                                 dropdownOpen={dropdownOpen}
//                                 toggleDropdown={toggleDropdown}
//                             />
//                         ) : option === "Management Pelanggaran" ? (
//                             <InertiaLink href="/manage-pelanggaran">
//                                 {option}
//                             </InertiaLink>
//                         ) : option === "Praktikan" ? (
//                             <InertiaLink href="/list-praktikan">
//                                 {option}
//                             </InertiaLink>
//                         ) : (
//                             <InertiaLink
//                                 href={`/admin/${option.toLowerCase()}`}
//                             >
//                                 {option}
//                             </InertiaLink>
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

// import React, { useState } from "react";
// import { InertiaLink } from "@inertiajs/inertia-react";
// import { CubeTransparentIcon } from "@heroicons/react/24/solid";

// const DropdownAdmin = ({ options, href, dropdownOpen, toggleDropdown }) => {
//     return (
//         <div className="relative">
//             <button
//                 className="flex items-center text-blue-800 hover:text-blue-600"
//                 onClick={() => toggleDropdown(options[0])}
//             >
//                 <CubeTransparentIcon className="h-5 w-5 mr-2" />
//                 {options[0]}
//             </button>
//             {dropdownOpen && (
//                 <ul className="absolute left-0 mt-2 bg-white text-blue-800 p-4 rounded-md shadow-md">
//                     {options.map((option, index) => (
//                         <li key={index}>
//                             <InertiaLink
//                                 href={`${href}${option.toLowerCase()}`}
//                             >
//                                 {option}
//                             </InertiaLink>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// const SidebarAdmin = ({ menuOptions }) => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = (option) => {
//         setDropdownOpen(!dropdownOpen);
//     };

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
//                 {menuOptions.map((option, index) => {
//                     if (option === "Dashboard") {
//                         return (
//                             <li key={index} className="py-2">
//                                 <InertiaLink href="/shadow">
//                                     {option}
//                                 </InertiaLink>
//                             </li>
//                         );
//                     } else if (option === "Management User") {
//                         return (
//                             <li key={index} className="py-2">
//                                 <DropdownAdmin
//                                     options={["dosen", "aslab"]}
//                                     href={"/manage-"}
//                                     dropdownOpen={dropdownOpen}
//                                     toggleDropdown={toggleDropdown}
//                                 />
//                             </li>
//                         );
//                     } else if (option === "Management Praktikum") {
//                         return (
//                             <li key={index} className="py-2">
//                                 <DropdownAdmin
//                                     options={[
//                                         "praktikum",
//                                         "sesi praktikum",
//                                         "dosen aktif",
//                                         "aslab aktif",
//                                     ]}
//                                     href={"/praktikum"}
//                                     dropdownOpen={dropdownOpen}
//                                     toggleDropdown={toggleDropdown}
//                                 />
//                             </li>
//                         );
//                     } else if (option === "Management Modul") {
//                         return (
//                             <li key={index} className="py-2">
//                                 <DropdownAdmin
//                                     options={["modul dosen", "modul aslab"]}
//                                     href={"/modul-"}
//                                     dropdownOpen={dropdownOpen}
//                                     toggleDropdown={toggleDropdown}
//                                 />
//                             </li>
//                         );
//                     } else if (option === "Management Materi") {
//                         return (
//                             <li key={index} className="py-2">
//                                 <InertiaLink href="/manage-materi">
//                                     {option}
//                                 </InertiaLink>
//                             </li>
//                         );
//                     } else if (option === "Management Penilaian") {
//                         return (
//                             <li key={index} className="py-2">
//                                 <InertiaLink href="/manage-penilaian">
//                                     {option}
//                                 </InertiaLink>
//                             </li>
//                         );
//                     }
//                 })}
//             </ul>
//             <button
//                 className="absolute bottom-0 right-0 text-blue-800 hover:text-blue-600"
//                 onClick={toggleSidebar}
//             >
//                 <CubeTransparentIcon className="h-6 w-6" />
//             </button>
//         </aside>
//     );
// };

// export default SidebarAdmin;
