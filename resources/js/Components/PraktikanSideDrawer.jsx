import { Fragment, useState } from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    Accordion, AccordionHeader, AccordionBody
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";

const PraktikanSideDrawer = ({ open, setClose }) => {
    const [ tugasAsstOpen, setTugasAsstOpen ] = useState(false);
    const [ reviewModul, setReviewModul ] = useState(false);

    return (
        <Fragment>
            <Drawer open={open} placement={window.innerWidth <= 768 ? 'left' : 'right'} onClose={setClose} overlay={false} className="overflow-y-auto z-30 lg:z-auto">
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" color="blue-gray">
                        Quickstart
                    </Typography>
                    <IconButton className="group" variant="text" color="red" onClick={setClose}>
                        <Icon icon="ic:baseline-close" width={20} className="text-black group-hover:text-red-600"/>
                    </IconButton>
                </div>
                <List>
                    <Link href={`/praktikan/dashboard`}>
                        <Button
                            variant="text" fullWidth={true}
                            className="w-full flex items-center px-3 gap-x-3.5 font-semibold align-baseline text-base text-gray-800 normal-case text-start">
                            <Icon icon="lucide:layout-dashboard" width={22}/>
                            Dashboard
                        </Button>
                    </Link>
                    <ListItem className="p-0 pl-3">
                        <Accordion open={reviewModul} onClick={() => setReviewModul(!reviewModul)}>
                            <AccordionHeader className={`py-3 text-base border-none justify-start gap-x-3.5 `}>
                                <Icon icon="mingcute:task-2-line" width={22}/>
                                <p className="text-gray-800">
                                    Review Modul
                                </p>
                                <Icon
                                    icon="tabler:chevron-up"
                                    width={22}
                                    className={`${reviewModul ? 'rotate-180' : 'rotate-0'} ml-auto transition-rotate duration-200 ease-in-out will-change-auto`}
                                />
                            </AccordionHeader>
                            <AccordionBody className="flex flex-col">
                                <Link href={"#tugas-modul1"}>
                                    <Button
                                        variant="text" fullWidth={true}
                                        className="w-full flex items-center px-3 gap-x-3.5"
                                    >
                                        <Icon icon="ant-design:number-outlined" width={22}/>
                                        Modul 1
                                    </Button>
                                </Link>
                                <Link href={"#tugas-modul2"}>
                                    <Button
                                        variant="text" fullWidth={true}
                                        className="w-full flex items-center px-3 gap-x-3.5"
                                    >
                                        <Icon icon="ant-design:number-outlined" width={22}/>
                                        Modul 2
                                    </Button>
                                </Link>
                                <Link href={"#tugas-modul3"}>
                                    <Button
                                        variant="text" fullWidth={true}
                                        className="w-full flex items-center px-3 gap-x-3.5"
                                    >
                                        <Icon icon="ant-design:number-outlined" width={22}/>
                                        Modul 3
                                    </Button>
                                </Link>
                                <Link href={"#tugas-modul4"}>
                                    <Button
                                        variant="text" fullWidth={true}
                                        className="w-full flex items-center px-3 gap-x-3.5"
                                    >
                                        <Icon icon="ant-design:number-outlined" width={22}/>
                                        Modul 4
                                    </Button>
                                </Link>
                            </AccordionBody>
                        </Accordion>
                    </ListItem>
                    <ListItem className="p-0 pl-3">
                        <Accordion open={tugasAsstOpen} onClick={() => setTugasAsstOpen(!tugasAsstOpen)}>
                            <AccordionHeader className={`py-3 text-base border-none justify-start gap-x-3.5 `}>
                                <Icon icon="mingcute:task-2-line" width={22}/>
                                <p className="text-gray-800">
                                    Tugas Asistensi
                                </p>
                                <Icon
                                    icon="tabler:chevron-up"
                                    width={22}
                                    className={`${tugasAsstOpen ? 'rotate-180' : 'rotate-0'} ml-auto transition-rotate duration-200 ease-in-out will-change-auto`}
                                />
                            </AccordionHeader>
                            <AccordionBody className="flex flex-col">
                                <Link href={"#tugas-modul1"}>
                                    <Button
                                        variant="text" fullWidth={true}
                                        className="w-full flex items-center px-3 gap-x-3.5"
                                    >
                                        <Icon icon="ant-design:number-outlined" width={22}/>
                                        Modul 1
                                    </Button>
                                </Link>
                                <Link href={"#tugas-modul2"}>
                                    <Button
                                        variant="text" fullWidth={true}
                                        className="w-full flex items-center px-3 gap-x-3.5"
                                    >
                                        <Icon icon="ant-design:number-outlined" width={22}/>
                                        Modul 2
                                    </Button>
                                </Link>
                                <Link href={"#tugas-modul3"}>
                                    <Button
                                        variant="text" fullWidth={true}
                                        className="w-full flex items-center px-3 gap-x-3.5"
                                    >
                                        <Icon icon="ant-design:number-outlined" width={22}/>
                                        Modul 3
                                    </Button>
                                </Link>
                                <Link href={"#tugas-modul4"}>
                                    <Button
                                        variant="text" fullWidth={true}
                                        className="w-full flex items-center px-3 gap-x-3.5"
                                    >
                                        <Icon icon="ant-design:number-outlined" width={22}/>
                                        Modul 4
                                    </Button>
                                </Link>
                            </AccordionBody>
                        </Accordion>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <Icon icon="carbon:information-filled" width={22}/>
                        </ListItemPrefix>
                        <Typography className="text-base font-semibold">
                            Informasi Praktikum
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </List>
                <Button className="mt-3 ml-5" size="sm">
                    Documentation
                </Button>
            </Drawer>
        </Fragment>
    );
};

PraktikanSideDrawer.propTypes = {
    open: PropTypes.bool,
    setClose: PropTypes.func
}
export default PraktikanSideDrawer;
