import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, BOOKSY_URL } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { services, categories } from "@/data/services";
import fade from "@/assets/fade.webp";
import interior from "@/assets/interior.webp";
import jorge from "@/assets/jorge.webp";
import cristian from "@/assets/cristian.webp";

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

const PHONE_DISPLAY = "+34 611 38 39 16";
const PHONE_HREF = "tel:+34611383916";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=JC+Barberclub+Marbella";

const team = [
  {
    name: "Jorge",
    role: "Fundador · 5 años",
    img: jorge,
    desc: "Fades, diseños y barba clásica. El trato cercano que hace que vuelvas.",
  },
  {
    name: "Cristian",
    role: "Senior barber",
    img: cristian,
    desc: "Skin fade, color y estilo urbano. Degradados de alta definición.",
  },
];

const hours = [
  { day: "Lunes a viernes", time: "10–14 · 16–21" },
  { day: "Sábado", time: "10–14 · 16–21" },
  { day: "Domingo", time: "Cerrado" },
];

const btnSolid =
  "inline-flex min-h-12 items-center justify-center gap-3 bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-[background-color,transform] duration-150 hover:bg-foreground active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold motion-reduce:transition-none";
const btnLine =
  "inline-flex min-h-12 items-center justify-center gap-3 border border-foreground/30 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground transition-[background-color,color,transform] duration-150 hover:bg-foreground hover:text-background active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold motion-reduce:transition-none";
const eyebrow = "text-xs uppercase tracking-[0.3em] text-gold";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* HERO: foto real del trabajo + datos clave a la vista */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-28 md:pt-32 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12 lg:pb-28">
          <div className="flex min-w-0 flex-col justify-center gap-7">
            <p className={eyebrow}>Barbería · Centro de Marbella</p>
            <h1 className="text-balance font-display text-6xl uppercase leading-[0.92] md:text-8xl">
              Fades precisos.
              <br />
              Barba en su sitio.
            </h1>
            <p className="max-w-xl text-base text-muted-foreground md:text-lg">
              Cortes, degradados, barba y afeitado con toalla caliente. Reserva con Jorge o
              Cristian en menos de un minuto.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className={btnSolid}>
                Reservar en Booksy <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#precios" className={btnLine}>
                Ver precios
              </a>
            </div>
            <ul className="mt-2 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-5 text-sm text-muted-foreground">
              <li>Lun–Sáb · 10–14h / 16–21h</li>
              <li>Av. General López Domínguez, 36</li>
              <li>
                <a href={PHONE_HREF} className="tabular-nums hover:text-foreground">
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
          <div className="relative min-h-[420px] overflow-hidden bg-card lg:min-h-[600px]">
            <img
              src={fade}
              alt="Fade terminado en JC Barberclub"
              className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
              width={942}
              height={1670}
              fetchpriority="high"
            />
          </div>
        </section>

        {/* CARTA COMPLETA */}
        <section id="precios" className="scroll-mt-24 bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-background/60">La carta</p>
                <h2 className="font-display text-5xl uppercase md:text-6xl">Precios claros</h2>
              </div>
              <p className="max-w-sm text-background/70">
                Precio final, sin sorpresas. Todos los servicios se reservan en Booksy.
              </p>
            </div>

            <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
              {categories.map((c) => {
                const premium = c.id === "premium";
                return (
                  <div
                    key={c.id}
                    className={premium ? "min-w-0 self-start bg-background p-7 text-foreground" : "min-w-0"}
                  >
                    <h3 className="mb-2 font-display text-2xl uppercase tracking-wider">{c.label}</h3>
                    <ul className="tabular-nums">
                      {services
                        .filter((s) => s.category === c.id)
                        .map((s) => (
                          <li
                            key={s.name}
                            className={
                              "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b py-3 " +
                              (premium ? "border-border" : "border-background/15")
                            }
                          >
                            <span>{s.name}</span>
                            <span className="font-medium">{s.price?.replace("€", " €")}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-3 bg-background px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground transition-transform duration-150 active:scale-[0.97] motion-reduce:transition-none"
              >
                Reservar un servicio <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <p className={eyebrow + " mb-3"}>El equipo</p>
          <h2 className="mb-12 font-display text-5xl uppercase md:text-6xl">Elige a tu barbero</h2>
          <div className="grid gap-12 md:grid-cols-2 md:gap-8">
            {team.map((b) => (
              <article key={b.name} className="flex min-w-0 flex-col gap-5">
                <div className="aspect-[4/5] overflow-hidden bg-card">
                  <img
                    src={b.img}
                    alt={`${b.name}, barbero de JC Barberclub`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-4xl uppercase">{b.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{b.role}</span>
                </div>
                <p className="text-muted-foreground">{b.desc}</p>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnLine + " self-start"}
                >
                  Reservar con {b.name}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* RESEÑAS */}
        <section className="border-y border-border">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
            <p className={eyebrow + " mb-3"}>Clientes</p>
            <h2 className="mb-12 font-display text-5xl uppercase md:text-6xl">Lo que dicen</h2>
            <ReviewsCarousel />
          </div>
        </section>

        {/* VISÍTANOS */}
        <section id="visitanos" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex min-w-0 flex-col gap-7">
              <p className={eyebrow}>Visítanos</p>
              <h2 className="font-display text-5xl uppercase md:text-6xl">En pleno centro</h2>
              <p className="text-lg">
                Av. General López Domínguez, 36, Local E
                <br />
                29603 Marbella
              </p>
              <ul className="tabular-nums">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-border py-3"
                  >
                    <span>{h.day}</span>
                    <span className={h.time === "Cerrado" ? "text-muted-foreground" : ""}>{h.time}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={btnSolid}>
                  <MapPin className="h-4 w-4" /> Cómo llegar
                </a>
                <a href={PHONE_HREF} className={btnLine + " tabular-nums"}>
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden bg-card">
              <img
                src={interior}
                alt="El local de JC Barberclub por dentro"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ACADEMIA */}
        <section className="bg-card">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-14 lg:px-12">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl uppercase">Academia JC</h2>
              <p className="mt-2 text-muted-foreground">
                ¿Quieres ser barbero? Aprende técnica clásica y moderna con nosotros y te avisamos
                de los próximos cursos.
              </p>
            </div>
            <Link to="/academia" className={btnLine}>
              Ver la academia
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      {/* Barra fija en móvil: reservar siempre a mano */}
      <div className="sticky bottom-0 z-40 flex gap-2 border-t border-border bg-background/95 px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <a
          href={PHONE_HREF}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border border-foreground/30 text-sm font-bold uppercase tracking-widest"
        >
          <Phone className="h-4 w-4" /> Llamar
        </a>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 flex-[2] items-center justify-center bg-gold text-sm font-bold uppercase tracking-widest text-primary-foreground"
        >
          Reservar cita
        </a>
      </div>
    </div>
  );
}
