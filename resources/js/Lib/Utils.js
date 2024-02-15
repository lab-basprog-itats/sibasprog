export const printNpm = (npm) => {
    if (!npm) {
        return 'Invalid NPM';
    }
    return `${npm.substring(0, 2)}.${npm.substring(2, 6)}.${npm.substring(6, 7)}.${npm.substring(7)}`;
};
export const Env = {
    appName: import.meta.env.VITE_APP_NAME ?? 'Sibasprog',
    appUrl: import.meta.env.VITE_APP_URL ?? 'http://127.0.0.1:8000',
    praktikanUrl: (import.meta.env.VITE_APP_URL ?? 'http://127.0.0.1:8000').concat('/praktikan')
};

export const getCurrentDate = (locale = 'en-CA') => {
    try {
        return new Date().toLocaleDateString(locale);
    } catch (error) {
        return new Date().toLocaleDateString('en-CA');
    }
}
export const generatePesanWA = (nama, npm) => {
    const jamSaatIni = new Date().getHours();
    const waktu = jamSaatIni >= 5 && jamSaatIni < 10
        ? 'Pagi'
        : jamSaatIni >= 12 && jamSaatIni < 15
            ? 'Siang'
            : jamSaatIni >= 15 && jamSaatIni < 18
                ? 'Sore'
                : 'Malam';
    return `Selamat%20${waktu}%20kak%2C%0Anama%20Saya%20${nama}%0Anpm%20${printNpm(npm)}%0AIngin%20bertanya%20tentang%20`
};
