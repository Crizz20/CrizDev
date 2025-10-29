"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTransition, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SiNextdotjs, SiNodedotjs, SiJavascript, SiAmazon, SiGit, SiGithub, SiVercel, SiMongodb, SiPostgresql, SiDocker } from "react-icons/si";

export default function HomePage() {
  const t = useTranslations("Home");
  const tContact = useTranslations("Contact");
  const tAbout = useTranslations("About");
  const tTools = useTranslations("Tools");
  const tCert = useTranslations("Certificates");
  const tProj = useTranslations("Projects");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [modalData, setModalData] = useState<null | { src: string; alt: string; id: string; namespace: "Certificates" | "Projects" }>(null);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  // Detectar idioma actual desde la URL
  const currentLocale = pathname.split("/")[1] === "en" ? "en" : "es";

  // Cambiar idioma
  const switchLocale = () => {
    const newLocale = currentLocale === "es" ? "en" : "es";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-900 text-white">
      <div className="mb-5"></div>
  {/* Foto encima del título */}
  <div id="top" style={{ scrollMarginTop: '6rem' }} className="mb-6">
        {/* Contenedor cuadrado para asegurar que la imagen se recorta en círculo */}
        <div className="relative w-48 h-48 sm:w-57 sm:h-57 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/images/mi-foto.jpg"
            alt="Foto de perfil"
            fill
            sizes="(max-width: 640px) 128px, 192px"
            className="object-cover"
          />
        </div>
      </div>
      <h1 className="text-5xl font-extrabold mb-4">{t("subtitle")}</h1>
       <p className="text-2xl mb-6">{t("name")}</p>
      

      <div className="mb-6">
        {/* Solo vista previa: abrir PDF en nueva pestaña */}
        <a href="/files/CV.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition inline-block">
          {t("view")}
        </a>
      </div>

      
      {/* ======= Sección About ======= */}
  <section id="about" style={{ scrollMarginTop: '6rem' }} className="mt-25 w-full max-w-3xl border-t border-slate-700 pt-8 pb-20">
        <h2 className="text-3xl font-bold mb-8">{tAbout("title")}</h2>
        <p className="mb-6 text-lg text-left text-slate-200">{tAbout("p1")}</p>
        <p className="mb-6 text-lg text-left text-slate-200">{tAbout("p2")}</p>
      </section>

      {/* ======= Sección de contacto ======= */}
      {/* ======= Sección Tools ======= */}
  <section id="tools" style={{ scrollMarginTop: '6rem' }} className="mt-50 w-full max-w-4xl border-t border-slate-700 pt-8 pb-20">
        <h2 className="text-3xl font-bold mb-2">{tTools("title")}</h2>
        <p className="mb-6 text-lg text-slate-300">{tTools("subtitle")}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {
            /* Mapa de íconos inline para no añadir dependencias */
          }
          {(() => {
            const icons: Record<string, any> = {
              next: <SiNextdotjs size={36} color="#FFFFFF" aria-label="Next.js" />,
              node: <SiNodedotjs size={36} color="#3C873A" aria-label="Node.js" />,
              js: <SiJavascript size={36} color="#F7DF1E" aria-label="JavaScript" />,
              aws: <SiAmazon size={36} color="#FF9900" aria-label="AWS" />,
              git: <SiGit size={36} color="#F05032" aria-label="Git" />,
              github: <SiGithub size={36} color="#FFFFFF" aria-label="GitHub" />,
              vercel: <SiVercel size={36} color="#FFFFFF" aria-label="Vercel" />,
              mongodb: <SiMongodb size={36} color="#47A248" aria-label="MongoDB" />,
              postgres: <SiPostgresql size={36} color="#336791" aria-label="Postgres" />,
              docker: <SiDocker size={36} color="#2496ED" aria-label="Docker" />,
            };

            const keys = [
              "next",
              "node",
              "js",
              "aws",
              "git",
              "github",
              "vercel",
              "mongodb",
              "postgres",
              "docker",
            ];

            return keys.map((key) => (
              <div key={key} className="flex flex-col items-center gap-2 bg-slate-800 p-4 rounded-lg">
                <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center text-white">{icons[key]}</div>
                <div className="text-sm font-semibold">{tTools(`${key}.formal`)}</div>
                <div className="text-xs text-slate-400">{tTools(`${key}.friendly`)}</div>
              </div>
            ));
          })()}
        </div>
      </section>
  
    {/* ======= Sección Projects ======= */}
    <section id="projects" style={{ scrollMarginTop: '6rem' }} className="mt-12 w-full max-w-4xl border-t border-slate-700 pt-8 pb-20">
          <h2 className="text-3xl font-bold mb-2">{tProj("project1.title") /* generic heading; individual titles per card */}</h2>
          <p className="mb-6 text-lg text-slate-300">Aquí tienes algunos proyectos (placeholders). Sube imágenes llamadas proyec1..proyec4 en `public/images` y reemplaza textos.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {[1,2,3].map((n) => {
              const id = `project${n}`;
              const src = `/images/proyec${n}.jpg`;
              const key = `proyec${n}`;
              return (
                <div key={id} className="bg-slate-800 p-4 rounded-lg flex flex-col items-center gap-3 cursor-pointer min-h-[220px] w-full max-w-sm" role="button" aria-label={tProj(`${id}.title`)} onClick={() => setModalData({ src, alt: `${id} image`, id, namespace: "Projects" })}>
                  <div className="w-full h-32 relative rounded overflow-hidden bg-slate-700 flex items-center justify-center">
                    {!imgError[key] ? (
                      // Use a plain <img> so we can catch load errors in the client and show a fallback
                      // Next/Image can be used but for graceful fallback this is simpler here
                      <img
                        src={src}
                        alt={`${id} preview`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          setImgError((p) => ({ ...p, [key]: true }));
                        }}
                      />
                    ) : (
                      <div className="text-xs text-slate-400">No image</div>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-center">{tProj(`${id}.title`)}</div>
                  <div className="text-xs text-slate-400 h-12 overflow-hidden text-center">{tProj(`${id}.description`)}</div>
                </div>
              )
            })}
          </div>
        </section>

  <section id="certificates" style={{ scrollMarginTop: '6rem' }} className="mt-12 w-full max-w-4xl border-t border-slate-700 pt-8 pb-20">
        <h2 className="text-3xl font-bold mb-2">{tCert("title")}</h2>
        <p className="mb-6 text-lg text-slate-300">{tCert("subtitle")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            onClick={() =>
              setModalData({
                src: "/images/Mongo.jpg",
                alt: "Mongo Certificate",
                id: "mongo",
                namespace: "Certificates",
              })
            }
            className="bg-slate-800 p-4 rounded-lg flex flex-col items-center gap-3 cursor-pointer"
            role="button"
            aria-label={tCert("mongo.title")}
          >
            <div className="w-full h-40 relative rounded overflow-hidden">
              <Image src="/images/Mongo.jpg" alt="Mongo Certificate" fill className="object-cover" />
            </div>
            <div className="text-sm font-semibold">{tCert("mongo.title")}</div>
            <div className="text-xs text-slate-400">{tCert("mongo.provider")} • {tCert("mongo.duration")}</div>
          </div>

          <div
            onClick={() =>
              setModalData({
                src: "/images/cursera.jpg",
                alt: "Coursera Certificate",
                id: "coursera",
                namespace: "Certificates",
              })
            }
            className="bg-slate-800 p-4 rounded-lg flex flex-col items-center gap-3 cursor-pointer"
            role="button"
            aria-label={tCert("coursera.title")}
          >
            <div className="w-full h-40 relative rounded overflow-hidden">
              <Image src="/images/cursera.jpg" alt="Coursera Certificate" fill className="object-cover" />
            </div>
            <div className="text-sm font-semibold">{tCert("coursera.title")}</div>
            <div className="text-xs text-slate-400">{tCert("coursera.provider")} • {tCert("coursera.duration")}</div>
          </div>

          <div
            onClick={() =>
              setModalData({
                src: "/images/platzi.jpg",
                alt: "Platzi Certificate",
                id: "platzi",
                namespace: "Certificates",
              })
            }
            className="bg-slate-800 p-4 rounded-lg flex flex-col items-center gap-3 cursor-pointer"
            role="button"
            aria-label={tCert("platzi.title")}
          >
            <div className="w-full h-40 relative rounded overflow-hidden">
              <Image src="/images/platzi.jpg" alt="Platzi Certificate" fill className="object-cover" />
            </div>
            <div className="text-sm font-semibold">{tCert("platzi.title")}</div>
            <div className="text-xs text-slate-400">{tCert("platzi.provider")} • {tCert("platzi.duration")}</div>
          </div>
        </div>
      </section>
      {/* Modal para vista ampliada del certificado */}
      {modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-60"
            onClick={() => setModalData(null)}
            aria-hidden
          />

          <div className="relative z-10 max-w-3xl w-full mx-4">
            <button
              onClick={() => setModalData(null)}
              className="absolute -top-3 -right-3 bg-slate-800 rounded-full p-2 text-white shadow-lg"
              aria-label="Close certificate"
            >
              ✕
            </button>

            <div className="bg-slate-900 p-4 rounded-lg">
              <div className="w-full h-[60vh] relative rounded overflow-hidden">
                <Image src={modalData.src} alt={modalData.alt} fill className="object-contain" />
              </div>
              <div className="mt-3 text-left">
                {
                  modalData.namespace === "Certificates" ? (
                    <>
                      <div className="text-lg font-semibold">{tCert(`${modalData.id}.title`)}</div>
                      <div className="text-sm text-slate-400">{tCert(`${modalData.id}.provider`)} • {tCert(`${modalData.id}.duration`)}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-lg font-semibold">{tProj(`${modalData.id}.title`)}</div>
                      <div className="text-sm text-slate-400">{tProj(`${modalData.id}.description`)}</div>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      )}

  <section id="contact" style={{ scrollMarginTop: '6rem' }} className="mt-70 w-full max-w-3xl border-t border-slate-700 pt-8 pb-20">
        <h2 className="text-3xl font-bold mb-4">{tContact("contactTitle")}</h2>
        <p className="mb-11 text-lg">{tContact("contactSubtitle")}</p>

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6">
          <div className="flex-1 min-w-[220px] flex flex-col items-start gap-3 bg-slate-800 p-4 rounded-lg">
            
            <div className="w-full flex items-center justify-between gap-3">
              <div className="text-sm text-white truncate">{tContact("emailValue")}</div>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(tContact("emailValue"));
                    setEmailCopied(true);
                    setTimeout(() => setEmailCopied(false), 2000);
                  } catch {
                    // no-op
                  }
                }}
                className="ml-2 px-3 py-1 bg-blue-600 rounded text-white text-sm hover:bg-blue-700"
              >
                {emailCopied ? tContact("copied") : tContact("copy")}
              </button>
            </div>
          </div>

          <div className="flex-1 min-w-[22px] flex flex-col items-start gap-3 bg-slate-800 p-4 rounded-lg">
            
            <div className="w-full flex items-center justify-between gap-3">
              <div className="text-sm text-white truncate">{tContact("phoneValue")}</div>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(tContact("phoneValue"));
                    setPhoneCopied(true);
                    setTimeout(() => setPhoneCopied(false), 2000);
                  } catch {
                    // no-op
                  }
                }}
                className="ml-2 px-3 py-1 bg-blue-600 rounded text-white text-sm hover:bg-blue-700"
              >
                {phoneCopied ? tContact("copied") : tContact("copy")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

