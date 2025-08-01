// src/App.jsx
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DataSender from "./components/DataSender";


function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="bg-[#f4f4f4] text-black dark:bg-[#1a1a1a] dark:text-white transition-colors duration-500">
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
        <DataSender />
      </div>
    </div>
  );
}

export default App;
