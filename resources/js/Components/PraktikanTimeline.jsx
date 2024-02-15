import {
    Accordion,
    AccordionBody,
    AccordionHeader, Card,
    Timeline, TimelineBody,
    TimelineConnector, TimelineHeader, TimelineIcon,
    TimelineItem,
    Typography
} from "@material-tailwind/react";
import {Icon} from "@iconify/react";
import {useState} from "react";
import {format} from "date-fns";
import {id} from "date-fns/locale";

const PraktikanTimeline = ({ jadwalPraktikum, className }) => {
    const [accordionOpen, setAccordionOpen] = useState([]);
    const timelineDate = (date) => {
        try {
            return format(date, 'PPPP', { locale: id });
        } catch (error) {
            return new Date().toLocaleDateString('id_ID');
        }
    };

    return (
        <>
            <Card className={`px-5 py-2 space-y-1 ${className}`}>
                <Typography variant="h4" className="mt-2 text-gray-800 flex items-center gap-x-1.5">
                    <Icon icon="mdi:chart-timeline-variant-shimmer" strokeWidth={4} width={30}/>
                    Timeline Praktikum
                </Typography>
                {
                    jadwalPraktikum.map((jadwal, index) => ((
                        <Accordion
                            key={index}
                            open={accordionOpen.includes(index)}
                            icon={<Icon icon="ion:chevron-up" className={`${accordionOpen.includes(index) ? 'rotate-180' : 'rotate-0'} transition-all duration-200`} />}
                        >
                            <AccordionHeader onClick={() => {
                                const newAccordionsValue = accordionOpen.includes(index)
                                    ? accordionOpen.filter((accordion) => accordion !== index)
                                    : [...accordionOpen, index];
                                setAccordionOpen(newAccordionsValue);
                            }}>
                                { index !== jadwalPraktikum.length - 1
                                    ? `Modul ${index + 1}`
                                    : 'Tes Akhir'
                                }
                            </AccordionHeader>
                            <AccordionBody>
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineConnector/>
                                        <TimelineHeader>
                                            <TimelineIcon
                                                className="p-2 text-gray-200 border-[3px] border-black ring-[3px] ring-gray-200 ring-inset"
                                            >
                                                <Icon icon="mdi:calendar-time" width={22}/>
                                            </TimelineIcon>
                                            <Typography variant="h5" color="blue-gray">
                                                Waktu pelaksanaan
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography className="font-normal text-gray-800">
                                                Praktikum modul { index + 1 } akan dilaksanakan mulai&nbsp;
                                                <strong>{ timelineDate(jadwal.mulai) }</strong> hingga&nbsp;
                                                <strong>{ timelineDate(jadwal.akhir) }</strong>
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineConnector/>
                                        <TimelineHeader>
                                            <TimelineIcon
                                                className="p-2 text-gray-200 border-[3px] border-black ring-[3px] ring-gray-200 ring-inset"
                                            >
                                                <Icon icon="clarity:note-edit-line" width={22}/>
                                            </TimelineIcon>
                                            <Typography variant="h5" color="blue-gray">
                                                Praktikum
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography className="font-normal text-gray-800">
                                                Praktikum modul { index + 1 } akan dilaksanakan pada&nbsp;
                                                <strong>{ timelineDate(jadwal.mulai) }</strong>
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineConnector/>
                                        <TimelineHeader>
                                            <TimelineIcon
                                                className="p-2 text-gray-200 border-[3px] border-black ring-[3px] ring-gray-200 ring-inset">
                                                <Icon icon="iconoir:people-tag" width={22}/>
                                            </TimelineIcon>
                                            <Typography variant="h5" color="blue-gray">
                                                Asistensi
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography className="font-normal text-gray-800">
                                                Asistensi Aslab untuk Praktikum modul { index + 1 } akan dilaksanakan mulai&nbsp;
                                                <strong>{ timelineDate(jadwal.mulai) }</strong> hingga&nbsp;
                                                <strong>{ timelineDate(jadwal.akhir) }</strong> Menyesuaikan dengan jadwal Aslab masing-masing
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineHeader>
                                            <TimelineIcon className="p-2 text-gray-200 border-[3px] border-black ring-[3px] ring-gray-200 ring-inset">
                                                <Icon icon="clarity:note-edit-line" width={22}/>
                                            </TimelineIcon>
                                            <Typography variant="h5" color="blue-gray">
                                                Asistensi Dosen
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography className="font-normal text-gray-800">
                                                Asistensi Dosen untuk Praktikum modul { index + 1 } akan dilaksanakan mulai&nbsp;
                                                <strong>{ timelineDate(jadwal.mulai) }</strong> hingga&nbsp;
                                                <strong>{ timelineDate(jadwal.mulai) }</strong> Menyesuaikan dengan jadwal Dosen masing-masing
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                </Timeline>
                            </AccordionBody>
                        </Accordion>
                    )))
                }
            </Card>
        </>
    );
};

export default PraktikanTimeline;
