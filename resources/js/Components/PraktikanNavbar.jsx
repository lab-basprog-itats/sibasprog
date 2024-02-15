import {useEffect, useState} from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem, Avatar, Chip, Button, DialogFooter, DialogHeader, Dialog, Breadcrumbs
} from "@material-tailwind/react";
import {Icon} from "@iconify/react";
import {MikaRollCake} from "../Lib/StaticImagesLib.js";
import {Link, router} from "@inertiajs/react";
import {Env, generatePesanWA, getCurrentDate, printNpm} from "../Lib/Utils.js";
import axios from "axios";
import {AuthPropTypes, PraktikanDataPropTypes} from "../PropTypes/ServerSharePropTypes.js";
import PropTypes from "prop-types";

const AslabListMenu = ({ auth, praktikanData }) => {
    if (praktikanData.aslab.noHp.startsWith('0')) {
        praktikanData = {
            ...praktikanData,
            aslab: {
                ...praktikanData.aslab,
                noHp: '62'+praktikanData.aslab.noHp.substring(1)
            }
        }
    }

    return (
        <>
            <Typography className="text-xs font-semibold py-1 px-2">
                Aslab ku saat ini
            </Typography>
            <a
                href={`https://wa.me/${praktikanData.aslab.noHp}?text=${generatePesanWA(auth.praktikan.nama, auth.praktikan.npm)}`}
                rel="noreferrer" target="_blank"
            >
                <MenuItem className="text-sm flex items-center justify-between gap-x-1">
                    <p className="truncate">{praktikanData.aslab.nama} - {printNpm(praktikanData.aslab.npm)}</p>
                    <Icon icon="ic:round-whatsapp" width={22} className="flex-none "/>
                </MenuItem>
            </a>
            <Typography className="text-xs font-semibold py-1 px-2">
                Aslab lainnya
            </Typography>
            <Link
                href={"/list-aslab"} target="_blank"
            >
                <MenuItem className="text-sm flex items-center justify-between">
                    Ke halaman daftar Aslab <Icon icon="lucide:external-link" width={22} />
                </MenuItem>
            </Link>
        </>
    );
}
const ModulListMenu = ({praktikanData}) => {
    const statusProgress = {
        modul1: praktikanData?.jadwalPraktikum?.modul1?.mulai < getCurrentDate()
            ? praktikanData?.statusPraktikum?.modul1?.status
            : null,
        modul2: praktikanData?.jadwalPraktikum?.modul2?.mulai < getCurrentDate()
            ? praktikanData?.statusPraktikum?.modul2?.status
            : null,
        modul3: praktikanData?.jadwalPraktikum?.modul3?.mulai < getCurrentDate()
            ? praktikanData?.statusPraktikum?.modul3?.status
            : null,
        modul4: praktikanData?.jadwalPraktikum?.modul4?.mulai < getCurrentDate()
            ? praktikanData?.statusPraktikum?.modul4?.status
            : null,
        tesAkhir: praktikanData?.jadwalPraktikum?.tesAkhir?.mulai < getCurrentDate()
            ? !!(praktikanData?.statusPraktikum?.tesAkhir)
            : null
    };

    return (
        <>
            <Link href={"/praktikan/praktikum#modul-1"}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className={`flex items-center justify-center rounded-full p-2`}>
                        <Icon icon="gg:notes" width={25} className="text-gray-900 subpixel-antialiased"/>
                    </div>
                    <div className="w-40">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            Modul 1
                        </Typography>
                        <Chip
                            size="sm"
                            className={`${statusProgress.modul1 === null ? 'text-gray-800' : 'text-gray-100'} capitalize rounded-xl -ml-2`}
                            color={statusProgress.modul1 === null ? 'yellow' : statusProgress.modul1 ? 'green' : 'red'}
                            value={statusProgress.modul1 === null ? 'Belum dimulai' : statusProgress.modul1 ? 'Belum dikerjakan' : 'Selesai dikerjakan'}
                        />
                    </div>
                    <Icon icon="lucide:external-link" width={22} className="ml-auto" />
                </MenuItem>
            </Link>
            <Link href={"/praktikan/praktikum#modul-2"}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className={`flex items-center justify-center rounded-full p-2`}>
                        <Icon icon="gg:notes" width={25} className="text-gray-900 subpixel-antialiased"/>
                    </div>
                    <div className="w-40">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            Modul 2
                        </Typography>
                        <Chip
                            size="sm"
                            className={`${statusProgress.modul2 === null ? 'text-gray-800' : 'text-gray-100'} capitalize rounded-xl -ml-2`}
                            color={statusProgress.modul2 === null ? 'yellow' : statusProgress.modul2 ? 'green' : 'red'}
                            value={statusProgress.modul2 === null ? 'Belum dimulai' : statusProgress.modul2 ? 'Belum dikerjakan' : 'Selesai dikerjakan'}
                        />
                    </div>
                    <Icon icon="lucide:external-link" width={22} className="ml-auto" />
                </MenuItem>
            </Link>
            <Link href={"/praktikan/praktikum#modul-3"}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className={`flex items-center justify-center rounded-full p-2`}>
                        <Icon icon="gg:notes" width={25} className="text-gray-900 subpixel-antialiased"/>
                    </div>
                    <div className="w-40">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            Modul 3
                        </Typography>
                        <Chip
                            size="sm"
                            className={`${statusProgress.modul3 === null ? 'text-gray-800' : 'text-gray-100'} capitalize rounded-xl -ml-2`}
                            color={statusProgress.modul3 === null ? 'yellow' : statusProgress.modul3 ? 'green' : 'red'}
                            value={statusProgress.modul3 === null ? 'Belum dimulai' : statusProgress.modul3 ? 'Belum dikerjakan' : 'Selesai dikerjakan'}
                        />
                    </div>
                    <Icon icon="lucide:external-link" width={22} className="ml-auto" />
                </MenuItem>
            </Link>
            <Link href={"/praktikan/praktikum#modul-4"}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className={`flex items-center justify-center rounded-full p-2`}>
                        <Icon icon="gg:notes" width={25} className="text-gray-900 subpixel-antialiased"/>
                    </div>
                    <div className="w-40">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            Modul 4
                        </Typography>
                        <Chip
                            size="sm"
                            className={`${statusProgress.modul4 === null ? 'text-gray-800' : 'text-gray-100'} capitalize rounded-xl -ml-2`}
                            color={statusProgress.modul4 === null ? 'yellow' : statusProgress.modul4 ? 'green' : 'red'}
                            value={statusProgress.modul4 === null ? 'Belum dimulai' : statusProgress.modul4 ? 'Belum dikerjakan' : 'Selesai dikerjakan'}
                        />
                    </div>
                    <Icon icon="lucide:external-link" width={22} className="ml-auto" />
                </MenuItem>
            </Link>
            <Link href={"/praktikan/praktikum#tes-akhir"} className="col-span-full mx-auto">
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className={`flex items-center justify-center rounded-full p-2`}>
                        <Icon icon="simple-line-icons:notebook" width={25} className="text-gray-900 subpixel-antialiased"/>
                    </div>
                    <div className="w-40">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mx-auto flex items-center text-sm font-bold"
                        >
                            Tes Akhir
                        </Typography>
                        <Chip
                            size="sm"
                            className={`${statusProgress.tesAkhir === null ? 'text-gray-800' : 'text-gray-100'} capitalize rounded-xl -ml-2`}
                            color={statusProgress.tesAkhir === null ? 'yellow' : statusProgress.tesAkhir ? 'green' : 'red'}
                            value={statusProgress.tesAkhir === null ? 'Belum dimulai' : statusProgress.tesAkhir ? 'Belum dikerjakan' : 'Selesai dikerjakan'}
                        />
                    </div>
                    <Icon icon="lucide:external-link" width={22} className="ml-auto" />
                </MenuItem>
            </Link>
        </>
    )
};
const NavbarList = ({ auth, praktikanData }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAslabOpen, setIsAslabOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAslabOpen, setIsMobileAslabOpen] = useState(false);
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="/"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Home
                </ListItem>
            </Typography>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{mainAxis: 20}}
                placement="bottom"
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
                        >
                            Praktikum
                            <Icon
                                icon="mdi:chevron-up"
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <Icon
                                icon="mdi:chevron-down"
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
                        <ModulListMenu praktikanData={praktikanData} />
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>
                    <ModulListMenu praktikanData={praktikanData} />
                </Collapse>
            </div>

            <Menu
                open={isAslabOpen}
                handler={setIsAslabOpen}
                offset={{mainAxis: 20}}
                placement="bottom"
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isAslabOpen || isMobileAslabOpen}
                            onClick={() => setIsMobileAslabOpen((prevState) => !prevState)}
                        >
                            Hubungi Aslab
                            <Icon
                                icon="mdi:chevron-up"
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isAslabOpen ? "rotate-180" : ""
                                }`}
                            />
                            <Icon
                                icon="mdi:chevron-down"
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileAslabOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-lg lg:w-72 lg:block">
                    <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
                        <AslabListMenu auth={auth} praktikanData={praktikanData}/>
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileAslabOpen}>
                    <AslabListMenu auth={auth} praktikanData={praktikanData} />
                </Collapse>
            </div>
        </List>
    );
};

const PraktikanNavbar = ({ auth, praktikanData, extraElement }) => {
    const [openNav, setOpenNav] = useState(false);
    const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
    const pathNames = window?.location.pathname.split('/').filter(Boolean);

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth >= 960 && setOpenNav(false)
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <Navbar className="mx-auto min-w-full px-4 py-2 rounded-lg">
                <div className="flex items-center justify-between text-gray-900 font-medium">
                    <div className="flex gap-x-2 items-center justify-evenly">
                        { extraElement }
                        <Breadcrumbs className="hidden lg:flex">
                            <a href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                                </svg>
                            </a>
                            <button disabled className="font-semibold capitalize text-gray-800"
                            >
                                {pathNames[0] ?? 'Praktikan'}
                            </button>
                            {pathNames && pathNames.filter((_, index) => index > 0 && index < pathNames.length - 1).map((path, index) => ((
                                <a
                                    key={index} href={`/${path}`}
                                    className="font-medium capitalize"
                                >
                                    {path}
                                </a>
                            )))}
                            <button disabled className="font-semibold capitalize text-gray-800"
                            >
                                {pathNames[pathNames.length - 1]}
                            </button>
                        </Breadcrumbs>
                        <Typography
                            as="a"
                            href="/"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5 "
                        >
                            Sistem Informasi Basprog
                        </Typography>

                    </div>
                    <div className="hidden lg:block">
                        <NavbarList auth={auth} praktikanData={praktikanData}/>
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className={`order-first lg:hidden ${openNav ? 'bg-gray-200' : ''}`}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <Icon
                            icon={openNav
                                ? 'mingcute:close-fill'
                                : 'mingcute:menu-fill'
                            }
                            strokeWidth={2}
                            width={25}
                            className="w-6 h-6 transition-all duration-200 ease-in-out"
                            color={openNav ? 'red' : 'black'}
                        />
                    </IconButton>
                    <Menu>
                        <MenuHandler>
                            <button className="group flex items-center gap-x-1 bg-transparent hover:bg-gray-200 aria-expanded:bg-gray-200 py-1.5 px-2 rounded-md transition-colors duration-300">
                                <Avatar size="sm" src={MikaRollCake} alt="praktikan-profile-photo" />
                                <Icon icon="mdi:chevron-up" width={25} className="group-aria-expanded:rotate-180 transition-rotate duration-200 ease-in-out"/>
                            </button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>Profil</MenuItem>
                            <MenuItem>Overview</MenuItem>
                            <MenuItem>Forum (beta)</MenuItem>
                            <button disabled className="my-2 w-full h-0.5 bg-gray-400" />
                            <MenuItem onClick={() => setOpenLogoutDialog(true)}>
                                Sign Out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <Collapse open={openNav}>
                    <NavbarList auth={auth} praktikanData={praktikanData} />
                </Collapse>
            </Navbar>

            <Dialog
                open={openLogoutDialog}
                handler={() => setOpenLogoutDialog(false)}
                size="xs"
            >
                <DialogHeader className="text-xl flex items-center justify-center ">Apakah kamu benar ingin Logout?</DialogHeader>
                <DialogFooter>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => setOpenLogoutDialog(false)}
                        className="mr-1"
                    >
                        <span className="text-gray-900">Nah</span>
                    </Button>
                    <Button variant="text" color="gray" onClick={() => {
                        setOpenLogoutDialog(false);
                        axios.post(`${Env.appUrl}/api/auth/logout`, undefined, {
                            withCredentials: true
                        })
                            .then(() => router.visit(`${Env.appUrl}/login`))
                            .catch(() => console.log('ERR'));
                    }}>
                        <span className="font-bold">Okay</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

PraktikanNavbar.propTypes = {
    auth: AuthPropTypes,
    praktikanData: PraktikanDataPropTypes,
    extraElement: PropTypes.element
};

export default PraktikanNavbar;
