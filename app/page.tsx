import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default function RootPage() {
  // Elegir idioma preferido a partir del header Accept-Language.
  // Si contiene 'en' usaremos english, en otro caso caeremos a 'es'.
  const acceptLang = headers().get("accept-language") || "";
  const preferred = acceptLang.includes("en") ? "en" : "es";

  // Redirigir permanentemente a la ruta con localización.
  redirect(`/${preferred}`);
}
