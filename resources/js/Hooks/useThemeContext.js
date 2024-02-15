import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeProvider.jsx";

export const useThemeContext = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return { theme, setTheme };
};
