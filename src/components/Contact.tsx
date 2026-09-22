"use client";
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
const registrarContactoEmail = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "contact_email_click", {
      method: "email",
    });
  }
};
const registrarClickGithub = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "github_click", {
      destination: "github",
    });
  }
};
export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-slate-900 py-16 text-white"
    >
      {/* ==================================================
          LUCES DE FONDO
      ================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>

      {/* ==================================================
          CONTENIDO
      ================================================== */}
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Etiqueta */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Contacto
        </p>

        {/* ==================================================
            BLOQUE PRINCIPAL
        ================================================== */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          {/* IZQUIERDA */}
          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
              ¿Tienes un proyecto
              <span className="block text-slate-400">
                en mente?
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Si necesitas una página web, una aplicación o quieres
              digitalizar una idea o proceso de tu negocio, podemos hablar
              sobre el proyecto y estudiar la mejor solución.
            </p>
          </div>

          {/* DERECHA */}
          <div className="lg:text-right">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              Disponible para nuevos proyectos
            </div>
          </div>
        </div>

        {/* ==================================================
            OPCIONES DE CONTACTO
        ================================================== */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {/* EMAIL */}
          <a
            href="mailto:sergioyecla59@gmail.com"
            onClick={registrarContactoEmail}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            <div className="mb-5 flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-lg text-cyan-400">
                @
              </div>

              <span className="text-xl text-slate-600 transition group-hover:text-cyan-400">
                ↗
              </span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Email
            </span>

            <h3 className="mt-2 text-lg font-bold">
              Escríbeme
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Cuéntame brevemente tu proyecto o la idea que quieres desarrollar.
            </p>

            <p className="mt-4 text-sm font-medium text-cyan-300">
              sergioyecla59@gmail.com
            </p>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/sergioyecla59"
            target="_blank"
            rel="noopener noreferrer"
            onClick={registrarClickGithub}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            <div className="mb-5 flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 font-mono text-sm font-bold text-cyan-400">
                {"</>"}
              </div>

              <span className="text-xl text-slate-600 transition group-hover:text-cyan-400">
                ↗
              </span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              GitHub
            </span>

            <h3 className="mt-2 text-lg font-bold">
              Ver código
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Consulta mis repositorios y algunos de los proyectos que estoy
              desarrollando.
            </p>

            <p className="mt-4 text-sm font-medium text-cyan-300">
              github.com/sergioyecla59
            </p>
          </a>

        </div>

        {/* ==================================================
            CTA FINAL
        ================================================== */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h3 className="text-lg font-bold">
              ¿Hablamos sobre tu proyecto?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Cuéntame qué necesitas y vemos cómo podemos llevarlo a la web.
            </p>
          </div>

          <a
            href="mailto:sergioyecla59@gmail.com"
            onClick={registrarContactoEmail}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
          >
            Contactar
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}