import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";

export const AboutHomestay = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-6 text-homestay-warm border-homestay-warm">
              <Award className="w-4 h-4 mr-2" />
              Superhost • Est. 2019
            </Badge>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Labor of Love &
              <span className="block text-homestay-warm">Thoughtful Design</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our homestay was lovingly restored from a 1920s heritage home, blending vintage charm 
              with modern comfort. Every detail has been carefully curated to create a space where 
              memories are made and stories unfold.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-homestay-earth" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Guests</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-homestay-earth" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">5 Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
              </div>
            </div>

            <Button variant="warm" size="lg">
              <Heart className="w-5 h-5 mr-2" />
              Learn Our Story
            </Button>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-48 bg-gradient-to-br from-homestay-warm to-homestay-sage" />
              </Card>
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-32 bg-gradient-to-br from-homestay-sage to-homestay-cream" />
              </Card>
            </div>
            <div className="space-y-4 pt-8">
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-32 bg-gradient-to-br from-homestay-cream to-accent" />
              </Card>
              <Card className="overflow-hidden border-0 shadow-soft">
                <div className="h-48 bg-gradient-to-br from-accent to-primary" />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};