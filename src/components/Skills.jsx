import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import content from "../data/content.json";

export default function Skills() {
  const { lang } = useContext(LanguageContext);
  const skills = content[lang].skills;

  return (
    <section className="px-6 py-12 bg-white dark:bg-[#484148] relative">
      <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-8">
       {lang === "tr" ? "Yetenekler" : "Skills"}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <img
              src={`/icons/${skill.icon}`}
              alt={skill.name}
              className="w-25 h-20"
            />
            <span className="text-xs text-gray-700 dark:text-gray-200 font-medium">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
