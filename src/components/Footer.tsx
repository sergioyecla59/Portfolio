export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* ==================================================
            PARTE PRINCIPAL
        ================================================== */}
        <div className="grid gap-10 py-14 md:grid-cols-3 md:items-start">

          {/* MARCA */}
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 text-lg font-bold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-bold text-slate-950">
                SM
              </span>

              Sergio Muñoz
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Desarrollo aplicaciones y páginas web modernas,
              funcionales y adaptadas a las necesidades reales
              de cada proyecto.
            </p>
          </div>


          {/* NAVEGACIÓN */}
          <div className="md:justify-self-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navegación
            </p>

            <nav className="flex flex-col gap-3 text-sm">
              <a
                href="#inicio"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                Inicio
              </a>

              <a
                href="#sobre-mi"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                Sobre mí
              </a>

              <a
                href="#proyectos"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                Proyectos
              </a>

              <a
                href="#tecnologias"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                Tecnologías
              </a>

              <a
                href="#contacto"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                Contacto
              </a>
            </nav>
          </div>


          {/* CONTACTO */}
          <div className="md:justify-self-end">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contacto
            </p>

            <p className="mb-4 max-w-xs text-sm leading-6 text-slate-400">
              Disponible para nuevos proyectos y oportunidades
              profesionales.
            </p>

            <a
              href="mailto:TU_EMAIL_AQUI"
              className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Escríbeme
              <span>↗</span>
            </a>
          </div>

        </div>


        {/* ==================================================
            PARTE INFERIOR
        ================================================== */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Sergio Muñoz. Todos los derechos reservados.
          </p>

          <a
            href="#inicio"
            className="inline-flex items-center gap-2 transition hover:text-cyan-400"
          >
            Volver arriba
            <span>↑</span>
          </a>

        </div>

      </div>
    </footer>
  );
}