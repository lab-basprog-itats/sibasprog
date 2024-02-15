import PraktikanNavbar from "../Components/PraktikanNavbar.jsx";
import PraktikanSpeedDial from "../Components/PraktikanSpeedDial.jsx";
import {Head, Link} from "@inertiajs/react";
import PraktikanSideDrawer from "../Components/PraktikanSideDrawer.jsx";
import {useEffect, useRef, useState} from "react";
import {Icon} from "@iconify/react";
import PraktikanFooter from "../Components/PraktikanFooter.jsx";
import {Button, Card, CardBody, CardFooter, Typography} from "@material-tailwind/react";

const PraktikanPraktikumPage = ({ auth, praktikanData }) => {
    const [sideLinkOpen, setSideLinkOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);

    const sideLinkContent = {
        reviewPraktikum: [
            {
                text: 'Review Modul 1',
                href: '/praktikan/praktikum#modul-1'
            }, {
                text: 'Review Modul 2',
                href: '/praktikan/praktikum#modul-2'
            }, {
                text: 'Review Modul 3',
                href: '/praktikan/praktikum#modul-3'
            }, {
                text: 'Review Modul 4',
                href: '/praktikan/praktikum#modul-4'
            }, {
                text: 'Review Tes Akhir',
                href: '/praktikan/praktikum#tes-akhir'
            }
        ],
        tugasAsistensi: [
            {
                text: 'Asistensi Modul 1',
                href: '/praktikan/praktikum#asistensi-modul-1'
            },{
                text: 'Asistensi Modul 2',
                href: '/praktikan/praktikum#asistensi-modul-2'
            },{
                text: 'Asistensi Modul 3',
                href: '/praktikan/praktikum#asistensi-modul-3'
            },{
                text: 'Asistensi Modul 4',
                href: '/praktikan/praktikum#asistensi-modul-4'
            }
        ]
    };
    const reviewPraktikumRefs = sideLinkContent.reviewPraktikum.map(() => useRef(null));
    const tugasAsistensiRefs = sideLinkContent.tugasAsistensi.map(() => useRef(null));
    const SideLinkElement = ({ href, children, index, elementRefs }) => {
        const elementRef = elementRefs[index]
        const handleScroll = (event) => {
            event.preventDefault();
            if (elementRef.current) {
                elementRef.current.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center'
                });
                history.pushState({}, "", `#${href}`);
            }
        };

        return (
            <Link href={href} onClick={handleScroll} className="font-medium text-gray-600 hover:text-black">
                { children }
            </Link>
        );
    };

    return (
        <>
            <Head title="Praktikum"/>
            <main className="min-h-screen h-screen overflow-hidden bg-gray-100">
                <PraktikanNavbar auth={auth} praktikanData={praktikanData}/>
                <PraktikanSideDrawer open={drawerOpen} setOpen={handleDrawerOpen} setClose={handleDrawerClose}/>
                <PraktikanSpeedDial/>
                    <div className="mt-1.5 h-[calc(100vh-5.5rem)] flex flex-col gap-y-0.5">
                    <div className="basis-auto flex flex-row gap-x-1.5 overflow-hidden">
                        <section className="px-3 flex-1 h-full overflow-auto space-y-4 bg-gray-50">
                            {
                                reviewPraktikumRefs.map((ref, index) => ((
                                    <Card key={index} ref={ref} className="mx-3">
                                        <CardBody>
                                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                                UI/UX Review Check
                                            </Typography>
                                            <Typography>
                                                The place is close to Barceloneta Beach and bus stop just 2 min by
                                                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                                night life in Barcelona.
                                            </Typography>
                                        </CardBody>
                                        <CardFooter className="pt-0">
                                            <Button>Read More</Button>
                                        </CardFooter>
                                    </Card>
                                )))
                            }
                            <br />
                            {
                                tugasAsistensiRefs.map((ref, index) => ((
                                    <Card key={index} ref={ref} className="mt-6 w-96">
                                        <CardBody>
                                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                                UI/UX Review Check
                                            </Typography>
                                            <Typography>
                                                The place is close to Barceloneta Beach and bus stop just 2 min by
                                                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                                night life in Barcelona.
                                            </Typography>
                                        </CardBody>
                                        <CardFooter className="pt-0">
                                            <Button>Read More</Button>
                                        </CardFooter>
                                    </Card>
                                )))
                            }
                        </section>
                        <section className="hidden md:block basis-56 p-5 overflow-y-auto h-[80vh] bg-gray-50 space-y-4">
                            <div className="flex flex-col gap-y-2 text-sm">
                                <Typography className="font-semibold">
                                    Review Praktikum
                                </Typography>
                                {
                                    sideLinkContent.reviewPraktikum.map(({ href, text}, index) => ((
                                        <SideLinkElement key={index} href={href} index={index} elementRefs={reviewPraktikumRefs}>
                                            { text }
                                        </SideLinkElement>
                                    )))
                                }
                            </div>
                            <div className="flex flex-col gap-y-1.5 text-sm">
                                <Typography className="font-semibold">
                                    Tugas Asistensi
                                </Typography>
                                {
                                    sideLinkContent.tugasAsistensi.map(({ href, text}, index) => ((
                                        <SideLinkElement key={index} href={href} index={index} elementRefs={tugasAsistensiRefs}>
                                            { text }
                                        </SideLinkElement>
                                    )))
                                }
                            </div>
                            <div className="flex flex-col gap-y-1.5 text-sm">
                                <Typography className="font-semibold">
                                    Informasi
                                </Typography>
                                <Link href={'/praktikan/praktikum#tugas-modul-1'}>
                                    Prosedur Praktikum
                                </Link>
                                <Link href={'/praktikan/praktikum#tugas-modul-2'}>
                                    Berkas Praktikum
                                </Link>
                                <Link href={'/praktikan/praktikum#tugas-modul-3'}>
                                    Pelanggaran
                                </Link>
                                <Link href={'/praktikan/praktikum#tugas-modul-4'}>
                                    Pengaduan
                                </Link>
                            </div>
                        </section>
                    </div>
                    <PraktikanFooter className="border-t-[1px] border-gray-600 py-2 basis-48 bg-white" />
                </div>
            </main>
        </>
    );
};

export default PraktikanPraktikumPage;
