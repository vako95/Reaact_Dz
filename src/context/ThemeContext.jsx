import { createContext } from "react";
import { useState } from 'react'

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
const[theme,setTheme] = useState({
    isSideBarCollapsed: false,
    
});

const onCollpased = () => {
   setTheme((prev) => {
    return {
        ...prev,
        isSideBarCollapsed:!prev.isSideBarCollapsed
    }
   });
}
    return (
        <ThemeContext.Provider value={{theme,onCollpased}}>
            {children}
        </ThemeContext.Provider>
    )
}


export { ThemeContext, ThemeProvider }