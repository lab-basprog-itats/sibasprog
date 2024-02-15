import {Head} from "@inertiajs/react";
import PraktikanNavbar from "../Components/PraktikanNavbar.jsx";
import ThemeProvider from "../Contexts/ThemeProvider.jsx";
import PraktikanFooter from "../Components/PraktikanFooter.jsx";
import {PraktikanDataPropTypes} from "../PropTypes/ServerSharePropTypes.js";
import PraktikanProgressPraktikum from "../Components/PraktikanProgressPraktikum.jsx";
import PraktikanTimeline from "../Components/PraktikanTimeline.jsx";

const PraktikanDashboardPage = ({ auth, praktikanData }) => {
    const jadwalPraktikumArray = [
        praktikanData.jadwalPraktikum.modul1,
        praktikanData.jadwalPraktikum.modul2,
        praktikanData.jadwalPraktikum.modul3,
        praktikanData.jadwalPraktikum.modul4,
        praktikanData.jadwalPraktikum.tesAkhir,
    ];

    return (
        <>
            <Head title="Praktikan" />
            <ThemeProvider>
                <PraktikanNavbar auth={auth} praktikanData={ praktikanData }/>
                <div className="py-1 px-3 bg-gray-100 space-y-3 mb-4">
                    <section id="dashboard-timeline-progress" className="py-2 w-full h-auto flex flex-col gap-3 md:flex-row">
                        <PraktikanTimeline
                            className="basis-1/2"
                            jadwalPraktikum={jadwalPraktikumArray}
                        />
                        <PraktikanProgressPraktikum auth={auth} />
                    </section>
                </div>
                <PraktikanFooter className="py-1"/>
            </ThemeProvider>
        </>
    );
};

PraktikanDashboardPage.propTypes = {
    praktikanData: PraktikanDataPropTypes
}

export default PraktikanDashboardPage;
