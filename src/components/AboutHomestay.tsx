import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart, Home, Star } from "lucide-react";

export const AboutHomestay = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-6 text-homestay-warm border-homestay-warm">
              <Home className="w-4 h-4 mr-2" />
              Kisah Kami
            </Badge>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Kenali Keluarga di Sebalik
              <span className="block text-homestay-warm">D'Kandang Homestay</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Assalamualaikum! Saya <strong>Encik Azmer</strong>, pemilik homestay yang indah ini. 
              Apa yang bermula sebagai cara untuk bertemu orang baru kini menjadi minat kami. Kami suka melihat orang bandar berehat, 
              menikmati sarapan buatan sendiri, dan tidur lena dengan bunyi alam semula jadi. Setiap tetamu menjadi sebahagian daripada keluarga besar kami.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-homestay-earth" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Tetamu Disambut</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-homestay-earth" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Penilaian Tetamu</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-homestay-earth" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">3+ Tahun</div>
                  <div className="text-sm text-muted-foreground">Pengalaman Menjadi Tuan Rumah</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-homestay-earth" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Dibuat Dengan Kasih Sayang</div>
                </div>
              </div>
            </div>

            <Button variant="warm" size="lg">
              <Heart className="w-5 h-5 mr-2" />
              Jom Berkenalan!
            </Button>
          </div>

          {/* Photo Grid - Family & Homestay Photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-48 bg-gradient-to-br from-homestay-warm to-homestay-sage flex items-center justify-center">
                  <div className="text-white text-center">
                    <Home className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Rumah Keluarga Kami</p>
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-32 bg-gradient-to-br from-homestay-sage to-homestay-cream flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs">Encik Azmer & Keluarga</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-4 pt-8">
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-32 bg-gradient-to-br from-homestay-cream to-accent flex items-center justify-center">
                  <div className="text-white text-center">
                    <Star className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs">Kenangan Tetamu</p>
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <div className="text-white text-center">
                    <Heart className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Kehidupan Kampung</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};