import {
    Button,
    Card, CardBody, CardFooter,
    Progress,
    Typography
} from "@material-tailwind/react";
import {Icon} from "@iconify/react";
import {Env, printNpm} from "../Lib/Utils.js";
import {Link} from "@inertiajs/react";

const PraktikanProgressPraktikum = ({ auth }) => {
    return (
        <>
            <Card className="flex-none w-full h-[30rem] md:w-1/2 order-first md:order-none">
                <CardBody>
                    <Typography variant="h5" className="mb-2 flex gap-x-1.5 items-center text-gray-900">
                        <Icon icon="ion:rocket" width={30}/>
                        Progress Praktikum ku
                    </Typography>
                    <div className="font-medium text-gray-900 flex flex-row gap-x-2.5">
                        <p className="truncate">
                            {auth.praktikan.nama}
                        </p>
                        <span className="ml-auto">
                            {printNpm(auth.praktikan.npm)}
                        </span>
                    </div>
                    <div className="flex flex-col py-2 gap-y-5 text-gray-900 font-semibold">
                        <div>
                            <div className="mb-2 flex items-center justify-between gap-4">
                                <Typography color="blue-gray" variant="h6">
                                    Modul 1
                                </Typography>
                                <Typography color="green" className="font-semibold text-sm tracking-wide">
                                    Selesai!
                                </Typography>
                                <Typography color="blue-gray" variant="h6">
                                    100%
                                </Typography>
                            </div>
                            <Progress value={100}/>
                        </div>
                        <div>
                            <div className="mb-2 flex items-center justify-between gap-4">
                                <Typography color="blue-gray" variant="h6">
                                    Modul 2
                                </Typography>
                                <Typography color="red" className="font-semibold text-sm tracking-wide">
                                    Belum Asistensi Aslab!
                                </Typography>
                                <Typography color="blue-gray" variant="h6">
                                    25%
                                </Typography>
                            </div>
                            <Progress value={25}/>
                        </div>
                        <div className="opacity-50">
                            <div className="mb-2 flex items-center justify-between gap-4">
                                <Typography color="blue-gray" variant="h6">
                                    Modul 3
                                </Typography>
                                <Typography color="black" className="font-semibold text-sm tracking-wide">
                                    Belum dimulai
                                </Typography>
                                <Typography color="blue-gray" variant="h6">
                                    0%
                                </Typography>
                            </div>
                            <Progress value={0}/>
                        </div>
                        <div className="opacity-50">
                            <div className="mb-2 flex items-center justify-between gap-4">
                                <Typography color="blue-gray" variant="h6">
                                    Modul 4
                                </Typography>
                                <Typography color="black" className="font-semibold text-sm tracking-wide">
                                    Belum dimulai
                                </Typography>
                                <Typography color="blue-gray" variant="h6">
                                    0%
                                </Typography>
                            </div>
                            <Progress value={0}/>
                        </div>
                        <div className="opacity-50">
                            <div className="mb-2 flex items-center justify-between gap-4">
                                <Typography color="blue-gray" variant="h6">
                                    Tes Akhir
                                </Typography>
                                <Typography color="black" className="-ml-2.5 font-semibold text-sm tracking-wide">
                                    Belum dimulai
                                </Typography>
                                <Typography color="blue-gray" variant="h6">
                                    0%
                                </Typography>
                            </div>
                            <Progress value={0}/>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Link href={`${Env.praktikanUrl}/praktikum`} >
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                            Selengkapnya
                            <Icon icon="ci:arrow-right-lg" width={25}/>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </>
    );
};

export default PraktikanProgressPraktikum;
