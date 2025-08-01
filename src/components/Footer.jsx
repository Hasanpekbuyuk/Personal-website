export default function Footer() {
  return (
    <div className="bg-white dark:bg-[#484148]">
      <footer className="max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Sol Metin */}
        <div className="text-left text-gray-900 dark:text-white">
          <p className="text-2xl sm:text-3xl font-semibold leading-snug">
            Let’s{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-bold">work together</span>
              <span className="absolute left-0 bottom-0 w-full h-2 sm:h-3 bg-pink-500 rounded-sm -z-10"></span>
            </span>{" "}
            on
            <br />
            your next product.
          </p>
        </div>

        {/* Sağ Linkler */}
        <ul className="flex flex-col gap-2 text-right text-lg font-medium">
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-500 transition"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition"
            >
              Personal Blog
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-500 transition"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="mailto:pratamaiosi@gmail.com"
              className="text-pink-600 hover:text-pink-500 transition"
            >
              Email
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
