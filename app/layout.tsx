import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque, Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gundubaburuchulu.com"),
  title: {
    default: "Gundu Babu Ruchulu | Food and beverage company, Hyderabad",
    template: "%s | Gundu Babu Ruchulu",
  },
  description:
    "Gundu Babu Ruchulu (GBR) is a Hyderabad food and beverage company running corporate meals, corporate food services, cloud kitchens, food delivery and SOL Café.",
  openGraph: {
    siteName: "Gundu Babu Ruchulu",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${bricolage.variable} ${familjen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
