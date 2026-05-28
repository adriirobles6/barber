import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const STATIC_REVIEWS = [
  { author_name: "Álvaro M.", text: "Jorge es un crack. El mejor fade de Marbella sin duda.", rating: 5 },
  { author_name: "Diego R.", text: "Ambiente top, atención impecable y un acabado de barba perfecto.", rating: 5 },
  { author_name: "Marcos L.", text: "Llevo meses yendo con Cristian y siempre clavado. 100% recomendable.", rating: 5 },
];

export function ReviewsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const { data: reviews, isLoading } = useQuery({
    queryKey: ['google-reviews'],
    queryFn: async () => {
      const res = await fetch('/api/reviews');
      if (!res.ok) throw new Error('Failed to fetch reviews');
      return res.json();
    },
    retry: false,
  });

  const displayReviews = reviews && reviews.length > 0 ? reviews : STATIC_REVIEWS;

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {displayReviews.map((r: any, idx: number) => (
          <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="flex h-full flex-col border border-border/60 bg-card p-8">
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: r.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="flex-1 text-foreground/90 line-clamp-5">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                {r.profile_photo_url && (
                  <img src={r.profile_photo_url} alt={r.author_name} className="h-8 w-8 rounded-full" />
                )}
                <p className="text-xs uppercase tracking-widest text-muted-foreground">— {r.author_name}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
