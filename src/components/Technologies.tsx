"use client";

import { useState } from "react";

/* ==========================================================
   TECNOLOGÍAS
========================================================== */

const technologies = [
  {
    name: "Laravel",
    category: "Backend",
    description:
      "Backend, APIs, autenticación, MVC, Eloquent y lógica de negocio.",
    icon: "L",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description:
      "Aplicaciones web modernas, rápidas, optimizadas y preparadas para producción.",
    icon: "N",
  },
  {
    name: "React",
    category: "Frontend",
    description:
      "Interfaces dinámicas mediante componentes reutilizables e interactivos.",
    icon: "R",
  },
  {
    name: "MySQL",
    category: "Base de datos",
    description:
      "Diseño, relaciones, consultas y gestión de bases de datos relacionales.",
    icon: "DB",
  },
  {
    name: "JavaScript",
    category: "Desarrollo",
    description:
      "Interactividad, lógica del frontend y funcionalidades para aplicaciones web.",
    icon: "JS",
  },
  {
    name: "TypeScript",
    category: "Desarrollo",
    description:
      "Código JavaScript más estructurado, tipado, seguro y mantenible.",
    icon: "TS",
  },
  {
    name: "WordPress",
    category: "CMS",
    description:
      "Webs corporativas y páginas administrables adaptadas a empresas.",
    icon: "W",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    description:
      "Interfaces responsive adaptadas a ordenador, tablet y móvil.",
    icon: "</>",
  },
  {
    name: "Google Analytics 4",
    category: "Analítica web",
    description:
      "Tráfico, comportamiento, eventos personalizados, adquisición y seguimiento mediante UTM.",
    icon: "GA4",
  },
  {
    name: "SEO técnico",
    category: "SEO & Analítica",
    description:
      "Search Console, sitemap, robots.txt, indexación, metadatos, Open Graph y PageSpeed.",
    icon: "SEO",
  },
];

/* ==========================================================
   COMPONENTE
========================================================== */

export default function Technologies() {
  const [activeTechnology, setActiveTechnology] =
    useState<number | null>(null);

  return (
    <section
      id="tecnologias"
      className="relative overflow-hidden bg-slate-100 py-16 text-slate-950"
    >
      {/* ==================================================
          DECORACIÓN DE FONDO
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ==================================================
            CABECERA
        ================================================== */}

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Tecnologías
          </p>

          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            Herramientas con las que

            <span className="block text-slate-500">
              construyo mis proyectos.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Desarrollo frontend y backend, bases de datos, analítica web y
            SEO técnico para crear soluciones web completas.
          </p>

          {/* ==================================================
              INDICACIÓN INTERACTIVA
          ================================================== */}

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm">
            <span className="text-base">↗</span>

            <span>
              Pasa el cursor o pulsa sobre una tecnología para conocer cómo la utilizo
            </span>
          </div>
        </div>

        {/* ==================================================
            GRID DE TECNOLOGÍAS
        ================================================== */}

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 md:grid-cols-5">

          {technologies.map((technology, index) => {
            const isActive = activeTechnology === index;

            /* ==================================================
               EN ESCRITORIO:
               0 - 4  → TOOLTIP ARRIBA
               5 - 9  → TOOLTIP ABAJO
            ================================================== */

            const firstDesktopRow = index < 5;

            return (
              <div
                key={technology.name}
                className="group relative flex flex-col items-center text-center"
                onMouseEnter={() => setActiveTechnology(index)}
                onMouseLeave={() => setActiveTechnology(null)}
              >

                {/* ==================================================
                    CÍRCULO
                ================================================== */}

                <button
                  type="button"
                  aria-label={`Ver información sobre ${technology.name}`}
                  aria-expanded={isActive}
                  onClick={() =>
                    setActiveTechnology(isActive ? null : index)
                  }
                  className={`
                    relative flex h-20 w-20 cursor-pointer
                    items-center justify-center rounded-full
                    border text-sm font-bold
                    transition-all duration-300
                    sm:h-24 sm:w-24

                    ${
                      isActive
                        ? "scale-110 border-cyan-400 bg-cyan-400 text-slate-950 shadow-2xl shadow-cyan-500/30"
                        : "border-slate-700 bg-slate-900 text-white shadow-lg hover:-translate-y-2 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-2xl hover:shadow-cyan-500/30"
                    }
                  `}
                >

                  {/* RESPLANDOR */}

                  <span
                    className={`
                      absolute inset-0 -z-10 rounded-full
                      bg-cyan-400/30 blur-xl
                      transition-opacity duration-300

                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />

                  {technology.icon}
                </button>

                {/* ==================================================
                    NOMBRE
                ================================================== */}

                <h3 className="mt-4 text-sm font-bold text-slate-950 sm:text-base">
                  {technology.name}
                </h3>

                {/* ==================================================
                    CATEGORÍA
                ================================================== */}

                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-cyan-600">
                  {technology.category}
                </p>

                {/* ==================================================
                    TOOLTIP

                    MÓVIL / TABLET:
                    SIEMPRE DEBAJO

                    ESCRITORIO:
                    PRIMERA FILA → ARRIBA
                    SEGUNDA FILA → ABAJO
                ================================================== */}

                <div
                  className={`
                    absolute left-1/2 z-50
                    w-[230px] -translate-x-1/2
                    rounded-2xl border border-slate-700
                    bg-slate-950 p-4 text-left
                    shadow-2xl shadow-slate-950/30
                    transition-all duration-200

                    top-[125px]

                    ${
                      firstDesktopRow
                        ? "md:bottom-[125px] md:top-auto"
                        : "md:top-[125px]"
                    }

                    ${
                      isActive
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }
                  `}
                >

                  {/* ==================================================
                      FLECHA PARA MÓVIL / TABLET
                  ================================================== */}

                  <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-slate-700 bg-slate-950 md:hidden" />

                  {/* ==================================================
                      FLECHA ESCRITORIO - PRIMERA FILA
                  ================================================== */}

                  {firstDesktopRow && (
                    <div className="absolute -bottom-2 left-1/2 hidden h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-slate-700 bg-slate-950 md:block" />
                  )}

                  {/* ==================================================
                      FLECHA ESCRITORIO - SEGUNDA FILA
                  ================================================== */}

                  {!firstDesktopRow && (
                    <div className="absolute -top-2 left-1/2 hidden h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-slate-700 bg-slate-950 md:block" />
                  )}

                  {/* CATEGORÍA */}

                  <p className="relative text-[11px] font-bold uppercase tracking-widest text-cyan-400">
                    {technology.category}
                  </p>

                  {/* NOMBRE */}

                  <h4 className="relative mt-1 text-base font-bold text-white">
                    {technology.name}
                  </h4>

                  {/* DESCRIPCIÓN */}

                  <p className="relative mt-2 text-sm leading-6 text-slate-300">
                    {technology.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* ==================================================
            BLOQUE INFERIOR
        ================================================== */}

        <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-4 rounded-2xl bg-slate-950 p-5 shadow-xl sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-semibold text-white">
              Desarrollo de principio a fin
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Frontend · Backend · Bases de datos · Analítica · SEO técnico · Despliegue
            </p>
          </div>

          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Ver proyectos

            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}