import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import HeaderAdmin from "../Components/HeaderAdmin";
import FooterAdmin from "../Components/FooterAdmin";
import SidebarAdmin from "../Components/SidebarAdmin";
import MenuAdmin from "../Components/MenuAdmin";
// import DataStaticAdmin from "../Components/DataStaticAdmin";

const ManageDosenPreviewAdmin = () => {
    const data = [
        {
            nip: "173133",
            name: "Rahmi Rizkiana Putri, S.ST., M.Kom.",
            phoneNumber: "085231261252",
        },
        {
            nip: "001117",
            name: "Dr.Tutuk Indriyani, ST, M.Kom",
            phoneNumber: "085231971485",
        },
        {
            nip: "133011",
            name: "Dr.Rinci Kembang Hapsari, S.Si., M.Kom.",
            phoneNumber: "089628778102",
        },
        {
            nip: "153076",
            name: "Dr.Dian Puspita Hapsari, S.Kom,M.kom.",
            phoneNumber: "085645534446",
        },
        {
            nip: "000001",
            name: "Andy Rachman, ST., M.Kom.",
            phoneNumber: "081000000001",
        },
        {
            nip: "011125",
            name: "Citra Nurina Prabiantissa, S.ST., M.Tr.Kom.",
            phoneNumber: "089611475102",
        },
        {
            nip: "193170",
            name: "Hendro Nugroho, S.T., M.Kom.",
            phoneNumber: "085336130429",
        },
        {
            nip: "153047",
            name: "Siti Agustini, S.ST., M.T.",
            phoneNumber: "081515482010",
        },
        {
            nip: "143025",
            name: "Gusti Eka Yuliastuti, S.Kom.. M.Kom.",
            phoneNumber: "085655124289",
        },
        {
            nip: "193165",
            name: "Dummy Dosen",
            phoneNumber: "082233439933",
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
                                Preview Dosen
                            </h2>
                        </div>
                        <div>
                            <InertiaLink
                                href="/register-dosen"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Register Dosen
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
                                        Nama Dosen
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
                                                {dosen.phoneNumber}
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

export default ManageDosenPreviewAdmin;
