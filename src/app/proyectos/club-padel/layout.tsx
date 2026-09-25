import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club Pádel | Sergio Muñoz",

  description:
    "Proyecto web para un club de pádel desarrollado con Laravel y Blade, con una interfaz responsive orientada a pistas, horarios, usuarios y reservas.",
};

export default function ClubPadelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}