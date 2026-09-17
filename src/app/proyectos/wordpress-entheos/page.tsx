import Link from "next/link";
import Image from "next/image";

export default function WordPressEntheosPage() {
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
              Proyecto 04
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">
              WordPress
            </span>

          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Entheos
          </h1>

          <p className="mt-4 text-xl font-medium text-cyan-400">
            Diseño de página corporativa con WordPress
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Diseño y desarrollo de una página principal corporativa utilizando
            WordPress y Elementor, trabajando la estructura visual, la
            presentación de servicios y la adaptación responsive para
            diferentes dispositivos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "WordPress",
              "Elementor",
              "CSS",
              "Responsive",
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

          <div className="overflow-hidden rounded-2xl bg-slate-900">

            <Image
              src="/projects/Entheos.jpg"
              alt="Página principal del proyecto Entheos"
              width={1920}
              height={1080}
              priority
              unoptimized
              className="h-auto w-full"
            />

          </div>

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
              Una página corporativa

              <span className="block text-slate-500">
                moderna y responsive.
              </span>
            </h2>

          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">

            <p>
              Entheos es un proyecto desarrollado con WordPress y Elementor
              para presentar de forma clara y profesional los servicios de la
              empresa.
            </p>

            <p>
              El trabajo se centró en el diseño y construcción de la página
              principal, organizando el contenido en diferentes secciones y
              creando una identidad visual coherente con la imagen de la
              empresa.
            </p>

            <p>
              La página fue adaptada tanto para ordenador como para
              dispositivos móviles, trabajando la distribución del contenido,
              imágenes, tipografías, espacios y diferentes elementos de la
              interfaz.
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
              Desarrollo
            </p>

            <h2 className="text-4xl font-bold">
              Trabajo realizado en la página
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Diseño de la Home",
              "Sección de servicios",
              "Diseño responsive",
              "Adaptación para móvil",
              "Maquetación con Elementor",
              "Personalización con CSS",
              "Contenido corporativo",
              "Llamadas a la acción",
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
              Algunas secciones del proyecto
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
              Diferentes partes de la página principal diseñadas y adaptadas
              para presentar la empresa y sus servicios.
            </p>

          </div>


          {/* ==================================================
              CAPTURAS
          ================================================== */}

          <div className="grid gap-6 md:grid-cols-2">


            {/* SERVICIOS */}

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <div className="h-[320px] overflow-hidden bg-slate-950">

                <Image
                  src="/projects/Servicios_Entheos.jpg"
                  alt="Sección de servicios del proyecto Entheos"
                  width={1600}
                  height={900}
                  unoptimized
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />

              </div>

              <div className="border-t border-white/10 p-5">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Servicios
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Presentación de servicios
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Organización visual de los diferentes servicios ofrecidos
                  por la empresa.
                </p>

              </div>

            </article>


            {/* CONTACTO */}

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <div className="h-[320px] overflow-hidden bg-slate-950">

                <Image
                  src="/projects/Contacto_Entheos.jpg"
                  alt="Sección inferior del proyecto Entheos"
                  width={1600}
                  height={900}
                  unoptimized
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />

              </div>

              <div className="border-t border-white/10 p-5">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Diseño
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Contenido corporativo
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Secciones diseñadas para completar la presentación de la
                  empresa y facilitar el contacto con el usuario.
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
                Diseño y construcción

                <span className="block text-slate-400">
                  de la página principal.
                </span>
              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {[
                "WordPress",
                "Elementor",
                "Diseño UI",
                "Responsive",
                "CSS",
                "Maquetación",
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

    </main>
  );
}