import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import MenuAdmin from "../components/MenuAdmin";
// import DataStaticAdmin from "../components/DataStaticAdmin";

const PeriodeAslabPreviewAdmin = () => {
    const data = [
        {
            nip: "468436",
            name: "Aloha",
            praktikum: "Struktur Data",
            periode: "2024",
            waktu: "Pagi",
            kuota: "10",
        },
        {
            nip: "1354672",
            name: "HALO",
            praktikum: "Struktur Data",
            periode: "2024",
            waktu: "Malam",
            kuota: "10",
        },
        {
            nip: "978246",
            name: "Hello World",
            praktikum: "Struktur Data",
            periode: "2024",
            waktu: "Pagi",
            kuota: "10",
        },
        {
            nip: "3159726",
            name: "Hola Wolda",
            praktikum: "Struktur Data",
            periode: "2024",
            waktu: "Malam",
            kuota: "10",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row">
            <SidebarAdmin menuOptions={MenuAdmin.adminMenuOptions} />
            <div className="flex-grow text-blue-700">
                <HeaderAdmin>
                    <div className="flex flex-row mb-1">
                        <div className="mr-1">
                            <h2 className="text-xl font-bold mb-2 capitalize">
                                Preview Asisten Lab Aktif
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/register-aslab-aktif"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Atur Asisten Lab Aktif
                            </InertiaLink>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        NPM
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Nama
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Praktikum
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Periode
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Pagi/Malam
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Kuota
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((aslab, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {aslab.npm}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {aslab.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {aslab.praktikum}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {aslab.periode}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {aslab.waktu}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {aslab.kuota}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex">
                                                <a
                                                    href="/edit"
                                                    role="button"
                                                    className="px-3 py-1 text-blue-100 no-underline bg-blue-500 rounded hover:bg-gray-600 hover:underline hover:text-blue-200 mr-2"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    href="/delete"
                                                    role="button"
                                                    className="px-3 py-1 text-red-100 no-underline bg-red-500 rounded hover:bg-gray-600 hover:underline hover:text-blue-200 mr-2"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </HeaderAdmin>
                <FooterAdmin></FooterAdmin>
            </div>
        </div>
    );
};

export default PeriodeAslabPreviewAdmin;
