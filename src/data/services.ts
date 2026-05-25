export type Service = {
  name: string;
  price?: string;
  duration?: string;
  category: "corte" | "barba" | "color" | "premium";
};

export const services: Service[] = [
  { name: "Corte caballero", price: "15€", category: "corte" },
  { name: "Corte + barba", price: "20€", category: "corte" },
  { name: "Corte + cejas", price: "18€", category: "corte" },
  { name: "Corte + barba + cejas", price: "22€", category: "corte" },
  { name: "Corte niño", price: "10€", category: "corte" },
  { name: "Corte jubilado", price: "12€", category: "corte" },

  { name: "Arreglo de barba", price: "10€", category: "barba" },
  { name: "Afeitado completo", price: "12€", category: "barba" },
  { name: "Afeitado de cabeza", price: "10€", category: "barba" },
  { name: "Afeitado de barba", price: "7€", category: "barba" },
  { name: "Perfilado / perilla", price: "8€", category: "barba" },

  { name: "Mechas", price: "35€", category: "color" },
  { name: "Mechas + corte", price: "45€", category: "color" },
  { name: "Platinado", price: "60€", category: "color" },
  { name: "Platinado + corte", price: "70€", category: "color" },
  { name: "Tinte de barba", price: "15€", category: "color" },

  { name: "Servicio premium", price: "35€", category: "premium" },
  { name: "Servicio premium barba", price: "25€", category: "premium" },
];

export const categories = [
  { id: "corte", label: "Cortes" },
  { id: "barba", label: "Barba & Afeitado" },
  { id: "color", label: "Color & Estética" },
  { id: "premium", label: "Packs Premium" },
] as const;
