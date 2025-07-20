import { Wifi, ChefHat, Car, Coffee, Bath, Tv, Shield, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi", description: "Work comfortably" },
  { icon: ChefHat, label: "Full Kitchen", description: "Cook with ease" },
  { icon: Car, label: "Free Parking", description: "Secure & convenient" },
  { icon: Coffee, label: "Coffee Station", description: "Fresh every morning" },
  { icon: Bath, label: "Premium Bath", description: "Luxury amenities" },
  { icon: Tv, label: "Smart TV", description: "Netflix & streaming" },
  { icon: Shield, label: "Safe & Secure", description: "24/7 monitored" },
  { icon: Heart, label: "Pet Friendly", description: "Bring your furry friend" },
];

export const QuickOverview = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully designed amenities to make your stay comfortable and memorable
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