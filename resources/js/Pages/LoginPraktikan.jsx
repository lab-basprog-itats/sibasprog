import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {
    Input,
    Checkbox,
    Button,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { MikaLove, MikaRollCake } from "../Lib/StaticImagesLib";
import { Icon } from "@iconify/react";

const LoginPraktikan = () => {
    const passwordInputRef = useRef(null);

    const getEulaFirstTime = () => {
        const cookie = Cookies.get('sibasprog_eula');
        return !(!!cookie);
    };

    const [ tanyaDialog, setTanyaDialog ] = useState(false);
    const [ eulaDialog, setEulaDialog ] = useState({
        firstTime: getEulaFirstTime(),
        open: false,
        ok: false,
        readed: false,
    });

    const [ form, setForm ] = useState({
        npm: {
            value: "",
            isValid: null,
        },
        password: {
            value: "",
            isVisible: false,
        },
        onSubmit: false,
        onError: null,
    });

    const npmRegex = /^\d{2}\.\d{4}\.\d\.\d{5}$/;

    const handleNPMInput = (value) => {
        if (value.length < form.npm.value.length) {
            return value;
        } else if (value.match(/^\d{2}$/)) {
            return value.concat('.');
        } else if (value.match(/^\d{2}\.\d{4}$/)) {
            return value.concat('.');
        } else if (value.match(/^\d{2}\.\d{4}\.\d$/)) {
            return value.concat('.');
        } else if (value.match(/^\d{2}\.\d{4}\.\d\.\d{5}$/)) {
            setForm((prevState) => ({
                ...prevState,
                npm: {
                    ...prevState.npm,
                    isValid: true,
                },
            }));
        }

        return value;
    };

    useEffect(() => {
        if (form.npm.isValid) {
            passwordInputRef.current && passwordInputRef.current.focus();
        }
    }, [ form.npm.isValid ]);

    useEffect(() => {
        if (eulaDialog.open) {
            setEulaDialog((prevState) => ({
                ...prevState,
                readed: false,
            }));
        }
    }, [ eulaDialog.open ]);

    const formUploadProgress = (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor((loaded * 100) / (total ?? 100));
        console.log(percent);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await axios.get('/sanctum/csrf-cookie').then(() => {
            axios.post('/api/auth/login-aslab', {
                npm: form.npm.value.replace(/\D/g, ''),
                password: form.password.value,
            }, {
                withCredentials: true,
                withXSRFToken: true,
                onUploadProgress: formUploadProgress,
            });
        });
    };

    return (
        <>
            <section className="relative flex flex-row gap-4 z-10 min-h-screen  bg-cover bg-center lg:bg-white">
                <div
                    className="-z-10 absolute lg:hidden top-0 h-full w-full bg-[url(/resources/js/Assets/images/illust_110119150_20230722_063047.png)] bg-cover bg-center"/>
                <div
                    className="w-96 h-[30rem] lg:w-3/5 mx-auto mt-24 py-5 bg-white/85 rounded-lg ring-8 lg:ring-0 ring-white/90">
                    <div className="text-center">
                        <Typography variant="h2" className="font-bold mb-4 flex items-center justify-center">
                            Haloo <span><Icon icon="line-md:heart-twotone" color="red"/></span>
                        </Typography>
                        <Typography
                            variant="paragraph" color="blue-gray"
                            className="text-lg font-normal"
                        >
                            Izinkan Mika mengenalimu..
                        </Typography>
                    </div>
                    <form onSubmit={handleFormSubmit} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <div className="flex flex-col gap-y-1">
                                <Input
                                    label="NPM"
                                    icon={<Icon
                                        icon="material-symbols:account-box"
                                        width={20}
                                    />}
                                    maxLength={15}
                                    error={form.npm.isValid === false}
                                    placeholder="06.20xx.1.xxxx"
                                    value={form.npm.value}
                                    onChange={(event) => {
                                        event.target.value = handleNPMInput(event.target.value);
                                        setForm((prevState) => ({
                                            ...prevState,
                                            npm: {
                                                ...prevState.npm,
                                                value: event.target.value
                                            }
                                        }))
                                        console.log(event.target.value)
                                    }}
                                    onBlur={() => {
                                        setForm((prevState) => ({
                                            ...prevState,
                                            npm: {
                                                ...prevState.npm,
                                                isValid: !!form.npm.value.match(npmRegex)
                                            }
                                        }));
                                    }}
                                />
                                <Typography className="flex flex-row items-center gap-x-0.5 text-[11px]">
                                    {
                                        form.npm.isValid === null
                                            ? <>
                                                <Icon icon="mdi:warning-circle" width={16} color="slategray"/>
                                                Mika akan membantumu menginput NPM!
                                            </>
                                            : form.npm.isValid
                                                ? <>
                                                    <Icon icon="line-md:check-all" width={16} color="green"/>
                                                    Kerja bagus sensei!
                                                </>
                                                : <>
                                                    <Icon icon="mdi:warning-circle" width={16} color="red"/>
                                                    Format NPM yang valid: 06.20xx.1.xxxx
                                                </>
                                    }

                                </Typography>
                            </div>
                            <Input
                                label="Password"
                                inputRef={passwordInputRef}
                                type={form.password.isVisible ? 'text' : 'password'}
                                className="font-medium"
                                icon={<Icon
                                    icon={form.password.isVisible ? 'line-md:heart' : 'tabler:lock-heart'}
                                    width={20}
                                    className="cursor-pointer hover:text-red-700 transition-colors duration-200 ease-in-out"
                                    onClick={() => {
                                        setForm((prevState) => ({
                                            ...prevState,
                                            password: {
                                                ...prevState.password,
                                                isVisible: !prevState.password.isVisible
                                            }
                                        }))
                                    }}
                                />}
                                onChange={(event) => {
                                    setForm((prevState) => ({
                                        ...prevState,
                                        password: {
                                            ...prevState.password,
                                            value: event.target.value
                                        }
                                    }))
                                }}
                            />
                        </div>
                        <div className="flex flex-row -ml-2 items-center">
                            <Checkbox
                                checked={eulaDialog.ok}
                                icon={<Icon icon="bxs:heart-square" color="white"/>}
                                onChange={() => {
                                    if (eulaDialog.firstTime) {
                                        setEulaDialog((prevState) => ({
                                            ...prevState,
                                            open: true
                                        }));
                                        Cookies.set('sibasprog_eula', btoa('mikaa!'), {expires: 365});
                                    } else {
                                        setEulaDialog((prevState) => ({
                                            ...prevState,
                                            ok: !prevState.ok
                                        }));
                                    }
                                }}
                            />
                            <p className="text-xs font-medium">Aku setuju dengan&nbsp;
                                <span
                                    className="font-bold underline underline-offset-2 decoration-1 cursor-pointer"
                                    onClick={() => {
                                        setEulaDialog((prevState) => ({
                                            ...prevState,
                                            open: true
                                        }));
                                    }}
                                >
                                    persyaratan Mika
                                </span>
                            </p>
                        </div>

                        <Button type="submit" className="mt-6" fullWidth
                                disabled={!eulaDialog.ok || !(!!form.npm.isValid) || !(!!form.password.value)}>
                            Masuk
                        </Button>

                        <div className="flex items-center justify-between gap-2 mt-6">
                            <p onClick={() => setTanyaDialog(true)}
                               className="text-xs hover-underline-animation cursor-pointer">
                                Pertanyaan yang sering ditanyakan?
                            </p>
                        </div>
                    </form>

                </div>
                <div className="w-[36rem] h-screen hidden lg:block">
                    <img
                        src={MikaLove}
                        className="h-full w-full object-cover object-center rounded-3xl"
                        alt=""
                    />
                </div>

                <Dialog
                    open={eulaDialog.open}
                    handler={() => setEulaDialog((prevState) => ({
                        ...prevState,
                        open: true
                    }))}
                    className="select-none">
                    <DialogHeader>
                        <Typography variant="h4" className="mx-auto" color="blue-gray">
                            Persyaratan Mika!
                        </Typography>
                    </DialogHeader>
                    <DialogBody
                        onScroll={(event) => {
                            const isReaded = event.currentTarget.clientHeight + event.currentTarget.scrollTop === event.currentTarget.scrollHeight;
                            setEulaDialog((prevState) => ({
                                ...prevState,
                                readed: isReaded
                            }))
                        }}
                        divider
                        className="h-[28rem] grid place-items-center gap-4 overflow-y-scroll text-black"
                    >
                        <img src={MikaRollCake} alt="mika-roll-cake" width={250}/>
                        <Typography color="pink" variant="h4">
                            Cerita tentang Mika
                        </Typography>
                        <Typography className="text-start font-medium indent-4">
                            A member of Trinity's student council, Tea Party, and one of its three student council
                            presidents.
                            She is the childhood friend of Nagisa and has known her for ten years, She calls her
                            Nagi-chan.
                        </Typography>
                        <Typography className="text-start font-medium indent-4">
                            Unlike the other two presidents of the Tea Party, she isn't particularly bright when it
                            comes to politics, but her strength is not to be underestimated.
                            She is a very talkative person, rarely particularly paying much mind to the current mood or
                            flow of the conversation. She likes to interject her own, unfiltered thoughts into the
                            current conversation.
                        </Typography>
                        <Typography className="text-start font-medium indent-4">
                            Mika has long pink hair that turns into a pale blue near the bottom and a bun tied to the
                            right of her head. She has golden eyes. On her back are a pair of angel wings that sprout
                            from around waist level.
                        </Typography>
                        <Typography className="text-start font-medium indent-4">
                            Her halo is comprised of two pink spirals that revolve around a central spherical piece with
                            a ring below it. Three pink sparkles and a number of small blobs float just beyond the
                            sparkles. She's one of the few students with a three-dimensional halo.
                        </Typography>
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button
                            variant="filled" ripple={true}
                            disabled={!eulaDialog.readed}
                            color="black"
                            onClick={() => setEulaDialog((prevState) => ({
                                ...prevState,
                                ok: true,
                                open: false
                            }))}>
                            Okay, Mika
                        </Button>
                    </DialogFooter>
                </Dialog>

                <Dialog open={tanyaDialog} handler={() => setTanyaDialog(true)} className="select-none">
                    <DialogHeader>
                        <Typography variant="h4" className="mx-auto" color="blue-gray">
                            Apakah Data ku aman?
                        </Typography>
                    </DialogHeader>
                    <DialogBody divider className="grid place-items-center gap-4">
                        <img src={MikaRollCake} alt="mika-roll-cake" width={250}/>
                        <Typography color="red" variant="h4">
                            Perhatikan Sebentar
                        </Typography>
                        <ul className="flex flex-col items-start text-black font-semibold">
                            <Typography className="flex flex-row gap-x-0.5">
                                <Icon icon="line-md:heart-filled" className="mt-0.5" color="red"/>
                                Mika Tidak akan mengoleksi Datamu!
                            </Typography>
                            <Typography className="flex flex-row gap-x-0.5">
                                <Icon icon="line-md:heart-filled" className="mt-0.5" color="red"/>
                                Mika akan menghapusnya setelah praktikum ini berakhir
                            </Typography>
                            <Typography className="flex flex-row gap-x-0.5">
                                <Icon icon="line-md:heart-filled" className="mt-0.5" color="red"/>
                                Kamu ingin meminta backup datamu? Tenang saja !</Typography>
                            <Typography className="flex flex-row gap-x-0.5">
                                <Icon icon="line-md:heart-filled" className="mt-0.5" color="red"/>
                                Mika akan memberikannya di akhir praktikum ^-^
                            </Typography>
                        </ul>
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button
                            variant="gradient"
                            ripple={true}
                            onClick={() => setTanyaDialog(!tanyaDialog)}>
                            Okay, Mika
                        </Button>
                    </DialogFooter>
                </Dialog>
            </section>
        </>
    );
};

export default LoginPraktikan;
