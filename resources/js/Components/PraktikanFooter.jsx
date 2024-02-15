import {IconButton, Tooltip, Typography} from "@material-tailwind/react";
import {Icon} from "@iconify/react";

const PraktikanFooter = ({ className }) => {
    const socialData= [
        { name: 'Instagram', path: 'https://www.instagram.com/lbp.itats', icon: 'bi:instagram' },
        { name: 'Youtube', path: 'https://Youtube.com/orang', icon: 'bi:youtube' },
        { name: 'Github', path: 'https://github.com/lab-basprog-itats', icon: 'bi:github'  }
    ];

    return (
        <>
            <footer className={`w-full px-2 md:px-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-3 ${className}`}>
                <Typography className="text-center md:text-start text-sm font-medium">
                    ©2024 Laboratorium Bahasa Pemrograman ITATS
                </Typography>
                <div className="flex items-center gap-4 text-blue-gray-900 sm:justify-center">
                    {
                        socialData.map((social, index) => ((
                            <a key={index} href={social.path} target="_blank" rel="noreferrer">
                                <Tooltip content={social.name}>
                                    <IconButton size="sm">
                                        <Icon icon={social.icon} width={18}/>
                                    </IconButton>
                                </Tooltip>
                            </a>
                        )))
                    }
                </div>
            </footer>
        </>
    );
};

export default PraktikanFooter;
