import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { BOOKSY_URL } from "./Header";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-12">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-widest text-foreground">
            JC <span className="font-script text-4xl tracking-normal text-muted-foreground">Barberclub</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Barbería masculina en Marbella. Cortes, fades, barba y afeitado clásico.
            Reserva online en segundos.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center bg-gold px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
          >
            Reservar cita
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-gold">Visítanos</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Av. General López Domínguez, 36, Local E, 29603 Marbella
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+34611383916" className="hover:text-gold">+34 611 38 39 16</a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Lun–Sáb · 10–14h / 16–21h
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-gold">Navega</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-gold">Inicio</Link></li>
            <li><Link to="/servicios" className="text-muted-foreground hover:text-gold">Servicios</Link></li>
            <li><Link to="/equipo" className="text-muted-foreground hover:text-gold">Equipo</Link></li>
            <li><Link to="/contacto" className="text-muted-foreground hover:text-gold">Contacto</Link></li>
            <li>
              <a href="https://www.instagram.com/jc.barberclub/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} JC Barberclub · Marbella
      </div>
    </footer>
  );
}
