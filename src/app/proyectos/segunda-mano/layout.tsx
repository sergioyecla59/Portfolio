import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace Segunda Mano | Sergio Muñoz",

  description:
    "Proyecto de marketplace de segunda mano desarrollado con Laravel, PHP y MySQL, con publicación de productos, catálogo, categorías, carrito y gestión de usuarios.",
};

export default function SegundaManoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}