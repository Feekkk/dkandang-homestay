import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bed, Bath, Users, Maximize, Sofa, UtensilsCrossed, Wifi, Coffee, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Rooms & Spaces
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover every corner of D'Kandang Homestay, designed for your comfort and memorable experiences.
          </p>
        </div>
      </section>

      {/* Detailed Rooms Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Add detailed room information here */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Complete Room Details Coming Soon
              </h2>
              <p className="text-muted-foreground">
                We're working on detailed room galleries and information. 
                For now, please contact us for more details about our accommodations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;