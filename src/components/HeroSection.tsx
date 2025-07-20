import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-homestay.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Rating Badge */}
        <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
          4.9 • Superhost • 127 Reviews
        </Badge>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to Your
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Perfect Homestay
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience authentic comfort in our beautifully designed space. 
          Your home away from home awaits.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center text-white/80 mb-10">
          <MapPin className="w-5 h-5 mr-2" />
          <span className="text-lg">Downtown Heritage District • 5 min to City Center</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="min-w-48">
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Stay
          </Button>
          <Button variant="outline" size="xl" className="min-w-48 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
            Virtual Tour
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-white/70 text-sm">Bedrooms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">6</div>
            <div className="text-white/70 text-sm">Guests</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">2</div>
            <div className="text-white/70 text-sm">Bathrooms</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};