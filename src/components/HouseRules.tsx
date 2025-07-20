import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Cigarette, 
  Users, 
  Volume2, 
  PawPrint, 
  Coffee,
  Heart,
  Shield
} from "lucide-react";

const rules = [
  {
    icon: Clock,
    title: "Flexible Check-in",
    description: "Check-in: After 3 PM • Check-out: Before 11 AM",
    detail: "Early check-in or late check-out available upon request",
    type: "positive"
  },
  {
    icon: Cigarette,
    title: "Smoke-Free Space",
    description: "No smoking inside the house",
    detail: "Outdoor patio area available for smokers",
    type: "neutral"
  },
  {
    icon: Users,
    title: "Guest Capacity",
    description: "Maximum 6 guests",
    detail: "Additional guests may incur extra charges",
    type: "neutral"
  },
  {
    icon: Volume2,
    title: "Quiet Hours",
    description: "Respectful noise levels after 10 PM",
    detail: "We're in a residential area with lovely neighbors",
    type: "neutral"
  },
  {
    icon: PawPrint,
    title: "Pet Welcome",
    description: "Well-behaved pets are welcome",
    detail: "Small additional fee applies, please mention during booking",
    type: "positive"
  },
  {
    icon: Coffee,
    title: "Kitchen Access",
    description: "Full kitchen available 24/7",
    detail: "Please clean up after use and be mindful of others",
    type: "positive"
  }
];

export const HouseRules = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-homestay-earth border-homestay-earth">
            <Heart className="w-4 h-4 mr-2" />
            House Guidelines
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple Guidelines for a
            <span className="block text-homestay-warm">Wonderful Stay</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in creating a comfortable, respectful environment for everyone. 
            These friendly guidelines help ensure all our guests have an amazing experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {rules.map((rule, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${
                rule.type === 'positive' ? 'bg-white hover:bg-green-50' : 'bg-white hover:bg-blue-50'
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    rule.type === 'positive' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-homestay-sage text-homestay-earth'
                  }`}>
                    <rule.icon className="w-6 h-6" />
                  </div>
                  {rule.type === 'positive' && (
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Guest Friendly
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg text-foreground">{rule.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-3 font-medium">
                  {rule.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {rule.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Card */}
        <Card className="max-w-4xl mx-auto border-0 shadow-hover bg-white">
          <CardContent className="p-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-homestay-warm rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Your Safety & Security
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our property features secure entry, smoke detectors, and emergency information. 
                  We're available 24/7 for any questions or concerns during your stay.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-homestay-warm rounded-full mr-3" />
                    24/7 Host Support
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-homestay-warm rounded-full mr-3" />
                    Secure Key Exchange
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-homestay-warm rounded-full mr-3" />
                    Emergency Contacts Provided
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-homestay-warm rounded-full mr-3" />
                    Local Area Guide Included
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};