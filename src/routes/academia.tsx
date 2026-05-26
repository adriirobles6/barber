import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Send, Image as ImageIcon, Video } from "lucide-react";

export const Route = createFileRoute("/academia")({
  head: () => ({
    meta: [
      { title: "Academia — JC Barberclub Marbella" },
      { name: "description", content: "Aprende con los mejores en JC Barberclub. Apúntate a nuestra academia para futuros profesionales." },
      { property: "og:title", content: "Academia — JC Barberclub" },
      { property: "og:description", content: "Formación profesional en barbería." },
    ],
  }),
  component: AcademiaPage,
});

function AcademiaPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, estoy interesado/a en la academia de JC Barberclub.%0A%0A*Nombre:* ${formData.nombre}%0A*Teléfono:* ${formData.telefono}%0A*Email:* ${formData.email}%0A*Mensaje:* ${formData.mensaje}`;
    window.open(`https://wa.me/34681081407?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32">
        <section className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Aprende con nosotros</p>
          <h1 className="font-display text-6xl uppercase leading-[0.95] md:text-8xl">
            Nuestra <span className="gold-gradient">Academia</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Únete a nuestra academia y fórmate como un auténtico profesional de la barbería. Descubre las mejores técnicas, cortes clásicos y modernos, y todo lo que necesitas para triunfar en este arte.
          </p>
        </section>

        {/* Galería */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-display text-3xl uppercase tracking-widest text-foreground">Galería</h2>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-wider"><ImageIcon className="w-4 h-4 text-gold"/> Fotos</span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-wider"><Video className="w-4 h-4 text-gold"/> Vídeo</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="aspect-[3/4] overflow-hidden border border-border/60 bg-card">
              <img 
                src="/academia-1.jpg" 
                alt="Alumno de la academia practicando un corte" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden border border-border/60 bg-card">
              <img 
                src="/academia-2.jpg" 
                alt="Profesor enseñando técnica de corte en la academia" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-6 max-w-4xl mx-auto">
            <div className="overflow-hidden border border-border/60 bg-card">
              <video
                src="/academia-video.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full"
              >
                Tu navegador no soporta la reproducción de vídeo.
              </video>
            </div>
          </div>
        </section>

        {/* Formulario de inscripción */}
        <section className="bg-card border-y border-border/60 py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl uppercase tracking-widest text-foreground">Apúntate ahora</h2>
              <p className="mt-4 text-muted-foreground">Déjanos tus datos y nos pondremos en contacto contigo para informarte de nuestros próximos cursos.</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-xs uppercase tracking-widest text-muted-foreground">Nombre completo</label>
                  <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} required className="w-full bg-background border border-border/60 px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-xs uppercase tracking-widest text-muted-foreground">Teléfono</label>
                  <input type="tel" id="telefono" value={formData.telefono} onChange={handleChange} required className="w-full bg-background border border-border/60 px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors" placeholder="Tu teléfono" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Correo electrónico</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-background border border-border/60 px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors" placeholder="tu@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-xs uppercase tracking-widest text-muted-foreground">Mensaje o dudas (opcional)</label>
                <textarea id="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} className="w-full bg-background border border-border/60 px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Cuéntanos un poco sobre ti y tu experiencia..."></textarea>
              </div>
              
              <button type="submit" className="w-full inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]">
                <Send className="h-4 w-4" /> Enviar por WhatsApp
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
