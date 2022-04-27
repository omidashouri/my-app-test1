const { createContext, useState, useContext } = require("react");

const ThemeContext = createContext(["light", () => {}]);

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    function changeTheme() {
        setTheme((t) => (t === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContextProvider, useTheme };
