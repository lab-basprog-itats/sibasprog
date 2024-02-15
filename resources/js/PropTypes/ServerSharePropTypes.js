import PropTypes from "prop-types";

export const AuthPropTypes = PropTypes.shape({
    admin: PropTypes.shape({
        nama: PropTypes.string,
        username: PropTypes.string,
    }),
    aslab: PropTypes.shape({
        npm: PropTypes.string,
        nama: PropTypes.string,
    }),
    praktikan: PropTypes.shape({
        npm: PropTypes.string,
        nama: PropTypes.string,
    }),
});

export const PraktikanDataPropTypes = PropTypes.shape({
    praktikan: PropTypes.shape({
        aslab: PropTypes.shape({
            nama: PropTypes.string,
            npm: PropTypes.string,
            noHp: PropTypes.string,
        }),
        dosen: PropTypes.shape({
            nama: PropTypes.string,
            nip: PropTypes.string,
            noHp: PropTypes.string,
        }),
        statusPraktikum: PropTypes.shape({
            modul1: PropTypes.shape({
                praktikum: PropTypes.number,
                asistensi: PropTypes.number,
                sikap: PropTypes.string,
                catatan: PropTypes.string,
                status: PropTypes.bool
            }),
            modul2: PropTypes.shape({
                praktikum: PropTypes.number,
                asistensi: PropTypes.number,
                sikap: PropTypes.string,
                catatan: PropTypes.string,
                status: PropTypes.bool
            }),
            modul3: PropTypes.shape({
                praktikum: PropTypes.number,
                asistensi: PropTypes.number,
                sikap: PropTypes.string,
                catatan: PropTypes.string,
                status: PropTypes.bool
            }),
            modul4: PropTypes.shape({
                praktikum: PropTypes.number,
                asistensi: PropTypes.number,
                sikap: PropTypes.string,
                catatan: PropTypes.string,
                status: PropTypes.bool
            }),
            tesAkhir: PropTypes.number
        }),
        jadwalPraktikum: PropTypes.shape({
            modul1: PropTypes.shape({
                mulai: PropTypes.string,
                akhir: PropTypes.string
            }),
            modul2: PropTypes.shape({
                mulai: PropTypes.string,
                akhir: PropTypes.string
            }),
            modul3: PropTypes.shape({
                mulai: PropTypes.string,
                akhir: PropTypes.string
            }),
            modul4: PropTypes.shape({
                mulai: PropTypes.string,
                akhir: PropTypes.string
            }),
            tesAkhir: PropTypes.shape({
                mulai: PropTypes.string,
                akhir: PropTypes.string
            }),
        }),
    })
});
