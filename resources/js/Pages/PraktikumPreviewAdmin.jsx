import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../Components/HeaderAdmin";
import FooterAdmin from "../Components/FooterAdmin";
import SidebarAdmin from "../Components/SidebarAdmin";
import MenuAdmin from "../Components/MenuAdmin";
// import DataStaticAdmin from "../Components/DataStaticAdmin";

const PraktikumPreviewAdmin = () => {
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
                                Preview Periode Praktikum
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/register-periode-praktikum"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Atur Periode Praktikum
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
                                        NIP
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
                                {data.map((dosen, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {dosen.nip}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {dosen.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {dosen.praktikum}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {dosen.periode}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {dosen.waktu}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {dosen.kuota}
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

export default PraktikumPreviewAdmin;
