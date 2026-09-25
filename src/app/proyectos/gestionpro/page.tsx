"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GestionProPage() {
  const [imagenAbierta, setImagenAbierta] = useState<string | null>(null);

  /* ==================================================
      CERRAR LIGHTBOX CON ESC
  ================================================== */

  useEffect(() => {
    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setImagenAbierta(null);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ==================================================
          CABECERA
      ================================================== */}

      <header className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-lg font-bold transition hover:text-cyan-400"
          >
            Sergio Muñoz
          </Link>

          <Link
            href="/#proyectos"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-400"
          >
            ← Volver a proyectos
          </Link>

        </div>
      </header>


      {/* ==================================================
          HERO DEL PROYECTO
      ================================================== */}

      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16">

          <div className="mb-6 flex flex-wrap items-center gap-3">

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Proyecto 01
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">
              Software de gestión
            </span>

          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            GestionPro
          </h1>

          <p className="mt-4 text-xl font-medium text-cyan-400">
            Aplicación web para la gestión empresarial
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Aplicación web desarrollada para centralizar la gestión de pequeñas
            y medianas empresas, incorporando clientes, productos, proveedores
            y documentos comerciales mediante un frontend moderno conectado a
            una API REST y una base de datos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Laravel",
              "REST API",
              "MySQL",
            ].map((technology) => (

              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          IMAGEN PRINCIPAL
      ================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-2 shadow-2xl">

          <button
            type="button"
            onClick={() =>
              setImagenAbierta("/projects/gestionpro/HomeGestion.jpg")
            }
            className="block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-slate-900"
          >

            <Image
              src="/projects/gestionpro/HomeGestion.jpg"
              alt="Dashboard principal de GestionPro"
              width={1920}
              height={1080}
              priority
              className="h-auto w-full transition duration-500 hover:scale-[1.01]"
            />

          </button>

        </div>

      </section>


      {/* ==================================================
          SOBRE EL PROYECTO
      ================================================== */}

      <section className="bg-slate-100 py-20 text-slate-950">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              El proyecto
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              Una aplicación completa

              <span className="block text-slate-500">
                para la gestión empresarial.
              </span>
            </h2>

          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">

            <p>
              GestionPro es una aplicación web orientada a centralizar la
              gestión diaria de pequeñas y medianas empresas desde una única
              plataforma.
            </p>

            <p>
              El sistema permite organizar clientes, productos, proveedores
              y documentos comerciales, relacionando la información para
              facilitar el trabajo diario de la empresa.
            </p>

            <p>
              La aplicación utiliza Next.js y TypeScript para el frontend,
              conectado mediante una API REST a un backend desarrollado con
              Laravel y una base de datos MySQL.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          FUNCIONALIDADES
      ================================================== */}

      <section className="border-t border-slate-200 bg-white py-20 text-slate-950">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Funcionalidades
            </p>

            <h2 className="text-4xl font-bold">
              Qué permite gestionar la aplicación
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Gestión de clientes",
              "Gestión de productos",
              "Gestión de proveedores",
              "Presupuestos",
              "Pedidos",
              "Albaranes",
              "Facturas",
              "Control de stock",
            ].map((feature, index) => (

              <div
                key={feature}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >

                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 font-bold text-slate-950">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="font-semibold">
                  {feature}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          GALERÍA
      ================================================== */}

      <section className="bg-slate-950 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Interfaz
            </p>

            <h2 className="text-4xl font-bold">
              Algunas pantallas del proyecto
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
              Diferentes vistas de la gestión de clientes, productos y
              documentos comerciales. Pulsa sobre una captura para verla
              completa.
            </p>

          </div>


          {/* ==================================================
              CAPTURAS
          ================================================== */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            {/* CLIENTES */}

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <button
                type="button"
                onClick={() =>
                  setImagenAbierta(
                    "/projects/gestionpro/ClientesGestion.jpg"
                  )
                }
                className="block h-[260px] w-full cursor-zoom-in overflow-hidden bg-slate-950"
              >

                <Image
                  src="/projects/gestionpro/ClientesGestion.jpg"
                  alt="Gestión de clientes de GestionPro"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />

              </button>

              <div className="border-t border-white/10 p-5">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Clientes
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Gestión de clientes
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Gestión completa de clientes con creación, consulta,
                  modificación y eliminación de registros.
                </p>

              </div>

            </article>


            {/* PRODUCTOS */}

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <button
                type="button"
                onClick={() =>
                  setImagenAbierta(
                    "/projects/gestionpro/ProductosGestion.jpg"
                  )
                }
                className="block h-[260px] w-full cursor-zoom-in overflow-hidden bg-slate-950"
              >

                <Image
                  src="/projects/gestionpro/ProductosGestion.jpg"
                  alt="Gestión de productos de GestionPro"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />

              </button>

              <div className="border-t border-white/10 p-5">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Productos
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Productos y stock
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Gestión de productos con referencia, categoría, precio,
                  stock disponible y stock mínimo.
                </p>

              </div>

            </article>


            {/* PRESUPUESTOS */}

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <button
                type="button"
                onClick={() =>
                  setImagenAbierta(
                    "/projects/gestionpro/PresupuestosGestion.jpg"
                  )
                }
                className="block h-[260px] w-full cursor-zoom-in overflow-hidden bg-slate-950"
              >

                <Image
                  src="/projects/gestionpro/PresupuestosGestion.jpg"
                  alt="Gestión de presupuestos de GestionPro"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />

              </button>

              <div className="border-t border-white/10 p-5">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Presupuestos
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Gestión de presupuestos
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Creación y gestión de presupuestos con clientes, productos,
                  cantidades, impuestos, estados y cálculo de totales.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          TRABAJO REALIZADO
      ================================================== */}

      <section className="bg-slate-900 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Desarrollo
              </p>

              <h2 className="text-4xl font-bold leading-tight">
                Un proyecto trabajando

                <span className="block text-slate-400">
                  frontend, backend y base de datos.
                </span>
              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {[
                "Frontend",
                "Backend",
                "Base de datos",
                "REST API",
                "CRUD",
                "Responsive",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="text-sm font-semibold text-slate-300">
                    {item}
                  </span>
                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          VOLVER
      ================================================== */}

      <section className="border-t border-white/10 bg-slate-950 py-14">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="text-sm text-slate-500">
              ¿Quieres ver más trabajos?
            </p>

            <p className="mt-1 text-xl font-bold">
              Explora el resto de proyectos.
            </p>

          </div>

          <Link
            href="/#proyectos"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            Ver todos los proyectos →
          </Link>

        </div>

      </section>


      {/* ==================================================
          LIGHTBOX
      ================================================== */}

      {imagenAbierta && (

        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setImagenAbierta(null)}
        >

          {/* BOTÓN CERRAR */}

          <button
            type="button"
            onClick={() => setImagenAbierta(null)}
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-900 text-2xl text-white transition hover:bg-cyan-400 hover:text-slate-950 sm:right-8 sm:top-8"
            aria-label="Cerrar imagen"
          >
            ×
          </button>


          {/* IMAGEN GRANDE */}

          <div
            className="relative flex max-h-[90vh] max-w-[95vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >

            <Image
              src={imagenAbierta}
              alt="Captura ampliada del proyecto"
              width={1920}
              height={1080}
              className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            />

          </div>

        </div>

      )}

    </main>
  );
}