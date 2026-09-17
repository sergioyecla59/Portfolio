export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* ==================================================
          FONDO
      ================================================== */}

      <div className="absolute inset-0">
        <div className="absolute left-[15%] top-20 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-[10%] h-[340px] w-[340px] rounded-full bg-blue-600/10 blur-3xl"></div>
      </div>


      {/* ==================================================
          CONTENIDO
      ================================================== */}

      <div className="relative mx-auto grid min-h-[68vh] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr]">

        {/* ==================================================
            COLUMNA IZQUIERDA
        ================================================== */}

        <div>

          {/* DISPONIBILIDAD */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">

            <span className="relative flex h-2 w-2">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50"></span>

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>

            </span>

            Disponible para nuevos proyectos

          </div>


          {/* PRESENTACIÓN */}

          <p className="mb-3 text-base font-semibold text-cyan-400">
            Hola, soy Sergio Muñoz
          </p>


          {/* TÍTULO */}

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">

            Desarrollo aplicaciones web

            <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              para problemas reales.
            </span>

          </h1>


          {/* DESCRIPCIÓN */}

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">

            Desarrollo soluciones web completas para empresas y proyectos:
            e-commerce, sistemas de reservas, gestión de productos,
            paneles de administración y webs corporativas.

          </p>


          {/* BOTONES */}

          <div className="mt-6 flex flex-wrap gap-4">

            <a
              href="#proyectos"
              className="group rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >

              Ver mis proyectos

              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>

            </a>


            <a
              href="#contacto"
              className="rounded-xl border border-slate-700 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
            >
              Contactar conmigo
            </a>

          </div>


          {/* TECNOLOGÍAS */}

          <div className="mt-7">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Tecnologías principales
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-slate-300">

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5">
                Laravel
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5">
                PHP
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5">
                MySQL
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5">
                Next.js
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5">
                React
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5">
                WordPress
              </span>

            </div>

          </div>

        </div>


        {/* ==================================================
            COLUMNA DERECHA
        ================================================== */}

        <div className="relative hidden lg:block">

          {/* RESPLANDOR */}

          <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-3xl"></div>


          {/* VENTANA */}

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl">


            {/* BARRA SUPERIOR */}

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-3">

              <div className="flex gap-2">

                <span className="h-3 w-3 rounded-full bg-red-400"></span>

                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>

                <span className="h-3 w-3 rounded-full bg-green-400"></span>

              </div>

              <span className="text-xs text-slate-500">
                developer.ts
              </span>

            </div>


            {/* CÓDIGO */}

            <div className="p-6 font-mono text-sm leading-6">

              <p className="text-slate-500">
                {"// Construyendo soluciones digitales"}
              </p>

              <p className="mt-3">

                <span className="text-purple-400">
                  const
                </span>{" "}

                <span className="text-cyan-300">
                  developer
                </span>{" "}

                <span className="text-white">
                  =
                </span>{" "}

                <span className="text-yellow-300">
                  {"{"}
                </span>

              </p>


              <p className="pl-6 text-slate-300">

                name:{" "}

                <span className="text-green-300">
                  &quot;Sergio Muñoz&quot;
                </span>
                ,

              </p>


              <p className="pl-6 text-slate-300">

                role:{" "}

                <span className="text-green-300">
                  &quot;Desarrollador Web&quot;
                </span>
                ,

              </p>


              <p className="pl-6 text-slate-300">

                stack: [

                <span className="text-green-300">
                  &quot;Laravel&quot;
                </span>
                ,{" "}

                <span className="text-green-300">
                  &quot;Next.js&quot;
                </span>
                ],

              </p>


              <p className="pl-6 text-slate-300">

                database:{" "}

                <span className="text-green-300">
                  &quot;MySQL&quot;
                </span>
                ,

              </p>


              <p className="pl-6 text-slate-300">

                building:{" "}

                <span className="text-green-300">
                  &quot;Soluciones reales&quot;
                </span>

              </p>


              <p className="text-yellow-300">
                {"}"}
              </p>

            </div>


            {/* ESTADO */}

            <div className="border-t border-white/10 bg-white/[0.02] px-6 py-3">

              <div className="flex items-center justify-between">

                <span className="text-xs text-slate-500">
                  STATUS
                </span>

                <span className="flex items-center gap-2 text-xs font-medium text-cyan-300">

                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>

                  Disponible

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}