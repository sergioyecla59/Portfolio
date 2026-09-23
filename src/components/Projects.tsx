import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Descanso Premium",
    type: "E-commerce",
    description:
      "Aplicación web para una empresa de colchones con catálogo, panel de administración, gestión de productos, pedidos y proceso de compra online.",
    technologies: ["Laravel", "MySQL", "Stripe", "JavaScript"],
    image: "/projects/descanso-premium/colchones1.jpg",
    href: "/proyectos/descanso-premium",
  },
  {
    title: "Club Pádel",
    type: "Aplicación Web",
    description:
      "Sistema para digitalizar la gestión de un club de pádel mediante reservas de pistas, usuarios y futuras funcionalidades de ligas y automatización.",
    technologies: ["Laravel", "MySQL", "JavaScript", "CSS"],
    image: "/projects/padel.jpg",
    href: "/proyectos/club-padel",
  },
  {
    title: "Marketplace segunda mano",
    type: "Proyecto Personal",
    description:
      "Plataforma web de compraventa de productos de segunda mano donde los usuarios pueden publicar artículos y ponerlos a la venta.",
    technologies: ["Laravel", "MySQL", "PHP", "CSS"],
    image: "/projects/Home_Segunda_Mano.jpg",
    href: "/proyectos/segunda-mano",
  },
  {
    title: "Proyectos WordPress",
    type: "Desarrollo web",
    description:
      "Diseño y desarrollo de páginas corporativas e informativas para negocios mediante WordPress y Elementor.",
    technologies: ["WordPress", "Elementor", "CSS", "Responsive"],
    image: "/projects/Entheos.jpg",
    href: "/proyectos/wordpress-entheos",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* ==================================================
            CABECERA
        ================================================== */}

        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Proyectos
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Algunos proyectos
            <span className="block text-slate-400">
              en los que he trabajado.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Proyectos enfocados en resolver necesidades reales mediante
            aplicaciones web, gestión de datos y experiencias digitales
            modernas.
          </p>
        </div>

        {/* ==================================================
            PROYECTOS
        ================================================== */}

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >

              {/* ==========================================
                  IMAGEN
              ========================================== */}

              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Captura del proyecto ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                    className="object-contain transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-sm text-slate-600">
                      Captura próximamente
                    </span>
                  </div>
                )}

                {/* NÚMERO */}

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-cyan-400 backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* TIPO */}

                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
                  {project.type}
                </div>
              </div>

              {/* ==========================================
                  INFORMACIÓN
              ========================================== */}

              <div className="p-7 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-2xl font-bold transition group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  <span className="text-xl text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                {/* DESCRIPCIÓN */}

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* TECNOLOGÍAS */}

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* ==========================================
                    BOTÓN VER PROYECTO
                ========================================== */}

                {project.href && (
                  <div className="mt-8">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
                    >
                      Ver proyecto
                      <span>→</span>
                    </Link>
                  </div>
                )}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}