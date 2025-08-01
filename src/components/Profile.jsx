import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import content from "../data/content.json";

const Profile = () => {
  const { lang } = useContext(LanguageContext);
  const { birth, city, education, role, about } = content[lang].profile;

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-900 dark:text-white ">
      <h2 className="text-3xl font-bold mb-12 text-center">
  {lang === "tr" ? "Profil" : "Profile"}
</h2>
      
      <div className="flex flex-col md:flex-row gap-12">
        {/* Basic Information Card */}
        <div className="bg-white dark:bg-[#525252] rounded-xl p-8 flex-1 min-w-[260px] shadow-[7px_7px_0_0_#52525280] ">
          <h3 className="text-xl font-semibold text-pink-600 mb-6 relative">
            {lang === "tr" ? "Temel Bilgiler" : "Basic Information"}
          </h3>
          <ul className="space-y-3 text-base leading-relaxed">
            <li>
              <strong>{lang === "tr" ? "Doğum tarihi" : "Birth Date"}:</strong> {birth}
            </li>
            <li>
              <strong>{lang === "tr" ? "İkamet Şehri" : "City"}:</strong> {city}
            </li>
            <li>
              <strong>{lang === "tr" ? "Eğitim Durumu" : "Education"}:</strong> {education}
            </li>
            <li>
              <strong>{lang === "tr" ? "Tercih Ettiği Rol" : "Preferred Role"}:</strong> {role}
            </li>
          </ul>
        </div>

        {/* About Me Card */}
        <div className="flex-1 min-w-[260px]">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 relative inline-block">
            <span className="relative z-10">
              {lang === "tr" ? "Hakkımda" : "About me"}
            </span>
            <span className="absolute left-0 bottom-1 w-full h-2 bg-blue-200 -z-10 rounded"></span>
          </h3>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
