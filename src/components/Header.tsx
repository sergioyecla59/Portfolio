export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#inicio"
          className="text-lg font-bold tracking-tight transition hover:text-cyan-400"
        >
          Sergio Muñoz
        </a>

        {/* Navegación */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#inicio"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Inicio
          </a>

          <a
            href="#sobre-mi"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Sobre mí
          </a>

          <a
            href="#proyectos"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Proyectos
          </a>

          <a
            href="#tecnologias"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Tecnologías
          </a>

          <a
            href="#contacto"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Contacto
          </a>
        </nav>

        {/* Botón destacado */}
        <a
          href="#contacto"
          className="hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 md:inline-flex"
        >
          Hablemos
        </a>

        {/* Botón móvil provisional */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
          aria-label="Abrir menú"
        >
          <span className="text-xl">☰</span>
        </button>

      </div>
    </header>
  );
}