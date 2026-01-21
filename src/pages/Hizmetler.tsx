import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Droplets, Sparkles, Shield, Car, Gem, Brush, ArrowRight, Check } from "lucide-react";

const packages = [
  {
    id: 1,
    icon: Droplets,
    title: "Dış Yıkama",
    description: "Hızlı ve etkili dış temizlik için ideal seçim.",
    price: "150",
    duration: "~20 dk",
    features: [
      "Köpüklü yıkama",
      "Basınçlı durulama",
      "Kurulama",
      "Cam temizliği",
    ],
  },
  {
    id: 2,
    icon: Car,
    title: "İç Temizlik",
    description: "Aracınızın iç mekanını derinlemesine temizliyoruz.",
    price: "250",
    duration: "~45 dk",
    features: [
      "Koltuk süpürme",
      "Torpido & konsol silme",
      "Paspas temizliği",
      "Cam içi temizlik",
      "Koku giderme",
    ],
  },
  {
    id: 3,
    icon: Sparkles,
    title: "İç + Dış Komple",
    description: "En çok tercih edilen tam bakım paketi.",
    price: "350",
    duration: "~1 saat",
    popular: true,
    features: [
      "Dış yıkama (köpük + durulama)",
      "İç temizlik komple",
      "Cam temizliği (iç + dış)",
      "Torpido cilası",
      "Lastik parlatma",
      "Oto kokusu",
    ],
  },
  {
    id: 4,
    icon: Shield,
    title: "Detaylı Bakım",
    description: "Profesyonel ekipmanlarla kapsamlı bakım.",
    price: "550",
    duration: "~2 saat",
    features: [
      "İç + Dış Komple paket",
      "Motor yıkama",
      "Jant detay temizliği",
      "Plastik aksam yenileme",
      "Deri bakım (varsa)",
      "Boya koruma spreyi",
    ],
  },
  {
    id: 5,
    icon: Gem,
    title: "Seramik Kaplama",
    description: "Uzun süreli koruma ve showroom parlaklığı.",
    price: "2.500",
    duration: "~1 gün",
    premium: true,
    features: [
      "Detaylı yıkama & hazırlık",
      "Boya düzeltme (polish)",
      "Nano seramik kaplama",
      "Cam kaplama",
      "Jant kaplama",
      "6 ay koruma garantisi",
    ],
  },
  {
    id: 6,
    icon: Brush,
    title: "Koltuk Yıkama",
    description: "Kumaş ve deri koltuklar için derin temizlik.",
    price: "400",
    duration: "~3 saat",
    features: [
      "Leke çıkarma",
      "Buhar temizliği",
      "Antibakteriyel işlem",
      "Kurutma",
      "Koku giderme",
    ],
  },
];

const Hizmetler = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hizmet Paketlerimiz
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Her ihtiyaca uygun paketlerle aracınıza özel bakım çözümleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 flex flex-col h-full ${
                  pkg.popular 
                    ? "border-accent shadow-card" 
                    : pkg.premium 
                    ? "border-primary shadow-card bg-gradient-to-br from-card to-secondary/30" 
                    : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-accent text-white text-xs font-medium rounded-full">
                      En Popüler
                    </span>
                  </div>
                )}
                {pkg.premium && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-hero text-white text-xs font-medium rounded-full">
                      Premium
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    pkg.premium ? "bg-gradient-hero" : "bg-secondary"
                  }`}>
                    <pkg.icon className={`w-6 h-6 ${pkg.premium ? "text-white" : "text-primary"}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg text-muted-foreground">TL</span>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-2 pt-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button 
                    asChild 
                    className={`w-full group ${
                      pkg.popular || pkg.premium 
                        ? "bg-gradient-hero hover:opacity-90" 
                        : ""
                    }`}
                    variant={pkg.popular || pkg.premium ? "default" : "outline"}
                  >
                    <Link to="/iletisim">
                      Randevu Al
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Esnek Ödeme</h4>
              <p className="text-sm text-muted-foreground">Nakit ve kredi kartı ile ödeme imkanı</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Randevusuz Hizmet</h4>
              <p className="text-sm text-muted-foreground">Müsaitlik durumuna göre randevusuz da gelebilirsiniz</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Memnuniyet Garantisi</h4>
              <p className="text-sm text-muted-foreground">Hizmetimizden memnun kalmazsanız tekrar yaparız</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Özel Talepleriniz mi Var?
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Filo araçları, kurumsal anlaşmalar veya özel istekleriniz için bizimle iletişime geçin.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/iletisim">
              Bizimle İletişime Geçin
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Hizmetler;
