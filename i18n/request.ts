// i18n/request.ts
import { getRequestConfig, type RequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  const loc = locale ?? "es";

  // Importaciones explícitas (esto evita problemas con el bundler)
  const modules = {
    es: await import("../messages/es.json"),
    en: await import("../messages/en.json"),
  } as const;

  // Si no hay módulo para el locale, fallback a 'es'
  const mod = (modules as any)[loc] ?? modules.es;

  return {
    locale: loc,
    messages: mod.default ?? mod,
  };
});
