import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, BOOKSY_URL } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Scissors, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero.webp";
import fade from "@/assets/fade.webp";
import shave from "@/assets/shave.webp";
import interior from "@/assets/interior.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JC Barberclub — Barbería en Marbella · Fades, Barba & Afeitado" },
      { name: "description", content: "Barbería masculina en el centro de Marbella. Cortes, fades, barba y afeitado clásico. Reserva online con Jorge o Cristian." },
      { property: "og:title", content: "JC Barberclub — Barbería en Marbella" },
      { property: "og:description", content: "Cortes, fades y afeitado clásico en Marbella. Reserva online." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-screen items-end overflow-hidden pt-24">
          <img
            src={hero}
            alt="Corte fade en JC Barberclub"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            width={1600}
            height={1800}
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
          <div className="absolute inset-0 vignette" />

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:px-12 lg:pb-32">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">
              Marbella · Est. Barberclub
            </p>
            <h1 className="font-display text-6xl uppercase leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
              Estilo que <br />
              <span className="gold-gradient">se siente</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Fades precisos, barba cuidada y afeitado clásico. La barbería de
              referencia en el corazón de Marbella.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
              >
                Reservar ahora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>

        {/* TRES VALORES */}
        <section className="border-y border-border/40 bg-card">
          <div className="mx-auto grid max-w-7xl divide-y divide-border/40 px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
            {[
              { icon: Scissors, t: "Cortes & Fades", d: "Especialistas en degradados precisos y estilos urbanos." },
              { icon: Sparkles, t: "Experiencia Premium", d: "Producto profesional, atención al detalle y ambiente único." },
              { icon: Star, t: "Top valorados", d: "Cientos de reseñas 5★ en Booksy y Google Marbella." },
            ].map((v) => (
              <div key={v.t} className="flex flex-col gap-3 px-2 py-10 md:px-10">
                <v.icon className="h-7 w-7 text-gold" />
                <h3 className="font-display text-2xl uppercase tracking-wider">{v.t}</h3>
                <p className="text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICIOS DESTACADOS */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Servicios</p>
              <h2 className="font-display text-5xl uppercase md:text-6xl">
                El arte de la <span className="gold-gradient">barbería</span>
              </h2>
            </div>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-gold"
            >
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: fade, title: "Corte & Fade", price: "Desde 15€", desc: "Degradados limpios, líneas marcadas." },
              { img: shave, title: "Afeitado clásico", price: "Desde 7€", desc: "Toalla caliente, navaja, ritual completo." },
              { img: interior, title: "Pack Premium", price: "35€", desc: "La experiencia completa de la casa." },
            ].map((s) => (
              <article key={s.title} className="group relative overflow-hidden border border-border/60 bg-card">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="space-y-2 p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl uppercase">{s.title}</h3>
                    <span className="text-sm text-gold">{s.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="relative overflow-hidden border-y border-border/40">
          <img
            src={interior}
            alt="Interior JC Barberclub"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Reservas</p>
            <h2 className="max-w-2xl font-display text-5xl uppercase leading-[0.95] md:text-7xl">
              Tu próxima cita, <span className="gold-gradient">en segundos</span>
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Elige barbero, servicio y hora. Sin llamadas, sin esperas.
            </p>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
            >
              Reservar en Booksy <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* RESEÑAS */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <p className="mb-3 text-center text-xs uppercase tracking-[0.4em] text-gold">Clientes</p>
          <h2 className="text-center font-display text-4xl uppercase md:text-5xl">Lo que dicen de nosotros</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: "Álvaro M.", t: "Jorge es un crack. El mejor fade de Marbella sin duda." },
              { n: "Diego R.", t: "Ambiente top, atención impecable y un acabado de barba perfecto." },
              { n: "Marcos L.", t: "Llevo meses yendo con Cristian y siempre clavado. 100% recomendable." },
            ].map((r) => (
              <div key={r.n} className="border border-border/60 bg-card p-8">
                <div className="mb-4 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/90">"{r.t}"</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">— {r.n}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
