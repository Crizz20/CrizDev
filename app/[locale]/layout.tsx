import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import Navbar from "../../components/navbar";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // params puede ser una promesa dependiendo de cómo Next lo pase
  params: any;
}) {
  // Asegurarnos de resolver params (algunos entornos lo proveen como promesa)
  const { locale } = (await params) as { locale: string };

  // Cargar los mensajes directamente desde los JSON en build/runtime
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (err) {
    // Si no existe el archivo del locale, fallback a español
    messages = (await import(`../../messages/es.json`)).default;
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Navbar global dentro del provider para que use las traducciones */}
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}





