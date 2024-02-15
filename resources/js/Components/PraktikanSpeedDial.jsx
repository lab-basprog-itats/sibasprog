import {
    IconButton,
    SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialHandler, Typography
} from "@material-tailwind/react";
import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";
import {Link} from "@inertiajs/react";

const PraktikanSpeedDial = ({ className, elements }) => {
    const actionProps = {
        className: "w-12 h-12 will-change-transform hover:bg-gray-400"
    };
    const labelProps = {
        className: "absolute top-1/2 -left-1/2 -translate-y-1/2 -translate-x-3/4 text-xs font-semibold transform-gpu transition-scale will-change-transform bg-transparent group-hover:text-black"
    };

    return (
        <>
            <div className="fixed z-10 md:hidden right-5 bottom-5">
                <SpeedDial>
                    <SpeedDialHandler>
                        <IconButton size="lg" className="rounded-full">
                            <Icon
                                icon="ic:baseline-plus"
                                className="h-5 w-5 transition-rotate duration-200 ease-in-out rotate-0 group-hover:rotate-45"
                            />
                        </IconButton>
                    </SpeedDialHandler>
                    <SpeedDialContent>
                        <SpeedDialAction { ...actionProps }>
                            <Link href={'/praktikan/dashboard'} only={['auth']}>
                                <Icon icon="lucide:layout-dashboard" width={25} />
                            </Link>
                            <Typography { ...labelProps }>
                                Dashboard
                            </Typography>
                        </SpeedDialAction>
                        <SpeedDialAction { ...actionProps }>
                            <Icon icon="mingcute:task-2-line" width={25} />
                            <Typography { ...labelProps }>
                                Review Modul
                            </Typography>
                        </SpeedDialAction>
                        <SpeedDialAction { ...actionProps }>
                            <Icon icon="mingcute:task-2-line" width={25} />
                            <Typography { ...labelProps }>
                                Asistensi
                            </Typography>
                        </SpeedDialAction>
                        <SpeedDialAction { ...actionProps }>
                            <Icon icon="mingcute:task-2-line" width={25} />
                            <Typography { ...labelProps }>
                                Informasi
                            </Typography>
                        </SpeedDialAction>
                    </SpeedDialContent>
                </SpeedDial>
            </div>

        </>
    )
};

export default PraktikanSpeedDial;
