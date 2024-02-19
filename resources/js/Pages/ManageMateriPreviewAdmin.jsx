import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";
import SidebarAdmin from "../components/SidebarAdmin";

const ManageMateriPreviewAdmin = () => {
    const data = [
        {
            praktikum: "Struktur Data",
            name: "Struct",
        },
        {
            praktikum: "Struktur Data",
            name: "Sorting-Searching",
        },
        {
            praktikum: "Struktur Data",
            name: "Stack-Queue",
        },
        {
            praktikum: "Struktur Data",
            name: "Sorting-Searching",
        },
    ];

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
                                Preview Materi
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/register-materi"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Register Materi
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
                                        Praktikum
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Nama Materi
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
                                {data.map((materi, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {materi.praktikum}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {materi.name}
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

export default ManageMateriPreviewAdmin;
