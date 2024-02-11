import React from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAslab from "../components/HeaderAslab";
import FooterAslab from "../components/FooterAslab";
import SidebarAslab from "../components/SidebarAslab";

const DashboardAslab = () => {
    const adminMenuOptions = [
        // "Dashboard Admin",
        // "List Praktikan",
        // "Tugas Asistensi",
        // "Entry Pelanggaran",
        // "Unduh Nilai",
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
            <SidebarAslab menuOptions={adminMenuOptions} />
            <div className="flex-grow text-blue-700">
                <HeaderAslab>
                    <h2 className="text-xl font-bold mb-4 capitalize">
                        dashboard admin
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Total Dosen */}
                        <InertiaLink
                            href="/periode-dosen"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 512 512"
                                className="mr-2"
                            >
                                <path
                                    fill="#ff0000"
                                    d="m448 362.7l-117.3-21.3C320 320 320 310.7 320 298.7c10.7-10.7 32-21.3 32-32c10.7-32 10.7-53.3 10.7-53.3c5.5-8 21.3-21.3 21.3-42.7s-21.3-42.7-21.3-53.3C362.7 32 319.2 0 256 0c-60.5 0-106.7 32-106.7 117.3c0 10.7-21.3 32-21.3 53.3s15.2 35.4 21.3 42.7c0 0 0 21.3 10.7 53.3c0 10.7 21.3 21.3 32 32c0 10.7 0 21.3-10.7 42.7L64 362.7C21.3 373.3 0 448 0 512h512c0-64-21.3-138.7-64-149.3"
                                />
                            </svg>
                            <div className="flex items-center flex-col">
                                <div className="flex items-center">
                                    <p className="text-3xl mr-2">5</p>
                                </div>
                                <h3 className="text-xl mb-2 capitalize">
                                    dosen aktif
                                </h3>
                            </div>
                        </InertiaLink>

                        {/* Total Aslab */}
                        <InertiaLink
                            href="/periode-aslab"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 512 512"
                                className="mr-2"
                            >
                                <path
                                    fill="#ff0000"
                                    d="m448 362.7l-117.3-21.3C320 320 320 310.7 320 298.7c10.7-10.7 32-21.3 32-32c10.7-32 10.7-53.3 10.7-53.3c5.5-8 21.3-21.3 21.3-42.7s-21.3-42.7-21.3-53.3C362.7 32 319.2 0 256 0c-60.5 0-106.7 32-106.7 117.3c0 10.7-21.3 32-21.3 53.3s15.2 35.4 21.3 42.7c0 0 0 21.3 10.7 53.3c0 10.7 21.3 21.3 32 32c0 10.7 0 21.3-10.7 42.7L64 362.7C21.3 373.3 0 448 0 512h512c0-64-21.3-138.7-64-149.3"
                                />
                            </svg>
                            <div className="flex items-center flex-col">
                                <div className="flex items-center">
                                    <p className="text-3xl mr-2">5</p>
                                </div>
                                <h3 className="text-xl mb-2 capitalize">
                                    aslab aktif
                                </h3>
                            </div>
                        </InertiaLink>

                        {/* sesi praktikum */}
                        <InertiaLink
                            href="/sesi-praktikum"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="#000080"
                                    d="M277.3 50.2v426.7c64-53.3 170.7-53.3 234.7 0V50.2c-64-53.3-170.7-53.3-234.7 0M0 50.2v426.7c64-53.3 170.7-53.3 234.7 0V50.2C170.7-3.1 64-3.1 0 50.2"
                                />
                            </svg>
                            <div className="flex items-center flex-col">
                                <div className="flex items-center">
                                    <p className="text-3xl mr-2">5</p>
                                </div>
                                <h3 className="text-xl mb-2 capitalize">
                                    sesi praktikum
                                </h3>
                            </div>
                        </InertiaLink>

                        {/* Modul Dosen */}
                        <InertiaLink
                            href="/modul-dosen"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="#000080"
                                    d="M277.3 50.2v426.7c64-53.3 170.7-53.3 234.7 0V50.2c-64-53.3-170.7-53.3-234.7 0M0 50.2v426.7c64-53.3 170.7-53.3 234.7 0V50.2C170.7-3.1 64-3.1 0 50.2"
                                />
                            </svg>
                            <div className="flex items-center flex-col">
                                <div className="flex items-center">
                                    <p className="text-3xl mr-2">5</p>
                                </div>
                                <h3 className="text-xl mb-2 capitalize">
                                    modul dosen
                                </h3>
                            </div>
                        </InertiaLink>

                        {/* Modul aslab */}
                        <InertiaLink
                            href="/modul-dosen"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="#000080"
                                    d="M277.3 50.2v426.7c64-53.3 170.7-53.3 234.7 0V50.2c-64-53.3-170.7-53.3-234.7 0M0 50.2v426.7c64-53.3 170.7-53.3 234.7 0V50.2C170.7-3.1 64-3.1 0 50.2"
                                />
                            </svg>
                            <div className="flex items-center flex-col">
                                <div className="flex items-center">
                                    <p className="text-3xl mr-2">5</p>
                                </div>
                                <h3 className="text-xl mb-2 capitalize">
                                    modul aslab
                                </h3>
                            </div>
                        </InertiaLink>

                        {/* Total Paktikan */}
                        <InertiaLink
                            href="/list-praktikan"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 512 512"
                                className="mr-2"
                            >
                                <path
                                    fill="#7CFC00"
                                    d="m448 362.7l-117.3-21.3C320 320 320 310.7 320 298.7c10.7-10.7 32-21.3 32-32c10.7-32 10.7-53.3 10.7-53.3c5.5-8 21.3-21.3 21.3-42.7s-21.3-42.7-21.3-53.3C362.7 32 319.2 0 256 0c-60.5 0-106.7 32-106.7 117.3c0 10.7-21.3 32-21.3 53.3s15.2 35.4 21.3 42.7c0 0 0 21.3 10.7 53.3c0 10.7 21.3 21.3 32 32c0 10.7 0 21.3-10.7 42.7L64 362.7C21.3 373.3 0 448 0 512h512c0-64-21.3-138.7-64-149.3"
                                />
                            </svg>
                            <div className="flex items-center flex-col">
                                <div className="flex items-center">
                                    <p className="text-3xl mr-2">10</p>
                                </div>
                                <h3 className="text-xl mb-2 capitalize">
                                    total praktikan
                                </h3>
                            </div>
                        </InertiaLink>

                        {/* Total Other */}
                        {/* <InertiaLink
                            href="/listpraktikan"
                            className="bg-white rounded-md shadow-md p-6 flex items-center space-x-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="#000080"
                                    d="M277.3 50.2v426.7c64-53.3 170.7-53.3 234.7 0V50.2c-64-53.3-170.7-53.3-234.7 0M0 50.2v426.7c64-53.3 170.7-53.3 234.7 0V50.2C170.7-3.1 64-3.1 0 50.2"
                                />
                            </svg>
                            <div className="flex items-center flex-col">
                                <div className="flex items-center">
                                    <p className="text-3xl mr-2">5</p>
                                </div>
                                <h3 className="text-xl mb-2">Total Other</h3>
                            </div>
                        </InertiaLink> */}
                    </div>
                </HeaderAslab>
                <FooterAslab></FooterAslab>
            </div>
        </div>
    );
};

export default DashboardAdmin;
