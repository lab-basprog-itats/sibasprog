import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";
import SidebarAdmin from "../components/SidebarAdmin";

const ManagePelanggaranPreviewAdmin = () => {
    const data = [
        {
            name: "Sangat Amat luar biasa Salah",
            result: "100",
        },
        {
            name: "Sangat Amat Salah",
            result: "75",
        },
        {
            name: "Sangat Salah",
            result: "50",
        },
        {
            name: "Salah",
            result: "25",
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
                                Preview Pelanggaran
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/register-pelanggaran"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Register Pelanggaran
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
                                        Nama Pelanggaran
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Nilai
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
                                {data.map((foul, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {foul.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {foul.result}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex">
                                                <a
                                                    href="/"
                                                    role="button"
                                                    className="px-3 py-1 text-orange-100 no-underline bg-orange-500 rounded hover:bg-gray-600 hover:underline hover:text-blue-200 mr-2"
                                                >
                                                    Non-Aktifkan
                                                </a>
                                                {/* <a
                                                    href="/"
                                                    role="button"
                                                    className="px-3 py-1 text-green-100 no-underline bg-green-500 rounded hover:bg-gray-600 hover:underline hover:text-blue-200 mr-2"
                                                >
                                                    Aktifkan
                                                </a> */}
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

export default ManagePelanggaranPreviewAdmin;
