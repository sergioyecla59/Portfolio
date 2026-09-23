const technologies = [
  {
    name: "Laravel",
    category: "Backend",
    description: "Aplicaciones web, APIs, autenticación y lógica de negocio.",
    icon: "L",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Aplicaciones web modernas, rápidas y optimizadas.",
    icon: "N",
  },
  {
    name: "React",
    category: "Frontend",
    description: "Interfaces dinámicas mediante componentes reutilizables.",
    icon: "R",
  },
  {
    name: "MySQL",
    category: "Base de datos",
    description: "Diseño y gestión de bases de datos relacionales.",
    icon: "DB",
  },
  {
    name: "JavaScript",
    category: "Desarrollo",
    description: "Interactividad y funcionalidades para aplicaciones web.",
    icon: "JS",
  },
  {
    name: "TypeScript",
    category: "Desarrollo",
    description: "Código JavaScript más estructurado, seguro y mantenible.",
    icon: "TS",
  },
  {
    name: "WordPress",
    category: "CMS",
    description: "Webs corporativas y páginas administrables para empresas.",
    icon: "W",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    description: "Interfaces responsive adaptadas a ordenador, tablet y móvil.",
    icon: "</>",
  },
  {
    name: "Google Analytics 4",
    category: "Analítica web",
    description:
      "Medición de tráfico, comportamiento de usuarios y eventos personalizados.",
    icon: "GA4",
  },
  {
    name: "SEO técnico",
    category: "SEO & Analítica",
    description:
      "Search Console, sitemap, robots.txt, indexación y optimización de metadatos.",
    icon: "SEO",
  },
];

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      className="relative overflow-hidden bg-slate-50 py-16 text-slate-950"
    >
      {/* ==================================================
          DECORACIÓN DE FONDO
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ==================================================
            CABECERA
        ================================================== */}

        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end">

          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Tecnologías
            </p>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">

              Herramientas que utilizo para

              <span className="block text-slate-500">
                construir cada proyecto.
              </span>

            </h2>

          </div>

          <div className="lg:pb-1">

            <p className="max-w-xl text-base leading-7 text-slate-600">

              Trabajo con tecnologías de frontend, backend y bases de datos,
              complementando el desarrollo con analítica web y SEO técnico
              para crear soluciones web completas.

            </p>

          </div>

        </div>

        {/* ==================================================
            GRID DE TECNOLOGÍAS
        ================================================== */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {technologies.map((technology, index) => (

            <article
              key={technology.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/10"
            >

              {/* NÚMERO */}

              <span className="absolute right-5 top-5 text-xs font-semibold text-slate-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* ICONO */}

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">

                {technology.icon}

              </div>

              {/* CATEGORÍA */}

              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">

                {technology.category}

              </span>

              {/* NOMBRE */}

              <h3 className="mt-2 text-lg font-bold text-slate-950">

                {technology.name}

              </h3>

              {/* DESCRIPCIÓN */}

              <p className="mt-2 text-sm leading-6 text-slate-600">

                {technology.description}

              </p>

              {/* LÍNEA INFERIOR */}

              <div className="mt-4 h-px w-full bg-slate-200">

                <div className="h-px w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />

              </div>

            </article>

          ))}

        </div>

        {/* ==================================================
            BLOQUE INFERIOR
        ================================================== */}

        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-slate-950 p-5 shadow-xl sm:flex-row sm:items-center sm:justify-between">

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