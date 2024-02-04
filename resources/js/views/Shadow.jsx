// import React from "react";
// import Header from "./components/header";
// import Footer from "./components/footer";

// const Dashboard = () => {
//     return (
//         <div className="container mx-auto">
//             <Header />
//             <main className="p-5">
//                 <h2 className="text-xl font-bold mb-5">
//                     Selamat datang di dashboard admin
//                 </h2>
//                 <p>Ini adalah halaman utama dashboard admin.</p>
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default Dashboard;

import React from "react";
import Header from "../Pages/components/header";
import Sidebar from "../components/Sidebar";
import Footer from "../Pages/components/footer";

function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="container mx-auto flex-1 p-5">
                <div className="p-5 bg-teal-500 text-black">
                    <Header />
                </div>
                <main className="p-5">
                    <h2 className="text-xl font-bold mb-5">
                        Selamat datang di dashboard admin
                    </h2>
                    <p>Ini adalah halaman utama dashboard admin.</p>
                </main>
                <div className="bg-gray-200 text-gray-800 p-5">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
