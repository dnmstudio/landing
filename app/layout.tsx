import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DNM Studio | Where Systems Flow",
  description:
    "Automatizaciones inteligentes, soluciones digitales y servicios en la nube para empresas que quieren operar mejor hoy y crecer mañana. Costa Rica.",
  keywords: [
    "automatizaciones",
    "software a la medida",
    "cloud computing",
    "Costa Rica",
    "desarrollo de software",
    "n8n",
    "Azure",
    "consultoría tecnológica",
  ],
  authors: [{ name: "DNM Studio" }],
  openGraph: {
    title: "DNM Studio | Where Systems Flow",
    description:
      "Automatizaciones inteligentes, soluciones digitales y servicios en la nube para empresas costarricenses.",
    type: "website",
    locale: "es_CR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
