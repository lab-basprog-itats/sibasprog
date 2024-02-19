import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";
import SidebarAdmin from "../components/SidebarAdmin";

const ManageDosenRegisterAdmin = () => {
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

    return (
        // <div>
        //     <HeaderAdmin />
        //     <div className="flex">
        //         <SidebarAdmin menuOptions={adminMenuOptions} />
        //         <div className="flex-1 bg-gray-100 min-h-screen">
        //             <div className="p-8">
        //                 <h1 className="text-2xl font-semibold mb-4">
        //                     Register Dosen
        //                 </h1>
        //                 <InertiaLink
        //                     href="/preview-dosen"
        //                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        //                 >
        //                     Preview Dosen
        //                 </InertiaLink>
        //             </div>
        //             <div className="bg-white shadow-md rounded-lg overflow-hidden">
        //                 <form className="p-8">
        //                     <div className="mb-4">
        //                         <label
        //                             htmlFor="nip"
        //                             className="block text-gray-700 text-sm font-bold mb-2"
        //                         >
        //                             NIP
        //                         </label>
        //                         <input
        //                             type="text"
        //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                             id="nip"
        //                             placeholder="Masukkan NIP"
        //                         />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label
        //                             htmlFor="password"
        //                             className="block text-gray-700 text-sm font-bold mb-2"
        //                         >
        //                             Password
        //                         </label>
        //                         <input
        //                             type="password"
        //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                             id="password"
        //                             placeholder="Masukkan Password"
        //                         />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label
        //                             htmlFor="password_confirmation"
        //                             className="block text-gray-700 text-sm font-bold mb-2"
        //                         >
        //                             Konfirmasi Password
        //                         </label>
        //                         <input
        //                             type="password"
        //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                             id="password_confirmation"
        //                             placeholder="Konfirmasi Password"
        //                         />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label
        //                             htmlFor="phoneNumber"
        //                             className="block text-gray-700 text-sm font-bold mb-2"
        //                         >
        //                             No Telepon
        //                         </label>
        //                         <input
        //                             type="text"
        //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                             id="phoneNumber"
        //                             placeholder="Masukkan No Telepon"
        //                         />
        //                     </div>
        //                     <div className="mb-6">
        //                         <label className="block text-gray-700 text-sm font-bold mb-2">
        //                             Foto
        //                         </label>
        //                         <input
        //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        //                             id="file"
        //                             type="file"
        //                         />
        //                     </div>
        //                     <div className="flex items-center justify-between">
        //                         <label className="block text-gray-700 text-sm font-bold">
        //                             <input
        //                                 type="checkbox"
        //                                 className="mr-2 leading-tight"
        //                             />
        //                             Saya setuju dengan syarat dan ketentuan
        //                         </label>
        //                         <button
        //                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        //                             type="submit"
        //                         >
        //                             Register
        //                         </button>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col md:flex-row">
            <SidebarAdmin menuOptions={adminMenuOptions} />
            <div className="flex-grow text-blue-700">
                <HeaderAdmin>
                    <div className="flex flex-row mb-1">
                        <div className="mr-1">
                            <h2 className="text-xl font-bold mb-2 capitalize">
                                Register Dosen
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/preview-dosen"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Preview Dosen
                            </InertiaLink>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <form className="p-8">
                            <div className="mb-4">
                                <label
                                    htmlFor="nip"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    NIP
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nip"
                                    placeholder="Masukkan NIP"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="namaLengkap"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="namaLengkap"
                                    placeholder="Masukkan Nama Lengkap"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    placeholder="Masukkan Password"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Konfirmasi Password
                                </label>
                                <input
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password_confirmation"
                                    placeholder="Konfirmasi Password"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="phoneNumber"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    No Telepon
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phoneNumber"
                                    placeholder="Masukkan No Telepon"
                                />
                            </div>
                            {/* <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Foto
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="file"
                                    type="file"
                                />
                            </div> */}
                            <div className="flex items-center justify-between">
                                <label className="block text-gray-700 text-sm font-bold">
                                    <input
                                        type="checkbox"
                                        className="mr-2 leading-tight"
                                    />
                                    Saya setuju dengan syarat dan ketentuan
                                </label>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </HeaderAdmin>
                <FooterAdmin></FooterAdmin>
            </div>
        </div>
    );
};

export default ManageDosenRegisterAdmin;
