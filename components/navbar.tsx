"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./ui/language-switcher";

// Este componente usa hooks de cliente (useTranslations) y componentes clientes

export default function Navbar() {
  const t = useTranslations("Nav");

  // Reemplaza estas URLs por tus perfiles reales
  const GITHUB_URL = "https://github.com/Crizz20";
  const LINKEDIN_URL = "https://www.linkedin.com/in/christian-david-espinel-moreno-19727b395/";

  return (
    <>
      <nav className="fixed z-40 left-1/2 transform -translate-x-1/2 top-4 w-[calc(100%-2rem)] max-w-6xl h-16 flex items-center px-6 bg-slate-900 text-white rounded-lg shadow-lg">
      <div className="flex items-center gap-6">
        <a href="#top" className="text-xl font-bold hover:opacity-90">CrizDev</a>
  {/* Otros links usando traducciones */}
  <a href="#about" className="hover:text-gray-300">{t("about")}</a>
  <a href="#tools" className="hover:text-gray-300">{t("tools")}</a>
  <a href="#projects" className="hover:text-gray-300">{t("projects")}</a>
  <a href="#certificates" className="hover:text-gray-300">{t("certificates")}</a>
  <a href="#contact" className="hover:text-gray-300">{t("contactMe")}</a>
      </div>

      {/* Contenedor derecho: social + language switcher */}
      <div className="ml-auto flex items-center gap-3">
        {/* LinkedIn */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md hover:bg-slate-800"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7.5 8H12v2.2c.6-1.1 2.1-2.2 4.6-2.2C22 8 24 10 24 14.6V24h-5v-8.4c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24H7.5V8z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md hover:bg-slate-800"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.75.81 1.2 1.84 1.2 3.1 0 4.45-2.7 5.42-5.27 5.71.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.21 21.38 24 17.08 24 12 24 5.73 18.27.5 12 .5z" />
          </svg>
        </a>

        {/* Language switcher al extremo derecho */}
        <LanguageSwitcher />
      </div>
    </nav>

    {/* Placeholder para evitar que el contenido quede debajo del nav fijo */}
    <div aria-hidden className="h-20" />
    </>
  );
}