import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../Components/HeaderAdmin";
import FooterAdmin from "../Components/FooterAdmin";
import SidebarAdmin from "../Components/SidebarAdmin";
import MenuAdmin from "../Components/MenuAdmin";

const PeriodeAslabManageAdmin = () => {
    const aslabs = [
        { id: 1, aslab: "Hello World" },
        { id: 2, aslab: "How Are You" },
        { id: 3, aslab: "Synchronize" },
        { id: 4, aslab: "Asynchronous" },
        { id: 5, aslab: "Mobilizing" },
    ];

    const times = [
        { id: 1, waktu: "Pagi" },
        { id: 2, waktu: "Malam" },
        { id: 3, waktu: "Bebas" },
    ];

    return (
        <div className="flex flex-col md:flex-row">
            <SidebarAdmin menuOptions={MenuAdmin.adminMenuOptions} />
            <div className="flex-grow text-blue-700">
                <HeaderAdmin>
                    <div className="flex flex-row mb-1">
                        <div className="mr-1">
                            <h2 className="text-xl font-bold mb-2 capitalize">
                                Atur Asisten Lab Aktif
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/preview-aslab-aktif"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Preview Asisten Lab Aktif
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
                                    placeholder="Struktur Data"
                                    disabled
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="aslab"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Aslab
                                </label>
                                <div className="relative">
                                    <select
                                        id="aslab"
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    >
                                        {/* <option value="">
                                            Pilih Praktikum
                                        </option> */}
                                        {aslabs.map((aslab) => (
                                            <option
                                                key={aslab.id}
                                                value={aslab.aslab}
                                            >
                                                {aslab.aslab}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="praktikum"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Kuota
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nama"
                                    placeholder="Kuota"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="times"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Kelas Pagi/ Malam
                                </label>
                                <div className="relative">
                                    <select
                                        id="times"
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    >
                                        {/* <option value="">
                                            Pilih Praktikum
                                        </option> */}
                                        {times.map((time) => (
                                            <option
                                                key={time.id}
                                                value={time.waktu}
                                            >
                                                {time.waktu}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 8z" />
                                        </svg>
                                    </div>
                                </div>
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

export default PeriodeAslabManageAdmin;
