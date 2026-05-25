import { createFileRoute } from "@tanstack/react-router";
import { Header, BOOKSY_URL } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Clock, Calendar } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y Reservas — JC Barberclub Marbella" },
      { name: "description", content: "Encuéntranos en Av. General López Domínguez 36, Marbella. Reserva online o llámanos al +34 611 38 39 16." },
      { property: "og:title", content: "Contacto — JC Barberclub" },
      { property: "og:description", content: "Dirección, horarios y reserva online." },
    ],
  }),
  component: ContactPage,
});

const hours = [
  { d: "Lunes", h: "10:00 – 14:00 · 16:00 – 21:00" },
  { d: "Martes", h: "10:00 – 14:00 · 16:00 – 21:00" },
  { d: "Miércoles", h: "10:00 – 14:00 · 16:00 – 21:00" },
  { d: "Jueves", h: "10:00 – 14:00 · 16:00 – 21:00" },
  { d: "Viernes", h: "10:00 – 14:00 · 16:00 – 21:00" },
  { d: "Sábado", h: "10:00 – 14:00 · 16:00 – 21:00" },
  { d: "Domingo", h: "Cerrado" },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32">
        <section className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Visítanos</p>
          <h1 className="font-display text-6xl uppercase leading-[0.95] md:text-8xl">
            En el centro de <span className="gold-gradient">Marbella</span>
          </h1>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">
          <div className="space-y-8">
            <div className="border border-border/60 bg-card p-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-xl uppercase">Dirección</h3>
                  <p className="mt-2 text-muted-foreground">
                    Avenida General López Domínguez, 36, Local E<br />
                    29603 Marbella, Málaga
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border/60 bg-card p-8">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-xl uppercase">Teléfono</h3>
                  <a href="tel:+34611383916" className="mt-2 block text-muted-foreground hover:text-gold">
                    +34 611 38 39 16
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-border/60 bg-card p-8">
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div className="flex-1">
                  <h3 className="font-display text-xl uppercase">Horarios</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    {hours.map((h) => (
                      <li
                        key={h.d}
                        className="flex justify-between gap-4 border-b border-border/30 pb-2 last:border-0"
                      >
                        <span className="text-foreground">{h.d}</span>
                        <span className="text-muted-foreground">{h.h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4" /> Reservar en Booksy
            </a>
          </div>

          <div className="min-h-[400px] overflow-hidden border border-border/60 bg-card lg:min-h-full">
            <iframe
              title="JC Barberclub Marbella mapa"
              src="https://www.google.com/maps?q=Avenida+General+L%C3%B3pez+Dom%C3%ADnguez+36+Marbella&output=embed"
              className="h-full w-full grayscale"
              style={{ minHeight: 400, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
