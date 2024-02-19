import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";
import SidebarAdmin from "../components/SidebarAdmin";

const ManageAslabPreviewAdmin = () => {
    const data = [
        {
            npm: "06.2021.1.07461",
            name: "Aloha",
            phoneNumber: "082233439933",
            jenisKelamin: "L",
        },
        {
            npm: "06.2021.1.07465",
            name: "Orang",
            phoneNumber: "082233439933",
            jenisKelamin: "L",
        },
        {
            npm: "06.2021.1.07450",
            name: "Dummy Aslab",
            phoneNumber: "082233439933",
            jenisKelamin: "L",
        },
        {
            npm: "06.2021.1.07445",
            name: "Annyeong",
            phoneNumber: "082233439933",
            jenisKelamin: "P",
        },
        {
            npm: "06.2021.1.07427",
            name: "Konichiwa",
            phoneNumber: "082233439933",
            jenisKelamin: "P",
        },
        {
            npm: "06.2021.1.06542",
            name: "Siap",
            phoneNumber: "082233439933",
            jenisKelamin: "L",
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
                                Preview Aslab
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/register-aslab"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Register Aslab
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
                                        Nama Aslab
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        No Telepon
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Jenis Kelamin
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
                                                {aslab.phoneNumber}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {aslab.jenisKelamin}
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

export default ManageAslabPreviewAdmin;
