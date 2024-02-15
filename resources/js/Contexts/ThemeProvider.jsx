import {createContext, useEffect, useState} from "react";
import Cookies from "js-cookie";

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
    const getThemeCookie = () => {
        const cookie = Cookies.get('sibasprog_theme');
        if (!cookie) {
            const userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
            Cookies.set('sibasprog_theme', btoa(userTheme));
            return userTheme;
        }
        return atob(cookie);
    };
    const [theme, setTheme] = useState(getThemeCookie());
    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.add('orang');
        } else if (theme === 'dark') {
            document.body.classList.add('dark');
        }
    }, [theme]);


    return (
        <>
            <ThemeContext.Provider value={{
                theme, setTheme
            }} >
                { children }
            </ThemeContext.Provider>
        </>
    )
};

export default ThemeProvider;
