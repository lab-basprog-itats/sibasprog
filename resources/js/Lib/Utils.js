export const printNpm = (npm) => {
    if (!npm) {
        return 'Invalid NPM';
    }
    return `${npm.substring(0, 2)}.${npm.substring(2, 6)}.${npm.substring(6, 7)}.${npm.substring(7)}`;
};
export const Env = {
    appName: import.meta.env.VITE_APP_NAME ?? 'Sibasprog',
    appUrl: import.meta.env.VITE_APP_URL ?? 'http://127.0.0.1:8000'
};
