import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import content from "../data/content.json";

export default function Hero() {
  const { lang } = useContext(LanguageContext);
  const hero = content[lang].hero;

  return (
    <section className="bg-gray-100 dark:bg-[#1a1a1a] transition-colors duration-500 py-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative">
        {/* Sol Metinler */}
        <div className="flex-1 max-w-xl text-black dark:text-white">
          <p className="text-base md:text-lg font-medium mb-2">
            {lang === "tr" ? "Merhaba! 👋" : "Hi! 👋"}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
  {hero.headline.replace("{name}", hero.name)} <br />
  {hero.subheadline.replace("{role}", hero.role)} <br />
  {hero.description}
</h1>

          <div className="flex items-center gap-4 text-xl mt-4 text-gray-700 dark:text-gray-300">
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {lang === "tr" ? (
              <>
                Şu anda{" "}
                <span className="text-pink-600 font-medium">
                  UX, UI ve Web Tasarım
                </span>{" "}
                projelerinde freelancer olarak çalışıyorum.
                <br />
                Takımınıza davet edin →{" "}
                <a
                  href="mailto:pratamaiosi@gmail.com"
                  className="text-pink-600 underline font-medium"
                >
                  pratamaiosi@gmail.com
                </a>
              </>
            ) : (
              <>
                Currently freelancing for{" "}
                <span className="text-pink-600 font-medium">
                  UX, UI, & Web Design
                </span>{" "}
                projects.
                <br />
                Invite me to join your team →{" "}
                <a
                  href="mailto:pratamaiosi@gmail.com"
                  className="text-pink-600 underline font-medium"
                >
                  pratamaiosi@gmail.com
                </a>
              </>
            )}
          </p>
        </div>

        
        <div className="flex-1 flex justify-center relative">
          <img
            src="/profile.png"
            alt={`${hero.name} profile photo`}
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-[-15px_-15px_0_0_#E92577] "
          />
        </div>
      </div>
    </section>
  );
}
