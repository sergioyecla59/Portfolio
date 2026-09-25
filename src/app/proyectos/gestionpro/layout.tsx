import type { Metadata } from "next";

export const metadata: Metadata = {

  title: "GestionPro | Sergio Muñoz",

  description:

    "Proyecto de software de gestión empresarial desarrollado con Next.js, TypeScript, Laravel, REST API y MySQL para gestionar clientes, productos, proveedores y documentos comerciales.",

};

export default function GestionProLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return children;

}