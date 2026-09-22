import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Entheos | Sergio Muñoz",

  description:
    "Proyecto web corporativo desarrollado con WordPress y Elementor, con diseño responsive y una estructura orientada a presentar servicios e información de la empresa.",
};

export default function WordPressEntheosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}