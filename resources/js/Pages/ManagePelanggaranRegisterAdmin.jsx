import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";
import SidebarAdmin from "../components/SidebarAdmin";

const ManagePelanggaranRegisterAdmin = () => {
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
        <div className="flex flex-col md:flex-row">
            <SidebarAdmin menuOptions={adminMenuOptions} />
            <div className="flex-grow text-blue-700">
                <HeaderAdmin>
                    <div className="flex flex-row mb-1">
                        <div className="mr-1">
                            <h2 className="text-xl font-bold mb-2 capitalize">
                                Register Pelanggaran
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/preview-pelanggaran"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Preview Pelanggaran
                            </InertiaLink>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <form className="p-8">
                            <div className="mb-4">
                                <label
                                    htmlFor="namaPelanggaran"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Nama Pelanggaran
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nama"
                                    placeholder="Masukkan Nama Pelanggaran"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="nilaiPelanggaran"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Nilai Pelanggaran
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nilaipelanggaran"
                                    placeholder="Masukkan Nilai Pelanggaran (Dalam Persen)"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                {/* <label className="block text-gray-700 text-sm font-bold">
                                    <input
                                        type="checkbox"
                                        className="mr-2 leading-tight"
                                    />
                                    Saya setuju dengan syarat dan ketentuan
                                </label> */}
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

export default ManagePelanggaranRegisterAdmin;
