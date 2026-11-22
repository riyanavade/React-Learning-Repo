
import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {

    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("en");

    function toggleTheme() {
        setTheme((previousTheme) =>
            previousTheme === "light" ? "dark" : "light"
        );
    }

    function toggleLanguage() {
        setLanguage((previousLanguage) =>
            previousLanguage === "en" ? "kn" : "en"
        );
    }

    return (
        <AppContext.Provider
            value={{
                theme,
                language,
                toggleTheme,
                toggleLanguage
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
