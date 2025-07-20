import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Mike",
    location: "Toronto, Canada",
    rating: 5,
    date: "December 2023",
    text: "Absolutely magical stay! The attention to detail was incredible, from the welcome basket to the cozy reading nook. Felt like staying with dear friends.",
    highlight: "Felt like home"
  },
  {
    name: "James Chen",
    location: "Singapore",
    rating: 5,
    date: "November 2023", 
    text: "Perfect location and beautifully designed space. The hosts went above and beyond to make sure we had everything we needed. The kitchen was a dream to cook in!",
    highlight: "Perfect location"
  },
  {
    name: "Emma & Family",
    location: "Sydney, Australia",
    rating: 5,
    date: "October 2023",
    text: "Our kids loved the space and we felt so comfortable. The neighborhood is wonderful for walking, and the house has everything you could possibly need.",
    highlight: "Family perfect"
  },
  {
    name: "David Rodriguez",
    location: "Barcelona, Spain", 
    rating: 5,
    date: "September 2023",
    text: "Exceptional hospitality and a truly unique space. The blend of vintage charm and modern amenities is perfect. Already planning our return visit!",
    highlight: "Exceptional hospitality"
  }
];

export const GuestExperience = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-homestay-warm border-homestay-warm">
            <Star className="w-4 h-4 mr-2 fill-current" />
            4.9 Average Rating
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stories from Our
            <span className="block text-homestay-warm">Cherished Guests</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nothing makes us happier than hearing about the wonderful memories 
            created during each stay. Here's what our guests have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-homestay-sage rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-homestay-earth" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <Badge variant="secondary" className="mb-4 bg-homestay-cream text-homestay-earth">
                  {testimonial.highlight}
                </Badge>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Guest Info */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 bg-gradient-hero">
                    <AvatarFallback className="bg-homestay-warm text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location} • {testimonial.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-homestay-warm mb-2">500+</div>
            <div className="text-muted-foreground">Happy Guests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-homestay-warm mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-homestay-warm mb-2">98%</div>
            <div className="text-muted-foreground">Return Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-homestay-warm mb-2">127</div>
            <div className="text-muted-foreground">5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};