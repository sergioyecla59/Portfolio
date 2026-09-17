"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DescansoPremiumPage() {
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
              Proyecto 02
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">
              E-commerce
            </span>

          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Descanso Premium
          </h1>

          <p className="mt-4 text-xl font-medium text-cyan-400">
            Tienda online especializada en productos de descanso
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Aplicación web desarrollada con Laravel para la venta de colchones
            y productos de descanso, incorporando catálogo, carrito de compra,
            pagos online, gestión de stock y un panel de administración para
            controlar productos y pedidos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Laravel",
              "PHP",
              "MySQL",
              "JavaScript",
              "Blade",
              "CSS",
              "Stripe",
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
              setImagenAbierta("/projects/colchones1.jpg")
            }
            className="block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-slate-900"
          >

            <Image
              src="/projects/colchones1.jpg"
              alt="Página principal de Descanso Premium"
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
              Una tienda online completa

              <span className="block text-slate-500">
                para el sector del descanso.
              </span>
            </h2>

          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">

            <p>
              Descanso Premium es una aplicación web orientada a la venta
              online de colchones y productos relacionados con el descanso.
            </p>

            <p>
              Los clientes pueden consultar el catálogo, seleccionar productos
              y medidas, añadirlos al carrito y completar el proceso de compra
              mediante un sistema de pago online.
            </p>

            <p>
              La aplicación dispone además de un panel de administración desde
              el que se pueden gestionar los productos, el stock y los pedidos,
              centralizando tanto la parte comercial como la gestión interna
              de la tienda.
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
              Qué permite hacer la aplicación
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Catálogo de productos",
              "Carrito de compra",
              "Selección de medidas",
              "Pagos online con Stripe",
              "Gestión de productos",
              "Control de stock",
              "Gestión de pedidos",
              "Panel de administración",
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
              Diferentes vistas del catálogo, la administración y el proceso
              de compra. Pulsa sobre una captura para verla completa.
            </p>

          </div>


          {/* ==================================================
              CAPTURAS
          ================================================== */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* CATÁLOGO */}

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <button
                type="button"
                onClick={() =>
                  setImagenAbierta(
                    "/projects/Catalogo_Descanso_Premium.jpg"
                  )
                }
                className="block h-[260px] w-full cursor-zoom-in overflow-hidden bg-slate-950"
              >

                <Image
                  src="/projects/Catalogo_Descanso_Premium.jpg"
                  alt="Catálogo de productos de Descanso Premium"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />

              </button>

              <div className="border-t border-white/10 p-5">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Catálogo
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Catálogo de productos
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Exploración de colchones y productos disponibles con sus
                  características, medidas y precios.
                </p>

              </div>

            </article>


            {/* ADMINISTRACIÓN */}

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <button
                type="button"
                onClick={() =>
                  setImagenAbierta("/projects/Admin_Descanso_Premium.jpg")
                }
                className="block h-[260px] w-full cursor-zoom-in overflow-hidden bg-slate-950"
              >

                <Image
                  src="/projects/Admin_Descanso_Premium.jpg"
                  alt="Panel de administración de Descanso Premium"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />

              </button>

              <div className="border-t border-white/10 p-5">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Administración
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Gestión de la tienda
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Panel privado para gestionar productos, stock y pedidos
                  realizados desde la tienda.
                </p>

              </div>

            </article>


            {/* CHECKOUT */}

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <button
                type="button"
                onClick={() =>
                  setImagenAbierta("/projects/Checkout_Descanso_Premium.jpg")
                }
                className="block h-[260px] w-full cursor-zoom-in overflow-hidden bg-slate-950"
              >

                <Image
                  src="/projects/Checkout_Descanso_Premium.jpg"
                  alt="Proceso de compra de Descanso Premium"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />

              </button>

              <div className="border-t border-white/10 p-5">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  E-commerce
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Compra y pago online
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Proceso de compra mediante carrito y pago online integrado
                  con Stripe.
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
                  todo el flujo de una tienda online.
                </span>
              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {[
                "Frontend",
                "Backend",
                "Base de datos",
                "E-commerce",
                "Panel admin",
                "Stripe",
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