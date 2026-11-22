
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {

    const {
        theme,
        language,
        toggleTheme,
        toggleLanguage
    } = useContext(AppContext);

    return (
        <nav>
            <h2>
                {language === "en" ? "My React App" : "ನನ್ನ React ಅಪ್ಲಿಕೇಶನ್"}
            </h2>

            <button onClick={toggleTheme}>
                {theme === "light" ? "Dark Theme" : "Light Theme"}
            </button>

            <button onClick={toggleLanguage}>
                {language === "en" ? "ಕನ್ನಡ" : "English"}
            </button>
        </nav>
    );
}

export default Navbar;
