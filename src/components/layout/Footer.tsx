import { Link } from "react-router-dom";
import { Droplets, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Auto<span className="text-accent">Care</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Lefkoşa'nın güvenilir oto yıkama merkezi. Aracınız için en iyi bakım hizmeti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-white/70 hover:text-accent transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>Adres alanı placeholder</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+90 XXX XXX XX XX</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Clock className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>Pzt - Cmt: 08:00 - 19:00</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold mb-4">Çalışma Saatleri</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between">
                <span>Pazartesi - Cuma</span>
                <span>08:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Cumartesi</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Pazar</span>
                <span>Kapalı</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} AutoCare Oto Yıkama. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
