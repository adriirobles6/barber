import { createFileRoute } from "@tanstack/react-router";
import { Header, BOOKSY_URL } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { services, categories } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios y Precios — JC Barberclub Marbella" },
      { name: "description", content: "Tarifas de cortes, barba, afeitado, color y packs premium en JC Barberclub Marbella." },
      { property: "og:title", content: "Servicios y Precios — JC Barberclub" },
      { property: "og:description", content: "Tarifas de cortes, barba, afeitado, color y packs premium." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32">
        <section className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Carta</p>
          <h1 className="font-display text-6xl uppercase leading-[0.95] md:text-8xl">
            Servicios & <span className="gold-gradient">Tarifas</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Todo lo que necesitas para verte —y sentirte— impecable. Reserva el servicio
            que quieras directamente en Booksy.
          </p>
        </section>

        <section className="mx-auto max-w-7xl space-y-20 px-6 py-20 lg:px-12 lg:py-28">
          {categories.map((cat) => {
            const items = services.filter((s) => s.category === cat.id);
            return (
              <div key={cat.id}>
                <div className="mb-8 flex items-baseline justify-between border-b border-border/60 pb-4">
                  <h2 className="font-display text-3xl uppercase tracking-wider md:text-4xl">
                    {cat.label}
                  </h2>
                  <span className="text-xs uppercase tracking-widest text-gold">
                    {items.length} servicios
                  </span>
                </div>
                <ul className="grid gap-x-12 md:grid-cols-2">
                  {items.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-baseline justify-between gap-4 border-b border-border/30 py-5"
                    >
                      <span className="text-base text-foreground">{s.name}</span>
                      <span className="font-display text-xl text-gold">{s.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>

        <section className="border-t border-border/40 bg-card">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center lg:px-12">
            <div>
              <h2 className="font-display text-3xl uppercase md:text-4xl">
                ¿Listo para tu próxima cita?
              </h2>
              <p className="mt-2 text-muted-foreground">Reserva online en menos de 30 segundos.</p>
            </div>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
            >
              Reservar ahora <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
