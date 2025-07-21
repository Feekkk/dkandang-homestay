import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Users, 
  Maximize, 
  Sofa, 
  UtensilsCrossed, 
  Wifi, 
  Coffee, 
  Car,
  MapPin,
  Clock,
  Star,
  Camera,
  Mountain,
  Waves,
  TreePine,
  ShoppingBag,
  Navigation
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const rooms = [
  {
    title: "Master Bedroom",
    subtitle: "King-size comfort with ensuite",
    features: ["King Size Bed", "Private Bathroom", "Air Conditioning", "Wardrobe", "Garden View"],
    capacity: "2 guests",
    size: "320 sq ft",
    icon: Bed,
    gradient: "from-homestay-warm to-accent",
    description: "Our spacious master bedroom offers the perfect retreat after a day of exploring. Wake up to beautiful garden views and enjoy the comfort of premium bedding."
  },
  {
    title: "Cozy Twin Room",
    subtitle: "Perfect for friends or family",
    features: ["Two Single Beds", "Shared Bathroom", "Fan Cooling", "Storage Space", "Rice Field View"],
    capacity: "2 guests",
    size: "280 sq ft",
    icon: Bed,
    gradient: "from-homestay-sage to-homestay-warm",
    description: "Ideal for friends or family members, this cozy room overlooks the serene rice fields. Simple comfort with authentic kampung charm."
  },
  {
    title: "Living Area",
    subtitle: "Shared space for relaxation",
    features: ["Comfortable Seating", "Smart TV", "Reading Corner", "Board Games", "Air Conditioning"],
    capacity: "6 guests",
    size: "450 sq ft",
    icon: Sofa,
    gradient: "from-homestay-cream to-homestay-sage",
    description: "Our welcoming living area is perfect for family gatherings, movie nights, or simply relaxing with a good book."
  },
  {
    title: "Modern Kitchen",
    subtitle: "Cook authentic local meals",
    features: ["Full Kitchen", "Dining Table", "Coffee Station", "Cooking Utensils", "Refrigerator"],
    capacity: "6 guests",
    size: "200 sq ft",
    icon: UtensilsCrossed,
    gradient: "from-accent to-homestay-cream",
    description: "Fully equipped kitchen where you can prepare your own meals or try cooking traditional Malaysian dishes with ingredients from local markets."
  },
];

const attractions = [
  {
    title: "Sekinchan Rice Fields",
    distance: "15 mins drive",
    type: "Nature & Photography",
    description: "Vast golden rice paddies perfect for photography, especially during sunset. Experience authentic farming life.",
    features: ["Sunset Views", "Photography Spots", "Farm Tours", "Local Produce"],
    icon: TreePine,
    gradient: "from-green-400 to-green-600"
  },
  {
    title: "Sekinchan Beach",
    distance: "20 mins drive",
    type: "Beach & Seafood",
    description: "Enjoy fresh seafood by the beach and watch beautiful sunsets over the Straits of Malacca.",
    features: ["Fresh Seafood", "Sunset Views", "Beach Walk", "Local Restaurants"],
    icon: Waves,
    gradient: "from-blue-400 to-blue-600"
  },
  {
    title: "Kuala Selangor Nature Park",
    distance: "25 mins drive",
    type: "Wildlife & Nature",
    description: "Home to fireflies, migratory birds, and mangrove forests. Perfect for nature lovers.",
    features: ["Firefly Tour", "Bird Watching", "Mangrove Walk", "Nature Education"],
    icon: Mountain,
    gradient: "from-emerald-400 to-emerald-600"
  },
  {
    title: "Tanjong Karang Town",
    distance: "10 mins drive",
    type: "Local Culture",
    description: "Experience local life, traditional markets, and authentic Malaysian street food.",
    features: ["Local Markets", "Street Food", "Traditional Shops", "Cultural Sites"],
    icon: ShoppingBag,
    gradient: "from-orange-400 to-orange-600"
  },
];

const Rooms = () => {
  const navigate = useNavigate();

  const handleGetDirections = (place: string) => {
    // You can add specific coordinates for each attraction later
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(place + " near Tanjong Karang Selangor")}`;
    window.open(googleMapsUrl, '_blank');
  };

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

      {/* Rooms Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Bed className="w-4 h-4 mr-2" />
                Room Details
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comfortable Accommodations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each space thoughtfully designed for your comfort and authentic kampung experience.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {rooms.map((room, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-hover hover:shadow-warm transition-all duration-500 group">
                  <div className={`h-48 bg-gradient-to-br ${room.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <room.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        {room.capacity}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{room.title}</h3>
                      <p className="text-white/80 text-sm">{room.subtitle}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {room.capacity}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Maximize className="w-4 h-4 mr-2" />
                        {room.size}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Room Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {room.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-homestay-warm rounded-full mr-3" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Explore Around
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Nearby Attractions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the beauty and culture of Selangor with these amazing places just minutes away from our homestay.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {attractions.map((attraction, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-hover hover:shadow-warm transition-all duration-500 group">
                  <div className={`h-48 bg-gradient-to-br ${attraction.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <attraction.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {attraction.distance}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-2">
                        {attraction.type}
                      </Badge>
                      <h3 className="text-xl font-bold text-white">{attraction.title}</h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {attraction.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">What to Expect</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {attraction.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                            <Star className="w-3 h-3 mr-2 text-yellow-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-homestay-warm group-hover:text-white group-hover:border-homestay-warm transition-all duration-300"
                      onClick={() => handleGetDirections(attraction.title)}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Need recommendations for your itinerary? We're happy to help plan your perfect day out!
              </p>
              <Button variant="warm" size="lg">
                <Coffee className="w-5 h-5 mr-2" />
                Ask for Local Tips
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;