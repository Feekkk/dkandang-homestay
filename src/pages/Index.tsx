import { HeroSection } from "@/components/HeroSection";
import { QuickOverview } from "@/components/QuickOverview";
import { AboutHomestay } from "@/components/AboutHomestay";
import { RoomsSpaces } from "@/components/RoomsSpaces";
import { GuestExperience } from "@/components/GuestExperience";
import { HouseRules } from "@/components/HouseRules";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickOverview />
      <AboutHomestay />
      <RoomsSpaces />
      <GuestExperience />
      <HouseRules />
      <ContactSection />
    </div>
  );
};

export default Index;
