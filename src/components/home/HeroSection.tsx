import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-carwash.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/75 to-black/70" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-base md:text-lg font-semibold text-white drop-shadow-lg">Lefkoşa'nın Güvenilir Oto Yıkama Merkezi</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-2xl">
            AutoCare{" "}
            <span className="text-accent drop-shadow-lg">Oto Yıkama</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 drop-shadow-xl">
            Aracınız için kusursuz temizlik
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white mb-10 max-w-xl leading-relaxed drop-shadow-lg">
            Profesyonel ekibimiz ve modern ekipmanlarımızla aracınıza hak ettiği bakımı sunuyoruz. Lefkoşa ve çevresinde kaliteli hizmetin adresi.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white shadow-elevated text-base md:text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
            >
              <Link to="/iletisim">
                Randevu Al
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm text-base md:text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
            >
              <Link to="/hizmetler">Paketleri İncele</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-12 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">500+</p>
              <p className="text-sm text-white drop-shadow-md">Mutlu Müşteri</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">5+</p>
              <p className="text-sm text-white drop-shadow-md">Yıllık Deneyim</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent drop-shadow-lg">4.9</p>
              <p className="text-sm text-white drop-shadow-md">Müşteri Puanı</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
