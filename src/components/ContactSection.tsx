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
  Coffee
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-homestay-warm border-homestay-warm">
            <Coffee className="w-4 h-4 mr-2" />
            Ready to Book?
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Plan Your Perfect
            <span className="block text-homestay-warm">Homestay Experience</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We'd love to welcome you to our home. Reach out with any questions 
            or start your booking journey today.
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
                  Available This Month
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Ready to Book Your Stay?
              </h3>
              
              <p className="text-white/90 mb-8 leading-relaxed">
                Check our real-time availability and secure your dates. 
                Special rates available for extended stays of 7+ nights.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">$125</div>
                  <div className="text-white/80 text-sm">per night (avg)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">7+ days</div>
                  <div className="text-white/80 text-sm">15% discount</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" className="bg-white text-homestay-earth hover:bg-white/90 border-white flex-1">
                  <Calendar className="w-5 h-5 mr-2" />
                  Check Availability
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm flex-1">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask Questions
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
                    <h4 className="font-semibold text-foreground">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">Usually within 1 hour</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Call: +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-homestay-earth" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <p className="text-sm text-muted-foreground">Detailed inquiries</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  hello@ourhomestay.com
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-homestay-sage rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-homestay-earth" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-sm text-muted-foreground">Heritage District</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Downtown Heritage District<br />
                  5 minutes to City Center<br />
                  Walking distance to attractions
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-homestay-cream">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-homestay-earth mr-2" />
                  <h4 className="font-semibold text-homestay-earth">Response Times</h4>
                </div>
                <div className="space-y-2 text-sm text-homestay-earth">
                  <div className="flex justify-between">
                    <span>Phone calls:</span>
                    <span>Immediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Messages:</span>
                    <span>Within 1 hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Booking requests:</span>
                    <span>Within 30 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Have special requirements or planning a longer stay? 
            <br className="hidden sm:block" />
            We'd love to create a custom experience just for you.
          </p>
          <Button variant="warm" size="xl">
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};