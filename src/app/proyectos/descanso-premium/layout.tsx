import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Descanso Premium | Sergio Muñoz",

  description:
    "Proyecto e-commerce desarrollado con Laravel, PHP y MySQL para la venta de productos de descanso, con catálogo, carrito, pagos con Stripe, stock y panel de administración.",
};

export default function DescansoPremiumLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}