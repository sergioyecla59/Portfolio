"use client";

import { useState } from "react";

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 text-white backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#inicio"
          onClick={cerrarMenu}
          className="text-lg font-bold tracking-tight transition hover:text-cyan-400"
        >
          Sergio Muñoz
        </a>

        {/* Navegación escritorio */}
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

        {/* Botón destacado escritorio */}
        <a
          href="#contacto"
          className="hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 md:inline-flex"
        >
          Hablemos
        </a>

        {/* Botón hamburguesa móvil */}
        <button
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10 md:hidden"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          <span className="text-xl">
            {menuAbierto ? "✕" : "☰"}
          </span>
        </button>

      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <nav className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">

          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            <a
              href="#inicio"
              onClick={cerrarMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Inicio
            </a>

            <a
              href="#sobre-mi"
              onClick={cerrarMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Sobre mí
            </a>

            <a
              href="#proyectos"
              onClick={cerrarMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Proyectos
            </a>

            <a
              href="#tecnologias"
              onClick={cerrarMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Tecnologías
            </a>

            <a
              href="#contacto"
              onClick={cerrarMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Contacto
            </a>

            <a
              href="#contacto"
              onClick={cerrarMenu}
              className="mt-3 flex justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Hablemos
            </a>

          </div>

        </nav>
      )}

    </header>
  );
}