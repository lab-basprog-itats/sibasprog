import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import MenuAdmin from "../components/MenuAdmin";

const PeriodeDosenManageAdmin = () => {
    const dosens = [
        { id: 1, dosen: "Hello World" },
        { id: 2, dosen: "How Are You" },
        { id: 3, dosen: "Synchronize" },
        { id: 4, dosen: "Asynchronous" },
        { id: 5, dosen: "Mobilizing" },
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
                                Atur Dosen Aktif
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/preview-dosen-aktif"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Preview Dosen Aktif
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
                                    htmlFor="dosen"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Dosen
                                </label>
                                <div className="relative">
                                    <select
                                        id="dosen"
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    >
                                        {/* <option value="">
                                            Pilih Praktikum
                                        </option> */}
                                        {dosens.map((dosen) => (
                                            <option
                                                key={dosen.id}
                                                value={dosen.dosen}
                                            >
                                                {dosen.dosen}
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

export default PeriodeDosenManageAdmin;
