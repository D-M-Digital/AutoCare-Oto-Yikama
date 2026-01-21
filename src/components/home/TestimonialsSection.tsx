import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Müşteri Adı 1",
    rating: 5,
    text: "Müşteri yorumu placeholder. Hizmet deneyimi hakkında detaylı geri bildirim burada yer alacak.",
    vehicle: "Araç Modeli",
  },
  {
    id: 2,
    name: "Müşteri Adı 2",
    rating: 5,
    text: "Müşteri yorumu placeholder. Hizmet deneyimi hakkında detaylı geri bildirim burada yer alacak.",
    vehicle: "Araç Modeli",
  },
  {
    id: 3,
    name: "Müşteri Adı 3",
    rating: 5,
    text: "Müşteri yorumu placeholder. Hizmet deneyimi hakkında detaylı geri bildirim burada yer alacak.",
    vehicle: "Araç Modeli",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Müşteri Yorumları
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-muted-foreground">
            Müşteri yorumları açıklama placeholder.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card shadow-soft">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-accent/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.vehicle}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
