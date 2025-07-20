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
              Our Story
            </Badge>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Meet the Family Behind
              <span className="block text-homestay-warm">D'Kandang Homestay</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hi there! I'm <strong>Encik Azmer</strong>, the owner for this lovely homestay. 
               What started as a way to meet new people has become our passion. We love watching city folks slow down, 
              enjoy our homemade breakfast, and fall asleep to the sounds of nature. Every guest becomes part of our extended family
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-homestay-earth" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Guests Welcomed</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-homestay-earth" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Guest Rating</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-homestay-earth" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">3+ Years</div>
                  <div className="text-sm text-muted-foreground">Hosting Experience</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-homestay-earth" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Made with Love</div>
                </div>
              </div>
            </div>

            <Button variant="warm" size="lg">
              <Heart className="w-5 h-5 mr-2" />
              Come Meet Us!
            </Button>
          </div>

          {/* Photo Grid - Family & Homestay Photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-48 bg-gradient-to-br from-homestay-warm to-homestay-sage flex items-center justify-center">
                  <div className="text-white text-center">
                    <Home className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Our Family Home</p>
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-32 bg-gradient-to-br from-homestay-sage to-homestay-cream flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs">Encik Azmer & Family</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-4 pt-8">
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-32 bg-gradient-to-br from-homestay-cream to-accent flex items-center justify-center">
                  <div className="text-white text-center">
                    <Star className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs">Guest Memories</p>
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <div className="text-white text-center">
                    <Heart className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Kampung Life</p>
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