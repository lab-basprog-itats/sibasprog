import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../Components/HeaderAdmin";
import FooterAdmin from "../Components/FooterAdmin";
import SidebarAdmin from "../Components/SidebarAdmin";
import MenuAdmin from "../Components/MenuAdmin";

const SesiPraktikumManageAdmin = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <SidebarAdmin menuOptions={MenuAdmin.adminMenuOptions} />
            <div className="flex-grow text-blue-700">
                <HeaderAdmin>
                    <div className="flex flex-row mb-1">
                        <div className="mr-1">
                            <h2 className="text-xl font-bold mb-2 capitalize">
                                Atur Sesi Praktikum
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/preview-sesi-praktikum"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Preview Sesi Praktikum
                            </InertiaLink>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <form className="p-8">
                            <div className="mb-4">
                                <label
                                    htmlFor="praktikum"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Praktikum
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nama"
                                    placeholder="Struktur Data 2024"
                                    disabled
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="sesi"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Nama Sesi
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="sesi"
                                    placeholder="Nama Sesi"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="waktu"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Waktu
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="waktu"
                                    placeholder="Waktu"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="kuota"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Kuota
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="kuota"
                                    placeholder="Kuota"
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

export default SesiPraktikumManageAdmin;
