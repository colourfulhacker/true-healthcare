import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TerritoryChecker from "@/components/TerritoryChecker";
import FranchiseForm from "@/components/FranchiseForm";

export default function Apply() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Apply Now Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4" data-testid="heading-apply">
              Apply for Your Exclusive TRUE Healthcare™ Franchise
            </h1>
            <p className="text-xl text-muted-foreground">
              Secure your territory and start your journey to business success
            </p>
          </div>
          
          {/* Interactive Slot Checker */}
          <TerritoryChecker />
          
          {/* Franchise Application Form */}
          <FranchiseForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
