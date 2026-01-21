import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Adres placeholder, Lefkoşa, KKTC",
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+90 XXX XXX XX XX",
  },
  {
    icon: Mail,
    title: "E-posta",
    content: "info@autocare.com",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    content: "Pzt - Cmt: 08:00 - 19:00",
  },
];

const Iletisim = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic placeholder
    console.log("Form submitted");
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            İletişim
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            İletişim sayfası açıklama placeholder. Hemen randevu alın.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Bize Ulaşın
                </h2>
                <p className="text-muted-foreground">
                  İletişim bilgileri açıklama placeholder.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{info.title}</h4>
                        <p className="text-muted-foreground text-sm">{info.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-xl bg-muted flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-muted-foreground">Harita Alanı Placeholder</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Randevu Formu</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Ad Soyad
                        </label>
                        <Input placeholder="Adınız Soyadınız" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Telefon
                        </label>
                        <Input placeholder="+90 XXX XXX XX XX" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        E-posta
                      </label>
                      <Input type="email" placeholder="ornek@email.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Araç Bilgisi
                      </label>
                      <Input placeholder="Marka / Model / Yıl" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Hizmet Seçimi
                      </label>
                      <Input placeholder="İstediğiniz hizmet paketi" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Mesajınız
                      </label>
                      <Textarea
                        placeholder="Ek bilgi veya isteklerinizi yazabilirsiniz..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90" size="lg">
                      <Send className="mr-2 w-4 h-4" />
                      Randevu Talebi Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Iletisim;
