import {createContext, useState} from "react";
import {ThemeContext} from "./TheneContext.js";

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () =>{
        console.log(111)
        setIsDark(!isDark)

    }

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};