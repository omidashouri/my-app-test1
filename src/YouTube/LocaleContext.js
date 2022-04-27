import LocalizedStrings from "react-localization";
const { createContext, useState, useContext } = require("react");

let strings = new LocalizedStrings({
    en: {
        itemInCart: "Items in your cart",
        product: "Product",
        addToCart: "Add to cart"
    },
    hi: {
        itemInCart: "जो तुम्हारे पास हैं",
        product: "उत्पाद",
        addToCart: "कार्ट में जोड़ें"
    }
});

const LocaleContext = createContext();

const LocaleContextProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    function changeLang() {
        setLang((l) => (l === "en" ? "hi" : "en"));
        strings.setLanguage(lang == "hi" ? "en" : "hi");
    }

    return (
        <LocaleContext.Provider value={{ lang, changeLang }}>
            {children}
        </LocaleContext.Provider>
    );
};

const useLang = () => useContext(LocaleContext);

export { LocaleContextProvider, useLang, strings };
