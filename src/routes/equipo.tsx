import { createFileRoute } from "@tanstack/react-router";
import { Header, BOOKSY_URL } from "@/components/Header";
import { Footer } from "@/components/Footer";
import jorge from "@/assets/jorge.jpg";
import cristian from "@/assets/cristian.jpg";

export const Route = createFileRoute("/equipo")({
  head: () => ({
    meta: [
      { title: "Nuestro equipo — JC Barberclub Marbella" },
      { name: "description", content: "Conoce a Jorge y Cristian, los barberos de JC Barberclub Marbella." },
      { property: "og:title", content: "Equipo — JC Barberclub" },
      { property: "og:description", content: "Los barberos detrás de JC Barberclub." },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "Jorge",
    role: "Founder · Master Barber",
    img: jorge,
    bio: "Más de 10 años perfeccionando fades y barbas. Su precisión y trato cercano lo han convertido en el favorito de la casa.",
    specialties: ["Fades", "Diseños", "Barba clásica"],
    bookingUrl: `${BOOKSY_URL}?staffer=jorge`,
  },
  {
    name: "Cristian",
    role: "Senior Barber",
    img: cristian,
    bio: "Estilo urbano y mano firme. Especialista en cortes modernos, color y degradados de alta definición.",
    specialties: ["Skin fade", "Color", "Estilo urbano"],
    bookingUrl: `${BOOKSY_URL}?staffer=cristian`,
  },
];

function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32">
        <section className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">El equipo</p>
          <h1 className="font-display text-6xl uppercase leading-[0.95] md:text-8xl">
            Manos que <span className="gold-gradient">crean estilo</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Detrás de cada corte hay un barbero apasionado. Conoce al equipo de JC Barberclub
            y elige con quién quieres tu próxima cita.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid gap-10 md:grid-cols-2">
            {team.map((m) => (
              <article key={m.name} className="group border border-border/60 bg-card">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">{m.role}</p>
                  <h2 className="mt-2 font-display text-5xl uppercase">{m.name}</h2>
                  <p className="mt-4 text-muted-foreground">{m.bio}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {m.specialties.map((s) => (
                      <li
                        key={s}
                        className="border border-gold/40 px-3 py-1 text-xs uppercase tracking-widest text-gold"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={m.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center bg-gold px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Reservar con {m.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
