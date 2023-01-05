import React, { useState} from 'react';
import {themeContext} from "./index";

const ModeContext = ({children}) => {
    const [theme, setTheme] = useState(null)
    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    );
};

export default ModeContext;