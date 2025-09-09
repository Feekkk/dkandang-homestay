import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Star,
  Coffee,
  Instagram,
  MessageSquare
} from "lucide-react";

export const ContactSection = () => {
  const handleSocialClick = (platform: string) => {
    const socialLinks = {
      instagram: 'https://www.instagram.com/dkandang_homestay',
      whatsapp: 'https://wa.me/60193804610'
    };
    
    window.open(socialLinks[platform as keyof typeof socialLinks], '_blank');
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-homestay-warm border-homestay-warm">
            <Coffee className="w-4 h-4 mr-2" />
            Sedia untuk Tempahan?
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Jom Rancang
            <span className="block text-homestay-warm">Pengalaman Homestay Anda</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami teruja untuk menyambut anda ke rumah kami. Hubungi kami untuk sebarang pertanyaan
            atau mulakan tempahan anda hari ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Booking Card */}
          <Card className="lg:col-span-2 border-0 shadow-hover bg-gradient-hero text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Tersedia Bulan Ini
                  </Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Sedia untuk Tempah Penginapan?
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                Semak ketersediaan masa sebenar dan tempah tarikh anda. 
                Kadar istimewa untuk penginapan lebih 7 malam.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">RM 180</div>
                  <div className="text-white/80 text-sm">setiap malam (purata)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">7+ days</div>
                  <div className="text-white/80 text-sm">Terbuka untuk tempahan kecuali tarikh tidak tersedia</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="flex-1 bg-white text-homestay-earth hover:bg-white/90"
                  onClick={() => handleSocialClick('whatsapp')}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Tempah melalui WhatsApp
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="flex-1 bg-white text-homestay-earth hover:bg-white/90"
                  onClick={() => handleSocialClick('whatsapp')}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Tempah melalui Panggilan
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-homestay-earth" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Respon Pantas</h4>
                    <p className="text-sm text-muted-foreground">Kebiasaannya dalam 1 jam</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Panggil: +6019-380-XXXX
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Panggil: +6019-380-XXXX
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-homestay-earth" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ikuti Kami</h4>
                    <p className="text-sm text-muted-foreground">Media Sosial</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleSocialClick('instagram')}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleSocialClick('whatsapp')}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-homestay-earth" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Lokasi</h4>
                    <p className="text-sm text-muted-foreground">Tanjong Karang, Selangor</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Lot 4578, Jalan Masjid 3<br />
                  Kampung Sri Tiram Jaya, 45500<br />
                  Tanjong Karang, Selangor
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-homestay-cream">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-homestay-earth mr-2" />
                  <h4 className="font-semibold text-homestay-earth">Masa Respon</h4>
                </div>
                <div className="space-y-2 text-sm text-homestay-earth">
                  <div className="flex justify-between">
                    <span>Panggilan telefon:</span>
                    <span>Serta-merta</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mesej:</span>
                    <span>Dalam 1 jam</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">

          {/* Tech Stack & Copyright */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">Dibina dengan teknologi moden</h4>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <Badge variant="outline" className="text-muted-foreground">React</Badge>
                <Badge variant="outline" className="text-muted-foreground">TypeScript</Badge>
                <Badge variant="outline" className="text-muted-foreground">Tailwind CSS</Badge>
                <Badge variant="outline" className="text-muted-foreground">Vite</Badge>
                <Badge variant="outline" className="text-muted-foreground">Lucide Icons</Badge>
                <Badge variant="outline" className="text-muted-foreground">Shadcn/ui</Badge>
              </div>
            </div>
            
            <div className="text-xs text-muted-foreground">
              <p className="mb-2">
                © {new Date().getFullYear()} D'Kandang Homestay. Semua hak cipta terpelihara.
              </p>
              <p>
                Laman web direka dan dibangunkan untuk pengalaman homestay yang asli.
                <br className="hidden sm:block" />
                Dibina oleh Solo Developers. Lawati GitHub saya untuk projek lain. @Feekkk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};