import { MapPin, Target, Cog, Users, Mail, Phone, MapPinIcon } from "lucide-react";
import AboutHero from "../components/about-sections/AboutHero";
import MissionSection from "../components/about-sections/Mission";
import HowItWorksSection from "../components/about-sections/HowItWorks";
import TeamSection from "../components/about-sections/Team";
import ContactSection from "../components/about-sections/Contact";

function About() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <AboutHero />

        {/* Mission Section */}
        <MissionSection />
        

        {/* How It Works Section */}
        <HowItWorksSection />
        

        {/* Team Section */}
        <TeamSection />

        {/* Contact Form Section */}
        <ContactSection />
      </main>
    </div>
  );
};

export default About;
