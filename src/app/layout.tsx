import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sergio Muñoz | Desarrollador Web",

  description:
    "Portfolio de Sergio Muñoz, desarrollador web especializado en Laravel, PHP, MySQL, Next.js, React y WordPress.",

  verification: {
    google: "uNcAOPSuYfFTNsc6yc1Us1TezIeoS2p0hkPdET1vJ4Q",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <GoogleAnalytics gaId="G-7JNEDRYRKC" />
      </body>
    </html>
  );
}