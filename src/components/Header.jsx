import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { lang, toggleLanguage } = useContext(LanguageContext);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="flex justify-end items-center px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-200">
      <div className="flex items-center gap-4 text-xs md:text-sm">
        <button
          onClick={toggleDarkMode}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
            isDarkMode ? "bg-pink-500" : "bg-gray-300"
          }`}
          aria-label="Toggle dark mode"
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 ${
              isDarkMode ? "translate-x-6" : ""
            }`}
          />
        </button>
        <span className="ml-2">
          {lang === "tr" ? "KARANLIK MOD" : "DARK MODE"}
        </span>
        <span className="text-gray-400">|</span>
        <button
          onClick={toggleLanguage}
          className="text-pink-600 font-semibold hover:underline"
        >
          {lang === "tr" ? "ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </button>
      </div>
    </header>
  );
}
