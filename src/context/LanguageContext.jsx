import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
 
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "tr");
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLanguage = () => setLang((prev) => (prev === "tr" ? "en" : "tr"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
