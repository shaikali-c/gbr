import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gundubaburuchulu.com"),
  title: {
    default: "Gundu Babu Ruchulu | Food & Beverage Company in Hyderabad",
    template: "%s | Gundu Babu Ruchulu",
  },
  description:
    "Gundu Babu Ruchulu (GBR) is a Hyderabad food and beverage company building corporate meals, cloud kitchens, food services and SOL Café.",
  openGraph: {
    siteName: "Gundu Babu Ruchulu",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/gbr/thali.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} h-full antialiased`}
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
