import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyPartner from "@/components/WhyPartner";
import OpportunitySnapshot from "@/components/OpportunitySnapshot";
import HowToBecomePartner from "@/components/HowToBecomePartner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhyPartner />
      <OpportunitySnapshot />
      <HowToBecomePartner />
      <Footer />
    </div>
  );
}
