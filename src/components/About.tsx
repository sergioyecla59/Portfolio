export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-slate-50 py-16 text-slate-950"
    >
      {/* ==================================================
          FONDO
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ==================================================
            CABECERA
        ================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* COLUMNA IZQUIERDA */}

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Sobre mí
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              No solo desarrollo webs.
              <span className="block text-slate-500">
                Construyo soluciones completas.
              </span>
            </h2>
          </div>

          {/* COLUMNA DERECHA */}

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Soy Sergio Muñoz, desarrollador web enfocado en crear aplicaciones
              modernas, funcionales y adaptadas a las necesidades reales de cada
              proyecto.
            </p>

            <p>
              Trabajo tanto en la parte visual como en el desarrollo backend,
              bases de datos y lógica de negocio, construyendo proyectos que van
              desde webs corporativas hasta plataformas con usuarios, productos,
              reservas, pagos y paneles de gestión.
            </p>

            <p>
              Mi objetivo es transformar una necesidad o una idea en una
              solución web clara, útil y preparada para seguir creciendo.
            </p>
          </div>
        </div>

        {/* ==================================================
            TARJETAS
        ================================================== */}

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* FRONTEND */}

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
              <span className="text-xl">◇</span>
            </div>

            <h3 className="mb-2 text-lg font-bold text-slate-950">Frontend</h3>

            <p className="text-sm leading-6 text-slate-600">
              Interfaces modernas, responsive y pensadas para ofrecer una
              experiencia clara al usuario.
            </p>
          </div>

          {/* BACKEND */}

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
              <span className="font-mono text-lg">{"</>"}</span>
            </div>

            <h3 className="mb-2 text-lg font-bold text-slate-950">Backend</h3>

            <p className="text-sm leading-6 text-slate-600">
              Lógica de negocio, autenticación, gestión de datos y
              funcionalidades adaptadas al proyecto.
            </p>
          </div>

          {/* BASES DE DATOS */}

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
              <span className="text-xl">⛁</span>
            </div>

            <h3 className="mb-2 text-lg font-bold text-slate-950">
              Bases de datos
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Modelado y gestión de información para productos, usuarios,
              pedidos, reservas y otros procesos.
            </p>
          </div>

          {/* PROYECTO COMPLETO */}

          <div className="group rounded-2xl border border-cyan-200 bg-cyan-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
              <span className="text-xl">↗</span>
            </div>

            <h3 className="mb-2 text-lg font-bold text-slate-950">
              Proyecto completo
            </h3>
              <p className="text-sm leading-6 text-slate-600">
                Desarrollo de principio a fin: diseño, frontend, backend, base
                de datos, despliegue, dominio y mantenimiento.
              </p>
          </div>
        </div>

        {/* ==================================================
            STACK
        ================================================== */}

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-8">
          <span className="mr-3 text-sm font-semibold text-slate-500">
            Trabajo con
          </span>

          {[
            "Laravel",
            "PHP",
            "MySQL",
            "Next.js",
            "React",
            "TypeScript",
            "WordPress",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
