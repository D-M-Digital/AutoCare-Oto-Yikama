import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Droplets, Sparkles, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Droplets,
    title: "Dış Yıkama",
    description: "Aracınızın dış yüzeyini köpüklü yıkama, durulama ve kurulama ile pırıl pırıl hale getiriyoruz.",
    price: "150 TL",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "İç + Dış Komple",
    description: "Dış yıkama, iç temizlik, torpido silme, cam temizliği ve koltuk süpürme dahil tam paket.",
    price: "350 TL",
    popular: true,
  },
  {
    id: 3,
    icon: Shield,
    title: "Detaylı Bakım",
    description: "Motor yıkama, jant parlatma, lastik cilası ve tüm detaylarıyla profesyonel bakım hizmeti.",
    price: "550 TL",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Aracınız İçin En İyi Bakım
          </h2>
          <p className="text-muted-foreground">
            Her bütçeye ve ihtiyaca uygun paketlerimizle aracınızı ilk günkü parlaklığına kavuşturun.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                service.popular ? "border-accent shadow-card" : "border-border"
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-accent text-white text-xs font-medium rounded-full">
                    Popüler
                  </span>
                </div>
              )}
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full group">
                  <Link to="/iletisim">
                    Randevu Al
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Button asChild variant="link" className="text-primary">
            <Link to="/hizmetler">
              Tüm Hizmetleri Gör
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
