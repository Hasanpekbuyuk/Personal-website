import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext"; 
import content from "../data/content.json";

export default function Projects() {
  const { lang } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext); 
  const projects = content[lang].projects;

  return (
    <section className="px-6 py-12 bg-white dark:bg-[#484148] relative">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        {lang === "tr" ? "Projeler" : "Projects"}
      </h2>
      <div className="flex flex-col md:flex-row gap-12 justify-center">
        {projects.map((project, idx) => (
          <div
  key={idx}
  className="flex-1 flex flex-col justify-between min-w-[360px] max-w-[400px] rounded-2xl shadow-md p-10 border"
  style={{
    backgroundColor: isDarkMode ? project.darkBgColor : project.bgColor,
    borderColor: "#e5e7eb",
  }}
>
  <div>
    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
      {project.title}
    </h3>
    <p className="text-base text-gray-700 dark:text-gray-300 mb-5">
      {project.desc}
    </p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tags.map((tag, i) => (
        <span
          key={i}
          className="bg-white border border-gray-200 text-gray-800 text-sm px-4 py-1.5 rounded-full font-medium shadow-sm"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center mb-6">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 dark:text-white font-medium underline"
      >
        {lang === "tr" ? "Github'da Gör" : "View on Github"}
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-white font-medium flex items-center gap-1"
      >
       {lang === "tr" ? "Uygulamaya Git" : "Go to app"} <span aria-hidden>→</span>
      </a>
    </div>
  </div>
  <div className="flex justify-center mt-2">
    <img
      src={project.image}
      alt={project.title}
      className="w-[320px] h-[180px] object-cover rounded-lg"
    />
  </div>
</div>

        ))}
      </div>
    </section>
  );
}
