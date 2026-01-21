import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { id: 1, src: gallery1, title: "Köpüklü Dış Yıkama", category: "Dış Yıkama" },
  { id: 2, src: gallery2, title: "Parlak Boya Sonucu", category: "Detaylı Bakım" },
  { id: 3, src: gallery3, title: "İç Mekan Temizliği", category: "İç Temizlik" },
  { id: 4, src: gallery4, title: "Jant & Lastik Temizliği", category: "Detaylı Bakım" },
  { id: 5, src: gallery5, title: "Seramik Kaplama", category: "Premium Hizmet" },
  { id: 6, src: gallery6, title: "Profesyonel Tesis", category: "Çalışma Alanı" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Galeri
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Çalışmalarımızdan Örnekler
          </h2>
          <p className="text-muted-foreground">
            Her araç, bizim için özel bir proje. İşte sonuçlarımızdan bazıları.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs text-accent font-medium">{item.category}</span>
                <h4 className="text-white font-semibold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-sm text-accent">{selectedImage.category}</span>
                  <h3 className="text-xl font-semibold text-white">{selectedImage.title}</h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
