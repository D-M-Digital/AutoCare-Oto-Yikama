import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, 'dist');
const staticPath = join(__dirname, 'static-html-pure');

if (!existsSync(staticPath)) {
  mkdirSync(staticPath, { recursive: true });
}

const cssContent = readFileSync(join(distPath, 'assets', 'index-ByfiIGYx.css'), 'utf-8');

const getHeaderHTML = (currentPath) => {
  const navLinks = [
    { href: 'index.html', label: 'Anasayfa', path: '/' },
    { href: 'hizmetler.html', label: 'Hizmetler', path: '/hizmetler' },
    { href: 'iletisim.html', label: 'İletişim', path: '/iletisim' },
  ];
  
  const isActive = (path) => currentPath === path;
  
  return `
    <header class="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16 md:h-20">
          <a href="index.html" class="flex items-center gap-2 group">
            <div class="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <span class="text-xl font-bold text-foreground">
              Auto<span class="text-primary">Care</span>
            </span>
          </a>
          <nav class="hidden md:flex items-center gap-8">
            ${navLinks.map(link => `
              <a href="${link.href}" class="text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-muted-foreground'}">
                ${link.label}
              </a>
            `).join('')}
          </nav>
          <div class="hidden md:block">
            <a href="iletisim.html" class="inline-flex items-center justify-center rounded-md bg-gradient-hero px-4 py-2 text-sm font-medium text-white shadow-soft hover:opacity-90 transition-opacity">
              Randevu Al
            </a>
          </div>
          <button class="md:hidden p-2 text-foreground" id="mobile-menu-btn" aria-label="Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="menu-icon">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="close-icon">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="md:hidden hidden py-4 border-t border-border" id="mobile-menu">
          <nav class="flex flex-col gap-4">
            ${navLinks.map(link => `
              <a href="${link.href}" class="text-base font-medium px-2 py-2 rounded-lg transition-colors ${isActive(link.path) ? 'text-primary bg-secondary' : 'text-muted-foreground hover:text-primary hover:bg-secondary'}">
                ${link.label}
              </a>
            `).join('')}
            <a href="iletisim.html" class="inline-flex items-center justify-center rounded-md bg-gradient-hero px-4 py-2 text-sm font-medium text-white mt-2">
              Randevu Al
            </a>
          </nav>
        </div>
      </div>
    </header>
  `;
};

const getFooterHTML = () => {
  return `
    <footer class="bg-gradient-dark text-white">
      <div class="container mx-auto px-4 py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="space-y-4">
            <a href="index.html" class="flex items-center gap-2">
              <div class="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <span class="text-xl font-bold">
                Auto<span class="text-accent">Care</span>
              </span>
            </a>
            <p class="text-white/70 text-sm leading-relaxed">
              Lefkoşa'nın güvenilir oto yıkama merkezi. Aracınız için en iyi bakım hizmeti.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul class="space-y-2">
              <li><a href="index.html" class="text-white/70 hover:text-accent transition-colors text-sm">Anasayfa</a></li>
              <li><a href="hizmetler.html" class="text-white/70 hover:text-accent transition-colors text-sm">Hizmetler</a></li>
              <li><a href="iletisim.html" class="text-white/70 hover:text-accent transition-colors text-sm">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">İletişim</h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-3 text-sm text-white/70">
                <svg class="w-4 h-4 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Adres alanı placeholder</span>
              </li>
              <li class="flex items-center gap-3 text-sm text-white/70">
                <svg class="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+90 XXX XXX XX XX</span>
              </li>
              <li class="flex items-start gap-3 text-sm text-white/70">
                <svg class="w-4 h-4 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Pzt - Cmt: 08:00 - 19:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Çalışma Saatleri</h4>
            <ul class="space-y-2 text-sm text-white/70">
              <li class="flex justify-between"><span>Pazartesi - Cuma</span><span>08:00 - 19:00</span></li>
              <li class="flex justify-between"><span>Cumartesi</span><span>09:00 - 18:00</span></li>
              <li class="flex justify-between"><span>Pazar</span><span>Kapalı</span></li>
            </ul>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>© 2024 AutoCare Oto Yıkama. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  `;
};

const getBaseHTML = (title, content, currentPath = '/') => {
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="AutoCare Oto Yıkama - Lefkoşa'nın güvenilir oto yıkama merkezi" />
  <style>${cssContent}</style>
</head>
<body>
  <div class="min-h-screen flex flex-col">
    ${getHeaderHTML(currentPath)}
    <main class="flex-1 pt-16 md:pt-20">
      ${content}
    </main>
    ${getFooterHTML()}
  </div>
  <script>
    document.getElementById('mobile-menu-btn')?.addEventListener('click', function() {
      const menu = document.getElementById('mobile-menu');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');
      if (menu && menuIcon && closeIcon) {
        menu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });
  </script>
</body>
</html>`;
};

const indexContent = `
<section class="relative min-h-screen flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('./assets/hero-carwash-C1CLg1zw.jpg')"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/75 to-black/70"></div>
  <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float"></div>
  <div class="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
        <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
        <span class="text-base md:text-lg font-semibold text-white drop-shadow-lg">Lefkoşa'nın Güvenilir Oto Yıkama Merkezi</span>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-2xl">
        AutoCare <span class="text-accent drop-shadow-lg">Oto Yıkama</span>
      </h1>
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 drop-shadow-xl">
        Aracınız için kusursuz temizlik
      </h2>
      <p class="text-lg md:text-xl text-white mb-10 max-w-xl leading-relaxed drop-shadow-lg">
        Profesyonel ekibimiz ve modern ekipmanlarımızla aracınıza hak ettiği bakımı sunuyoruz. Lefkoşa ve çevresinde kaliteli hizmetin adresi.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="iletisim.html" class="inline-flex items-center justify-center rounded-xl bg-accent hover:bg-accent/90 text-white shadow-elevated text-base md:text-lg px-8 py-6 transition-all hover:scale-105">
          Randevu Al
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
        <a href="hizmetler.html" class="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm text-base md:text-lg px-8 py-6 transition-all hover:scale-105">
          Paketleri İncele
        </a>
      </div>
      <div class="flex flex-wrap items-center gap-6 md:gap-10 mt-12 pt-8 border-t border-white/20">
        <div>
          <p class="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">500+</p>
          <p class="text-sm text-white drop-shadow-md">Mutlu Müşteri</p>
        </div>
        <div>
          <p class="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">5+</p>
          <p class="text-sm text-white drop-shadow-md">Yıllık Deneyim</p>
        </div>
        <div>
          <p class="text-3xl md:text-4xl font-bold text-accent drop-shadow-lg">4.9</p>
          <p class="text-sm text-white drop-shadow-md">Müşteri Puanı</p>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
</section>

<section class="py-16 md:py-24 bg-background">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="text-sm font-medium text-accent uppercase tracking-wider">Hizmetlerimiz</span>
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Aracınız İçin En İyi Bakım</h2>
      <p class="text-muted-foreground">Her bütçeye ve ihtiyaca uygun paketlerimizle aracınızı ilk günkü parlaklığına kavuşturun.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="relative overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 border border-border rounded-lg bg-card">
        <div class="p-6">
          <div class="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-foreground mb-2">Dış Yıkama</h3>
          <p class="text-muted-foreground text-sm mb-4">Aracınızın dış yüzeyini köpüklü yıkama, durulama ve kurulama ile pırıl pırıl hale getiriyoruz.</p>
          <p class="text-2xl font-bold text-primary mb-4">150 TL</p>
          <a href="iletisim.html" class="inline-flex items-center justify-center w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            Randevu Al
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="relative overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 border-accent shadow-card rounded-lg bg-card">
        <div class="absolute top-4 right-4">
          <span class="px-3 py-1 bg-gradient-accent text-white text-xs font-medium rounded-full">Popüler</span>
        </div>
        <div class="p-6">
          <div class="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-foreground mb-2">İç + Dış Komple</h3>
          <p class="text-muted-foreground text-sm mb-4">Dış yıkama, iç temizlik, torpido silme, cam temizliği ve koltuk süpürme dahil tam paket.</p>
          <p class="text-2xl font-bold text-primary mb-4">350 TL</p>
          <a href="iletisim.html" class="inline-flex items-center justify-center w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            Randevu Al
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="relative overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 border border-border rounded-lg bg-card">
        <div class="p-6">
          <div class="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-foreground mb-2">Detaylı Bakım</h3>
          <p class="text-muted-foreground text-sm mb-4">Motor yıkama, jant parlatma, lastik cilası ve tüm detaylarıyla profesyonel bakım hizmeti.</p>
          <p class="text-2xl font-bold text-primary mb-4">550 TL</p>
          <a href="iletisim.html" class="inline-flex items-center justify-center w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            Randevu Al
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center mt-10">
      <a href="hizmetler.html" class="inline-flex items-center text-primary hover:underline">
        Tüm Hizmetleri Gör
        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </a>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 bg-secondary">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="text-sm font-medium text-accent uppercase tracking-wider">Müşteri Yorumları</span>
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Müşterilerimiz Ne Diyor?</h2>
      <p class="text-muted-foreground">Müşteri yorumları açıklama placeholder.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-card shadow-soft rounded-lg p-6">
        <svg class="w-8 h-8 text-accent/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <div class="flex gap-1 mb-4">
          ${Array(5).fill(0).map(() => '<svg class="w-4 h-4 fill-accent text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>').join('')}
        </div>
        <p class="text-foreground mb-6 leading-relaxed">"Müşteri yorumu placeholder. Hizmet deneyimi hakkında detaylı geri bildirim burada yer alacak."</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-medium">M</div>
          <div>
            <p class="font-medium text-foreground">Müşteri Adı 1</p>
            <p class="text-sm text-muted-foreground">Araç Modeli</p>
          </div>
        </div>
      </div>
      <div class="bg-card shadow-soft rounded-lg p-6">
        <svg class="w-8 h-8 text-accent/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <div class="flex gap-1 mb-4">
          ${Array(5).fill(0).map(() => '<svg class="w-4 h-4 fill-accent text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>').join('')}
        </div>
        <p class="text-foreground mb-6 leading-relaxed">"Müşteri yorumu placeholder. Hizmet deneyimi hakkında detaylı geri bildirim burada yer alacak."</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-medium">M</div>
          <div>
            <p class="font-medium text-foreground">Müşteri Adı 2</p>
            <p class="text-sm text-muted-foreground">Araç Modeli</p>
          </div>
        </div>
      </div>
      <div class="bg-card shadow-soft rounded-lg p-6">
        <svg class="w-8 h-8 text-accent/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <div class="flex gap-1 mb-4">
          ${Array(5).fill(0).map(() => '<svg class="w-4 h-4 fill-accent text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>').join('')}
        </div>
        <p class="text-foreground mb-6 leading-relaxed">"Müşteri yorumu placeholder. Hizmet deneyimi hakkında detaylı geri bildirim burada yer alacak."</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-medium">M</div>
          <div>
            <p class="font-medium text-foreground">Müşteri Adı 3</p>
            <p class="text-sm text-muted-foreground">Araç Modeli</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 bg-background">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="text-sm font-medium text-accent uppercase tracking-wider">Galeri</span>
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Çalışmalarımızdan Örnekler</h2>
      <p class="text-muted-foreground">Her araç, bizim için özel bir proje. İşte sonuçlarımızdan bazıları.</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-300">
        <img src="./assets/gallery-1-xRyl1H33.jpg" alt="Köpüklü Dış Yıkama" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span class="text-xs text-accent font-medium">Dış Yıkama</span>
          <h4 class="text-white font-semibold">Köpüklü Dış Yıkama</h4>
        </div>
      </div>
      <div class="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-300">
        <img src="./assets/gallery-2-B_Isqw5p.jpg" alt="Parlak Boya Sonucu" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span class="text-xs text-accent font-medium">Detaylı Bakım</span>
          <h4 class="text-white font-semibold">Parlak Boya Sonucu</h4>
        </div>
      </div>
      <div class="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-300">
        <img src="./assets/gallery-3-B4L9BmSR.jpg" alt="İç Mekan Temizliği" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span class="text-xs text-accent font-medium">İç Temizlik</span>
          <h4 class="text-white font-semibold">İç Mekan Temizliği</h4>
        </div>
      </div>
      <div class="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-300">
        <img src="./assets/gallery-4-CinHsDS_.jpg" alt="Jant & Lastik Temizliği" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span class="text-xs text-accent font-medium">Detaylı Bakım</span>
          <h4 class="text-white font-semibold">Jant & Lastik Temizliği</h4>
        </div>
      </div>
      <div class="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-300">
        <img src="./assets/gallery-5-Bz3sJC3A.jpg" alt="Seramik Kaplama" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span class="text-xs text-accent font-medium">Premium Hizmet</span>
          <h4 class="text-white font-semibold">Seramik Kaplama</h4>
        </div>
      </div>
      <div class="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-300">
        <img src="./assets/gallery-6-C6Yxq53k.jpg" alt="Profesyonel Tesis" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span class="text-xs text-accent font-medium">Çalışma Alanı</span>
          <h4 class="text-white font-semibold">Profesyonel Tesis</h4>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
  <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center max-w-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">CTA Başlık Placeholder</h2>
      <p class="text-lg text-white/80 mb-8">CTA açıklama placeholder. Randevu alma çağrısı burada yer alacak.</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="iletisim.html" class="inline-flex items-center justify-center rounded-md bg-white text-primary hover:bg-white/90 shadow-elevated text-base px-8 py-3">
          Hemen Randevu Al
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
        <a href="tel:+90XXXXXXXXXX" class="inline-flex items-center justify-center rounded-md bg-white text-primary hover:bg-white/90 shadow-elevated text-base px-8 py-3">
          <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          Bizi Arayın
        </a>
      </div>
    </div>
  </div>
</section>
`;

writeFileSync(join(staticPath, 'index.html'), getBaseHTML('AutoCare Oto Yıkama - Ana Sayfa', indexContent, '/'));

const hizmetlerContent = `
<section class="py-16 md:py-24 bg-gradient-hero">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Hizmet Paketlerimiz</h1>
    <p class="text-lg text-white/80 max-w-xl mx-auto">Her ihtiyaca uygun paketlerle aracınıza özel bakım çözümleri sunuyoruz.</p>
  </div>
</section>

<section class="py-16 md:py-24 bg-background">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${[
        { id: 1, icon: 'Droplets', title: 'Dış Yıkama', description: 'Hızlı ve etkili dış temizlik için ideal seçim.', price: '150', duration: '~20 dk', features: ['Köpüklü yıkama', 'Basınçlı durulama', 'Kurulama', 'Cam temizliği'] },
        { id: 2, icon: 'Car', title: 'İç Temizlik', description: 'Aracınızın iç mekanını derinlemesine temizliyoruz.', price: '250', duration: '~45 dk', features: ['Koltuk süpürme', 'Torpido & konsol silme', 'Paspas temizliği', 'Cam içi temizlik', 'Koku giderme'] },
        { id: 3, icon: 'Sparkles', title: 'İç + Dış Komple', description: 'En çok tercih edilen tam bakım paketi.', price: '350', duration: '~1 saat', popular: true, features: ['Dış yıkama (köpük + durulama)', 'İç temizlik komple', 'Cam temizliği (iç + dış)', 'Torpido cilası', 'Lastik parlatma', 'Oto kokusu'] },
        { id: 4, icon: 'Shield', title: 'Detaylı Bakım', description: 'Profesyonel ekipmanlarla kapsamlı bakım.', price: '550', duration: '~2 saat', features: ['İç + Dış Komple paket', 'Motor yıkama', 'Jant detay temizliği', 'Plastik aksam yenileme', 'Deri bakım (varsa)', 'Boya koruma spreyi'] },
        { id: 5, icon: 'Gem', title: 'Seramik Kaplama', description: 'Uzun süreli koruma ve showroom parlaklığı.', price: '2.500', duration: '~1 gün', premium: true, features: ['Detaylı yıkama & hazırlık', 'Boya düzeltme (polish)', 'Nano seramik kaplama', 'Cam kaplama', 'Jant kaplama', '6 ay koruma garantisi'] },
        { id: 6, icon: 'Brush', title: 'Koltuk Yıkama', description: 'Kumaş ve deri koltuklar için derin temizlik.', price: '400', duration: '~3 saat', features: ['Leke çıkarma', 'Buhar temizliği', 'Antibakteriyel işlem', 'Kurutma', 'Koku giderme'] },
      ].map(pkg => `
        <div class="relative overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 flex flex-col h-full ${pkg.popular ? 'border-accent shadow-card' : pkg.premium ? 'border-primary shadow-card bg-gradient-to-br from-card to-secondary/30' : 'border-border'} rounded-lg bg-card">
          ${pkg.popular ? '<div class="absolute top-4 right-4"><span class="px-3 py-1 bg-gradient-accent text-white text-xs font-medium rounded-full">En Popüler</span></div>' : ''}
          ${pkg.premium ? '<div class="absolute top-4 right-4"><span class="px-3 py-1 bg-gradient-hero text-white text-xs font-medium rounded-full">Premium</span></div>' : ''}
          <div class="p-6 flex-grow">
            <div class="w-12 h-12 rounded-xl ${pkg.premium ? 'bg-gradient-hero' : 'bg-secondary'} flex items-center justify-center mb-4">
              <svg class="w-6 h-6 ${pkg.premium ? 'text-white' : 'text-primary'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-foreground">${pkg.title}</h3>
            <p class="text-sm text-muted-foreground mb-4">${pkg.duration}</p>
            <p class="text-muted-foreground text-sm mb-4">${pkg.description}</p>
            <div class="flex items-baseline gap-1 mb-4">
              <span class="text-3xl font-bold text-primary">${pkg.price}</span>
              <span class="text-lg text-muted-foreground">TL</span>
            </div>
            <ul class="space-y-2 pt-2 mb-6">
              ${pkg.features.map(feature => `
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <svg class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>${feature}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="p-6 pt-0 mt-auto">
            <a href="iletisim.html" class="inline-flex items-center justify-center w-full rounded-md ${pkg.popular || pkg.premium ? 'bg-gradient-hero hover:opacity-90 text-white' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'} px-4 py-2 text-sm font-medium">
              Randevu Al
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<section class="py-12 bg-secondary">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div>
        <h4 class="font-semibold text-foreground mb-2">Esnek Ödeme</h4>
        <p class="text-sm text-muted-foreground">Nakit ve kredi kartı ile ödeme imkanı</p>
      </div>
      <div>
        <h4 class="font-semibold text-foreground mb-2">Randevusuz Hizmet</h4>
        <p class="text-sm text-muted-foreground">Müsaitlik durumuna göre randevusuz da gelebilirsiniz</p>
      </div>
      <div>
        <h4 class="font-semibold text-foreground mb-2">Memnuniyet Garantisi</h4>
        <p class="text-sm text-muted-foreground">Hizmetimizden memnun kalmazsanız tekrar yaparız</p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-gradient-hero">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Özel Talepleriniz mi Var?</h2>
    <p class="text-white/80 mb-6 max-w-md mx-auto">Filo araçları, kurumsal anlaşmalar veya özel istekleriniz için bizimle iletişime geçin.</p>
    <a href="iletisim.html" class="inline-flex items-center justify-center rounded-md bg-white text-primary hover:bg-white/90 px-6 py-3 text-base font-medium">
      Bizimle İletişime Geçin
      <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
      </svg>
    </a>
  </div>
</section>
`;

writeFileSync(join(staticPath, 'hizmetler.html'), getBaseHTML('Hizmet Paketlerimiz - AutoCare', hizmetlerContent, '/hizmetler'));

const iletisimContent = `
<section class="py-16 md:py-24 bg-gradient-hero">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">İletişim</h1>
    <p class="text-lg text-white/80 max-w-xl mx-auto">İletişim sayfası açıklama placeholder. Hemen randevu alın.</p>
  </div>
</section>

<section class="py-16 md:py-24 bg-background">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">Bize Ulaşın</h2>
          <p class="text-muted-foreground">İletişim bilgileri açıklama placeholder.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-card shadow-soft rounded-lg p-4 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-medium text-foreground text-sm">Adres</h4>
              <p class="text-muted-foreground text-sm">Adres placeholder, Lefkoşa, KKTC</p>
            </div>
          </div>
          <div class="bg-card shadow-soft rounded-lg p-4 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-medium text-foreground text-sm">Telefon</h4>
              <p class="text-muted-foreground text-sm">+90 XXX XXX XX XX</p>
            </div>
          </div>
          <div class="bg-card shadow-soft rounded-lg p-4 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-medium text-foreground text-sm">E-posta</h4>
              <p class="text-muted-foreground text-sm">info@autocare.com</p>
            </div>
          </div>
          <div class="bg-card shadow-soft rounded-lg p-4 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-medium text-foreground text-sm">Çalışma Saatleri</h4>
              <p class="text-muted-foreground text-sm">Pzt - Cmt: 08:00 - 19:00</p>
            </div>
          </div>
        </div>
        <div class="aspect-video rounded-xl bg-muted flex items-center justify-center border border-border">
          <div class="text-center">
            <svg class="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <p class="text-muted-foreground">Harita Alanı Placeholder</p>
          </div>
        </div>
      </div>
      <div>
        <div class="bg-card shadow-card rounded-lg">
          <div class="p-6 border-b border-border">
            <h3 class="text-xl font-semibold text-foreground">Randevu Formu</h3>
          </div>
          <div class="p-6">
            <form class="space-y-4" onsubmit="event.preventDefault(); alert('Form gönderildi!');">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-foreground">Ad Soyad</label>
                  <input type="text" placeholder="Adınız Soyadınız" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium text-foreground">Telefon</label>
                  <input type="tel" placeholder="+90 XXX XXX XX XX" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-foreground">E-posta</label>
                <input type="email" placeholder="ornek@email.com" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-foreground">Araç Bilgisi</label>
                <input type="text" placeholder="Marka / Model / Yıl" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-foreground">Hizmet Seçimi</label>
                <input type="text" placeholder="İstediğiniz hizmet paketi" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-foreground">Mesajınız</label>
                <textarea placeholder="Ek bilgi veya isteklerinizi yazabilirsiniz..." rows="4" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></textarea>
              </div>
              <button type="submit" class="inline-flex items-center justify-center w-full rounded-md bg-gradient-hero hover:opacity-90 text-white px-4 py-3 text-sm font-medium">
                <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                Randevu Talebi Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

writeFileSync(join(staticPath, 'iletisim.html'), getBaseHTML('İletişim - AutoCare', iletisimContent, '/iletisim'));

const assetsPath = join(staticPath, 'assets');
if (!existsSync(assetsPath)) {
  mkdirSync(assetsPath, { recursive: true });
}

function copyRecursive(src, dest) {
  const entries = readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      if (!existsSync(destPath)) {
        mkdirSync(destPath, { recursive: true });
      }
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursive(join(distPath, 'assets'), assetsPath);

const otherFiles = ['favicon.ico', 'robots.txt', 'placeholder.svg'];
otherFiles.forEach(file => {
  const src = join(distPath, file);
  if (existsSync(src)) {
    copyFileSync(src, join(staticPath, file));
  }
});

console.log('✅ Pure static HTML files exported to:', staticPath);
console.log('📄 Pages created:');
console.log('   - index.html (Ana Sayfa)');
console.log('   - hizmetler.html (Hizmetler)');
console.log('   - iletisim.html (İletişim)');
console.log('📦 All assets copied to assets/ folder');
