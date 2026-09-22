import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club Pádel | Sergio Muñoz",

  description:
    "Proyecto web de Club Pádel desarrollado con Laravel, PHP, MySQL y JavaScript, con interfaz responsive y sistema orientado a la gestión y reserva de pistas.",
};

export default function ClubPadelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}