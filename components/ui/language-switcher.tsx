"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Detectar idioma actual (si la URL no tiene segmento, asumimos 'es')
  const parts = pathname.split("/").filter(Boolean);
  const currentLocale = parts[0] === "en" ? "en" : "es";

  // Construir nueva ruta de forma robusta y preservar query/hash
  const switchLocale = () => {
    const newLocale = currentLocale === "es" ? "en" : "es";

    // Si la ruta actual NO contiene segmento de locale (por ejemplo '/'), la dejamos después del nuevo locale
    let rest = "";
    if (parts.length > 1) {
      rest = "/" + parts.slice(1).join("/");
    }

    let newPath = `/${newLocale}${rest}`;

    // Agregar query string si existe
    if (searchParams && searchParams.toString().length > 0) {
      newPath += `?${searchParams.toString()}`;
    }

    startTransition(() => {
      // Push a la nueva ruta (Next.js recargará el layout y las traducciones)
      router.push(newPath);
    });
  };

  return (
    <button
      onClick={switchLocale}
      className="px-3 py-1 border border-slate-700 rounded-lg hover:bg-slate-700 transition text-sm font-semibold"
      disabled={isPending}
    >
      🌐 {isPending ? "..." : currentLocale === "es" ? "EN" : "ES"}
    </button>
  );
}
