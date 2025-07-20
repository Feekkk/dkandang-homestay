import { Wifi, ChefHat, Car, Activity, Bath, Tv, Shield, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const amenities = [
  { icon: Wifi, label: "Kemudahan Wi-Fi", description: "Bekerja dengan selesa" },
  { icon: ChefHat, label: "Dapur Lengkap", description: "Masak dengan mudah" },
  { icon: Car, label: "Tempat Letak Kereta Percuma", description: "Selamat & mudah" },
  { icon: Activity, label: "Sukan dan Rekreasi", description: "Aktiviti luar yang menyeronokkan" },
  { icon: Bath, label: "Kolam Renang", description: "Berenang dengan selesa" },
  { icon: Tv, label: "TV Pintar", description: "Astro & Penstriman" },
  { icon: Shield, label: "Selamat & Terjamin", description: "Kawasan Berpagar" },
  { icon: Heart, label: "Mesra Haiwan Peliharaan", description: "Mancing bersama keluarga" },
];

export const QuickOverview = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Kemudahan Disediakan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kemudahan yang direka dengan teliti untuk memastikan penginapan anda selesa dan tidak dapat dilupakan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-hero rounded-xl flex items-center justify-center">
                <amenity.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{amenity.label}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};